import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";
import React from "react";
//import avatar from "/avatar-plain.png";
import icons from "../data/tools/icons.json";
import ToolIcon from "../components/ToolIcon";
import toolicons from "../data/tools/icons.json";
import Carousel from "../components/Carousel";
export default function Home() {
    return (
        <div className="flex flex-col items-start px-6 md:px-16 lg:px-32 md:mt-24">
            <div
                id="header"
                className="flex flex-col lg:flex-row-reverse md:items-start lg:justify-between md:mt-12 mb-36  text-gray-200 opacity-95 min-w-full"
            >
                <img
                    className="md:w-80 self-center md:self-start mb-12 lg:m-0 w-64"
                    src="/Music Raw Files/music file2-02.svg"
                    alt="Avatar"
                />

                <div className="min-h-full mr-0">
                    <h1 className="font-inter font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl pb-3 md:pb-6 text-left">
                        Hello World!{" "}
                    </h1>
                    <p className=" font-inter text-2xl md:text-4xl md:text-left font-bold opacity-80 break-word">
                        I'm{" "}
                        <span className="text-yellow-200">Helen Mathew,</span> I
                        like building web apps.
                    </p>
                    <p className="text-xl md:text-3xl font-bold opacity-80">
                        I also enjoy <Carousel />
                    </p>
                </div>
            </div>

            <div
                id="about"
                className="font-inter font-light my-56 text-l md:text-xl text-gray-200 opacity-85 text-left min-w-full"
            >
                <h1 className="text-3xl md:text-4xl  font-bold font-inter">
                    About Me
                </h1>
                <hr />
                <p className="pt-3 font-inter">
                    I'm sooooo cool
                    {/* Here's a fun fact! The first time I ever used HTML & CSS was
                    in 2014 to customize the many wonderful blog themes people
                    created on the one and only,
                    <span className="font-bold"> tumblr.com.</span> */}
                </p>
            </div>

            <div
                id="projects"
                className="font-inter font-light my-40 text-l md:text-xl text-gray-200 opacity-85 text-left min-w-full"
            >
                <h1 className="text-3xl md:text-4xl  font-bold font-inter">
                    Projects
                </h1>
                <hr />
                <p className="pt-3">So much fun stuff.</p>
            </div>

            <div
                id="skills"
                className="my-24 text-gray-200 opacity-85 text-l text-left"
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
