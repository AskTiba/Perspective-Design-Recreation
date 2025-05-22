import Businesses from "@/components/Businesses";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Funnel from "@/components/Funnel";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Payyments from "@/components/Payyments";

export default function Home() {
  return (
    <div className="text-black bg-white">
      <Header />
      <Hero />
      <Businesses />
      <Features />
      <Funnel />
      <Payyments />
      <Footer />
    </div>
  );
}
