// import Hero from "@/components/home/Hero";
// import FeatureStrip from "@/components/home/FeatureStrip";
// import WhyChoose from "@/components/home/WhyChoose";
// import FlavoursHighlight from "@/components/home/FlavoursHighlight";
// import WaysToEnjoy from "@/components/home/WaysToEnjoy";
// import Reviews from "@/components/home/Reviews";
// import About from "@/components/home/About";
// import CTA from "@/components/home/CTA";
// import ChatWidget from "@/components/chat/ChatWidget";

// export default function Home() {
//   return (
//     <main className="relative">
//       <Hero />
//       <FeatureStrip />
//       <WhyChoose />
//       <FlavoursHighlight />
//       <WaysToEnjoy />
//       <Reviews />
//       <About />
//       <CTA />
//       <ChatWidget />
//     </main>
//   );
// }



import Hero from "@/components/home/Hero";
import FeatureStrip from "@/components/home/FeatureStrip";
import WhyChoose from "@/components/home/WhyChoose";
import FlavoursHighlight from "@/components/home/FlavoursHighlight";
import WaysToEnjoy from "@/components/home/WaysToEnjoy";
import Reviews from "@/components/home/Reviews";
import About from "@/components/home/About";
import CTA from "@/components/home/CTA";
import ChatWidget from "@/components/chat/ChatWidget";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <FeatureStrip />
      <FlavoursHighlight />
      <WhyChoose />
      <WaysToEnjoy />
      <Reviews />
      <About />
      <CTA />
      <ChatWidget />
    </main>
  );
}