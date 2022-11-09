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
  $('.twitch__button').click(function (e) {
    e.preventDefault();
    var id = $(this).data('id');
    dialog.showModal();
    $('#dialog .dialog__content').empty();
    var html = "\n        <iframe src=\"https://player.twitch.tv/?video=".concat(id, "&parent=localhost&parent=127.0.0.1&parent=dev-videotuber.pantheonsite.io&parent=www.dev-videotuber.pantheonsite.io\" frameborder=\"0\" autoplay; allowfullscreen;></iframe>\n                    ");
    $('#dialog .dialog__content').append(html);
  });
  $('#dialog span').click(function () {
    $('#dialog .dialog__content').empty();
    dialog.close();
  });
})(jQuery);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsQ0FBQyxVQUFTQSxDQUFDLEVBQUM7RUFDUkEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDQyxLQUFLLENBQUMsVUFBU0MsQ0FBQyxFQUFDO0lBQ2hDQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtJQUNsQixJQUFJQyxFQUFFLEdBQUdKLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0ssSUFBSSxDQUFDLElBQUksQ0FBQztJQUMzQixJQUFJQSxJQUFJLEdBQUc7TUFDUEMsTUFBTSxFQUFFLDZCQUE2QjtNQUNyQ0YsRUFBRSxFQUFFQTtJQUNSLENBQUM7SUFDREcsTUFBTSxDQUFDQyxTQUFTLEVBQUU7SUFDbEJSLENBQUMsQ0FBQ1MsSUFBSSxDQUFDO01BQ0hDLEdBQUcsRUFBRUMsR0FBRyxDQUFDQyxRQUFRO01BQ2pCQyxJQUFJLEVBQUUsS0FBSztNQUNYUixJQUFJLEVBQUVBLElBQUk7TUFDVlMsT0FBTyxFQUFFLGlCQUFTQyxRQUFRLEVBQUM7UUFDdkI7O1FBRUEsSUFBS0EsUUFBUSxFQUFHO1VBRVpmLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDZ0IsS0FBSyxFQUFFO1VBQ3JDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsUUFBUSxDQUFDO1VBQ3JCLElBQUlJLElBQUksaURBQ09KLFFBQVEsQ0FBQyxLQUFLLENBQUMsK0xBRzdCO1VBQ0FmLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDb0IsTUFBTSxDQUFDRCxJQUFJLENBQUM7UUFFOUM7TUFDTDtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztFQUVGbkIsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUNDLEtBQUssQ0FBQyxVQUFTQyxDQUFDLEVBQUM7SUFDbENBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0lBQ2xCLElBQUlDLEVBQUUsR0FBR0osQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDSyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzNCRSxNQUFNLENBQUNDLFNBQVMsRUFBRTtJQUNsQlIsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUNnQixLQUFLLEVBQUU7SUFDckMsSUFBSUcsSUFBSSxxRUFDdUNmLEVBQUUsc01BQ3BDO0lBQ2JKLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDb0IsTUFBTSxDQUFDRCxJQUFJLENBQUM7RUFFOUMsQ0FBQyxDQUFDO0VBRUZuQixDQUFDLENBQUMsY0FBYyxDQUFDLENBQUNDLEtBQUssQ0FBQyxZQUFVO0lBQzlCRCxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQ2dCLEtBQUssRUFBRTtJQUNyQ1QsTUFBTSxDQUFDYyxLQUFLLEVBQUU7RUFFbEIsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxFQUFFQyxNQUFNLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpZGVvdHViZXIvLi9zcmMvYXNzZXRzL2pzL2RpYWxvZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCl7XHJcbiAgICAkKCcucGxheV9fYnV0dG9uJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBpZCA9ICQodGhpcykuZGF0YSgnaWQnKTtcclxuICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgICAgYWN0aW9uOiAndmlkZW90dWJlcl9zaG93X3ZpZGVvX21vZGFsJyxcclxuICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZGlhbG9nLnNob3dNb2RhbCgpO1xyXG4gICAgICAgICQuYWpheCh7ICBcclxuICAgICAgICAgICAgdXJsOiBXUFIuYWpheF91cmwsIFxyXG4gICAgICAgICAgICB0eXBlOiAnR0VUJywgXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKCByZXNwb25zZSApIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAkKCcjZGlhbG9nIC5kaWFsb2dfX2NvbnRlbnQnKS5lbXB0eSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaHRtbCA9IGBcclxuICAgICAgICAgICAgICAgICAgICA8aWZyYW1lIHNyYz1cIiR7cmVzcG9uc2VbJ3VybCddfT9hdXRvcGxheT0xXCIgZnJhbWVib3JkZXI9XCIwXCJcclxuXHRhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIlxyXG5cdGFsbG93ZnVsbHNjcmVlbiA7PjwvaWZyYW1lPlxyXG4gICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICQoJyNkaWFsb2cgLmRpYWxvZ19fY29udGVudCcpLmFwcGVuZChodG1sKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnR3aXRjaF9fYnV0dG9uJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBpZCA9ICQodGhpcykuZGF0YSgnaWQnKTtcclxuICAgICAgICBkaWFsb2cuc2hvd01vZGFsKCk7XHJcbiAgICAgICAgJCgnI2RpYWxvZyAuZGlhbG9nX19jb250ZW50JykuZW1wdHkoKTtcclxuICAgICAgICB2YXIgaHRtbCA9IGBcclxuICAgICAgICA8aWZyYW1lIHNyYz1cImh0dHBzOi8vcGxheWVyLnR3aXRjaC50di8/dmlkZW89JHtpZH0mcGFyZW50PWxvY2FsaG9zdCZwYXJlbnQ9MTI3LjAuMC4xJnBhcmVudD1kZXYtdmlkZW90dWJlci5wYW50aGVvbnNpdGUuaW8mcGFyZW50PXd3dy5kZXYtdmlkZW90dWJlci5wYW50aGVvbnNpdGUuaW9cIiBmcmFtZWJvcmRlcj1cIjBcIiBhdXRvcGxheTsgYWxsb3dmdWxsc2NyZWVuOz48L2lmcmFtZT5cclxuICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICQoJyNkaWFsb2cgLmRpYWxvZ19fY29udGVudCcpLmFwcGVuZChodG1sKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjZGlhbG9nIHNwYW4nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJyNkaWFsb2cgLmRpYWxvZ19fY29udGVudCcpLmVtcHR5KCk7XHJcbiAgICAgICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxufSkoalF1ZXJ5KTsiXSwibmFtZXMiOlsiJCIsImNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaWQiLCJkYXRhIiwiYWN0aW9uIiwiZGlhbG9nIiwic2hvd01vZGFsIiwiYWpheCIsInVybCIsIldQUiIsImFqYXhfdXJsIiwidHlwZSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsImVtcHR5IiwiY29uc29sZSIsImxvZyIsImh0bWwiLCJhcHBlbmQiLCJjbG9zZSIsImpRdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=