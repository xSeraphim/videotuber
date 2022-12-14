<?php

function videtuber_add_styles() {

	wp_enqueue_style( 'videotuber_bundle_styles', get_theme_file_uri( '/dist/assets/css/bundle.css' ) );
	wp_enqueue_script( 'swiper-script-js', get_theme_file_uri( '/modules/swiper-js/swiper-bundle.min.js' ), array( 'jquery' ), '1.0', true );
	wp_enqueue_script( 'videotuber-main-js', get_theme_file_uri( '/dist/assets/js/bundle.js' ), array( 'jquery' ), '1.0', true );
	wp_enqueue_script( 'videotuber-lazyload-js', get_theme_file_uri( '/dist/assets/js/bundle.js' ), array( 'jquery' ), '1.0', true );
	wp_enqueue_script( 'videotuber-menu-swiper-js', get_theme_file_uri( '/dist/assets/js/slideandswipe.js' ), array( 'jquery' ), '1.0', true );
	wp_enqueue_script( 'videotuber-swiper-js', get_theme_file_uri( '/dist/assets/js/menu-swipe.js' ), array( 'jquery' ), '1.0', true );
	wp_enqueue_style( 'swiper_js_main_styles', get_theme_file_uri( '/modules/swiper-js/swiper-bundle.min.css' ) );
	wp_enqueue_script( 'dialog', get_theme_file_uri( '/dist/assets/js/dialog.js' ), array( 'jquery' ), '1.0.0', true );
	wp_enqueue_script( 'touch-swipe', get_theme_file_uri( '/dist/assets/js/touch-swipe.js' ), array( 'jquery' ), '1.0.0', true );

	wp_localize_script(
		'dialog',
		'WPR',
		array(
			'ajax_url'   => admin_url( 'admin-ajax.php' ),
			'ajax_nonce' => wp_create_nonce( 'dialog' ),
		)
	);
	wp_enqueue_script( 'search', get_theme_file_uri( '/dist/assets/js/search.js' ), array( 'jquery' ), '1.0.0', true );
	wp_localize_script(
		'search',
		'WPR',
		array(
			'ajax_url'   => admin_url( 'admin-ajax.php' ),
			'ajax_nonce' => wp_create_nonce( 'search' ),
		)
	);

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

}
add_action( 'wp_enqueue_scripts', 'videtuber_add_styles' );

function videotuber_admin_styles() {
	wp_enqueue_script( 'search-admin', get_theme_file_uri( '/dist/assets/js/search-admin.js' ), array( 'jquery' ), '1.0.0', true );
	wp_localize_script(
		'search-admin',
		'WPR',
		array(
			'ajax_url'   => admin_url( 'admin-ajax.php' ),
			'ajax_nonce' => wp_create_nonce( 'search-admin' ),
		)
	);

}
add_action( 'admin_enqueue_scripts', 'videotuber_admin_styles' );
