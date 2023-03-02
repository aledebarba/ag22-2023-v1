<?php 
    require_once( get_template_directory() . '/inc/php/@components-engine/embed_module.php');
    require_once( get_template_directory() . '/inc/blocks/theme-blocks.php');
    require_once( get_template_directory() . '/inc/php/theme-custom-post-types.php' );
    require_once( get_template_directory() . '/inc/php/theme-custom-dashboard.php' );
    require_once( get_template_directory() . '/inc/php/theme-custom-welcome-page.php' );

    // enqueue admin-style.css for the admin area
    function admin_style() {
        wp_enqueue_style('admin-styles', get_template_directory_uri().'/admin-style.css');
    }
    add_action('admin_enqueue_scripts', 'admin_style', 99);     


    // Removes from admin menu
    add_action( 'admin_menu', 'my_remove_admin_menus' );
    function my_remove_admin_menus() {
        remove_menu_page( 'edit-comments.php' );
    }
    // Removes from post and pages
    add_action('init', 'remove_comment_support', 100);

    function remove_comment_support() {
        remove_post_type_support( 'post', 'comments' );
        remove_post_type_support( 'page', 'comments' );
    }
    // Removes from admin bar
    function mytheme_admin_bar_render() {
        global $wp_admin_bar;
        $wp_admin_bar->remove_menu('comments');
    }
    add_action( 'wp_before_admin_bar_render', 'mytheme_admin_bar_render' );
?>