<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
require_once( 'lib/helpers.php' );
require_once( 'lib/theme-init.php' );
require_once( 'lib/enqueue.php' );
require_once( 'lib/sidebars.php' );


define( 'WPR_DOMAIN', 'videotuber' );
define( 'WPR_VIDEOTUBER_URL', get_site_url() );
define( 'WPR_VIDEOTUBER_PATH', get_stylesheet_directory_uri() );


function videotuber_register_elementor_locations( $elementor_theme_manager ) {

	$elementor_theme_manager->register_all_core_location();

}
add_action( 'elementor/theme/register_locations', 'videotuber_register_elementor_locations' );
