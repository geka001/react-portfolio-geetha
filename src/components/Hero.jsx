import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const [heroContent, setHeroContent] = useState({
    name: '',
    role: '',
    description: ''
  });
  const [profilePic, setProfilePic] = useState('');

  useEffect(() => {
    const fetchHeroContent = async () => {
      try {
        const response = await fetch('https://api.contentstack.io/v3/content_types/hero/entries/bltd934b545b63c8211', {
          headers: {
            'Content-Type': 'application/json',
            'api_key': 'blt0b4cc853867de3bc', // Replace with your actual API key
            'authorization': 'cs76d45059c896ec5c5c7ad9da' // Replace with your actual access token
          }
        });
        const data = await response.json();
        const { name, role, description } = data.entry;
        setHeroContent({ name, role, description });
      } catch (error) {
        console.error('Error fetching the hero content:', error);
      }
    };

    const fetchProfilePic = async () => {
      try {
        const response = await fetch('https://api.contentstack.io/v3/assets/bltf32eb8dd8af5aa3a', {
          headers: {
            'Content-Type': 'application/json',
            'api_key': 'blt0b4cc853867de3bc', // Replace with your actual API key
            'authorization': 'cs76d45059c896ec5c5c7ad9da' // Replace with your actual access token
          }
        });
        const data = await response.json();
        setProfilePic(data.asset.url);
      } catch (error) {
        console.error('Error fetching the profile picture:', error);
      }
    };

    fetchHeroContent();
    fetchProfilePic();
  }, []);

  return (
    <div style={{ paddingLeft: '20px' }} className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
            >
              {heroContent.name}
            </motion.h1>
            <motion.span 
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              {heroContent.role}
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {heroContent.description}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-2xl" src={profilePic} alt="Geethanjali Kandasamy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
