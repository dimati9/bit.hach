$(function() {
    String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g, '');};
    $("#click").on("click", e => {
            let newMessage = $($("input")[0]).val();
            if(newMessage.length > 0) {
                $($(".text")[0]).append(`<div class="me">
                    <span class="">${newMessage}</span>
                </div>`)
                $($("input")[0]).val("");


                if(newMessage.trim().toUpperCase() == "ПРИВЕТ") {
                    $($(".text")[0]).append(`<div class="bot">
                    <span class="">Ну привет</span>
                </div>`)
                }   else if(newMessage.trim().toUpperCase() == "ЧТО ТЫ УМЕЕШЬ?") {
                    $($(".text")[0]).append(`<div class="bot">
                    <span class="">Я умею отвечать на простые вопросы, например найти нужный контакт</span>
                </div>`)
                }   else if(newMessage.trim().toUpperCase() == "НАЙТИ КОНТАКТ МУСЯЧЕНКО ДМИТРИЙ") {
                    $($(".text")[0]).append(`<div class="bot">
                    <span class="">Вот что я нашёл: Мусяченко Дмитрий | Разработчик | 55-35-35 доп.34 </span></div>`)
                }   else {
                    $($(".text")[0]).append(`<div class="bot">
                    <span class="">Я не понимаю что вы написали</span></div>`)
                }
            }

    });


});
