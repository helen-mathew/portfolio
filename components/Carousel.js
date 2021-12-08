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
        "attending hackathons.",
    ];
    const [index, setIndex] = useState(0);

    //const [sub, setSub] = useState(0);
    const [word, setWord] = useState("");
    useEffect(() => {
        //console.log(index);
        if (word.length === arr[index].length) {
            const timeout = setTimeout(() => {
                //console.log("wee");
                if (index === arr.length - 1) {
                    setIndex(0);
                } else {
                    setIndex(index + 1);
                }

                setWord("");

                clearTimeout(timeout);
            }, 1000);
        } else {
            const interval = setTimeout(() => {
                //setSub(sub + 1);
                setWord(word + arr[index].charAt(word.length));
                //console.log("word: " + word);
                //console.log("char: " + arr[index].charAt(word.length));
                //console.log("changed sub: " + sub);
                // console.log("changed word: " + word);
                clearInterval(interval);
            }, 70);
        }
        return () => {
            clearInterval(interval);
            //clearTimeout(timeout);
        };
    });
    return <span className="text-pink-300">{word}</span>;
};

export default Carousel;
