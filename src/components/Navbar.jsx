import React, { useState, useEffect } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [logoUrl, setLogoUrl] = useState('');

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await fetch('https://api.contentstack.io/v3/assets/bltc086a7300820b21c', {
          headers: {
            'Content-Type': 'application/json',
            'api_key': 'blt0b4cc853867de3bc', // Replace with your actual API key
            'authorization': 'cs76d45059c896ec5c5c7ad9da' // Replace with your actual access token
          }
        });
        const data = await response.json();
        setLogoUrl(data.asset.url);
      } catch (error) {
        console.error('Error fetching the logo:', error);
      }
    };

    fetchLogo();
  }, []);

  return (
    <nav style={{ paddingLeft: '30px' }} className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {logoUrl && <img className="mx-2 w-10" src={logoUrl} alt="logo" />}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaSquareXTwitter />
      </div>
    </nav>
  );
}

export default Navbar;

