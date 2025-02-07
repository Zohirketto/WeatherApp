import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6">
      <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
      <p className="text-lg text-gray-200 mb-8 text-center">
        Have questions or feedback? Send us a message!
      </p>

      <form className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg text-gray-900">
  
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>


        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Message</label>
          <textarea
            rows="4"
            placeholder="Enter your message"
            className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Send Message
        </button>
      </form>

    
      <Link
        to="/"
        className="mt-6 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-lg shadow-md transition duration-300"
      >
        Back to Home
      </Link>
    </section>
  );
}
