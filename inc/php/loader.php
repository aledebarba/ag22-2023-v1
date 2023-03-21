<?php 
$dirs = array_filter(glob(get_template_directory()."/inc/data-models/*"), 'is_dir');
foreach($dirs as $dir) {
    $req = $dir."/install.php";
    if(file_exists($req)) {
        require_once($req);
    }
}

// if function don't exist, create a function that enqueue a react app
if(!function_exists('addComponent')) {
    function addComponent($app_name, $app_path) {
        // create a random unique id to versionate the app
        $app_version = 'vs-' . uniqid();
        // add filter to include "module" on the script tag
        
        add_filter('script_loader_tag', function($tag, $handle) use ($app_name){
            if($handle === $app_name) {
                $tag = str_replace(' src', ' type="module" defer src', $tag);
            }
            return $tag;
        }, 10, 2);

        wp_enqueue_script(
            $app_name,
            get_template_directory_uri() . $app_path,
            array(),
            $app_version,
            true
        );
    }
}

?>