import Link from "next/link";
const Navbar = () => {
    return (
        <nav className="flex justify-center lg:justify-end  font-semibold font-inter text-yellow-200 opacity-75 h-20 absolute top-0 left-0 right-0 z-10">
            <div className="flex justify-evenly items-center mx-36">
                <Link legacyBehavior href="#about">
                    <a className="m-3 hover:underline ">About</a>
                </Link>
                <Link legacyBehavior href="#projects">
                    <a className="m-3 hover:underline ">Projects</a>
                </Link>

                <Link legacyBehavior href="https://github.com/helen-mathew">
                    <a className="m-3 hover:underline " target="_blank">
                        GitHub
                    </a>
                </Link>

                <Link
                    legacyBehavior
                    href="https://www.linkedin.com/in/helen-mathew-743004197/"
                >
                    <a className="m-3 hover:underline" target="_blank">
                        LinkedIn
                    </a>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
