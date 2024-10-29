function Button () { 
    // инлайн в переменной/константе
    const buttonStyles = {
        border: "2px solid red",
        borderRadius:"50px",
        width:"30px",
        height:"30px",
        cursor:"pointer",
       }

    return (
        <button style={buttonStyles}>  
        <img src="/images/plus_icon.png" alt="" />
        </button>
    )
}

export default Button;
