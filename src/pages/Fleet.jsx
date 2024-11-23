import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../redux/slices/CarSlice';
import { useEffect, useRef, useState } from 'react';
// import { MdOutlineAvTimer } from "react-icons/md";
// import { IoColorPaletteOutline } from "react-icons/io5";
// import { CiBookmarkCheck } from "react-icons/ci";
// import { BsFuelPump } from "react-icons/bs";
// import { GiGearStickPattern } from "react-icons/gi";
// import { openForm, selectCar } from '../redux/slices/ReservationSlice';
// import { IoMdCar } from "react-icons/io";
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CiSearch } from "react-icons/ci";
import Loading from '../components/Loading';
import ScrollAll from '../helpers/scroll';
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react';
import CarCard from '../components/CarCard';
import { motion } from 'framer-motion';

const Fleet = () => {
  ScrollAll()
  const scrollRef = useRef(null)

  const { cars } = useSelector((state) => state.cars);
  // const [carHovered, setCarHovered] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);
  const [selectedCarType, setSelectedCarType] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  useEffect(() => {
    setFilteredCars(
      cars.filter((car) => {
        const matchesSearchQuery = `${car.attributes.year} ${car.attributes.make} ${car.attributes.model} ${car.attributes.vehicle_type} ${car.attributes.color} ${car.attributes.status} ${car.attributes.fuel_type} ${car.attributes.transmission}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

        const matchesCarType = selectedCarType ? car.attributes.vehicle_type === selectedCarType : true;

        return matchesSearchQuery && matchesCarType;
      })
    );
  }, [searchQuery, selectedCarType, cars]);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <main className='text-black'>
      <Helmet>
        <title>Our Fleet - Rigi-X || Car Rental</title>
      </Helmet>
      <Navbar theme="light" />
      <section className='pt-28 pb-9'>
        <h1 className='text-3xl md:text-5xl font-bold font-annapurna py-3'>Choose from our array of cars</h1>
        <div>
          <form className='bg-gray-100 flex items-center justify-center gap-2 px-2 py-6 border w-full' onSubmit={handleSearch}>
            <CiSearch className='text-2xl' />
            <input
              type="text"
              className='p-2 rounded-xl text-center outline-none bg-white text-black'
              placeholder='search car'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type='submit' className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-md'>Search</button>
          </form>
        </div>

        ÷

        {filteredCars[0]?.attributes.image ? (

          // <section className='flex flex-col gap-5 mt-6 items-center px-6 bg-gray-100'>
          //   {filteredCars.map((car) => (

          //     <div key={car.id} className='grid grid-cols-1 md:grid-cols-[1fr,6fr] w-full xl:max-w-[1280px] gap-2 mb-5 md:mb-0'>
          //       <div className='text-start grid grid-cols-2 md:flex md:flex-col gap-5 items-start py-6 phonedown:order-1'>
          //         <div className='flex items-center gap-3'>
          //           <MdOutlineAvTimer className='text-3xl' />
          //           <div>
          //             <p className='ml-1'>Year</p>
          //             <p className='text-md md:text-xl rounded-full bg-slate-300 px-3'>{car.attributes.year}</p>
          //           </div>
          //         </div>
          //         <div className='flex items-center gap-3'>
          //           <IoMdCar className='text-3xl' />
          //           <div>
          //             <p className='ml-1'>Vehicle Type</p>
          //             <p className='text-md md:text-xl rounded-full bg-slate-300 px-3'>{car.attributes.vehicle_type}</p>
          //           </div>
          //         </div>
          //         <div className='flex items-center gap-3'>
          //           <IoColorPaletteOutline className='text-3xl' />
          //           <div>
          //             <p className='ml-1'>Colour</p>
          //             <p className='text-md md:text-xl rounded-full bg-slate-300 px-3'>{car.attributes.color}</p>
          //           </div>
          //         </div>
          //         <div className='flex items-center gap-3'>
          //           <CiBookmarkCheck className='text-3xl' />
          //           <div>
          //             <p className='ml-1'>Status</p>
          //             <p className='text-md md:text-xl rounded-full bg-slate-300 px-3'>{car.attributes.status}</p>
          //           </div>
          //         </div>
          //         <div className='flex items-center gap-3'>
          //           <BsFuelPump className='text-3xl' />
          //           <div>
          //             <p className='ml-1'>Fuel Type</p>
          //             <p className='text-md md:text-xl rounded-full bg-slate-300 px-3'>{car.attributes.fuel_type}</p>
          //           </div>
          //         </div>
          //         <div className='flex items-center gap-3'>
          //           <GiGearStickPattern className='text-3xl' />
          //           <div>
          //             <p className='ml-1'>Transmission</p>
          //             <p className='text-md md:text-xl rounded-full bg-slate-300 px-3'>{car.attributes.transmission}</p>
          //           </div>
          //         </div>
          //       </div>
          //       <div style={{ backgroundImage: `url(${car.attributes.image})` }} className='w-full bg-cover bg-center h-[70vh] 2xl:h-[65vh] relative'
          //         onMouseEnter={() => setCarHovered(car.attributes.id)} onMouseLeave={() => setCarHovered(null)}>
          //         <div className='absolute bottom-0 left-0 bg-black/70 text-white py-2 px-4 text-start'>
          //           <p className='text-sm font-bold'>{car.attributes.make}</p>
          //           <p className='text-2xl'>{car.attributes.model}</p>
          //         </div>
          //         {
          //           carHovered === car.attributes.id && (
          //             <button className='absolute top-2 left-1 bg-green-500 hover:bg-green-700 text-lg text-white font-bold py-2 px-4 rounded-full shadow-md'
          //               onClick={() => { dispatch(selectCar(car.attributes.id)); dispatch(openForm()); }}
          //             >
          //               Book Now
          //             </button>
          //           )
          //         }
          //       </div>
          //     </div>
          //   ))}
          // </section>

          <article className='w-full flex justify-center'>
            <div className='max-w-[1280px]'>
              <Tabs value={filteredCars[0]?.attributes.vehicle_type}>
                <TabsHeader>
                  {[...new Set(filteredCars.map(car => car.attributes.vehicle_type))].map((vehicleType) => (
                    <Tab key={vehicleType} value={vehicleType}>
                      {vehicleType}
                    </Tab>
                  ))}
                </TabsHeader>
                <TabsBody className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
                  {filteredCars.map(car => (
                    <TabPanel key={car.id} value={car.attributes.vehicle_type} className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3'>
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        viewport={{ root: scrollRef }}
                      >
                        <CarCard cardata={car.attributes} />
                      </motion.div>
                    </TabPanel>
                  ))}
                </TabsBody>

              </Tabs>
            </div>
          </article>

        ) : <Loading />}
      </section>




      <section className="text-center bg-gradient-to-r from-red-500 to-yellow-500 text-white py-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
        <p className="text-xl mb-6">If you have questions, feel free to contact us.</p>
        <a href="/contact-us" className="bg-white text-red-500 font-semibold py-2 px-6 rounded-full hover:bg-red-100">
          Contact Us
        </a>
      </section>
      <Footer />
    </main>
  );
};

export default Fleet;
