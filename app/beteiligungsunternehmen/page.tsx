import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import GrowthPanel from "@/components/GrowthPanel";
import Mittelstand from "@/components/Mittelstand";
import SituationTable from "@/components/SituationTable";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function BeteiligungsunternehmenPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Services />
        <GrowthPanel />
        <Mittelstand />
        <SituationTable />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
