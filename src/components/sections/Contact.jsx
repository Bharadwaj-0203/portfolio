import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'bharadwajathotams@gmail.com',
      link: 'mailto:bharadwajathotams@gmail.com',
      description: 'Feel free to email me for any questions'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (845) 656-9562',
      link: 'tel:+18456569562',
      description: 'Available for calls during business hours'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Poughkeepsie, New York',
      link: 'https://maps.google.com/?q=Poughkeepsie,NY',
      description: 'Open to relocation'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/bharadwaja-thota-0a6b012bb',
      description: 'Let\'s connect professionally'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'Check my repos',
      link: 'https://github.com/Bharadwaj-0203',
      description: 'View my code and projects'
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Let's Connect
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm currently looking for new opportunities and would love to hear from you. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg
                       hover:shadow-xl transition-all duration-300 flex items-start space-x-4"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center
                           text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                <info.icon size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 flex items-center gap-2">
                  {info.title}
                  {(info.icon === Linkedin || info.icon === Github) && (
                    <ExternalLink size={16} className="inline-block opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  {info.value}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {info.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 text-gray-600 dark:text-gray-400"
        >
          <p className="text-sm">
            Looking forward to connecting with you!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;