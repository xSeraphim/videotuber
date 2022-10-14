<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function videotuber_get_post_view() {

	$count = get_post_meta( get_the_ID(), 'post_views_count', true );

	return "$count views";

}


function videotuber_set_post_view() {

	$key = 'post_views_count';

	$post_id = get_the_ID();

	$count = (int) get_post_meta( $post_id, $key, true );

	$count++;

	update_post_meta( $post_id, $key, $count );

}


function videotuber_posts_column_views( $columns ) {

	$columns['post_views'] = 'Views';

	return $columns;

}


function videotuber_posts_custom_column_views( $column ) {

	if ( $column === 'post_views' ) {

		echo gt_get_post_view();

	}

}

add_filter( 'manage_posts_columns', 'videotuber_posts_column_views' );
add_action( 'manage_posts_custom_column', 'videotuber_posts_custom_column_views' );

function videotuber_post_time_ago_function() {
	return sprintf( esc_html__( '%s ago', WPR_DOMAIN ), human_time_diff( get_the_time( 'U' ), current_time( 'timestamp' ) ) );
}
add_filter( 'the_time', 'videotuber_post_time_ago_function' );

function videotuber_get_time_ago( $time ) {
	 $time_difference = time() - $time;

	if ( $time_difference < 1 ) {
		return 'less than 1 second ago'; }
	$condition = array(
		12 * 30 * 24 * 60 * 60 => __( 'year', WPR_DOMAIN ),
		30 * 24 * 60 * 60      => __( 'month', WPR_DOMAIN ),
		24 * 60 * 60           => __( 'day', WPR_DOMAIN ),
		60 * 60                => __( 'hour', WPR_DOMAIN ),
		60                     => __( 'minute', WPR_DOMAIN ),
		1                      => __( 'second', WPR_DOMAIN ),
	);

	foreach ( $condition as $secs => $str ) {
		$d = $time_difference / $secs;

		if ( $d >= 1 ) {
			$t = round( $d );
			return 'about ' . $t . ' ' . $str . ( $t > 1 ? 's' : '' ) . ' ago';
		}
	}
}

function videotuber_call_api() {
	$videotuber_api_settings = get_option( 'wpr_option' );
	$videotuber_api_key      = $videotuber_api_settings['wpr_api_token'];
	$videotuber_channel_id   = $videotuber_api_settings['wpr_api_client_id'];
	$videotuber_max_results  = $videotuber_api_settings['wpr_api_max_results'];
	$url                     = add_query_arg(
		array(
			'part'       => array( 'snippet', 'statistics' ),
			'channelId'  => '' . $videotuber_channel_id . '',
			'maxResults' => $videotuber_max_results,
			'order'      => 'date',
			'type'       => 'video',
			'key'        => '' . $videotuber_api_key . '',
		),
		'https://www.googleapis.com/youtube/v3/search'
	);

	$response = wp_remote_get( esc_url_raw( $url ) );
	return json_decode( wp_remote_retrieve_body( $response ), true );
}



function api_fields_callback( $args ) {
	?>
	<p id="<?php echo esc_attr( $args['id'] ); ?>"><?php esc_html_e( 'Edit Youtube API SETTINGS.', 'wpr' ); ?></p>
	<?php
}

// API SETTINGS
function product_fields_callback( $args ) {
	?>
	<p id="<?php echo esc_attr( $args['id'] ); ?>"><?php esc_html_e( 'Edit Product Discount SETTINGS.', 'wpr' ); ?></p>
	<?php
}

