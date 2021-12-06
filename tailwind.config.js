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
                gradient1: "#80D0C7",
                gradient2: "#13547A",
            },
            fontFamily: {
                syne: "Syne",
                inter: "Inter",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
