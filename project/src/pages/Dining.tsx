import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Star, Wine, Coffee, Utensils, ChefHat } from 'lucide-react';

const Dining = () => {
  const restaurants = [
    {
      name: 'The Skylight Restaurant',
      type: 'Fine Dining',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Experience exquisite Ethiopian cuisine with a modern twist in our signature restaurant.',
      hours: '6:00 AM - 11:00 PM',
      specialties: ['Traditional Ethiopian', 'International Cuisine', 'Vegetarian Options', 'Wine Pairing'],
      priceRange: '$$$',
    },
    {
      name: 'Rooftop Lounge',
      type: 'Bar & Lounge',
      image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Enjoy panoramic views of Addis Ababa while sipping on crafted cocktails and light bites.',
      hours: '5:00 PM - 1:00 AM',
      specialties: ['Craft Cocktails', 'Local Honey Wine', 'Light Appetizers', 'Sunset Views'],
      priceRange: '$$',
    },
    {
      name: 'Coffee Culture Café',
      type: 'Café & Bakery',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Discover the birthplace of coffee with our authentic Ethiopian coffee ceremony and fresh pastries.',
      hours: '6:00 AM - 10:00 PM',
      specialties: ['Ethiopian Coffee', 'Fresh Pastries', 'Traditional Ceremony', 'Light Meals'],
      priceRange: '$',
    },
  ];

  const menu = [
    {
      category: 'Appetizers',
      items: [
        { name: 'Kitfo', description: 'Ethiopian steak tartare with mitmita and ayib', price: '$18' },
        { name: 'Sambusa', description: 'Crispy pastries filled with lentils or meat', price: '$12' },
        { name: 'Tibs', description: 'Sautéed beef with berbere spice', price: '$16' },
      ],
    },
    {
      category: 'Main Courses',
      items: [
        { name: 'Doro Wat', description: 'Traditional chicken stew with hard-boiled eggs', price: '$28' },
        { name: 'Vegetarian Combination', description: 'Assorted vegetarian dishes with injera', price: '$24' },
        { name: 'Lamb Tibs', description: 'Tender lamb with vegetables and herbs', price: '$32' },
      ],
    },
    {
      category: 'Desserts',
      items: [
        { name: 'Honey Wine Tiramisu', description: 'Italian classic with Ethiopian twist', price: '$14' },
        { name: 'Coffee Panna Cotta', description: 'Silky smooth dessert with Ethiopian coffee', price: '$12' },
        { name: 'Traditional Kolo', description: 'Roasted barley with honey', price: '$8' },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Dining Experience
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Savor the authentic flavors of Ethiopia and international cuisine in our exceptional dining venues.
          </motion.p>
        </div>
      </section>

      {/* Restaurants */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-green-800 mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Our Restaurants
            </motion.h2>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              From fine dining to casual café experiences, discover culinary excellence at every turn.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {restaurants.map((restaurant, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${restaurant.image})` }}>
                  <div className="h-full bg-black bg-opacity-30 flex items-end">
                    <div className="p-6 text-white">
                      <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {restaurant.type}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-green-800 mb-2">{restaurant.name}</h3>
                  <p className="text-gray-600 mb-4">{restaurant.description}</p>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{restaurant.hours}</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-green-800 mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.specialties.map((specialty, idx) => (
                        <span key={idx} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-yellow-600">{restaurant.priceRange}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="h-5 w-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Menu */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-green-800 mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Sample Menu
            </motion.h2>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Explore a selection of our signature dishes crafted with the finest ingredients and traditional techniques.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menu.map((section, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">
                  {section.category}
                </h3>
                <div className="space-y-4">
                  {section.items.map((item, idx) => (
                    <div key={idx} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-green-800">{item.name}</h4>
                        <span className="text-yellow-600 font-bold">{item.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coffee Culture */}
      <section className="py-20 bg-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Ethiopian Coffee Culture
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Experience the birthplace of coffee with our traditional Ethiopian coffee ceremony. Watch as green coffee beans are roasted, ground, and brewed in a centuries-old ritual that brings people together.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center text-gray-300">
                  <Coffee className="h-8 w-8 text-yellow-500 mr-3" />
                  <div>
                    <h4 className="font-semibold">Traditional Ceremony</h4>
                    <p className="text-sm">Daily at 3 PM</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-300">
                  <ChefHat className="h-8 w-8 text-yellow-500 mr-3" />
                  <div>
                    <h4 className="font-semibold">Expert Baristas</h4>
                    <p className="text-sm">Master Roasters</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="h-96 bg-cover bg-center rounded-lg shadow-xl"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800)' }}
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Dining;