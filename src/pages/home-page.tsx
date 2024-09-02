import Events from "@/components/home/events";
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
      <Events/>
    </div>
  )
}

export default HomePage