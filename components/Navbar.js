import Link from "next/link";
const Navbar = () => {
    return (
        <nav className="grid grid-cols-10  bg-green-100 font-medium font-inter text-gradient2 bg-opacity-60">
            <div className="flex justify-evenly items-center col-start-2 col-span-8 md:col-start-4 lg:col-start-7 md:col-span-4 lg:col-span-3 ">
                <Link href="/about">
                    <a className="m-3" target="_blank">
                        Resume
                    </a>
                </Link>
                <Link href="https://github.com/helen-mathew">
                    <a target="_blank">GitHub</a>
                </Link>

                <Link href="https://www.linkedin.com/in/helen-mathew-743004197/">
                    <a target="_blank">Linked In</a>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
