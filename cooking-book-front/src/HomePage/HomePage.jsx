import { useRef, useEffect } from "react";

import HeroSection from "./HeroSection/HeroSection";
import CardSection from "./CardsSection/CardsSection";
import CreateSection from "./CreateSection/CreateSection";
import ReviewsSection from "./ReviewsSection/ReviewsSection";
import CallToAction from "./CallToAction/CallToAction";
import AccordionSection from "./AccordionSection/AccordionSection";
import classes from "./HomePage.module.css";
import classes2 from "./HeroSection/HeroSection.module.css";

function HomePage() {
  const heroRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    if (heroRef && headerRef) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            headerRef.current.classList.add(classes.hidden);
          } else {
            headerRef.current.classList.remove(classes.hidden);
          }
        });
      });
      observer.observe(heroRef.current);
    }
  }, []);
  return (
    <>
      <header className={`${classes["hero-header"]} `} ref={headerRef}>
        <div className={classes2["hero-logo"]}>
          <img src="/images/logo.png" className={classes2["logo-image"]} />
        </div>
        <nav>
          <ul className={classes2["nav-list"]}>
            <li>
              <button
                className={`${classes2["btn"]} ${classes2["btn--secondary"]} ${classes2["nav-button"]}`}>
                Login
              </button>
            </li>
            <li>
              <button
                className={`${classes2["btn"]} ${classes2["btn--main"]} ${classes2["nav-button"]}`}>
                Register
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <HeroSection heroRef={heroRef} />
      <main>
        <CardSection />
        <CreateSection />
        <ReviewsSection />
        <CallToAction />
        <AccordionSection />
        <footer>
          <p className={classes["footer-text"]}>
            Copyright © 2023 by CookingBook, Inc. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}

export default HomePage;
