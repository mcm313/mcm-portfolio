import LandingPage from "./(pages)/LandingPage";
import Navbar from "./(pages)/Navbar";

export default function Home() {
  return (
    <div className="relative flex w-full flex-col overflow-x-hidden overflow-y-hidden">
      <Navbar />
      <LandingPage />
    </div>
  );
}
