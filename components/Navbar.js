import Link from "next/link";
const Navbar = () => {
    return (
        <nav className="flex justify-center lg:justify-end  font-medium font-inter text-yellow-200 opacity-80 h-20">
            <div className="flex justify-evenly items-center mx-48">
                <Link href="/about">
                    <a className="m-3 hover:underline " target="_blank">
                        Resume
                    </a>
                </Link>
                <Link href="https://github.com/helen-mathew">
                    <a className="m-3 hover:underline " target="_blank">
                        GitHub
                    </a>
                </Link>

                <Link href="https://www.linkedin.com/in/helen-mathew-743004197/">
                    <a className="m-3 hover:underline" target="_blank">
                        LinkedIn
                    </a>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
