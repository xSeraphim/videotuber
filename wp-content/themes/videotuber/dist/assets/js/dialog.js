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
          var html = "\n                    <iframe src=\"".concat(response['url'], "\" frameborder=\"0\"\n\tallow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\n\tallowfullscreen ;></iframe>\n                    ");
          $('#dialog .dialog__content').append(html);
        }
      }
    });
  });
  $('#dialog span').click(function () {
    dialog.close();
  });
})(jQuery);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsQ0FBQyxVQUFTQSxDQUFDLEVBQUM7RUFDUkEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDQyxLQUFLLENBQUMsVUFBU0MsQ0FBQyxFQUFDO0lBQ2hDQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtJQUNsQixJQUFJQyxFQUFFLEdBQUdKLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0ssSUFBSSxDQUFDLElBQUksQ0FBQztJQUMzQixJQUFJQSxJQUFJLEdBQUc7TUFDUEMsTUFBTSxFQUFFLDZCQUE2QjtNQUNyQ0YsRUFBRSxFQUFFQTtJQUNSLENBQUM7SUFDREcsTUFBTSxDQUFDQyxTQUFTLEVBQUU7SUFDbEJSLENBQUMsQ0FBQ1MsSUFBSSxDQUFDO01BQ0hDLEdBQUcsRUFBRUMsR0FBRyxDQUFDQyxRQUFRO01BQ2pCQyxJQUFJLEVBQUUsS0FBSztNQUNYUixJQUFJLEVBQUVBLElBQUk7TUFDVlMsT0FBTyxFQUFFLGlCQUFTQyxRQUFRLEVBQUM7UUFDdkI7O1FBRUEsSUFBS0EsUUFBUSxFQUFHO1VBRVpmLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDZ0IsS0FBSyxFQUFFO1VBQ3JDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsUUFBUSxDQUFDO1VBQ3JCLElBQUlJLElBQUksaURBQ09KLFFBQVEsQ0FBQyxLQUFLLENBQUMsb0xBRzdCO1VBQ0FmLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDb0IsTUFBTSxDQUFDRCxJQUFJLENBQUM7UUFFOUM7TUFDTDtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztFQUVGbkIsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDQyxLQUFLLENBQUMsWUFBVTtJQUU5Qk0sTUFBTSxDQUFDYyxLQUFLLEVBQUU7RUFFbEIsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxFQUFFQyxNQUFNLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpZGVvdHViZXIvLi9zcmMvYXNzZXRzL2pzL2RpYWxvZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCl7XHJcbiAgICAkKCcucGxheV9fYnV0dG9uJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBpZCA9ICQodGhpcykuZGF0YSgnaWQnKTtcclxuICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgICAgYWN0aW9uOiAndmlkZW90dWJlcl9zaG93X3ZpZGVvX21vZGFsJyxcclxuICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZGlhbG9nLnNob3dNb2RhbCgpO1xyXG4gICAgICAgICQuYWpheCh7ICBcclxuICAgICAgICAgICAgdXJsOiBXUFIuYWpheF91cmwsIFxyXG4gICAgICAgICAgICB0eXBlOiAnR0VUJywgXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKCByZXNwb25zZSApIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAkKCcjZGlhbG9nIC5kaWFsb2dfX2NvbnRlbnQnKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaHRtbCA9IGBcclxuICAgICAgICAgICAgICAgICAgICA8aWZyYW1lIHNyYz1cIiR7cmVzcG9uc2VbJ3VybCddfVwiIGZyYW1lYm9yZGVyPVwiMFwiXHJcblx0YWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCJcclxuXHRhbGxvd2Z1bGxzY3JlZW4gOz48L2lmcmFtZT5cclxuICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgICAgICAkKCcjZGlhbG9nIC5kaWFsb2dfX2NvbnRlbnQnKS5hcHBlbmQoaHRtbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNkaWFsb2cgc3BhbicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxufSkoalF1ZXJ5KTsiXSwibmFtZXMiOlsiJCIsImNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaWQiLCJkYXRhIiwiYWN0aW9uIiwiZGlhbG9nIiwic2hvd01vZGFsIiwiYWpheCIsInVybCIsIldQUiIsImFqYXhfdXJsIiwidHlwZSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsImVtcHR5IiwiY29uc29sZSIsImxvZyIsImh0bWwiLCJhcHBlbmQiLCJjbG9zZSIsImpRdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=