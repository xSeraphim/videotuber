<?php get_header(); 
?>

<div class="page__hero-section" style="background-image: url(<?php echo get_theme_file_uri('/assets/images/videotuber-hero_main.jpg') ?>);">
    <div class="inner__content">
        <h1 class="headline__hero xl">Welcome to VideoTuber</h1>
        <a class="primary__button m">Check it OUT</a>
    </div>
</div>

<div class="page__featured-videos_text">
    <h2 class="xl">Latest Videos</h2>
</div>

<?php
$youtube_channel_url = videotuber_construct_url();
$videotuber_get_channel_data = CallAPI($youtube_channel_url); 

// Get videos from channel by YouTube Data API 
$apiData = file_get_contents('https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId='.$Channel_ID.'&maxResults='.$Max_Results.'&key='.$API_Key.''); 
if($apiData){ 
    $videoList = json_decode($apiData); 
}else{ 
    echo 'Invalid API key or channel ID.'; 
} ?>
<div class="videos__container">
<?php if(!empty($videoList->items)){ 
  foreach($videoList->items as $item){ 
    // Embed video 
      if(isset($item->id->videoId)){ 
        $url = "https://www.googleapis.com/youtube/v3/videos?id=" . $item->id->videoId . "&key=" . $API_Key . "&part=snippet,contentDetails,statistics,status";
        // var_dump($url);
        $json = file_get_contents($url);
        $getData = json_decode( $json , true);
        foreach((array)$getData['items'] as $key => $gDat){
            $title = $gDat['snippet']['title']; 
            $vidcategory = $gDat['snippet']['categoryId'];
            $vidviews = $gDat['statistics']['viewCount'];
            $vidpostdate = $gDat['snippet']['publishedAt'];
            

            ?>
    <div class="video">
        <div class="video__thumbnail">
            <?php echo '<iframe width="310" height="170" src="https://www.youtube.com/embed/'.$item->id->videoId.'" frameborder="0" allowfullscreen loading="lazy";></iframe>'; ?>
        
        </div>
        <div class="video__details">
            <div class="author">
                <img src="http://videotuber.local/wp-content/uploads/2022/09/asmongold-TV.jpg">
            </div>
            <div class="title">
                <h3><?php echo $title; ?></h3>
                <a href="https://www.youtube.com/channel/UCQeRaTukNYft1_6AZPACnog/featured">Asmongold TV</a> 
                <span><?php echo $vidviews; ?> • <?php echo videotuber_get_time_ago( strtotime($vidpostdate)); ?></span>
            </div>
        </div>

    </div>

        <?php }
        
      } 
  } ?>
</div> 
<?php }else{ 
  echo '<p class="error">'.$apiError.'</p>'; 
} ?>


<div class="page__featured-videos_text">
    <h2 class="xl">Latest Blog Posts</h2>
</div>
<div class="posts__container">
    <?php
        $homepagePosts = new WP_Query(array(
            'posts_per_page' => 4,
            'post_type' => 'post',
        ));
        if($homepagePosts->have_posts()) {

           while($homepagePosts->have_posts()){
            $homepagePosts->the_post(); 
            $author_id = get_the_author_meta('ID');
            $avatar_url = get_avatar_url($author_id);
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
                <span><?= videotuber_get_post_view(); ?> • <?php the_time(); ?></span>
            </div>
        </div>
</div>
           <?php } 
        }else{
            echo '<p>Sorry, no posts matched your criteria.</p>';
        }
        wp_reset_postdata();?>
   

</div>

<?php get_footer(); ?>