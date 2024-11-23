import ContactUsForm from "../components/Contact"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { IoCallOutline } from "react-icons/io5";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ScrollAll from "../helpers/scroll";
import { motion } from "framer-motion";
import { useRef } from "react";



const ContactUS = () => {
  ScrollAll()
  const scrollRef = useRef(null)

  return (
    <>
      <Helmet>
        <title>Contact Us - Rigi-X || Car Rental</title>
      </Helmet>
      <Navbar theme="light" />
      <section className="pt-20  max-w-[1280px] mx-auto text-black">
        <motion.section style={{ backgroundImage: 'url("https://images.pexels.com/photos/1586656/pexels-photo-1586656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")' }} className="bg-cover bg-center bg-fixed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          viewport={{ root: scrollRef }}
        >
          <div className="py-10 px-7 md:px-0">
            <ContactUsForm />
          </div>
        </motion.section>
        <section className="py-16 px-7  flex  flex-col items-center">
          <h2 className=" text-3xl font-semibold">Or reach out directly</h2>
          <div className="flex items-center justify-between gap-20 lg:gap-96 mt-5">
            <div className="flex  gap-5  items-center">
              <RiCustomerService2Line className="text-4xl  rounded-md bg-slate-300 p-2" />
              <p>Customer Care</p>
            </div>
            <IoIosArrowDropdownCircle />
          </div>
          <div className="flex phonedown:flex-col gap-3">
            <div className="flex items-center gap-3 mt-2 border rounded-lg bg-black text-white p-2">
              <IoCallOutline className="text-3xl" />
              <a href="tel:+233241717886" className="hover:text-orange-500 text-xl font-semibold">+233241717886</a> <br />
            </div>
            <div className="flex items-center gap-3 mt-2 border rounded-lg bg-black text-white p-2">
              <IoCallOutline className="text-3xl" />
              <a href="tel: +233538088902" className="hover:text-orange-500 text-xl font-semibold"> +233538088902</a>
            </div>
          </div>
        </section>

        <section>
          <Link to={'/faqs'} className=" bg-white text-red-500 py-2 px-6 rounded-full hover:text-orange-500 text-xl font-semibold">Check out Frequently Asked Questions</Link>
        </section>

      </section>
      <section className="mt-16">
        <h3 className="text-xl font-semibold p-4">Visit Us</h3>
        <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127066.72273048505!2d-0.26213050689825734!3d5.5913738064260015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra!5e0!3m2!1sen!2sgh!4v1718404303956!5m2!1sen!2sgh" width="800" height="600" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
      <Footer />
    </>
  )
}

export default ContactUS