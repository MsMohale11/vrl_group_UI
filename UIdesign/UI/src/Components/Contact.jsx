import React from "react";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="h-[450px] bg-cover bg-center relative"
        style={{ backgroundImage: 'url(https://www.vrlgroup.in/v4_images/contact_us.jpg)' }}
      >
        <div className="h-full backdrop-blur-xs bg-black/50 flex flex-col pl-15 pt-15 text-white">
          <h2 className="text-white text-3xl md:text-4xl font-bold pt-20">Customer Care</h2>
          <p className="text-white text-2xl font-bold mt-2">Toll Free : 1800 599 7800</p>
          <p className="text-yellow-400 text-lg mt-1">E-mail : customercare@vrllogistics.com</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 mt-4">
        <h6 className="text-sm text-gray-700">
          <Link to="/" >Home</Link>&gt;&gt; <Link to="/aboutus" >About Us</Link> &gt;&gt; <Link to="/history" >Our History</Link>
        </h6>
      </div>

      {/* Page Title */}
      <div className="text-center mt-6">
        <h1 className="text-3xl font-bold text-red-900">Contact Us</h1>
      </div>

      {/* Contact Details */}
      <div className="max-w-6xl mx-auto px-4 mt-10 shadow-lg py-6 p-5 mb-15 rounded-xl ">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p>
              <b>CORPORATE OFFICE :</b> <br />
              Giriraj Annexe, Circuit House Road <br />
              <b>HUBBALLI - 580 029 KARNATAKA</b> <br />
              e-mail : headoffice@vrllogistics.com
            </p>
          </div>
          <div>
            <p>
              <b>REGD. & ADMN. OFFICE :</b> <br />
              Bengaluru Road, VARUR <br />
              <b>HUBBALLI - 581 207 KARNATAKA</b> <br />
              e-mail : varurho@vrllogistics.com
            </p>
          </div>

          <div>
            <p>
              <b>BENGALURU OFFICE :</b> <br />
              # Pampa Mahakavi Road KCCF Compound <br />
              Opp. To Kannad Sahitya Parishad <br />
              Chamarajpet, <b>BENGALURU - 560 018</b> <br />
              e-mail : sbcmo@vrllogistics.com
            </p>
          </div>
          <div>
            <p>
              <b>MUMBAI OFFICE :</b> <br />
              Unit No.7 & 8, 1st Floor, Sector No. 19/A <br />
              Near APMC Dana Bunder, Banking Commercial Complex, <br />
              VASHI <b>NAVI MUMBAI - 400 705.</b> <br />
              e-mail : mbimo@vrllogistics.com
            </p>
          </div>

          <div>
            <p>
              <b>HYDERABAD OFFICE :</b> <br />
              Plot No. 18, Paigah Colony, Phase-I <br />
              Behind Anand Theater S.P. Road <br />
              <b>SECUNDERABAD - 500 003</b> <br />
              e-mail : hydmarketing@vrllogistics.com
            </p>
          </div>
          <div>
            <p>
              <b>NEW DELHI OFFICE :</b> <br />
              No 21, Near Zalkhira Circle, <br />
              Rama Road <br />
              <b>NEW DELHI - 110 015</b> <br />
              e-mail : dlimo@vrllogistics.com
            </p>
          </div>

          <div>
            <p>
              <b>PUNE OFFICE :</b> <br />
              Sr. No.42A, Asha House, 1st Floor, <br />
              Near Hotel Panchami, Shahu College Road, Parvati, <br />
              <b>PUNE - 411 009</b> <br />
              e-mail : punemarketing@vrllogistics.com
            </p>
          </div>
          <div>
            <p>
              <b>KOLKATA OFFICE :</b> <br />
              7/1 Lake Terrace Road <br />
              Deshapriya Park, <br />
              Nearest Metro Station Kalighat <br />
              <b>KOLKATA - 700 029</b> <br />
              e-mail : cltro@vrllogistics.com
            </p>
          </div>

          <div>
            <p>
              <b>CHENNAI OFFICE :</b> <br />
              13, 1st Main Road, <br />
              Ambattur Industrial Estate, Ambattur <br />
              <b>CHENNAI - 600058.</b> <br />
              e-mail : cnivpoffice@vrllogistics.com
            </p>
          </div>
          <div>
            <p>
              <b>AHMEDABAD OFFICE :</b> <br />
              608, 6th Floor, P B Parekh Towers, <br />
              Opp Vanijaya Bhuvan, <br />
              Near Diwan Ballubhai School, <br />
              Kankaria Road, <b>AHMEDABAD - 380 022</b> <br />
              e-mail : adigm@vrllogistics.com
            </p>
          </div>

        </div>

        {/* Branch Button */}
        <div className=" mt-10 ">
          <Link to="/branchlist">
            <button className="bg-red-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-800 transition">
              Click Here to See Our Branch Site
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
