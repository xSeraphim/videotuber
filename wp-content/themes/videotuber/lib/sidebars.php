<?php

function videotuber_sidebar_widgets() {
	register_sidebar(
		array(
			'id'            => 'primary-sidebar',
			'name'          => esc_html__( 'Primary Sidebar', 'videotuber' ),
			'description'   => esc_html__( 'This sidebar appears in the blog posts page.', 'videotuber' ),
			'before_widget' => '<section id="%1$s" class="sidebar__widget %2$s"></section>',
			'after_widget'  => '</section>',
			'before_title'  => '<h5>',
			'after_title'   => '</h5>',
		)
	);

}

add_action( 'widgets_init', 'videotuber_sidebar_widgets' );
