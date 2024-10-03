import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    // Show a toast notification instead of a dialog box
    toast.success("Namaskar 🙏", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="flex justify-center items-center bg-gray-50 p-6">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
        <p className="text-center text-gray-500 mb-6">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="Let us know how we can help you"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your message
            </label>
            <textarea
              name="message"
              id="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Leave a comment..."
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-28"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-slate-500 text-white font-semibold rounded-md shadow-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition duration-300"
          >
            Send message
          </button>
        </form>

        {/* React Toastify Container */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default ContactForm;
