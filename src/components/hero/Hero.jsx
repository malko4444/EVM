import React from 'react';

export default function Hero() {
  
      // {/* Candidates Section (Appears when user scrolls down) */}
      // {/* <div className="p-6 bg-green-100">
      //   <h2 className="text-center text-3xl font-bold text-green-800 mb-8">Election Candidates</h2>

      //   {/* Candidate: Maryam Nawaz */}
      //   <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 mb-6">
      //     <img src="/assets/coverImage/marNawaz.jpg" alt="Maryam Nawaz" className="w-full md:w-1/3 h-64 object-cover rounded-lg" />
      //     <div className="md:ml-6 mt-4 md:mt-0">
      //       <h2 className="text-2xl font-bold text-green-800">Maryam Nawaz - Candidate for [Lady C-M]</h2>
      //       <p className="text-gray-700 mt-2">
      //         Maryam Nawaz Sharif is a prominent Pakistani politician and a key leader of the Pakistan Muslim League-Nawaz (PML-N).
      //         She advocates for democratic values, economic growth, and public welfare. Her vision includes:
      //       </p>
      //       <ul className="list-disc list-inside mt-2 text-gray-600">
      //         <li>✅ Strengthening democracy and rule of law</li>
      //         <li>✅ Economic reforms and job creation</li>
      //         <li>✅ Education and healthcare improvements</li>
      //         <li>✅ Women empowerment and youth engagement</li>
      //       </ul>
      //       <p className="text-green-700 font-bold mt-2">Vote for Maryam Nawaz to support a progressive and prosperous Pakistan! 🇵🇰</p>
      //     </div>
      //   </div>

      //   {/* Candidate: Imran Khan */}
      //   <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 mb-6">
      //     <img src="/assets/coverImage/imran.jpg" alt="Imran Khan" className="w-full md:w-1/3 h-64 object-cover rounded-lg" />
      //     <div className="md:ml-6 mt-4 md:mt-0">
      //       <h2 className="text-2xl font-bold text-green-800">Imran Khan - Candidate for [C-M]</h2>
      //       <p className="text-gray-700 mt-2">
      //         Imran Khan is the founder of PTI and a former Prime Minister of Pakistan (2018-2022). His vision is a corruption-free,
      //         economically stable, and just Pakistan. His key focus areas include:
      //       </p>
      //       <ul className="list-disc list-inside mt-2 text-gray-600">
      //         <li>✅ Eradicating corruption and ensuring accountability</li>
      //         <li>✅ Strengthening institutions for better governance</li>
      //         <li>✅ Promoting economic growth and foreign investment</li>
      //         <li>✅ Developing a strong and independent foreign policy</li>
      //       </ul>
      //       <p className="text-green-700 font-bold mt-2">Vote for Imran Khan to build a just and prosperous Pakistan! 🇵🇰</p>
      //     </div>
      //   </div>

      //   {/* Candidate: Bilawal Bhutto */}
      //   <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6">
      //     <img src="/assets/coverImage/bhutto.jpg" alt="Bilawal Bhutto" className="w-full md:w-1/3 h-64 object-cover rounded-lg" />
      //     <div className="md:ml-6 mt-4 md:mt-0">
      //       <h2 className="text-2xl font-bold text-green-800">Bilawal Bhutto Zardari - Candidate for [C-M]</h2>
      //       <p className="text-gray-700 mt-2">
      //         Bilawal Bhutto Zardari is the Chairman of PPP and represents the vision of a progressive, democratic, and inclusive Pakistan.
      //         His leadership focuses on:
      //       </p>
      //       <ul className="list-disc list-inside mt-2 text-gray-600">
      //         <li>✅ Expanding social welfare programs for the poor</li>
      //         <li>✅ Strengthening democracy and human rights</li>
      //         <li>✅ Empowering youth and increasing job opportunities</li>
      //         <li>✅ Improving education and healthcare facilities</li>
      //       </ul>
      //       <p className="text-green-700 font-bold mt-2">Vote for Bilawal Bhutto Zardari for a progressive and people-focused Pakistan! 🇵🇰</p>
      //     </div>
      //   </div>
      // </div> 
  return (
    <div>
      {/* Fullscreen Video Section */}
      <div className="relative h-screen w-full">
        {/* Video Background */}
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
          <source src="/assets/coverImage/vid.mp4" type="video/mp4" />
        </video>

        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            Welcome to Online Voting System
          </h1>
        </div>
      </div>

    </div>
  );
}
