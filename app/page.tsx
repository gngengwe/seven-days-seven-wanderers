import Hero from "./components/Hero";
import CoreIdea from "./components/CoreIdea";
import BookDescription from "./components/BookDescription";
import LanguageDiscovery from "./components/LanguageDiscovery";
import WeekGrid from "./components/WeekGrid";
import HowItWorks from "./components/HowItWorks";
import WhyItMatters from "./components/WhyItMatters";
import Audience from "./components/Audience";
import VisualStyle from "./components/VisualStyle";
import ProjectWanderers from "./components/ProjectWanderers";
import Signup from "./components/Signup";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      {/* — Explain the book — */}
      <Hero />
      <CoreIdea />
      <BookDescription />
      <HowItWorks />
      <WhyItMatters />
      <Audience />
      <VisualStyle />
      {/* — The spoiler: how it maps to other languages — */}
      <LanguageDiscovery />
      <WeekGrid />
      <ProjectWanderers />
      <Signup />
      <FinalCTA />
      <Footer />
    </main>
  );
}
