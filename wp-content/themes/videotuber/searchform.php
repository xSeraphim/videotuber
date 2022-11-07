<form role="search" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<input type="search" name="s" placeholder="Search" value="<?php echo esc_attr( get_search_query() ); ?>" />
	<button type="submit">
		<i class="material-icons">search</i>
	</button>
</form>
