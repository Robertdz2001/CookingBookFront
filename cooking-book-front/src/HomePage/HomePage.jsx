import HeroSection from "./HeroSection/HeroSection";
import CardSection from "./CardsSection/CardsSection";
import CreateSection from "./CreateSection/CreateSection";
import ReviewsSection from "./ReviewsSection/ReviewsSection";
function HomePage() {
  return (
    <>
      <HeroSection />
      <main>
        <CardSection />
        <CreateSection />
        <ReviewsSection />
        <div style={{ height: 500 + "px" }}></div>
      </main>
    </>
  );
}

export default HomePage;
