(function($){
    $('.play__button').click(function(e){
        e.preventDefault();
        var id = $(this).data('id');
        var data = {
            action: 'videotuber_show_video_modal',
            id: id,
        };
        dialog.showModal();
        $.ajax({  
            url: WPR.ajax_url, 
            type: 'GET', 
            data: data,
            success: function(response){
                // console.log(response);
                
                if ( response ) {
                    
                    $('#dialog .dialog__content').empty();
                    console.log(response);
                    var html = `
                    <iframe src="${response['url']}?autoplay=1" frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen ;></iframe>
                    `;
                     $('#dialog .dialog__content').append(html);
                    
                 }
            }
        })
    });

    $('.twitch__button').click(function(e){
        e.preventDefault();
        var id = $(this).data('id');
        dialog.showModal();
        $('#dialog .dialog__content').empty();
        var html = `
        <iframe src="https://player.twitch.tv/?video=${id}&parent=localhost&parent=127.0.0.1&parent=dev-videotuber.pantheonsite.io&parent=www.dev-videotuber.pantheonsite.io" frameborder="0" autoplay; allowfullscreen;></iframe>
                    `;
        $('#dialog .dialog__content').append(html);

    });

    $('#dialog span').click(function(){
        $('#dialog .dialog__content').empty();
        dialog.close();
        
    });
})(jQuery);