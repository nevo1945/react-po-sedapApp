import React from "react";

import HeroSection from "../../../sections/HeroSection";
import AboutSection from "../../../sections/AboutSection";
import TopProductsSection from "../../../sections/TopProductsSection";
import TestimonialsSection from "../../../sections/TestimonialsSection";
import MemberCheckSection from "../../../components/guest/components/MemberCheckSection"; // ✅ import baru

const GuestPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <TopProductsSection />
        <TestimonialsSection />
        <MemberCheckSection /> 
      </main>
    </div>
  );
};

export default GuestPage;
