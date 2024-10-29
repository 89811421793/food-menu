function Exit() {

    const exitStyle = {
        border: "1px solid #D58C51",
        background: "#161516",
        width: "200px",
        height: "42px",
        cursor: "pointer",
        color: "#D58C51",
        fontFamily: 'Montserrat',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "17px",
        marginLeft:"22px"
    }

    return (
        <button style={exitStyle}>
            Выйти
        </button>
    )
}

export default Exit;