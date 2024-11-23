/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


  
const Payment = () => {
    
  const navigate = useNavigate();
  const query = new URLSearchParams(window.location.search);


  // Optional automatic redirection after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000); // Redirect after 5 seconds
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [navigate]);

  return (
    <>
    { query.get('success') === 'true'?

    (<div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <div className="text-green-500 text-6xl mb-4">✔</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment Successful!</h1>
        <p className="text-gray-600 text-lg mb-6">Thank you for your payment. Your transaction was completed successfully.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-md text-lg transition duration-300"
        >
          Go to Home
        </button>
      </div>
    </div>)
    :
    (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <div className="text-red-500 text-6xl mb-4">✖</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment Failed!</h1>
        <p className="text-gray-600 text-lg mb-6">
          Unfortunately, we couldn’t process your payment. Please try again or contact support.
        </p>
        <button
          onClick={() => navigate('/payment')}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md text-lg transition duration-300"
        >
          Retry Payment
        </button>
      </div>
    </div>
    )
    }
    </>
  );
}

export default Payment

