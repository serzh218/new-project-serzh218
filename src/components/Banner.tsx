
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface BannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  discount?: string;
}

export function Banner({ 
  title = "Специальное предложение",
  subtitle = "Скидки до 40% на крупную бытовую технику",
  buttonText = "Подробнее",
  discount = "-40%"
}: BannerProps) {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-red-500/20 border border-yellow-400/20"
        >
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          
          <div className="relative z-10 p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1 bg-yellow-400 text-black text-sm font-semibold rounded-full mb-4"
              >
                {discount} на всё
              </motion.div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                {title}
              </h2>
              <p className="text-gray-300 text-lg">
                {subtitle}
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-yellow-400 text-black font-semibold rounded-xl flex items-center gap-2 hover:bg-yellow-300 transition-colors whitespace-nowrap"
            >
              {buttonText}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
