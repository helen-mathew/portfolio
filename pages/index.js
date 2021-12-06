import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";
//import avatar from "/avatar-plain.png";
import icons from "../data/tools/icons.json";
import ToolIcon from "../components/ToolIcon";
import toolicons from "../data/tools/icons.json";
export default function Home() {
    return (
        <div className="flex flex-col items-start px-6 md:px-28 lg:px-48">
            <div className="flex flex-col md:flex-row justify-center items-center my-32 text-logo">
                <div>
                    <h1 className="font-inter font-bold text-5xl md:text-6xl lg:text-7xl pb-3 md:pb-6 text-left">
                        Hello World!{" "}
                    </h1>
                    <p className=" font-inter text-3xl md:text-4xl   md:text-left font-bold text-gray-300">
                        I'm <span className="text-gradient2">Helen,</span> and I
                        enjoy building things.
                    </p>
                    <p className="pt-3 font-inter text-l md:text-2xl  md:text-left font-normal text-gray-300">
                        Fun fact! The first time I ever used HTML & CSS was in
                        2014 to customize the many wonderful blog themes people
                        created on the one and only,
                        <span className="text-gradient2 font-semibold">
                            {" "}
                            tumblr.com.
                        </span>
                    </p>

                    {/* <p className="pt-2 font-inter text-3xl font-bold">
                        Coding for good causes
                    </p> */}
                </div>
            </div>

            <div className="font-inter font-normal my-40 text-l md:text-2xl text-logo text-left min-w-full">
                <h1 className="text-3xl md:text-4xl  font-bold font-inter">
                    About Me
                </h1>
                <hr />
                <p className="pt-3">
                    Third-year at Carleton, from India/UAE blah blah blah.
                </p>
            </div>

            <div className="my-32 text-logo text-l text-left">
                <h1 className="text-3xl md:text-4xl  font-bold font-inter">
                    My tool-kit
                </h1>
                <hr />
                <div className="font-inter font-medium  md:text-xl flex flex-wrap justify-evenly mt-4">
                    {toolicons.icons.map((prop) => (
                        <ToolIcon src={prop.src} title={prop.title} />
                    ))}
                    <div className="flex flex-col justify-center items-center p-5">
                        <img
                            className="h-14"
                            src="/vscode-alt.png"
                            alt="Visual Studio Code Icon"
                        />
                        <p className="text-center">Visual Studio Code</p>
                    </div>
                    <div className="flex flex-col justify-center items-center p-5">
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
