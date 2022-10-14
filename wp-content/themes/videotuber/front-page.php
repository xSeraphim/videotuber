<?php get_header();
?>

<!-- Slider main container -->
<div class="swiper" id="js-main-slider">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div style="background-image:url(http://videotuber.local/wp-content/uploads/2022/10/astronaut_ring_neon_156673_1920x1080.jpg);" class="swiper-slide">
		<h2 class="xl">Hey, this is Asmongold</h2>
		<p class="m">Welcome to my website</p>
	</div>
    <div style="background-image:url(http://videotuber.local/wp-content/uploads/2022/10/dragon_acorn_art_129982_1920x1080.jpg);" class="swiper-slide"></div>
    <div style="background-image:url(http://videotuber.local/wp-content/uploads/2022/10/dragon_cave_light_art_94937_1920x1080.jpg);" class="swiper-slide"></div>
    ...
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- If we need scrollbar -->
  <!-- <div class="swiper-scrollbar"></div> -->
</div>

<div class="page__featured-videos_text">
	<h2 class="xl">Latest Videos</h2>
</div>

<?php

$videoList               = videotuber_call_api();
$videotuber_api_settings = get_option( 'wpr_option' );
$videotuber_api_key      = $videotuber_api_settings['wpr_api_token'];
$videotuber_channel_id   = $videotuber_api_settings['wpr_api_client_id'];


?>
<div class="videos__container">
<?php
if ( ! empty( $videoList['items'] ) ) {
	foreach ( $videoList['items'] as $item ) {


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
			$vid_thumb		  = 'https://img.youtube.com/vi/' . $item['id']['videoId'] . '/mqdefault.jpg';
			$vid_title        = $video['items'][0]['snippet']['title'];
			$vid_channel_name = $video['items'][0]['snippet']['channelTitle'];
			$vid_post_date    = $video['items'][0]['snippet']['publishedAt'];
			$vid_views        = $video['items'][0]['statistics']['viewCount'];
			?>
		<div class="video">
				<div class="video__thumbnail">
					<iframe class="lazy" width="310" height="170"  data-src="<?php echo $vid_id; ?>" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen ;></iframe>
					
				</div>
				<div class="video__details">
					<div class="author">
						<img src="http://videotuber.local/wp-content/uploads/2022/09/asmongold-TV.jpg">
					</div>
					<div class="title">
						<h3><?php echo $vid_title; ?></h3>
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
 </div>  
<div class="page__featured-videos_text">
	<h2 class="xl">Latest Blog Posts</h2>
</div>
<div class="posts__container">
	<?php
		$homepagePosts = new WP_Query(
			array(
				'posts_per_page' => 4,
				'post_type'      => 'post',
			)
		);
		if ( $homepagePosts->have_posts() ) {

			while ( $homepagePosts->have_posts() ) {
				$homepagePosts->the_post();
				$author_id  = get_the_author_meta( 'ID' );
				$avatar_url = get_avatar_url( $author_id );
				?>
	<div class="post">
		<div class="post__thumbnail">
			<img src="<?php the_post_thumbnail_url(); ?>" alt="" />
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
				<span><?php echo videotuber_get_post_view(); ?> • <?php the_time(); ?></span>
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

<?php get_footer(); ?>
