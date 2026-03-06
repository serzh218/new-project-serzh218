
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Star } from 'lucide-react';

interface ProductCardProps {
  id?: string;
  name?: string;
  price?: number;
  oldPrice?: number;
  image?: string;
  rating?: number;
  reviews?: number;
  badge?: string;
  inStock?: boolean;
}

export function ProductCard({
  id = "1",
  name = "Холодильник Samsung RB-34",
  price = 45990,
  oldPrice = 52990,
  image = "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=400",
  rating = 4.8,
  reviews = 124,
  badge,
  inStock = true,
}: ProductCardProps) {
  const discount = oldPrice ? Math.round((1 - price / oldPrice) * 100) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:border-yellow-400/30 transition-all duration-300 card-hover"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {badge && (
            <span className="px-3 py-1 bg-yellow-400 text-black text-xs font-semibold rounded-full">
              {badge}
            </span>
          )}
          {discount > 0 && (
            <span className="px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
              -{discount}%
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors"
          >
            <Heart className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="absolute bottom-3 left-3 right-3 py-3 bg-yellow-400 text-black font-semibold rounded-xl flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-yellow-300"
        >
          <ShoppingCart className="w-4 h-4" />
          В корзину
        </motion.button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium text-white">{rating}</span>
          </div>
          <span className="text-xs text-gray-500">({reviews} отзывов)</span>
        </div>

        {/* Name */}
        <h3 className="font-medium text-white group-hover:text-yellow-400 transition-colors line-clamp-2 mb-3">
          {name}
        </h3>

        {/* Price */}
        <div className="flex items-end gap-2">
          <span className="text-xl font-bold text-white">
            {price.toLocaleString('ru-RU')} ₽
          </span>
          {oldPrice && (
            <span className="text-sm text-gray-500 line-through">
              {oldPrice.toLocaleString('ru-RU')} ₽
            </span>
          )}
        </div>

        {/* Stock Status */}
        <div className="mt-2 flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${inStock ? 'bg-green-400' : 'bg-red-400'}`} />
          <span className="text-xs text-gray-400">
            {inStock ? 'В наличии' : 'Нет в наличии'}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
