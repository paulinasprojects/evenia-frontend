import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import OurPartners from "@/components/home/our-partners";
import "@/styles/home-page.scss";

const HomePage = () => {
  return (
    <div className="">
      <Hero/>
      <Features/>
      <OurPartners/>
    </div>
  )
}

export default HomePage