import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";
//import avatar from "/avatar-plain.png";
import icons from "../data/tools/icons.json";
import ToolIcon from "../components/ToolIcon";
import toolicons from "../data/tools/icons.json";
export default function Home() {
    return (
        <div className="flex flex-col items-start px-14 sm:px-20 md:px-28 lg:px-48">
            <div className="flex flex-col md:flex-row text-center justify-center items-center my-16  sm:my-32 text-logo">
                <div>
                    <h1 className="font-inter font-bold text-2xl sm:text-4xl md:text-6xl lg:text-7xl pb-4 md:text-left">
                        Hello World! I’m Helen :){" "}
                    </h1>
                    <p className=" font-inter text-xl sm:text-2xl md:text-4xl lg:text-5xl  md:text-left font-bold text-gray-300">
                        I'm an aspiring web developer with interests in social
                        change and activism.{" "}
                    </p>
                </div>
            </div>

            <div className="text-center font-inter font-medium my-32 text-l md:text-2xl text-logo md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold font-inter">
                    ABOUT ME
                </h1>
                <p className="pt-3">
                    My first "real" exposure to HTML and CSS was on Tumblr as a
                    teenager.{" "}
                </p>
            </div>

            <div className="my-32 text-logo text-center text-l md:text-left">
                <h1 className=" text-2xl md:text-3xl font-bold font-inter">
                    MY TOOL-KIT
                </h1>
                <div className="font-inter font-medium  md:text-xl flex flex-wrap justify-evenly mt-4">
                    {toolicons.icons.map((prop) => (
                        <ToolIcon src={prop.src} title={prop.title} />
                    ))}
                    <div className="flex flex-col justify-center items-center p-5 pl-0">
                        <img
                            className="h-14"
                            src="/vscode-alt.png"
                            alt="Visual Studio Code Icon"
                        />
                        <p className="text-center">Visual Studio Code</p>
                    </div>
                    <div className="flex flex-col justify-center items-center p-5 pl-0">
                        <img
                            className="h-14"
                            src="/Logo_RGB_White.png"
                            alt="MongoDB icon"
                        />
                    </div>
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
