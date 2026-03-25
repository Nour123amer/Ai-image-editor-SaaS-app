import Link from "next/link";
import { Image, ImageKitProvider } from '@imagekit/next';
import Header from "~/components/home/navbar";
import Hero from "~/components/home/hero";
import Tools from "~/components/home/Tools";
import Steps from "~/components/home/Steps";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <Header />
      <Hero />
      <Tools />
      <Steps />
      
    </main>
  );
}
