import React from "react";
import { Link } from "react-router-dom";

const MissionVision = () => {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <div
                className="h-[450px] bg-cover bg-center relative"
                style={{
                    backgroundImage: "url('https://www.vrlgroup.in/v4_images/bg_index.jpg')",
                }}
            >
                <div className="h-full backdrop-blur-xs bg-black/50 flex flex-col  pt-15 text-white">
                    <div className=" mx-auto px-4 p-5">
                        <p className="text-white text-5xl md:text-[55px] font-bold pt-[100px]">
                            Currently the Largest Fleet Owner of India
                        </p>
                        <span className="text-yellow-400 text-2xl font-bold block mt-4">
                            [ 6,177 Owned Goods Transport Vehicles ]
                        </span>
                    </div>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="max-w-5xl mx-auto px-4 p-5 mt-6">
                <p className="text-sm text-gray-700">
                    <Link path="/">Home</Link> &gt;&gt; About Us &gt;&gt; <Link path="/history"> Our History </Link>
                </p>
            </div>

            {/* Vision */}
            <div className="max-w-5xl mx-auto px-4 p-5 mt-10">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-[#691010]">Our Vision</h1>
                </div>

                <div className="shadow-xl mt-6 bg-white rounded p-5">
                    <p className="p-6 text-[17px] text-justify">
                        To become the Premier Company that cuts across various segments and
                        emerges as the torchbearer of each segment that it ventures into.
                    </p>
                </div>

                {/* Mission */}
                <div className="text-center mt-16">
                    <h1 className="text-3xl font-bold text-[#691010]">Our Mission</h1>
                </div>

                <div className="shadow-xl mt-6 bg-white rounded p-5">
                    <p className="p-6 text-[17px] text-justify">
                        To provide the highest quality service to our customers by
                        continuously increasing cost efficiency and maintaining delivery
                        deadlines. To encourage our workforce to continuously strive for
                        quality and excellence in everything they do. To promote team work
                        and create work environment that encourages talent and brings out
                        the best in our employees.
                    </p>
                </div>

                {/* Quality Policy */}
                <div className="text-center mt-12">
                    <h1 className="text-3xl font-bold text-[#691010]">Quality Policy</h1>
                </div>

                <div className="shadow-xl mt-6 bg-white rounded mb-10 p-5">
                    <p className="p-6 text-[17px] text-justify">
                        We are committed to provide quality logistics services consistently
                        at reasonable price and to continually improve the same to achieve
                        customers delight on a sustainable basis.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MissionVision;
