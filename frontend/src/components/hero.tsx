// import { ArrowRight, Briefcase, Search, TrendingUp } from "lucide-react";
// import Link from "next/link";
// import React from "react";
// import { Button } from "./ui/button";

// const Hero = () => {
//   return (
//     <section className="relative overflow-hidden bg-secondary">
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96  rounded-full blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-5 py-16 md:py-24 relative">
//         <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
//           <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
//             {/* badge */}
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-background/50 backdrop-blur-sm">
//               <TrendingUp size={16} className="text-blue-600" />
//               <span className="text-sm font-medium">
//                 #1 Job Platform in India
//               </span>
//             </div>

//             {/* main heading */}
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//               Find Your Dream Job at{" "}
//               <span className="inline-block">
//                 Hire<span className="text-red-500">Heaven</span>
//               </span>
//             </h1>

//             {/* descripiton */}
//             <p className="text-lg md:text-xl leading-relaxed opacity-80 max-w-2xl">
//               Connect with top employers and discover opportunities that match
//               your skills. Wheather you're a job seeker or recruiter, we've got
//               you covered with powerful tools and seamless experience.
//             </p>

//             {/* stats */}
//             <div className="flex flex-wrap justify-center md:justify-start gap-8 py-4">
//               <div className="text-center md:text-left">
//                 <p className="text-3xl font-bold text-blue-600">10k+</p>
//                 <p className="text-sm opacity-70">Active Jobs</p>
//               </div>
//               <div className="text-center md:text-left">
//                 <p className="text-3xl font-bold text-blue-600">5k+</p>
//                 <p className="text-sm opacity-70">Companies</p>
//               </div>
//               <div className="text-center md:text-left">
//                 <p className="text-3xl font-bold text-blue-600">50k+</p>
//                 <p className="text-sm opacity-70">Job Seekers</p>
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 pt-2">
//               <Link href={"/jobs"}>
//                 <Button
//                   size={"lg"}
//                   className="text-base px-8 h-12 gap-2 group transition-all"
//                 >
//                   <Search size={18} />
//                   Browse Jobs{" "}
//                   <ArrowRight
//                     size={18}
//                     className="group-hover:translate-x-1 transition-transform"
//                   />
//                 </Button>
//               </Link>
//               <Link href={"/about"}>
//                 <Button
//                   variant={"outline"}
//                   size={"lg"}
//                   className="text-base px-8 h-12 gap-2"
//                 >
//                   <Briefcase size={18} />
//                   Learn More
//                 </Button>
//               </Link>
//             </div>

//             {/* trust indicator section */}
//             <div className="flex items-center gap-2 text-sm opacity-60 pt-4">
//               <span>✔️ Free to use</span>
//               <span>•</span>
//               <span>✔️ Verified emplyers</span>
//               <span>•</span>
//               <span>✔️ Secure platform</span>
//             </div>
//           </div>

//           {/* image section */}
//           <div className="flex-1 relative">
//             <div className="relative group">
//               <div className="absolute -inset-4 bg-blue-400 opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>

//               <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-background">
//                 <img
//                   src="/hero.jpeg"
//                   className="object-cover object-center w-full h-full transform transition-transform duration-500 group-hover:scale-105"
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
// "use client";

// import { ArrowRight, Briefcase, Search, TrendingUp } from "lucide-react";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { Button } from "./ui/button";

// const images = [
//   "/hero1.jpg",
//   "/hero2.jpg",
//   "/hero3.jpg",
//   "/hero4.jpg",
// ];

// const Hero = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 3000); // change every 3 sec

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">

//       {/* 🔥 background glow */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-5 py-16 md:py-24 relative">
//         <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

//           {/* LEFT SECTION */}
//           <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">

//             {/* badge */}
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-white/50 backdrop-blur-md shadow-sm">
//               <TrendingUp size={16} className="text-blue-600" />
//               <span className="text-sm font-medium">
//                 #1 Career Platform in India
//               </span>
//             </div>

//             {/* heading */}
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//               Build Your Future with{" "}
//               <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
//                 Prep2Career
//               </span>
//             </h1>

//             {/* description */}
//             <p className="text-lg md:text-xl leading-relaxed opacity-80 max-w-2xl">
//               Discover jobs, prepare for interviews, and grow your career with AI-powered tools, notes, and daily planning — all in one platform.
//             </p>

//             {/* stats */}
//             <div className="flex flex-wrap justify-center md:justify-start gap-8 py-4">
//               <div>
//                 <p className="text-3xl font-bold text-blue-600">10k+</p>
//                 <p className="text-sm opacity-70">Active Jobs</p>
//               </div>
//               <div>
//                 <p className="text-3xl font-bold text-blue-600">5k+</p>
//                 <p className="text-sm opacity-70">Companies</p>
//               </div>
//               <div>
//                 <p className="text-3xl font-bold text-blue-600">50k+</p>
//                 <p className="text-sm opacity-70">Users</p>
//               </div>
//             </div>

