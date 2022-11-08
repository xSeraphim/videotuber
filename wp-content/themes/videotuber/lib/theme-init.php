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

	// Front Page Customizer begin section
	$wp_customize->add_section(
		'videotuber_front_options',
		array(
			'title'       => __( 'VideoTuber Frontpage Options', 'videotuber' ),
			'priority'    => 100,
			'capability'  => 'edit_theme_options',
			'description' => __( 'Change Videotuber Frontpage options here.', 'videotuber' ),
		)
	);
	//Slider Customizer settings
	$wp_customize->add_setting(
		'videotuber_image_one',
		array(
			'sanitize_callback' => 'absint',
			'type'              => 'theme_mod',
			'capability'        => 'edit_theme_options',
		)
	);
	$wp_customize->add_setting(
		'videotuber_image_two',
		array(
			'sanitize_callback' => 'absint',
			'type'              => 'theme_mod',
			'capability'        => 'edit_theme_options',
		)
	);
	$wp_customize->add_setting(
		'videotuber_image_three',
		array(
			'sanitize_callback' => 'absint',
			'type'              => 'theme_mod',
			'capability'        => 'edit_theme_options',
		)
	);
	// Text Customizer settings
	$wp_customize->add_setting(
		'videotuber_title_one',
		array(
			'sanitize_callback' => 'sanitize_text_field',
			'type'              => 'theme_mod',
			'capability'        => 'edit_theme_options',
		)
	);
	$wp_customize->add_setting(
		'videotuber_paragraph_one',
		array(
			'sanitize_callback' => 'sanitize_textarea_field',
			'type'              => 'theme_mod',
			'capability'        => 'edit_theme_options',
		)
	);
	$wp_customize->add_setting(
		'videotuber_title_two',
		array(
			'sanitize_callback' => 'sanitize_text_field',
			'type'              => 'theme_mod',
			'capability'        => 'edit_theme_options',
		)
	);
	$wp_customize->add_setting(
		'videotuber_paragraph_two',
		array(
			'sanitize_callback' => 'sanitize_textarea_field',
			'type'              => 'theme_mod',
			'capability'        => 'edit_theme_options',
		)
	);
	$wp_customize->add_setting(
		'videotuber_title_three',
		array(
			'sanitize_callback' => 'sanitize_text_field',
			'type'              => 'theme_mod',
			'capability'        => 'edit_theme_options',
		)
	);
	$wp_customize->add_setting(
		'videotuber_paragraph_three',
		array(
			'sanitize_callback' => 'sanitize_textarea_field',
			'type'              => 'theme_mod',
			'capability'        => 'edit_theme_options',
		)
	);

	// Text and Slider Image 1 Controls
	$wp_customize->add_control(
		new WP_Customize_Control(
			$wp_customize,
			'videotuber_title_one_text',
			array(
				'label'    => __( 'Set the first slider CTA text', 'videotuber' ),
				'section'  => 'videotuber_front_options',
				'settings' => 'videotuber_title_one',
				'type'     => 'text',
			)
		)
	);
	$wp_customize->add_control(
		new WP_Customize_Control(
			$wp_customize,
			'videotuber_paragraph_one_text',
			array(
				'label'    => __( 'Set the first slider paragraph text', 'videotuber' ),
				'section'  => 'videotuber_front_options',
				'settings' => 'videotuber_paragraph_one',
				'type'     => 'textarea',
			)
		)
	);
	$wp_customize->add_control(
		new WP_Customize_Media_Control(
			$wp_customize,
			'videotuber_image_one',
			array(
				'label'     => __( 'Set the first slider image', 'videotuber' ),
				'section'   => 'videotuber_front_options',
				'mime_type' => 'image',
			)
		)
	);

	// Text and Slider Image 2 Controls
	$wp_customize->add_control(
		new WP_Customize_Control(
			$wp_customize,
			'videotuber_title_two_text',
			array(
				'label'    => __( 'Set the second slider CTA text', 'videotuber' ),
				'section'  => 'videotuber_front_options',
				'settings' => 'videotuber_title_two',
				'type'     => 'text',
			)
		)
	);
	$wp_customize->add_control(
		new WP_Customize_Control(
			$wp_customize,
			'videotuber_paragraph_two_text',
			array(
				'label'    => __( 'Set the second slider paragraph text', 'videotuber' ),
				'section'  => 'videotuber_front_options',
				'settings' => 'videotuber_paragraph_two',
				'type'     => 'textarea',
			)
		)
	);
	$wp_customize->add_control(
		new WP_Customize_Media_Control(
			$wp_customize,
			'videotuber_image_two',
			array(
				'label'     => __( 'Set the second slider image', 'videotuber' ),
				'section'   => 'videotuber_front_options',
				'mime_type' => 'image',
			)
		)
	);

	// Text and Slider Image 3 Controls
	$wp_customize->add_control(
		new WP_Customize_Control(
			$wp_customize,
			'videotuber_title_three_text',
			array(
				'label'    => __( 'Set the third slider CTA text', 'videotuber' ),
				'section'  => 'videotuber_front_options',
				'settings' => 'videotuber_title_three',
				'type'     => 'text',
			)
		)
	);
	$wp_customize->add_control(
		new WP_Customize_Control(
			$wp_customize,
			'videotuber_paragraph_three_text',
			array(
				'label'    => __( 'Set the third slider paragraph text', 'videotuber' ),
				'section'  => 'videotuber_front_options',
				'settings' => 'videotuber_paragraph_three',
				'type'     => 'textarea',
			)
		)
	);
	$wp_customize->add_control(
		new WP_Customize_Media_Control(
			$wp_customize,
			'videotuber_image_three',
			array(
				'label'     => __( 'Set the third slider image', 'videotuber' ),
				'section'   => 'videotuber_front_options',
				'mime_type' => 'image',
			)
		)
	);

	// End FrontPage Customizer Section
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


