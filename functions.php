<?php 
    require_once( get_template_directory() . '/inc/php/@components-engine/embed_module.php');
    require_once( get_template_directory() . '/inc/php/loader.php' );
    require_once( get_template_directory() . '/inc/php/dashboard.php' );
    require_once( get_template_directory() . '/inc/php/sendmail.php' );    

    /**
     * This action will retrieve the global data options and then render the meta tags
     */
    add_action('wp_head', function(){       
      $global_options = get_option('superpost_global_options');
      $global_options = json_decode($global_options);

      echo <<<HTML
        <title>{$global_options->title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <meta name="description" content="{$global_options->description}">
        <meta name="keywords" content="{$global_options->tags}">
        <link rel="icon" type="image/x-icon" href="{$global_options->favicon}">
        <meta property="og:title" content="$global_options->ogTitle" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:url" content="{$global_options->ogUrl}" />
        <meta property="og:image" content="{$global_options->ogImage}" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="og:description" content="{$global_options->description}" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="{$global_options->twitterCardAuthor}" />
        <meta name="twitter:creator" content="{$global_options->twitterCardAuthor}" />
        <meta name="twitter:title" content="{$global_options->twitterCardTitle}" />
        <meta name="twitter:description" content="{$global_options->description}" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      HTML; 
      
    });

    //adiciona o javascript de midia gallery  
    add_action( 'admin_enqueue_scripts', function($hook_suffix) {
      wp_enqueue_media();
    });

    function cc_mime_types($mimes) {
        $mimes['svg'] = 'image/svg+xml';
        return $mimes;
    }
    add_filter('upload_mimes', 'cc_mime_types');

    
    
    // scripts for admin area
    add_action( 'admin_enqueue_scripts', 'load_custom_admin_scripts' );
    function load_custom_admin_scripts() {
      wp_enqueue_script( 'custom-admin-script', 
        get_template_directory_uri() . '/admin/home-options/build/_app.js', 
        array( 
          'react',
          'react-dom',
          'wp-block-editor',
          'wp-blocks',
          'wp-element',
          'wp-i18n',
          'wp-data',
          'wp-polyfill',
          'wp-api-fetch'
        ), 
        time(), 
        true );
    }
       

    // register an endpoint for the admin area options
    add_action('rest_api_init', function () {
      // get data from options table
      register_rest_route('database/v1', '/global-options', [
          'methods' => 'GET',
          'permission_callback' => '__return_true',
          'callback' => function(){
              // get data from options table
              $data = get_option('superpost_global_options');
              // test if data exist and return it, or else return error 
              if($data){
                  $response = new WP_REST_Response($data);
                  $response->set_status(200);
              } else {
                  $response = new WP_Error('no_data', 'No data found', array('status' => 404));
              }
              return $response;
          },
      ]
    );
    });
    // post options to database
    add_action('rest_api_init', function () {
      register_rest_route('database/v1', '/global-options', [
          'methods' => 'POST',
          'permission_callback' => '__return_true',
          'callback' => function($request){
              // get data from options table
              $data = $request->get_body();
              // test if data exist and return it, or else return error 
              if($data){
                  $response = new WP_REST_Response($data);
                  $response->set_status(200);
                  update_option('superpost_global_options', $data);
              } else {
                  $response = new WP_Error('no_data', 'No data found', array('status' => 404));
              }
              return $response;
          },
      ]
    );
    });

  ?>
