import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import InnovationOrbit from "@/components/InnovationOrbit";
import Goal from "@/components/Goal";
import Timeline from "@/components/Timeline";
import Prizes from "@/components/Prizes";
import Workflows from "@/components/Workflows";
import CurriculumGrid from "@/components/CurriculumGrid";
import SubmissionGuidelines from "@/components/SubmissionGuidelines";
import SecureAccessForm from "@/components/SecureAccessForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      <Section id="mission">
        <Mission />
      </Section>

      <Section id="goal">
        <Goal />
      </Section>

      <Section id="innovation">
        <InnovationOrbit />
      </Section>

      <Section id="architecture">
        <Workflows />
      </Section>

      <Section id="curriculum">
        <CurriculumGrid />
      </Section>

      <Section id="timeline">
        <Timeline />
      </Section>

      <Section id="prizes">
        <Prizes />
      </Section>

      <Section id="guidelines">
        <SubmissionGuidelines />
      </Section>

      <Section id="apply">
        <SecureAccessForm />
      </Section>

      <Footer />
    </main>
  );
}
