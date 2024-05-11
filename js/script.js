$(document).ready(function () {
    $(".nav-item").click(function () {
        $(".nav-item").removeClass('active-link');
        $(this).addClass('active-link')
        $('html, body').animate({
            scrollTop: $($(this).attr("data-id")).offset().top - 70
        }, 400);

    });
});