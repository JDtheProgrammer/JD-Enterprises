import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

const audios = [
  {
    id: 1,
    src: "/assets/audios/audio1.mp3",
    title: "String Resonance",
    description: "Feel the resonance of the string.",
    data: {
      frequencyRange: "20 Hz - 21.3 kHz",
      LUFS: "-14.00 integrated",
      duration: "5:58",
      physics:
        "A string that is under more tension will vibrate more rapidly, creating pressure waves that are closer together and have a higher frequency." +
        " Thicker or longer strings vibrate more slowly, creating pressure waves that are farther apart and have a lower frequency.",
    },
  },
  {
    id: 2,
    src: "/assets/audios/audio2.mp3",
    title: "Cosmic Vibrations",
    description: "Experience the sound of the universe.",
    data: {
      frequencyRange: "440 Hz - 9.7 kHz",
      LUFS: "-7.29 Integrated",
      duration: " 00:25 ",
      physics:
        "Sound cannot travel in space" +
        "Sound cannot travel in space. Space is a near-perfect vacuum with very few particles," +
        " making it impossible for sound waves to propagate. Sci-fi movies often add sound effects in space for dramatic purposes" +
        " but in reality, space is silent due to the absence of a medium for sound waves to move through.",
    },
  },
  {
    id: 3,
    src: "/assets/audios/audio3.mp3",
    title: "Quantum Violins",
    description: "Dive into the rhythm of quantum mechanics.",
    data: {
      frequencyRange: "100 Hz - 18.9 kHz",
      LUFS: "-14.55 Integrated",
      duration: "3:15",
      physics:
        "The vibrations from the string are transmitted through the bridge to the body of the violin." +
        " The bridge acts as a mechanical coupler that transfers energy efficiently.",
    },
  },
];

const jdSocialMedia = [
  { name: "Facebook", link: "https://facebook.com/jdproductionz" },
  { name: "Twitter", link: "https://twitter.com/jdproductionz" },
  { name: "Instagram", link: "https://instagram.com/jdproductionz" },
  { name: "LinkedIn", link: "https://linkedin.com/company/jdproductionz" },
];

const pftSocialMedia = [
  { name: "Facebook", link: "https://facebook.com/pft" },
  { name: "Twitter", link: "https://twitter.com/pft" },
  { name: "Instagram", link: "https://instagram.com/pft" },
  { name: "LinkedIn", link: "https://linkedin.com/company/pft" },
];

