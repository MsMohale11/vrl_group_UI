import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="h-[500px] bg-cover bg-center relative"
        style={{ backgroundImage: 'url(https://www.vrlgroup.in/v4_images/bg_index.jpg)' }}
      >
        <div className="h-full w-full bg-black/70 flex flex-col justify-center px-6">
          <p className="text-white text-4xl md:text-5xl font-bold  px-4 pt-10 md:pt-0">
            Outdoor Branding
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 mt-4">
        <h6 className="text-sm text-gray-700">
          Home &gt;&gt; About Us &gt;&gt; <Link to="/history" >Our History</Link>
        </h6>
      </div>

      {/* Title */}
      <div className="text-center mt-6">
        <h1 className="text-3xl font-bold text-red-900">VRL Outdoor</h1>
      </div>

      {/* Content Box */}
      <div className="max-w-6xl mx-auto px-4 mt-6 mb-15">
        <div className="bg-white p-10 shadow-lg p-6 text-justify text-gray-800 text-[17px]">
          <p>
            VRL permits the usage of its vehicles for branding. Reputed corporate have had tie-ups with us in the past and these include Mahindra & Mahindra, Bosch, Maruti, Michelin, Hindustan Petroleum, United India Insurance, National India Insurance, etc. Our vehicles criss cross the entire Indian Highways stretch and offer a significant value addition and great brand recall for your products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;