function videotuber_get_channel_image() {
	$videotuber_api_settings = get_option( 'wpr_option' );
	$videotuber_api_key      = $videotuber_api_settings['wpr_api_token'];
	$videotuber_channel_id   = $videotuber_api_settings['wpr_api_client_id'];

	$url = add_query_arg(
		array(
			'part' => 'snippet',
			'id'   => '' . $videotuber_channel_id . '',
			'key'  => '' . $videotuber_api_key . '',
		),
		'https://youtube.googleapis.com/youtube/v3/channels'
	);

	$json = json_decode( wp_remote_retrieve_body( wp_remote_get( esc_url_raw( $url ) ) ), true );
	return $json['items'][0]['snippet']['thumbnails']['medium']['url'];
}

function videotuber_new_gravatar( $avatar_defaults ) {
	$videotuber_channel_image     = videotuber_get_channel_image();
	$myavatar                     = "$videotuber_channel_image";
	$avatar_defaults[ $myavatar ] = 'Default Gravatar';
	error_log( $myavatar );
	return $avatar_defaults;
}
add_filter( 'avatar_defaults', 'videotuber_new_gravatar' );

function gt_get_post_view() {
	$count = get_post_meta( get_the_ID(), 'post_views_count', true );
	return "$count views";
}
function gt_set_post_view() {
	$key     = 'post_views_count';
	$post_id = get_the_ID();
	$count   = (int) get_post_meta( $post_id, $key, true );
	$count++;
	update_post_meta( $post_id, $key, $count );
}
function gt_posts_column_views( $columns ) {
	$columns['post_views'] = 'Views';
	return $columns;
}
function gt_posts_custom_column_views( $column ) {
	if ( 'post_views' === $column ) {
		echo gt_get_post_view();
	}
}
add_filter( 'manage_posts_columns', 'gt_posts_column_views' );
add_action( 'manage_posts_custom_column', 'gt_posts_custom_column_views' );
