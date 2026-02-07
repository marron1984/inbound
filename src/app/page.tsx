import {
  Header,
  Hero,
  Philosophy,
  Pillars,
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
        <Contact />
      </main>
      <Footer />
    </>
  );
}
