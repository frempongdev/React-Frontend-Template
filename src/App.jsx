
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Authentication from './pages/Authentication'
import HomePage from './pages/HomePage'
import About from './pages/About'
import ContactUS from './pages/ContactUS'
import FAQs from './pages/FAQs'
import Fleet from './pages/Fleet'
import BackToTopButton from './components/BackToTop'
import Booking from './components/Booking'
import ReservationSuccessPopup from './components/BookingPopup'
import { useSelector } from 'react-redux'
import Payment from './pages/Payment'

function App() {
  const { modalOpened } = useSelector((state) => state.reserve);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/auth" element={<Authentication />} />
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact-us" element={<ContactUS />} />
          <Route exact path="/faqs" element={<FAQs />} />
          <Route exact path="/fleet" element={<Fleet />} />
          <Route exact path="/payment" element={<Payment />} />
        </Routes>
        <Booking />
        <BackToTopButton />
        {modalOpened===true && <ReservationSuccessPopup />}
      </BrowserRouter>
    </>
  )
}

export default App
