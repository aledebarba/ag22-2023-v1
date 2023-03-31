<?php 

// test if class CreateSuperBlock exists if dont, create it
if( class_exists('SuperblockDataModel' ) ) { return; }

class SuperblockDataModel { 
        private $base;
        private $singular;
        private $plural;
        private $Csingular;
        private $Cplural;
        private $labels;

        public function __construct($base, $labels=[]) {

            $this->base = $base;
            $this->singular = strtolower($base);
            $this->plural   = $this->singular.'s';
            $this->Csingular = ucfirst($this->singular);
            $this->Cplural   = ucfirst($this->plural);
            $this->labels = $labels;

            add_action( 'init', [$this, 'create_post_type'] );                      
        }
        
        public function create_post_type() {
            $singular = $this->singular;
            $plural   = $this->plural;
            $Csingular = $this->Csingular;
            $Cplural   = $this->Cplural;  

                                       
            $this->register_superblock();      
            $this->create_rest_route();

            $custom_labels = [
                'name' => $Cplural,
                'singular_name' => $Csingular,
                'menu_name' => $Cplural,
                'name_admin_bar' => $Csingular,
                'add_new' => 'Adicionar '.$singular,
                'add_new_item' => 'Adicionar '.$singular,
                'new_item' => 'Adicionando '.$singular,
                'edit_item' => 'Editar '.$singular,
                'view_item' => 'Ver '.$singular,
                'all_items' => 'Lista de '.$plural,
                'search_items' => 'Procurar na lista de '.$plural,
                'not_found' => 'Não encontrei nenhum resultado na lida de '.$plural,
                'not_found_in_trash' => 'Nenhum item registrado como excluído na lista de '.$plural
            ];
            
            register_post_type($plural, [
                'supports' => ['title', 'editor', 'excerpt', 'author', 'thumbnail'],
                'labels' => $custom_labels,
                'rewrite' => ['slug' => $plural ],
                'has_archive' => true,
                'public' => true,
                'publicly_queryable' => true,
                'query_var' => true,
                'show_in_rest' => true,
                'show_in_menu' => true,
                'show_ui' => true,
                'menu_position' => null,
                'menu_icon' => 'dashicons-superhero-alt',
                'template' => [
                    ['superblock/'.$singular, [
                        'lock' => [
                            'move' => true,
                            'remove' => true,
                        ],
                    ]],
                        ],
                'template_lock' => 'all',
            ]);
        }

        public function create_rest_route() {
            add_action('rest_api_init', function (){
                register_rest_route('database/v1', '/'.$this->plural, [
                    'methods' => 'GET',
                    'callback' => [$this, 'get_all'],
                    'permission_callback' => '__return_true',
                    'render_callback' => [
                        $this,
                        'theHTML',
                    ],
                ]);
            });
        }

        public function theHTML($attributes)
        {
            $data = json_encode($attributes);
            $res = <<<HTML
                <pre data-type='data-{$this->singular}' class="display: none">$data</pre>
            HTML;
    
            return $res;
        }


        public function get_all()
        {
            $args = [
                'post_type' => $this->plural,
                'posts_per_page' => -1,
            ];
            $query = new WP_Query($args);
            $posts = $query->posts;
            $data = [];
            foreach($posts as $post) {
                $data[] = [
                    'id' => $post->ID,
                    'title' => $post->post_title,
                    'author' => $post->post_author,
                    'thumbnail' => get_the_post_thumbnail_url($post->ID),
                    'slug' => $post->post_name,
                    'data' => parse_blocks($post->post_content)[0]['attrs'],
                ];
            }
            return $data;
        }

        public function register_superblock() {
            
            $singular = $this->singular;

            wp_register_style(
                'superblock-style-'.$singular,
                get_stylesheet_directory_uri().'/inc/data-models/'.$this->base.'/build/index.css'
            );
        
            wp_register_script(
                'superblock-'.$singular,
                get_stylesheet_directory_uri().'/inc/data-models/'.$this->base.'/build/index.js',
                ['wp-blocks', 'wp-element', 'wp-editor']
            );
        
            register_block_type('superblock/'.$singular, [
                'editor_script'   => 'superblock-'.$singular,
                'editor_style'    => 'superblock-style-'.$singular,
                'render_callback' => function($attributes, $content) use($singular) {                        
                    $data = json_encode($attributes);
                    $res = <<<HTML
                        <pre data-type='data-{$singular}' class='data-{$singular}' style='display: none;' start>$data</pre>
                        HTML;
                    return $res;
                }
            ]);
        }
    }
?>