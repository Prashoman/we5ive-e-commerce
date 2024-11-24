import BigDealSection from "../components/ui/BigDealSection/BigDealSection";
import CollectionSection from "../components/ui/CollectionSection/CollectionSection";
import HeroSection from "../components/ui/HeroSection/HeroSection";
import NewArrival from "../components/ui/NewArrival/NewArrival";
import OfferSection from "../components/ui/OfferSection/OfferSection";
import ShippingSection from "../components/ui/ShippingSection/ShippingSection";


export default function Home() {
  return (
   <>
   <HeroSection/>
   <ShippingSection/>
   <NewArrival/>
   <OfferSection/>
   <CollectionSection/>
   <BigDealSection/>
   </>
  );
}
