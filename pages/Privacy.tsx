import React from 'react';
import { motion } from 'motion/react';
import { Layout } from '../components/Layout';

export const Privacy: React.FC = () => {
  return (
    <div className="pt-24 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="markdown-body"
        >
          <h1>Privacy Policy</h1>
          <p>Last updated: February 21, 2025</p>

          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us when you contact us through our website. This may include your name, email address, and any other information you choose to provide.</p>

          <h2>2. Use of Information</h2>
          <p>We use the information we collect to respond to your inquiries, provide the services you request, and improve our website and services.</p>

          <h2>3. Cookies</h2>
          <p>We use cookies to enhance your experience on our website. You can choose to disable cookies through your browser settings, but this may affect the functionality of our website.</p>

          <h2>4. Third-Party Services</h2>
          <p>We use third-party services, such as Google Analytics and Google AdSense, which may collect information about your use of our website. These services have their own privacy policies.</p>

          <h2>5. Security</h2>
          <p>We take reasonable measures to protect the information we collect from unauthorized access, use, or disclosure.</p>

          <h2>6. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us through our contact page.</p>
        </motion.div>
      </div>
    </div>
  );
};
