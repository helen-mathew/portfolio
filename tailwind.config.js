const colors = require("tailwindcss/colors");

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
                gradient1: "#387E96",
                gradient2: "#13547A",
                logo: "#f3f3f3",
                transparent: "transparent",
                current: "currentColor",
                black: colors.black,
                white: colors.white,
                gray: colors.gray,
                emerald: colors.emerald,
                indigo: colors.indigo,
                yellow: colors.yellow,
                teal: colors.teal,
            },
            fontFamily: {
                syne: "Syne",
                inter: "Inter",
            },
            backgroundImage: {
                moviedb: "url('/projects/moviedb.png')",
            },
            backgroundPosition: ["hover", "focus"],
            animation: {
                blink: "blink 1s infinite step-start",
            },
            keyframes: {
                blink: {"50%": {opacity: "0"}},
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
