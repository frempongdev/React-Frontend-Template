import { Helmet } from "react-helmet"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { faqs } from '../helpers/faqsData'
import ScrollAll from "../helpers/scroll"

const FAQs = () => {
  ScrollAll()
  return (
    <section>
      <Helmet>
        <title>FAQs - Rigi-X || Car Rental</title>
      </Helmet>
      <Navbar theme={"light"} />
      <section className="mt-28 text-black">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-center  bg-gradient-to-r from-red-500 to-yellow-500 text-white py-12 rounded-lg">Frequently Asked Questions</h1>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-5">
                <h3 className="text-2xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
        <section className="text-center bg-gradient-to-r from-red-500 to-yellow-500 text-white py-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Have More Questions?</h2>
          <p className="text-xl mb-6">If you have more questions, feel free to contact us.</p>
          <a href="/contact-us" className="bg-white text-red-500 font-semibold py-2 px-6 rounded-full hover:bg-red-100">
            Contact Us
          </a>
        </section>
      </section>
      <Footer />
    </section>
  )
}

export default FAQs


