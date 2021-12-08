import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";
import React from "react";
//import avatar from "/avatar-plain.png";
import icons from "../data/tools/icons.json";
import ToolIcon from "../components/ToolIcon";
import toolicons from "../data/tools/icons.json";
import Carousel from "../components/Carousel";
import Typewriter from "typewriter-effect";
import Typical from "react-typical";

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
                    <p className=" font-inter text-2xl md:text-5xl md:text-left font-bold opacity-75 pb-1 after:content-['|'] after:animate-blink after:font-medium">
                        {/* I'm <span className="text-yellow-200">Helen,</span> an
                        aspiring full-stack web developer
                        <br /> */}
                        I like{" "}
                        {/* <Typewriter
                            className="inline"
                            options={{
                                strings: ["Hello", "World"],
                                autoStart: true,
                                loop: true,
                                skipAddStyles: true,
                                wrapperClassName:
                                    "text-pink-300 Typewriter__wrapper inline",
                            }}
                        /> */}
                        {/* <Typical
                            steps={[
                                "building web apps.",
                                900,
                                "reading.",
                                900,
                                "crocheting.",
                                900,
                                "knitting.",
                                900,
                                "music.",
                                900,
                                "biking.",
                                900,
                                "volunteering.",
                                900,
                                "baking.",
                                900,
                                "attending hackathons.",
                                900,
                            ]}
                            loop={Infinity}
                            wrapper="span"
                        /> */}
                        <Carousel />
                    </p>
                    <p className="md:text-2xl font-normal opacity-90">
                        A web development class I took at university really
                        stuck with me. Since then, I have been scouring the
                        internet for resources to learn more.
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
                    Coming soon!
                    {/* Here's a fun fact! The first time I ever used HTML & CSS was
                    in 2014 to customize the many wonderful blog themes people
                    created on the one and only,
                    <span className="font-bold"> tumblr.com.</span> */}
                </p>
            </div>

            <div
                id="projects"
                className="font-inter my-24 font-light md:text-xl text-gray-200 opacity-90 text-left min-w-full"
            >
                <h1 className="text-3xl md:text-4xl  font-bold font-inter">
                    Projects
                </h1>
                <hr />
                <p className="pt-3">Coming soon!</p>
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
