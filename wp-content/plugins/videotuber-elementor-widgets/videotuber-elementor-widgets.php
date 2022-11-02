<?php
/**
* Plugin Name: Videotuber Elementor Widgets
* Description: This is the official Videotuber Elementor Widgets Plugin
* Version: 1.0.0
* Author: Aldea Daniel
* Text Domain: videotuber-elementor
*/

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
define( 'VIDEOTUBER_ELEMENTOR', __FILE__ );
// Plugin URL.
define( 'VIDEOTUBER_WIDGETS_URL', untrailingslashit( plugins_url( basename( plugin_dir_path( __FILE__ ) ), basename( __FILE__ ) ) ) );
// Plugin path.
define( 'VIDEOTUBER_WIDGETS_PATH', untrailingslashit( plugin_dir_path( __FILE__ ) ) );

function register_videotuber_youtube_widget( $widgets_manager ) {

	require_once( __DIR__ . '/widgets/videotuber-widget-1.php' );
	// require_once( __DIR__ . '/widgets/hello-world-widget-2.php' );


    // Register Class name defined in the widgets folder
	$widgets_manager->register( new \Elementor_Hello_World_Widget_1() );
	// $widgets_manager->register( new \Elementor_Hello_World_Widget_2() );

}
add_action( 'elementor/widgets/register', 'register_videotuber_youtube_widget' );