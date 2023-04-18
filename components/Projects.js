import {useState, useEffect} from "react";

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
            {projects.map((p) => (
                <div>
                    <h2 className=" mt-4 text-yellow-200 opactiy-20 font-inter text-xl md:text-2xl md:text-left font-bold opacity-75 pb-1 hover:underline">
                        {p.title}
                    </h2>
                    <p>{p.description}</p>
                    {p.repo && (
                        <a href={p.repo} className="underline italic">
                            Public repository
                        </a>
                    )}
                </div>
            ))}
        </div>
    );
}
