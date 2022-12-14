<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function videotuber_post_time_ago_function() {
	/* translators: %s: How long ago */
	return sprintf( esc_html__( 'about %s ago', 'WPR_DOMAIN' ), human_time_diff( get_the_time( 'U' ), current_time( 'timestamp' ) ) );
}
add_filter( 'the_time', 'videotuber_post_time_ago_function' );

function videotuber_get_time_ago( $time ) {
	$time_difference = time() - $time;

	if ( $time_difference < 1 ) {
		return 'less than 1 second ago'; }
	$condition = array(
		12 * 30 * 24 * 60 * 60 => esc_attr__( 'year', 'WPR_DOMAIN' ),
		30 * 24 * 60 * 60      => esc_attr__( 'month', 'WPR_DOMAIN' ),
		24 * 60 * 60           => esc_attr__( 'day', 'WPR_DOMAIN' ),
		60 * 60                => esc_attr__( 'hour', 'WPR_DOMAIN' ),
		60                     => esc_attr__( 'minute', 'WPR_DOMAIN' ),
		1                      => esc_attr__( 'second', 'WPR_DOMAIN' ),
	);

	foreach ( $condition as $secs => $str ) {
		$d = $time_difference / $secs;

		if ( $d >= 1 ) {
			$t = round( $d );
			return 'about ' . $t . ' ' . $str . ( $t > 1 ? 's' : '' ) . ' ago';
		}
	}
}

