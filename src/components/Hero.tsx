
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Percent, Truck, Shield } from 'lucide-react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  discount?: string;
}

export function Hero({ 
  title = "Лучшая бытовая техника для вашего дома",
  subtitle = "Более 10 000 товаров от ведущих мировых брендов. Бесплатная доставка при заказе от 5 000 ₽",
  buttonText = "Смотреть каталог",
  discount = "До 30%"
}: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-orange-500/5" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-400/10 to-transparent blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-6"
            >
              <Percent className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">Скидки {discount} на технику</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                {title}
              </span>
            </h1>

            <p className="text-lg text-gray-400 mb-8 max-w-lg">
              {subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(234, 179, 8, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-xl flex items-center gap-2 hover:from-yellow-300 hover:to-orange-400 transition-all"
              >
                {buttonText}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-all"
              >
                Как заказать
              </motion.button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6">
              {[
                { icon: Truck, text: 'Бесплатная доставка' },
                { icon: Shield, text: 'Гарантия 2 года' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-yellow-400" />
                  </div>
                  <span className="text-gray-300">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden glow">
              <img
                src="https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern kitchen appliances"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-400 text-xl">✓</span>
                </div>
                <div>
                  <p className="text-white font-medium">15 000+ клиентов</p>
                  <p className="text-gray-400 text-sm">довольны покупкой</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
