import {useState, useEffect, useRef} from "react";

const Carousel = () => {
    let arr = [
        "reading.",
        "crocheting.",
        "knitting.",
        "music.",
        "biking.",
        "volunteering.",
        "baking.",
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
        }, 60);
        if (sub === arr[index].length - 1) {
            const timeout = setTimeout(() => {
                if (index === arr.length - 1) {
                    setIndex(0);
                } else {
                    setIndex(index + 1);
                }
                //setIndex((index + 1) % arr.length);
                setWord("");
                setSub(0);
                clearTimeout(timeout);
            }, 1000);
        }

        return () => {
            clearInterval(interval);
            //clearTimeout(timeout);
        };
    });
    return <span className="text-pink-300">{word}</span>;
};

export default Carousel;
