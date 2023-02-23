import { useRef, useEffect, useState } from "react";

import classes from "./HomePage.module.css";

import HeroSection from "./HeroSection/HeroSection";
import CardSection from "./CardsSection/CardsSection";
import CreateSection from "./CreateSection/CreateSection";
import ReviewsSection from "./ReviewsSection/ReviewsSection";
import CallToAction from "./CallToAction/CallToAction";
import AccordionSection from "./AccordionSection/AccordionSection";
import RegisterModal from "./Modals/RegisterModal";
import LoginModal from "./Modals/LoginModal";

function HomePage() {
  const buttonRef = useRef(null);
  const heroRef = useRef(null);
  const headerRef = useRef(null);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    if (heroRef) {
      const observer = new IntersectionObserver((entries) => {
        if (headerRef && headerRef.current) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              headerRef.current.classList.add(classes.hidden);
            } else {
              headerRef.current.classList.remove(classes.hidden);
            }
          });
        }
      });

      observer.observe(heroRef.current);
    }
  }, [isLoginOpen, isRegisterOpen]);

  const openLogin = () => {
    setIsLoginOpen(true);
  };

  const closeLogin = (event) => {
    if (event.currentTarget === event.target) {
      setIsLoginOpen(false);
    }
  };

  const openRegister = () => {
    setIsRegisterOpen(true);
  };

  const closeRegister = (event) => {
    if (event.currentTarget === event.target) {
      setIsRegisterOpen(false);
    }
  };

  return (
    <>
      {isLoginOpen && (
        <LoginModal closeLogin={closeLogin} buttonRef={buttonRef} />
      )}
      {isRegisterOpen && (
        <RegisterModal closeRegister={closeRegister} buttonRef={buttonRef} />
      )}
      {!isLoginOpen && !isRegisterOpen && (
        <header
          className={`${classes["hero-header"]} ${classes["hidden"]}`}
          ref={headerRef}>
          <div className={classes["hero-logo"]}>
            <img src="/images/logo.png" className={classes["logo-image"]} />
          </div>
          <nav>
            <ul className={classes["nav-list"]}>
              <li>
                <button
                  className={`${classes["btn"]} ${classes["btn--secondary"]} ${classes["nav-button"]}`}
                  onClick={openLogin}>
                  Login
                </button>
              </li>
              <li>
                <button
                  className={`${classes["btn"]} ${classes["btn--main"]} ${classes["nav-button"]}`}
                  onClick={openRegister}>
                  Register
                </button>
              </li>
            </ul>
          </nav>
        </header>
      )}
      <HeroSection
        heroRef={heroRef}
        openLogin={openLogin}
        openRegister={openRegister}
      />
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
