
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

interface FooterProps {
  companyName?: string;
  phone?: string;
  email?: string;
  address?: string;
}

export function Footer({ 
  companyName = "TechHome",
  phone = "+7 (800) 123-45-67",
  email = "info@techhome.ru",
  address = "Москва, ул. Примерная, д. 1"
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    catalog: [
      { label: 'Холодильники', href: '#' },
      { label: 'Стиральные машины', href: '#' },
      { label: 'Телевизоры', href: '#' },
      { label: 'Пылесосы', href: '#' },
      { label: 'Кондиционеры', href: '#' },
    ],
    company: [
      { label: 'О компании', href: '#' },
      { label: 'Доставка и оплата', href: '#' },
      { label: 'Гарантия', href: '#' },
      { label: 'Возврат', href: '#' },
      { label: 'Контакты', href: '#' },
    ],
    help: [
      { label: 'FAQ', href: '#' },
      { label: 'Как заказать', href: '#' },
      { label: 'Рассрочка', href: '#' },
      { label: 'Сервисные центры', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-black/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a 
              href="#"
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <span className="text-black font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold text-white">{companyName}</span>
            </motion.a>
            <p className="text-gray-400 mb-6 max-w-sm">
              Интернет-магазин бытовой техники. Более 10 000 товаров от ведущих брендов с доставкой по всей России.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href={`tel:${phone}`} className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>{phone}</span>
              </a>
              <a href={`mailto:${email}`} className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>{email}</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>{address}</span>
              </div>
            </div>
          </div>

          {/* Catalog Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Каталог</h4>
            <ul className="space-y-2">
              {footerLinks.catalog.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-yellow-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Компания</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-yellow-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Помощь</h4>
            <ul className="space-y-2">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-yellow-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} {companyName}. Все права защищены.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:bg-white/10 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
