"use client";
import CarrerGuide from "@/components/carrer-guide";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import Loading from "@/components/loading";
import ResumeAnalyzer from "@/components/resume-analyser";
import { Button } from "@/components/ui/button";
import { useAppData } from "@/context/AppContext";
import React from "react";

const Home = () => {
  const { loading } = useAppData();
  if (loading) return <Loading />;
  return (
    <div>
      <Hero />
      <div className="bg-background flex flex-col lg:flex-row gap-2">
  <div className="flex-1" id="services">
    <CarrerGuide />
  </div>

  <div className="flex-1">
    <ResumeAnalyzer />
  </div>
</div>
      
      <Footer />
    </div>
  );
};

export default Home;
