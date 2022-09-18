<?php

function videtuber_add_styles() {
    wp_enqueue_style('videotuber_main_styles', get_theme_file_uri('/assets/css/main.css'));
    
}
add_action('wp_enqueue_scripts', 'videtuber_add_styles');

function videotuber_features() {
    add_theme_support('title-tag');
    register_nav_menu('headerMenuLocation', 'Header Main Menu Navigation');
}
add_action('after_setup_theme', 'videotuber_features');