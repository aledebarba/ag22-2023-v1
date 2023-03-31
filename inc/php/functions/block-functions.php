<?php 
function register_blocks_category() {
    add_filter('block_categories_all', 
        function ($categories, $post) {
            array_unshift($categories, [
                'slug' => 'superblock',
                'title' => 'Superblock',
            ]);
            return $categories;
        }, 10, 2);
}
?>