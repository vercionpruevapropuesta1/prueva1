$(document).ready(function(){

    ('.icon-home').on('click',function(){

        $('.content-tabs1').slideDown();
        $('.content-tabs2').slideUp();
        $('.content-tabs3').slideUp();

    })
     $('.icon-folder').on('click', function(){

        $('.content-tabs2').fadeIn();
        $('.content-tabs1').slideUp();
        $('.content-tabs3').slideUp();

    })
      $('.icon-mail').on('click', function(){

        $('.content-tabs3').fadeIn();
        $('.content-tabs1').slideUp();
        $('.content-tabs2').slideUp();

    })
})
