<?php
define( 'WPR_VIDEOTUBER_URL', get_site_url() );
define( 'WPR_VIDEOTUBER_PATH', get_stylesheet_directory_uri() );

function videtuber_add_styles() {
	wp_enqueue_style( 'videotuber_main_styles', get_theme_file_uri( '/assets/css/main.css' ) );
	wp_enqueue_style( 'videotuber_bundle_styles', get_theme_file_uri( '/dist/assets/css/bundle.css' ) );
	wp_enqueue_script('swiper-script-js', get_theme_file_uri('/modules/swiper-js/swiper-bundle.min.js'), array('jquery'), '1.0', true);
	wp_enqueue_script('videotuber-main-js', get_theme_file_uri('/dist/assets/js/bundle.js'), array('jquery'), '1.0', true);
    wp_enqueue_script('videotuber-lazyload-js', get_theme_file_uri('/dist/assets/js/bundle.js'), array('jquery'), '1.0', true);
	wp_enqueue_style( 'swiper_js_main_styles', get_theme_file_uri( '/modules/swiper-js/swiper-bundle.min.css' ) );

}
add_action( 'wp_enqueue_scripts', 'videtuber_add_styles' );