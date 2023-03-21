<?php 
// --- enqueue admin-style.css for the admin area
function admin_style() {
    wp_enqueue_style('admin-styles', get_template_directory_uri().'/admin-style.css');
}
add_action('admin_enqueue_scripts', 'admin_style', 99);     



// --- register 2 menus, this ensure that menu editing capabilities are active on theme
register_nav_menus(
    array(
    'primary-menu' => __( 'Primary Menu' ),
    'secondary-menu' => __( 'Secondary Menu' )
    )
);

// --- Removes items from admin menu
// --- remove comments
add_action( 'admin_menu', 'my_remove_admin_menus' );
function my_remove_admin_menus() {
    remove_menu_page( 'edit-comments.php' );
}


// --- Removes from post and pages
// --- remove comments suport
add_action('init', 'remove_comment_support', 100);
function remove_comment_support() {
    remove_post_type_support( 'post', 'comments' );
    remove_post_type_support( 'page', 'comments' );
}


// --- Removes from admin bar
// --- remove comments from menus bar
add_action('admin_enqueue_scripts', 'welcome_admin_menu_item');
function mytheme_admin_bar_render() {        
    global $wp_admin_bar;
    echo "<style>
        #wpadminbar .menupop .ab-icon { display: none !important; }
        #wpadminbar .menupop .ab-item { transform: translateX(-20%); }
        #wp-admin-bar-new-content { display: none; }
    </style>";
    $wp_admin_bar->remove_menu('comments');        
}

// --- Add styling to admin lateral menu - include brand on menu
function welcome_admin_menu_item(){
    $imageUrl = get_template_directory_uri() . '/inc/assets/images/brand.svg';
    echo <<<HTML
        <style>
            #toplevel_page_welcome {
                background-color: transparent;
                background-image: url($imageUrl);
                background-repeat: no-repeat;
                background-position: center;
                position: relative;
                background-size: 80%;
                padding-top: 80% !important;
                border-bottom: 1px solid #e5e5e5 !important;
                border-top: 1px solid #e5e5e5 !important;
                transform: translateY(-12px);
                cursor: pointer;
            }
            #toplevel_page_welcome > a, #toplevel_page_welcome > a > div.wp-menu-image {
                display: none;
            }
            #toplevel_page_welcome > a.menu-top {
                background-color: transparent!important;
            }
        </style>
        <script>
            window.addEventListener('load', function(){
                var welcome = document.getElementById('toplevel_page_welcome');
                welcome.addEventListener('click', function(){
                    window.location.href = '/wp-admin/admin.php?page=welcome';
                });
            });
        </script>
    HTML;
}


