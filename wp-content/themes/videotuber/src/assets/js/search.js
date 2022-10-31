(function($) {
    function videotuberModal(){
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
    
        $('#dialog span').click(function(){
            $('#dialog .dialog__content').empty();
            dialog.close();
            
        });
    }
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

    var originalResults = $('#videos__container').html();
    $('#videotuber__search input').keyup(delay(doAjax, 1000));
    function doAjax(){
        var q = $('#videotuber__search input').val();
        var key = '';
        // console.log(q);
        data = {
            action: 'videotuber_call_api_by_keyword',
            q: q,
        }
        if(q != ''){
        $.ajax({  
            url: WPR.ajax_url, 
            type: 'GET', 
            data: data,
            success: function(response){
                
                $('#videos__container').empty();
                // console.log(response);
                if (response.items) {
                    for (var i = 0; i < response.items.length; i++) {
                        // console.log(response.items['api']);
                        $.ajax({  
                            url: 'https://www.googleapis.com/youtube/v3/videos', 
                            type: 'GET', 
                            data: {
                                part: 'snippet,statistics',
                                maxResults: 1,
                                // order: 'title',
                                id: response.items[i]['id']['videoId'],
                                key: response.api, 
                            },
                            success: function(response){
                                // console.log(response.items[0]['snippet']['thumbnails']['medium']);
                                var html = `
                        <div class="video">
                            <div class="video__thumbnail">
                                <img src="https://i.ytimg.com/vi/${response.items[0]['id']}/mqdefault.jpg">
                                <div class="play__button" data-id="${response.items[0]['id']}"></div>
                            </div>
                            <div class="video__details">
                                <div class="author">
                                    <img src="http://videotuber.local/wp-content/uploads/2022/09/asmongold-TV.jpg">
                                </div>
                                <div class="title">
						            <h3 class="font-size-lg">${response.items[0]['snippet']['title']}</h3>
						            <a href="${response.items[0]['snippet']['channelId']}">${response.items[0]['snippet']['channelTitle']}</a> 
						            <span>${response.items[0]['statistics']['viewCount']} views • ${response.items[0]['snippet']['publishedAt']}</span>
					            </div>
                            </div>
                        </div>
                    `;
                     $('#videos__container').append(html);
                            },
                            complete:function(){
                              videotuberModal();  

                            }
                        
                        })
                    }
                    // console.log(response['vid_thumb']);
                    
                    
                 }
            }
        });
        }else {
            $('#videos__container').empty();
            $('#videos__container').append(originalResults);
            videotuberModal();
        }  
    }
} ) (jQuery); 