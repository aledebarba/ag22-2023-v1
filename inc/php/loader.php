<?php
require_once(get_template_directory()."/inc/php/functions/block-functions.php");
register_blocks_category();

$dirs = array_filter(glob(get_template_directory()."/inc/data-models/*"), 'is_dir');
foreach($dirs as $dir) {
     $req = $dir."/install.php";
     if(file_exists($req)) {
         require_once($req);
     }
}
?>