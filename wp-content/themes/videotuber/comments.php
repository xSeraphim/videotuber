<?php
if ( post_password_required() ) {
	return;
}
?>
<div id="comments">
<?php if ( have_comments() ) { ?>
	<h2 class="comments_title">
		<?php
		printf(
			esc_html(
			/* translators: %1$s is number of comments and %2$s is post title */
				_n(
					'%1$s Reply to "%2$s"',
					'%1$s Replies to "%2$s"',
					get_comments_number(),
					'videotuber'
				)
			),
			number_format_i18n( get_comments_number() ),
			get_the_title()
		)
		?>
	</h2>

	<ul class="comments_list">
		<?php
		wp_list_comments(
			array(
				'avatar_size' => 40,

			)
		);

		?>


	</ul>
	<?php } ?>

	<?php comment_form(); ?>
</div>
