import Head from "next/head";
import Link from "next/link";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({children, home}) {
    return (
        <div className="flex flex-col bg-gradient-to-b from-gradient1 to-gradient2 min-h-screen">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Syne:wght@400;700;800&display=swap" rel="stylesheet"/>
                <title>Helen Mathew</title>

            </Head>

            <Navbar />

            <main className="font-syne text-green-100 flex-1">{children}</main>

            {/* <hr className="border-green-100" /> */}
           <Footer/>
        </div>
    );
}
