import React from "react";
import { Link } from "react-router-dom";

const BoardOfDirectors = () => {
  const directors = [
    {
      id: 1,
      name: "Dr. VIJAY SANKESHWAR",
      image: "https://www.vrlgroup.in/v4_images/bod/cmd.jpg",
      role: "Chairman and Managing Director",
      description:
        "Chairman and Managing Director and Promoter of the Company, he is actively involved in the day-to-day affairs of the Company, as a Whole Time Director. He holds a Bachelor's Degree in commerce from Karnataka University, Dharwad. He was a former Member of Parliament and was elected from the Dharwad (North) constituency in the 11th, 12th and 13th Lok Sabha elections and he was also a member of the Legislature of the State of Karnataka. He was a member of Central Government committees, such as, the Committee of Finance between 1996 and 1997, the Consultative Committee, Ministry of Surface Transport between 1996 and 2000 and the Committee of Transport and Tourism between 1998 and 2000. He has over three decades of experience in the transport industry. He has received various awards including the 'Udyog Ratna' in 1994 by the Institute of Economic Studies, New Delhi, Aaryabhat Award in 2002, Sir M. Visvesvaraya Memorial Award in 2007 and the Transport Samrat in 2008. He was recently selected as 'Transport Personlity of the year' during the recently concluded India Road Transportation Awards 2012 (IRTA)."
    },
    {
      id: 2,
      name: "Dr. ANAND SANKESHWAR",
      image: "https://www.vrlgroup.in/v4_images/bod/md.jpg",
      role: "Managing Director and Promoter",
      description:
        "Managing Director and Promoter, supervises our marketing operations and he is actively involved in the day-to-day affairs of the Company, as a Whole Time Director. He holds a Bachelor's Degree in commerce from Karnataka University, Dharwad. He has 19 years of experience in the transport industry. He has been awarded the 'Youth Icon' award in 2004 by Annual Business Communicators of India and 'Marketing Professional of the Year' in the year 2005 by the Indira Group of Companies. He was also awarded the Best 2nd Generation Entrepreneur by TiE Global, USA in 2010. He was honoured as an 'Inspirational leader of New India' at a recently concluded glittering galla ceremony at Las Vegas, USA."
    },
     {
      id: 3,
      name: "MR. SHIVA A SANKESHWAR",
      image: "https://www.vrlgroup.in/v4_images/bod/SHIVA_A_SANKESHWAR.jpg",
      role: "Managing Director and Promoter",
      description:
        "Managing Director and Promoter, supervises our marketing operations and he is actively involved in the day-to-day affairs of the Company, as a Whole Time Director. He holds a Bachelor's Degree in commerce from Karnataka University, Dharwad. He has 19 years of experience in the transport industry. He has been awarded the 'Youth Icon' award in 2004 by Annual Business Communicators of India and 'Marketing Professional of the Year' in the year 2005 by the Indira Group of Companies. He was also awarded the Best 2nd Generation Entrepreneur by TiE Global, USA in 2010. He was honoured as an 'Inspirational leader of New India' at a recently concluded glittering galla ceremony at Las Vegas, USA."
    },
    {
      id: 4,
      name: "MR. L R Bhat",
      image: "https://www.vrlgroup.in/v4_images/bod/Bhat_Sir.jpg",
      role: "Managing Director and Promoter",
      description:
        "Mr. L R Bhat, aged 58 years, holds a diploma in Mechanical Engineering from the State Board of Technical Education & Training, Tamil Nadu and is certified member of the Institute of Engineers in tool design. He has been associated with the Company since 1st July 1995. He heads the vehicle maintenance function and is also instrumental in developing the in-house Information Technology which has resulted in growth coupled with enormous cost saving in the Company."
    },
    {
      id: 5,
      name: "Mrs. Medha Pawar",
      image: "https://www.vrlgroup.in/v4_images/bod/Medha_Pawar.jpg",
      role: "Managing Director and Promoter",
      description:
        "An Independent Director of the Company. She has a post graduate degree in law from the Bangalore University. She has also completed a certificate course in Cyber Laws from G. K Law College, Hubballi in collaboration with Cyber Law College, Chennai. She is a practicing advocate with more than 20 years experience."
    },
    {
      id: 6,
      name: "Dr. Anand Pandurangi",
      image: "https://www.vrlgroup.in/v4_images/bod/Anand_Pandurangi.jpg",
      role: "Managing Director and Promoter",
      description:
        "An Independent Director of the Company, he is a consulting Psychiatrist in Dharwad and holds a bachelors degree in medicine and surgery from the Karnatak University, Dharwad. He also has a Diploma in Psychological Medicine from the Karnatak University, Dharwad. He has been awarded a certificate of Life Fellowship by the Indian Psychiatric Society on January 1, 1999. He is the recipient of several awards and recognitions including the 'Karnataka Rajyotsava Award' by the Government of Karnataka"
    },
    {
      id: 7,
      name :" Dr. Raghottam Akamanchi",
      image : "https://www.vrlgroup.in/v4_images/bod/Raghottam_Akamanchi.jpg",
      role: "Managing Director and Promoter",
      description:
        "A non-executive Director of the Company, he holds a post graduate degree in Science (Statistics) from the Gulbarga University and a doctorate in Statistics from the University of Mysore. He was on the Board of Management of the Karnataka State Open University during 2009-2011. He was also the National Vice President of Akhil Bharatiya Vidyarthi Parishad. He is also the President of Seva Bharati Trust, Hubballi, a Non Government organization established in 1999 and serving the socially and economically backwards of the society."
    },
    {
      id: 8,
      name :" Mr. Shankarasa Ladwa",
      image : "https://www.vrlgroup.in/v4_images/bod/SVLadwa.jpg",
      role: "Managing Director and Promoter",
      description:
        "An Independent Director of the Company, he holds a Certificate of Practice and has been admitted as a Fellow of the Institute of Chartered Accountants of India since June 1993. He is the President of Sri Somavamsha Sahasrarjuna Kshatriya Samaj (R), Team Leader of the legal & grievances sub-committee of Akhila Bharatiya Saomavanshiya Sahasrarjuna Kshatriya Samaj."
    },
     {
      id: 9,
      name :" Dr. Ashok Shettar",
      image : "https://www.vrlgroup.in/v4_images/bod/Ashok_Shetter.jpg",
      role: "Managing Director and Promoter",
      description:
        "A Non-Executive Director of the Company, he holds B.E. in Civil Engineering from Karnatak University, Dharwad and Ph.D. in Civil Engineering from Indian Institute of Science, Bengaluru. He was Former Member, Executive Council, Visvesvarayya Technological University, Belgaum and Former Member of Higher Education Council, Government of Karnataka. Presently he is member of the Indian Society for Technical Education. In 2005 he is conferred with 'Rotary Centennial' award for Professional Excellence, Administrative and Teaching Experience. He has 29 years of teaching experience at Undergraduate and Post graduate levels. Presently he is the Vice Chancellor of KLE Technological University, an institution of repute providing quality education to the students."
    },
     {
      id: 10,
      name :" Mr. SHANTILAL D JAIN",
      image : "https://www.vrlgroup.in/v4_images/bod/Shantilal_Jain.jpeg",
      role: "Managing Director and Promoter",
      description:
        "Mr. Shantilal Jain appointed as an Independent Director of the Company w.e.f. 7th August 2023, Mr. Shantilal Jain, Aged 69 years, holds a Bachelor’s Degree in Commerce from St Joseph’s College of Commerce Bengaluru since1976-77 and is also a member of Institute of Chartered Accountants of India(ICAI) and he is in practice with an experience of more than 3+ decades in the field of Taxation, Accounting, Audit etc., and holds the membership of the ICAI since 1981. He was also a chairman of Hubballi Branch of SIRC (Southern India Regional Council of Institute of Chartered Accountants of India) in the year 1992-93 and was a director of Institute of Business Management & Research (IBMR) an Educational institutions at Hubballi, Bengaluru, Ahmedabad and Gurgaon he has a reputed well established firm in Hubballi in the name of M/s. D. Shantilal Jain & Co. He is a Director of Dhanashree Realtors (Hubli) Ltd., Bengaluru and was also a Director in Lions Club of Hubballi for 1996-97 and 1998. He was Director of Oxford College, Hubballi and was also a Director of Oxford Polytechnic, Hubballi. He was also a President for consecutive three terms of Bharat Vikas Parishad, Hubballi."
    },
     {
      id: 11,
      name :" Dr. (Mrs.) SHAILAJA AMBLI",
      image : "https://www.vrlgroup.in/v4_images/bod/Shailaja_Ambali.jpg",
      role: "Managing Director and Promoter",
      description:
        "An Independent Director of the Company, Dr. Shailaja Ambli, aged 67 years, holds a Science Degree from Karnatak University, Dharwad. She has completed her B.Ed and M.Ed and was also recipient of the coveted State Award in B.Ed & M.Ed owing to her securing First rank and Gold Medals in both these examinations. She has also completed M.A in Sociology. She has received numerous awards including the prestigious Wrangler D.C. Pawate Diamond Jubilee Celebration Award. She was bestowed with the Karnatak University fund prize & UGC fellowship for undertaking Research in the field of Education and awarded Ph.D in year 1992. She had started her career as a Teacher Educator at Shree Damodar D.Ed Training College, Margoa, Goa and later on was promoted and served as Research Officer with the Goa Board of Secondary & Higher Secondary Education for 27 years. She was deputed by the Goa Board, Government of Goa and Government of India for the British Technical Co-operation Training Programme at the University of Cambridge, Local Examination Syndicate, United Kingdom on Education Assessment in the year 1993."
    },
     {
      id: 12,
      name :" MR. VIRUPAXAGOUDA PATIL",
      image : "https://www.vrlgroup.in/v4_images/bod/MR.%20VIRUPAXAGOUDA%20PATIL.jpg",
      role: "Managing Director and Promoter",
      description:"An Independent Director of the Company, Mr. Virupaxagouda Patil, aged 71 years, holds a Graduate degree in Commerce and Law from Karnatak University, Dharwad . He also holds Post Graduate Diploma in Computer Application. He is an Advocate practicing over the last four decades. He has served as a Legal Advisor for many Nationalized and Private sector Banks. He has also served as the President of District Consumer Redressal Forum for Kodagu District of Karnataka and has also acted as a District Arbitrator for Co-operatives and Societies. He is an accredited Notary too. He has vast experience in Law and Commerce."
    },
     {
      id: 13,
      name :" MR. VINAY JAVALI",
      image : "https://www.vrlgroup.in/v4_images/bod/MR.%20VINAY%20JAVALI.jpg",
      role: "Managing Director and Promoter",
      description:"An Independent Director of the Company, Mr. Vinay Javali, aged 67 years, holds a Graduate degree in Mechanical Engineering from B.V.B College Engineering and Technology, Hubballi. Hailing from a prominent textile business family from North Karnataka, he simultaneously pursued his interest in automobile industry and joined TVS Group to get special training in automobile service and repair. He has set up his own business under the name M/s Auto Reconditioners and subsequently M/s Auto Scan Center, both establishments being today the leading multi brand automobile car service and spare parts centres. He has widely travelled to several countries like United Kingdom, Italy, Switzerland, United States of America etc. to explore and gather experience in the automobile spares and services field and adopt the best business practices for his business. He has been socially active since young age and served many social organizations and at present he is President of the Hubballi Automobile Dealers Association and Vice President of B V B College of Engineering and Technology Alumni Association Hubballi. He served Karnataka Chamber of Commerce and Industry, since long as a Managing Committee Member. He is a sports enthusiast and has represented his University and State in Badminton.."
    },
    
  ];

  return (
    <div className="w-full">
      <div
        className="h-[500px] bg-cover bg-center relative"
        style={{
          backgroundImage: "url(https://www.vrlgroup.in/v4_images/bg_index.jpg)",
        }}
      >
        <div className="h-full w-full bg-black/70 flex flex-col justify-center px-6"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-4">
        <h6 className="text-xs text-gray-700"><Link path="/"> Home</Link> &gt;&gt; <Link  path="/directors">  Board of Directors </Link> </h6>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8">
        <h1 className="text-3xl font-bold text-center text-red-900 mb-6">
          Board Of Directors Of VRL
        </h1>

        {directors.map((director) => (
          <div
            key={director.id}
            className="bg-yellow-100 shadow-md rounded-lg mb-8 p-4 md:p-8 flex flex-col md:flex-row"
          >
            <div className="md:w-1/3 flex justify-center items-center p-4">
             <img
  src={director.image}
  alt={director.name}
  className="rounded-xl w-40 h-50 object-cover"
/>
            </div>
            <div className="md:w-2/3 p-4">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {director.id}. {director.name}
              </h4>
              <p className="text-sm leading-relaxed text-gray-700">
                {director.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardOfDirectors;
