<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
require_once( 'lib/helpers.php' );
define( 'WPR_DOMAIN', 'videotuber' );
define( 'WPR_VIDEOTUBER_URL', get_site_url() );
define( 'WPR_VIDEOTUBER_PATH', get_stylesheet_directory_uri() );



function videtuber_add_styles() {
	wp_enqueue_style( 'videotuber_main_styles', get_theme_file_uri( '/assets/css/main.css' ) );
	wp_enqueue_style( 'material-icons', 'https://fonts.googleapis.com/icon?family=Material+Icons' );
	wp_enqueue_script('swiper-script-js', get_theme_file_uri('/modules/swiper-js/swiper-bundle.min.js'), array('jquery'), '1.0', true);
	wp_enqueue_script('main-js', get_theme_file_uri('/assets/js/main.js'), array('jquery'), '1.0', true);
	wp_enqueue_style( 'swiper_js_main_styles', get_theme_file_uri( '/modules/swiper-js/swiper-bundle.min.css' ) );

}
add_action( 'wp_enqueue_scripts', 'videtuber_add_styles' );

function videotuber_features() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'custom-logo' );
	register_nav_menu( 'headerMenuLocation', 'Header Main Menu Navigation' );
	register_nav_menu( 'foooterMiddleLocation1', 'Footer Middle Menu Navigation 1' );
	register_nav_menu( 'foooterMiddleLocation2', 'Footer Middle Menu Navigation 2' );
	register_nav_menu( 'foooterMiddleLocation3', 'Footer Middle Menu Navigation 3' );
	register_nav_menu( 'foooterBottomLocation', 'Bottom Footer Menu Navigation' );
}
add_action( 'after_setup_theme', 'videotuber_features' );

