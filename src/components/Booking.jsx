
import { useDispatch, useSelector } from "react-redux";
import { closeForm, createReservation, getResInfo, openModal, selectCar } from "../redux/slices/ReservationSlice";
import { fetchCar, fetchCars } from "../redux/slices/CarSlice";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { sendBookingMail } from "../helpers/emails";
import { calculateDays, calculatePrice } from "../helpers/calculatePrice";

const Booking = () => {
    const { formOpened } = useSelector((state) => state.reserve);
    const { selectedCar } = useSelector((state) => state.reserve);
    const { cars } = useSelector((state) => state.cars);
    const { car } = useSelector((state) => state.cars);
    const [totalCost, setTotalCost] = useState(0);
    const [dateError, setDateError] = useState(null);

    const [formInfo, setFormInfo] = useState({
        reservation: {
            car_id: selectedCar || '',
            start_date: '',
            end_date: '',
            status: 'pending',
            user_id: null, // Will be set if the user is authenticated
            name: '', // For unauthenticated users
            email: '', // For unauthenticated users
            phone_number: '', // For unauthenticated users
        }
    });
    const [emailInfo, setEmailInfo] = useState(
        {
            from_name: '',
            from_email: '',
            from_phone: '',
            pickup_date: '',
            drop_date: '',
            car: car|| '',
            totalCost: '',
            securityDeposit: '',
            message: '',
            reply_to: '',
        },
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCars());
    }, [dispatch]);

    useEffect(() => {
        setFormInfo((prevState) => ({
            ...prevState,
            reservation: {
                ...prevState.reservation,
                car_id: selectedCar
            }
        }));
    }, [selectedCar]);

    useEffect(() => {
        if (formInfo.reservation.start_date && formInfo.reservation.end_date && selectedCar) {
            const days = calculateDays(formInfo.reservation.start_date, formInfo.reservation.end_date);
            const car = cars.find(car => car.attributes.id === selectedCar);
            if (car && days !== -1) {
                const cost = calculatePrice(days, parseInt(car.attributes.price.split('-')[1], 10));
                setTotalCost(cost);
                setDateError(null)
            } else { setDateError("Invalid dates") }
        }
    }, [formInfo.reservation.start_date, formInfo.reservation.end_date, selectedCar, cars]);

    useEffect(() => {
        setEmailInfo((prevEmailInfo) => ({
            ...prevEmailInfo,
            totalCost: totalCost
        }));
    }, [totalCost]);
    

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormInfo((prevState) => {
            const newFormInfo = {
                ...prevState,
                reservation: {
                    ...prevState.reservation,
                    [name]: value
                }
            };

            const updatedEmailInfo = {
                from_name: newFormInfo.reservation.name,
                from_email: newFormInfo.reservation.email,
                from_phone: newFormInfo.reservation.phone_number,
                pickup_date: newFormInfo.reservation.start_date,
                drop_date: newFormInfo.reservation.end_date,
                car: `${car?.attributes.year} ${car?.attributes.make} ${car?.attributes.model}`,
                securityDeposit: car?.attributes.price.split('-')[1],
                message: newFormInfo.reservation.additional_info,
                reply_to: newFormInfo.reservation.email,
            };
            setEmailInfo(updatedEmailInfo);
            if(newFormInfo.reservation.car_id){
                dispatch(selectCar(newFormInfo.reservation.car_id));
                dispatch(fetchCar( newFormInfo.reservation.car_id));
            }
            return newFormInfo;
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createReservation(formInfo));
        dispatch(selectCar(null));
        dispatch(closeForm());
        sendBookingMail(emailInfo);
        dispatch(getResInfo(
            {
                email: formInfo.reservation.email,
                car: `${car?.attributes.year} ${car?.attributes.make} ${car?.attributes.model}`,
                price: totalCost,
                days: calculateDays(formInfo.reservation.start_date, formInfo.reservation.end_date),
                image: car?.attributes.image,
            }
        ));

        setTimeout(() => {
            dispatch(openModal());
        }, 1000);
    };
    return (
        <div>
            <AnimatePresence>
                {formOpened && (
                    <motion.div className="fixed inset-0 flex items-center justify-end z-50"
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: "tween", stiffness: 10, duration: 0.4 }}
                        exit={{ opacity: 0, x: 200 }}
                    >
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="bg-white w-full md:w-1/3 h-full p-6 overflow-y-auto shadow-lg transform transition-transform duration-300 ease-in-out">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-bold text-green-600">Book a Car</h2>
                                <button onClick={() => {
                                    dispatch(closeForm());
                                    dispatch(selectCar(null));
                                    setFormInfo((prevState) => ({
                                        ...prevState,
                                        reservation: {
                                            ...prevState.reservation,
                                            car_id: null
                                        }
                                    }))
                                }} className="text-green-600 text-xl font-bold">&times;</button>
                            </div>
                            <form onSubmit={dateError ? (e) => e.preventDefault() : handleSubmit} className="text-start">
                                <div className="mb-4">
                                    <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                                    <input
                                        className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={formInfo.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                                    <input
                                        className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formInfo.email}
                                        onChange={handleChange}
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="phone">Phone</label>
                                    <input
                                        className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="phone"
                                        name="phone_number"
                                        type="text"
                                        value={formInfo.phone_number}
                                        onChange={handleChange}
                                        placeholder="Your Phone"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="pickupDate">Pick-Up Date</label>
                                    <input
                                        className="bg-gray-500 shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="pickupDate"
                                        name="start_date"
                                        type="date"
                                        value={formInfo.start_date}
                                        onChange={handleChange}
                                        required
                                    />
                                    {dateError &&
                                        <p className="text-red-500 text-xs">{dateError}</p>
                                    }
                                </div>
                                <div className="mb-4">
                                    <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="dropOffDate">Drop-Off Date</label>
                                    <input
                                        className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="dropOffDate"
                                        name="end_date"
                                        type="date"
                                        value={formInfo.end_date}
                                        onChange={handleChange}
                                        required
                                    />
                                    {dateError &&
                                        <p className="text-red-500 text-xs">{dateError}</p>
                                    }
                                </div>
                                <div className="mb-4">
                                    <label className="block text-green-700 text-sm font-bold mb-2" htmlFor="carType">Car</label>
                                    <select
                                        className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="carType"
                                        name="car_id"
                                        value={selectedCar || formInfo.car_id}
                                        onChange={handleChange}
                                        defaultValue={selectedCar || ''}
                                        required
                                    >
                                        <option value="" disabled>Select Car</option>
                                        {cars.map((car) => (
                                            <option key={car.id} value={parseInt(car.attributes.id, 10)}>
                                                {car.attributes.year} {car.attributes.make} {car.attributes.model}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-6">
                                    <label className="block text-green-700 text-sm font-bold mb-1" htmlFor="additionalInfo">Additional Information</label>
                                    <textarea
                                        className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="additionalInfo"
                                        name="additional_info"
                                        value={formInfo.additional_info}
                                        onChange={handleChange}
                                        rows="3"
                                        placeholder="Any additional information"
                                    ></textarea>
                                </div>

                                {
                                    totalCost !== 0 && (
                                        <div className="text-red-500 text-center mb-2 text-sm">
                                            <p>Rental Cost: <span className="text-black font-bold">{totalCost.toLocaleString()} GHS</span></p>
                                        </div>
                                    )
                                }

                    

                                {
                                    
                                    (selectedCar !== null) &&
                                            
                                            (
                                                <div className="text-red-500 text-center mb-2 text-xs">
                                                    <p>Our Policy demands that an refundable amount of <span className="text-black font-bold">{car?.attributes?.price.split("-")[1]} GHS </span>
                                                        be paid as collactral fee. This amount is calculated as a day&apos;s fee for your {" "}
        
                                                        <span className="text-black font-bold">{car?.attributes.make} {car?.attributes.model}</span></p>
                                                </div>
                                            )
                                }


                                <div className="flex items-center justify-between">
                                    <button
                                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Agree & Proceed
                                    </button>
                                    <button
                                        onClick={() => {
                                            dispatch(closeForm());
                                            dispatch(selectCar(null));
                                            setFormInfo((prevState) => ({
                                                ...prevState,
                                                reservation: {
                                                    ...prevState.reservation,
                                                    car_id: null
                                                }
                                            }))
                                            setTotalCost(0)
                                        }}
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="button"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Booking;
