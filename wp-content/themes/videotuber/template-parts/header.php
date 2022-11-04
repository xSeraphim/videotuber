<div class="header">
<div class="header__left"> 
	<?php if ( function_exists( 'the_custom_logo' ) ) {
		the_custom_logo();
	}
	?> <div class="header__icons">
	</div>
</div>
<div class="header__search">
<?php get_search_form( true ); ?>
</div>
<div class="header__right">
<div class="ssm-overlay ssm-toggle-nav"></div>
	<i id="menu" class="material-icons ssm-toggle-nav ssm-nav-visible">menu</i>
	<nav class="nav">
<?php
	wp_nav_menu(
		array(
			'theme_location' => 'foooterMiddleLocation1',
		)
	);
?>
<div class="videotuber_contact_links">
	<a href="tel:"><i class="material-icons">phone_android</i></a>
	<a href="mailto:"><i class="material-icons">mail</i></a>
</div>
</nav>
</div>

</div>
