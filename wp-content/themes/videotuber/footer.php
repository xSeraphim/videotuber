<?php wp_footer(); ?>

<div id="footer" class="footer">
	<div class="videotuber-socials">
		<h3>Follow me on:</h3>
		<a class="videotuber-social-link" href="https://twitter.com/YouTube" target="_blank" rel="noreferrer nofollow" aria-label="Twitter" title="Twitter">
		<?php echo '<img src='. WPR_VIDEOTUBER_PATH . '/assets/icons/facebook.svg>' ?>
		</a>
		<a class="videotuber-social-link" href="https://twitter.com/YouTube" target="_blank" rel="noreferrer nofollow" aria-label="Twitter" title="Twitter">
		<?php echo '<img src='. WPR_VIDEOTUBER_PATH . '/assets/icons/instagram.svg>' ?>
		</a>
		<a class="videotuber-social-link" href="https://twitter.com/YouTube" target="_blank" rel="noreferrer nofollow" aria-label="Twitter" title="Twitter">
		<?php echo '<img src='. WPR_VIDEOTUBER_PATH . '/assets/icons/tiktok.svg>' ?>
		</a>
		<a class="videotuber-social-link" href="https://twitter.com/YouTube" target="_blank" rel="noreferrer nofollow" aria-label="Twitter" title="Twitter">
		<?php echo '<img src='. WPR_VIDEOTUBER_PATH . '/assets/icons/twitter.svg>' ?>
		</a>
		<a class="videotuber-social-link" href="https://twitter.com/YouTube" target="_blank" rel="noreferrer nofollow" aria-label="Twitter" title="Twitter">
		<?php echo '<img src='. WPR_VIDEOTUBER_PATH . '/assets/icons/youtube.svg>' ?>
		</a>
	</div>
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
