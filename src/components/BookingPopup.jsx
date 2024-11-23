import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { closeModal } from "../redux/slices/ReservationSlice";
import { motion } from "framer-motion";
import axios from "axios";
import baseUrl from "../helpers/url";
import PaystackPop from '@paystack/inline-js'


const ReservationSuccessPopup = () => {

    const dispatch = useDispatch();
    const { resInfo } = useSelector((state) => state.reserve);

    const handleSubmit = async(e) => {
        e.preventDefault();
        dispatch(closeModal());
        // make an API call to '/payments' endpoint
        try {
            // Make a POST request to the backend /payments endpoint using Axios
            const response = await axios.post(`${baseUrl}/transaction/initialize`, {"email":resInfo.email,"amount":resInfo.price});
                const access_code  = response.data.data.access_code
                const popup = new PaystackPop()
                popup.resumeTransaction(access_code)
                console.log("Payment access code ", response.data.data.access_code);

        } catch (error) {
            console.error("Error: ", error);
        }



    }

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <motion.div className="bg-white rounded-lg p-8 text-black"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                <h2 className="text-2xl font-bold mb-4">Reservation Successful</h2>
                <p className="mb-6">Your reservation has been made successfully. You will receive a confirmation email shortly.</p>
                <div className="flex flex-col gap-3 w-[80%] items-center mx-auto">
                    <form to="/payment" onSubmit={handleSubmit}>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" >
                            Proceed to Payment
                        </button>
                    </form>
                    <button
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => dispatch(closeModal())}
                    >
                        Pay on Pickup
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default ReservationSuccessPopup;
