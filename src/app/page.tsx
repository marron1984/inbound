import {
  Header,
  Hero,
  Philosophy,
  Pillars,
  Programs,
  Treatments,
  Contact,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Pillars />
        <Programs />
        <Treatments />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
