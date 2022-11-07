<?php

get_header();
?>

<?php
$videotuber_max_results   = '10';
$video_list               = videotuber_call_api( $videotuber_max_results );
$videotuber_api_settings  = get_option( 'wpr_option' );
$videotuber_api_key       = $videotuber_api_settings['wpr_api_token'];
$videotuber_channel_id    = $videotuber_api_settings['wpr_api_client_id'];
$videotuber_channel_image = videotuber_get_channel_image();

?>

<div class="page__featured-videos_text">
	<h2 class="font-size-xxl">My Youtube Videos</h2>
	<p class="font-size-lg">You can use the search function to find the videos that you like.</p>
	<div class="videotuber__search" id="videotuber__search">
		<input type="text" placeholder="Search using keywords for videos on my channel.." />
	</div>
</div>
<div class="grid-4 grid--tablet2 grid--mobile1">
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
					<!-- <iframe class="lazy" width="310" height="170"  data-src="<?php // echo $vid_id; ?>" frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen ;></iframe> -->
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
</div>
</div>  
<dialog id="dialog"><div class="dialog__content"></div><span><i class="material-icons">close</i></span></dialog>

<?php
get_footer();
