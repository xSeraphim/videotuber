<?php
if ( is_archive() || is_search() ) {
	?>
<div class="page__featured-videos_text">
	<h1 class="font-size-xxl"><?php echo get_the_archive_title(); ?></h1>
	<p class="font-size-lg"><?php the_archive_description(); ?></p>
</div>
<div class="grid-4 grid--tablet2 grid--mobile1">
<div class="posts__container">
	<?php

	if ( have_posts() ) {

		while ( have_posts() ) {
			the_post();
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



<?php } else { ?>
<div class="page__featured-videos_text">
	<h1 class="font-size-xxl">Welcome to my Blog</h1>
	<p class="font-size-lg">Keep up with the latest news.</p>
</div>
<div class="grid-4 grid--tablet2 grid--mobile1">
<div class="posts__container">
	<?php
		$homepage_posts = new WP_Query(
			array(
				'posts_per_page' => -1,
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
	<?php
}
?>
</div>
