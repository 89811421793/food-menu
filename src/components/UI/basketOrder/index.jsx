import styled from 'styled-components'

function Card (props) {
    const CardBaskName=styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 21px;
    flex:1;
    padding-left: 98px;
    `;

    return (
        <div className="cardBask">
        <img src={props.src} alt="" className="cardBaskPreview" />
        <CardBaskName>{props.name}</CardBaskName>
        <div className="">
        <span className="cardBaskPrice">{props.price}₽</span>
        <button className="cancelButton">
        <img className="cancelOrder" src="/images/cancel.png" alt="" />
        </button>
        </div>
        </div>
    )
}

export default Card
