<?php
function mobilemenu_enqueue_scripts() {
	/* Get Parent Styles */
    $parent_style = 'twentyfifteen';
    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );

    /* Script for Scrolling on Mobile Menu */
    wp_enqueue_script( 'mobilemenu-scroll', get_stylesheet_directory_uri() . '/scroll.js', array('jquery') );
}
add_action( 'wp_enqueue_scripts', 'mobilemenu_enqueue_scripts' );
?>