<?php

$base = basename(__DIR__);

$singular = strtolower($base);
$plural   = $singular.'s';
$Csingular = ucfirst($singular);
$Cplural   = ucfirst($plural);


add_action('init', function() use($singular, $base) {

    wp_register_style(
        'superblock-style-'.$singular,
        get_stylesheet_directory_uri().'/inc/data-models/'.$base.'/block/build/index.css'
    );

    wp_register_script(
        'superblock-'.$singular,
        get_stylesheet_directory_uri().'/inc/data-models/'.$base.'/block/build/index.js',
        ['wp-blocks', 'wp-element', 'wp-editor']
    );

    register_block_type('superblock/'.$singular, [
        'editor_script' => 'superblock-'.$singular,
        'editor_style' => 'superblock-style-'.$singular,
        'render_callback' => function($attributes, $content) use($singular) {
            $block_data = $attributes;
            $data = json_encode($attributes);
            $res = <<<HTML
                <pre data-type='data-{$singular}' class='data-{$singular}' style='display: none;' start>$data</pre>
                HTML;
                return $res;
            }
        ]);
    });
    
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

add_action('init',function($basename) use ($base, $plural, $singular, $custom_labels){    
    register_post_type($plural, [
        'show_in_rest' => true,
        'supports' => ['title', 'editor', 'excerpt', 'author', 'thumbnail'],
        'rewrite' => ['slug' => $plural],
        'has_archive' => true,
        'public' => true,
        'show_in_menu' => true,
        'show_ui' => true,
        'menu_position' => null,
        'labels' => $custom_labels,
        'menu_icon' => 'dashicons-welcome-widgets-menus',
        "publicly_queryable" => true,
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
    });

    // --- create a rest api endpoint for the custom post type
    add_action('rest_api_init', function () use($plural){
        register_rest_route('database/v1', '/'.$plural, [
            'methods' => 'GET',
            'permission_callback' => '__return_true',
            'callback' => function()use($plural){
                $args = array(
                    "post_type"      => [$plural],
                    "orderby" => ["title" => "ASC"],
                    "posts_per_page" => -1,
                );
                if (isset($_GET['id'])) {
                    $args['post__in'] = [$_GET['id']];
                }
                if (isset($_GET['slug'])) {
                    $args['post_name__in'] = [$_GET['slug']];
                }
                $query = new WP_Query($args);
                $posts = $query->posts;
                $response = [];
                foreach ($posts as $post) {
                    $response[] = [
                        'id' => $post->ID,
                        'slug' => $post->post_name,
                        'title' => $post->post_title,
                        'data' => parse_blocks($post->post_content)[0]['attrs'],
                    ];
                }
                return $response;
            },
        ]);
    });      

?>
