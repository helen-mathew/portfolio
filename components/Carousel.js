import {useState, useEffect, useRef} from "react";

const Carousel = () => {
    let arr = [
        "building web apps.",
        "reading.",
        "crocheting.",
        "knitting.",
        "listening to music.",
        "biking.",
        "coding for non-profits.",
        "attending hackathons.",
    ];
    const [index, setIndex] = useState(0);

    const [sub, setSub] = useState(0);
    const [word, setWord] = useState("");
    useEffect(() => {
        const interval = setInterval(() => {
            if (sub < arr[index].length) {
                setSub(sub + 1);
                setWord(word + arr[index].charAt(sub));
            }
        }, 55);
        if (sub === arr[index].length - 1) {
            const timeout = setTimeout(() => {
                setIndex((index + 1) % arr.length);
                setWord("");
                setSub(0);
                clearTimeout(timeout);
            }, 950);
        }

        return () => {
            clearInterval(interval);
            //clearTimeout(timeout);
        };
    });
    return <span className="text-pink-300">{word}</span>;
};

export default Carousel;
