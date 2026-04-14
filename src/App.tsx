/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import IntroScreen from "./components/IntroScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutWhy from "./components/AboutWhy";
import CoursesFaculty from "./components/CoursesFaculty";
import ResultsTestimonials from "./components/ResultsTestimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  return (
    <div className="min-h-screen bg-white selection:bg-accent/30 selection:text-primary">
      {!isIntroComplete && (
        <IntroScreen onComplete={() => setIsIntroComplete(true)} />
      )}
      
      {isIntroComplete && (
        <div className="animate-in fade-in duration-1000">
          <Navbar />
          <main>
            <Hero />
            <AboutWhy />
            <CoursesFaculty />
            <ResultsTestimonials />
            <Contact />
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      )}
    </div>
  );
}

