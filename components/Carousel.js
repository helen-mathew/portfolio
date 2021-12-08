import {useState, useEffect, useRef} from "react";

const Carousel = () => {
    let arr = [
        "building web apps.",
        "reading.",
        "crocheting.",
        "knitting.",
        "music.",
        "biking.",
        "volunteering.",
        "baking.",
        "hackathons.",
    ];
    const [index, setIndex] = useState(0);

    //const [sub, setSub] = useState(0);
    const [rev, setRev] = useState(false);
    const [word, setWord] = useState("");
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!rev) {
                // if(word.length === arr[index].length-2)
                if (word.length === arr[index].length) {
                    const timeout2 = setTimeout(() => {
                        setRev(true);
                    }, 800);
                } else {
                    setWord(word + arr[index].charAt(word.length));
                }
            } else {
                if (word.length > 0) {
                    setWord(word.slice(0, -1));
                } else {
                    setIndex((index + 1) % arr.length);
                    setWord("");
                    setRev(false);
                }
            }
        }, 60);

        return () => {
            // clearTimeout(timeout2);
            clearTimeout(timeout);
        };
    }, [word, rev]);
    return <span className="text-pink-300">{word}</span>;
};

export default Carousel;
