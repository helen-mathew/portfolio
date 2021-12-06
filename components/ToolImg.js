const ToolImg = (props) => {
    return (
        <div className="flex flex-col justify-center items-center p-5">
            <ion-icon name={props.src} style={{fontSize: "60px"}}>
                {" "}
            </ion-icon>
            <p>{props.title}</p>
        </div>
    );
};

export default ToolImg;
