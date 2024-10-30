import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { deleteProductsBasket } from '../../../store/reducers/products'


function Card ({ id, urlImg, title, price }) {
    const CardBaskName=styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 21px;
    flex:1;
    padding-left: 98px;
    `;

 const dispatch = useDispatch()
    const removeItem = () => {

        dispatch(deleteProductsBasket(id));

    }



    return (
        <div className="cardBask">
        <img src={urlImg} alt="" className="cardBaskPreview" />
        <CardBaskName>{title}</CardBaskName>
        <div className="">
        <span className="cardBaskPrice">{price}₽</span>
        <button onClick={removeItem} className="cancelButton">
        <img className="cancelOrder" src="/images/cancel.png" alt="" />
        </button>
        </div>
        </div>
    )
}

export default Card
