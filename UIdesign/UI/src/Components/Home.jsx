import React from "react";
import { Link } from "react-router-dom";

const VRLHomePage = () => {
  return (
    <div className="w-full overflow-x-hidden">

      {/* Hero Section */}
      {/* <div
        className="h-[450px] bg-cover bg-center  relative"
        style={{ backgroundImage: 'url(https://www.vrlgroup.in/v4_images/WEB--IMG_6638.jpg)' }}
      >
        <div className="h-full backdrop-blur-xs bg-black/50 flex flex-col pl-15 pt-15 text-white">
          <h1 className="text-4xl md:text-5xl font-bold ">
            Welcome to <u>VRL</u>
          </h1>
          <p className="text-2xl mt-2">
            We are Leader in Surface Logistics Service in India
          </p>
          <div className="mt-4 space-x-4">
            <a href="https://www.vrlgroup.in/our_history.aspx">
              <button className="bg-yellow-400 px-4 py-2 rounded text-black font-semibold hover:bg-red-900 hover:text-white">
                Get Started
              </button>
            </a>
            <a href="https://www.vrlgroup.in/track_consignment.aspx">
              <button className="bg-yellow-400 px-4 py-2 rounded text-black font-semibold hover:bg-red-900 hover:text-white">
                Track Consignment
              </button>
            </a>
          </div>
        </div>
      </div> */}


      <div
        className="h-[500px] bg-cover bg-center relative"
        style={{ backgroundImage: 'url(https://www.vrlgroup.in/v4_images/WEB--IMG_6638.jpg)' }}
      >
        <div className="h-full w-full bg-black/60 flex flex-col justify-center px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold ">
            Welcome to <u>VRL</u>
          </h1>
          <p className="text-2xl mt-2">
            We are Leader in Surface Logistics Service in India
          </p>
          <div className="mt-4 space-x-2">
            <Link to="/consignment">
              <button className="bg-yellow-400 px-4 py-1 rounded text-black font-extralight hover:bg-red-900 hover:text-white">
                TRACK CONSIGNMENT
              </button>
            </Link>
             <Link to="/pickup">
              <button className="bg-yellow-400 px-4 py-1 rounded text-black font-extralight hover:bg-red-900 hover:text-white">
               PICKUP REQUEST
              </button>
            </Link>
             <Link to="/fulltruckload">
              <button className="bg-yellow-400 px-4 py-1 rounded text-black font-extralight hover:bg-red-900 hover:text-white">
                PICKUP REQUEST FULL TRUCKLOAD
              </button>
            </Link>
          </div>
        </div>
      </div>


      {/* About Section */}
      <div className="max-w-6xl mx-auto px-4 mt-10">
        <p className="text-md text-center text-gray-800  leading-8 text-justify">
          <strong>F</strong>ounded in 1976, VRL is public listed company on NSE & BSE Exchange with a Market capitalization of INR 49.22 billion (as on 30.06.2024), we grown into a nationally renowned logistics and transport company which is also currently the largest fleet owner of commercial vehicles in India. VRL has pioneered in providing a safe and reliable logistics network in the field of parcel service, ensuring last mile delivery even in remote locations. We integrated hub-and-spoke operating model which enables optimal aggregation of consignments from a diversified customer base across multiple industries and locations
        </p>
        <p className="text-base leading-8 text-justify mt-6">
          © Services spread across 24 states & 5 Union Territories.<br />
          © Diverse customer base of Corporate, SMEs and traders with exclusive focus on B2B services.<br />
          © 3PL and Warehousing Solutions nationwide.<br />
          © Award Winning Service Quality & continued support of our esteemed customers.<br />
          © State-of-the-art vehicle maintenance facilities with performance-enhancing technological innovations.<br />
          © Dedicated In-house software with own servers and real-time data for analysis and MIS.<br />
          © Own fuel stations at key locations and tie up with IOCL.
        </p>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link
          to="/"
          className="group bg-white p-6 rounded shadow-xl text-center hover:shadow-xl transition"
        >
          <div className="w-24 h-24 mx-auto rounded-full bg-red-900 flex items-center justify-center">
            <img
              src="https://www.vrlgroup.in/v4_images/VRL-Truck.svg"
              alt="Logistics"
              className="w-14"
            />
          </div>
          <h3 className="text-xl font-bold mt-4 group-hover:text-blue-500 transition">
            Logistics Solution
          </h3>
          <p className="mt-2 text-xs">
            We move consignments of varying size and weight across the country.
          </p>
        </Link>

        <Link
          to="/logistics"
          className="group bg-white p-6 rounded shadow-xl text-center hover:shadow-xl transition"
        >
          <div className="w-24 h-24 mx-auto rounded-full bg-red-900 flex items-center justify-center">
            <img
              src="https://www.vrlgroup.in/v4_images/motorbike.svg"
              alt="Courier"
              className="w-14"
            />
          </div>
          <h3 className="text-xl font-bold mt-4 group-hover:text-blue-500 transition">
            Courier Service
          </h3>
          <p className="mt-2 text-xs">We offer Courier services within the State of Karnataka.</p>
        </Link>

        <Link
          path="/"
          className="group bg-white p-6 rounded shadow-xl text-center hover:shadow-xl transition"
        >
          <div className="w-24 h-24 mx-auto rounded-full bg-red-900 flex items-center justify-center">
            <img
              src="https://www.vrlgroup.in/v4_images/frontal-truck.svg"
              alt="FTL"
              className="w-14"
            />
          </div>
          <h3 className="text-xl font-bold mt-4 group-hover:text-blue-500 transition">
            Full Tracked Services
          </h3>
          <p className="mt-2 text-xs">
            We provide FTL service to our customers and provide door-to-door FTL service.
          </p>
        </Link>
      </div>



      {/* CMD Section */}
      <div className="bg-yellow-100 py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl text-center text-red-900 font-bold">From CMD's Desk</h1>
          <div className="bg-white mt-6 rounded-2xl p-6 md:flex md:items-center gap-6 shadow-md">
            <img
              src="https://www.vrlgroup.in/v4_images/cmd_sir_desk.jpg"
              alt="CMD"
              className="rounded-2xl w-full md:w-1/2 mx-auto"
            />
            <div className="mt-4 md:mt-0 md:w-1/2 font-xs">
              <p>
                "We have not only built a company, we also developed a culture among our staff, right from truck drivers to the top management. A sense of responsibility, honesty and dedication is inculcated in each of our team members. This is what makes quality & on-time service possible. VRL has given employment to over 20,000+ employees and our growth & success is attributed to this strong workforce. This coupled with the strong in-house IT would propel the Company to newer growth pinnacles in the days to come."
              </p>
              <h2 className="mt-4 font-bold text-xl">-Dr. Vijay Sankeshwar</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto px-4 text-center mt-10">
        <h1 className="text-3xl font-bold text-red-900">Team</h1>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Team Member 1 */}
        <div className="shadow-md rounded-lg p-6">
          <img
            src="https://www.vrlgroup.in/v4_images/cmd_index.jpg"
            alt="Dr. Vijay Sankeshwar"
            className="rounded-xl mx-auto mb-4"
          />
          <div className="text-center">
            <h3 className="font-bold text-lg">Dr. Vijay Sankeshwar</h3>
            <p className="italic">Chairman and Managing Director and Promoter</p>
            <p className="mt-2 italic text-xs">
              Chairman and Managing Director and Promoter of the Company, he is actively involved in the day-to-day affairs of the Company.
            </p>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="shadow-md rounded-lg p-6">
          <img
            src="https://www.vrlgroup.in/v4_images/md_index.jpg"
            alt="Dr. Anand Sankeshwar"
            className="rounded-xl mx-auto mb-4"
          />
          <div className="text-center">
            <h3 className="font-bold text-lg">Dr. Anand Sankeshwar</h3>
            <p className="italic">Managing Director and Promoter</p>
            <p className="mt-2 italic text-xs">
              Managing Director and Promoter, supervises our marketing operations and he is actively involved in the day-to-day affairs of the Company.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-4xl mx-auto px-4 mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <img src="https://www.vrlgroup.in/v4_images/VRL-Truck.svg" alt="Truck" className="w-1/2 mx-auto" />
          <h1 className="text-blue-900 text-3xl font-bold">6,177</h1>
          <p>Owned Goods Transport Vehicles</p>
        </div>
        <div>
          <img src="https://www.vrlgroup.in/v4_images/VRL-Truck.svg" alt="Branch" className="w-1/2 mx-auto" />
          <h1 className="text-blue-900 text-3xl font-bold">1245+</h1>
          <p>Goods Transport Branches</p>
        </div>
        <div>
          <img src="https://www.vrlgroup.in/v4_images/VRL-Truck.svg" alt="Workforce" className="w-1/2 mx-auto" />
          <h1 className="text-blue-900 text-3xl font-bold">20000+</h1>
          <p>Workforce Led by Experienced Management</p>
        </div>
        <div>
          <img src="https://www.vrlgroup.in/v4_images/motorbike.svg" alt="Courier" className="w-[23%] mx-auto" />
          <h1 className="text-blue-900 text-3xl font-bold">130+</h1>
          <p>Courier Branches</p>
        </div>
      </div>

      {/* CIN Section */}
      <div className="max-w-4xl mx-auto px-4 mt-12 bg-red-900 text-white rounded-t-2xl py-6 text-center">
        <p className="font-light">
          CIN : L60210KA1983PLC005247
          <br />
          <span className="text-xs">Customer Care 9:30 AM - 9:30 PM</span>
        </p>
        <p className="mt-2">
          TOLL FREE : <span className="font-semibold text-sm  ">1800 599 7800</span>, E-mail : customercare@vrllogistics.com
        </p>
        <hr className="border-dashed border-yellow-300 mt-4" />
      </div>
    </div>
  );
};

export default VRLHomePage;
