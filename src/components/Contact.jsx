import { useState } from "react";
import { sendMail } from "../helpers/emails";
// import { useDispatch } from "react-redux";

// ContactUsForm.jsx
const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

//   const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    if (window.Email){
        sendMail(formData)
        // dispatch(showModal())
        setFormData({
            name: '',
            email: '',
            message: ''
            })
            }
        console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-slate-100 shadow-md rounded-md px-7 text-black">
      <h2 className="text-2xl font-bold text-center mb-4 ">Get In Touch</h2>
      <p className=" text-xs text">Want to talk to Us?</p>
      <p className="text-xs">Fill out the form below.</p>
      <form onSubmit={handleSubmit} className="space-y-4 text-start">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-white mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-white mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-white mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Your Message"
            rows="4"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
