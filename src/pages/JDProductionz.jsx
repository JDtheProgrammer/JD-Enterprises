import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { Route } from "react-router-dom";

const videos = [
  {
    id: 1,
    src: "/assets/videos/SY_2024.mp4",
    description: "The beauty of fractals in mathematics.",
    data: "This video explores the Mandelbrot set, a famous fractal that reveals infinite complexity.",
  },
  {
    id: 2,
    src: "/assets/videos/Mustang_EcoBoost_ForSale_2016.mp4",
    description: "The physics of motion and aerodynamics.",
    data: "This video highlights the principles of drag, lift, and acceleration in car design.",
  },
  {
    id: 3,
    src: "/assets/videos/HORIZONTAL_1.mp4",
    description: "The elegance of harmonic motion in physics.",
    data: "This video demonstrates the principles of oscillations and wave mechanics.",
  },
];

const Navbar = ({ isBlurred }) => {
  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-black text-white z-50 transition-transform duration-500 ${
        isBlurred ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {" "}
    </nav>
  );
};

const JDProductionz = ({ isBlurred, setIsBlurred }) => {
  const videoRefs = useRef([]);
  const videoContainersRef = useRef([]);
  const [videoStates, setVideoStates] = useState(videos.map(() => "orbiting"));
  const [isMuted, setIsMuted] = useState(videos.map(() => true));
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getOrbitRadius = () => {
    if (windowWidth < 640) return 140;
    if (windowWidth < 1024) return 300;
    return 350;
  };
  const orbitRadius = 350;
  const pathwaysRef = useRef([]);
  const spinningDiskRef = useRef(null);
  const pulsingRingRef = useRef(null);

  useEffect(() => {
    gsap.to(spinningDiskRef.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "linear",
    });

    gsap.to(pulsingRingRef.current, {
      scale: 1.1,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    pathwaysRef.current.forEach((pathway, index) => {
      gsap.fromTo(
        pathway,
        { strokeDasharray: 300, strokeDashoffset: 300, opacity: 0.3 },
        {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.2,
        }
      );
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        // Find the currently fullscreen video
        const fullscreenIndex = videoStates.findIndex(
          (state) => state === "fullscreen"
        );

        if (fullscreenIndex !== -1) {
          const videoEl = videoRefs.current[fullscreenIndex];

          if (videoEl) {
            // Reset the video size and position
            const angle = (fullscreenIndex * 360) / videos.length;
            const x = Math.cos((angle * Math.PI) / 180) * orbitRadius;
            const y = Math.sin((angle * Math.PI) / 180) * orbitRadius;

            document.body.style.overflow = "auto";

            gsap.to(videoEl, {
              width: "100%",
              height: "100%",
              top: "auto",
              left: "auto",
              x: 0,
              y: 0,
              position: "absolute",
              zIndex: 20, // Reset z-index
              duration: 1,
              ease: "power2.out",
            });

            // Pause the video
            videoEl.pause();

            // Remove the blur effect
            setIsBlurred(false);

            // Update the state to "orbiting"
            setVideoStates((prev) =>
              prev.map((state, i) =>
                i === fullscreenIndex ? "orbiting" : state
              )
            );
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [videoStates, videoRefs, setIsBlurred]);

  const handleVideoClick = (index) => {
    const currentState = videoStates[index];
    const videoEl = videoRefs.current[index];

    if (!videoEl) return;

    if (currentState === "orbiting") {
      // Play the video
      videoEl.play();
      document.body.style.overflow = "hidden";

      // Expand the video itself and center it
      gsap.to(videoEl, {
        width: "100vw", // Fullscreen width
        height: "100vh", // Fullscreen height
        top: "50%", // Center vertically
        left: "50%", // Center horizontally
        x: "-50%", // Adjust for centering
        y: "-50%", // Adjust for centering
        position: "fixed", // Make the video overlay the entire screen
        zIndex: 9999, // Ensure it appears above all other elements
        duration: 1,
        ease: "power2.out",
      });

      // Blur the background
      setIsBlurred(true);

      // Update the state to "fullscreen"
      setVideoStates((prev) =>
        prev.map((state, i) => (i === index ? "fullscreen" : state))
      );
    } else {
      // Return the video to its orbiting position
      const angle = (index * 360) / videos.length;
      const x = Math.cos((angle * Math.PI) / 180) * orbitRadius;
      const y = Math.sin((angle * Math.PI) / 180) * orbitRadius;

      document.body.style.overflow = "auto";

      // Reset the video size and position
      gsap.to(videoEl, {
        width: "100%",
        height: "100%",
        top: "auto",
        left: "auto",
        x: 0,
        y: 0,
        position: "absolute",
        zIndex: 20,
        duration: 1,
        ease: "power2.out",
      });

      // Pause the video
      videoEl.pause();

      // Remove the blur effect
      setIsBlurred(false);

      // Update the state to "orbiting"
      setVideoStates((prev) =>
        prev.map((state, i) => (i === index ? "orbiting" : state))
      );
    }
  };

  const isMobile = windowWidth < 640;
  const svgSize = isMobile ? 320 : 800;
  const center = isMobile ? 160 : 400;
  const videoWidth = isMobile ? 80 : 400;
  const videoHeight = isMobile ? 44 : 220;

  return (
    <div className="pt-[160px] sm:pt-[280px] relative min-h-screen bg-black overflow-x-hidden">
      {/* Navbar */}
      <Navbar isBlurred={isBlurred} />

      {/* Orbiting Section: Brain + Pathways */}
      <section className="relative h-[300px] sm:h-[800px] flex justify-center items-center box-border">
        {/* Brain */}
        <img
          src="/assets/images/cyberBrain.png"
          alt="CyberBrain"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] sm:w-[300px] sm:h-[300px] object-contain z-10"
        />

        {/* Pathways */}
        <svg
          className="absolute w-full h-full z-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${svgSize} ${svgSize}`}
        >
          {videos.map((video, index) => {
            const angle = (index * 360) / videos.length;
            const x1 =
              center + Math.cos((angle * Math.PI) / 180) * (isMobile ? 40 : 70);
            const y1 =
              center + Math.sin((angle * Math.PI) / 180) * (isMobile ? 40 : 70);
            const x2 =
              center +
              Math.cos((angle * Math.PI) / 180) * (isMobile ? 80 : 300);
            const y2 =
              center +
              Math.sin((angle * Math.PI) / 180) * (isMobile ? 80 : 300);

            return (
              <path
                key={index}
                ref={(el) => (pathwaysRef.current[index] = el)}
                d={`M${center},${center} L${x1},${y1} Q${(x1 + x2) / 2},${
                  (y1 + y2) / 2 - 30
                } ${x2},${y2}`}
                stroke="url(#gradient)"
                strokeWidth="3"
                fill="none"
              />
            );
          })}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%">
              <stop offset="0%" stopColor="#00FFFF" />
              <stop offset="50%" stopColor="#0000FF" />
              <stop offset="100%" stopColor="#FF00FF" />
            </linearGradient>
          </defs>
        </svg>

        {/* Videos Section */}
        <div className="py-4 sm:py-20 flex justify-center items-center box-border">
          <div className="relative mx-auto w-[320px] h-[320px] sm:w-[800px] sm:h-[800px] rounded-full flex justify-center items-center overflow-visible box-border">
            {videos.map((video, index) => {
              const angle = (index * 360) / videos.length;
              const orbitRadius = getOrbitRadius();
              const isDesktop = windowWidth >= 1024;
              // Use the same center as SVG
              const x2 =
                center + Math.cos((angle * Math.PI) / 180) * orbitRadius;
              const y2 =
                center +
                Math.sin((angle * Math.PI) / 180) * orbitRadius +
                (isDesktop && angle === 240 ? -80 : 0); // move bottom video down

              return (
                <div
                  key={video.id}
                  ref={(el) => (videoContainersRef.current[index] = el)}
                  className={`absolute ${
                    videoStates[index] === "fullscreen"
                      ? "z-50 fixed inset-0"
                      : "z-20"
                  }`}
                  style={
                    videoStates[index] === "fullscreen"
                      ? {}
                      : {
                          top: "50%",
                          left: "50%",
                          transform: `translate(${
                            x2 - center - videoWidth / 2
                          }px, ${y2 - center - videoHeight / 2}px)`,
                        }
                  }
                  onClick={() => handleVideoClick(index)}
                >
                  <div className="relative rounded-xl w-[80px] h-[44px] sm:w-[400px] sm:h-[220px]">
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={video.src}
                      muted={isMuted[index]}
                      className={`absolute inset-0 w-full h-full object-cover ${
                        videoStates[index] === "fullscreen"
                          ? "fullscreen-video"
                          : ""
                      }`}
                    />
                    {/* Mute/Unmute Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const updatedMutedState = !isMuted[index];
                        setIsMuted((prev) =>
                          prev.map((muted, i) =>
                            i === index ? updatedMutedState : muted
                          )
                        );
                        const videoEl = videoRefs.current[index];
                        if (videoEl) {
                          videoEl.muted = updatedMutedState;
                          if (!updatedMutedState) videoEl.play();
                        }
                      }}
                      className={`absolute ${
                        videoStates[index] === "fullscreen"
                          ? "top-2 right-2 sm:top-4 sm:right-4"
                          : "bottom-2 left-2 sm:bottom-4 sm:left-4"
                      } bg-black bg-opacity-70 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm hover:bg-opacity-90 z-50`}
                    >
                      {isMuted[index] ? "Unmute" : "Mute"}
                    </button>
                  </div>
                  <div className="mt-2 text-center text-[11px] sm:text-[17px] text-gray-400">
                    {video.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-10 sm:mt-[120px] relative w-full py-10 sm:py-20 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="flex flex-col items-center justify-center space-y-6">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 animate-pulse">
            Get in Touch
          </h2>
          <div className="relative w-3/4 md:w-1/2 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-600 animate-glow" />
          <p className="text-base sm:text-lg md:text-xl text-gray-300 text-center">
            Have questions or want to collaborate? Click below to reach out!
          </p>
          <a
            href="/contact"
            className="relative px-4 py-2 sm:px-8 sm:py-4 text-base sm:text-lg md:text-xl font-semibold text-black bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Contact Us
          </a>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-cyan-400 opacity-20 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-purple-600 opacity-20 blur-3xl animate-pulse" />
        </div>
      </section>
    </div>
  );
};

export default JDProductionz;
