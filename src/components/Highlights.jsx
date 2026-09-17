import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

/*
{} arround names in the import above are for names that are not default ones. These are 
known as named imports.

Named imports: are a feature of ES6 (ECMAScript 2015) 
JavaScript modules that allow you to import specific, individually named exports from 
another module. When a module exports multiple values or functions using the export keyword 
(not as a default export), you can use named imports to bring only the ones you need into 
your code. Named imports are enclosed in curly braces {} in the import statement.

Default import: Default imports are a feature of ES6 (ECMAScript 2015) JavaScript modules 
that allow you to import the default export from another module. A module can have only one 
default export, which is typically the main or most significant value (like a function, 
class, or object) that the module provides.

*/

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding 
    bg-zinc"
    >
      <div className="screen-max-width">
        <div className="md:mt-[500px] md:mb-[10px] max-sm:mt-[190px] w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            {" "}
            Get the highlights.
          </h1>

          {/*<div className="flex flex-wrap items-end gap-5"> 
            <p className="link">
              watch the film
              <img src={watchImg} alt="watch" className="ml-2"/>
            </p>
            <p className="link">
              watch the event
              <img src={rightImg} alt="right" className="ml-2"/>
              </p>
          </div> */}
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;

/* 

flex: in Tailwind CSS is a utility class that applies display: flex;, enabling Flexbox on an 
element. This allows its child elements to be arranged along a flexible layout.

justify-between: Distributes space between the flex items, pushing the first item (text) 
to the left and the second item (links) to the right

flex-wrap: is a Tailwind CSS Flexbox utility that allows flex items to wrap onto 
multiple lines when they exceed the container's width.

items-end: is a Tailwind CSS Flexbox utility that aligns items to the bottom (end) of a 
flex container along the cross axis (which is vertical in flex-row and horizontal in flex-col).

mb-12: is a Tailwind CSS spacing utility that sets the bottom margin of an element 
to 3rem (48px). 

ml-2: is a Tailwind CSS margin utility that applies a left margin of 8px (2 * 4px).
*/
