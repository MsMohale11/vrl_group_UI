import React from "react";
import { Link } from "react-router-dom";

const VRLFooter = () => {
  return (
    <footer className="bg-yellow-400 text-gray-900">
      {/* Top Section */}
      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">VRL Logistics Ltd.</h2>
          <p className="text-sm leading-relaxed">
            Giriraj Annexe, Circuit House Road<br />
            Hubballi, Karnataka 580029<br />
            India
          </p>
          <p className="mt-4 text-sm">
            📞 <strong>1800 599 7800</strong><br />
            📧 <strong>customercare@vrllogistics.com</strong>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li>
              <Link to="/" className="hover:text-red-700 transition">♠ Home</Link>
            </li>
            <li>
              <Link to="/aboutus" className="hover:text-red-700 transition">♠ About Us</Link>
            </li>
            <li>
              <Link to="/investors" className="hover:text-red-700 transition">♠ Investor Desk</Link>
            </li>
            <li>
              <Link to="/career" className="hover:text-red-700 transition">♠ Careers</Link>
            </li>
            <li>
              <a href="http://mail.vrllogistics.com/" className="hover:text-red-700 transition" target="_blank" rel="noreferrer">♠ Web Mail</a>
            </li>
            <li>
              <a href="https://corevrl.vrlapps.com/Cust_login.aspx" className="hover:text-red-700 transition" target="_blank" rel="noreferrer">♠ Client Login</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="text-sm space-y-2">
            <li>
              <Link to="/consignment" className="hover:text-red-700 transition">♠ Track Consignments</Link>
            </li>
            <li>
              <a href="http://vrlgroup.in/vrl/Courier/frmTrackWayBill.aspx" className="hover:text-red-700 transition" target="_blank" rel="noreferrer">♠ Courier Tracking</a>
            </li>
            <li>
              <Link to="/gst" className="hover:text-red-700 transition">♠ GST Details</Link>
            </li>
            <Link to="/branchlist" className="hover:text-red-700 transition">♠ Branch List</Link>
            <li>
              <Link to="/terms" className="hover:text-red-700 transition">♠ General Parcel T & C</Link>
            </li>
          </ul>
        </div>

        {/* Social & App */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex gap-4 mb-4">
            <a href="https://twitter.com/VrlltdOfficial" target="_blank" rel="noreferrer">
              <img src="https://www.vrlgroup.in/v4_images/twitter-icon-new.svg" alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/vrllogistics.in" target="_blank" rel="noreferrer">
              <img src="https://freepngimg.com/download/facebook/62611-social-media-computer-facebook-icons-hd-image-free-png.png" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com/channel/UC7U7zHVsVQA7E4mMY6dilbw" target="_blank" rel="noreferrer">
              <img src="http://clipart-library.com/images_k/youtube-icon-transparent-png/youtube-icon-transparent-png-17.png" alt="YouTube" className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/company/vrl-logistics-ltd/" target="_blank" rel="noreferrer">
              <img src="https://i1.wp.com/sguru.org/wp-content/uploads/2018/02/linkedin-png-linkedin-icon-1600.png?w=1600&ssl=1" alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>

          <a href="https://play.google.com/store/apps/details?id=com.vrlgroup.digitalvrl&hl=en_IN&gl=US" target="_blank" rel="noreferrer">
            <img src="https://www.vrlgroup.in/v4_images/DVA.png" alt="Download App" className="w-36" />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" bg-yellow-500 text-sm py-4 px-20 border-t border-yellow-300">
        <p>
          © {new Date().getFullYear()} VRL Logistics Ltd. All Rights Reserved. <br />
          REGD. & ADMN. OFFICE: RS NO.353/1, VARUR, POST CHEBBI, TALUK HUBBALLI, DIST. DHARWAD, KARNATAKA, INDIA - 581207
        </p>
      </div>
    </footer>
  );
};

export default VRLFooter;
