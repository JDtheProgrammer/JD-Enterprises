import React, { useRef, useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { hightlightsSlides } from "../constants";
import { pauseImg, playImg, replayImg } from "../utils";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SLIDE_DURATION = 200; // ms, matches animation duration with overlap

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const [videoId, setVideoId] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [slideDir, setSlideDir] = useState(""); // "left" or "right" or ""
  const [prevVideoId, setPrevVideoId] = useState(null); // for animation
  const [isTransitioning, setIsTransitioning] = useState(false); // for glow effect

  const total = hightlightsSlides.length;
  const prevId = (videoId - 1 + total) % total;
  const nextId = (videoId + 1) % total;

  // Slide left (previous)
  const handlePrev = () => {
    setSlideDir("left");
    setPrevVideoId(videoId);
    setIsTransitioning(true);
    setTimeout(() => {
      setIsEnd(false);
      setVideoId((prev) => (prev === 0 ? total - 1 : prev - 1));
      setIsPlaying(false);
      setSlideDir("");
      setPrevVideoId(null);
      setIsTransitioning(false);
    }, SLIDE_DURATION);
  };

  // Slide right (next)
  const handleNext = () => {
    setSlideDir("right");
    setPrevVideoId(videoId);
    setIsTransitioning(true);
    setTimeout(() => {
      setIsEnd(false);
      setVideoId((prev) => (prev === total - 1 ? 0 : prev + 1));
      setIsPlaying(false);
      setSlideDir("");
      setPrevVideoId(null);
      setIsTransitioning(false);
    }, SLIDE_DURATION);
  };

  // Play/pause/replay logic
  const handlePlayPause = () => {
    const video = videoRef.current[videoId];
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  const handleReplay = () => {
    const video = videoRef.current[videoId];
    if (!video) return;
    video.currentTime = 0;
    video.play();
    setIsPlaying(true);
    setIsEnd(false);
  };

  useEffect(() => {
    const video = videoRef.current[videoId];
    if (video) {
      setIsPlaying(false);
      setIsEnd(false);
    }
  }, [videoId]);

  // Swipe support
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    delta: 10, // Minimum swipe distance
    swipeDuration: SLIDE_DURATION, // Match animation duration
    trackMouse: true, // Support mouse dragging
  });

  // Render main video with animations
  const renderMainVideo = () => {
    if (!slideDir || prevVideoId === null) {
      // Not sliding, show current video
      return (
        <video
          ref={(el) => (videoRef.current[videoId] = el)}
          src={hightlightsSlides[videoId].video}
          controls={false}
          preload="auto"
          className="w-full h-full rounded-xl will-change-transform will-change-opacity"
          style={{ display: "block" }}
          onEnded={() => setIsEnd(true)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      );
    }

    // Sliding, show both videos with animations
    const oldVideo = (
      <video
        key={`old-${prevVideoId}-${slideDir}`}
        src={hightlightsSlides[prevVideoId].video}
        muted
        controls={false}
        autoPlay={false} // Pause during slide-out
        className={`w-full h-full rounded-xl absolute top-0 left-0 z-10 will-change-transform will-change-opacity ${
          slideDir === "left"
            ? "animate-slide-out-right"
            : "animate-slide-out-left"
        }`}
        style={{ display: "block" }}
      />
    );
    const newVideo = (
      <video
        key={`new-${videoId}-${slideDir}`}
        ref={(el) => (videoRef.current[videoId] = el)}
        src={hightlightsSlides[videoId].video}
        controls={false}
        preload="auto"
        className={`w-full h-full rounded-xl absolute top-0 left-0 z-20 will-change-transform will-change-opacity ${
          slideDir === "left"
            ? "animate-slide-in-left"
            : "animate-slide-in-right"
        }`}
        style={{ display: "block" }}
        onEnded={() => setIsEnd(true)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    );
    return (
      <div className="relative w-full h-full">
        {oldVideo}
        {newVideo}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative flex items-center justify-center w-full h-[100vw] max-h-[70vh] min-h-[260px] sm:min-h-[400px] ">
        {/* Previous video (left, faded) */}
        <video
          src={hightlightsSlides[prevId].video}
          muted
          controls={false}
          preload="auto"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[450px] w-[20vw] max-w-[1200px] opacity-50 scale-90 rounded-xl 
          pointer-events-none transition-all duration-300 will-change-transform will-change-opacity"
          style={{ zIndex: 10 }}
        />
        {/* Main video container with glow during transition */}
        <div
          {...handlers}
          className={` z-20 rounded-full  ${
            isTransitioning ? "animate-cloud-pop" : ""
          }`}
          style={{
            minHeight: "220px",
            maxHeight: "100vh",
            overflow: "visible",
          }}
        >
          {renderMainVideo()}
        </div>
        {/* Next video (right, faded) */}
        <video
          src={hightlightsSlides[nextId].video}
          muted
          controls={false}
          preload="auto"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[450px] w-[20vw] max-w-[1200px] opacity-50 scale-90 
          rounded-xl pointer-events-none transition-all duration-300 will-change-transform 
          will-change-opacity"
          style={{ zIndex: 10 }}
        />
        {/* Controls */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-6 z-30">
          <button
            onClick={handlePrev}
            className="rounded-xl px-8 py-[9px] bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white hover:from-cyan-700 hover:to-black transition flex items-center gap-1 text-2xl"
          >
            <FaArrowLeft className="text-3xl" /> Previous
          </button>
          <button
            onClick={isEnd ? handleReplay : handlePlayPause}
            className="rounded-xl px-5 py-[9px] bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white hover:from-cyan-700 hover:to-black transition flex items-center gap-1 text-2xl"
          >
            <img
              src={isEnd ? replayImg : !isPlaying ? playImg : pauseImg}
              alt={isEnd ? "replay" : !isPlaying ? "play" : "pause"}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 inline"
            />
          </button>
          <button
            onClick={handleNext}
            className="rounded-xl px-8 py-[9px] bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white hover:from-cyan-700 hover:to-black transition flex items-center gap-1 text-2xl"
          >
            Next <FaArrowRight className="text-3xl" />
          </button>
        </div>
      </div>
      {/* Description and dots */}
      <div className="mt-2 text-gray-400 text-center">
        {hightlightsSlides[videoId].textLists &&
          hightlightsSlides[videoId].textLists.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
      </div>
      <div className="flex gap-2 mt-4">
        {hightlightsSlides.map((_, i) => (
          <span
            key={i}
            onClick={() => setVideoId(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === videoId ? "bg-cyan-400" : "bg-gray-400"
            }`}
            style={{ display: "inline-block" }}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
