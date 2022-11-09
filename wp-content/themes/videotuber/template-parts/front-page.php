<?php

$videotuber_sliders = array(
	'slider1' => array(
		'image'     => get_theme_mod( 'videotuber_image_one' ),
		'text'      => get_theme_mod( 'videotuber_title_one' ),
		'paragraph' => get_theme_mod( 'videotuber_paragraph_one' ),
	),
	'slider2' => array(
		'image'     => get_theme_mod( 'videotuber_image_two' ),
		'text'      => get_theme_mod( 'videotuber_title_two' ),
		'paragraph' => get_theme_mod( 'videotuber_paragraph_two' ),
	),
	'slider3' => array(
		'image'     => get_theme_mod( 'videotuber_image_three' ),
		'text'      => get_theme_mod( 'videotuber_title_three' ),
		'paragraph' => get_theme_mod( 'videotuber_paragraph_three' ),
	),
);

$videotuber_valid_sliders = array_filter( $videotuber_sliders );
?>
<?php if ( array_filter( $videotuber_valid_sliders ) ) : ?>
<!-- Slider main container -->
<div class="swiper" id="js-main-slider">
<!-- Additional required wrapper -->
<div class="swiper-wrapper">
	<!-- Slides -->
	<?php foreach ( $videotuber_valid_sliders as $key => $value ) { ?>
	<div style="background-image:url(<?php echo wp_get_attachment_url( $value['image'] ); ?>);" class="swiper-slide">
		<h2 class="font-size-xxl"><?php echo $value['text']; ?></h2>
		<p class="font-size-lg"><?php echo $value['paragraph']; ?></p>
	</div>
<?php } ?>
</div>
<!-- If we need pagination -->
<div class="swiper-pagination"></div>

<!-- If we need navigation buttons -->
<div class="swiper-button-prev"></div>
<div class="swiper-button-next"></div>

<!-- If we need scrollbar -->
<!-- <div class="swiper-scrollbar"></div> -->
</div>
<?php endif ?>
<div class="page__featured-videos_text">
	<h2 class="font-size-xxl">Latest Videos</h2>
</div>

<?php
$videotuber_max_results   = 6;
$videotuber_api_settings  = get_option( 'wpr_option' );
$videotuber_api_key       = $videotuber_api_settings['wpr_api_token'];
$videotuber_channel_id    = $videotuber_api_settings['wpr_api_client_id'];
$videotuber_max_results   = $videotuber_api_settings['wpr_api_max_results'];
$video_list               = videotuber_call_api( $videotuber_max_results );
$videotuber_channel_image = videotuber_get_channel_image();




?>
<div class="grid-4 grid--tablet2 grid--mobile1">
<div class="videos__container">
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
					<!-- <iframe class="lazy" width="310" height="170"  data-src="<?php // echo $vid_id; ?>" frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen ;></iframe> -->
					<img data-src="<?php echo $vid_thumb; ?>" class="lazy">
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
}else{
	echo 'There is a problem with your API Key.';
}

?>
</div>  
</div>

<div class="page__featured-videos_text">
	<h2 class="font-size-xxl">Latest Twitch Streams</h2>
</div>
<?php
$videotuber_twitch_response = videotuber_get_twitch_id();
$videotuber_twitch_id       = $videotuber_twitch_response['data'][0]['id'];
$videotuber_twitch_videos   = videotuber_get_twitch_videos( $videotuber_twitch_id );

?>
<div class="grid-2 grid--tablet2 grid--mobile1">
<div class="videos__container">
<?php
if ( ! empty( $videotuber_twitch_videos['data'] ) ) {
	foreach ( $videotuber_twitch_videos['data'] as $data ) {
		$twitch_video_id        = $data['id'];
		$twitch_video_thumb     = str_replace( '%{width}x%{height}', '480x272', $data['thumbnail_url'] );
		$twitch_video_title     = $data['title'];
		$twitch_video_post_date = $data['published_at'];
		$twitch_video_views     = $data['view_count'];
		?>
<div class="video">
	<div class="video__thumbnail">
		<img data-src="<?php echo $twitch_video_thumb; ?>" class="lazy">
		<div class="twitch__button" data-id="<?php echo $twitch_video_id; ?>"></div>
	</div>
	<div class="video__details">
		<div class="author">
			<img src="<?php echo $videotuber_channel_image; ?>">
		</div>
		<div class="title">
			<h3 class="font-size-lg"><?php echo $twitch_video_title; ?></h3>
				<a href=<?php echo "https://www.youtube.com/channel/$videotuber_channel_id"; ?>><?php echo $vid_channel_name; ?></a> 
				<span><?php echo videotuber_video_views( $twitch_video_views ) . ' views'; ?> • <?php echo videotuber_get_time_ago( strtotime( $twitch_video_post_date ) ); ?></span>
		</div>
	</div>
</div>


		<?php

		// var_dump($data);
	}
}
?>

</div>
</div>

<div class="page__featured-videos_text">
	<h2 class="font-size-xxl">Latest Blog Posts</h2>
</div>
<div class="grid-4 grid--tablet2 grid--mobile1">
<div class="posts__container">
	<?php
		$homepage_posts = new WP_Query(
			array(
				'posts_per_page' => 8,
				'post_type'      => 'post',
			)
		);
		if ( $homepage_posts->have_posts() ) {

			while ( $homepage_posts->have_posts() ) {
				$homepage_posts->the_post();
				$author_id  = get_the_author_meta( 'ID' );
				$avatar_url = get_avatar_url( $author_id );
				?>
	<div class="post">
		<div class="post__thumbnail">
			<img data-src="<?php the_post_thumbnail_url(); ?>" alt="" class="lazy"/>
		</div>
		<div class="post__details">
			<div class="author">
				<img src="<?php echo $avatar_url; ?>" alt="<?php the_author(); ?>" />
			</div>
			<div class="title">
				<h3>
				<a href="<?php the_permalink(); ?>">
					<?php the_title(); ?>
				</a>
				</h3>

				<a href="<?php the_permalink(); ?>"><?php the_category(); ?></a>
				<span><?php echo gt_get_post_view(); ?> • <?php the_time(); ?></span>
			</div>
		</div>
</div>

				<?php
			}
		} else {
			echo '<p>Sorry, no posts matched your criteria.</p>';
		}
		wp_reset_postdata();
		?>
   

</div>
	</div>
<dialog id="dialog"><div class="dialog__content"></div><span><i class="material-icons">close</i></span></dialog>
