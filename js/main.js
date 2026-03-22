$(function() {
    $('.hamburger').click(function(){
        $('.main-nav').toggleClass('open');

        $(this).toggleClass('active');
    });
});

$(function () {
  // ② スクロールで要素が表示領域に来たらフェードイン
  $(window).on('scroll', function () {
    $('.scroll-fadein').each(function () {
      const elemTop = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if (scroll > elemTop - windowHeight + 100) {
        $(this).addClass('on');
      }
    });
  });

  // 読み込み時にも判定
  $(window).trigger('scroll');
});

$(function() {
	$('mainvis').fadeIn(1500);
});