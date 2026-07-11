import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import Hero from "@/src/components/home/Hero";
import HowItWorks from "@/src/components/home/HowItWorks";
import PromoBanner from "@/src/components/home/PromoBanner";
import JobCategories from "@/src/components/home/JobCategories";
import RecentJobs from "@/src/components/home/RecentJobs";
import Testimonials from "@/src/components/home/Testimonials";
import RegisterCTA from "@/src/components/home/RegisterCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <PromoBanner />
      <JobCategories />
      <RecentJobs />
      <Testimonials />
      <RegisterCTA />
      <Footer />
    </>
  );
}