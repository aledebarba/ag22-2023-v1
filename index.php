<?php 
if(!is_user_logged_in()) {
	wp_redirect( wp_login_url() );
}
get_header();
Import::component('RenderThemeFrontEnd')->from('theme-frontend');
?>

<body> 
    <?php 
        RenderThemeFrontEnd();
        wp_footer(); 
    ?>
</body> 
