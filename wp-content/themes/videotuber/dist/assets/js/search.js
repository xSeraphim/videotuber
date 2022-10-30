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
          // console.log(response);
          if (response.items) {
            for (var i = 0; i < response.items.length; i++) {
              // console.log(response.items[i]['id']['videoId']);
              $.ajax({
                url: 'https://www.googleapis.com/youtube/v3/videos',
                type: 'GET',
                data: {
                  part: 'snippet,statistics',
                  maxResults: 1,
                  // order: 'title',
                  id: response.items[i]['id']['videoId'],
                  key: 'AIzaSyC_U_CACz4wfMZDeA0sFwbhvl3FyELE5gI' //TO DO:replace hardcoded key with key from backend
                },

                success: function success(response) {
                  // console.log(response.items[0]['snippet']['thumbnails']['medium']);
                  var html = "\n                        <div class=\"video\">\n                            <div class=\"video__thumbnail\">\n                                <img src=\"https://i.ytimg.com/vi/".concat(response.items[0]['id'], "/mqdefault.jpg\">\n                                <div class=\"play__button\" data-id=\"").concat(response.items[0]['id'], "\"></div>\n                            </div>\n                            <div class=\"video__details\">\n                                <div class=\"author\">\n                                    <img src=\"http://videotuber.local/wp-content/uploads/2022/09/asmongold-TV.jpg\">\n                                </div>\n                                <div class=\"title\">\n\t\t\t\t\t\t            <h3 class=\"font-size-lg\">").concat(response.items[0]['snippet']['title'], "</h3>\n\t\t\t\t\t\t            <a href=\"").concat(response.items[0]['snippet']['channelId'], "\">").concat(response.items[0]['snippet']['channelTitle'], "</a> \n\t\t\t\t\t\t            <span>").concat(response.items[0]['statistics']['viewCount'], " views \u2022 ").concat(response.items[0]['snippet']['publishedAt'], "</span>\n\t\t\t\t\t            </div>\n                            </div>\n                        </div>\n                    ");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxvQkFBb0IsQ0FBQyxDQUFDcUIsTUFBTSxDQUFDRCxJQUFJLENBQUM7Z0JBQzdCLENBQUM7Z0JBQ0R3QixRQUFRLEVBQUMsb0JBQVU7a0JBQ2pCM0MsZUFBZSxFQUFFO2dCQUVuQjtjQUVKLENBQUMsQ0FBQztZQUNOO1lBQ0E7VUFHSDtRQUNMO01BQ0osQ0FBQyxDQUFDO0lBQ0YsQ0FBQyxNQUFLO01BQ0ZELENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDaUIsS0FBSyxFQUFFO01BQy9CakIsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUNxQixNQUFNLENBQUNZLGVBQWUsQ0FBQztNQUMvQ2hDLGVBQWUsRUFBRTtJQUNyQjtFQUNKO0FBQ0osQ0FBQyxFQUFJNEMsTUFBTSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWRlb3R1YmVyLy4vc3JjL2Fzc2V0cy9qcy9zZWFyY2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcclxuICAgIGZ1bmN0aW9uIHZpZGVvdHViZXJNb2RhbCgpe1xyXG4gICAgICAgICQoJy5wbGF5X19idXR0b24nKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAndmlkZW90dWJlcl9zaG93X3ZpZGVvX21vZGFsJyxcclxuICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZGlhbG9nLnNob3dNb2RhbCgpO1xyXG4gICAgICAgICAgICAkLmFqYXgoeyAgXHJcbiAgICAgICAgICAgICAgICB1cmw6IFdQUi5hamF4X3VybCwgXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnR0VUJywgXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHJlc3BvbnNlICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2RpYWxvZyAuZGlhbG9nX19jb250ZW50JykuZW1wdHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaHRtbCA9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZSBzcmM9XCIke3Jlc3BvbnNlWyd1cmwnXX0/YXV0b3BsYXk9MVwiIGZyYW1lYm9yZGVyPVwiMFwiXHJcbiAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCJcclxuICAgICAgICBhbGxvd2Z1bGxzY3JlZW4gOz48L2lmcmFtZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNkaWFsb2cgLmRpYWxvZ19fY29udGVudCcpLmFwcGVuZChodG1sKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgICQoJyNkaWFsb2cgc3BhbicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICQoJyNkaWFsb2cgLmRpYWxvZ19fY29udGVudCcpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRlbGF5KGNhbGxiYWNrLCBtcykge1xyXG4gICAgICAgIHZhciB0aW1lciA9IDA7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xyXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gICAgICAgICAgfSwgbXMgfHwgMCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgIHZhciBvcmlnaW5hbFJlc3VsdHMgPSAkKCcjdmlkZW9zX19jb250YWluZXInKS5odG1sKCk7XHJcbiAgICAkKCcjdmlkZW90dWJlcl9fc2VhcmNoIGlucHV0Jykua2V5dXAoZGVsYXkoZG9BamF4LCAxMDAwKSk7XHJcbiAgICBmdW5jdGlvbiBkb0FqYXgoKXtcclxuICAgICAgICB2YXIgcSA9ICQoJyN2aWRlb3R1YmVyX19zZWFyY2ggaW5wdXQnKS52YWwoKTtcclxuICAgICAgICB2YXIga2V5ID0gJyc7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocSk7XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgYWN0aW9uOiAndmlkZW90dWJlcl9jYWxsX2FwaV9ieV9rZXl3b3JkJyxcclxuICAgICAgICAgICAgcTogcSxcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocSAhPSAnJyl7XHJcbiAgICAgICAgJC5hamF4KHsgIFxyXG4gICAgICAgICAgICB1cmw6IFdQUi5hamF4X3VybCwgXHJcbiAgICAgICAgICAgIHR5cGU6ICdHRVQnLCBcclxuICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAkKCcjdmlkZW9zX19jb250YWluZXInKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXNwb25zZS5pdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZS5pdGVtc1tpXVsnaWQnXVsndmlkZW9JZCddKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My92aWRlb3MnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdHRVQnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0OiAnc25pcHBldCxzdGF0aXN0aWNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhSZXN1bHRzOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9yZGVyOiAndGl0bGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByZXNwb25zZS5pdGVtc1tpXVsnaWQnXVsndmlkZW9JZCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0FJemFTeUNfVV9DQUN6NHdmTVpEZUEwc0Z3Ymh2bDNGeUVMRTVnSScsIC8vVE8gRE86cmVwbGFjZSBoYXJkY29kZWQga2V5IHdpdGgga2V5IGZyb20gYmFja2VuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZS5pdGVtc1swXVsnc25pcHBldCddWyd0aHVtYm5haWxzJ11bJ21lZGl1bSddKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaHRtbCA9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpZGVvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmlkZW9fX3RodW1ibmFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS8ke3Jlc3BvbnNlLml0ZW1zWzBdWydpZCddfS9tcWRlZmF1bHQuanBnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsYXlfX2J1dHRvblwiIGRhdGEtaWQ9XCIke3Jlc3BvbnNlLml0ZW1zWzBdWydpZCddfVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmlkZW9fX2RldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0aG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL3ZpZGVvdHViZXIubG9jYWwvd3AtY29udGVudC91cGxvYWRzLzIwMjIvMDkvYXNtb25nb2xkLVRWLmpwZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICA8aDMgY2xhc3M9XCJmb250LXNpemUtbGdcIj4ke3Jlc3BvbnNlLml0ZW1zWzBdWydzbmlwcGV0J11bJ3RpdGxlJ119PC9oMz5cclxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgPGEgaHJlZj1cIiR7cmVzcG9uc2UuaXRlbXNbMF1bJ3NuaXBwZXQnXVsnY2hhbm5lbElkJ119XCI+JHtyZXNwb25zZS5pdGVtc1swXVsnc25pcHBldCddWydjaGFubmVsVGl0bGUnXX08L2E+IFxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICA8c3Bhbj4ke3Jlc3BvbnNlLml0ZW1zWzBdWydzdGF0aXN0aWNzJ11bJ3ZpZXdDb3VudCddfSB2aWV3cyDigKIgJHtyZXNwb25zZS5pdGVtc1swXVsnc25pcHBldCddWydwdWJsaXNoZWRBdCddfTwvc3Bhbj5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICQoJyN2aWRlb3NfX2NvbnRhaW5lcicpLmFwcGVuZChodG1sKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTpmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb3R1YmVyTW9kYWwoKTsgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlWyd2aWRfdGh1bWInXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAkKCcjdmlkZW9zX19jb250YWluZXInKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAkKCcjdmlkZW9zX19jb250YWluZXInKS5hcHBlbmQob3JpZ2luYWxSZXN1bHRzKTtcclxuICAgICAgICAgICAgdmlkZW90dWJlck1vZGFsKCk7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9XHJcbn0gKSAoalF1ZXJ5KTsgIl0sIm5hbWVzIjpbIiQiLCJ2aWRlb3R1YmVyTW9kYWwiLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlkIiwiZGF0YSIsImFjdGlvbiIsImRpYWxvZyIsInNob3dNb2RhbCIsImFqYXgiLCJ1cmwiLCJXUFIiLCJhamF4X3VybCIsInR5cGUiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJlbXB0eSIsImNvbnNvbGUiLCJsb2ciLCJodG1sIiwiYXBwZW5kIiwiY2xvc2UiLCJkZWxheSIsImNhbGxiYWNrIiwibXMiLCJ0aW1lciIsImNvbnRleHQiLCJhcmdzIiwiYXJndW1lbnRzIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImFwcGx5Iiwib3JpZ2luYWxSZXN1bHRzIiwia2V5dXAiLCJkb0FqYXgiLCJxIiwidmFsIiwia2V5IiwiaXRlbXMiLCJpIiwibGVuZ3RoIiwicGFydCIsIm1heFJlc3VsdHMiLCJjb21wbGV0ZSIsImpRdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=