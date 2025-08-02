import React, { useState } from "react";

const PickupRequestPage = () => {
  const [activeTab, setActiveTab] = useState("parcel");

  return (
    <div className="max-w-6xl mx-auto p-6">
      <p className="text-sm text-gray-600 mb-4">Home &gt;&gt; Pickup Request</p>
      <h1 className="text-3xl font-bold text-[#691010] text-center">Pickup Request</h1>
      <div className="h-1 w-24 bg-yellow-400 mx-auto mt-2 mb-6"></div>

      {/* Tabs */}
      <div className="flex space-x-4 border-b mb-6">
        <button
          className={`pb-2 text-sm font-extralight ${
            activeTab === "parcel"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("parcel")}
        >
          Pickup Request (Parcel)
        </button>
        <button
          className={`pb-2 text-sm font-extralight ${
            activeTab === "bike"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("bike")}
        >
          Pickup Request (2 Wheeler)
        </button>
      </div>

      {/* Toggle Forms */}
      {activeTab === "parcel" ? <ParcelForm /> : <BikeForm />}
    </div>
  );
};

// Parcel Form
const ParcelForm = () => (
  <form className="bg-white shadow p-6 rounded-md space-y-4">
    <div className="grid md:grid-cols-4 gap-4">
      <FormGroup label="GST Number" />
      <FormGroup label="Customer Name" />
      <FormGroup label="No of Packages" />
      <FormGroup label="Approx Weight" />
    </div>

    <div className="grid md:grid-cols-4 gap-4">
      <FormGroup label="Contact Person Name" />
      <FormGroup label="Type of Goods" />
      <FormGroup label="Mobile No" />
      <div className="flex items-end">
        <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Verify
        </button>
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-4">
      <FormGroup label="Email" />
      <FormGroup label="Origin Pincode" />
      <FormGroup label="Destination Pincode" />
    </div>

    <div className="grid md:grid-cols-3 gap-4">
      <FormGroup label="Pickup Street Address" />
      <FormGroup label="Apartment/Floor (Optional)" />
      <FormGroup label="Pickup City Name" />
    </div>

    <div className="grid md:grid-cols-2 gap-4">
      <FormGroup label="Receiver GST No" />
      <FormGroup label="Receiver Name" />
    </div>

    <div className="grid md:grid-cols-2 gap-4">
      <FormFileGroup label="Upload Material Image 1" />
      <FormFileGroup label="Upload Material Image 2" />
    </div>

    <div className="">
      <button type="submit" className="bg-gray-700 text-white px-6 py-2 rounded mt-4">
        SUBMIT
      </button>
    </div>
  </form>
);

// Two-Wheeler Form
const BikeForm = () => (
  <form className="bg-white shadow p-6 rounded-md space-y-4">
    <div className="grid md:grid-cols-4 gap-4">
      <FormGroup label="Full Name" />
      <FormGroup label="Email Address" />
      <FormGroup label="Mobile No" />
      <div className="flex items-end">
        <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Verify
        </button>
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-4">
      <FormGroup label="Vehicle Number" />
      <div>
        <label className="block text-sm font-extralight mb-1">Two-Wheeler CC</label>
        <select className={inputClass}>
          <option>Select Two-Wheeler CC</option>
          <option value="100">100 CC</option>
          <option value="150">150 CC</option>
          <option value="200">200 CC</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-extralight mb-1">Vehicle Type</label>
        <select className={inputClass}>
          <option>Select Two-Wheeler Type</option>
          <option value="scooter">Scooter</option>
          <option value="bike">Bike</option>
        </select>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-4">
      <FormGroup label="Pickup Pincode" />
      <FormGroup label="Destination Location" />
    </div>

    <div>
      <FormGroup label="Additional Requests" />
    </div>

    <div className="">
      <button type="submit" className="bg-gray-700 text-white px-6 py-2 rounded mt-4">
        SUBMIT
      </button>
    </div>
  </form>
);

// 📦 Reusable Text Input Group
const FormGroup = ({ label }) => (
  <div>
    <label className="block text-sm font-extralight mb-1">{label}</label>
    <input type="text" placeholder={label} className={inputClass} />
  </div>
);

// 📂 Reusable File Input Group
const FormFileGroup = ({ label }) => (
  <div>
    <label className="block text-sm font-extralight mb-1">{label}</label>
    <input type="file" className="w-full mt-1" />
  </div>
);

// Tailwind input utility class
const inputClass = "border border-gray-300 rounded px-3 py-2 w-full";

export default PickupRequestPage;
