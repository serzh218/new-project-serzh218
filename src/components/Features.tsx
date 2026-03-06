
import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Shield, CreditCard, Headphones, RefreshCw, Award } from 'lucide-react';

interface FeaturesProps {
  title?: string;
}

const features = [
  {
    icon: Truck,
    title: 'Быстрая доставка',
    description: 'Доставим в любую точку России за 1-5 дней',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Shield,
    title: 'Гарантия качества',
    description: 'Официальная гарантия производителя до 5 лет',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: CreditCard,
    title: 'Удобная оплата',
    description: 'Онлайн, картой при получении или в рассрочку',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Headphones,
    title: 'Поддержка 24/7',
    description: 'Наши консультанты всегда на связи',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: RefreshCw,
    title: 'Возврат 14 дней',
    description: 'Можно вернуть товар в течение 14 дней',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Award,
    title: 'Бонусы за покупки',
    description: 'До 10% кэшбэк бонусами на следующий заказ',
    color: 'from-yellow-500 to-orange-500',
  },
];

export function Features({ title = "Почему выбирают нас" }: FeaturesProps) {
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
            Мы делаем всё, чтобы покупки были приятными и безопасными
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-yellow-400/30 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
