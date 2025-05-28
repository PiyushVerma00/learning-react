import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-5">
          Find Your Dream Job Today
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl mb-8">
          Explore thousands of job opportunities across multiple industries and skill levels.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            to="/jobs"
            className="bg-blue-600 text-lg hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition"
          >
            🔍 Browse Jobs
          </Link>
          <Link
            to="/addJob"
            className="bg-green-600 text-lg hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition"
          >
            ➕ Post a Job
          </Link>
        </div>
      </div>

      {/* Optional Features Section */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl w-full text-center">
        <div>
          <h3 className="text-2xl font-bold mb-2">✔️ Fast & Easy</h3>
          <p className="text-gray-400 text-lg">Post or apply to jobs in just a few clicks.</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">🔒 Secure</h3>
          <p className="text-gray-400 text-lg">Your data is safe with end-to-end encryption.</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">📊 Powerful Filters</h3>
          <p className="text-gray-400 text-lg">Quickly find jobs that match your skills.</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
