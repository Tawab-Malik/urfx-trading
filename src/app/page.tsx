import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import FeaturedIn from "./Components/FeaturedIn";
import VideoSection from "./Components/VideoSection";
import Trades from "./Components/Trades";
import MiddleBar from "./Components/MiddleBar";
import CertifiedTrader from "./Components/CertifiedTrader";
import FAQs from "./Components/Faqs";
import TradingDashboard from "./Components/TradingDashbaord";
import Banner from "./Components/Banner";
import RealTmeTracking from "./Components/RealTmeTracking";
export default function Home() {
  return (
    <>
      <div className=" font-primary  max-w-[1440px] mx-auto">
        <Header />
        <HeroSection />
      </div>
      <div className="bg-gradient-to-b from-white/10 to-transparent font-primary">
        <FeaturedIn />
      </div>
      <div>
        <VideoSection thumbnailSrc="/images/video-thumbnail.png" />
        <Trades />
        <MiddleBar/>
        <CertifiedTrader/>
        <RealTmeTracking/>
        <TradingDashboard/>
        <FAQs/>
        <div className='bg-[url("/images/banner/shadownew.png")] bg-no-repeat bg-contain bg-bottom md:bg-top-right '>
        <Banner/>
        <Footer />
        </div>
        
      </div>
    </>

  );
}
