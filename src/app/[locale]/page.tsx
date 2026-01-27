"use client";

import {
  Header,
  Hero,
  About,
  Doctors,
  Services,
  Facility,
  Contact,
  Footer,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Services />
        <Doctors />
        <Facility />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
