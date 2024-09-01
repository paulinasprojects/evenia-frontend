import "@/styles/hero.scss";
import heroImage from '/hero-image.png';
import herorectangle from '/hero-rectangle.png';
import herolines from '/hero-lines.png';
import heroellipse from '/hero-elliplse.png';
import herovector from '/hero-vector.png';

const Hero = () => {
  return (
    <div className="hero-container">
        {/* Left */}
        <div className="hero-left">
          <h1>The Biggest </h1>
          <h2>Virtual Event</h2>
          <span>
            Book and learn helpful tips from 3,168+ mentors in <br />
            world-class companies with our global community
          </span>
          <button className="hero-explore">Explore now</button>
        </div>
        {/* Right */}
        <div className="hero-right">
          <img src={heroImage} alt="" className="hero-image" />
          <img src={herorectangle} alt="" className="hero-rectangle" />
          <img src={herolines} alt="" className="hero-lines" />
          <img src={heroellipse} alt="" className="hero-ellipse" />
          <img src={herovector} alt="" className="hero-vector" />
        </div>
    </div>
  )
}

export default Hero