import React from "react";
import { Link } from "react-router-dom";

const History = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="h-[500px] bg-cover bg-center relative"
        style={{ backgroundImage: 'url(https://www.vrlgroup.in/v4_images/bg_index.jpg)' }}
      >
        <div className="h-full w-full bg-black/70 flex flex-col justify-center px-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold pt-20">
            Currently the Largest Fleet Owner of India
          </h1>
          <p className="text-yellow-400 text-2xl font-semibold mt-4">
            [ 6,177 Owned Goods Transport Vehicles ]
          </p>
        </div>
      </div>

      {/* Breadcrumb & Title */}
      <div className="max-w-6xl mx-auto px-4 mt-6">
        <h6 className="text-sm text-gray-700">
          <Link to="/" >Home</Link>&gt;&gt; <Link to="/aboutus" >About Us</Link> &gt;&gt; <Link to="/history" >Our History</Link>
        </h6>
        <h1 className="text-3xl font-bold text-center text-red-900 mt-4">Our History</h1>
      </div>

      {/* Description */}
      <div className="max-w-6xl mx-auto px-4 mt-10 shadow-2xl rounded-xl py-6 mb-15">
        <p className="text-justify text-base leading-relaxed ">
          VRL was founded in 1976 by DR. Vijay Sankeshwar in Gadag, a small town in North Karnataka with a single
          truck and a vision that was way ahead of its time. VRL gradually expanded its services to Bangalore, Hubli
          and Belgaum. From this humble beginning VRL has today grown into a nationally renowned logistics and
          transport company which is also currently the largest fleet owner of commercial vehicles in India with a fleet
          of 6,177 Vehicles. VRL finds mention in the Limca Book of Record as the largest fleet owner of commercial
          vehicles in India in the Private Sector. Mr. Vijay Sankeshwar has now been joined by his son Mr. Anand
          Sankeshwar who brings in newer strategies to further drive the growth of the Company.
          <br /><br />
          Over the years, VRL has pioneered in providing a safe and reliable delivery network in the field of parcel
          service. It has spread its operations to Courier Service, Priority Cargo & Transport of Passengers by Air to meet
          the growing demands of its burgeoning customer base.
          <br /><br />
          3PL & Warehousing solutions offered by VRL are tailor-made and cater to unique needs of its diverse customer
          base. With the largest goods transportation network in India, VRL parcel service is indispensable for a large
          number of Corporate Houses. This network spans the length and breadth of the country and is supported by
          strategically located transshipment hubs. We operate through a network of 1245 Branch and franchisees to
          cater our valuable customers and we are now in the process of expanding our services to reach even the
          remotest locations of the Country.
        </p>
      </div>

     
    </div>
  );
};

export default History;
