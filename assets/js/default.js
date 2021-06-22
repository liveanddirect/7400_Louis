$(function () {
  $('.frame-draggy').draggable();

  $('body').on('click', '#toggle-overlay', function(e) {
    e.preventDefault();
  $(".index-container").toggleClass("index-container--open");
  });
});
