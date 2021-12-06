import Head from "next/head";
import Image from "next/image";
//import avatar from "/avatar-plain.png";

export default function Home() {
    return (
        <div className="flex flex-col items-center mt-4 ">
            <a
                href="https://blush.design/collections/P0xvW7pB01SwXNHqlchV/allura"
                target="_blank"
            >
                <img src="/avatar-drawn.png" className="w-36" />
            </a>

            <h1 className="font-inter font-bold text-4xl text-green-100 pt-5 text-center">
                Hello World! I’m Helen :){" "}
            </h1>
            <p className="p-4 font-inter font-medium">
                I'm an aspiring full-stack web developer with interests in
                social change and activism.{" "}
            </p>

            <div className="flex flex-wrap justify-center"></div>
        </div>
    );
}
