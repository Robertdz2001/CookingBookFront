import HeroSection from "./HeroSection/HeroSection";
import CardSection from "./CardsSection/CardsSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <main>
        <CardSection />
        {/* bloczek do wyjebania */}
        <div style={{ height: 500 + "px" }}></div>
      </main>
    </>
  );
}

export default HomePage;
