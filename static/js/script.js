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
    $('.p-header__menu').toggleClass('open');
    $('body').toggleClass('noscroll'); // 追記
  })
});

$(window).on('resize', function () {//画面をリサイズすると
  $('.p-header__menu').removeClass('open');
  $('.burger-btn').removeClass('close');
});
