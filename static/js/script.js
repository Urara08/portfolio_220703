//先頭に戻るボタン
$(function(){
  var topBtn=$('.js-page_top');

topBtn.click(function(){
  $('body,html').animate({
  scrollTop: 0},500);
  return false;
});
});

$(function () {
  $('.burger-btn').on('click', function () {
    $('.burger-btn').toggleClass('close');
    $('.nav-wrapper').toggleClass('fade');
  });
});
