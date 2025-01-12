import React from "react";

const ContactSection = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-12 border">
        <div className="bg-gray-900 md:col-span-4 p-10 text-white">
          <p className="mt-4 text-sm leading-7 font-semibold uppercase">
            Contact
          </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
            Get In <span className="text-indigo-600">Touch</span>
          </h3>
          <p className="mt-4 leading-7 text-gray-200">
            Got Questions? Write To Us
          </p>
          <div className="flex items-center mt-5">
            <svg
              className="h-6 mr-3 text-indigo-600"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 100 20A10 10 0 0010 0zm3 12H7v-2h6v2z" />
            </svg>
            <span className="text-sm">
              Manas Mandir, Cantt. Road, Pithoragarh, Uttarakhand –
              262501, India
            </span>
          </div>
          <div className="flex items-center mt-5">
            <svg
              className="h-6 mr-3 text-indigo-600"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21 2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 14.5L3.5 9l1.41-1.41L9 11.67l9.09-9.09L20.5 4.5 9 14.5z" />
            </svg>
            <span className="text-sm overflow-hidden">
              devasheesh.pant@modvisorbusiness <br />
              consultants.com
            </span>
          </div>
        </div>
        <div className="md:col-span-8 p-10 bg-white">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Mobile Number"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
