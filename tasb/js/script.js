$(document).ready(function(){

    $('.icon-home').on('click', function(){

        $('.content1').slideDown();
        $('.content2').slideUp();
        $('.content3').slideUp();

    })

    $('.icon-folder').on('click', function(){

        $('.content2').fadeIn();
        $('.content1').slideUp();
        $('.content3').slideUp();

    })

    $('.icon-mail').on('click', function(){

        $('.content3').fadeIn();
        $('.content1').slideUp();
        $('.content2').slideUp();

    })

})
