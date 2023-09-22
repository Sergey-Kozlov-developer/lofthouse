// находим navBtn и navIcon и nav в DOM
const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');

// при нажатии на меню меняем иконку и отображение навигации в мобильной версии
navBtn.onclick = function () {
	navIcon.classList.toggle('nav-icon--active');
	nav.classList.toggle('header__top-row--mobile');
	document.body.classList.toggle('no-scroll');
}

// Phone Mask
mask('[data-tel-input]');

// Удаляем '+' если больше ничего не введено, чтобы показать placeholder
const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input)=>{
	input.addEventListener('input', ()=>{
		if (input.value == '+') input.value = '';
	})
	input.addEventListener('blur', ()=>{
		if (input.value == '+') input.value = '';
	})
});

/* Yandex Map */

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
initMap();

async function initMap() {
	// Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
	await ymaps3.ready;

	const {YMap, YMapDefaultSchemeLayer} = ymaps3;

	// Иницилиазируем карту
	const map = new YMap(
		// Передаём ссылку на HTMLElement контейнера
		document.getElementById('map'),

		// Передаём параметры инициализации карты
		{
			location: {
				// Координаты центра карты
				center: [59.943093, 30.339853],

				// Уровень масштабирования
				zoom: 16
			}
		}
	);

	// Добавляем слой для отображения схематической карты
	map.addChild(new YMapDefaultSchemeLayer());
}