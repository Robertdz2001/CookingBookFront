import HeroSection from "./HeroSection/HeroSection";
import CardSection from "./CardsSection/CardsSection";
import CreateSection from "./CreateSection/CreateSection";
function HomePage() {
  return (
    <>
      <HeroSection />
      <main>
        <CardSection />
        <CreateSection />
        <div style={{ height: 500 + "px" }}></div>
      </main>
    </>
  );
}

export default HomePage;
