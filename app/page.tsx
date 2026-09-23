import LPHeader from "@/components/LPHeader";
import LPHero from "@/components/LPHero";
import LPProblem from "@/components/LPProblem";
import LPDifferenzierung from "@/components/LPDifferenzierung";
import LPVorgehensweise from "@/components/LPVorgehensweise";
import LPWhy from "@/components/LPWhy";
import LPTrust from "@/components/LPTrust";
import LPContact from "@/components/LPContact";
import LPFooter from "@/components/LPFooter";

export default function LandingPage() {
  return (
    <>
      <LPHeader />
      <main>
        <LPHero />
        <LPProblem />
        <LPDifferenzierung />
        <LPVorgehensweise />
        <LPWhy />
        <LPTrust />
        <LPContact />
      </main>
      <LPFooter />
    </>
  );
}
