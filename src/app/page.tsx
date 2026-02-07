import {
  Header,
  Hero,
  Philosophy,
  Pillars,
  PackageSelector,
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
        <PackageSelector />
        <Treatments />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
