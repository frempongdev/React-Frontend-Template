import { Link } from 'react-router-dom';
import logo from '../assets/rigi-x-logo.png';
import { MdArrowCircleRight } from "react-icons/md";


const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">RIGI-X</h3>
            <p className="text-justify font-poppins">We are a comprehensive corporate and executive car rental service aimed at fulfilling the transportation needs of businesses in our region and beyond. Our mission is to provide reliable, clean, and safe vehicles for rent, exceeding our customers’ expectations with exceptional service, flexibility, and value.</p>
          </div>
          <div className='flex justify-center items-center'>
            <ul className="space-y-2 text-start">
              <li className='flex items-center gap-2'>
                <MdArrowCircleRight />
                <Link to="/" className="hover:underline">Home</Link></li>
              <li className='flex items-center gap-2'>
                <MdArrowCircleRight />
                <Link to="/about" className="hover:underline">About</Link></li>
              <li className='flex items-center gap-2'>
                <MdArrowCircleRight />
                <Link to="/fleet" className="hover:underline">Fleet</Link></li>
              <li className='flex items-center gap-2'>
                <MdArrowCircleRight />
                <Link to="/contact-us" className="hover:underline">Contact Us</Link></li>
              <li className='flex items-center gap-2'>
                <MdArrowCircleRight />
                <Link to="/faqs" className="hover:underline">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p>
              123 Business Avenue,<br />
              Greater-Accra Region,<br />
              Ghana
            </p>
            <a href="tel:+233241717886" className="hover:underline">+233241717886</a> <br />
            <a href="tel: +233538088902" className="hover:underline"> +233538088902</a>
          </div>
        </div>
        <div className="border-t border-red-600 mt-8 pt-4 text-center">
        <img src={logo} alt="Company Logo" className="mx-auto mb-4 w-40 h-auto" />
          <p>&copy; 2024 RIGI-X. All Rights Reserved. <a href="" className="hover:underline">Policy</a> | <a href="" className="hover:underline">Terms</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