add_action(
	'admin_init',
	function() {
		register_setting( 'wpr_academy', 'wpr_option' );
		// API SECTION AND FIELDS
		add_settings_section(
			'api_fields',
			'API Credentials',
			'api_fields_callback',
			'wpr_academy'
		);
		add_settings_field(
			'wpr_api_token',
			'Youtube Api KEY',
			'api_field_callback',
			'wpr_academy',
			'api_fields',
			array(
				'label_for'       => 'wpr_api_token',
				'class'           => 'wpr_row',
				'wpr_custom_data' => 'custom',
			)
		);
		add_settings_field(
			'wpr_api_client_id',
			'Youtube Channel ID',
			'api_field_callback',
			'wpr_academy',
			'api_fields',
			array(
				'label_for'       => 'wpr_api_client_id',
				'class'           => 'wpr_row',
				'wpr_custom_data' => 'custom',
			)
		);
		add_settings_field(
			'wpr_api_max_results',
			'Youtube First Page Max Results',
			'api_field_callback2',
			'wpr_academy',
			'api_fields',
			array(
				'label_for'       => 'wpr_api_max_results',
				'class'           => 'wpr_row',
				'wpr_custom_data' => 'custom',
			)
		);
		// PRODUCT DISCOUNT SECTION AND FIELDS
		add_settings_section(
			'product_fields_discount',
			'Product Discount Fields',
			'product_fields_callback',
			'wpr_academy'
		);

		add_settings_field(
			'wpr_software_discount',
			'Software Discount',
			'product_field_callback',
			'wpr_academy',
			'product_fields_discount',
			array(
				'label_for'       => 'wpr_software_discount',
				'class'           => 'wpr_row',
				'wpr_custom_data' => 'custom',
			)
		);

		add_settings_field(
			'wpr_software_discount_period',
			'Discount Period',
			'product_field_callback',
			'wpr_academy',
			'product_fields_discount',
			array(
				'label_for'       => 'wpr_software_discount_period',
				'class'           => 'wpr_row',
				'wpr_custom_data' => 'custom',
			)
		);
	}
);
add_action(
	'admin_menu',
	function() {
		add_menu_page(
			'API Settings',
			'Youtube API Settings',
			'manage_options',
			'videotuber-api-settings',
			'wpr_api_page_html',
			'dashicons-database',
			65
		);
	}
);

function wpr_api_page_html() {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}
	// check if the user have submitted the settings
	// WordPress will add the "settings-updated" $_GET parameter to the url
	if ( isset( $_GET['settings-updated'] ) ) {
		// add settings saved message with the class of "updated"
		add_settings_error( 'wpr_messages', 'wpr_message', __( 'Settings Saved', 'wpr' ), 'updated' );
	}

	// show error/update messages
	settings_errors( 'wpr_messages' );
	?>
	<div class="wrap">
		<h1><?php echo esc_html( get_admin_page_title() ); ?></h1>
		<form action="options.php" method="post">
			<?php
			// output security fields for the registered setting "wpr_academy"
			settings_fields( 'wpr_academy' );

			// output setting sections and their fields
			// (sections are registered for "wpr_academy", each field is registered to a specific section)
			do_settings_sections( 'wpr_academy' );
			// output save settings button
			submit_button( 'Save Settings' );
			?>
		</form>
	</div>
	<?php
}
function api_field_callback( $args ) {
	// Get the value of the setting we've registered with register_setting()
	$options = get_option( 'wpr_option' );
	?>
	
<input
		value="<?php echo $options[ $args['label_for'] ]; ?>"
		id="<?php echo esc_attr( $args['label_for'] ); ?>"
		data-custom="<?php echo esc_attr( $args['wpr_custom_data'] ); ?>"
		name="wpr_option[<?php echo esc_attr( $args['label_for'] ); ?>]"
		type="text">
	<?php
}
function api_field_callback2( $args ) {
	// Get the value of the setting we've registered with register_setting()
	$options = get_option( 'wpr_option' );
	?>
	
<input
		value="<?php echo $options[ $args['label_for'] ]; ?>"
		id="<?php echo esc_attr( $args['label_for'] ); ?>"
		data-custom="<?php echo esc_attr( $args['wpr_custom_data'] ); ?>"
		name="wpr_option[<?php echo esc_attr( $args['label_for'] ); ?>]"
		type="number">
	<?php
}
function product_field_callback( $args ) {
	// Get the value of the setting we've registered with register_setting()
	$options = get_option( 'wpr_option' );
	?>
	
<input
		value="<?php echo $options[ $args['label_for'] ]; ?>"
		id="<?php echo esc_attr( $args['label_for'] ); ?>"
		data-custom="<?php echo esc_attr( $args['wpr_custom_data'] ); ?>"
		name="wpr_option[<?php echo esc_attr( $args['label_for'] ); ?>]"
		type="number">
	<?php
}


function videotuber_video_views( $n, $decimals = 2, $suffix = '' ) {
	if ( ! $suffix ) {
		$suffix = 'K,M,B';
	}
	$suffix = explode( ',', $suffix );

	if ( $n < 1000 ) { // any number less than a Thousand
		$shorted = number_format( $n );
	} elseif ( $n < 1000000 ) { // any number less than a million
		$shorted = number_format( $n / 1000, $decimals ) . $suffix[0];
	} elseif ( $n < 1000000000 ) { // any number less than a billion
		$shorted = number_format( $n / 1000000, $decimals ) . $suffix[1];
	} else { // at least a billion
		$shorted = number_format( $n / 1000000000, $decimals ) . $suffix[2];
	}

	return $shorted;
}

