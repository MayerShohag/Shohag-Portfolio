import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { HiOutlineXMark } from "react-icons/hi2";
import { NavLink } from "react-router";

const Navigation = () => {
     const [isShow, setIsShow] = useState(false);
     useGSAP(() => {
          gsap.from(".navigation", {
               y: -20,
               opacity: 0,
               duration: 0.5,
               delay: 0.5,
               stagger: 0.2,
          });
     });
     return (
          <header className="flex relative items-center justify-between max-w-7xl mx-auto md:py-6 py-4 px-2">
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
                    {isShow ? (
                         <button onClick={() => setIsShow(false)}>
                              <HiOutlineXMark className="text-2xl" />
                         </button>
                    ) : (
                         <button onClick={() => setIsShow(true)}>
                              <CgMenuRightAlt className="text-2xl" />
                         </button>
                    )}
               </div>

               {isShow && (
                    <nav className="flex flex-col right-3 top-12 rounded-xl bg-white/5 p-5 absolute md:hidden items-start gap-3">
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
