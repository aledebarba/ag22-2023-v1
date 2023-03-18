<?php 
    require_once( get_template_directory() . '/inc/php/@components-engine/embed_module.php');
    require_once( get_template_directory() . '/inc/php/loader.php' );
    require_once( get_template_directory() . '/inc/php/theme-custom-dashboard.php' );
    require_once( get_template_directory() . '/inc/php/theme-custom-welcome-page.php' );
    require_once( get_template_directory() . '/inc/php/sendmail.php' );    

    add_action('wp_head', function(){ ?>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
      <?php });

    function cc_mime_types($mimes) {
        $mimes['svg'] = 'image/svg+xml';
        return $mimes;
    }
    add_filter('upload_mimes', 'cc_mime_types');

  ?>
