// src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Sikkim</h3>
            <p className="text-gray-400">
              Explore the beautiful mountains, monasteries, and culture of Sikkim. 
              Experience nature, adventure, and heritage in the heart of the Himalayas.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#monasteries" className="hover:text-white">Monasteries</a></li>
              <li><a href="#nature" className="hover:text-white">Nature & Trekking</a></li>
              <li><a href="#culture" className="hover:text-white">Culture & Heritage</a></li>
              <li><a href="#adventure" className="hover:text-white">Adventure Sports</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@sikkimtourism.com</li>
              <li>Phone: +91 123 456 7890</li>
              <li>Address: Gangtok, Sikkim, India</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaYoutube /></a>
            </div>
          </div>

        </div>

        <hr className="my-8 border-gray-700" />

        <p className="text-center text-gray-500 text-sm pb-4">
          &copy; {new Date().getFullYear()} Sikkim Tourism. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

