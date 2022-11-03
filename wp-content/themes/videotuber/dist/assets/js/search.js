/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./src/assets/js/search.js ***!
  \*********************************/
(function ($) {
  function videotuberModal() {
    $('.play__button').click(function (e) {
      e.preventDefault();
      var id = $(this).data('id');
      var data = {
        action: 'videotuber_show_video_modal',
        id: id
      };
      dialog.showModal();
      $.ajax({
        url: WPR.ajax_url,
        type: 'GET',
        data: data,
        success: function success(response) {
          // console.log(response);

          if (response) {
            $('#dialog .dialog__content').empty();
            console.log(response);
            var html = "\n                        <iframe src=\"".concat(response['url'], "?autoplay=1\" frameborder=\"0\"\n        allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\n        allowfullscreen ;></iframe>\n                        ");
            $('#dialog .dialog__content').append(html);
          }
        }
      });
    });
    $('#dialog span').click(function () {
      $('#dialog .dialog__content').empty();
      dialog.close();
    });
  }
  function delay(callback, ms) {
    var timer = 0;
    return function () {
      var context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        callback.apply(context, args);
      }, ms || 0);
    };
  }
  var originalResults = $('#videos__container').html();
  $('#videotuber__search input').keyup(delay(doAjax, 1000));
  function doAjax() {
    var q = $('#videotuber__search input').val();
    var key = '';
    // console.log(q);
    data = {
      action: 'videotuber_call_api_by_keyword',
      q: q
    };
    if (q != '') {
      $.ajax({
        url: WPR.ajax_url,
        type: 'GET',
        data: data,
        success: function success(response) {
          $('#videos__container').empty();
          var image = response.image;
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
                  key: response.api
                },
                success: function success(response) {
                  // console.log(response.items[0]['snippet']['thumbnails']['medium']);
                  var html = "\n                        <div class=\"video\">\n                            <div class=\"video__thumbnail\">\n                                <img src=\"https://i.ytimg.com/vi/".concat(response.items[0]['id'], "/mqdefault.jpg\">\n                                <div class=\"play__button\" data-id=\"").concat(response.items[0]['id'], "\"></div>\n                            </div>\n                            <div class=\"video__details\">\n                                <div class=\"author\">\n                                    <img src=\"").concat(image, "\">\n                                </div>\n                                <div class=\"title\">\n\t\t\t\t\t\t            <h3 class=\"font-size-lg\">").concat(response.items[0]['snippet']['title'], "</h3>\n\t\t\t\t\t\t            <a href=\"").concat(response.items[0]['snippet']['channelId'], "\">").concat(response.items[0]['snippet']['channelTitle'], "</a> \n\t\t\t\t\t\t            <span>").concat(response.items[0]['statistics']['viewCount'], " views \u2022 ").concat(response.items[0]['snippet']['publishedAt'], "</span>\n\t\t\t\t\t            </div>\n                            </div>\n                        </div>\n                    ");
                  $('#videos__container').append(html);
                },
                complete: function complete() {
                  videotuberModal();
                }
              });
            }
            // console.log(response['vid_thumb']);
          }
        }
      });
    } else {
      $('#videos__container').empty();
      $('#videos__container').append(originalResults);
      videotuberModal();
    }
  }
})(jQuery);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxhQUFhLENBQUMsb0lBSXhHO2tCQUNBeEMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUNxQixNQUFNLENBQUNELElBQUksQ0FBQztnQkFDN0IsQ0FBQztnQkFDRDBCLFFBQVEsRUFBQyxvQkFBVTtrQkFDakI3QyxlQUFlLEVBQUU7Z0JBRW5CO2NBRUosQ0FBQyxDQUFDO1lBQ047WUFDQTtVQUdIO1FBQ0w7TUFDSixDQUFDLENBQUM7SUFDRixDQUFDLE1BQUs7TUFDRkQsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUNpQixLQUFLLEVBQUU7TUFDL0JqQixDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQ3FCLE1BQU0sQ0FBQ1ksZUFBZSxDQUFDO01BQy9DaEMsZUFBZSxFQUFFO0lBQ3JCO0VBQ0o7QUFDSixDQUFDLEVBQUk4QyxNQUFNLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpZGVvdHViZXIvLi9zcmMvYXNzZXRzL2pzL3NlYXJjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICAgZnVuY3Rpb24gdmlkZW90dWJlck1vZGFsKCl7XHJcbiAgICAgICAgJCgnLnBsYXlfX2J1dHRvbicpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHZhciBpZCA9ICQodGhpcykuZGF0YSgnaWQnKTtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICd2aWRlb3R1YmVyX3Nob3dfdmlkZW9fbW9kYWwnLFxyXG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBkaWFsb2cuc2hvd01vZGFsKCk7XHJcbiAgICAgICAgICAgICQuYWpheCh7ICBcclxuICAgICAgICAgICAgICAgIHVybDogV1BSLmFqYXhfdXJsLCBcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdHRVQnLCBcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggcmVzcG9uc2UgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjZGlhbG9nIC5kaWFsb2dfX2NvbnRlbnQnKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBodG1sID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aWZyYW1lIHNyYz1cIiR7cmVzcG9uc2VbJ3VybCddfT9hdXRvcGxheT0xXCIgZnJhbWVib3JkZXI9XCIwXCJcclxuICAgICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIlxyXG4gICAgICAgIGFsbG93ZnVsbHNjcmVlbiA7PjwvaWZyYW1lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2RpYWxvZyAuZGlhbG9nX19jb250ZW50JykuYXBwZW5kKGh0bWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgJCgnI2RpYWxvZyBzcGFuJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgJCgnI2RpYWxvZyAuZGlhbG9nX19jb250ZW50JykuZW1wdHkoKTtcclxuICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZGVsYXkoY2FsbGJhY2ssIG1zKSB7XHJcbiAgICAgICAgdmFyIHRpbWVyID0gMDtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XHJcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgICAgICAgICB9LCBtcyB8fCAwKTtcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgdmFyIG9yaWdpbmFsUmVzdWx0cyA9ICQoJyN2aWRlb3NfX2NvbnRhaW5lcicpLmh0bWwoKTtcclxuICAgICQoJyN2aWRlb3R1YmVyX19zZWFyY2ggaW5wdXQnKS5rZXl1cChkZWxheShkb0FqYXgsIDEwMDApKTtcclxuICAgIGZ1bmN0aW9uIGRvQWpheCgpe1xyXG4gICAgICAgIHZhciBxID0gJCgnI3ZpZGVvdHViZXJfX3NlYXJjaCBpbnB1dCcpLnZhbCgpO1xyXG4gICAgICAgIHZhciBrZXkgPSAnJztcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhxKTtcclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBhY3Rpb246ICd2aWRlb3R1YmVyX2NhbGxfYXBpX2J5X2tleXdvcmQnLFxyXG4gICAgICAgICAgICBxOiBxLFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihxICE9ICcnKXtcclxuICAgICAgICAkLmFqYXgoeyAgXHJcbiAgICAgICAgICAgIHVybDogV1BSLmFqYXhfdXJsLCBcclxuICAgICAgICAgICAgdHlwZTogJ0dFVCcsIFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICQoJyN2aWRlb3NfX2NvbnRhaW5lcicpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW1hZ2UgPSByZXNwb25zZS5pbWFnZTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5pdGVtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzcG9uc2UuaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UuaXRlbXNbJ2FwaSddKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My92aWRlb3MnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdHRVQnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0OiAnc25pcHBldCxzdGF0aXN0aWNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhSZXN1bHRzOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9yZGVyOiAndGl0bGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByZXNwb25zZS5pdGVtc1tpXVsnaWQnXVsndmlkZW9JZCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogcmVzcG9uc2UuYXBpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UuaXRlbXNbMF1bJ3NuaXBwZXQnXVsndGh1bWJuYWlscyddWydtZWRpdW0nXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGh0bWwgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWRlb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpZGVvX190aHVtYm5haWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaS55dGltZy5jb20vdmkvJHtyZXNwb25zZS5pdGVtc1swXVsnaWQnXX0vbXFkZWZhdWx0LmpwZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5X19idXR0b25cIiBkYXRhLWlkPVwiJHtyZXNwb25zZS5pdGVtc1swXVsnaWQnXX1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpZGVvX19kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF1dGhvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2V9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdCAgICAgICAgICAgIDxoMyBjbGFzcz1cImZvbnQtc2l6ZS1sZ1wiPiR7cmVzcG9uc2UuaXRlbXNbMF1bJ3NuaXBwZXQnXVsndGl0bGUnXX08L2gzPlxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICA8YSBocmVmPVwiJHtyZXNwb25zZS5pdGVtc1swXVsnc25pcHBldCddWydjaGFubmVsSWQnXX1cIj4ke3Jlc3BvbnNlLml0ZW1zWzBdWydzbmlwcGV0J11bJ2NoYW5uZWxUaXRsZSddfTwvYT4gXHJcblx0XHRcdFx0XHRcdCAgICAgICAgICAgIDxzcGFuPiR7cmVzcG9uc2UuaXRlbXNbMF1bJ3N0YXRpc3RpY3MnXVsndmlld0NvdW50J119IHZpZXdzIOKAoiAke3Jlc3BvbnNlLml0ZW1zWzBdWydzbmlwcGV0J11bJ3B1Ymxpc2hlZEF0J119PC9zcGFuPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgICAgICAgJCgnI3ZpZGVvc19fY29udGFpbmVyJykuYXBwZW5kKGh0bWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvdHViZXJNb2RhbCgpOyAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2VbJ3ZpZF90aHVtYiddKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICQoJyN2aWRlb3NfX2NvbnRhaW5lcicpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICQoJyN2aWRlb3NfX2NvbnRhaW5lcicpLmFwcGVuZChvcmlnaW5hbFJlc3VsdHMpO1xyXG4gICAgICAgICAgICB2aWRlb3R1YmVyTW9kYWwoKTtcclxuICAgICAgICB9ICBcclxuICAgIH1cclxufSApIChqUXVlcnkpOyAiXSwibmFtZXMiOlsiJCIsInZpZGVvdHViZXJNb2RhbCIsImNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaWQiLCJkYXRhIiwiYWN0aW9uIiwiZGlhbG9nIiwic2hvd01vZGFsIiwiYWpheCIsInVybCIsIldQUiIsImFqYXhfdXJsIiwidHlwZSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsImVtcHR5IiwiY29uc29sZSIsImxvZyIsImh0bWwiLCJhcHBlbmQiLCJjbG9zZSIsImRlbGF5IiwiY2FsbGJhY2siLCJtcyIsInRpbWVyIiwiY29udGV4dCIsImFyZ3MiLCJhcmd1bWVudHMiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYXBwbHkiLCJvcmlnaW5hbFJlc3VsdHMiLCJrZXl1cCIsImRvQWpheCIsInEiLCJ2YWwiLCJrZXkiLCJpbWFnZSIsIml0ZW1zIiwiaSIsImxlbmd0aCIsInBhcnQiLCJtYXhSZXN1bHRzIiwiYXBpIiwiY29tcGxldGUiLCJqUXVlcnkiXSwic291cmNlUm9vdCI6IiJ9