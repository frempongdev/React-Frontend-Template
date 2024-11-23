/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openForm, selectCar } from '../redux/slices/ReservationSlice';
import { fetchCar } from '../redux/slices/CarSlice';

const CarCard = ({ cardata }) => {
    // const [options, setOptions] = useState(false)
    const [carHovered, setCarHovered] = useState(null);


    const dispatch = useDispatch()

    return (
        <div className="grid grd-rows-[3fr 1fr] border shadow-lg w-96">
            <div className=' p-5'>
                <div className="h-56 overflow-hidden bg-cover bg-center shadow-sm"
                    style={{ backgroundImage: `url(${cardata.image})` }}
                    onMouseEnter={() => setCarHovered(cardata.id)} onMouseLeave={() => setCarHovered(null)}
                >

                    {/* REMOVEABLE ITEMS */}
                    {
                        carHovered === cardata.id && (
                            <button className='absolute top-2 left-1 bg-green-500 hover:bg-green-700 text-lg text-white font-bold py-2 px-4 rounded-full shadow-md'
                                onClick={() => { dispatch(selectCar(cardata.id)); dispatch(openForm()); console.log("Car_ID from the button",cardata.id); dispatch(fetchCar(cardata.id)) }}
                            >
                                Book Now
                            </button>
                        )
                    }
                    {/* REMOVEABLE ITEMS */}
                </div>

            </div>
            <div className="grid grid-flow-col grid-cols-[1fr 3fr] p-3 gap-5">
                <div className="flex flex-col">
                    <p className=" text-sm m-0 p-0">{cardata.make}</p>
                    <p className=" text-xl font-semibold m-0 p-0">{cardata.model}</p>
                </div>

                <div className="grid grid-cols-2 gap-1">
                    <span className=" bg-blue-gray-100 text-gray-900">{cardata.year}</span>
                    <span className=" bg-blue-gray-100 text-gray-900">{cardata.color}</span>
                    <span className=" bg-blue-gray-100 text-gray-900">{cardata.fuel_type}</span>
                    <span className=" bg-blue-gray-100 text-gray-900 transition">{cardata.price} {carHovered && <span className='text-xs font-semibold'>GHS</span>}</span>
                </div>
            </div>
        </div>
    )
}

// generate prop validation for cardata

CarCard.propTypes = {
    cardata: PropTypes.shape({
        image: PropTypes.string.isRequired,
        make: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        transmission: PropTypes.string.isRequired,
        fuel_type: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
    }).isRequired,
}

export default CarCard