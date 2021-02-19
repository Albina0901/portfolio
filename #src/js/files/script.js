// функция добавления изображения с расширением webp
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});

$(document).ready(function() {

    // Плавная прокрутка по якорям
    $('a.menu__list-link,a.offer__btn').click(function() {
        var elementClick = $(this).attr('href')
        var destination = $(elementClick).offset().top;
        jQuery('html:not(:animated),body:not(:animated)').animate({
        scrollTop: destination
        }, 800);
        return false;
    });
	// Обработчик бургер-меню
    $('.menu__burger').click(function(event) {
        $('.menu__burger,.menu').toggleClass('_active');
		$('body').toggleClass('_lock');
    });
    $('a.menu__list-link').click(function(event) {
        $('.menu__burger,.menu').toggleClass('_active');
		$('body').toggleClass('_lock');
    });

});
