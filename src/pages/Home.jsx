import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const heroAnimation = () => {
     gsap.from(".s", {
          x: -200,
          opacity: 0,
          duration: 0.5,
          delay: 0.1,
          transformOrigin: "50% 50%",
     });
     gsap.from(".h1", {
          y: 50,
          opacity: 0,
          scale: 0.1,
          duration: 0.5,
          delay: 1,
          transformOrigin: "50% 50%",
     });
     gsap.from(".o", {
          scale: 2,
          opacity: 0,
          duration: 0.5,
          delay: 1,
          transformOrigin: "50% 50%",
     });
     gsap.from(".h2", {
          y: -50,
          opacity: 0,
          duration: 0.5,
          delay: 1,
          transformOrigin: "50% 50%",
     });
     gsap.from(".a1", {
          x: 300,
          opacity: 0,
          duration: 0.5,
          delay: 0.8,
          transformOrigin: "50% 50%",
     });
     gsap.from(".g", {
          y: -100,
          opacity: 0,
          duration: 0.5,
          delay: 1,
          transformOrigin: "50% 50%",
     });
     gsap.from(".k", {
          x: -610,
          rotation: 360,
          duration: 0.5,
          delay: 1,
          transformOrigin: "50% 50%",
     });
     gsap.from(".u", {
          opacity: 0,
          rotation: 180,
          duration: 0.5,
          delay: 1,
          transformOrigin: "50% 50%",
     });
     gsap.from(".m", {
          y: -20,
          opacity: 0,
          duration: 0.5,
          delay: 1,
          stagger: 0.2,
          scale: 0.2,
     });
     gsap.from(".a2", {
          x: -300,
          opacity: 0,
          duration: 0.5,
          delay: 0.8,
          transformOrigin: "50% 50%",
     });
     gsap.from(".r", {
          x: 100,
          opacity: 0,
          duration: 0.5,
          delay: 1,
          transformOrigin: "50% 50%",
     });
};
const Home = () => {
     useGSAP(heroAnimation);
     return (
          <section className="max-w-7xl mx-auto my-3 px-2">
               <div className="lg:text-[120px] xl:text-[155px] text-[80px] md:text-[90px] justify-center flex flex-col md:flex-row lg:flex-row items-center leading-20 lg:leading-none lg:gap-10 md:gap-5 font-semibold">
                    <div className="flex">
                         <p className="s">S</p>
                         <p className="h1">H</p>
                         <p className="o">O</p>
                         <p className="h2">H</p>
                         <p className="a1">A</p>
                         <p className="g">G</p>
                    </div>
                    <div className="flex">
                         <p className="k">K</p>
                         <p className="u">U</p>
                         <p className="m">M</p>
                         <p className="a2">A</p>
                         <p className="r">R</p>
                    </div>
               </div>
          </section>
     );
};

export default Home;
