<?php 

function customize_dashboard() {
    global $menu, $submenu;
    
    // Remove all dashboard options
    remove_menu_page('index.php');
    remove_menu_page('edit.php');
    remove_menu_page('upload.php');
    remove_menu_page('edit.php?post_type=page');
    remove_menu_page('edit-comments.php');
    remove_menu_page('themes.php');
    remove_menu_page('plugins.php');
    remove_menu_page('users.php');
    remove_menu_page('tools.php');
    remove_menu_page('options-general.php');
    
    // Add new dashboard item with suboptions
    add_menu_page('Control Panel', 'Control Panel', 'manage_options', 'control-panel', '', 'dashicons-admin-settings', 2);
    add_submenu_page('control-panel', 'Posts', 'Posts', 'manage_options', 'edit.php');
    add_submenu_page('control-panel', 'Media', 'Media', 'manage_options', 'upload.php');
    add_submenu_page('control-panel', 'Pages', 'Pages', 'manage_options', 'edit.php?post_type=page');
    add_submenu_page('control-panel', 'Comments', 'Comments', 'manage_options', 'edit-comments.php');
    add_submenu_page('control-panel', 'Appearance', 'Appearance', 'manage_options', 'themes.php');
    add_submenu_page('control-panel', 'Plugins', 'Plugins', 'manage_options', 'plugins.php');
    add_submenu_page('control-panel', 'Users', 'Users', 'manage_options', 'users.php');
    add_submenu_page('control-panel', 'Tools', 'Tools', 'manage_options', 'tools.php');
    add_submenu_page('control-panel', 'Settings', 'Settings', 'manage_options', 'options-general.php');
    
    // Remove suboptions from the 'Dashboard' submenu
    unset($submenu['index.php'][10]); // Removes 'Updates'
    unset($submenu['index.php'][15]); // Removes 'Welcome'
}

add_action('admin_menu', 'customize_dashboard');

?>