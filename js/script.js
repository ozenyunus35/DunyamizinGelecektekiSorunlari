// $('.side-panel .categories span').click(function(event) {
//     if (event.target.id != "") {
//         $('.side-panel .categories span').removeClass("active")
//         $("#" + event.target.id).addClass("active")
//     } else {
//         $('.side-panel .categories span').removeClass("active")
//         $(event.target).parent().parent().addClass("active")
//     }
//     $("main").addClass("active")
// })
// $(".map svg g").click(function(event) {
//     console.log(event.relatedTarget)
// })

$('.side-panel .categories span').click(function() {
    if ($(this).hasClass("active")) {
        $(this).removeClass("active")
        $("main .side-panel").removeClass("active")
        $("main").removeClass()

    } else {
        $('.side-panel .categories span').removeClass("active")
        $(this).addClass("active")
        $("main .side-panel").addClass("active")
        $("main").removeClass()
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
})