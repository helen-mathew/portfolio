import {useState, useEffect} from "react";

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
        //logic to type forwards or backwards after typingDelay
        const timeout = setTimeout(() => {
            if (!rev) {
                // if the word if fully typed, pause and set reverse to true
                if (word.length === arr[index].length) {
                    const timeout2 = setTimeout(() => {
                        setRev(true);
                    }, 800);
                } else {
                    //add character (type forwards)
                    setWord(word + arr[index].charAt(word.length));
                }
            } else {
                if (word.length > 0) {
                    setWord(word.slice(0, -1));
                } else {
                    //moves to next word in array and restart
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
    });
    return (
        <span className="text-pink-300 after:content-['|'] after:animate-blink after:font-medium after:text-gray-200">
            {word}
        </span>
    );
};

export default Carousel;
