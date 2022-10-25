<div class="header">
<div class="header__left"> 
	<?php if ( function_exists( 'the_custom_logo' ) ) {
		the_custom_logo();
	}
	?> <div class="header__icons">
<!-- <i class="material-icons display-this">search</i> -->
<!-- <i class="material-icons">videocam</i><i class="material-icons">apps</i><i class="material-icons">notifications</i><i class="material-icons display-this">account_circle</i> -->
	</div>
</div>
<div class="header__search">
<?php get_search_form( true ); ?>
</div>
<div class="header__right">
	<!-- <i class="material-icons display-this">account_circle</i> -->
	<i id="menu" class="material-icons">menu</i>
</div>
</div>
<!-- Header Ends -->
