$(document).ready(function () {
  $('.results-link').click(function () {
    var destination = $(".results").offset().top - 0;
    $("body,html").animate({
      scrollTop: destination
    }, 500);
  });
  $('.conference-link').click(function () {
    var destination = $(".conference").offset().top - 0;
    $("body,html").animate({
      scrollTop: destination
    }, 500);
  });
  $('.where-link').click(function () {
    var destination = $(".where").offset().top - 0;
    $("body,html").animate({
      scrollTop: destination
    }, 500);
  });
  $('.program-link').click(function () {
    var destination = $(".program").offset().top - 150;
    $("body,html").animate({
      scrollTop: destination
    }, 500);
  });

  $(window).scroll(function () {
    return $('nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });


  $('.video-btn').click(function () {
    $(this).parents('.video-item').find('img').hide();
    $(this).parents('.video-item').find('.video-btn').hide();
    $(this).parents('.video-item').append('<iframe src="//www.youtube.com/embed/' + $(this).parents('.video-item').data('video') + '?version=3&loop=1&autoplay=1&mute=0" allowfullscreen></iframe>');

  });
  $('.review-btn').click(function () {
    $(this).parents('.review-video').find('img').hide();
    $(this).parents('.review-video').find('.review-btn').hide();
    $(this).parents('.review-video').append('<iframe src="//www.youtube.com/embed/' + $(this).parents('.review-video').data('video') + '?version=3&loop=1&autoplay=1&mute=0" allowfullscreen></iframe>');

  });

  $('.results-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: false,
    responsive: {
      0: {
        items: 1
      }
    }
  })

  $(".zoom, .photo-btn").click(function () {
    $.fancybox([
			'images/photo/p1.png',
			'images/photo/p3.png',
			'images/photo/p5.png',
			'images/photo/p6.png',
			'images/photo/p7.png',
			'images/photo/p8.png',
			'images/photo/p9.png',
			'images/photo/p10.png',
			'images/photo/22999989_2030718673839627_6811350564189474746_o.jpg.png',
			'images/photo/p2.png'
		], {
      'padding': 0,
      'transitionIn': 'none',
      'transitionOut': 'none',
      'type': 'image',
      'changeFade': 0
    });
  });
  $('.mob-btn').click(function(){
    $('nav .nav-menu').slideToggle();
  })
  
  $('.order-btn').click(function(e){
    e.preventDefault();
    $.fancybox.open($('#popup'));
  })
  $('.nav-menu li a').click(function(e){
    e.preventDefault();
    $.fancybox.open($(this).attr('href'));
  });


    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
            vars[key] = value;
        });
        return vars;
    }
    $('input[name="utm_source"]').val(getUrlVars()["utm_source"]);
    $('input[name="utm_campaign"]').val(getUrlVars()["utm_campaign"]);
    $('input[name="utm_medium"]').val(getUrlVars()["utm_medium"]);
    $('input[name="utm_term"]').val(getUrlVars()["utm_term"]);
    $('input[name="utm_content"]').val(getUrlVars()["utm_content"]);
    $('input[name="page_url"]').val(window.location.hostname);
    $('input[name="ref"]').val(document.referrer);

    $.get("https://ipinfo.io", function(response) {
        $('input[name="ip_address"]').val(response.ip);
        $('input[name="city"]').val(response.city);

    }, "jsonp");



});