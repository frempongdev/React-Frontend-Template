import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import { clientInfo, clientServices, excelData } from "../helpers/clientList"
import { IoCarSportSharp } from "react-icons/io5";
import { FaHandsHelping } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { BiSolidEditLocation } from "react-icons/bi";
import { FaEnvira } from "react-icons/fa";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { openForm } from "../redux/slices/ReservationSlice";
import { useDispatch } from "react-redux";
import ScrollAll from "../helpers/scroll";
import { motion } from "framer-motion";
import { useRef } from "react";

const icons = [IoCarSportSharp, FaHandsHelping, GiReceiveMoney, BiSolidEditLocation, FaEnvira]
const About = () => {
  ScrollAll()
  const scrollRef = useRef(null)
  const dispatch = useDispatch()

  return (
    <section>
      <Helmet>
        <title>About Us - Rigi-X || Car Rental</title>
      </Helmet>
      <Navbar theme="light" />
      <section className="p5 flex justify-center">
        <motion.div style={{ backgroundImage: 'url(https://images.pexels.com/photos/638479/pexels-photo-638479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }} className="flex flex-col justify-end items-start gap-2 text-white p-3 md:p-12 text-start mt-28 rounded-lg w-[90%] h-[60vh] bg-cover bg-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <h1 className="text-4xl mg:text-6xl font-bold">About RIGI-X</h1>
          <p className="mt-4 text-xl">Ready to jump in?</p>
          <div className="flex justify-start gap-4 p-2 bg-white rounded-full">
            <input className="bg-white text-xs md:text-base text-black p-1 md:p-2 font-poppins rounded-full" type="text" placeholder="Where are you?" />
            <button className="bg-green-500 hover:bg-green-700 text-white text-xs md:text-md font-bold py-2 px-4 rounded-full shadow-md"
              onClick={() => dispatch(openForm())}
            >Book a Car</button>
          </div>
        </motion.div>
      </section>

      <section className="text-black flex flex-col justify-center items-start mt-28 lg:mt-20 p-6 md:p-16">
        <h2 className="text-5xl font-semibold text-start drop-shadow-xl">Who We Are</h2>
        <p className="mt-4 text-sm md:text-lg leading-relaxed text-start">
          RIGI-X is a comprehensive corporate and executive car rental service aimed at fulfilling the
          transportation needs of businesses in our region and beyond. Our mission is to provide reliable, clean,
          and safe vehicles for rent, exceeding our customers’ expectations with exceptional service, flexibility, and value.
          <br className="block lg:hidden" /><br className="block lg:hidden" />
          We strive to build long-term relationships with our customers by offering personalized solutions for their
          transportation needs. Our goal is to be the go-to rental choice in the Greater-Accra region and its neighboring areas.
        </p>
        <Link to={"/fleet"} className="rounded-full bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-5 mt-10">View Fleet</Link>
      </section>

      <section className="text-black flex flex-col justify-center items-center px-16 py-16 lg:py-2 gap-5">
        <motion.h2 className="text-4xl font-semibold text-center self-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        viewport={{ root: scrollRef }}
        >
          Who We Serve?
        </motion.h2>
        <motion.div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          viewport={{ root: scrollRef }}
        >
          {clientInfo.map((client) => (
            <div key={client} className='rounded-lg border overflow-hidden shadow-lg '>
              <div style={{ backgroundImage: `url(${client.image})` }} className=' w-full h-60 bg-cover bg-center'>
              </div>
              <div className='text-center p-5'>
                <span className='font-poppins font-semibold'>{client.type}</span>
                <span className='font-poppins'>{client.description}</span>

              </div>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="mt-20 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1502767882403-636aee14f873?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }} className="bg-cover bg-center"></div>
          <div className="mt-4 p-5 flex flex-col items-center">
            <h2 className="text-4xl font-semibold text-center text-white my-5">Why Choose Us</h2>
            <div className="grid grid-rows-6 lg:w-[75%] gap-3">

              {excelData.map((usp, index) => {
                const IconComponent = icons[index];
                return (
                  <div key={index} className=" group bg-black shadow-md rounded-lg py-3 px-5 grid grid-cols-[1fr,4fr] hover:bg-gray-200 transition duration-500">
                    <div className="flex justify-center items-center"><IconComponent className="text-5xl text-slate-500" /></div>
                    <div className="text-start">
                      <h3 className="text-xl font-semibold group-hover:text-black transition duration-500">{usp.point}</h3>
                      <p className="text-gray-100 mt-0 group-hover:text-black transition duration-500">{usp.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="text-black">
        <h2 className="text-4xl font-semibold text-center mt-16">Our Products and Services</h2>
        <div className="mt-4 space-y-4">
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="mt-2 text-gray-700">We offer a wide range of rental cars, including economy, compact, intermediate, standard, full-size, luxury, SUVs, vans, and trucks.</p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <ul className="mt-2 text-gray-700 text-sm font-poppins space-y-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {clientServices.map((service, index) => (
                <li key={index} className="bg-white flex flex-col items-center justify-center gap-2">
                  <div style={{ borderRadius: '50%' }} className="bg-white h-32 w-32 shadow-md flex items-center justify-center">
                    <div style={{ borderRadius: '50%', backgroundImage: `url(${service.image})` }} className="h-28 w-28 bg-cover bg-center"></div>
                  </div>
                  <div className="font-semibold text-xs md:text-sm lg:text-md">{service.description}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="text-black my-16">
        <h2 className="text-3xl font-semibold text-center">Can&apos;t find what you&apos;re looking for?</h2>
        <p className="mt-4 text-lg leading-relaxed text-center font-poppins px-5">
          Have questions or need to make a booking? Reach out to us via phone, email, or visit one of our convenient locations. We are here to assist you with all your rental needs.
        </p>
        <div className="mt-4 flex justify-center">
          <Link to="/contact-us" className="rounded-full bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-5 mt-10">Contact Us</Link>
        </div>
      </section>

      <Footer />
    </section>
  )
}

export default About