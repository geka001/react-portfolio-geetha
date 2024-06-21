// import aboutImg from "../assets/aboutme.jpg"
// import { ABOUT_TEXT } from "../constants";
// import { motion } from "framer-motion"

// const About = () => {
//   return (
//     <div style={{ paddingLeft: '20px' }} className="border-b border-neutral-900 pb-4">
//       <h1 className="my-20 text-center text-4xl"> About
//         <span className="text-neutral-500"> Me</span>
//       </h1>
//       <div className="flex flex-wrap">
//         <motion.div
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: -100 }}
//           transition={{ duration: 0.5 }} 
//           className="w-full lg:w-1/2 lg:p-8"
//         >
//           <div className="flex items-center justify-center">
//             <img className="rounded-2xl" src={aboutImg} alt="about" />
//           </div>
//         </motion.div>
//         <motion.div
//           whileInView={{ opacity: 1, x: 0 }}
//           initial={{ opacity: 0, x: 100 }}
//           transition={{ duration: 0.5 }}  
//           className="w-full lg:w-1/2">
//           <div className="flex justify-center lg:justify-start">
//             <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React, { useState, useEffect } from 'react';
import aboutImg from "../assets/aboutme.jpg";
import { motion } from "framer-motion";

const About = () => {
  const [aboutText, setAboutText] = useState('');
  const [aboutImg, setProfilePic] = useState('');

  useEffect(() => {
    const fetchAboutText = async () => {
      try {
        const response = await fetch('https://api.contentstack.io/v3/content_types/about/entries/bltbec4ce07ba448199', {
          headers: {
            'Content-Type': 'application/json',
            'api_key': 'blt0b4cc853867de3bc', // Replace with your actual API key
            'authorization': 'cs76d45059c896ec5c5c7ad9da' // Replace with your actual access token
          }
        });
        const data = await response.json();
        setAboutText(data.entry.multi_line);
      } catch (error) {
        console.error('Error fetching the about text:', error);
      }
    };

    const fetchProfilePic = async () => {
      try {
        const response = await fetch('https://api.contentstack.io/v3/assets/blt0ce672330ee76d0d', {
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

    fetchAboutText();
    fetchProfilePic();

  }, []);

  return (
    <div style={{ paddingLeft: '20px' }} className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl"> About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }} 
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}  
          className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{aboutText}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
