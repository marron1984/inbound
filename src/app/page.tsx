import {
  Header,
  Hero,
  Philosophy,
  Pillars,
  Programs,
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
        <Contact />
      </main>
      <Footer />
    </>
  );
}
