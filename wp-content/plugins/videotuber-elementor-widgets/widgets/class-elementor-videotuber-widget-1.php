<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Elementor_Videotuber_Widget_1 extends \Elementor\Widget_Base {

	public function get_name() {
		return 'videotuber_widget_1';
	}

	public function get_title() {
		return esc_html__( 'Videotuber Youtube Videos', 'videotuber-elementor' );
	}

	public function get_icon() {
		return 'eicon-video-playlist';
	}

	public function get_categories() {
		return array( 'basic' );
	}

	public function get_keywords() {
		return array( 'hello', 'world' );
	}

	protected function register_controls() {
		// Title in the content section
		$this->start_controls_section(
			'content_section',
			array(
				'label' => esc_html__( 'Content', 'videotuber-elementor' ),
				'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
			)
		);

		$this->add_control(
			'video_h1_typography',
			array(
				'label'     => esc_html__( 'Control the title typography', 'videotuber-elementor' ),
				'type'      => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			)
		);

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			array(
				'name'     => 'videotuber_h1_text_typography',
				'selector' => '{{WRAPPER}} .videotuber_title',
			)
		);

		$this->add_control(
			'widget_title',
			array(
				'label'       => esc_html__( 'Title for your Youtube Videos', 'videotuber-elementor' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'default'     => esc_html__( 'Default title for videos', 'videotuber-elementor' ),
				'placeholder' => esc_html__( 'Type your title here', 'videotuber-elementor' ),
			)
		);
		// Description in the content section

		$this->add_control(
			'video_p_typography',
			array(
				'label'     => esc_html__( 'Control the description typography', 'videotuber-elementor' ),
				'type'      => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			)
		);

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			array(
				'name'     => 'videotuber_p_text_typography',
				'selector' => '{{WRAPPER}} .videotuber_description',
			)
		);
		$this->add_control(
			'widget_paragraph',
			array(
				'label'       => esc_html__( 'Paragraph for your Youtube Videos', 'videotuber-elementor' ),
				'type'        => \Elementor\Controls_Manager::TEXTAREA,
				'default'     => esc_html__( 'Default paragraph for videos', 'videotuber-elementor' ),
				'rows'        => 10,
				'placeholder' => esc_html__( 'Type your paragraph here', 'videotuber-elementor' ),
			)
		);

		$this->end_controls_section();

		// Rows and columns section in the style tab
		$this->start_controls_section(
			'style_section',
			array(
				'label' => esc_html__( 'Style Section', 'videotuber-elementor' ),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
			)
		);

		$this->start_controls_tabs(
			'style_tabs'
		);

		$this->start_controls_tab(
			'style_column_tab',
			array(
				'label' => esc_html__( 'Columns', 'videotuber-elementor' ),
			)
		);
		$this->add_responsive_control(
			'columns_number',
			array(
				'label'        => esc_html__( 'Number of columns', 'videotuber-elementor' ),
				'type'         => \Elementor\Controls_Manager::NUMBER,
				'min'          => 1,
				'max'          => 5,
				'step'         => 1,
				'default'      => 5,
				'devices'      => array( 'desktop', 'tablet', 'mobile' ),
				'prefix_class' => 'grid-%s',
			),
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'style_row_tab',
			array(
				'label' => esc_html__( 'Max Results', 'videotuber-elementor' ),
			)
		);
		$this->add_control(
			'rows_number',
			array(
				'label'   => esc_html__( 'Number of videos to show', 'videotuber-elementor' ),
				'type'    => \Elementor\Controls_Manager::NUMBER,
				'min'     => 1,
				'max'     => 25,
				'step'    => 1,
				'default' => 4,
			)
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_control(
			'column_row',
			array(
				'label'     => esc_html__( 'Control the video column and row gap', 'videotuber-elementor' ),
				'type'      => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			)
		);

		$this->add_responsive_control(
			'column_gap',
			array(
				'type'            => \Elementor\Controls_Manager::SLIDER,
				'label'           => esc_html__( 'Column Gap', 'videotuber-elementor' ),
				'range'           => array(
					'px' => array(
						'min' => 0,
						'max' => 100,
					),
				),
				'devices'         => array( 'desktop', 'tablet', 'mobile' ),
				'desktop_default' => array(
					'size' => 30,
					'unit' => 'px',
				),
				'tablet_default'  => array(
					'size' => 20,
					'unit' => 'px',
				),
				'mobile_default'  => array(
					'size' => 10,
					'unit' => 'px',
				),
				'selectors'       => array(
					'{{WRAPPER}} .videos__container' => 'column-gap: {{SIZE}}{{UNIT}};',
				),
			)
		);

		$this->add_responsive_control(
			'row_gap',
			array(
				'type'            => \Elementor\Controls_Manager::SLIDER,
				'label'           => esc_html__( 'Row Gap', 'videotuber-elementor' ),
				'range'           => array(
					'px' => array(
						'min' => 0,
						'max' => 100,
					),
				),
				'devices'         => array( 'desktop', 'tablet', 'mobile' ),
				'desktop_default' => array(
					'size' => 30,
					'unit' => 'px',
				),
				'tablet_default'  => array(
					'size' => 20,
					'unit' => 'px',
				),
				'mobile_default'  => array(
					'size' => 10,
					'unit' => 'px',
				),
				'selectors'       => array(
					'{{WRAPPER}} .videos__container' => 'row-gap: {{SIZE}}{{UNIT}};',
				),
			)
		);

		$this->add_control(
			'videotuber_padding',
			array(
				'label'     => esc_html__( 'Control the video container padding', 'videotuber-elementor' ),
				'type'      => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			)
		);

		$this->add_responsive_control(
			'videotuber_padding_video',
			array(
				'label'      => __( 'Padding', 'videotuber-elementor' ),
				'type'       => Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px', '%' ),
				'selectors'  => array(
					'{{WRAPPER}} .videos__container .video' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);

		$this->add_control(
			'video_shadow',
			array(
				'label'     => esc_html__( 'Control the video container box shadow, border type and border radius', 'videotuber-elementor' ),
				'type'      => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			)
		);
		$this->add_control(
			'custom_box_shadow',
			array(
				'label'     => esc_html__( 'Box Shadow', 'videotuber-elementor' ),
				'type'      => \Elementor\Controls_Manager::BOX_SHADOW,
				'selectors' => array(
					'{{WRAPPER}} .videos__container .video' => 'box-shadow: {{HORIZONTAL}}px {{VERTICAL}}px {{BLUR}}px {{SPREAD}}px {{COLOR}};',
				),
			)
		);

		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			array(
				'name'     => 'border',
				'selector' => '{{WRAPPER}} .videos__container .video',
			)
		);

		$this->add_responsive_control(
			'videotuber_border_radius',
			array(
				'label'      => __( 'Border Radius', 'videotuber-elementor' ),
				'type'       => Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px', '%' ),
				'selectors'  => array(
					'{{WRAPPER}} .videos__container .video' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				),
			)
		);

		$this->add_control(
			'video_title_typography',
			array(
				'label'     => esc_html__( 'Control the video title typography', 'videotuber-elementor' ),
				'type'      => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			)
		);

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			array(
				'name'     => 'videotuber_title_text_typography',
				'selector' => '{{WRAPPER}} .videos__container .video .video__details .title h3',
			)
		);

		$this->add_control(
			'video_channel_typography',
			array(
				'label'     => esc_html__( 'Control the video channel typography', 'videotuber-elementor' ),
				'type'      => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			)
		);

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			array(
				'name'     => 'videotuber_channel_text_typography',
				'selector' => '{{WRAPPER}} .videos__container .video .video__details .title a',
			)
		);

		$this->add_control(
			'video_views_typography',
			array(
				'label'     => esc_html__( 'Control the video meta typography', 'videotuber-elementor' ),
				'type'      => \Elementor\Controls_Manager::HEADING,
				'separator' => 'before',
			)
		);

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			array(
				'name'     => 'videotuber_views_text_typography',
				'selector' => '{{WRAPPER}} .videos__container .video .video__details .title span',
			)
		);

		$this->end_controls_section();
	}

	protected function render() {

		$videotuber_api_settings = get_option( 'wpr_option' );
		$videotuber_api_key      = $videotuber_api_settings['wpr_api_token'];
		$videotuber_channel_id   = $videotuber_api_settings['wpr_api_client_id'];
		$settings                = $this->get_settings_for_display();
		$videotuber_max_results  = $settings['rows_number'];
		$video_list              = videotuber_call_api( $videotuber_max_results );

		// $videotuber_columns = $settings['columns_number'];
		// $videotuber_max_results = $videotuber_rows * $videotuber_columns;
		$videotuber_channel_image = videotuber_get_channel_image();
		?>

		<h1 class="videotuber_title"><?php echo $settings['widget_title']; ?></h1>
		<p class="videotuber_description"><?php echo $settings['widget_paragraph']; ?></p>
		<div class="videos__container" id="videos__container">
		<?php
		if ( ! empty( $video_list['items'] ) ) {
			foreach ( $video_list['items'] as $item ) {

				if ( isset( $item['id']['videoId'] ) ) {
					$url = add_query_arg(
						array(
							'part' => 'snippet' . '&part=statistics',
							'id'   => '' . $item['id']['videoId'] . '',
							'key'  => '' . $videotuber_api_key . '',
						),
						'https://www.googleapis.com/youtube/v3/videos'
					);
					// var_dump($url);
					$json  = wp_remote_get( esc_url_raw( $url ) );
					$video = json_decode( wp_remote_retrieve_body( $json ), true );
					// var_dump($video['items']);
					$vid_id           = 'https://www.youtube.com/embed/' . $item['id']['videoId'];
					$vid_thumb        = 'https://img.youtube.com/vi/' . $item['id']['videoId'] . '/mqdefault.jpg';
					$vid_title        = $video['items'][0]['snippet']['title'];
					$vid_channel_name = $video['items'][0]['snippet']['channelTitle'];
					$vid_post_date    = $video['items'][0]['snippet']['publishedAt'];
					$vid_views        = $video['items'][0]['statistics']['viewCount'];
					?>
		<div class="video">
				<div class="video__thumbnail">
					<img src="<?php echo $vid_thumb; ?>" class="lazy">
					<div class="play__button" data-id="<?php echo $item['id']['videoId']; ?>"></div>
				</div>
				<div class="video__details">
					<div class="author">
						<img src="<?php echo $videotuber_channel_image; ?>">
					</div>
					<div class="title">
						<h3 class="font-size-lg"><?php echo $vid_title; ?></h3>
						<a href=<?php echo "https://www.youtube.com/channel/$videotuber_channel_id"; ?>><?php echo $vid_channel_name; ?></a> 
						<span><?php echo videotuber_video_views( $vid_views ) . ' views'; ?> • <?php echo videotuber_get_time_ago( strtotime( $vid_post_date ) ); ?></span>
					</div>
				</div>

			</div>
					<?php
				}
			}
		}
		?>
	<dialog id="dialog"><div class="dialog__content"></div><span><i class="material-icons">close</i></span></dialog>  

		<?php
	}
	public function content_template() {

		$videotuber_api_settings = get_option( 'wpr_option' );
		$videotuber_api_key      = $videotuber_api_settings['wpr_api_token'];
		$videotuber_channel_id   = $videotuber_api_settings['wpr_api_client_id'];
		$videotuber_max_results  = intval( '{{{ settings.rows_number }}}' );
		$video_list              = videotuber_call_api( $videotuber_max_results );

		// $videotuber_columns = intval('{{{ settings.columns_number }}}');
		// $videotuber_max_results = $videotuber_rows * $videotuber_columns;
		$videotuber_channel_image = videotuber_get_channel_image();
		?>
		<h1 class="videotuber_title">{{{ settings.widget_title }}}</h1>
		<p class="videotuber_description">{{{ settings.widget_paragraph }}}</p>
		<div class="videos__container" id="videos__container">
		<?php
		if ( ! empty( $video_list['items'] ) ) {
			foreach ( $video_list['items'] as $item ) {

				if ( isset( $item['id']['videoId'] ) ) {
					$url = add_query_arg(
						array(
							'part' => 'snippet' . '&part=statistics',
							'id'   => '' . $item['id']['videoId'] . '',
							'key'  => '' . $videotuber_api_key . '',
						),
						'https://www.googleapis.com/youtube/v3/videos'
					);
					// var_dump($url);
					$json  = wp_remote_get( esc_url_raw( $url ) );
					$video = json_decode( wp_remote_retrieve_body( $json ), true );
					// var_dump($video['items']);
					$vid_id           = 'https://www.youtube.com/embed/' . $item['id']['videoId'];
					$vid_thumb        = 'https://img.youtube.com/vi/' . $item['id']['videoId'] . '/mqdefault.jpg';
					$vid_title        = $video['items'][0]['snippet']['title'];
					$vid_channel_name = $video['items'][0]['snippet']['channelTitle'];
					$vid_post_date    = $video['items'][0]['snippet']['publishedAt'];
					$vid_views        = $video['items'][0]['statistics']['viewCount'];
					?>
		<div class="video">
				<div class="video__thumbnail">
					<img src="<?php echo $vid_thumb; ?>" class="lazy">
					<div class="play__button" data-id="<?php echo $item['id']['videoId']; ?>"></div>
				</div>
				<div class="video__details">
					<div class="author">
						<img src="<?php echo $videotuber_channel_image; ?>">
					</div>
					<div class="title">
						<h3 class="font-size-lg"><?php echo $vid_title; ?></h3>
						<a href=<?php echo "https://www.youtube.com/channel/$videotuber_channel_id"; ?>><?php echo $vid_channel_name; ?></a> 
						<span><?php echo videotuber_video_views( $vid_views ) . ' views'; ?> • <?php echo videotuber_get_time_ago( strtotime( $vid_post_date ) ); ?></span>
					</div>
				</div>

			</div>


					<?php
				}
			}
		}
		?>
	<dialog id="dialog"><div class="dialog__content"></div><span><i class="material-icons">close</i></span></dialog>
		<?php
	}
}
