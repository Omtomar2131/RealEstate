import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="innerWidth hero-container">
        <div className="hero-left flexColStart">
          <div className="orange-circle"></div>
          <div className="hero-title">
            <motion.h1
            initial={{y: '2rem', opacity:0}}
            animate={{y:0, opacity: 1}}
            transition={{duration: 2, type: 'spring'}}>
              Discover <br />
              Most Suitable <br />
              Property
            </motion.h1>
          </div>
          <div className="hero-desc">
            <span>
              Find a variety of properties that suit you very easily
            </span> <br />
            <span>
              Forget all difficulties in finding a residence for you
            </span>
          </div>
          <div className="search-bar">
            <HiLocationMarker className="location-icon" />
            <input type="text" placeholder="Enter location" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColStart stat">
              <span className="count">
                <CountUp start={8800} end={9000} duration={4} /> +
              </span>
              <span className="text">Premium Products</span>
            </div>
            <div className="flexColStart stat">
              <span className="count">
                <CountUp start={4200} end={5023} duration={4} /> +
              </span>
              <span className="text">Happy Customers</span>
            </div>
            <div className="flexColStart stat">
              <span className="count">
                <CountUp end={20} /> +
              </span>
              <span className="text">Awards</span>
            </div> 
          </div> {/* Closing tag for stats section */}
        </div>
        <motion.div
        initial={{x: '7rem', opacity: 1}}
        animate={{x: 0, opacity:1}}
        transition={{duration: 2, type: 'spring'}} className="hero-right">
          <div className="image-container">
            <img src="/hero-image.png" alt="Hero" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
