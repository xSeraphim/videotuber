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

}
add_action( 'wp_enqueue_scripts', 'videtuber_add_styles' );

function videotuber_features() {
	add_theme_support( 'title-tag' );
	register_nav_menu( 'headerMenuLocation', 'Header Main Menu Navigation' );
}
add_action( 'after_setup_theme', 'videotuber_features' );
add_theme_support( 'post-thumbnails' );



/*
add_action('init', function(){
	$get_data = callAPI( 'GET', 'https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCG4lyXSlTsKq6OY80voKgVw&maxResults=4&key=AIzaSyBcm4jEG5zu4pPJYH7ARgxD2FLF9D8q4Bc');
	$json = json_decode( $get_data, true );
	var_dump($json);

});

*/
