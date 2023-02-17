
$(function() {
    $(".box").on("click", e => {
        console.log($(e.target));
        $(e.target).parents(".box").find(".full").toggleClass("show");
        // $(this).parent(".box").find(".full").toggleClass("show");
    })
});
