import Link from "next/link";
import { Image, ImageKitProvider } from '@imagekit/next';
import Header from "~/components/home/navbar";
import Hero from "~/components/home/hero";
import Tools from "~/components/home/Tools";
import Steps from "~/components/home/Steps";
import Reviews from "~/components/home/Reviews";
import Pricing from "~/components/home/Pricing";
import CTA from "~/components/home/CTA";
import Footer from "~/components/home/Footer";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <Header />
      <Hero />
      <Tools />
      <Steps />
      <Reviews />
      <Pricing />
      <CTA />
      <Footer />
      
    </main>
  );
}
