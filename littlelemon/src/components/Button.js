const Button = (props) =>{
    const widthUse= props.width;
    const link = props.link;
    const text = props.text;
    const textId = props.id;
    return(
        <>
            <a href={link} 
            style={{textDecoration: "none"}}>
                <h5 className={textId} 
                style={{width: widthUse}}>
                

                    {text}
                </h5>
            </a>
        </>
    )
}

export  default Button;