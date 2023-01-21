import heroImage from "../../assets/hero.webp";
import "./styles/hero.css";
import SlideContent from './SlideContent'
const Hero = () => {
  return (
    <div className="hero min-screen-d-none" id="hero">
      <div className="p-relative w-full h-screen">
        <span className="img-container">
          <img src={heroImage} alt="" />
        </span>
        <SlideContent />
      </div>
    </div>
  );
};

export default Hero;
