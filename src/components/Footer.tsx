// components/Footer.tsx
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 p-6 text-center">
      <div className="container mx-auto flex flex-col items-center">
        <div className="w-full flex flex-wrap justify-around">
          <div className="p-4">
            <h4 className="text-lg font-semibold text-teal-400">About Us</h4>
            <p className="text-sm mt-2">
              We are a team dedicated to providing top-notch digital solutions.
            </p>
          </div>
        
          <div className="p-4">
            <h4 className="text-lg font-semibold text-teal-400">Follow Us</h4>
            <div className="flex mt-2 space-x-3 text-xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300"><FaFacebook /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300"><FaLinkedin /></a>
            </div>
          </div>
        </div>
        <p className="text-sm mt-6">&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
