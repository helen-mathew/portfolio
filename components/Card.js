const Card = (props) => {
    return (
        <div className="group flex flex-col border-2 border-green-100 rounded shadow-xl h-64 w-60 bg-moviedb bg-cover hover:opacity-30">
            {/* <img src={props.img} alt="Project" className="h-full w-full" /> */}

            <h1 className="opacity-0 group-hover:opacity-100">{props.name}</h1>
        </div>
    );
};

export default Card;
