
import type { Config } from '@puckeditor/core';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { Products } from './components/Products';
import { Features } from './components/Features';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';

export const config: Config = {
  components: {
    Header: {
      fields: {
        logo: { type: 'text', label: 'Название бренда' },
        phone: { type: 'text', label: 'Телефон' },
        cartCount: { type: 'number', label: 'Кол-во товаров в корзине' },
      },
      render: Header,
    },
    Hero: {
      fields: {
        title: { type: 'text', label: 'Заголовок' },
        subtitle: { type: 'textarea', label: 'Подзаголовок' },
        buttonText: { type: 'text', label: 'Текст кнопки' },
        discount: { type: 'text', label: 'Размер скидки' },
      },
      render: Hero,
    },
    Categories: {
      fields: {
        title: { type: 'text', label: 'Заголовок секции' },
      },
      render: Categories,
    },
    Products: {
      fields: {
        title: { type: 'text', label: 'Заголовок секции' },
        subtitle: { type: 'text', label: 'Подзаголовок' },
      },
      render: Products,
    },
    Features: {
      fields: {
        title: { type: 'text', label: 'Заголовок секции' },
      },
      render: Features,
    },
    Banner: {
      fields: {
        title: { type: 'text', label: 'Заголовок' },
        subtitle: { type: 'textarea', label: 'Подзаголовок' },
        buttonText: { type: 'text', label: 'Текст кнопки' },
        discount: { type: 'text', label: 'Скидка' },
      },
      render: Banner,
    },
    Footer: {
      fields: {
        companyName: { type: 'text', label: 'Название компании' },
        phone: { type: 'text', label: 'Телефон' },
        email: { type: 'text', label: 'Email' },
        address: { type: 'text', label: 'Адрес' },
      },
      render: Footer,
    },
  },
};
