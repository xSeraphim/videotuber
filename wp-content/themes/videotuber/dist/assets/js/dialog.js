/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./src/assets/js/dialog.js ***!
  \*********************************/
(function ($) {
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
          var html = "\n                    <iframe src=\"".concat(response['url'], "?autoplay=1\" frameborder=\"0\"\n\tallow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\n\tallowfullscreen ;></iframe>\n                    ");
          $('#dialog .dialog__content').append(html);
        }
      }
    });
  });
  $('#dialog span').click(function () {
    $('#dialog .dialog__content').empty();
    dialog.close();
  });
})(jQuery);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsQ0FBQyxVQUFTQSxDQUFDLEVBQUM7RUFDUkEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDQyxLQUFLLENBQUMsVUFBU0MsQ0FBQyxFQUFDO0lBQ2hDQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtJQUNsQixJQUFJQyxFQUFFLEdBQUdKLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0ssSUFBSSxDQUFDLElBQUksQ0FBQztJQUMzQixJQUFJQSxJQUFJLEdBQUc7TUFDUEMsTUFBTSxFQUFFLDZCQUE2QjtNQUNyQ0YsRUFBRSxFQUFFQTtJQUNSLENBQUM7SUFDREcsTUFBTSxDQUFDQyxTQUFTLEVBQUU7SUFDbEJSLENBQUMsQ0FBQ1MsSUFBSSxDQUFDO01BQ0hDLEdBQUcsRUFBRUMsR0FBRyxDQUFDQyxRQUFRO01BQ2pCQyxJQUFJLEVBQUUsS0FBSztNQUNYUixJQUFJLEVBQUVBLElBQUk7TUFDVlMsT0FBTyxFQUFFLGlCQUFTQyxRQUFRLEVBQUM7UUFDdkI7O1FBRUEsSUFBS0EsUUFBUSxFQUFHO1VBRVpmLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDZ0IsS0FBSyxFQUFFO1VBQ3JDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsUUFBUSxDQUFDO1VBQ3JCLElBQUlJLElBQUksaURBQ09KLFFBQVEsQ0FBQyxLQUFLLENBQUMsK0xBRzdCO1VBQ0FmLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDb0IsTUFBTSxDQUFDRCxJQUFJLENBQUM7UUFFOUM7TUFDTDtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztFQUVGbkIsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDQyxLQUFLLENBQUMsWUFBVTtJQUM5QkQsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUNnQixLQUFLLEVBQUU7SUFDckNULE1BQU0sQ0FBQ2MsS0FBSyxFQUFFO0VBRWxCLENBQUMsQ0FBQztBQUNOLENBQUMsRUFBRUMsTUFBTSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWRlb3R1YmVyLy4vc3JjL2Fzc2V0cy9qcy9kaWFsb2cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpe1xyXG4gICAgJCgnLnBsYXlfX2J1dHRvbicpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGFjdGlvbjogJ3ZpZGVvdHViZXJfc2hvd192aWRlb19tb2RhbCcsXHJcbiAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcclxuICAgICAgICAkLmFqYXgoeyAgXHJcbiAgICAgICAgICAgIHVybDogV1BSLmFqYXhfdXJsLCBcclxuICAgICAgICAgICAgdHlwZTogJ0dFVCcsIFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICggcmVzcG9uc2UgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2RpYWxvZyAuZGlhbG9nX19jb250ZW50JykuZW1wdHkoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGh0bWwgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGlmcmFtZSBzcmM9XCIke3Jlc3BvbnNlWyd1cmwnXX0/YXV0b3BsYXk9MVwiIGZyYW1lYm9yZGVyPVwiMFwiXHJcblx0YWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCJcclxuXHRhbGxvd2Z1bGxzY3JlZW4gOz48L2lmcmFtZT5cclxuICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgICAgICAkKCcjZGlhbG9nIC5kaWFsb2dfX2NvbnRlbnQnKS5hcHBlbmQoaHRtbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNkaWFsb2cgc3BhbicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnI2RpYWxvZyAuZGlhbG9nX19jb250ZW50JykuZW1wdHkoKTtcclxuICAgICAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICBcclxuICAgIH0pO1xyXG59KShqUXVlcnkpOyJdLCJuYW1lcyI6WyIkIiwiY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJpZCIsImRhdGEiLCJhY3Rpb24iLCJkaWFsb2ciLCJzaG93TW9kYWwiLCJhamF4IiwidXJsIiwiV1BSIiwiYWpheF91cmwiLCJ0eXBlIiwic3VjY2VzcyIsInJlc3BvbnNlIiwiZW1wdHkiLCJjb25zb2xlIiwibG9nIiwiaHRtbCIsImFwcGVuZCIsImNsb3NlIiwialF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==