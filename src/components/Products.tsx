
import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';

interface ProductsProps {
  title?: string;
  subtitle?: string;
}

const products = [
  {
    id: '1',
    name: 'Холодильник Samsung RB-34T600ESA',
    price: 45990,
    oldPrice: 52990,
    image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviews: 124,
    badge: 'Хит продаж',
  },
  {
    id: '2',
    name: 'Стиральная машина LG F-1096ND3',
    price: 32990,
    oldPrice: 38990,
    image: 'https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    reviews: 89,
  },
  {
    id: '3',
    name: 'Телевизор LG 55" 4K UHD',
    price: 54990,
    oldPrice: 64990,
    image: 'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    reviews: 203,
    badge: 'Новинка',
  },
  {
    id: '4',
    name: 'Посудомоечная машина Bosch SPV25DX00R',
    price: 38990,
    oldPrice: 42990,
    image: 'https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    reviews: 67,
  },
  {
    id: '5',
    name: 'Кофемашина DeLonghi Magnifica S',
    price: 29990,
    oldPrice: 34990,
    image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    reviews: 156,
    badge: 'Хит продаж',
  },
  {
    id: '6',
    name: 'Кондиционер Daikin FTXB20C',
    price: 42990,
    oldPrice: 49990,
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    reviews: 45,
  },
  {
    id: '7',
    name: 'Микроволновая печь Samsung MS23K3513',
    price: 8990,
    oldPrice: 10990,
    image: 'https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.5,
    reviews: 234,
  },
  {
    id: '8',
    name: 'Пылесос Dyson V15 Detect',
    price: 64990,
    oldPrice: 72990,
    image: 'https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    reviews: 178,
    badge: 'Премиум',
  },
];

export function Products({ title = "Популярные товары", subtitle = "Лучшая техника по выгодным ценам" }: ProductsProps) {
  return (
    <section id="catalog" className="py-16 lg:py-24 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">{title}</h2>
            <p className="text-gray-400">{subtitle}</p>
          </div>
          <motion.a
            href="#"
            whileHover={{ x: 5 }}
            className="text-yellow-400 hover:text-yellow-300 transition-colors flex items-center gap-2"
          >
            Смотреть все
            <span>→</span>
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
