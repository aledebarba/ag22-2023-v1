<?php 
get_header();
Import::component('RenderThemeFrontEnd')->from('theme-frontend');
?>

<body> 
    <?php 
        RenderThemeFrontEnd();
        wp_footer(); 
    ?>
</body> 
