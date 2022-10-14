<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
require_once( 'lib/helpers.php' );
require_once( 'lib/theme-init.php' );
require_once( 'lib/enqueue.php' );
define( 'WPR_DOMAIN', 'videotuber' );
define( 'WPR_VIDEOTUBER_URL', get_site_url() );
define( 'WPR_VIDEOTUBER_PATH', get_stylesheet_directory_uri() );


function videotuber_features() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'custom-logo' );
	add_theme_support( 'widgets' );
	register_nav_menu( 'headerMenuLocation', 'Header Main Menu Navigation' );
	register_nav_menu( 'foooterMiddleLocation1', 'Footer Middle Menu Navigation 1' );
	register_nav_menu( 'foooterMiddleLocation2', 'Footer Middle Menu Navigation 2' );
	register_nav_menu( 'foooterMiddleLocation3', 'Footer Middle Menu Navigation 3' );
	register_nav_menu( 'foooterBottomLocation', 'Bottom Footer Menu Navigation' );
}
add_action( 'after_setup_theme', 'videotuber_features' );

