$('.side-panel .categories span').click(function() {
    if ($(this).hasClass("active")) {
        $(this).removeClass("active")
        $("main .side-panel").removeClass("active")
        $("main").removeClass()
        $(".map svg g").css("display", "block")
        $(".map #svg").attr("viewBox", `0 0 1920 1080`);

    } else {
        $('.side-panel .categories span').removeClass("active")
        $(this).addClass("active")
        $("main .side-panel").addClass("active")
        $("main").removeClass()
        $(".map svg g").css("display", "block")
        $(".map #svg").attr("viewBox", `0 0 1920 1080`);
    }
});

$(".map svg g").click(function() {
    if ($(this).attr("id") != "oceans") {
        if ($("main").hasClass("continent")) {
            $("main").removeClass()
            $("main .side-panel").removeClass("active")
            $("main .side-panel span").removeClass("active")
        } else {
            $("main").addClass("continent")
            $("main").addClass($(this).attr("id"))
            $("main .side-panel").addClass("active")
            $("main .side-panel span").removeClass("active")
            $("main .side-panel #problem").addClass("active")
        }
    }
    if ($("main").hasClass("continent")) {
        $(".map svg g").css("display", "none")
        $(this).css("display", "block")
        let bbox = this.getBBox();
        $(".map #svg").attr("viewBox", `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);

    } else {
        $(".map svg g").css("display", "block")
        $(".map #svg").attr("viewBox", `0 0 1920 1080`);
    }
})

// Years input range background
const $sliderEl = $(".content .content-problem .range");

$sliderEl.on("input", function(event) {
    const progress = (event.target.value / $sliderEl.prop("max")) * 100;
    $sliderEl.css("background", `linear-gradient(to right, #34BCC2 ${progress}%, #C6D6E6 ${progress}%)`);
});

// Preloader
$(window).on('load', function() {
    $('#preloader').hide();
});