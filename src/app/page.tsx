import Navbar from "@/components/Navbar";
import CategorySection from "@/components/CategorySection";
import CarouselHeroSec from "@/components/CarouselHeroSec";
import LatestJobSec from "@/components/LatestJobSec";

export default function Home() {
  return (
    <>
      <Navbar/>
      <CarouselHeroSec/>
      <CategorySection/>
      <LatestJobSec/>
      <img src="/assets/img/Screenshot 2024-04-17 at 4.20 1.png" alt="" />
    </>
  );
}
