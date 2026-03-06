
import React from 'react';
import { motion } from 'framer-motion';
import { Refrigerator, WashingMachine, Tv, Microwaves, Fan, Coffee } from './Icons';

interface CategoryProps {
  title?: string;
}

const categories = [
  { 
    id: 1, 
    name: 'Холодильники', 
    icon: Refrigerator, 
    count: 245,
    gradient: 'from-blue-500 to-cyan-500',
    image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  { 
    id: 2, 
    name: 'Стиральные машины', 
    icon: WashingMachine, 
    count: 128,
    gradient: 'from-purple-500 to-pink-500',
    image: 'https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  { 
    id: 3, 
    name: 'Телевизоры', 
    icon: Tv, 
    count: 89,
    gradient: 'from-orange-500 to-red-500',
    image: 'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  { 
    id: 4, 
    name: 'Микроволновки', 
    icon: Microwaves, 
    count: 67,
    gradient: 'from-green-500 to-emerald-500',
    image: 'https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  { 
    id: 5, 
    name: 'Кондиционеры', 
    icon: Fan, 
    count: 54,
    gradient: 'from-cyan-500 to-blue-500',
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  { 
    id: 6, 
    name: 'Кофемашины', 
    icon: Coffee, 
    count: 43,
    gradient: 'from-amber-500 to-orange-500',
    image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
];

export function Categories({ title = "Популярные категории" }: CategoryProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Выберите категорию, чтобы найти идеальную технику для вашего дома
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <motion.a
              key={category.id}
              href="#catalog"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/5 hover:border-yellow-400/30 transition-all duration-300"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center`}>
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs text-gray-400">{category.count} товаров</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">
                    {category.name}
                  </h3>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