//             {/* buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 pt-2">
//               <Link href={"/jobs"}>
//                 <Button className="px-8 h-12 gap-2 text-base shadow-md hover:shadow-lg transition">
//                   <Search size={18} />
//                   Explore Jobs
//                   <ArrowRight className="group-hover:translate-x-1" />
//                 </Button>
//               </Link>

//               <Link href={"/about"}>
//                 <Button variant="outline" className="px-8 h-12 gap-2 text-base">
//                   <Briefcase size={18} />
//                   Learn More
//                 </Button>
//               </Link>
//             </div>

//             {/* trust */}
//             <div className="flex items-center gap-2 text-sm opacity-60 pt-4">
//               <span>✔ Free</span>
//               <span>•</span>
//               <span>✔ Verified</span>
//               <span>•</span>
//               <span>✔ Secure</span>
//             </div>
//           </div>

//           {/* RIGHT SECTION (AUTO IMAGE SLIDER) */}
//           <div className="flex-1 relative">
//             <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">

//               {images.map((img, index) => (
//                 <img
//                   key={index}
//                   src={img}
//                   alt=""
//                   className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
//                     index === current ? "opacity-100" : "opacity-0"
//                   }`}
//                 />
//               ))}

//               {/* overlay gradient */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client";

import { ArrowRight, Search, TrendingUp } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Briefcase,
  Users,
  Star,
} from "lucide-react";

const images = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg", "/hero4.jpg"];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);
const nextSlide = () => {
  setCurrent((prev) => (prev + 1) % images.length);
};

const prevSlide = () => {
  setCurrent((prev) =>
    prev === 0 ? images.length - 1 : prev - 1
  );
};
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      {/* background glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-5 py-16 md:py-24 relative">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* LEFT SECTION (same logic, slight UI polish) */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-white/60 backdrop-blur-md shadow-sm">
              <TrendingUp size={16} className="text-blue-600" />
              <span className="text-sm font-medium">
                #1 Career Platform in India
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Build Your Future with{" "}
              <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                Prep2Career
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed opacity-80 max-w-2xl">
              Discover jobs, prepare for interviews, and grow your career with
              AI-powered tools, notes, and daily planning.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-8 py-4">
              <div>
                <p className="text-3xl font-bold text-blue-600">10k+</p>
                <p className="text-sm opacity-70">Active Jobs</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">5k+</p>
                <p className="text-sm opacity-70">Companies</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">50k+</p>
                <p className="text-sm opacity-70">Users</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href={"/jobs"}>
                <Button className="px-8 h-12 gap-2 text-base shadow-md hover:shadow-lg transition">
                  <Search size={18} />
                  Explore Jobs
                  <ArrowRight />
                </Button>
              </Link>

              <Link href={"/about"}>
                <Button variant="outline" className="px-8 h-12 gap-2 text-base">
                  <Briefcase size={18} />
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-2 text-sm opacity-60 pt-4">
              <span>✔ Free</span>
              <span>•</span>
              <span>✔ Verified</span>
              <span>•</span>
              <span>✔ Secure</span>
            </div>
          </div>

     

        {/* ================= RIGHT SECTION ================= */}

<div className="flex-1 relative">

  <div className="relative h-[420px] md:h-[550px] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.25)] border border-white/20">

    {/* Images */}
    {images.map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`slide-${index}`}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1500ms] ease-in-out ${
          current === index
            ? "opacity-100 scale-105"
            : "opacity-0 scale-110"
        }`}
      />
    ))}

    {/* Gradient Overlay */}

    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

    {/* Previous Button */}

    <button
      onClick={prevSlide}
      className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 hover:bg-white/30 transition duration-300"
    >
      <ChevronLeft className="mx-auto text-white" />
    </button>

    {/* Next Button */}

    <button
      onClick={nextSlide}
      className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 hover:bg-white/30 transition duration-300"
    >
      <ChevronRight className="mx-auto text-white" />
    </button>

  

   
    {/* Slide Counter */}

    <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-lg px-4 py-2 rounded-full text-white font-semibold">

      {current + 1} / {images.length}

    </div>

    {/* Dots */}

    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">

      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrent(index)}
          className={`transition-all duration-500 rounded-full ${
            current === index
              ? "w-10 h-3 bg-white"
              : "w-3 h-3 bg-white/50 hover:bg-white"
          }`}
        />
      ))}

    </div>

  </div>

</div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
