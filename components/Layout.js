import Head from "next/head";
import Link from "next/link";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({children, home}) {
    return (
        <div className="flex flex-col bg-gradient-to-b from-gradient1 to-gradient2 min-h-screen">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800;900&family=Syne:wght@400;700;800;900&display=swap" rel="stylesheet"/>
                <script src="/script.js"></script>
                <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
                <title>Helen Mathew</title>

            </Head>

            <Navbar />

            <main className=" flex-1">{children}</main>

            <hr />
           <Footer/>
        </div>
    );
}
