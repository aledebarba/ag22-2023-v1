<?php
function custom_welcome_page() { ?>
    <div class="wrap">
        <h1>Welcome to Your Site!</h1>
        <p>This is your custom welcome page.</p>
    </div> <?php
}
 
function custom_welcome_page_setup() {
  add_dashboard_page( 'Gerenciamento de dados e opções do site.', 'Gerenciamento de dados e opções do site.', 'read', 'custom-welcome-page', 'custom_welcome_page' );
}
 
add_action( 'admin_menu', 'custom_welcome_page_setup' );
?>
