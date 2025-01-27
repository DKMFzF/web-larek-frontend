import { ISETTINGS } from '../types/settings';

export const API_URL = `${process.env.API_ORIGIN}/api/weblarek`;
export const CDN_URL = `${process.env.API_ORIGIN}/content/weblarek`;
export const DEVELOPMENT = process.env.NODE_ENV === 'development';

// TODO: подправить нейминг классов и индификаторов

// Настройка приложения
export const SETTINGS: ISETTINGS = {
    // view settings
    gallerySelector: '.gallery',
	gallerySettings: {
		activeItemClass: 'gallery__item_active',
		itemClass: 'gallery__item',
	},

    cardTemplate: '#card-catalog',
    cardSettings: {
        title: '.card__title',
        category: '.card__category',
        price: '.card__price',
        image: '.card__image',
    },

    pageSelector: '.page',
	pageSettings: {
		wrapper: '.page__wrapper',
		counter: '.header__basket-counter',
		basket: '.header__basket',
		lockedClass: 'page__wrapper_locked',
	},

    basketTemplate: '#basket',
    basketSettings: {
        title: '.modal__title',
        // contentList: '',
        basketList: '.basket__list',
        list: {
            itemClass: 'basket__item',
            activeItemClass: '',
        },
        nextButton: '.basket__button',
        total: '.basket__price',
        // itemClass: 'basket__item', // класс элементов корзины
    },

    productTemplate: '#card-preview',
	productSettings: {
		title: '.card__title',
		image: '.card__image',
		category: '.card__category',
		price: '.card__price',
		description: '.card__text',
        addBasket: '.card__button',
	},

    productBasketTemplate: '#card-basket',
	productBasketSettings: {
		index: '.basket__item-index',
		title: '.card__title',
		price: '.card__price',
		delete: '.basket__item-delete',
	},

    orderTemplate: '#order',
	orderSettings: {
        cash: 'button["name"]',
        card: 'button["cash"]',
        address: 'input[name="address"]',
	},
    
    contactsTemplate: '#contacts',
    contactsSettings: {
        email: 'input["email"]',
        phone: 'input["phone"]',
    },

    // TODO: разобраться
    messageTemplate: '#success',
    messageSettings: {
        title: '.order-success__title',
        description: '.order-success__description',
        action: '.order-success__close',
    },

    // modal settings
    modalTemplate: '#modal',
    modalSettings: {
		close: '.modal__close', // класс кнопки закрытия
		content: '.modal__content', // класс контента модального окна
		activeClass: 'modal_active', // класс активного модального окна
    },

    // data modal

    basketModal: {
        title: 'Корзина',
        nextButton: 'Оформить',

        nextSettings: [
            'button', 
            { className: 'button basket__button'}
        ],
        
        totalLabel: 'синапсов',
    },

    orderModal: {
        nextLabel: 'Далее',
        nextSettings: [
            'button',
            { className: 'button' }
        ],
    },

    appState: {
		formatCurrency: (value: number) => `${value} синапсов`,
		storageKey: '__products',
	},
};
