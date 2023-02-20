import HeroSection from "./HeroSection/HeroSection";
import CardSection from "./CardsSection/CardsSection";
import CreateSection from "./CreateSection/CreateSection";
import ReviewsSection from "./ReviewsSection/ReviewsSection";
import CallToAction from "./CallToAction/CallToAction";

function HomePage() {
  return (
    <>
      <HeroSection />
      <main>
        <CardSection />
        <CreateSection />
        <ReviewsSection />
        <CallToAction />
        <div style={{ height: 500 + "px" }}></div>
      </main>
    </>
  );
}

export default HomePage;
