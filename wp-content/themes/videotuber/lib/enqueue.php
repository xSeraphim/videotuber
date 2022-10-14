<?php
function videtuber_add_styles() {
	wp_enqueue_style( 'videotuber_main_styles', get_theme_file_uri( '/assets/css/main.css' ) );
	wp_enqueue_style( 'videotuber_bundle_styles', get_theme_file_uri( '/dist/assets/css/bundle.css' ) );
	wp_enqueue_style( 'material-icons', 'https://fonts.googleapis.com/icon?family=Material+Icons' );
	wp_enqueue_script('swiper-script-js', get_theme_file_uri('/modules/swiper-js/swiper-bundle.min.js'), array('jquery'), '1.0', true);
	wp_enqueue_script('videotuber-main-js', get_theme_file_uri('/dist/assets/js/bundle.js'), array('jquery'), '1.0', true);
	wp_enqueue_style( 'swiper_js_main_styles', get_theme_file_uri( '/modules/swiper-js/swiper-bundle.min.css' ) );

}
add_action( 'wp_enqueue_scripts', 'videtuber_add_styles' );