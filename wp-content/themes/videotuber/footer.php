<?php wp_footer(); ?>

<div id="footer" class="footer">
		<?php $videotuber_socials = array(
			'facebook' => get_theme_mod('facebook_social_link'),
			'instagram' => get_theme_mod('instagram_social_link'),
			'tiktok' => get_theme_mod('tiktok_social_link'),
			'twitter' => get_theme_mod('twitter_social_link'),
			'youtube' => get_theme_mod('youtube_social_link'),
		);
		$videotuber_valid_socials = array_filter($videotuber_socials);
		if(array_filter($videotuber_valid_socials)): ?>
	<div class="videotuber-socials">
		<h3>Follow me on:</h3>
		<?php foreach($videotuber_valid_socials as $key => $value) { ?>
		<a class="videotuber-social-link" href="<?php echo $value;//get_theme_mod('facebook_social_link') ?>" target="_blank" rel="noreferrer nofollow" aria-label="Twitter" title="Twitter">
		<?php echo '<img src='. WPR_VIDEOTUBER_PATH . '/dist/assets/images/'. $key . '.svg>' ?>
		</a>
		<?php } ?>
		
	</div>
	<?php endif; ?>
	<div class="videotuber-middle-footer">
	<?php
	wp_nav_menu(array(
		'theme_location' => 'foooterMiddleLocation1',
	  ));
	  wp_nav_menu(array(
		'theme_location' => 'foooterMiddleLocation2',
	  ));
	  wp_nav_menu(array(
		'theme_location' => 'foooterMiddleLocation3',
	  ));
	?>
	</div>
	<div class="videotuber-bottom-footer">
	<?php if ( function_exists( 'the_custom_logo' ) ) { 
				the_custom_logo();
				}
				wp_nav_menu(array(
					'theme_location' => 'foooterBottomLocation',
				  ));
	?>

	</div>
	   
	</div>
	</body>
</html>
