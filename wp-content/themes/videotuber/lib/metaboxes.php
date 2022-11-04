<?php

function videotuber_add_meta_box() {
    add_meta_box(
        'videotuber_post_metabox',
        'Videotuber Search Input',
        'videotuber_post_metabox_html',
        'post',
        'normal',
        'default',
    );
}
add_action('add_meta_boxes', 'videotuber_add_meta_box');

function videotuber_post_metabox_html() {
    // error_log(print_r($_GET, TRUE));
    // error_log(print_r($_POST , TRUE));
	wp_nonce_field( 'videotuber_post_metabox_html', 'videotuber_update_post_nonce' );
    ?>
    <p id="videotuber_admin_search">
        
        <input type="checkbox" name="featured_image_set" id="featured_image_set" class="widefat">
        <label class="widefat" for="featured_image_set">Check this box if you want to set the Youtube Video Thumbnail as the post featured image.</label>
        <label class="widefat" style="display:block;margin-top:24px;" for="videotuber_post_input">Search your channels Youtube Videos</label>
        <input class="widefat" type="text" name="videotuber_post_input" id="videotuber_post_input" placeholder="Start typing video title here..">
        <label for="videotuber_select">Results will appear here.</label>
        <select class="widefat" name="videotuber_select" id="videotuber_select">
        
        </select>
    </p>
    <?php
}


// function videotuber_save_post_metabox($post_id, $post) {
    
//     if(array_key_exists('videotuber_post_input'), $_POST) {
//         update_post_meta($post_id, '_videotuber_youtube', $_POST['videotuber_post_input']);
//     }
   

// }
// add_action('save_post', 'videotuber_save_post_metabox', 10, 2);

function videotuber_change_post() {
	// error_log(print_r($_GET, TRUE));
	// error_log(print_r($_POST, TRUE));

	// $test = $_GET['checked'];
	// error_log($test);
	if(isset($_GET['checked'])) {
		$parent_post_id = NULL;
		$new_title = $_GET['title'];
		// error_log($new_title);
		$title = str_replace( array( '\'', '"', ',' , ';', '<', '>' ), ' ', $new_title);
		$file_title = str_replace( array( '\'', '"', ',' , ';', '<', '>', ' ', '|', '/', ':' ), '', $new_title);
		$url = $_GET['image'];
		if ( ! class_exists( 'WP_Http' ) ) {
			include_once ABSPATH . WPINC . '/class-http.php';
		}

		$http     = new WP_Http();
		$response = $http->request( $url );
		// error_log(print_r($response));
		if ( 200 !== $response['response']['code'] ) {
			return false;
		}

		$upload = wp_upload_bits( basename( $url ), null, $response['body'] );
		if ( ! empty( $upload['error'] ) ) {
			return false;
		}
		
		$file_path        = $upload['file'];
		$file_name        = basename( $file_path );
		$file_type        = wp_check_filetype( $file_name, null );
		$wp_upload_dir    = wp_upload_dir();

		$post_info = array(
			'guid'           => $wp_upload_dir['url'] . '/' . $file_title . '.' . $file_type['ext'],
			'post_mime_type' => $file_type['type'],
			'post_title'     => $title,
			'post_content'   => '',
			'post_status'    => 'inherit',
		);

		// Create the attachment.
		$attach_id = wp_insert_attachment( $post_info, $file_path, $parent_post_id );

		// Include image.php.
		require_once ABSPATH . 'wp-admin/includes/image.php';

		// Generate the attachment metadata.
		$attach_data = wp_generate_attachment_metadata( $attach_id, $file_path );
		error_log(print_r($post_info, TRUE));
		// Assign metadata to attachment.
		wp_update_attachment_metadata( $attach_id, $attach_data );
		// update_post_meta($post_id, '_thumbnail_id', $attach_id);
		// error_log($attach_id);
		// return $the_id;
	}
}
add_action( 'wp_ajax_videotuber_change_post', 'videotuber_change_post');
add_action( 'wp_ajax_nopriv_videotuber_change_post', 'videotuber_change_post');
// add_action('save_post', 'videotuber_change_post', 10, 1);

function videotuber_update_post($post_id, $post){
	error_log(print_r($_POST, TRUE));

}
add_action('save_post', 'videotuber_update_post', 10, 2);