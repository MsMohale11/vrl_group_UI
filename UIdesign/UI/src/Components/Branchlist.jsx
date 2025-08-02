// import React from "react";
// import { Link } from "react-router-dom";

// const BranchList = () => {
//   return (
//     <div className="w-full mb-15">
//       {/* Hero Section */}
//       <div
//         className="h-[450px] bg-cover bg-center relative"
//         style={{
//           backgroundImage:
//             "url(https://www.vrlgroup.in/v4_images/contact_us.jpg)",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//           <p className="text-white text-2xl md:text-3xl font-bold text-center px-4">
//             Network of 1245 Branch and Franchisees Across India
//           </p>
//         </div>
//       </div>

//       {/* Breadcrumb */}
//       <div className="max-w-6xl mx-auto px-4 mt-4">
//         <h6 className="text-sm text-gray-700">
//          <Link to="/" >Home</Link>&gt;&gt; <Link to="/aboutus" >About Us</Link> &gt;&gt; <Link to="/history" >Our History</Link>
//         </h6>
//       </div>

//       {/* Title */}
//       <div className="max-w-6xl mx-auto px-4 mt-6">
//         <h1 className="text-3xl font-bold text-center text-red-900">
//           Branch List
//         </h1>
//       </div>

//       {/* Form */}
//       <div className="max-w-4xl mx-auto px-4 mt-8">
//         <form className="space-y-6">
//           {/* State Dropdown */}
//           <div>
//             <label className="block text-lg font-medium mb-2">State</label>
//             <select className="w-full h-10 rounded-md border border-black px-3">
//               <option>All</option>
//               <option>Andhra Pradesh</option>
//               <option>Assam</option>
//               <option>Bihar</option>
//               <option>Chandigarh</option>
//               <option>Chattishgarh</option>
//               <option>Daman</option>
//               <option>Goa</option>
//               <option>Gujarat</option>
//               <option>Haryana</option>
//               <option>Himachal Pradesh</option>
//               <option>Jammu and Kashmir</option>
//               <option>Jharkhand</option>
//               <option>Karnataka</option>
//               <option>Kerala</option>
//               <option>Madhya Pradesh</option>
//               <option>Maharashtra</option>
//               <option>Meghalaya</option>
//               <option>New Delhi</option>
//               <option>Orissa</option>
//               <option>Pondicherry</option>
//               <option>Punjab</option>
//               <option>Rajasthan</option>
//               <option>Silvasa</option>
//               <option>Tamil Nadu</option>
//               <option>Telangana</option>
//               <option>Tripura</option>
//               <option>Uttar Pradesh</option>
//               <option>Uttarakhand</option>
//               <option>West Bengal</option>
//               <option>Yanam</option>
//             </select>
//           </div>

//           {/* City Input */}
//           <div>
//             <label className="block text-lg font-medium mb-2">City</label>
//             <input
//               type="text"
//               className="w-full h-10 rounded-md border border-black px-3"
//               placeholder="Enter City Name"
//             />
//           </div>

//           <div>
//             <h4 className="font-semibold text-gray-600">Or</h4>
//             <label className="block text-lg font-medium mb-2">Branch Code</label>
//             <input
//               type="text"
//               className="w-full h-10 rounded-md border border-black px-3"
//               placeholder="Enter Branch Code"
//             />
//           </div>

//           <div>
//             <h4 className="font-semibold text-gray-600">Or</h4>
//             <label className="block text-lg font-medium mb-2">Pin Code</label>
//             <input
//               type="text"
//               className="w-full h-10 rounded-md border border-black px-3"
//               placeholder="Enter Pin Code"
//             />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BranchList;


import React, { useState } from "react";

const BranchList = () => {
  const [formData, setFormData] = useState({
    state: "ALL",
    city: "",
    branchCode: "",
    pinCode: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSearch = () => {
    // Implement your search logic here
    console.log("Search triggered", formData);
  };

  const handleDownloadCSV = () => {
    // Implement your CSV download logic here
    console.log("CSV Download triggered");
  };

  const handleClear = () => {
    setFormData({
      state: "ALL",
      city: "",
      branchCode: "",
      pinCode: "",
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-700 mb-4">Home &gt;&gt; Branch List</p>

      {/* Title */}
      <h1 className="text-3xl font-bold text-[#691010] text-center">
        Branch List
      </h1>
      <div className="h-1 w-24 bg-yellow-400 mx-auto mt-2 mb-8"></div>

      {/* Form */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-15 mt-15">
        {/* State Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            State
          </label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          >
            <option>All</option>
            <option> Andhra Pradesh   </option>
            <option> Assam </option>
            <option> Bihar </option>
            <option>Chandigarh </option>
            <option>Chattishgarh</option>
            <option> Daman </option>
            <option> Goa  </option>
            <option> Gujarat </option>
            <option> Haryana </option>
            <option> Himachal Pradesh </option>
            <option> Jammu and Kashmir </option>
            <option> Jharkhand </option>
            <option> Karnataka </option>
            <option> Kerala </option>
            <option> Madhya Pradesh </option>
            <option> Maharashtra  </option>
            <option> Meghalaya </option>
            <option> New Delhi </option>
            <option> Orissa </option>
            <option> Pondicherry </option>
            <option> Punjab </option>
            <option> Rajasthan </option>
            <option> Silvasa </option>
            <option> Tamil Nadu </option>
            <option> Telangana </option>
            <option> Tripura </option>
            <option> Uttar Pradesh </option>
            <option> Uttarakhand </option>
            <option> West Bengal </option>
            <option> Yanam </option>
            {/* Add more states */}
          </select>
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            placeholder="Enter city"
          />
        </div>

        {/* Branch Code */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Or Branch Code
          </label>
          <input
            type="text"
            name="branchCode"
            value={formData.branchCode}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            placeholder="Enter branch code"
          />
        </div>

        {/* PIN Code */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Or PIN CODE
          </label>
          <input
            type="text"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            placeholder="Enter PIN code"
          />
        </div>
      </form>

      {/* Buttons */}
      <div className="mt-6 flex flex-wrap gap-3 mb-15">
        <button
          onClick={handleSearch}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded"
        >
          Search
        </button>
        <button
          onClick={handleDownloadCSV}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded"
        >
          CSV Download
        </button>
        <button
          onClick={handleClear}
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default BranchList;
