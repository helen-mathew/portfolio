import {useState, useEffect, useRef} from "react";

const Carousel = () => {
    let arr = [
        "building web apps.",
        "reading.",
        "crocheting.",
        "knitting.",
        "listening to music.",
        "biking.",
        "coding for a good cause.",
        "attending hackathons.",
    ];
    const [index, setIndex] = useState(0);
    const indexRef = useRef(index);

    const [sub, setSub] = useState(0);
    const [word, setWord] = useState("");
    useEffect(() => {
        const interval = setInterval(() => {
            if (sub < arr[index].length) {
                setSub(sub + 1);
                setWord(word + arr[index].charAt(sub));
            }
        }, 60);
        if (sub === arr[index].length - 1) {
            const timeout = setTimeout(() => {
                setIndex((index + 1) % arr.length);
                setWord("");
                setSub(0);
                clearTimeout(timeout);
            }, 900);
        }

        return () => {
            clearInterval(interval);
            //clearTimeout(timeout);
        };
    });
    return <span className="text-pink-300">{word}</span>;
};

export default Carousel;
