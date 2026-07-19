import React, { useEffect, useState } from "react";
import me from "../../assets/me.jpg";
import flutter_logo from "../../assets/flutter_logo.jpg";
import py_logo from "../../assets/py_logo.jpg";
import figma from "../../assets/figma.png";
import sa from "../../assets/sa.jpeg";
import { FaFacebook, FaFlutter, FaJs } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { SiDjango, SiFlutter, SiGithub, SiPython } from "react-icons/si";
import { FaReact, FaGithub } from "react-icons/fa";
import facebook from "../../assets/facebook.png";
import gmail from "../../assets/gmail.png";
import { FaEnvelope } from "react-icons/fa";
import { SiPostgresql, SiTailwindcss, SiGit } from "react-icons/si";
import {
  FaGraduationCap,
  FaProjectDiagram,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

function DesktopLandingPage() {
  // const navItems = ["Home", "About", "Skills", "Projects"];
  const navItems = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "skills", name: "Skills" },
    // { id: "contact", name: "Contact" },
  ];

  const roles = [
    "Full Stack Developer",
    "React Developer",
    "Flutter Developer",
    "Django Developer",
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/files/best_cv.pdf";
    link.download = "Sandesh_BK_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);
  console.log(me);
  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);

        setShow(true);
      }, 400);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen font-[Poppins-regular]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="" id="home">
          <nav className="flex h-14 items-center rounded-full px-8 mt-4">
            <h1 className="text-black text-sm font-semibold text-main">
              Portfolio
            </h1>

            {/* <ul className="flex flex-1 justify-center gap-10 text-sm text-black">
            {navItems.map((item, index) => (
              <li key={index} className="cursor-pointer transition ">
                {item}
              </li>
            ))}
          </ul> */}
            <ul className="flex flex-1 justify-center gap-10 text-sm text-black">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className="cursor-pointer"
                  onClick={() =>
                    document.getElementById(item.id)?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  {item.name}
                </li>
              ))}
            </ul>

            <button
              className="h-8 px-5 rounded-md bg-main text-white text-sm font-medium transition cursor-pointer"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              Contact
            </button>
          </nav>

          <div className="contents flex justify-between px-5 pb-10">
            <section className="flex mt-1 items-center">
              <div className="max-w-2xl">
                <h1 className="text-sm font-bold leading-tight text-main pb-2">
                  Hello, there! I'm
                </h1>
                <h1 className="text-5xl font-bold leading-tight">
                  Software Developer
                </h1>
                <h1 className="text-5xl font-bold leading-tight">Sandesh Bk</h1>

                <p className="mt-6 text-md text-gray-600 w-119 text-justify">
                  I'm a Software Developer focused on building reliable,
                  efficient, and scalable applications. As a passionate fresher,
                  I'm continuously learning new technologies and eager to solve
                  real-world problems while contributing to impactful projects.
                </p>

                <button
                  // onClick={() =>
                  //   document.getElementById("about")?.scrollIntoView({
                  //     behavior: "smooth",
                  //     block: "start",
                  //   })
                  // }

                  onClick={handleDownload}
                  className="mt-8 rounded-md bg-main px-6 py-3 text-white cursor-pointer hover:bg-orange-600 transition duration-300 hover:scale-105 "
                >
                  Download cv
                </button>
                <p className="mt-6 text-md text-gray-600 w-119 text-justify">
                  Techbology I work with.
                </p>
                <div className="icons flex gap-9 mt-2 ">
                  <FaJsSquare className="text-[35px]" color="#F7DF1E" />
                  <FaReact className="text-[35px]" color="#61DAFB" />
                  <SiDjango className="text-[35px]" color="#092E20" />
                  <div
                    className="w-10 h-10 bg-cover bg-center rounded-full"
                    style={{ backgroundImage: `url(${py_logo})` }}
                  ></div>
                  <div
                    className="w-10 h-10 bg-cover bg-center rounded-full"
                    style={{ backgroundImage: `url(${flutter_logo})` }}
                  ></div>
                  <div
                    className="w-10 h-10 bg-cover bg-center rounded-full"
                    style={{ backgroundImage: `url(${figma})` }}
                  ></div>
                  <SiGithub className="text-[35px]" color="#181717" />
                </div>
              </div>
            </section>
            <section className="flex mt-10 items-center">
              <div
                className="bg-cover bg-center rounded-full w-150 h-150"
                style={{ backgroundImage: `url(${sa})` }}
              ></div>
            </section>
          </div>
        </div>
        <div
          className="about-me w-full bg-main rounded-xl px-6 py-12 md:px-16 text-white"
          id="about"
        >
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-block bg-orange-900 px-4 py-2 rounded-md">
                <h1 className="font-medium">About Me</h1>
              </div>

              <p
                className={`mt-6 text-lg text-black transition-all duration-500 ease-in-out font-[Poppins] ${
                  show
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-5 opacity-0"
                }`}
              >
                {roles[index]}
              </p>

              <p className="text-white text-base md:text-lg leading-8 text-justify font-[Poppins-regular]">
                I'm a Software Developer passionate about designing and building
                reliable, scalable, and efficient applications. As a motivated
                fresher, I continuously expand my skills, enjoy solving complex
                problems, and am eager to contribute to innovative software
                projects.
              </p>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 gap-5 w-full">
              <div className="flex items-center gap-4 bg-white/10 p-5 rounded-xl">
                <FaGraduationCap className="text-4xl text-black" />
                <div>
                  <h2 className="text-2xl font-bold">4+</h2>
                  <p className="text-gray-300 text-sm">Years of Training</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/10 p-5 rounded-xl">
                <FaProjectDiagram className="text-4xl text-cyan-400" />
                <div>
                  <h2 className="text-2xl font-bold">2+</h2>
                  <p className="text-gray-300 text-sm">Projects Completed</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/10 p-5 rounded-xl">
                <FaCode className="text-4xl text-green-400" />
                <div>
                  <h2 className="text-2xl font-bold">6+</h2>
                  <p className="text-gray-300 text-sm">Technologies</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/10 p-5 rounded-xl">
                <FaLaptopCode className="text-4xl text-blue-500" />
                <div>
                  <h2 className="text-2xl font-bold">2026</h2>
                  <p className="text-gray-300 text-sm">BCA Graduate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="skills mt-10" id="skills">
          <div className="skill-header text-center font-[Poppins] text-lg ">
            <h1 className="text-main">My Skills</h1>
            <h1 className="font-[Poppins-regular] text-3xl mt-3 ">
              Technologies I have learned
            </h1>
            <div className="w-16 h-1 bg-orange-500 mt-2 rounded justify-self-center"></div>
          </div>
          <div className="skills-shows pb-10 mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* React */}
              <div className="bg-white/10 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <FaReact className="text-4xl text-cyan-400" />
                  <div>
                    <h3 className="font-semibold">React</h3>
                    <p className="text-sm text-gray-400">90%</p>
                  </div>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full">
                  <div className="w-[90%] h-full bg-cyan-400 rounded-full"></div>
                </div>
              </div>

              {/* Python */}
              <div className="bg-white/10 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 bg-cover bg-center rounded-full"
                    style={{ backgroundImage: `url(${py_logo})` }}
                  ></div>
                  <div>
                    <h3 className="font-semibold">Python</h3>
                    <p className="text-sm text-gray-400">90%</p>
                  </div>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full">
                  <div className="w-[90%] h-full bg-blue-500 rounded-full"></div>
                </div>
              </div>

              {/* Flutter */}
              <div className="bg-white/10 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <SiFlutter className="text-4xl" color="#02569B" />
                  <div>
                    <h3 className="font-semibold">Flutter</h3>
                    <p className="text-sm text-gray-400">90%</p>
                  </div>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full">
                  <div className="w-[90%] h-full bg-sky-500 rounded-full"></div>
                </div>
              </div>

              {/* Django */}
              <div className="bg-white/10 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <SiDjango className="text-4xl" color="#092E20" />
                  <div>
                    <h3 className="font-semibold">Django</h3>
                    <p className="text-sm text-gray-400">90%</p>
                  </div>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full">
                  <div className="w-[90%] h-full bg-green-600 rounded-full"></div>
                </div>
              </div>

              {/* PostgreSQL */}
              <div className="bg-white/10 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <SiPostgresql className="text-4xl" color="#336791" />
                  <div>
                    <h3 className="font-semibold">PostgreSQL</h3>
                    <p className="text-sm text-gray-400">85%</p>
                  </div>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full">
                  <div className="w-[85%] h-full bg-blue-700 rounded-full"></div>
                </div>
              </div>

              {/* Tailwind CSS */}
              <div className="bg-white/10 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <SiTailwindcss className="text-4xl" color="#06B6D4" />
                  <div>
                    <h3 className="font-semibold">Tailwind CSS</h3>
                    <p className="text-sm text-gray-400">90%</p>
                  </div>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full">
                  <div className="w-[90%] h-full bg-cyan-400 rounded-full"></div>
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <FaJsSquare className="text-[35px]" color="#F7DF1E" />
                  <div>
                    <h3 className="font-semibold">Javascript</h3>
                    <p className="text-sm text-gray-400">90%</p>
                  </div>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full">
                  <div className="w-[90%] h-full bg-yellow-400 rounded-full"></div>
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 bg-cover bg-center rounded-full"
                    style={{ backgroundImage: `url(${figma})` }}
                  ></div>
                  <div>
                    <h3 className="font-semibold">Figma</h3>
                    <p className="text-sm text-gray-400">90%</p>
                  </div>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full">
                  <div className="w-[90%] h-full bg-orange-400 rounded-full"></div>
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <SiGithub className="text-4xl" />
                  <div>
                    <h3 className="font-semibold">Github</h3>
                    <p className="text-sm text-gray-400">90%</p>
                  </div>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full">
                  <div className="w-[90%] h-full bg-gray-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="contact bg-main text-white rounded-xl p-10"
          id="contact"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Contact Me</h2>
            <p className="text-gray-300 mt-2">
              Feel free to reach out through any of the following platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Facebook */}
            <div className="bg-white/10 rounded-xl p-6 flex flex-col items-center hover:bg-white/20 transition duration-300">
              <FaFacebook className="text-5xl text-facebook mb-4" />

              <h3 className="text-xl font-semibold mb-2">Facebook</h3>

              <a
                href="https://www.facebook.com/tony.tiruwa"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-yellow-400 break-all"
              >
                facebook.com/sandesh
              </a>
            </div>

            {/* Gmail */}
            <div className="bg-white/10 rounded-xl p-6 flex flex-col items-center hover:bg-white/20 transition duration-300">
              <FaEnvelope className="text-5xl text-gmail mb-4" />

              <h3 className="text-xl font-semibold mb-2">Gmail</h3>

              <a
                href="mailto:yourmail@gmail.com"
                className="text-gray-300 hover:text-yellow-400 break-all"
              >
                xandeshbk@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopLandingPage;
