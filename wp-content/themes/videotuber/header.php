<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo('charset'); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <?php wp_head(); ?>
    </head>
    <body>
        <!-- <header class="header">
            <a href="<?// php echo site_url(); ?>" class="logo">VIDEOTUBER</a>
            <input class="side-menu" type="checkbox" id="side-menu"/>
            <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
            <nav class="nav">
                <ul class="menu">
                <? // php 
              //wp_nav_menu(array(
                //'theme_location' => 'headerMenuLocation',
             // ));
            ?>
                </ul>
            </nav>
        </header> -->
        <div class="header">
      <div class="header__left">
      <img
          src="https://cdn.cdnlogo.com/logos/y/92/youtube.svg"
          alt=""
        />
      <div class="header__icons">
        <i class="material-icons display-this">search</i>
        <i class="material-icons">videocam</i>
        <i class="material-icons">apps</i>
        <i class="material-icons">notifications</i>
        <i class="material-icons display-this">account_circle</i>
      </div>
        
      </div>

      <div class="header__search">
        <form action="">
          <input type="text" placeholder="Search" />
          <button><i class="material-icons">search</i></button>
        </form>
      </div>
      <div class="header__right">
        <i class="material-icons display-this">account_circle</i>
        <i id="menu" class="material-icons">menu</i>
        <img
          src="https://www.youtube.com/about/static/svgs/icons/brand-resources/YouTube-logo-full_color_light.svg?cache=72a5d9c"
          alt=""
        />
      </div>
      
    </div>
    <!-- Header Ends -->