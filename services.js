$(document).ready(function () {

    $(".services").each(function (index) {
        $(this).hide().delay(index * 300).fadeIn(800);
    });


    $(".services").hover(
        function () {
            $(this).animate({ marginLeft: "20px" }, 300);
        },
        function () {
            $(this).animate({ marginLeft: "0px" }, 300);
        }
    );

    
    $(".services h4").on("click", function () {
        $(this).next("p").slideToggle();
    });
});