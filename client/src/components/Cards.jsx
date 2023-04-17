import React from "react";
import Single from "../assets/2.svg";
import Double from "../assets/6.png";
import Triple from "../assets/7.png";

function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={Single}
            alt="single"
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            MERN Stack Development
          </h2>
          <p className="text-center text-4xl font-bold">$100</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Life time Course Access</p>
            <p className="py-2 border-b mx-8">24/7 Customer Support</p>
            <p className="py-2 border-b mx-8">Job Assistance</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6 text-black">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            src={Double}
            alt="double"
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            MERN Stack Development
          </h2>
          <p className="text-center text-4xl font-bold">$100</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Life time Course Access</p>
            <p className="py-2 border-b mx-8">24/7 Customer Support</p>
            <p className="py-2 border-b mx-8">Job Assistance</p>
          </div>
          <button className="text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6 bg-black">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={Triple}
            alt="single"
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            MERN Stack Development
          </h2>
          <p className="text-center text-4xl font-bold">$100</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Life time Course Access</p>
            <p className="py-2 border-b mx-8">24/7 Customer Support</p>
            <p className="py-2 border-b mx-8">Job Assistance</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6 text-black">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
