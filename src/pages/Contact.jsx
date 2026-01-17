import { motion } from 'framer-motion';
import headshotsImage from '../../images/headshots.png';
import contactInfoImage from '../../images/Contact Information.png';

const Contact = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 text-accent-400 mb-6">
              <span className="w-8 h-[2px] bg-accent-500" />
              <span className="text-sm font-semibold tracking-wide uppercase">Get In Touch</span>
              <span className="w-8 h-[2px] bg-accent-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Discuss Your Property
            </h1>
            <p className="text-xl text-primary-200 max-w-2xl mx-auto">
              Whether you're looking to sell, buy, or simply understand your property's value,
              I'm here to help with expert guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Headshots */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <img
                src={headshotsImage}
                alt="Team Headshots"
                className="w-full h-auto"
              />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <img
                src={contactInfoImage}
                alt="Contact Information"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