function videotuber_call_api( $videotuber_max_results ) {
	$videotuber_api_settings = get_option( 'wpr_option' );
	$videotuber_api_key      = $videotuber_api_settings['wpr_api_token'];
	$videotuber_channel_id   = $videotuber_api_settings['wpr_api_client_id'];

	$url = add_query_arg(
		array(
			'part'       => 'snippet',
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

function videotuber_call_api_by_keyword() {
	header( 'Content-Type: application/json' );
	$q                        = $_GET['q'];
	$videotuber_api_settings  = get_option( 'wpr_option' );
	$videotuber_channel_image = videotuber_get_channel_image();
	$videotuber_api_key       = $videotuber_api_settings['wpr_api_token'];
	$videotuber_channel_id    = $videotuber_api_settings['wpr_api_client_id'];
	$url                      = add_query_arg(
		array(
			'part'       => 'snippet',
			'channelId'  => '' . $videotuber_channel_id . '',
			'maxResults' => 25,
			'order'      => 'date',
			'type'       => 'video',
			'key'        => '' . $videotuber_api_key . '',
			'q'          => '' . $q . '',
		),
		'https://youtube.googleapis.com/youtube/v3/search'
	);

	$response   = wp_remote_get( esc_url_raw( $url ) );
	$video_list = json_decode( wp_remote_retrieve_body( $response ), true );
	// Add key value api to video_list array for search js
	$video_list['api']   = $videotuber_api_key;
	$video_list['image'] = $videotuber_channel_image;
	echo wp_json_encode( $video_list );
	wp_die();
	// if ( ! empty( $video_list['items'] ) ) {
	// 	foreach ( $video_list['items'] as $item ) {

	// 		if ( isset( $item['id']['videoId'] ) ) {
	// 			$url = add_query_arg(
	// 				array(
	// 					'part' => 'snippet' . '&part=statistics',
	// 					'id'   => '' . $item['id']['videoId'] . '',
	// 					'key'  => '' . $videotuber_api_key . '',
	// 				),
	// 				'https://www.googleapis.com/youtube/v3/videos'
	// 			);
	// 			// var_dump($url);
	// 			$json  = wp_remote_get( esc_url_raw( $url ) );
	// 			$video = json_decode( wp_remote_retrieve_body( $json ), true );
	// 			// var_dump($video['items']);
	// 			$vid_id           = $item['id']['videoId'];
	// 			$vid_thumb        = 'https://img.youtube.com/vi/' . $item['id']['videoId'] . '/mqdefault.jpg';
	// 			$vid_title        = $video['items'][0]['snippet']['title'];
	// 			$vid_channel_name = $video['items'][0]['snippet']['channelTitle'];
	// 			$vid_post_date    = $video['items'][0]['snippet']['publishedAt'];
	// 			$vid_views        = $video['items'][0]['statistics']['viewCount'];

	// 			$data = array(
	// 				'vid_id' => $vid_id,
	// 				'vid_thumb' => $vid_thumb,
	// 				'vid_title' => $vid_title,
	// 				'vid_channel_name' => $vid_channel_name,
	// 				'vid_post_date' => $vid_post_date,
	// 				'vid_views' => $vid_views,

	// 			);
	// 			echo wp_json_encode( $data );
	// 			wp_die();

	// 		}}}

}
add_action( 'wp_ajax_videotuber_call_api_by_keyword', 'videotuber_call_api_by_keyword' );
add_action( 'wp_ajax_nopriv_videotuber_call_api_by_keyword', 'videotuber_call_api_by_keyword' );

function videotuber_get_twitch_id() {
	$videotuber_api_settings     = get_option( 'wpr_option' );
	$videotuber_twitch_username  = $videotuber_api_settings['wpr_twitch_login'];
	$videotuber_twitch_token     = $videotuber_api_settings['wpr_twitch_acces_token'];
	$videotuber_twitch_client_id = $videotuber_api_settings['wpr_twitch_client_id'];
	$url                         = add_query_arg(
		array(
			// 'Authorization'       => 'Bearer' . $videotuber_twitch_token . '',
			// 'Client-Id'  => '' . $videotuber_twitch_client_id . '',
			'login' => $videotuber_twitch_username,
		),
		'https://api.twitch.tv/helix/users'
	);
	$args                        = array(
		'headers' => array(
			'Authorization' => 'Bearer ' . $videotuber_twitch_token . '',
			'Client-Id'     => '' . $videotuber_twitch_client_id . '',
		),
	);
	$response                    = wp_remote_get( esc_url_raw( $url ), $args );
	return json_decode( wp_remote_retrieve_body( $response ), true );
}

function videotuber_get_twitch_videos( $videotuber_twitch_id ) {
	$videotuber_api_settings     = get_option( 'wpr_option' );
	$videotuber_twitch_token     = $videotuber_api_settings['wpr_twitch_acces_token'];
	$videotuber_twitch_client_id = $videotuber_api_settings['wpr_twitch_client_id'];
	$url                         = add_query_arg(
		array(
			// 'Authorization'       => 'Bearer' . $videotuber_twitch_token . '',
			// 'Client-Id'  => '' . $videotuber_twitch_client_id . '',
			'user_id' => '' . $videotuber_twitch_id . '',
		),
		'https://api.twitch.tv/helix/videos'
	);
	$args                        = array(
		'headers' => array(
			'Authorization' => 'Bearer ' . $videotuber_twitch_token . '',
			'Client-Id'     => '' . $videotuber_twitch_client_id . '',
		),
	);
	$response                    = wp_remote_get( esc_url_raw( $url ), $args );
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
	<p id="<?php echo esc_attr( $args['id'] ); ?>"><?php esc_html_e( 'Edit Twitch API SETTINGS.', 'wpr' ); ?></p>
	<?php
}

add_action(
	'admin_init',
	function() {
		register_setting( 'wpr_academy', 'wpr_option' );
		// YOUTUBE API SECTION AND FIELDS
		add_settings_section(
			'api_fields',
			'Youtube API Credentials',
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
		// TWITCH SECTION AND FIELDS
		add_settings_section(
			'twitch_api_fields',
			'Twitch API Fields',
			'product_fields_callback',
			'wpr_academy'
		);

		add_settings_field(
			'wpr_twitch_login',
			'Twitch Login name',
			'product_field_callback',
			'wpr_academy',
			'twitch_api_fields',
			array(
				'label_for'       => 'wpr_twitch_login',
				'class'           => 'wpr_row',
				'wpr_custom_data' => 'custom',
			)
		);

		add_settings_field(
			'wpr_twitch_acces_token',
			'Twitch Acces Token',
			'product_field_callback',
			'wpr_academy',
			'twitch_api_fields',
			array(
				'label_for'       => 'wpr_twitch_acces_token',
				'class'           => 'wpr_row',
				'wpr_custom_data' => 'custom',
			)
		);

		add_settings_field(
			'wpr_twitch_client_id',
			'Twitch Client ID',
			'product_field_callback',
			'wpr_academy',
			'twitch_api_fields',
			array(
				'label_for'       => 'wpr_twitch_client_id',
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
			'Youtube and Twitch API Settings',
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
		type="text">
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



