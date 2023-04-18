import {useState, useEffect} from "react";
import Link from "next/link";
export default function Projects() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const res = await fetch("/api/projects");
            const data = await res.json();
            setProjects(data);
        }
        fetchData();
    }, []);
    return (
        <div>
            {projects.map((p, index) => (
                <div className="flex flex-col-reverse md:flex-row items-center justify-center mt-10 mb-40">
                    <div className="w-full md:w-2/3 text-center md:text-left">
                        <h2 className=" text-pink-200 opactiy-70 font-inter text-xl md:text-2xl md:text-left font-bold opacity-75 pb-1">
                            <Link legacyBehavior href={"/projects/" + p.slug}>
                                <a className="hover:underline">{p.title}</a>
                            </Link>
                        </h2>
                        <p>{p.description}</p>
                        {/* {p.repo && (
                            <a href={p.repo} className="underline italic">
                                Public repository
                            </a>
                        )} */}
                    </div>
                    <div className="w-full md:w-1/3">
                        <Link legacyBehavior href={"/projects/" + p.slug}>
                            <a className="hover:underline">
                                <img
                                    className="rounded-md"
                                    src={p.pics[0]}
                                    alt="Screenshot of the website"
                                />
                            </a>
                        </Link>
                    </div>
                    {/* <hr className="border-dashed" /> */}
                </div>
            ))}
        </div>
    );
}
