$(function (){
    "use strict";
    $(window).scroll(function(){
       var navbar = $('.navbar');
        // (condition) ? true : false?
        ($(window).scrollTop() >= navbar.height())? navbar.addClass("scrolled"):navbar.removeClass("scrolled");

    });
    
    // deal with tabs
    $(".tab-switch li").click(function(){
        $(this).addClass("selected").siblings().removeClass("selected");
        $(".tabs .tabs-content > div").hide();
        $("." + $(this).data("class")).show();
    })
    
});