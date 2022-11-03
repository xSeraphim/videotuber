(function($){
    function delay(callback, ms) {
        var timer = 0;
        return function() {
          var context = this, args = arguments;
          clearTimeout(timer);
          timer = setTimeout(function () {
            callback.apply(context, args);
          }, ms || 0);
        };
      }

      $('#videotuber_post_metabox #videotuber_admin_search input').keyup(delay(doAjax, 1000));

      function doAjax() {
        var q = $('#videotuber_post_metabox #videotuber_admin_search input').val();
        console.log(q);
        data = {
            action: 'videotuber_call_api_by_keyword',
            q: q,
        }
        $.ajax({
            url: WPR.ajax_url, 
            type: 'GET', 
            data: data,
            success: function(response){
                $('#videotuber_select').empty();
                console.log(response);
                if (response.items) {
                    for (var i = 0; i < response.items.length; i++) {
                        var html = `
                        <option id="${response.items[i]['id']['videoId']}" title="${response.items[i]['snippet']['title']}" image-url="${response.items[i]['snippet']['thumbnails']['high']['url']}">${response.items[i]['snippet']['title']}</option>
                        `;
                        $('#videotuber_select').append(html);
                    }

                }
            },
            complete:function(){
                $('#videotuber_select').on('change',function(){
                    var videoId = $("#videotuber_select").find(':selected').attr('id');
                    var title = $("#videotuber_select").find(':selected').attr('title');
                    var imageUrl = $("#videotuber_select").find(':selected').attr('image-url');
                    data = {
                        action: 'videotuber_change_post',
                        image: imageUrl, 
                    }
                    $.ajax({
                        url: WPR.ajax_url, 
                        type: 'GET', 
                        data: data,
                    })
                    // var test = option.attr('id', $(this).find(':selected').data('id'));
                    // console.log(videoId); 
                    // console.log(title); 
                    // console.log(imageUrl); 


                });

            }
        })
      }
})(jQuery);