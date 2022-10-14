<!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<?php wp_head(); ?>
	</head>
	<body>
		<div class="header">
	  <div class="header__left">
		<?php if ( function_exists( 'the_custom_logo' ) ) { 
				the_custom_logo();
				}
	?>
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

	  </div>
	   
	</div>
	<!-- Header Ends -->
