import { useState } from "react";

const Discription = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

  return (
    <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-16 mb-12 mt-12 sm:mb-16">
      <a
        href="#"
        target="_blank"
        rel="noreferrer"
        className="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out"
      >
        Join <span className="font-semibold">Today</span>
      </a>
      <h1 className="mx-auto max-w-4xl font-display text-3xl font-bold tracking-normal text-slate-900 sm:text-4xl">
        Are you a driven, ambitious financial modeller with an MBA from a
        reputed institute?
      </h1>
      <p className="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">
        Do you thrive in dynamic environments with flexible hours? At ModVisor,
        we’re seeking individuals with strong Excel skills (bonus points for
        VBA/Macros knowledge!) who are motivated, determined, and ready to make
        an impact. If this sounds like you, let’s shape the future of financial
        modelling together!
      </p>
      <div>
        {" "}
        <p className="text-slate-700 mb-6">
          Send us your CV and a cover letter that showcases what makes you the
          perfect match for us.
        </p>
        <p className="text-slate-700 mb-4">
          Share your CV to this email:{" "}
          <span className="font-semibold text-blue-500">
            devasheesh.pant@modvisorbusinessconsultants.com
          </span>
        </p>
      </div>
      <button
        className="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80"
        onClick={toggleForm}
      >
        Join Our Team →
      </button>

      {/* {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg w-full relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={toggleForm}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Join Our Team
            </h2>

            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter subject"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Resume (PDF/Word only)
                </label>
                <input
                  type="file"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Your Message (optional)
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your message"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )} */}
    </main>
  );
};

export default Discription;
