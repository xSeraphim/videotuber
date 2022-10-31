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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsb0JBQW9CLENBQUMsQ0FBQ3FCLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDO2dCQUM3QixDQUFDO2dCQUNEeUIsUUFBUSxFQUFDLG9CQUFVO2tCQUNqQjVDLGVBQWUsRUFBRTtnQkFFbkI7Y0FFSixDQUFDLENBQUM7WUFDTjtZQUNBO1VBR0g7UUFDTDtNQUNKLENBQUMsQ0FBQztJQUNGLENBQUMsTUFBSztNQUNGRCxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQ2lCLEtBQUssRUFBRTtNQUMvQmpCLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDcUIsTUFBTSxDQUFDWSxlQUFlLENBQUM7TUFDL0NoQyxlQUFlLEVBQUU7SUFDckI7RUFDSjtBQUNKLENBQUMsRUFBSTZDLE1BQU0sQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmlkZW90dWJlci8uL3NyYy9hc3NldHMvanMvc2VhcmNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKSB7XHJcbiAgICBmdW5jdGlvbiB2aWRlb3R1YmVyTW9kYWwoKXtcclxuICAgICAgICAkKCcucGxheV9fYnV0dG9uJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5kYXRhKCdpZCcpO1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ3ZpZGVvdHViZXJfc2hvd192aWRlb19tb2RhbCcsXHJcbiAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcclxuICAgICAgICAgICAgJC5hamF4KHsgIFxyXG4gICAgICAgICAgICAgICAgdXJsOiBXUFIuYWpheF91cmwsIFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ0dFVCcsIFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCByZXNwb25zZSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNkaWFsb2cgLmRpYWxvZ19fY29udGVudCcpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGh0bWwgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgc3JjPVwiJHtyZXNwb25zZVsndXJsJ119P2F1dG9wbGF5PTFcIiBmcmFtZWJvcmRlcj1cIjBcIlxyXG4gICAgICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiXHJcbiAgICAgICAgYWxsb3dmdWxsc2NyZWVuIDs+PC9pZnJhbWU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjZGlhbG9nIC5kaWFsb2dfX2NvbnRlbnQnKS5hcHBlbmQoaHRtbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAkKCcjZGlhbG9nIHNwYW4nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAkKCcjZGlhbG9nIC5kaWFsb2dfX2NvbnRlbnQnKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkZWxheShjYWxsYmFjaywgbXMpIHtcclxuICAgICAgICB2YXIgdGltZXIgPSAwO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHZhciBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcclxuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgICAgICAgIH0sIG1zIHx8IDApO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICB2YXIgb3JpZ2luYWxSZXN1bHRzID0gJCgnI3ZpZGVvc19fY29udGFpbmVyJykuaHRtbCgpO1xyXG4gICAgJCgnI3ZpZGVvdHViZXJfX3NlYXJjaCBpbnB1dCcpLmtleXVwKGRlbGF5KGRvQWpheCwgMTAwMCkpO1xyXG4gICAgZnVuY3Rpb24gZG9BamF4KCl7XHJcbiAgICAgICAgdmFyIHEgPSAkKCcjdmlkZW90dWJlcl9fc2VhcmNoIGlucHV0JykudmFsKCk7XHJcbiAgICAgICAgdmFyIGtleSA9ICcnO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHEpO1xyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGFjdGlvbjogJ3ZpZGVvdHViZXJfY2FsbF9hcGlfYnlfa2V5d29yZCcsXHJcbiAgICAgICAgICAgIHE6IHEsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHEgIT0gJycpe1xyXG4gICAgICAgICQuYWpheCh7ICBcclxuICAgICAgICAgICAgdXJsOiBXUFIuYWpheF91cmwsIFxyXG4gICAgICAgICAgICB0eXBlOiAnR0VUJywgXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgJCgnI3ZpZGVvc19fY29udGFpbmVyJykuZW1wdHkoKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5pdGVtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzcG9uc2UuaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UuaXRlbXNbJ2FwaSddKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJC5hamF4KHsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My92aWRlb3MnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdHRVQnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0OiAnc25pcHBldCxzdGF0aXN0aWNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhSZXN1bHRzOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9yZGVyOiAndGl0bGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByZXNwb25zZS5pdGVtc1tpXVsnaWQnXVsndmlkZW9JZCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogcmVzcG9uc2UuYXBpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UuaXRlbXNbMF1bJ3NuaXBwZXQnXVsndGh1bWJuYWlscyddWydtZWRpdW0nXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGh0bWwgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aWRlb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpZGVvX190aHVtYm5haWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaS55dGltZy5jb20vdmkvJHtyZXNwb25zZS5pdGVtc1swXVsnaWQnXX0vbXFkZWZhdWx0LmpwZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5X19idXR0b25cIiBkYXRhLWlkPVwiJHtyZXNwb25zZS5pdGVtc1swXVsnaWQnXX1cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpZGVvX19kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF1dGhvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly92aWRlb3R1YmVyLmxvY2FsL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIyLzA5L2FzbW9uZ29sZC1UVi5qcGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgPGgzIGNsYXNzPVwiZm9udC1zaXplLWxnXCI+JHtyZXNwb25zZS5pdGVtc1swXVsnc25pcHBldCddWyd0aXRsZSddfTwvaDM+XHJcblx0XHRcdFx0XHRcdCAgICAgICAgICAgIDxhIGhyZWY9XCIke3Jlc3BvbnNlLml0ZW1zWzBdWydzbmlwcGV0J11bJ2NoYW5uZWxJZCddfVwiPiR7cmVzcG9uc2UuaXRlbXNbMF1bJ3NuaXBwZXQnXVsnY2hhbm5lbFRpdGxlJ119PC9hPiBcclxuXHRcdFx0XHRcdFx0ICAgICAgICAgICAgPHNwYW4+JHtyZXNwb25zZS5pdGVtc1swXVsnc3RhdGlzdGljcyddWyd2aWV3Q291bnQnXX0gdmlld3Mg4oCiICR7cmVzcG9uc2UuaXRlbXNbMF1bJ3NuaXBwZXQnXVsncHVibGlzaGVkQXQnXX08L3NwYW4+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgICAgICAkKCcjdmlkZW9zX19jb250YWluZXInKS5hcHBlbmQoaHRtbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW90dWJlck1vZGFsKCk7ICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZVsndmlkX3RodW1iJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgJCgnI3ZpZGVvc19fY29udGFpbmVyJykuZW1wdHkoKTtcclxuICAgICAgICAgICAgJCgnI3ZpZGVvc19fY29udGFpbmVyJykuYXBwZW5kKG9yaWdpbmFsUmVzdWx0cyk7XHJcbiAgICAgICAgICAgIHZpZGVvdHViZXJNb2RhbCgpO1xyXG4gICAgICAgIH0gIFxyXG4gICAgfVxyXG59ICkgKGpRdWVyeSk7ICJdLCJuYW1lcyI6WyIkIiwidmlkZW90dWJlck1vZGFsIiwiY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJpZCIsImRhdGEiLCJhY3Rpb24iLCJkaWFsb2ciLCJzaG93TW9kYWwiLCJhamF4IiwidXJsIiwiV1BSIiwiYWpheF91cmwiLCJ0eXBlIiwic3VjY2VzcyIsInJlc3BvbnNlIiwiZW1wdHkiLCJjb25zb2xlIiwibG9nIiwiaHRtbCIsImFwcGVuZCIsImNsb3NlIiwiZGVsYXkiLCJjYWxsYmFjayIsIm1zIiwidGltZXIiLCJjb250ZXh0IiwiYXJncyIsImFyZ3VtZW50cyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJhcHBseSIsIm9yaWdpbmFsUmVzdWx0cyIsImtleXVwIiwiZG9BamF4IiwicSIsInZhbCIsImtleSIsIml0ZW1zIiwiaSIsImxlbmd0aCIsInBhcnQiLCJtYXhSZXN1bHRzIiwiYXBpIiwiY29tcGxldGUiLCJqUXVlcnkiXSwic291cmNlUm9vdCI6IiJ9