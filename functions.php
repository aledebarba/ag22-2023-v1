<?php 
    require_once( get_template_directory() . '/inc/php/@components-engine/embed_module.php');
    require_once( get_template_directory() . '/inc/php/loader.php' );
    require_once( get_template_directory() . '/inc/php/dashboard.php' );
    require_once( get_template_directory() . '/inc/php/sendmail.php' );    

    add_action('wp_head', function(){ ?>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
      <?php });

    function cc_mime_types($mimes) {
        $mimes['svg'] = 'image/svg+xml';
        return $mimes;
    }
    add_filter('upload_mimes', 'cc_mime_types');

    
    
    // scripts for admin area
    function load_custom_admin_scripts() {
      wp_enqueue_script( 'custom-admin-script', get_template_directory_uri() . '/admin/home-options/build/_app.js', array('react','react-dom'), time(), true );
    }
    add_action( 'admin_enqueue_scripts', 'load_custom_admin_scripts' );
  ?>
