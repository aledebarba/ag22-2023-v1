<?php 
/**
 * setup the custom block editor options
 * if user options points to a post type, this file also create the post type and the admin area for it
 * if user options points to a options page, this file also create the options page and the admin area for it
 */


// 1. Register block from block.json
// 2. Register block category
// 3. Create REST API endpoint
// 4. Open superblock.config.json and get user options
// 5. Create post type if user options points to a post type
// 6. Create options page if user options points to a options page


$base = basename(__DIR__);

$singular = strtolower($base);
$plural   = $singular.'s';
$Csingular = ucfirst($singular);
$Cplural   = ucfirst($plural);


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

    // --- create a rest api endpoint for the custom post type
    add_action('rest_api_init', function () use($base, $plural, $singular){
        register_rest_route('database/v1', '/'.$plural, [
            'methods' => 'GET',
            'permission_callback' => '__return_true',
            'callback' => function()use($plural){
                $args = [
                    'post_type' => $plural,
                    'posts_per_page' => -1, //return all posts
                ];
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
}, 99);

register_block_type(__DIR__, [
    'render_callback' => 'theHTML'
]);

function theHTML($attributes)
{
    $data = json_encode($attributes);
    $res = <<<HTML
        <pre data-type='options-data' class="display: none">$data</pre>
    HTML;
    return $res;
}

?>