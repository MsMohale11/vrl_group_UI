import React from "react";

const FullTruckload = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-600 mb-2">Home &gt;&gt; Pickup Request</p>

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-[#691010] text-center">Full Truckload</h1>
      <div className="h-1 w-24 bg-yellow-400 mx-auto mt-2 mb-4"></div>

      {/* Yellow Header */}
      <div className="bg-yellow-400 px-4 py-2 rounded-t-md font-semibold text-black">
        Collection Request-FTL
      </div>

      {/* Form Box */}
      <form className="border border-gray-300 rounded-b-md p-6 bg-white space-y-6 shadow-sm">
        {/* Notice */}
       <marquee>
         <p className="text-red-600 font-semibold text-sm">
          After Submission Our Executive will call you and submit the quote shortly. Thank you.
        </p>
       </marquee>

        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-4">
          <FormGroup label="GST No"  />
          <FormGroup label="Firm Name" />
        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-extralight block mb-1">Payload</label>
            <select className="input border-1 p-1 font-extralight">
              <option className="font-extralight">Select Payload</option>
              <option className="font-extralight">18 Payload</option>
              <option className="font-extralight">20 Payload</option>
              <option className="font-extralight">26 Payload</option>
              <option className="font-extralight">28 Payload</option>
            </select>
          </div>
          <FormGroup label="Route (e.g. ANDRA PRADESH-MUMBAI)" />
          <FormGroup label="Approx Weight (Kgs)" />
          <FormGroup label="Person Name" />
        </div>

        {/* Row 3 */}
        <div className="grid md:grid-cols-3 gap-4">
          <FormGroup label="Mobile No" />
          <FormGroup label="Origin Pincode" />
          <FormGroup label="Destination Pincode" />
        </div>

        {/* Row 4 */}
        <div className="grid md:grid-cols-3 gap-4">
          <FormGroup label="Pickup Street" />
          <FormGroup label="Apartment/Floor etc. (Optional)" />
          <FormGroup label="City Name" />
        </div>

        {/* Row 5 */}
        <div className="grid md:grid-cols-2 gap-4">
          <FormGroup label="Receiver Name" />
        </div>

        {/* Submit Button */}
        <div className="">
          <button
            type="submit"
            className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

// 🔁 Reusable Input Group
const FormGroup = ({ label }) => (
  <div>
    <label className="text-sm font-extralight block mb-1">{label}</label>
    <input type="text" placeholder={label} className="input border-1 p-1 rounded-md" />
  </div>
);

// 🧩 Tailwind utility for inputs
const inputClass = "border border-gray-300 rounded px-3 py-2 w-full";
const input = (props) => <input className={inputClass} {...props} />;

export default FullTruckload;
