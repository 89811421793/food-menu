import './card.css'
import Button from "../Button"



function Card({ url, title, description, price, weight }) {
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
                <Button />
            </div>


        </div>
    )
}

export default Card;
