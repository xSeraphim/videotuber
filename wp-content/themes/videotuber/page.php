<?php
get_header();

// Elementor `single` location
if ( ! function_exists( 'elementor_theme_do_location' ) || ! elementor_theme_do_location( 'page' ) ) {
	get_template_part( 'template-parts/page' );
}
?>

<?php
get_footer();
?>