import ToolIcon from "./ToolIcon";
import tools from "../data/tools/icons.json";
const Footer = () => {
    return (
        <footer className="flex justify-center items-center font-normal font-inter text-gray-200">
            <a
                href="https://github.com/helen-mathew/portfolio"
                className="mt-1"
                target="_blank"
            >
                <ion-icon
                    name="logo-github"
                    style={{fontSize: "40px"}}
                ></ion-icon>
            </a>
        </footer>
    );
};

export default Footer;
