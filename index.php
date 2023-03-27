<?php 
wp_head(); 

Import::component('RenderThemeFrontEnd')->from('theme-frontend');

?>

<body> 
    <?php 
        RenderThemeFrontEnd();
        wp_footer(); 
    ?>
</body> 
