import Link from "next/link";
const Navbar = () => {
    return (
        <nav className="flex justify-center lg:justify-end bg-green-100 font-medium font-inter text-gradient2 bg-opacity-50 h-20">
            <div className="flex justify-evenly items-center mx-48">
                <Link href="/about">
                    <a className="m-3" target="_blank">
                        Resume
                    </a>
                </Link>
                <Link href="https://github.com/helen-mathew">
                    <a className="m-3" target="_blank">
                        GitHub
                    </a>
                </Link>

                <Link href="https://www.linkedin.com/in/helen-mathew-743004197/">
                    <a className="m-3" target="_blank">
                        LinkedIn
                    </a>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
