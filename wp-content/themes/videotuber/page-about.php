<?php
get_header();
?>
<div class="hero__banner" id="hero__banner">
    <img class="hero__image" src="<?php echo get_the_post_thumbnail_url(); ?>">
</div>
<div class="about__content padding_m flex center">
    <h1 class="font-size-xxl">About AsmongoldTV</h1>
    <h2 class="font-size-lg">Hey Guys, I'm Asmon</h2>
    <p class="font-size-lg">Our mission is to give everyone a voice and show them the world.We believe that everyone deserves to have a voice, and that the world is a better place when we listen, share and build community through our stories.</p>
</div>

<div class="sponsor__content padding_m flex center">
    <h2 class="font-size-xl">These are the sponsors that help my channel</h2>
    <p class="font-size-lg">By supporting them you help me.</p>
</div>
    <!-- Slider main container -->
    <div class="swiper padding_m" id="js-sponsor-slider">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div style="background-image:url(http://videotuber.local/wp-content/uploads/2022/10/astronaut_ring_neon_156673_1920x1080.jpg);" class="swiper-slide"></div>
    <div style="background-image:url(http://videotuber.local/wp-content/uploads/2022/10/dragon_acorn_art_129982_1920x1080.jpg);" class="swiper-slide"></div>
    <div style="background-image:url(http://videotuber.local/wp-content/uploads/2022/10/dragon_cave_light_art_94937_1920x1080.jpg);" class="swiper-slide"></div>
    <div style="background-image:url(http://videotuber.local/wp-content/uploads/2022/10/astronaut_ring_neon_156673_1920x1080.jpg);" class="swiper-slide"></div>
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need navigation buttons -->
  <!-- <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div> -->

  <!-- If we need scrollbar -->
  <!-- <div class="swiper-scrollbar"></div> -->
</div>




<?php
get_footer();