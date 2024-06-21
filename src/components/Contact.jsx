import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Contact = () => {
  const [contactData, setContactData] = useState({});

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await fetch('https://api.contentstack.io/v3/content_types/contact/entries/blteba54206826bc909', {
          headers: {
            'Content-Type': 'application/json',
            'api_key': 'blt0b4cc853867de3bc', // Replace with your actual API key
            'authorization': 'cs76d45059c896ec5c5c7ad9da' // Replace with your actual access token
          }
        });
        const data = await response.json();
        setContactData(data.entry);
      } catch (error) {
        console.error('Error fetching contact data:', error);
      }
    };

    fetchContactData();
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1 
        variants={container(0)}
        initial="hidden"
        animate="visible"
        className="my-10 text-center text-4xl">Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p 
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="my-4">{contactData.address}
        </motion.p>
        <motion.p 
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="my-4">{contactData.phone}
        </motion.p>
        <a href={`mailto:${contactData.email}`} className="border-b">
          {contactData.email}
        </a>
      </div>
    </div>
  )
}

export default Contact;
