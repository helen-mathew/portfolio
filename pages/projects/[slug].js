export default function Home(p) {
    return <h1></h1>;
}

export async function getStaticPaths() {
    const res = await fetch("https://helen-mathew.vercel.app//api/projects");
    //console.log(res);
    const projects = await res.json();

    const paths = projects.map((p) => ({
        params: {slug: p.slug},
    }));

    return {paths, fallback: false};
}
export async function getStaticProps({params}) {
    const res = await fetch(
        "https://helen-mathew.vercel.app/api/projects/${params.id}"
    );
    const project = res.json();
    console.log(project);

    return {
        props: {project},
    };
}
