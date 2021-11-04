window.addEventListener('DOMContentLoaded', () => {
	class ItemCard {
		constructor(title, eac, ce, background, parentSelector, ...classes) {
			this.title = title;
			this.eac = eac;
			this.ce = ce;
			this.background = background;
			this.classes = classes;
			this.parent = document.querySelector(parentSelector);
		}

		render() {
			const element = document.createElement('div');

			if (this.classes.length === 0) {
				this.element = 'products-item';
				element.classList.add(this.element);
			} else {
				this.classes.forEach(() => {
					element.classList.add(this.classes);
				});
			}

			element.innerHTML = `
						<div class="products-item__info">
								<h3 class="products-item__title">"${this.title}"</h3>
								<div class="products-item__links">
									<a download	href="#" id="link-eng" class="products-item__guide">Download instructions ></a>
									<a download href="#" id="link-ua" class="products-item__guide">Завантажити інструкцію ></a>
									<a download href="#" id="link-ru" class="products-item__guide">Скачать инструкцию ></a>
								</div>
								<div class="products-item__sertificates">
								</div>
							</div>
							<div class="products-item__img products-item__img--${this.background}"></div>
	`;
			this.parent.append(element);

			if (this.eac) {
				element
					.querySelector('.products-item__sertificates')
					.insertAdjacentHTML(
						'beforeend',
						`<a href="#" class="products-item__note products-item__note--eac"></a>`
					);
			}
			if (this.ce) {
				element
					.querySelector('.products-item__sertificates')
					.insertAdjacentHTML(
						'beforeend',
						`<a href="#"	class="products-item__note products-item__note--ce"></a>`
					);
			}
		}
	}

	new ItemCard(
		'Single',
		true,
		true,
		'single',
		'.products-wrapper',
		'products-item'
	).render();

	new ItemCard(
		'I-Station',
		true,
		true,
		'istation',
		'.products-wrapper',
		'products-item'
	).render();

	new ItemCard(
		'DC Travel Charger',
		false,
		false,
		'dc',
		'.products-wrapper',
		'products-item'
	).render();

	new ItemCard(
		'Complex',
		true,
		false,
		'complex',
		'.products-wrapper',
		'products-item'
	).render();

	new ItemCard(
		'Charge Complex-T',
		true,
		false,
		'complex-t',
		'.products-wrapper',
		'products-item'
	).render();

	new ItemCard(
		'Charge Complex-Y',
		true,
		false,
		'complex-y',
		'.products-wrapper',
		'products-item'
	).render();

	new ItemCard(
		'Home',
		false,
		false,
		'home',
		'.archive-wrapper',
		'products-item'
	).render();

	new ItemCard(
		'Edison',
		false,
		false,
		'edison',
		'.archive-wrapper',
		'products-item'
	).render();

	new ItemCard(
		'Shnaider',
		false,
		false,
		'shnaider',
		'.archive-wrapper',
		'products-item'
	).render();

	new ItemCard(
		'Complex-p',
		false,
		false,
		'complex-p',
		'.archive-wrapper',
		'products-item'
	).render();
});
