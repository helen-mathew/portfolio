module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                gradient1: "#64B0B3",
                gradient2: "#13547A",
                logo: "#f3f3f3",
            },
            fontFamily: {
                syne: "Syne",
                inter: "Inter",
            },
            backgroundImage: {
                moviedb: "url('/projects/moviedb.png')",
            },
            backgroundPosition: ["hover", "focus"],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
