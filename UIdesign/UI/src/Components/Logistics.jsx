import React from 'react'
import { Link } from 'react-router-dom';

const Logistics = () => {
  return (
    <div>
        <div className="w-full">
      {/* Hero Section */}
      <div
        className="h-[500px] bg-cover bg-center relative"
        style={{ backgroundImage: 'url(https://www.vrlgroup.in/v4_images/bg_index.jpg)' }}
      >
        <div className="h-full w-full bg-black/70 flex flex-col justify-center px-6">
          <div className=" px-6">
            <p className="text-white text-4xl md:text-5xl font-bold">
              Large Scale of Operation With Quality, Reliability and On Time Delivery
            </p>
            <p className="text-yellow-400 text-xl mt-4">
              - 24 States & 5 Union Territories<br />
              - 1245 Branches & Franchises
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-4 mt-4">
        <h6 className="text-sm text-gray-700">
          <Link to="/" >Home</Link>&gt;&gt; <Link to="/aboutus" >About Us</Link> &gt;&gt; <Link to="/history" >Our History</Link>
        </h6>
      </div>

      {/* General Parcel Section */}
      <div className="max-w-5xl  mx-auto px-4 mt-15">
        <h1 className="text-center text-3xl font-bold text-red-900 mb-6">General Parcel</h1>
        <div className="bg-white rounded-xl  shadow-xl p-8 text-justify text-sm">
          <p>
            General Parcel forms the core of VRL's business and involves pan Indian movement
            of consignments of varying size and weight across the country on a Less than Truck Load
            (LTL) godown to godown Basis... <em>(same content continued)</em>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-amber-800 text-sm">
            <ul className="list-disc ml-6 space-y-2">
              <li>* Surface transportation for best last mile connectivity</li>
              <li>* Online track & trace facility</li>
              <li>* Dedicated company owned vehicles</li>
              <li>* 24x7x365 days operations</li>
              <li>* Consignment size ranging from 1 kg to 40 tons.</li>
            </ul>
            <ul className="list-disc ml-6 space-y-2">
              <li>* Door pick-up and door delivery facility</li>
              <li>* Dedicated customer care window</li>
              <li>* On-time delivery</li>
              <li>* Extensive nation-wide network</li>
              <li>* Best in class service record</li>
            </ul>
          </div>
        </div>

        {/* Courier Section */}
        <h1 className="text-center text-3xl font-bold text-red-900 mt-20 mb-6">
          Courier Service Business
        </h1>
        <div className="bg-white rounded-xl shadow-xl p-8 text-justify font-sm">
          <p>
            We offer Courier services for time sensitive documents and packages. Presently, our
            Courier offering is available within the State of Karnataka... <em>(same content continued)</em>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-amber-800 text-sm">
            <ul className="list-disc ml-6 space-y-2">
              <li>* Door to Door time bound service</li>
              <li>* Multi-Modal Connectivity</li>
              <li>* Time bound Deliveries</li>
              <li>* Special Service to and from Remote locations</li>
            </ul>
            <ul className="list-disc ml-6 space-y-2">
              <li>* Topay / COD Facilities on Delivery</li>
              <li>* Return / Reverse pick-Ups</li>
              <li>* Late Pick-ups and Early Connections</li>
              <li>* Cash management and L.C. Service for Bank</li>
            </ul>
          </div>
        </div>

        {/* FTL Section */}
        <h1 className="text-center text-3xl font-bold text-red-900 mt-24 mb-6">
          FTL (MARKET LOAD) GENERAL TERMS AND CONDITIONS
        </h1>
        <div className="bg-white rounded-xl shadow-xl p-8 text-justify text-sm mb-15">
          <p>
            We provide FTL service to our customers by leveraging our broad base of select branches as
            well as through our network of independent brokerage agents... <em>(same content continued)</em>
          </p>
        </div>
      </div>
    </div>
    </div>
  )
};

export default Logistics;