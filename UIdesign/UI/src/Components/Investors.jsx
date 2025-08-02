import React from 'react'
import { Link } from 'react-router-dom'

const Investors = () => {
  return (
    <div>

      <div className="w-full">
        {/* Hero Section */}
        <div
          className="h-[500px] bg-cover bg-center relative"
          style={{
            backgroundImage: "url(https://www.vrlgroup.in/v4_images/investor_desk.jpg)",
          }}
        >
          <div className="h-full w-full bg-black/70 flex flex-col justify-center px-6"></div>
        </div>

        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-4 mt-4">
          <h6 className="text-sm text-gray-700">
            <Link path="/">  Home </Link> &gt;&gt;  <Link path="/directors"> Board of Directors </Link> </h6>
        </div>

        {/* Page Title */}
        <div className="max-w-6xl mx-auto px-4 text-center mt-4">
          <h1 className="text-3xl font-bold text-red-900">Investors Desk</h1>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-4 mt-8 flex flex-col md:flex-row">
          <div className="md:w-1/4 border-r border-dashed border-black pr-4">
            <div className="text-sm leading-7">
              <p>
                Overview
                <br /> Financial Results <br /> - Quarterly Results <br /> - Annual
                Report <br /> Corporate Governance <br /> - Name and Contact
                Details of RTA <br /> - Policies <br /> - Report <br /> - Board of
                Directors <br /> - Management Team <br /> - Compliance Officer
                <br /> - Nodal Officer's (under IEPF Rules) <br /> - Presiding
                Officer <br /> - ID's Appointment Terms <br /> - Board Committees
                <br /> Corporate Presentation <br /> Share Holding Pattern <br />
                Investors Con-Calls <br /> Unclaimed Dividend <br /> Information to
                Physical Shareholders <br /> Annual Return <br /> Notices, Forms
                & Voting Result <br /> Filings with Stock Exchanges <br /> Buy
                Back <br /> - 2023 <br /> - 2021 <br /> - 2017 <br /> Buy Back
                Public Announcement <br /> Press Release <br /> Advertisements
                <br /> Familarization Program <br /> CSR Annual Action Plan
              </p>
            </div>
          </div>

          <div className="md:w-3/4 pl-4 mt-6 md:mt-0 ">
            <p className="text-[15px] text-gray-700 text-center leading-relaxed">
              VRL was founded in 1976 by DR. Vijay Sankeshwar in Gadag, a small town in North Karnataka with a single truck and a vision that was way ahead of its time. VRL gradually expanded its services to Bangalore, Hubli and Belgaum. From this humble beginning VRL has today grown into a nationally renowned logistics and transport company which is also currently the largest fleet owner of commercial vehicles in India, With a fleet of 6,177 vehicles. VRL finds mention in the Limca Book of Record as the largest fleet owner of commercial vehicles in india in the Private Sector. Mr. Vijay Sankeshwar has now been joined by his son Mr. Anand Sankeshwar who brings in newer strategies to further drive the growth of the Company.
              <br /><br />
              Over the years, VRL has pioneered in providing a safe and reliable delivery network in the field of parcel service. It has spread its operations to Courier Service, Priority Cargo & Transport of Passengers by Air to meet the growing demands of its burgeoning customer base.
              <br /><br />
              3PL & Warehousing solutions offered by VRL are tailor-made and cater to unique needs of its diverse customer base. With the largest goods transportation network in India, VRL parcel service is indispensable for a large number of Corporate Houses. This network spans the length and breadth of the country and is supported by strategically located transshipment hubs. We operate through a network of 1245 Branch and franchisees to cater our valuable customers and we are now in the process of expanding our services to reach even the remotest locations of the Country.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Investors