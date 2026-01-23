import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { HiOutlineXMark } from "react-icons/hi2";
import { NavLink } from "react-router";

const Navigation = () => {
     const [isShow, setIsShow] = useState(false);
     useGSAP(() => {
          let tl = gsap.timeline();
          tl.from(".navigation", {
               y: -20,
               opacity: 0,
               duration: 0.5,
               delay: 0.5,
               stagger: 0.2,
          });
     });

     return (
          <header className="flex relative items-center justify-between max-w-7xl mx-auto py-4 px-2">
               <a href="/" className="flex items-center gap-1 navigation">
                    <div className="bg-yellow-500 rounded-md flex items-end justify-end text-black h-10 w-10 pr-1.25">
                         <span className="font-semibold neutra-font text-[17px]">
                              SK
                         </span>
                    </div>
                    <div className="text-[16px] font-semibold flex flex-col leading-tight">
                         <span>SHOHAG</span>
                         <span>KUMAR</span>
                    </div>
               </a>

               <div className="navigation md:hidden">
                    <button
                         onClick={() => {
                              setIsShow(true);
                         }}
                    >
                         <CgMenuRightAlt className="text-3xl" />
                    </button>
               </div>

               {isShow && (
                    <nav className="flex flex-col navAnimation absolute top-0 left-0 bg-black h-screen gap-10 p-5 pl-15 w-full">
                         <div className="flex justify-end">
                              <button
                                   className="bg-white/10 rounded-full"
                                   onClick={() => {
                                        setIsShow(false);
                                   }}
                              >
                                   <HiOutlineXMark className="text-4xl p-1" />
                              </button>
                         </div>
                         <NavLink
                              to={"/"}
                              className={({ isActive }) =>
                                   isActive
                                        ? "text-white/50 text-4xl"
                                        : "text-white text-4xl"
                              }
                         >
                              Home
                         </NavLink>
                         <NavLink
                              to={"/about"}
                              className={({ isActive }) =>
                                   isActive
                                        ? "text-white/50 text-4xl"
                                        : "text-white text-4xl"
                              }
                         >
                              About
                         </NavLink>
                         <NavLink
                              to={"/works"}
                              className={({ isActive }) =>
                                   isActive
                                        ? "text-white/50 text-4xl"
                                        : "text-white text-4xl"
                              }
                         >
                              Works
                         </NavLink>
                         <NavLink
                              to={"/contact"}
                              className={({ isActive }) =>
                                   isActive
                                        ? "text-white/50 text-4xl"
                                        : "text-white text-4xl"
                              }
                         >
                              Contact
                         </NavLink>
                    </nav>
               )}

               {/* large screen navigation */}
               <nav className="md:flex hidden items-center md:gap-5">
                    <NavLink
                         to={"/"}
                         className={({ isActive }) =>
                              isActive
                                   ? "text-white/50 text-[18px] navigation"
                                   : "text-white text-[18px] navigation"
                         }
                    >
                         Home
                    </NavLink>
                    <NavLink
                         to={"/about"}
                         className={({ isActive }) =>
                              isActive
                                   ? "text-white/50 text-[18px] navigation"
                                   : "text-white text-[18px] navigation"
                         }
                    >
                         About
                    </NavLink>
                    <NavLink
                         to={"/works"}
                         className={({ isActive }) =>
                              isActive
                                   ? "text-white/50 text-[18px] navigation"
                                   : "text-white text-[18px] navigation"
                         }
                    >
                         Works
                    </NavLink>
                    <NavLink
                         to={"/contact"}
                         className={({ isActive }) =>
                              isActive
                                   ? "text-white/50 text-[18px] navigation"
                                   : "text-white text-[18px] navigation"
                         }
                    >
                         Contact
                    </NavLink>
               </nav>
               <NavLink
                    to={"/contact"}
                    className="text-black hidden md:block bg-[#D5FE4F] hover:bg-[#D5FE4F]/80 py-2 px-5 text-[18px] navigation"
               >
                    Lets Talk!
               </NavLink>
          </header>
     );
};

export default Navigation;
