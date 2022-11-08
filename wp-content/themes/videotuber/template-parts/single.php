<?php


$author_id  = get_the_author_meta( 'ID' );
$avatar_url = get_avatar_url( $author_id );

if ( have_posts() ) {
	while ( have_posts() ) {
		the_post();
		?>
<div class="videotuber__container">
<div class="videotuber__post_banner">
	<img class="videotuber__post_image" src="<?php echo get_the_post_thumbnail_url(); ?>">
	<p class="font-size-md videotuber__categories"><?php echo get_the_category_list( ',' ); ?></p>
	<h1 class="font-size-xxl"><?php the_title(); ?></h1>
	<div class="post__details">
	<div class="author">
	<img src="<?php echo $avatar_url; ?>" alt="<?php the_author(); ?>" />
	<span class="font-size-base">Posted By: <?php the_author(); ?> - </span>
	<span class="font-size-base"><?php echo gt_get_post_view(); ?> • <?php the_time(); ?></span>
	</div>
	</div>



</div>
<div class="videotuber__post_content">
		<?php
		the_content();
		gt_set_post_view();
		?>
</div>

</div>


		<?php
	}
}
?>
