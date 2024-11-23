// import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import carBG from '../assets/car-bg.mp4'
import ContactUsForm from '../components/Contact'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { clientInfo, excelData } from '../helpers/clientList'
// import { openForm } from '../redux/slices/ReservationSlice'
// import { useDispatch } from 'react-redux'
import ScrollAll from '../helpers/scroll'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const HomePage = () => {
    const scrollRef = useRef(null)

    ScrollAll()
    // const dispatch = useDispatch()

    return (
        <>
            <Helmet>
                <title>Home - Rigi-X || Car Rental</title>
            </Helmet>
            <section className="relative h-[100vh]">
                <Navbar theme="dark" />
                <div className="relative h-full">
                    <video src={carBG} autoPlay loop muted controls={false} className="w-full h-full object-cover"></video>
                    <div className='absolute top-0 left-0 w-full h-full bg-black/70'></div>
                </div>
                <div className='text-white absolute  top-1/3 lg:top-1/2 left-10  flex flex-col items-start gap-5'>
                    <motion.h1 className='m-0 font-annapurna text-7xl font-semibold text-start'
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}>
                        NEED <br className='lg:hidden' /> A CAR?
                    </motion.h1>
                    <motion.p className='m-0 w-full lg:w-[40%] text-start text-sm lg:text-base pr-4 lg:pr-0'
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}>
                        Our fleet includes a diverse range of vehicles, from economy and compact cars to intermediate, standard, and full-size models, as well as luxury cars, SUVs, vans, and trucks.
                    </motion.p>
                    <Link to={"/fleet"}>
                        <motion.button className='btn btn-primary text-black p-3 text-lg hover:scale-110 transition hover:text-black hover:bg-white'
                            initial={{ opacity: 0, x: -200 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                        >
                            BOOK NOW
                        </motion.button>
                    </Link>
                </div>
            </section>

            <section className='grid grid-cols-1 lg:grid-cols-2'>
                <motion.div className='bg-gradient-to-r from-red-700 via-red-600 to-red-500  relative'
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <img src="https://images.pexels.com/photos/70912/pexels-photo-70912.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-full ml-0 lg:ml-10 mt-16 mb-10' />
                    <div className='hidden absolute lg:flex gap-3 right-3 bottom-2 -mr-0 lg:-mr-10'>
                        <div className=' bg-black h-16 w-16 right-3 bottom-2'></div>
                        <div className=' bg-black h-24 w-16 right-3 bottom-2'></div>
                        <div className=' bg-black h-32 w-16 right-3 bottom-2'></div>
                    </div>
                </motion.div>
                <div className='p-3 lg:p-20 text-justify bg-slate-200  text-black'>
                    <motion.h1 className='text-4xl lg:text-6xl font-poppins font-bold text-center mb-5 shadow-lg'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0, duration: 1 }}
                    >
                        WHY RIGI-X ?
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >RIGI-X is a comprehensive corporate and executive car rental service dedicated to meeting the transportation
                        needs of businesses both in our region and beyond. Our commitment to excellence ensures that every journey
                        is smooth, reliable, and comfortable</motion.p>
                    <br />
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        viewport={{ root: scrollRef }}
                    >At RIGI-X, our mission is to provide reliable, clean, and safe vehicles for rent, consistently exceeding our
                        customers’ expectations with exceptional service, flexibility, and value. We are devoted to building
                        long-term relationships with our clients, offering personalized solutions tailored to their unique
                        transportation needs. Our goal is to be the preferred rental choice in the Greater Accra region and its neighboring areas.</motion.p>
                    <br />
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 1 }}
                    >Choose RIGI-X for your car rental needs and experience the difference that exceptional service and top-quality vehicles can make.</motion.p>
                </div>
            </section>
            <section style={{ maxWidth: '1200px', margin: 'auto' }} className='text-black flex flex-col items-center justify-center gap-10 pt-10 lg:pt-40'>
                <h2 className='text-6xl font-poppins font-bold text-center drop-shadow-md'>OUR CLIENTS</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {clientInfo.map((client) => (
                        <motion.div key={client} className='rounded-lg border overflow-hidden shadow-lg'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 1 }}
                            viewport={{ root: scrollRef }}
                        >
                            <div style={{ backgroundImage: `url(${client.image})` }} className=' w-full h-60 bg-cover bg-center'>
                            </div>
                            <div className='text-center p-5'>
                                <span className='font-poppins font-semibold'>{client.type}</span>
                                <span className='font-poppins'>{client.description}</span>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
            <div className='flex gap-3 right-3 bottom-2 mt-10 rotate-180'>
                <div className=' bg-orange-600 h-16 w-16 right-3 bottom-2'></div>
                <div className=' bg-black h-24 w-16 right-3 bottom-2'></div>
                <div className=' bg-black h-32 w-16 right-3 bottom-2'></div>
            </div>
            <section className=' bg-gradient-to-r from-yellow-900 via-yellow-700 to-yellow-300 radius-[15px 10px] grid grid-cols-1 lg:grid-cols-2 p-10'>
                <motion.div className='flex flex-col items-center justify-center px-8 text-white'
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    viewport={{ root: scrollRef }}
                >
                    <h2 className='text-4xl lg:text-7xl font-annapurna font-bold text-center text-white drop-shadow-md'>WHAT WE EXCEL AT</h2>
                    <hr className='w-20 bg-white my-5' />
                    <p className='text-justify font-poppins hidden lg:block'>At RIGI-X, we pride ourselves on offering a premier car rental experience tailored to meet
                        the diverse needs of our clients. Our modern and meticulously maintained fleet ensures that
                        you have access to reliable, clean, and safe vehicles for every occasion, whether for business
                        or leisure. Our friendly and knowledgeable staff are dedicated to providing exceptional customer
                        service, helping you find the perfect rental option with ease.</p> <br />
                    <p className='text-justify font-poppins hidden lg:block'>We understand that flexibility is key, which is why we offer competitive pricing and a variety
                        of rental options to suit your specific requirements. Our convenient locations and seamless
                        booking process make renting a vehicle with us effortless. At RIGI-X, we are committed
                        to exceeding your expectations and becoming your go-to rental choice in the Greater-Accra region and beyond.</p>
                </motion.div>
                <div>
                    <motion.div className='grid grid-cols-1 md:grid-cols-2 p-5 gap-5 bg-white bg-opacity-10 rounded-2xl'
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        viewport={{ root: scrollRef }}
                    >
                        <div style={{ backgroundImage: `url(${excelData[0].image})` }} className='relative h-80 w-full bg-cover bg-center mt-16 border border-gray-600 rounded-lg overflow-hidden shadow-lg'>
                            <div className='absolute w-full h-full bg-black/50'></div>
                            <div className='absolute bottom-1 left-1/2 translate-x-[-50%] translate-y-[-30%] w-full'>
                                <h3 className='text-xl font-poppins text-white'>{excelData[0].title}</h3>
                            </div>
                        </div>
                        <div style={{ backgroundImage: `url(${excelData[1].image})` }} className='relative h-80 w-full bg-cover bg-center border border-gray-600 rounded-lg overflow-hidden shadow-lg'>
                            <div className='absolute w-full h-full bg-black/50'></div>
                            <div className='absolute bottom-1 left-1/2 translate-x-[-50%] translate-y-[-30%] w-full'>
                                <h3 className='text-xl font-poppins text-white'>{excelData[1].title}</h3>
                            </div>
                        </div>
                        <div style={{ backgroundImage: `url(${excelData[2].image})` }} className='relative h-80 w-full bg-cover bg-center border border-gray-600 rounded-lg overflow-hidden shadow-lg'>
                            <div className='absolute w-full h-full bg-black/50'></div>
                            <div className='absolute bottom-1 left-1/2 translate-x-[-50%] translate-y-[-30%] w-full'>
                                <h3 className='text-xl font-poppins text-white'>{excelData[2].title}</h3>
                            </div>
                        </div>
                        <div style={{ backgroundImage: `url(${excelData[3].image})` }} className='relative h-80 w-full bg-cover bg-center -mt-0 lg:-mt-16 border border-gray-600 rounded-lg overflow-hidden shadow-lg'>
                            <div className='absolute w-full h-full bg-black/50'></div>
                            <div className='absolute bottom-1 left-1/2 translate-x-[-50%] translate-y-[-30%] w-full'>
                                <h3 className='text-xl font-poppins text-white'>{excelData[3].title}</h3>
                            </div>
                        </div>
                        <div></div>
                        <div style={{ backgroundImage: `url(${excelData[4].image})` }} className='relative h-80 w-full bg-cover bg-center -mt-0 lg:-mt-16 border border-gray-600 rounded-lg overflow-hidden shadow-lg'>
                            <div className='absolute w-full h-full bg-black/50'></div>
                            <div className='absolute bottom-1 left-1/2 translate-x-[-50%] translate-y-[-30%] w-full'>
                                <h3 className='text-xl font-poppins text-white'>{excelData[4].title}</h3>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className='grid grid-cols-1 md:grid-cols-2 py-28'
                style={{ backgroundImage: 'url("https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <ContactUsForm />
            </section>
            <Footer />
        </>
    )
}

export default HomePage