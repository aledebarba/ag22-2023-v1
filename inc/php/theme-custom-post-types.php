<?php

add_action('init', 'addThemeCustomPostTypes');
function addThemeCustomPostTypes()
{
    /*
     * //--- CPT Projeto
     * @description: endpoint - database/v1/projeto
     *
     * @param none
     * @return void
     *
     */
    register_post_type('projeto', [
        'show_in_rest' => true,
        'supports' => ['title', 'editor', 'excerpt', 'author', 'thumbnail'],
        'rewrite' => ['slug' => 'projetos'],
        'has_archive' => true,
        'public' => true,
        'show_in_menu' => true,
        'show_ui' => true,
        'menu_position' => null,
        'labels' => [
            'name' => 'Projetos',
            'singular_name' => 'Projeto',
            'menu_name' => 'Projetos',
            'name_admin_bar' => 'Projeto',
            'add_new' => 'Adicionar Novo Projeto',
            'add_new_item' => 'Adicionar Novo Projeto',
            'new_item' => 'Novo Projeto',
            'edit_item' => 'Editar Projeto',
            'view_item' => 'Ver Projeto',
            'all_items' => 'Todos os Projetos',
            'search_items' => 'Procurar Projetos',
            'not_found' => 'Nenhum Projeto encontrado.',
            'not_found_in_trash' => 'Nenhum Projeto encontrado como item excluído.',
        ],
        'menu_icon' => 'dashicons-welcome-widgets-menus',
        'template' => [
            ['superblock/projeto', [
                'lock' => [
                    'move' => true,
                    'remove' => true,
                ],
            ]],
                ],
        'template_lock' => 'all',
      ]);

    // create a rest api endpoint for the custom post type
    add_action('rest_api_init', function () {
        register_rest_route('database/v1', '/projeto', [
            'methods' => 'GET',
            'callback' => 'projeto_rest_callback',
        ]);
    });

    function projeto_rest_callback()
    {
        $args = [
            'post_type' => 'projeto',
            'posts_per_page' => -1, // return all posts
            'orderby' => 'title',
            'order' => 'ASC',
        ];
        $query = new WP_Query($args);
        $posts = $query->posts;
        $response = [];
        foreach ($posts as $post) {
            $response[] = [
                'id' => $post->ID,
                'title' => $post->post_title,
                'data' => parse_blocks($post->post_content)[0]['attrs'],
            ];
        }

        return $response;
    }

    /*
     * //--- CPT Colaborador
     * @description: endpoint - database/v1/colaborador
     *
     */
    register_post_type('colaborador', [
        'show_in_rest' => true,
        'supports' => ['title', 'editor', 'excerpt', 'author', 'thumbnail'],
        'rewrite' => ['slug' => 'colaboradores'],
        'has_archive' => true,
        'public' => true,
        'show_in_menu' => true,
        'show_ui' => true,
        'menu_position' => null,
        'labels' => [
            'name' => 'Colaboradores',
            'singular_name' => 'Colaborador',
            'menu_name' => 'Colaboradores',
            'name_admin_bar' => 'Colaborador',
            'add_new' => 'Adicionar Novo Colaborador',
            'add_new_item' => 'Adicionar Novo Colaborador',
            'new_item' => 'Novo Colaborador',
            'edit_item' => 'Editar Colaborador',
            'view_item' => 'Ver Colaborador',
            'all_items' => 'Todos os Colaboradores',
            'search_items' => 'Procurar Colaboradores',
            'not_found' => 'Nenhum Colaborador encontrado.',
            'not_found_in_trash' => 'Nenhum registro de colaborador encontrado como excluído.',
        ],
        'menu_icon' => 'dashicons-groups',
        'template' => [
            ['superbloco/colaborador', [
                'lock' => [
                    'move' => true,
                    'remove' => true,
                ],
            ]],
        ],
        'template_lock' => 'all',
    ]);

    add_action('rest_api_init', function () {
        register_rest_route('database/v1', '/colaborador', [
            'methods' => 'GET',
            'callback' => 'colaborador_rest_callback',
        ]);
    });

    function colaborador_rest_callback()
    {
        $args = [
            'post_type' => 'colaborador',
            'posts_per_page' => -1, // return all posts
            'order' => 'ASC',
        ];
        $query = new WP_Query($args);
        $posts = $query->posts;
        $response = [];
        foreach ($posts as $post) {
            $response[] = [
                'id' => $post->ID,
                'data' => parse_blocks($post->post_content)[0]['attrs'],
            ];
        }

        return $response;
    }

    /*
     * //--- CPT Cliente
     * @description: endpoint - database/v1/cliente
     *
     */

    register_post_type('cliente', [
        'show_in_rest' => true,
        'supports' => ['editor', 'author'],
        'rewrite' => ['slug' => 'clientes'],
        'has_archive' => true,
        'public' => true,
        'show_in_menu' => true,
        'show_ui' => true,
        'menu_position' => null,
        'menu_icon' => 'dashicons-store',
        'labels' => [
            'name' => 'Clientes',
            'singular_name' => 'Cliente',
            'menu_name' => 'Clientes',
            'name_admin_bar' => 'Cliente',
            'add_new' => 'Adicionar Novo Cliente',
            'add_new_item' => 'Adicionar Novo Cliente',
            'new_item' => 'Novo Cliente',
            'edit_item' => 'Editar Cliente',
            'view_item' => 'Ver Cliente',
            'all_items' => 'Todos os Clientes',
            'search_items' => 'Procurar Clientes',
            'not_found' => 'Nenhum Cliente encontrado.',
            'not_found_in_trash' => 'Nenhum Cliente encontrado como item excluído.',
        ],
        'template' => [
            ['superblock/cliente', [
                'lock' => [
                    'move' => true,
                    'remove' => true,
                ],
            ]],
        ],
        'template_lock' => 'all',
    ]);

    add_action('rest_api_init', function () {
        register_rest_route('database/v1', '/cliente', [
            'methods' => 'GET',
            'callback' => 'cliente_rest_callback',
        ]);
    });

    function cliente_rest_callback()
    {
        $args = [
            'post_type' => 'cliente',
            'posts_per_page' => -1, // return all posts
            'order' => 'ASC',
        ];
        $query = new WP_Query($args);
        $posts = $query->posts;
        $response = [];
        foreach ($posts as $post) {
            $response[] = [
                'id' => $post->ID,
                'data' => parse_blocks($post->post_content)[0]['attrs'],
            ];
        }

        return $response;
    }

    /*
     * //--- CPT Contato
     * @description: endpoint - database/v1/contato
     *
     */
    register_post_type('contato', [
        'show_in_rest' => true,
        'supports' => ['editor'],
        'rewrite' => ['slug' => 'contatos'],
        'has_archive' => true,
        'public' => true,
        'show_in_menu' => true,
        'show_ui' => true,
        'menu_position' => null,
        'menu_icon' => 'dashicons-share',
        'labels' => [
            'name' => 'Contatos',
            'singular_name' => 'Contato',
            'menu_name' => 'Contatos',
            'name_admin_bar' => 'Contatos',
            'add_new' => 'Adicionar Novo Contato',
            'add_new_item' => 'Adicionar Novo Contato',
            'new_item' => 'Novo Contato',
            'edit_item' => 'Editar Contato',
            'view_item' => 'Ver Contato',
            'all_items' => 'Todos os Contatos',
            'search_items' => 'Procurar Contato',
            'not_found' => 'Nenhum Contato encontrado.',
            'not_found_in_trash' => 'Nenhum Contato encontrado como item excluído.',
        ],
        'template' => [
            ['superblock/contato', [
                'lock' => [
                    'move' => true,
                    'remove' => true,
                ],
            ]],
        ],
        'template_lock' => 'all',
    ]);

    add_action('rest_api_init', function () {
        register_rest_route('database/v1', '/contato', [
            'methods' => 'GET',
            'callback' => 'contato_rest_callback',
        ]);
    });

    function contato_rest_callback()
    {
        $args = [
            'post_type' => 'contato',
            'posts_per_page' => -1, // return all posts
            'order' => 'ASC',
        ];
        $query = new WP_Query($args);
        $posts = $query->posts;
        $response = [];
        foreach ($posts as $post) {
            $response[] = [
                'id' => $post->ID,
                'data' => parse_blocks($post->post_content)[0]['attrs'],
            ];
        }

        return $response;
    }
}
?>