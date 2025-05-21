import Businesses from "@/components/Businesses";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="text-black bg-white">
      <Header />
      <Hero />
      <Businesses />
      <Features />
      <Footer />
    </div>
  );
}
