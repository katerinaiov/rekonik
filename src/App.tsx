import "./App.css";

import Header from "./components/Header";

import HomeSection from "./sections/HomeSection";
import KeyFactsSection from "./sections/KeyFactsSection";
import ImplementationSection from "./sections/ImplementationSection";
import PartnersSection from "./sections/PartnersSection";
import FundingSection from "./sections/FundingSection";

function App() {
  return (
    <>
      <Header />

      <main>
        <section id="home">
          <HomeSection />
        </section>

        <section id="facts">
          <KeyFactsSection />
        </section>

        <section id="implementation">
          <ImplementationSection />
        </section>

        <section id="partners">
          <PartnersSection />
        </section>

        <section id="funding">
          <FundingSection />
        </section>
      </main>
    </>
  );
}

export default App;
