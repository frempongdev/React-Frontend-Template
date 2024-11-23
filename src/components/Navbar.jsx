/* eslint-disable react/prop-types */

import { CiUser } from "react-icons/ci";
import rigiLogo from '../assets/rigi-x-logo.png';
import rigiLogo2 from '../assets/rigi-x-logo-black.png';
import { Link } from "react-router-dom";
import { useState } from "react";
import { FcMenu } from "react-icons/fc";
import { motion } from "framer-motion";

const Navbar = ({ theme }) => {
  const [isAuth, setIsAuth] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section className="flex justify-between items-center shadow-lg absolute top-0 left-0 w-full z-10 bg-slate-50 bg-opacity-10 px-1 lg:px-7">
      <Link to={'/'}>
        <div className="overflow-hidden h-14 lg:h-16 w-36">
          {theme === 'dark' ?
            <img src={rigiLogo} alt="RIGI-X Logo" className="h-full" /> :
            <img src={rigiLogo2} alt="RIGI-X Logo" className="h-full" />
          }
        </div>
      </Link>
      <div className="flex gap-5 items-center">
        <nav className="hidden lg:block">
          <ul style={theme === 'light' ? { color: 'black' } : { color: 'white' }} className="flex items-center gap-5">
            <li>
              <Link to={"/"} className="hover:text-orange-600">HOME</Link>
            </li>
            <li>
              <Link to={"/about"} className="hover:text-orange-600">ABOUT US</Link>
            </li>
            <li>
              <Link to={"/contact-us"} className="hover:text-orange-600">CONTACT</Link>
            </li>
            <li>
              <Link to={"/fleet"} className="hover:text-orange-600">OUR FLEET</Link>
            </li>
            <li>
              <Link to={"/faqs"} className="hover:text-orange-600">FAQs</Link>
            </li>
          </ul>
        </nav>
        {/* <div style={theme === 'light' ? { color: 'black' } : { color: 'white' }} className="hidden lg:flex gap-5 items-center text-white rounded-br-full rounded-tl-full px-10 py-3 shadow bg-slate-50 bg-opacity-10">
          <CiUser className="text-4xl" />
          <div>
            <p className="text-sm">username</p>
            {isAuth ?
              <button onClick={() => setIsAuth(false)} className="text-red-500 text-xs">LOGOUT</button> :
              <button onClick={() => setIsAuth(true)} className="text-red-500 text-xs">SIGN IN</button>
            }
          </div>
        </div> */}
        <FcMenu
          style={theme === 'dark' ? { color: 'white' } : { color: 'black' }}
          className="text-3xl lg:hidden cursor-pointer"
          onClick={handleMobileMenuToggle}
        />
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end"
          onClick={handleMobileMenuToggle}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-64 bg-white h-full shadow-lg p-6"
            onClick={(e) => e.stopPropagation()} 
          >
            <ul className="flex flex-col items-start gap-5 text-black">
              <li>
                <Link to={"/"} className="hover:text-orange-600" onClick={handleMobileMenuToggle}>HOME</Link>
              </li>
              <li>
                <Link to={"/about"} className="hover:text-orange-600" onClick={handleMobileMenuToggle}>ABOUT US</Link>
              </li>
              <li>
                <Link to={"/contact-us"} className="hover:text-orange-600" onClick={handleMobileMenuToggle}>CONTACT</Link>
              </li>
              <li>
                <Link to={"/fleet"} className="hover:text-orange-600" onClick={handleMobileMenuToggle}>OUR FLEET</Link>
              </li>
              <li>
                <Link to={"/faqs"} className="hover:text-orange-600" onClick={handleMobileMenuToggle}>FAQs</Link>
              </li>
              {/* <li>
                <div className="flex gap-5 items-center">
                  <CiUser className="text-4xl" />
                  <div>
                    <p className="text-sm">username</p>
                    {isAuth ?
                      <button onClick={() => { setIsAuth(false); handleMobileMenuToggle(); }} className="text-red-500 text-xs">LOGOUT</button> :
                      <button onClick={() => { setIsAuth(true); handleMobileMenuToggle(); }} className="text-red-500 text-xs">SIGN IN</button>
                    }
                  </div>
                </div>
              </li> */}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
};

export default Navbar;
