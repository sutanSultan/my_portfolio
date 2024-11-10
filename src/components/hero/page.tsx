// "use client"
// import React from 'react'
// import Image from 'next/image'
// // import Typewriter from 'typewriter-effect';
// import Link from 'next/link';
// import { AiOutlineCloudDownload } from "react-icons/ai";
// import { AiFillGithub } from "react-icons/ai";

// function Hero() {
//   return (
//     <div className='text-white bg-black'>
//         <section className="text-white body-font ">
//   <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//     <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//       <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
//         HELLO!<br/>
//         I AM <span className='text-orange-400 font-bold'>MUHAMMAD SULTAN</span>
//         <br className="hidden lg:inline-block" />
//         {/* <Typewriter
//   options={{
//     strings: ['Web Developer', 'UI/UX Designer'],
//     autoStart: true,
//     loop: true,
//   }}
// /> */}
//       </h1>
//       <div className='w-[100px] h-[2px] bg-orange-500'></div>
//       <p className="mb-8 leading-relaxed">
//       A passionate Student of IT , Cloud Computing, Applied Generative AI, Web 3.0 and Metaverse & Full Stack Developer at Governor House Karachi. 
//       I am committed to continuously learning and applying my knowledge to create impactful web solutions🚀.
//       </p>
//       <div className="flex justify-center">
//       <Link href={'/component/contact'}>
//         <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-amber-600 rounded text-lg font-bold">
          
//           Contact
//         </button>
//         </Link>
//         <a href='/zari.pdf'>
//         <button className="ml-4 inline-flex text-white font-bold bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded text-lg">
  

//           Download CV
//       <AiOutlineCloudDownload className='text-2xl ml-2 ' />

//     </button></a>
//     {/* -------change it---------- */}
//     <a  href='https://github.com/ZARMAIN-AHMED' className="text-white">
//     <AiFillGithub  className='text-4xl ml-7'/>
//       </a>
//       </div>
//     </div>
//     <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//       <Image
//         className="object-cover object-center rounded-full border-3 border-stone-400 shadow-xl shadow-orange-500"
//         alt="hero"
//         src={'/my_squr-img.png'}
//         height={400}
//         width={400}
        
//       />
   
//     </div>
//   </div>
// </section>

//     </div>
//   )
// }

// export default Hero



"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineCloudDownload } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

function Hero() {
  return (
    <div className="text-white bg-gradient-to-r from-blue-900 via-purple-900 to-black min-h-screen">
      <section className="text-white body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-extrabold text-white">
              HELLO!<br />
              I AM <span className="text-orange-400 font-bold">MUHAMMAD SULTAN</span>
              <br className="hidden lg:inline-block" />
            </h1>
            <div className="w-20 h-1 mb-4 bg-orange-500 rounded"></div>
            <p className="mb-8 leading-relaxed text-lg md:text-xl">
              A passionate student of IT, Cloud Computing, Applied Generative AI, Web 3.0, and Full Stack Development at Governor House Karachi. I am committed to continuously learning and applying my knowledge to create impactful web solutions 🚀.
            </p>
            <div className="flex justify-center">
              <Link href="/component/contact">
                <button className="inline-flex text-white bg-gradient-to-r from-orange-500 to-amber-600 border-0 py-2 px-6 focus:outline-none hover:from-amber-600 hover:to-orange-500 rounded-full text-lg font-bold shadow-lg">
                  Contact
                </button>
              </Link>
              <a href="/" className="ml-4">
                <button className="inline-flex text-white font-bold bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded-full text-lg shadow-lg">
                  Download CV
                  <AiOutlineCloudDownload className="text-2xl ml-2" />
                </button>
              </a>
              <a href="https://github.com/sutanSultan" className="text-white ml-7">
                <AiFillGithub className="text-4xl transition transform hover:scale-110" />
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-10 md:mt-0">
            <Image
              className="object-cover object-center rounded-full border-4 border-orange-400 shadow-lg shadow-orange-500"
              alt="hero"
              src="/my_squr-img.png"
              height={400}
              width={400}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;