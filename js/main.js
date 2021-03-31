$(function () {
    //menu
    var $menu = $("nav ul li"),
        $contents = $(".container > div");

    $menu.click(function (e) {
        e.preventDefault();
        var idx = $(this).index(),
            section = $contents.eq(idx),
            sectionHeight = section.offset().top;

        $("html, body").stop().animate({ scrollTop: sectionHeight });
    });

    $(window).scroll(function () {
        $contents.each(function () {
            if ($(this).offset().top <= $(window).scrollTop()) {
                var idx = $(this).index();
                $menu.removeClass("on").eq(idx).addClass("on");
            } else {
            }
        });
    });
}); //end
