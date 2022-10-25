<?php
get_header();
?>
<div class="contact__container">
	<div class="container__left">
	<h1 class="font-size-xxl">Contact AsmongoldTV</h1>
	<p class="font-size-lg">Asmongold is an American Twitch streamer and YouTuber who is primarily known for playing World of Warcraft.[7] He is a co-owner of and content creator for One True King, a gaming organization consisting of online content creators.</p>
</div>

	<?php if ( is_active_sidebar( 'primary-sidebar' ) ) { ?>
	<div class="container__right">
		<?php get_sidebar('primary-sidebar'); ?>
	</div>
	<?php } ?>
</div>


<?php
get_footer();
