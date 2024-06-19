import Navbar from "@/components/Navbar";
import CategorySection from "@/components/CategorySection";
import CarouselHeroSec from "@/components/CarouselHeroSec";
import LatestJobSec from "@/components/LatestJobSec";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <CarouselHeroSec/>
      <CategorySection/>
      <LatestJobSec/>
      <Footer/>
    </>
  );
}
