<?php
get_header();
?>
<!-- Slider main container -->
<div class="swiper" id="js-main-slider">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div style="background-image:url(http://videotuber.local/wp-content/uploads/2022/10/astronaut_ring_neon_156673_1920x1080.jpg);" class="swiper-slide"><h2 style="color:black;font-size:50px;">Welcome to my website</h2></div>
    <div class="swiper-slide"><img src="http://videotuber.local/wp-content/uploads/2022/10/dragon_acorn_art_129982_1920x1080.jpg"></div>
    <div class="swiper-slide"><img src="http://videotuber.local/wp-content/uploads/2022/10/dragon_cave_light_art_94937_1920x1080.jpg"></div>
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
<?php
// // Get videos from channel by YouTube Data API
// $apiData = file_get_contents( 'https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=' . $Channel_ID . '&maxResults=' . $Max_Results . '&key=' . $API_Key . '' );
// if ( $apiData ) {
// 	$videoList = json_decode( $apiData );
// } else {
// 	echo 'Invalid API key or channel ID.';
// }
// var_dump( $apiData );

// if ( ! empty( $videoList->items ) ) {
// 	foreach ( $videoList->items as $item ) {
// 		// Embed video
// 		if ( isset( $item->id->videoId ) ) {
// 			$url = 'https://www.googleapis.com/youtube/v3/videos?id=' . $item->id->videoId . '&key=' . $API_Key . '&part=snippet,contentDetails,statistics,status';

// 			$json    = file_get_contents( $url );
// 			$getData = json_decode( $json, true );
// 			foreach ( (array) $getData['items'] as $key => $gDat ) {
// 				$title = $gDat['snippet']['title'];

// 			}
			// Output title

	// 		echo ' 
  //         <div style="width: 100%; max-width: 550px; box-shadow: 6px 6px 10px hsl(206.5, 0%, 75%); margin: 2rem;">
  //   <div style="position: relative; padding-bottom: 56.15%; height: 0; overflow: hidden;">
  //     <iframe 
  //       style="position: absolute; top: 0; left:0; width: 100%; height: 100%; border: 0;"
  //       loading="lazy";
  //       srcdoc="<style>
  //         * {
  //         padding: 0;
  //         margin: 0;
  //         overflow: hidden;
  //         }
          
  //         body, html {
  //           height: 100%;
  //         }
          
  //         img, svg {
  //           position: absolute;
  //           width: 100%;
  //           top: 0;
  //           bottom: 0;
  //           margin: auto;
  //         }
          
  //         svg {
  //           filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
  //           transition: all 250ms ease-in-out;
  //         }
          
  //         body:hover svg {
  //           filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));
  //           transform: scale(1.2);
  //         }
  //       </style>
  //       <a href=\'https://www.youtube.com/embed/GOW1oxrwUz0?autoplay=1\'>
  //         <img src=\'https://img.youtube.com/vi/GOW1oxrwUz0/hqdefault.jpg\' alt=\'Coffee Recipe Javascript Project\'>
  //         <svg xmlns=\'http://www.w3.org/2000/svg\' width=\'64\' height=\'64\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'#ffffff\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\' class=\'feather feather-play-circle\'><circle cx=\'12\' cy=\'12\' r=\'10\'></circle><polygon points=\'10 8 16 12 10 16 10 8\'></polygon></svg>
  //       </a>
  //       "
  //       src="https://www.youtube.com/embed/GOW1oxrwUz0" 
  //       title="Coffee Recipe Javascript Project"
  //       frameborder="0"
  //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  //       allowfullscreen>
  //     </iframe>
  //   </div>
  // </div>';
// 		}
// 	}
// } else {
// 	echo '<p class="error">' . $apiError . '</p>';
// }
get_footer();