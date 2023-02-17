
$(function() {
    $(".box").on("click", e => {
        console.log($(e.target));
        if($(e.target)[0].nodeName == "INPUT") {
            return;
        }
        $(e.target).parents(".box").find(".full").toggleClass("show");
        // $(this).parent(".box").find(".full").toggleClass("show");
    });

    $("#link").click(e => {
        localStorage.setItem("info", "1");
        location.href = "./index.html";
    });
});
