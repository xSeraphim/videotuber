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
                    <iframe src="${response['url']}" frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen ;></iframe>
                    `;
                     $('#dialog .dialog__content').append(html);
                    
                 }
            }
        })
    });

    $('#dialog span').click(function(){
        
        dialog.close();
        
    });
})(jQuery);