import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/lib/fontawesome'; // path where you saved the config


import HeroSection from "@/components/HeroSection";
import UpcomingEvents from '@/components/Events';
import VideoPlayer from '@/components/VideoPlayer';
import AwardsSlider from '@/components/AwardsSlider';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f9fdff] to-white">
      <Header />

      <HeroSection />
      <UpcomingEvents />
      {/* <VideoPlayer /> */}
      <AwardsSlider /> <br />
      <Footer />
    </main>
  );
}
