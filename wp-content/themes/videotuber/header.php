<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo('charset'); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <?php wp_head(); ?>
    </head>
    <body>
        <header class="header">
            <a href="<?php echo site_url(); ?>" class="logo">VIDEOTUBER</a>
            <input class="side-menu" type="checkbox" id="side-menu"/>
            <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
            <nav class="nav">
                <ul class="menu">
                <?php 
              wp_nav_menu(array(
                'theme_location' => 'headerMenuLocation',
              ));
            ?>
                </ul>
            </nav>
        </header>