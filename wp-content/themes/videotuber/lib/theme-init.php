<?php
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


function videotuber_theme_options( $wp_customize ) {
	$wp_customize->add_section(
		'videotuber_footer_options',
		array(
			'title'       => __( 'VideoTuber Footer Settings', 'videotuber' ),
			'priority'    => 100,
			'capability'  => 'edit_theme_options',
			'description' => __( 'Change footer options here.', 'videotuber' ),
		)
	);
	$wp_customize->add_setting(
		'footer_bg_color',
		array(
			'default' => 'e9e9e9',
		)
	);
	$wp_customize->add_control(
		new WP_Customize_Color_Control(
			$wp_customize,
			'footer_bg_color_control',
			array(
				'label'    => __( 'Footer Background Color', 'videotuber' ),
				'section'  => 'videotuber_footer_options',
				'settings' => 'footer_bg_color',
				'priority' => 10,
			)
		)
	);

	$wp_customize->add_section(
		'videotuber_social_options',
		array(
			'title'       => __( 'VideoTuber Social Link Settings', 'videotuber' ),
			'priority'    => 100,
			'capability'  => 'edit_theme_options',
			'description' => __( 'Change footer Social Links here.', 'videotuber' ),
		)
	);
	$wp_customize->add_setting(
		'facebook_social_link',
		array(
			'sanitize_callback' => 'esc_url_raw',
		)
	);
	$wp_customize->add_setting(
		'instagram_social_link',
		array(
			'sanitize_callback' => 'esc_url_raw',
		)
	);
	$wp_customize->add_setting(
		'tiktok_social_link',
		array(
			'sanitize_callback' => 'esc_url_raw',
		)
	);
	$wp_customize->add_setting(
		'twitter_social_link',
		array(
			'sanitize_callback' => 'esc_url_raw',
		)
	);
	$wp_customize->add_setting(
		'youtube_social_link',
		array(
			'sanitize_callback' => 'esc_url_raw',
		)
	);
	$wp_customize->add_control(
		new WP_Customize_Control(
			$wp_customize,
			'facebook_social_link_control',
			array(
				'label'    => __( 'Facebook Social URL', 'videotuber' ),
				'section'  => 'videotuber_social_options',
				'settings' => 'facebook_social_link',
				'priority' => 10,
				'type'     => 'url',
			)
		)
	);
	$wp_customize->add_control(
		new WP_Customize_Control(
			$wp_customize,
			'instagram_social_link_control',
			array(
				'label'    => __( 'Instagram Social URL', 'videotuber' ),
				'section'  => 'videotuber_social_options',
				'settings' => 'instagram_social_link',
				'priority' => 15,
				'type'     => 'url',
			)
		)
	);
	$wp_customize->add_control(
		new WP_Customize_Control(
			$wp_customize,
			'tiktok_social_link_control',
			array(
				'label'    => __( 'Tiktok Social URL', 'videotuber' ),
				'section'  => 'videotuber_social_options',
				'settings' => 'tiktok_social_link',
				'priority' => 20,
				'type'     => 'url',
			)
		)
	);
	$wp_customize->add_control(
		new WP_Customize_Control(
			$wp_customize,
			'twitter_social_link_control',
			array(
				'label'    => __( 'Twitter Social URL', 'videotuber' ),
				'section'  => 'videotuber_social_options',
				'settings' => 'twitter_social_link',
				'priority' => 25,
				'type'     => 'url',
			)
		)
	);
	$wp_customize->add_control(
		new WP_Customize_Control(
			$wp_customize,
			'youtube_social_link_control',
			array(
				'label'    => __( 'Youtube Social URL', 'videotuber' ),
				'section'  => 'videotuber_social_options',
				'settings' => 'youtube_social_link',
				'priority' => 30,
				'type'     => 'url',
			)
		)
	);
}
add_action( 'customize_register', 'videotuber_theme_options' );


function videotuber_footer_dynamic_css() {
	?>
	<style type='text/css'>
	:root {
		--footer:<?php echo get_theme_mod( 'footer_bg_color' ); ?> ;
	}
	</style>
	<?php
}
add_action( 'wp_head', 'videotuber_footer_dynamic_css' );

// function videotuber_dialog_scripts(){
// 	wp_enqueue_script( 'dialog', WPR_VIDEOTUBER_URL . 'dist/assets/js/dialog.js', array( 'jquery' ), '1.0.0', true );
// 	wp_localize_script(
// 		'dialog',
// 		'WPR',
// 		array(
// 			'ajax_url'   => admin_url( 'admin-ajax.php' ),
// 			'ajax_nonce' => wp_create_nonce( 'dialog' ),
// 		)
// 	);
// }
function videotuber_show_video_modal() {
	header( 'Content-Type: application/json' );
	$vid_id  = $_GET['id'];
	$vid_url = 'https://www.youtube.com/embed/' . $vid_id;

	$url = array(
		'url' => $vid_url,
	);
	echo wp_json_encode( $url );
	wp_die();
}
add_action( 'wp_ajax_videotuber_show_video_modal', 'videotuber_show_video_modal' );
add_action( 'wp_ajax_nopriv_videotuber_show_video_modal', 'videotuber_show_video_modal' );
