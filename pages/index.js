import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";
import Projects from "../components/Projects";
import React from "react";
//import avatar from "/avatar-plain.png";
import icons from "../data/tools/icons.json";
import ToolIcon from "../components/ToolIcon";
import toolicons from "../data/tools/icons.json";
import Carousel from "../components/Carousel";

export default function Home() {
    return (
        <div className="items-start px-6 md:px-16 lg:px-28 min-w-screen">
            <div
                id="header"
                className="flex flex-row md:text-left md:items-start lg:justify-between text-gray-200 opacity-95 min-h-screen"
            >
                {/* <img
                    className="md:w-80 self-center md:self-start mb-12 lg:m-0 w-64"
                    src="/Music Raw Files/music file2-05.svg"
                    alt="Avatar"
                /> */}

                <div className="mr-0 self-center">
                    <p className="md:text-lg lg:text-2xl font-semibold opacity-90 pb-1">
                        Hello World! I am
                    </p>
                    <p className="font-inter font-bold text-4xl sm:text-7xl text-yellow-200 opacity-75 pb-1 text-left">
                        Helen Mathew.{" "}
                    </p>
                    {/* add custom media query for tiny phones and change text to xl */}
                    <p className=" font-inter text-2xl md:text-5xl md:text-left font-bold opacity-75 pb-1 ">
                        I like <Carousel />
                    </p>
                    <p className="md:text-2xl font-normal opacity-90">
                        I'm a fourth-year undergraduate student majoring in
                        Cognitive science with a concentration in computer
                        science, and a minor in Statistics. I grew up in India
                        and the United Arab Emirates, and have been living in
                        Ottawa since 2019.
                        {/* <br />
                        I also enjoy <Carousel /> */}
                    </p>
                    {/* <p className="text-l md:text-3xl font-bold opacity-80">
                        I enjoy <Carousel />
                    </p> */}
                </div>
            </div>

            <div
                id="about"
                className="font-inter font-light md:text-xl text-gray-200 opacity-90 text-left min-w-full"
            >
                <h1 className="text-3xl md:text-4xl font-bold font-inter">
                    About Me
                </h1>
                <hr />
                <p className="pt-3 font-inter">
                    The very first time I played around with HTML and CSS was in
                    2014 on the social networking website{" "}
                    <a
                        className="opacity-80 hover:underline"
                        href="https://www.tumblr.com/"
                    >
                        Tumblr
                    </a>
                    . Many users would post beautiful custom themes that you
                    could apply to your personal blog. In order to personalize
                    the themes to fit my style, I began looking into the source
                    code and noticed patterns and keywords such as{" "}
                    <em className="font-semibold">&lt;p&gt;&lt;/p&gt;</em> and{" "}
                    <em className="font-semibold">&lt;div&gt;&lt;/div&gt;</em>.
                    Soon, I was able to tweak the structure and styles of the
                    page to reflect my early-teen personality.
                </p>
                <p className="mt-2">
                    This experience was one of the first to teach me that the
                    best way to learn is by doing. Last semester, I volunteered
                    as a front-end developer for a project done mostly in
                    Angular.js. I had little to no experience with Angular at
                    the start of the project, but I was able to pick it up very
                    quickly after observing the work that had already been done
                    and building up from there.
                </p>
                <p className="mt-2">
                    Outside of school, I spend a lot of time knitting and
                    crocheting! I take pride in being able to create at least a
                    few of my own clothes and accessories. Additionally, I enjoy
                    being outdoors, discovering new trails, exploring flea
                    markets, and I'm always on the lookout for new coffeshops in
                    the city!
                </p>
            </div>

            <div
                id="projects"
                className="font-inter my-24 font-light md:text-xl text-gray-200 opacity-90 text-left min-w-full"
            >
                <h1 className="text-3xl md:text-4xl font-bold font-inter">
                    Projects
                </h1>
                <hr />
                {/* <p className="pt-3">Coming soon!</p> */}
                <Projects />
            </div>

            <div
                id="skills"
                className="my-24 text-gray-200 opacity-90 text-left"
            >
                <h1 className="text-3xl md:text-4xl  font-bold font-inter">
                    My tool kit
                </h1>
                <hr />
                <div className="font-inter font-medium  md:text-xl flex flex-wrap justify-evenly mt-4">
                    {toolicons.icons.map((icon) => (
                        <ToolIcon
                            key={icon.title}
                            src={icon.src}
                            title={icon.title}
                        />
                    ))}
                    <div className="flex flex-col justify-center items-center p-5">
                        <img className="h-14" src="/pug.svg" alt="Pug.js" />
                        <p className="text-center">Pug.js</p>
                    </div>
                    {/* <div className="flex flex-col justify-center items-center p-5">
                        <img
                            className="h-14"
                            src="/Logo_RGB_White.png"
                            alt="MongoDB icon"
                        />
                    </div> */}
                </div>
            </div>

            {/* <div className="flex flex-wrap justify-start font-inter">
                <div className="group flex flex-col border-2 border-green-100 rounded shadow-xl h-64 w-60 hover:bg-green-100 hover:bg-opacity-30">
                   
                    <img
                        src="/projects/moviedb.png"
                        className="object-contain"
                    />
                    <div className="invisible group-hover:visible group-hover:opacity-100 text-gradient2 font-bold absolute">
                        Movie Database
                    </div>
                </div>
            </div> */}
        </div>
    );
}
