export default function Project({project}) {
    console.log(project);
    return (
        <div className="items-start px-6 md:px-16 lg:px-28 min-w-screen  text-gray-200 opacity-95 font-inter mt-5">
            <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
            <p>{project.description}</p>
        </div>
    );
}

export async function getStaticPaths() {
    const res = await fetch("https://helen-mathew.vercel.app/api/projects");
    //console.log(res);
    const projects = await res.json();

    const paths = projects.map((p) => ({
        params: {slug: p.slug},
    }));

    return {paths, fallback: false};
}
export async function getStaticProps({params}) {
    const addy = "https://helen-mathew.vercel.app/api/projects/" + params.slug;

    const res = await fetch(addy);

    const data = await res.json();
    console.log(data);
    return {
        props: {project: data},
    };
}
