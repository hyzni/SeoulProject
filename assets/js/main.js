$('#langBtn').click(function(){
    url = $('#lang').val();
    window.open(url);
})



document.querySelector('.fix-btn').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  });

let lastScrollTop = 0;
$(window).scroll(function(){
  curr = $(this).scrollTop();

  if (curr < 1) {
    $('.fix-btn').addClass('hide');
  } else {
    $('.fix-btn').removeClass('hide');
  }
})



visualSlide1 = new Swiper('.sc-visual .news .swiper', {
    loop:true,
    navigation: {
        nextEl: ".sc-visual .next",
        prevEl: ".sc-visual .prev"
    },
    autoplay:{
        delay:1000,
    },
    pagination:{
        el: ".sc-visual .fraction",
        type: "fraction",
    }
})
visualSlide2 = new Swiper('.sc-visual .citizen .swiper', {
    loop:true,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev"
    },
    autoplay:{
        delay:1000,
    },
    pagination:{
        el: ".fraction",
        type: "fraction",
    }
})

visualSlide2.autoplay.stop(); 


$('.sc-visual .content .title').click(function(e){
    e.preventDefault();

    $('.sc-visual .content').removeClass('active');
    $(this).parent().addClass('active');


    if ($(this).parent().hasClass('citizen')) {
        if(!$('.citizen .btn-wrap .btn.autoplay').hasClass('stop')){
            visualSlide2.autoplay.start()
        }
        visualSlide1.autoplay.stop()
    } else { 
        
        if(!$('.news .btn-wrap .btn.autoplay').hasClass('stop')){
            visualSlide1.autoplay.start()
        }
        visualSlide2.autoplay.stop()
    }
})


$('.news .btn-wrap .btn.autoplay').click(function(){
    if($(this).hasClass('stop')) {
        $(this).removeClass('stop')
        visualSlide1.autoplay.start()
    } else {
        $(this).addClass('stop');
        visualSlide1.autoplay.stop()
    }
})

$('.citizen .btn-wrap .btn.autoplay').click(function(){
    if($(this).hasClass('stop')) {
        $(this).removeClass('stop')
        visualSlide2.autoplay.start()
    } else {
        $(this).addClass('stop');
        visualSlide2.autoplay.stop()
    }
})


$('.sc-visual .content .btn-more').click(function(){
    $('.sc-visual .all-banner').addClass('on')
    $('body').addClass('no-scroll'); // 스크롤 막기
})

$('.sc-visual .all-banner .btn-close').click(function(){
    $('.sc-visual .all-banner').removeClass('on')
    $('body').removeClass('no-scroll'); // 원래대로 복구
})




bottomSlide = new Swiper('.sc-bottomslide .swiper',{
    loop:true,
    autoplay:{
        delay:1000,
    },
    pagination:{
        el: ".sc-bottomslide .fraction",
        type: "fraction",
      },
    navigation:{
        nextEl:".sc-bottomslide .next",
        prevEl:".sc-bottomslide .prev"
    },
    slidesPerView: "3",
    spaceBetween: 40,
})

$('.sc-bottomslide .btn-wrap .btn.autoplay').click(function(){
    if (!$(this).hasClass('stop')) {
        $(this).addClass('stop'),
        bottomSlide.autoplay.stop()
    } else {
        $(this).removeClass('stop'),
        bottomSlide.autoplay.start()
    }
})


$('.sc-menu .menu-list .menu-item .btn-name').click(function(e){
    e.preventDefault();
    if ($(this).hasClass('on')) { // 올라와 있으면
        $('.sc-menu .menu-list .menu-item .btn-name').removeClass('on').siblings('.sub-menu').stop().slideUp()
    } else { // 내려가 있으면
        $('.sc-menu .menu-list .menu-item .btn-name').removeClass('on').siblings('.sub-menu').stop().slideUp()
        $(this).addClass('on').siblings('.sub-menu').stop().slideDown()
    }
});