// --- Revamp dashboard interface
add_action('admin_menu', 'customize_dashboard');
function customize_dashboard() {
    global $menu, $submenu;
    
    // --- Add new welcome screen
    add_menu_page("welcome", "", 'manage_options', 'welcome', function(){
         include(get_stylesheet_directory()."/admin/welcome.php"); 
    }, '', 0);
    
    // --- Add new dashboard item with suboptions
    add_menu_page('Painel de Controle', 'Painel de Controle', 'manage_options', 'control-panel', function(){       
        $options = array();
        global $submenu, $menu, $pagenow;
        $options = array_merge($options, (array) get_registered_settings());

        common_css();
        echo <<<HTML
            <style>
                .custom-dashboard-options {
                    position: relative;
                    width: 90%;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1.2rem;                    
                }
                .custom-dashboard-options__item {
                    flex: 0 1 20.5%;
                    background-color: #fdfdfd;
                    padding: 1rem;
                    border-radius: 0.8rem;
                    box-shadow: 1px 1px 10px -7px #0008;                    
                    min-width:150px;
                }
                .custom-dashboard-options__item:hover {
                    box-shadow: 3px 3px 10px -2px #0003;
                }
                .custom-dashboard-options__item h2 {
                    margin: 0;
                    margin-bottom: 1.5rem;
                    font-size: 1.2rem;
                    font-weight: 600;
                }
                .custom-dashboard-options__item a:hover {                    
                    font-weight: bolder;
                }                
            </style>
            <div class="header w-100">
                <h1 class="relative items-center italic gap-05 serif center thin">
                    <span class="relative dashicons dashicons-wordpress" style="margin-top: -4px;"></span> 
                    Painel de Controle Wordpress
                </h1>
                <div class="my-2 alert w-100" style="--color: tomato;">
                    <span class="dashicons dashicons-warning"></span>
                    <div>
                        Fique alerta e tenha certeza do que está fazendo, pois qualquer alteração feita aqui pode afetar o funcionamento do site,
                        <strong> inclusive quebrar sua lógica e/ou interromper <span style="border-bottom: 2px solid var(--color, dodgerblue)">completamente</span> seu funcionamento.</strong>
                        <br/>Esteja ciente de que você é o responsável por qualquer alteração feita aqui.
                    </div>
                </div>
            </div>
            <div class="custom-dashboard-options">
        HTML;

        foreach ($submenu as $link=>$items) {            
            $box = "<div class='custom-dashboard-options__item'>";
            $option = "";
            $title = "";
            foreach($items as $item) { 
                foreach( $menu as $menu_option) {
                    if( $menu_option[2] == $item[2] ) {
                        $title = "<h2>$menu_option[0]</h2>";
                    }
                }
                // resolve title particular cases
                $title = $title == "" ? "<h2>$item[0]</h2>" : $title;
                $title = strpos(strtolower($title),"usuários") !== false ? "<h2>Usuários</h2>" : $title;
                $title = strpos(strtolower($title),"biblioteca") !== false ? "<h2>Biblioteca de mídias</h2>" : $title;
                $title = strpos(strtolower($title),"geral") !== false ? "<h2>Configurações do sistema</h2>" : $title;
                $title = strpos(strtolower($title),"temas") !== false ? "<h2>Temas e Menus</h2>" : $title;
                $title = strpos(strtolower($title),"plugins") !== false ? "<h2>Plugins</h2>" : $title;
                $title = strpos(strtolower($title),"ferramentas") !== false ? "<h2>Ferramentas</h2>" : $title;

                // output the option
                $option .= <<<HTML
                    <p>
                        <a href="$item[2]">$item[0]</a>
                    </p>
                HTML;
            }
            // get all custom post types titles insite an array
            $custom_post_types = get_post_types( array( 'public' => true, '_builtin' => false ) );

            $is_custom_post_type = array_filter($custom_post_types, function($type) use ($title){
                return strpos(strtolower($title), strtolower($type)) !== false;
            });
            // if the current title is not a custom post type, then show it            
            if( !$is_custom_post_type ) {
                echo "$box $title $option </div>";
            }
        }
        echo "</div>";

    }, 'dashicons-admin-settings', 99);

    // Remove all dashboard options
    remove_menu_page('index.php');
    remove_menu_page('edit.php');
    remove_menu_page('upload.php');
    remove_menu_page('edit-comments.php');
    remove_menu_page('themes.php');
    remove_menu_page('plugins.php');
    remove_menu_page('users.php');
    remove_menu_page('tools.php');
    remove_menu_page('options-general.php');
    //remove_menu_page('edit.php?post_type=page');

    // Remove suboptions from the 'Dashboard' submenu
    unset($submenu['index.php'][10]); // Removes 'Updates'
    unset($submenu['index.php'][15]); // Removes 'Welcome'


}


// --- redirects to welcome page
add_action( 'wp_before_admin_bar_render', 'mytheme_admin_bar_render' );
function dashboard_redirect(){
    wp_redirect(admin_url('admin.php?page=welcome'));
}
add_action('load-index.php','dashboard_redirect');


// --- redirects to welcome page
function login_redirect( $redirect_to, $request, $user ){
    return admin_url('admin.php?page=welcome');
}
add_filter('login_redirect','login_redirect',10,3);



add_action( 'login_enqueue_scripts', 'custom_login_screen' );
// --- add custom css to custom login screen
function custom_login_screen() {
    common_css();
 }
function common_css(){ 
    wp_enqueue_style('dashboard_styles', get_template_directory_uri() . '/inc/assets/style/dashboard.css', array(), false, false);
    add_action( 'wp_enqueue_scripts', 'dashboard_styles' );
}
 
?>