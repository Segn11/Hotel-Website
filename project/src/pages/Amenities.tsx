import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Dumbbell, Space as Spa, Car, Wifi, Utensils, Calendar, Users, Shield, Clock } from 'lucide-react';

const Amenities = () => {
  const amenities = [
    {
      icon: Waves,
      title: 'Swimming Pool',
      description: 'Rooftop infinity pool with panoramic city views',
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Infinity Pool', 'Pool Bar', 'Lounge Chairs', 'Towel Service'],
      hours: '6:00 AM - 10:00 PM',
    },
    {
      icon: Dumbbell,
      title: 'Fitness Center',
      description: 'State-of-the-art gym with modern equipment',
      image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Cardio Equipment', 'Weight Training', 'Personal Trainers', 'Yoga Classes'],
      hours: '24/7 Access',
    },
    {
      icon: Spa,
      title: 'Spa & Wellness',
      description: 'Luxurious spa treatments for mind and body',
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Massage Therapy', 'Facial Treatments', 'Sauna', 'Steam Room'],
      hours: '9:00 AM - 9:00 PM',
    },
    {
      icon: Car,
      title: 'Valet Parking',
      description: 'Complimentary valet parking service',
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Valet Service', 'Secure Parking', 'Car Wash', 'EV Charging'],
      hours: '24/7 Service',
    },
    {
      icon: Wifi,
      title: 'High-Speed Internet',
      description: 'Complimentary WiFi throughout the property',
      image: 'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Free WiFi', 'Business Center', 'Meeting Rooms', 'Printing Services'],
      hours: '24/7 Access',
    },
    {
      icon: Calendar,
      title: 'Event Spaces',
      description: 'Elegant venues for meetings and celebrations',
      image: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Conference Rooms', 'Wedding Venues', 'Banquet Halls', 'Catering Services'],
      hours: 'By Reservation',
    },
  ];

  const services = [
    {
      icon: Users,
      title: '24/7 Concierge',
      description: 'Personalized assistance for all your needs',
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Professional security service around the clock',
    },
    {
      icon: Car,
      title: 'Airport Shuttle',
      description: 'Complimentary shuttle service to/from airport',
    },
    {
      icon: Utensils,
      title: 'Room Service',
      description: '24-hour in-room dining service',
    },
    {
      icon: Clock,
      title: 'Wake-up Service',
      description: 'Personalized wake-up calls',
    },
    {
      icon: Wifi,
      title: 'Business Services',
      description: 'Full-service business center',
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
            Hotel Amenities
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Discover our world-class amenities designed to enhance your stay and create unforgettable experiences.
          </motion.p>
        </div>
      </section>

      {/* Main Amenities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-64 bg-cover bg-center relative" style={{ backgroundImage: `url(${amenity.image})` }}>
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <amenity.icon className="h-16 w-16 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-green-800 mb-2">{amenity.title}</h3>
                  <p className="text-gray-600 mb-4">{amenity.description}</p>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <Clock className="h-5 w-5 mr-2 text-yellow-500" />
                    <span>{amenity.hours}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {amenity.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
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
              Guest Services
            </motion.h2>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Our dedicated team provides exceptional service to ensure your comfort and convenience throughout your stay.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <service.icon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spa Feature */}
      <section className="py-20 bg-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Rejuvenate at Our Spa
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Escape to our tranquil spa where ancient Ethiopian wellness traditions meet modern luxury. Our skilled therapists use natural ingredients and time-honored techniques to restore your body and mind.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Spa className="h-6 w-6 text-yellow-500 mr-3" />
                  <span>Traditional Ethiopian massage with coffee scrub</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Spa className="h-6 w-6 text-yellow-500 mr-3" />
                  <span>Honey and herb facial treatments</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Spa className="h-6 w-6 text-yellow-500 mr-3" />
                  <span>Couples spa packages available</span>
                </div>
              </div>
              <button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold transition-colors">
                Book Spa Treatment
              </button>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="h-96 bg-cover bg-center rounded-lg shadow-xl"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800)' }}
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-green-800 mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Experience Our Amenities
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Book your stay and enjoy access to all our world-class amenities and services.
          </motion.p>
          <motion.button
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
          >
            Book Your Stay
          </motion.button>
        </div>
      </section>
    </motion.div>
  );
};

export default Amenities;