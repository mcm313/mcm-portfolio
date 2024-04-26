import AboutMe from "./(pages)/AboutMe";
import Contact from "./(pages)/Contact";
import Footer from "./(pages)/Footer";
import LandingPage from "./(pages)/LandingPage";
import Navbar from "./(pages)/Navbar";
import Portfolio from "./(pages)/Portfolio";
import Skills from "./(pages)/Skills";

export default function Home() {
  return (
    <div className="bg-lime-50 relative flex w-full flex-col items-center justify-center overflow-x-hidden overflow-y-hidden">
      <Navbar />
      <LandingPage />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
