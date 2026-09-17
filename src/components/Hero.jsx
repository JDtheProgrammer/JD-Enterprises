import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo1, smallHeroVideo1 } from "../utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo1 : heroVideo1
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo1);
    } else {
      setVideoSrc(heroVideo1);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1 });
    gsap.to("#cta", { opacity: 1, y: 0, delay: 0.5 });
  }, []);

  return (
    <>
      {/* <p id="hero" className="hero-title pb-10">JD Nterprises</p> */}
      <section className="relative w-full nav-height bg-black">
        <div className="h-5/6 w-full flex-center flex-col">
          <div className="md:w-10/12 w-9/12">
            <video
              className="absolute top-0 left-0 w-full object-cover "
              autoPlay
              muted
              playsInline={true}
              key={videoSrc}
              loop
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
        </div>

        <div
          id="cta"
          className="flex flex-col items-center opacity-0 translate-y-20"
        >
          <Link to="/about" className="btn">
            click here to learn about us
          </Link>{" "}
          {/* anchor element, href: speficies the destination of URL or source */}
          <p className="flex font-normal items-center text-xl">
            From audiovisual productions to research and development.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
/* 
ChatGPT:
<section className="relative w-full h-screen bg-black overflow-hidden">
      
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div
        id="hero-content"
        className="relative z-10 flex-center flex-col h-full px-5 text-white opacity-0"
      >
        <p className="hero-title text-4xl md:text-6xl">JD Enterprises</p>
        <p className="mt-4 text-lg md:text-xl text-center">
          Your Partner in Innovation
        </p>
        <button className="btn">Learn More</button>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
    </section>
*/

/* Use <section> for semantic, thematic content with a clear purpose and heading. 
Use <div> as a generic, non-semantic container for layout or styling.
h-5/6: Sets the height to 5/6 of the parent.
w-full: Sets the width to 100% of the parent.
flex-center: Centers content with flex, items-center, and justify-center.
flex-col: Arranges flex items in a column.
[]: empty dependency array; In React, a dependency array is an optional second argument that you can pass to the useEffect hook. 
It defines dependencies for the effect, specifying which values or variables inside the component should be watched for changes.
When any of the dependencies change, the effect will be re-executed
*/
