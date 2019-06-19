$(document).ready(function() {
    $('.select > .item > ul> li > a').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).siblings('.sub').fadeIn(1000);

    });
    $('.sub li a').click(function(e) {
        e.preventDefault();
        var chooseText = $(this).text()
        $('.sub').fadeOut();
        $('.select > .item > ul> li > a').html(chooseText + '<img src="img/ copy1.png" alt="">');

    });
    $('.select > .item1 > ul> li > a').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).siblings('.sub1').fadeIn(1000);

    });
    $('.sub1 li a').click(function(e) {
        e.preventDefault();
        $('.sub1').fadeOut();
        var chooseText1 = $(this).text()
        $('.select > .item1 > ul> li > a').html(chooseText1 + '<img src="img/ copy1.png" alt="">');

    });
    $(document).click(function(e) {
        //e.preventDefault();

        $('.select > .item > ul> li .sub ').fadeOut();
        $('.select > .item1 > ul> li .sub1 ').fadeOut();

    });
    $('.view-1 img').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        var srcSmall = $(this).attr('src')
        $('.view-hinh1').find('>img').attr('src', srcSmall);
        $('.view-nho img').css('opacity', '0.5');
        $(this).css('opacity', '1');





    });
    $('.view-2 img').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        var srcSmall = $(this).attr('src')
        $('.view-hinh1').find('>img').attr('src', srcSmall);
        $('.view-nho img').css('opacity', '0.5');
        $(this).css('opacity', '1');



    });
    $('.view-3 img').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        var srcSmall = $(this).attr('src')
        $('.view-hinh1').find('>img').attr('src', srcSmall);
        $('.view-nho img').css('opacity', '0.5');

        $(this).css('opacity', '1');



    });
    $('.view-4 img').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        var srcSmall = $(this).attr('src')
        $('.view-hinh1').find('>img').attr('src', srcSmall);
        $('.view-nho img').css('opacity', '0.5');
        $(this).css('opacity', '1');


    });
    $(' #item1 .img img').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.view1').css('display', 'block');
        // $('.view1 ').fadeIn(1000);
        $('.view-nho img').css('opacity', '1');
        var srcSmall = $(this).attr('src')
        $('.view-hinh1').find('img').attr('src', srcSmall);
        var srcSmall1 = $(' .img-1 img').attr('src')
        $('.view-1').find('img').attr('src', srcSmall1);
        var srcSmall2 = $(' .img-2 img').attr('src')
        $('.view-2').find('img').attr('src', srcSmall2);
        var srcSmall3 = $(' .img-3 img').attr('src')
        $('.view-3').find('img').attr('src', srcSmall3);
        var srcSmall4 = $(' .img-4 img').attr('src')
        $('.view-4').find('img').attr('src', srcSmall4);
    });
    $(' #item2 .img img').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.view1').css('display', 'block');
        // $('.view1 ').fadeIn(1000);
        $('.view-nho img').css('opacity', '1');
        var srcSmall = $(this).attr('src')
        $('.view-hinh1').find('img').attr('src', srcSmall);
        var srcSmall1 = $(' .img-5 img').attr('src')
        $('.view-1').find('img').attr('src', srcSmall1);
        var srcSmall2 = $(' .img-6 img').attr('src')
        $('.view-2').find('img').attr('src', srcSmall2);
        var srcSmall3 = $(' .img-7 img').attr('src')
        $('.view-3').find('img').attr('src', srcSmall3);
        var srcSmall4 = $(' .img-8 img').attr('src')
        $('.view-4').find('img').attr('src', srcSmall4);
    });
    $(' #item3 .img img').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.view1').css('display', 'block');
        // $('.view1 ').fadeIn(1000);
        $('.view-nho img').css('opacity', '1');
        var srcSmall = $(this).attr('src')
        $('.view-hinh1').find('img').attr('src', srcSmall);
        var srcSmall1 = $(' .img-9 img').attr('src')
        $('.view-1').find('img').attr('src', srcSmall1);
        var srcSmall2 = $(' .img-10 img').attr('src')
        $('.view-2').find('img').attr('src', srcSmall2);
        var srcSmall3 = $(' .img-11 img').attr('src')
        $('.view-3').find('img').attr('src', srcSmall3);
        var srcSmall4 = $(' .img-12 img').attr('src')
        $('.view-4').find('img').attr('src', srcSmall4);
    });


    $(window).click(function(e) {
        // e.preventDefault();
        $('.view1').fadeOut();
    });

    $(window).scroll(function() {
        var srooltop = $('html,body').scrollTop();
        var list = $('.mid-one').offset().top - 55;

        if (srooltop > 10) {
            $('.mid-one').addClass('mid-1');
        } else {
            $('.mid-one').removeClass('mid-1');
        }

        if (srooltop > 20) {
            $('.mid-two').addClass('mid-2');
        } else {
            $('.mid-two').removeClass('mid-2');
        }


    });
    $('.login1 ').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.modal').fadeIn();

    });
    $('.form').click(function(e) {
        e.preventDefault();
        e.stopPropagation();


    });
    $(document).click(function(e) {
        // e.preventDefault();
        $('.modal').fadeOut();

    });
});