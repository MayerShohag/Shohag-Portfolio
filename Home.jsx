import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { BsCloudDownload, BsSend, BsTelephone } from "react-icons/bs";
import { CiMail, CiShare1 } from "react-icons/ci";
import { GoDash } from "react-icons/go";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { PiGithubLogoLight, PiShootingStarLight } from "react-icons/pi";
import { SlSocialLinkedin } from "react-icons/sl";
import { Link } from "react-router";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Competitive Programing Club",
    description:
      "MPI Competitive Programming Club (MPI-CPC) is a student-led coding community focused on improving problem-solving and algorithmic skills through competitive programming. The club supports learning, practice, and participation in coding contests while fostering teamwork and a strong coding culture.",
    image: "projects/recent-mpi.png",
    features: [
      "Represents our MaPI Competitive Programming Club",
      "Students practice programming and improve their problem-solving skills",
      "Students stay connected with MaPI Competitive Programming Club activities",
      "Information about upcoming competitive programming contests",
      "Support for learning algorithms and data structures",
      "Encourages teamwork and collaborative coding",
      "Promotes a strong and active coding culture among students",
      "Clean, simple, and responsive website design",
    ],
    since: "17 Dec 2025",
    url: "https://mpi-cpc.netlify.app",
    repoUrl: "https://github.com/MayerShohag/MPI-CPC",
    techStack: ["HTML", "CSS", "JS", "Firebase", "React", "Tailwindcss"],
  },
  {
    id: 2,
    title: "PaintShowCase",
    description:
      "PaintShowCase is a digital art platform where creativity meets commerce. It allows artists to create, showcase, and sell their paintings, while art lovers can explore, discover, and purchase beautiful artworks through a smooth and visually engaging interface.",
    image: "projects/paintshowcase.png",
    features: [
      "Clean, modern gallery layout for displaying paintings",
      "High-quality artwork previews for an immersive viewing experience",
      "Artists can showcase their creative works",
      "Dedicated environment for promoting and selling paintings",
      "Art Showcase & Gallery",
      "Buy & Sell Artwork",
      "User Interaction",
      "Users can browse and purchase artworks",
    ],
    since: "6 Nov 2025",
    url: "https://paintshowcase.netlify.app/",
    techStack: [
      "HTML",
      "CSS",
      "JS",
      "Cloudinary",
      "React",
      "Tailwindcss",
      "MockAPI",
    ],
  },
  {
    id: 3,
    title: "GoType",
    description:
      "GoType is an interactive online typing performance platform designed to help users improve their typing speed, accuracy, and overall keyboard skills. Whether you are a beginner looking to practice typing basics or a seasoned user aiming to boost your Words Per Minute (WPM), GoType offers a fun and engaging environment to test and enhance your typing abilities.",
    image: "projects/gotype.png",
    features: [
      "Typing Performance Metrics",
      "Words Per Minute (WPM) – Measures how many words you type per minute",
      "Accuracy – Tracks how precisely you type",
      "Keystrokes – Total number of keys pressed",
      "Correct & Wrong Words – Shows performance breakdown",
      "Keyboard UI",
      "Real-Time Results",
      "Simple & Intuitive UI",
      "Progress & Ranking",
      "Multiple Sign-Up Options",
    ],
    since: "29 July 2025",
    url: "https://gotypebyshohag.netlify.app/",
    techStack: ["HTML", "CSS", "JS"],
  },
  {
    id: 4,
    title: "PrefixHub IT Solution",
    description:
      "PrefixHub IT Solution is a forward-thinking technology company dedicated to delivering comprehensive and innovative IT services for businesses and individuals worldwide. We specialize in IT solutions, software development, networking, digital marketing, cybersecurity, and professional training, helping clients adapt, grow, and succeed in the modern digital landscape.",
    image: "projects/prefixhub.png",
    features: [
      "Comprehensive IT Solutions",
      "Software Development",
      "Networking Services",
      "Cybersecurity Services",
      "Digital Marketing Solutions",
      "Training & Skill Development",
      "Scalable solutions for businesses of all sizes",
      "Custom web and application development",
      "Secure and reliable infrastructure solutions",
    ],
    since: "1 Jan 2026",
    url: "https://prefixhubitsolution.netlify.app/",
    techStack: ["HTML", "CSS", "JS", "React", "Tailwindcss", "Firebase"],
  },
];
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
    <>
      {/* hero section start form here */}
      <section className="max-w-7xl mx-auto my-3 md:mt-5 px-2">
        <div className="lg:text-[120px] xl:text-[155px] text-[70px] md:text-[90px] justify-center flex flex-col md:flex-row lg:flex-row items-center leading-20 lg:leading-none lg:gap-10 md:gap-5 font-semibold">
          <div className="flex">
            <p className="s text-[#D5FE4F]">S</p>
            <p className="h1">H</p>
            <p className="o">O</p>
            <p className="h2">H</p>
            <p className="a1">A</p>
            <p className="g">G</p>
          </div>
          <div className="flex">
            <p className="k text-[#D5FE4F]">K</p>
            <p className="u">U</p>
            <p className="m">M</p>
            <p className="a2">A</p>
            <p className="r">R</p>
          </div>
        </div>

        <div className="grid grid-cols-12 md:my-10 px-2">
          <div className="lg:col-span-5 xl:col-span-8 md:col-span-7 col-span-12">
            <h1 className="md:text-8xl my-5 md:my-0 text-4xl lg:mb-0 italic denton-font">
              Front End{" "}
              <span className="text-[#D5FE4F] denton-font">Developer</span>
            </h1>
          </div>
          <div className="lg:col-span-7 xl:col-span-4 md:col-span-5 mb-5 md:mb-0 col-span-12">
            <p className="font-normal text-[15px]  md:text-xl">
              with a strong focus on the MERN stack, specializing in React.js to
              build dynamic, responsive, and user-friendly web applications
              using modern frontend technologies.
            </p>
          </div>
        </div>

        <div className="px-2">
          <img
            src="hero banner.png"
            className="lg:h-150 w-full rounded-md object-cover object-center"
            alt="recent project"
          />
        </div>

        <div className="flex items-center py-5 px-2 justify-between">
          <Link
            to={"/works"}
            className="px-5 bg-[#D5FE4F] text-black text-lg font-medium py-1 hover:shadow-[0px_0px_5px_#D5FE4F]/50 duration-200"
          >
            View Projects
          </Link>
          <div className="flex items-center gap-2 md:gap-5">
            <a
              href="https://github.com/mayershohag"
              target="_blank"
              className="border border-[#8D8D8D] hover:bg-[#F8FFE1] p-1 rounded-full"
            >
              <PiGithubLogoLight className="text-2xl p-0.5 hover:text-black duration-200 text-white" />
            </a>
            <a
              href="https://linkedin.com/in/mayershohag"
              target="_blank"
              className="border border-[#8D8D8D] hover:bg-[#F8FFE1] p-1 rounded-full"
            >
              <SlSocialLinkedin className="text-2xl hover:text-black duration-200 p-0.75 text-white" />
            </a>
            <a
              href="mailto:shohagsreepur2021@gmail.com"
              className="border border-[#8D8D8D] hover:bg-[#F8FFE1] p-1 rounded-full"
            >
              <CiMail className="text-2xl p-0.5 hover:text-black duration-200 text-white" />
            </a>
          </div>
        </div>
      </section>
      {/* hero section ends here  */}

      {/* about section start from here  */}
      <section className="max-w-7xl mx-auto lg:my-30 my-20 px-3">
        <div>
          <h2 className="text-center text-sm lg:text-lg">A LITTLE ABOUT ME</h2>
          <div className="xl:text-8xl lg:text-6xl text-4xl text-center font-normal">
            <h1 className="font-semibold mt-2">
              ABOUT
              <span className="denton-font font-normal text-[#D5FE4F]">
                {" "}
                Me!
              </span>
            </h1>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-6/12">
            <div className="mt-5">
              <h2 className="md:text-5xl text-3xl font-light">
                Passionate developer & problem
                <span className="denton-font text-[#D5FE4F]"> solver</span>
              </h2>
              <p className="md:mt-10 mt-5 text-[#C6C8C0] md:text-2xl text-lg">
                I'm a Front End Developer, who loves crafting beautiful,
                functional web applications. With expertise in modern JavaScript
                frameworks and a keen eye for design, I transform ideas into
                digital reality.
              </p>
              <div className="lg:my-10 mt-5">
                <button
                  type="submit"
                  className="flex items-center gap-3 px-5 bg-[#D5FE4F] text-black text-lg font-medium py-1 hover:shadow-[0px_0px_5px_#D5FE4F]/50 duration-200 cursor-pointer"
                >
                  <span>Download Resume</span>
                  <BsCloudDownload />
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-6/12 relative h-auto">
            <div className="absolute md:right-30 right-20 top-20 blur-[100px] z-0 md:h-100 rounded-full h-50 w-50 md:w-100 bg-[#D5FE4F]/30"></div>
            <div className="lg:p-20 p-10">
              <img
                src="photo.png"
                className="h-full saturate-0 border border-[#D5FE4F]/30"
                alt="about image"
              />
            </div>
          </div>
        </div>
      </section>
      {/* about section ends here  */}

      {/* project section start from here  */}
      <section className="max-w-7xl mx-auto my-20 mt-30  px-2">
        <div>
          <h2 className="text-center text-sm lg:text-lg">
            CRAFTING MODERN EXPERIENCES
          </h2>
          <div className="xl:text-8xl lg:text-6xl text-4xl text-center font-normal">
            <h1 className="font-semibold mt-2">
              VENTURE
              <span className="denton-font font-normal text-[#D5FE4F]">
                {" "}
                Projects!
              </span>
            </h1>
          </div>
        </div>

        <div className="grid lg:gap-20 gap-15 lg:mt-15 mt-8 px-2">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="grid gap-5 grid-cols-12 items-center"
            >
              <div className="lg:col-span-5 col-span-12">
                <div className="lg:text-4xl flex items-center gap-3 text-2xl mb-1 lg:mb-3 font-semibold">
                  <div className="bg-white/10 text-xl h-10 w-10 text-[#D5FE4F] flex items-center rounded-full justify-center">
                    {idx + 1}
                  </div>{" "}
                  <h1>{project.title}</h1>
                </div>
                <div className="flex italic text-sm py-2 lg:py-0 lg:text-[16px] text-white/80 items-center gap-1 font-light">
                  <GoDash />
                  Established: {project.since}
                </div>
                <p className="lg:text-[15px] text-sm lg:my-3 text-white/80 font-light">
                  {project.description}
                </p>
                <div className="font-light text-[15px]">
                  <div className="text-white mt-3 flex items-center text-lg font-medium">
                    Key Features
                    <GoDash />
                  </div>
                  <div className="flex flex-col gap-1 mt-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="text-[#D5FE4F] text-xl">
                          <PiShootingStarLight />
                        </span>
                        <p className="lg:text-[15px] text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-3">
                  <span className="text-white mb-3 flex items-center text-lg font-medium">
                    Tech Stack
                  </span>
                  <div className="flex gap-3 flex-wrap">
                    {project.techStack.map((tech, idx) => (
                      <div
                        className="bg-white/10 px-3 py-1 border border-white/10 shadow-[inset_0px_0px_8px_white]/20 hover:shadow-[inset_0px_0px_15px_white]/50 cursor-pointer duration-200 rounded-lg"
                        key={idx}
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                title={`View "${project.title}"`}
                className="lg:col-span-7 col-span-12 relative group hover:scale-101 duration-200"
              >
                <div className="md:w-110 md:h-60 w-50 h-40 blur-[150px] z-0 bg-[#D5FE4F]/60 absolute top-15 left-20 md:left-30"></div>
                <div className="relative z-10 rounded-2xl bg-white/20 lg:p-2 p-1">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl group-hover:brightness-75 duration-200"
                  />
                </div>
                <div className="center-element hidden group-hover:flex gap-2 rounded-xl border border-white/10 z-10 p-1.5 px-1.75 backdrop-blur-2xl">
                  <Link
                    target="_blank"
                    to={project.repoUrl}
                    className="items-center hover:bg-white/10 px-2 py-1 rounded-lg flex gap-1"
                  >
                    <AiFillGithub className="text-lg" />
                    <span>GitHub</span>
                  </Link>
                  <Link
                    target="_blank"
                    to={project.url}
                    className="items-center hover:bg-white/10 px-2 py-1 rounded-lg flex gap-1"
                  >
                    <CiShare1 className="text-[16px]" />
                    <span>Live</span>
                  </Link>
                </div>

                <div className="flex md:hidden gap-2 p-1 mt-2 rounded-xl backdrop-blur-3xl w-fit mx-auto border border-white/10 ">
                  <Link
                    target="_blank"
                    to={project.repoUrl}
                    title="Github repository"
                    className="items-center bg-white/10 px-2 py-1 rounded-lg flex gap-1"
                  >
                    <AiFillGithub className="text-lg" />
                    <span>GitHub</span>
                  </Link>
                  <Link
                    target="_blank"
                    to={project.url}
                    className="items-center bg-white/10 px-2 py-1 rounded-lg flex gap-1"
                  >
                    <CiShare1 className="text-[16px]" />
                    <span>Live</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* project section ends here  */}

      {/* social links section start from here  */}
      <section className="overflow-hidden lg:py-20 py-10 relative">
        <div className="xl:h-180 h-150 w-50 md:h-200 md:w-120 xl:w-250 blur-[150px] bg-[#D5FE4F]/30 mt-10 center-element"></div>
        <section className="relative z-10 max-w-6xl mx-3 xl:mx-auto">
          <div>
            <h2 className="text-center text-sm lg:text-lg">DIGITAL PRESENCE</h2>
            <div className="xl:text-8xl lg:text-6xl text-4xl text-center font-normal">
              <h1 className="font-semibold mt-2">
                SOCIAL
                <span className="denton-font font-normal text-[#D5FE4F]">
                  {" "}
                  Media!
                </span>
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-12 grid-rows-3 gap-3 grid-flow-dense my-10">
            <Link
              to={"https://github.com/MayerShohag/"}
              target="_blank"
              className="border bg-black/50 border-white/20 flex flex-col items-center justify-center rounded-2xl p-2 col-span-7 md:col-span-3 md:row-span-2 hover:scale-102 duration-200"
            >
              <div>
                <AiFillGithub className="md:text-[100px] text-7xl" />
              </div>
              <div className="xl:text-6xl md:text-4xl text-2xl mt-3 lg:mt-5 font-semibold">
                <h1>GitHub</h1>
              </div>
            </Link>

            <Link
              to={"https://linkedin.com/in/mayershohag"}
              target="_blank"
              className="border bg-black/50 border-white/20 flex flex-col items-center justify-center rounded-2xl p-2 col-span-5 md:col-span-5 md:row-span-2 hover:scale-102 duration-200"
            >
              <div>
                <AiFillLinkedin className="md:text-[100px] text-7xl" />
              </div>
              <div className="xl:text-6xl  md:text-4xl text-2xl mt-3 lg:mt-5 font-semibold">
                <h1>LinkedIn</h1>
              </div>
            </Link>
            <Link
              to={"#"}
              className="border bg-black/50 border-white/20 flex flex-col items-center justify-center rounded-2xl p-2 col-span-5 md:col-span-4 md:row-span-1 hover:scale-102 duration-200"
            >
              <div>
                <AiFillTwitterCircle className="md:text-[100px] text-7xl" />
              </div>
              <div className="xl:text-6xl  md:text-4xl text-2xl mt-3 lg:mt-5 font-semibold">
                <h1>X</h1>
              </div>
            </Link>
            <Link
              to={"https://www.facebook.com/mayershohag"}
              target="_blank"
              className="border bg-black/50 border-white/20 flex flex-col items-center justify-center rounded-2xl p-2 col-span-7 md:col-span-8  hover:scale-102 duration-200"
            >
              <div>
                <AiFillFacebook className="md:text-[100px] text-7xl" />
              </div>
              <div className="xl:text-6xl  md:text-4xl text-2xl mt-3 lg:mt-5 font-semibold">
                <h1>Facebook</h1>
              </div>
            </Link>
            <Link
              to={"https://www.instagram.com/mayer_shohag"}
              target="_blank"
              className="border bg-black/50 border-white/20 flex flex-col items-center justify-center rounded-2xl p-2 col-span-12 md:col-span-4 md:row-span-2 hover:scale-102 duration-200"
            >
              <div>
                <AiFillInstagram className="md:text-[100px] text-7xl" />
              </div>
              <div className="xl:text-6xl  md:text-4xl text-2xl mt-3 lg:mt-5 font-semibold">
                <h1>Instagram</h1>
              </div>
            </Link>
          </div>
        </section>
      </section>
      {/* social links section ends here  */}

      {/* contact section starts from here  */}
      <section className="mx-4 my-10 lg:my-20">
        <div>
          <h2 className="text-center text-sm lg:text-lg">GET IN TOUCH</h2>
          <div className="xl:text-8xl lg:text-6xl text-4xl text-center font-normal">
            <h1 className="font-semibold mt-2">
              LET'S
              <span className="denton-font font-normal text-[#D5FE4F]">
                {" "}
                Collab!
              </span>
            </h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto my-10 relative">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-between">
            <a
              href="mailto:shohagsreepur2021@gmail.com"
              className="border border-[#D5FE4F]/30 rounded-2xl p-5 bg-[#D5FE4F]/8"
            >
              <span>
                <IoMailOutline className="text-4xl md:text-[55px]" />
              </span>
              <h2 className="text-2xl md:text-4xl font-medium mt-10 md:mt-20">
                Email
              </h2>
              <span className="text-[16px] font-light md:text-lg">
                shohagsreepur2021@gmail.com
              </span>
            </a>
            <a
              href="tel:+8801722656698"
              className="border border-[#D5FE4F]/30 rounded-2xl p-5 bg-[#D5FE4F]/8"
            >
              <BsTelephone className="text-4xl md:text-[55px] p-1 md:p-1.5" />
              <h2 className="text-2xl md:text-4xl font-medium mt-10 md:mt-20">
                Phone
              </h2>
              <span className="text-[16px] font-light md:text-lg">
                +88 01722656698
              </span>
            </a>
            <a
              href="#location"
              className="border border-[#D5FE4F]/30 rounded-2xl p-5 bg-[#D5FE4F]/8"
            >
              <MdOutlineLocationOn className="text-4xl md:text-[55px]" />
              <h2 className="text-2xl md:text-4xl font-medium mt-10 md:mt-20">
                Location
              </h2>
              <span className="text-[16px] font-light md:text-lg">
                Pabna, Bangladesh
              </span>
            </a>
          </div>

          <form className="grid gap-10 grid-cols-1 lg:grid-cols-2 mt-20 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-semibold mb-5">
                Have a project in mind?
              </h2>
              <p className="text-lg md:text-2xl font-light text-white/80">
                Looking to partner or work together? Reach out through the form
                and I'll get back to you in the next 48 hours.
              </p>

              <div className="md:w-110 md:h-60 w-50 h-80 blur-[150px] z-0 bg-[#D5FE4F]/60 absolute top-70 right-0"></div>

              <div className="mt-5" id="location">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17333.714081963066!2d89.39805776821316!3d24.032316684034356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe7defb15030c5%3A0x464261a6565cddb4!2sAtaikula!5e0!3m2!1sen!2sbd!4v1768932566466!5m2!1sen!2sbd"
                  className="w-full rounded-sm h-70"
                ></iframe>
              </div>
            </div>

            <div className="relative z-10">
              <div>
                <label htmlFor="name">
                  <span className="text-xl md:text-3xl font-medium">
                    Your Name
                  </span>
                  <input
                    type="text"
                    className="border block w-full border-[#D5FE4F]/30 p-4 px-5 mt-2 rounded-sm outline-none"
                    name="name"
                    id="name"
                    placeholder="Enter your name here"
                  />
                </label>
              </div>

              <div className="mt-8">
                <label htmlFor="email">
                  <span className="text-xl md:text-3xl font-medium">
                    Your Email
                  </span>
                  <input
                    type="email"
                    className="border block w-full border-[#D5FE4F]/30 p-4 px-5 mt-2 rounded-sm outline-none"
                    name="email"
                    id="email"
                    placeholder="Enter your email here"
                  />
                </label>
              </div>

              <div className="mt-8">
                <label htmlFor="message">
                  <span className="text-xl md:text-3xl font-medium">
                    What you're looking for?
                  </span>
                  <textarea
                    name="message"
                    className="border block w-full border-[#D5FE4F]/30 resize-none p-4 px-5 mt-2 rounded-sm h-40 outline-none"
                    id="message"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </label>
              </div>
              <button
                type="submit"
                className="flex justify-center text-black items-center gap-2 py-2 cursor-pointer rounded-sm border-[#D5FE4F]/30 bg-[#D5FE4F] hover:bg-[#D5FE4F]/80 duration-200 text-lg w-full border mt-5 "
              >
                Send message
                <BsSend />
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* contact section ends here  */}
    </>
  );
};

export default Home;
