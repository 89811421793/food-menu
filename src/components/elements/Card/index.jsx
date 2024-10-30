import './card.css'
import { addProductsBasket } from '../../../store/reducers/products';
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid';




function Card({ url, title, description, price, weight, id }) {
// хук useDispatch "доставляет" action к reducer, чтоб тот модифицировал состояние..
    const dispatch = useDispatch()

    const addProduct = () => {
        const item = {
            id: id,
            // генерация уникального ключа для каждого компонента через встроенный метод из react-uuid (см. значение payload/idx)
            idx: uuid(),
            title: title,
            url: url,
            price: price,
        }

        dispatch(addProductsBasket(item))
    }






    return (
        <div className="itemCard">

            <img className="itemImage" src={url} alt="" />
            <h1 className="product-title">{title}</h1>
            <p className="product-description">{description}</p>
            <div className="cardBottom">
                <div>
                    <span className="productPrice">{price} ₽</span>
                    <span className="productWeight">/ {weight} г</span>
                </div>
                 <button onClick={addProduct} className="addButton">
                    <img className="plus" src="/images/plus_icon.png" alt="" />
                </button>

            </div>


        </div>
    )
}

export default Card;
