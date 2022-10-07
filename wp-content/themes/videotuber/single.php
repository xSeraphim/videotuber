<?php get_header(); ?>
<?php videotuber_set_post_view(); ?>
<?php 
$youtube_channel_url = videotuber_construct_url();
$videotuber_get_channel_data = videotuber_call_api($youtube_channel_url);
 var_dump($videotuber_get_channel_data); 
 
 ?>
<?php the_content(); ?>

<?php get_footer(); ?>