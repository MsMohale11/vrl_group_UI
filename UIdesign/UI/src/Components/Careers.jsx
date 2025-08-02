import React from "react";

const Careers = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="h-[450px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://www.vrlgroup.in/v4_images/bg_index.jpg')",
        }}
      >
        <div className="h-full w-full bg-black/70 flex flex-col justify-center px-6">
          <p className="text-white text-4xl md:text-5xl font-bold pt-8">
            “Pleasure in the job puts perfection in the work.”
          </p>
          <span className="text-yellow-400 text-2xl font-bold mt-4 block">
            [ – Aristotle. ]
          </span>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="max-w-6xl mx-auto p-4 text-sm text-gray-700">
        Home &gt;&gt; About Us &gt;&gt; Our History
      </div>

      {/* Title */}
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold text-[#4b0e0e]">Career</h1>
      </div>

      {/* Card Section */}
      <div className="max-w-4xl mx-auto mt-6 shadow-lg rounded-md bg-white px-4 py-6 mb-15">
        <h3 className="text-2xl font-semibold text-center text-[#581616] mb-6">
          Career at Vrl Logistics Ltd
        </h3>

        <div className="flex justify-center">
          <select className="w-full md:w-1/2 h-10 rounded-md border border-gray-300 text-center focus:outline-none focus:ring-2 focus:ring-yellow-400 mt-4 mb-4">
            <option value="">Select</option>
            <option value="driver">Driver</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Careers;