const PFT = () => {
  const waveSurferRefs = useRef([]);
  const [audioStatus, setAudioStatus] = useState(
    Array(audios.length).fill("Paused") // Initialize all statuses as "Paused"
  );

  useEffect(() => {
    // Initialize WaveSurfer for each audio
    audios.forEach((audio, index) => {
      waveSurferRefs.current[index] = WaveSurfer.create({
        container: `#waveform-${audio.id}`,
        waveColor: "#4F46E5", // Indigo color for the waveform
        progressColor: "#9333EA", // Purple color for the progress
        cursorColor: "#FFFFFF", // White cursor
        barWidth: 2,
        barHeight: 1,
        responsive: true,
        height: 80,
      });

      waveSurferRefs.current[index].load(audio.src);
      waveSurferRefs.current[index].setVolume(1); // Set full volume
    });

    // Cleanup WaveSurfer instances on component unmount
    return () => {
      waveSurferRefs.current.forEach((waveSurfer) => waveSurfer.destroy());
    };
  }, []);

  const handleMouseEnter = (index) => {
    console.log(`Playing audio ${index}`);
    waveSurferRefs.current[index].play();
    setAudioStatus((prevStatus) =>
      prevStatus.map((status, i) => (i === index ? "Playing" : status))
    );
  };

  const handleMouseLeave = (index) => {
    console.log(`Pausing audio ${index}`);
    waveSurferRefs.current[index].pause();
    setAudioStatus((prevStatus) =>
      prevStatus.map((status, i) => (i === index ? "Paused" : status))
    );
  };

  return (
    <section className="pt-80 sm:pt-44 pb-[120px] relative min-h-screen bg-gradient-radial from-blue-900 via-indigo-950 to-black text-white">
      {/* String Theory Background */}
      <div className="absolute inset-0 z-0">
        {/* Animated Strings */}
        <div className="absolute inset-0 z-10 flex justify-center items-center">
          <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-500 via-indigo-700 to-purple-900 opacity-50 animate-spin-slow"></div>
        </div>
        <div className="absolute inset-0 z-10 flex justify-center items-center">
          <div className="w-[800px] h-[800px] rounded-full border-4 border-indigo-500 opacity-30 animate-pulse"></div>
        </div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-20">
        {/* Instruction Title */}
        <h2 className="text-center text-2xl font-semibold text-indigo-300 mb-6">
          Hover over an audio to play it. Move your cursor away to pause it.
        </h2>

        {/* Audio Grid */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-gray-800/80 rounded-lg shadow-lg p-6">
          <h2 className="text-center text-4xl font-bold text-indigo-300 tracking-widest mb-10 animate-pulse">
            Explore the Sounds of Art and Science
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {audios.map((audio, index) => (
              <div
                key={audio.id}
                className="relative border border-gray-500 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {/* Waveform Visualization */}
                <div
                  id={`waveform-${audio.id}`}
                  className="p-4 bg-gray-900/70"
                ></div>

                {/* Audio Status */}
                <p className="text-center text-sm text-indigo-400 mt-2">
                  {audioStatus[index]}
                </p>

                {/* Audio Title */}
                <div className="p-4 bg-gray-900/70 rounded-b-lg border-t border-indigo-500">
                  <h3 className="text-center text-xl font-semibold text-indigo-300">
                    {audio.title}
                  </h3>
                  <p className="text-center text-sm text-gray-400 mt-2">
                    {audio.description}
                  </p>
                </div>

                {/* Analytical Data */}
                <div className="p-4 bg-gray-800 rounded-lg mt-4">
                  <h4 className="text-center text-lg font-bold text-indigo-300 mb-4">
                    Analytical Data
                  </h4>
                  <ul className="text-sm text-gray-400 space-y-3">
                    {/* Frequency Range */}
                    <li className="flex items-center">
                      <span className="text-indigo-300 font-bold w-1/3">
                        Frequency:
                      </span>
                      <div className="flex-1 bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-indigo-500 h-full"
                          style={{
                            width: audio.data.frequencyRange.includes("Hz")
                              ? `${
                                  parseInt(
                                    audio.data.frequencyRange.split(" ")[2]
                                  ) / 10
                                }%`
                              : "50%",
                          }}
                        ></div>
                      </div>
                      <span className="ml-2">{audio.data.frequencyRange}</span>
                    </li>

                    {/* Amplitude */}
                    <li className="flex items-center">
                      <span className="text-indigo-300 font-bold w-1/3">
                        LUFS:
                      </span>
                      <span className="flex-1 text-center">
                        {audio.data.LUFS}
                      </span>
                    </li>

                    {/* Duration */}
                    <li className="flex items-center">
                      <span className="text-indigo-300 font-bold w-1/3">
                        Duration:
                      </span>
                      <span className="flex-1 text-center">
                        {audio.data.duration}
                      </span>
                    </li>

                    {/* Physics */}
                    <li className="flex items-start">
                      <span className="text-indigo-300 font-bold w-1/3">
                        Physics:
                      </span>
                      <span className="flex-1">{audio.data.physics}</span>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PFT Contact Section */}
      <section className="mt-[120px] relative w-full py-20 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="flex flex-col items-center justify-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 animate-pulse">
            Get in Touch with PFT
          </h2>
          <div className="relative w-3/4 md:w-1/2 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-600 animate-glow" />
          <p className="text-lg md:text-xl text-gray-300 text-center">
            Have questions about PFT or want to collaborate? Click below to
            reach out!
          </p>
          <a
            href="/contact"
            className="relative px-8 py-4 text-lg md:text-xl font-semibold text-black bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Contact Us
          </a>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-cyan-400 opacity-20 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-purple-600 opacity-20 blur-3xl animate-pulse" />
        </div>
      </section>
    </section>
  );
};

export default PFT;
