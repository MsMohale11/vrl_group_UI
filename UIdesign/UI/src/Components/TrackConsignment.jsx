import React from "react";

const TrackConsignment = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="h-[500px] bg-cover bg-center relative"
        style={{
          backgroundImage: "url(https://www.vrlgroup.in/v4_images/bg_index.jpg)",
        }}
      >
        <div className="h-full w-full bg-black/70 flex flex-col justify-center px-6">
          <div className=" px-4">
            <p className="text-white font-bold text-4xl md:text-5xl leading-tight">
              Services spread across <br /> 24 states & 5 Union Territories.
            </p>
          </div>
        </div>
      </div>


        <div className="max-w-6xl mx-auto px-4 mt-6">
        <h6 className="text-sm text-gray-700">
          Home &gt;&gt; About Us &gt;&gt; Our History
        </h6>
      </div>

     

      {/* Page Title */}
      <div className="text-center mt-6">
        <h1 className="text-3xl font-bold text-red-900"> Consignment Track</h1>
      </div>

      {/* Track Input */}
      <div className="max-w-4xl mx-auto px-4 mt-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="text"
            placeholder="Enter Consignment / LRNO"
            className="px-6 py-2 w-full md:w-[400px] rounded shadow-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="button"
            className="bg-yellow-400 hover:bg-red-900 hover:text-white text-black font-semibold px-6 py-2 rounded transition duration-300"
          >
            Track
          </button>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-6xl mx-auto px-4 mt-10 mb-15">
        <iframe
          title="VRL Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26620.762819529533!2d77.18631807431636!3d28.665328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0ea135e509%3A0x139cbeb78c990ef1!2sVRL%20Logistics%20Ltd.!5e1!3m2!1sen!2sin!4v1726075297749!5m2!1sen!2sin"
          width="100%"
          height="450"
          className="border-none"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default TrackConsignment;
