# Wellnwest

## Project setup

> **install [nodejs](https://nodejs.org/uk/)**


> **install modules**

``` bash
$ npm install
```

### Compiles for development

``` bash
$ npm run serve
```

### Compiles and minifies for production

``` bash
$ npm run build
```

***
### libraries/frameworks are used

* [vue](https://vuejs.org/)
* [vuex](https://vuex.vuejs.org/)
* [axios](https://github.com/axios/axios)
* [swiper](https://swiperjs.com/)
* [css-reset-and-normalize](https://github.com/simbo/css-reset-and-normalize#readme)

> do not use jQuery

***
### used technology

* [pug](https://pugjs.org/)
* [ES6+](http://www.ecma-international.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [SCSS](https://sass-lang.com/)
* [webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io/)
* [ESLint](https://eslint.org/)
* [stylelint](https://stylelint.io/)
* [PostCSS](https://postcss.org/)
* [BEM](https://en.bem.info/)
* [SMACSS](http://smacss.com/)
* [git](https://git-scm.com/)

## DOCS
### Зарезервовані ID тегів
- **lang** (використовується для візуалізації елемента переключення мов)
- **header-control** (використовується для візуалізації мобільного меню)

### Налаштування accordion (FAQ)
``` html
<ul class="accordion">
	<li class="accordion__item">
		<input class="accordion__input" id="faq-item_0" type="checkbox" hidden="">
		<div class="accordion__main">
			<label class="accordion__header" for="faq-item_0">Запитання</label>
			<div class="accordion__content">
				<div class="content">
					<p> ...відповідь </p>
				</div>
			</div>
		</div>
		<label class="accordion__btn" for="faq-item_0"> </label>
	</li>
	<li class="accordion__item">
		<input class="accordion__input" id="faq-item_1" type="checkbox" hidden="">
		<div class="accordion__main">
			<label class="accordion__header" for="faq-item_1">Запитання</label>
			<div class="accordion__content">
				<div class="content">
					<p> ...відповідь </p>
				</div>
			</div>
		</div>
		<label class="accordion__btn" for="faq-item_1"></label>
	</li>
</ul>
```

Розкривання/закривання елементів стилями.

У кожного елемента є `<input class="accordion__input" id="faq-item_1" type="checkbox" hidden>` з унікальним **id**, і по 2 елементи, які "контролюють" цей контрол:
 - `<label class="accordion__header" for="faq-item_1">Запитання</label>`
 - `<label class="accordion__btn" for="faq-item_1"></label>`
  
у них є атрибут **for**, який повинен відповідати id `<input class="accordion__input" id="faq-item_1" type="checkbox" hidden>`.
### Налаштування collapsed (services)
``` html
<ul class="table">
	<li class="row table__row">
		<section class="table__row-services collapsed">
			<header>
				<h3 class="headline headline--l3">
					назва
				</h3>
			</header>
			<div class="content">
				<p>
					.. короткий опис
				</p>
			</div>
			<input class="collapsed__input" id="service-item_0" type="checkbox" hidden="">
			<div class="collapsed__content">
				<div class="content">
					<p>
						...повний опис
					</p>
				</div>
			</div>
			<label class="collapsed__btn" for="service-item_0">
				<span class="collapsed__btn-controll"></span>
				<span class="collapsed__btn-text" data-text-open="Узнать больше..." data-text-close="Cкрыть"></span>
			</label>
		</section>
	</li>
	<li class="row table__row">
		<section class="table__row-services collapsed">
			<header>
				<h3 class="headline headline--l3">
					назва
				</h3>
			</header>
			<div class="content">
				<p>
					.. короткий опис
				</p>
			</div>
			<input class="collapsed__input" id="service-item_1" type="checkbox" hidden="">
			<div class="collapsed__content">
				<div class="content">
					<p>
						...повний опис
					</p>
				</div>
			</div>
			<label class="collapsed__btn" for="service-item_1">
				<span class="collapsed__btn-controll"></span>
				<span class="collapsed__btn-text" data-text-open="Узнать больше..." data-text-close="Cкрыть"></span>
			</label>
		</section>
	</li>
</ul>
```

Розкривання/закривання елементів стилями.

У кожного елемента є `<input class="collapsed__input" id="service-item_1" type="checkbox" hidden="">` з унікальним **id**, і елемент, який "контролюює" цей контрол `<label class="collapsed__btn" for="service-item_1">...<label>`, у нього є атрибут **for**, який повинен відповідати id `<input class="collapsed__input" id="service-item_1" type="checkbox" hidden="">`.
### Партнери
Для ініціалізації слайдера з партнерами потрбно на елмент слайдера додати атрибут **data-partners**

### Налаштування карти

Для ініціалізації карти потрбно вставити наступну розмітку
``` html
<div data-is="Map"
	data-params='{
		"map": { "lat": 46.48080463063726, "lon": 30.725288987159733, "zoom": 17 },
		"markers": [
			{
				"url": "marker-map",
				"pos": [46.48080463063726, 30.725288987159733]
			}
		]
	}'>
</div>
```

**data-map-center** атрибут, який можна додавати на елемент, при кліку на який выібувається центрування карти по координатах **dataParams.map**

в **data-params** передаємо JSON з налаштуваннями карти

- **map** - налаштування карти
- - **lat/lon** - координати
- - **zoom** - zoom
- **markers {}** - налаштування маркерів (може приймати кілька маркерів)
- - **url** - зображення маркера (зы спрайта)
- - **pos** - координати

### Попап / форма

Блок **data-is="RequestInformation"** підключаємо лише на тих сторінках, де буде відкриватись попап
Для відкриття попапа на елемент (кнопку) додаємо атрибут **data-open-popup** за параметрами (JSON), в які передаємо параметри запиту (вони додадуться до інших параметрів, які описані нижче при відправленні даних на сервер). Якщо таких параметрыв немає, потрібно передати пустий об’єкт `data-open-popup='{}'`
``` html
<div class="link" data-open-popup='{"id": "111"}'>Запросить сведения</div>
```

в data-params блока **data-is="RequestInformation"** потрібно передати y JSON (дані винесоно з скриптів для переключенн мов і інших динамічних параметрів)

``` json
{
		"ajax": {
			"method": "get", // обов’язковий параметр (тип)
			"url": "/api/RequestInformation.json", // ендпоінт
			"params": { "lang": "ua", "token": "" }, // додаткові праметри (поточні параметри для прикладу),
			"headers": {} // заголовки, якщо потрібно
		},
		"form": {
			"title": "Результати діяльності фонду",
			"button": { 
				"text": "Запросить", 
				"closeText": "Закрыть" 
			},
			"fields": [ // Список полів вводу (замінюємо лише значення label, code, labels), все іннше залишажмо як є
				{
					"label": "ФИО",
					"code": "FULL_NAME",
					"value": "",
					"error": false,
					"mask": false,
					"type": "text",
					"regex": ["empty", "fullName"],
					"labels": ["Введите ФИО", "Введите правильное ФИО"]
				}
			]
		}
	}
```

``` html
<div data-is="RequestInformation"
	data-params='{
		"ajax": {
			"method": "get",
			"url": "/api/RequestInformation.json",
			"params": { "lang": "ua", "token": "" }
		},
		"form": {
			"title": "Результати діяльності фонду",
			"button": { 
				"text": "Запросить", 
				"closeText": "Закрыть" 
			},
			"fields": [
				{
					"label": "ФИО",
					"code": "FULL_NAME",
					"value": "",
					"error": false,
					"mask": false,
					"type": "text",
					"regex": ["empty", "fullName"],
					"labels": ["Введите ФИО", "Введите правильное ФИО"]
				},
				{
					"label": "Телефон",
					"code": "PHONE",
					"value": "",
					"error": false,
					"mask": "+38 (0##) ###-##-##",
					"type": "tel",
					"regex": ["empty", "tel"],
					"labels": ["Введите Телефон", "Введите правильный телефон"]
				},
				{
					"label": "Email",
					"code": "EMAIL",
					"value": "",
					"error": false,
					"mask": false,
					"type": "email",
					"regex": ["empty", "email"],
					"labels": ["Введите Email", "Введите корректный Email"]
				},
				{
					"label": "Название вашей организации",
					"code": "COMPANY",
					"value": "",
					"size": 2,
					"error": false,
					"mask": false,
					"type": "text",
					"regex": ["empty"],
					"labels": ["Введите Название вашей организации"]
				}
			]
		}
	}
	'>
</div>
```

при успішній обробці форми сервер повертає статус 2ХХ
з наступною інформацією

``` json
{
	"SUCCESS": "Ваші дані успішно відправлені" 
}
```

при помилці повертає статус 4ХХ
з наступною інформацією

``` json
{
	"ERROR": "Якась там помилка" 
}
```