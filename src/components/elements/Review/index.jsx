import style from './review.module.css'
import { addProductsBasket } from '../../../store/reducers/products';
import { useDispatch } from 'react-redux'
import uuid from 'react-uuid';


function ReviewCard({ id,urlPic,title, description, price, weight }) {
    const dispatch = useDispatch()

    const addProduct = (event) => {
        event.stopPropagation();
      
        const item = {
            id: id,
            idx: uuid(),
            title: title,
            url: urlPic,
            price: price,
        }

        dispatch(addProductsBasket(item))
    }

    return (
        <div className={style.revWrap}>
            <div className={style.itemPicture}>
            <img className={style.reviewItemPic} src={urlPic} alt="" />
            </div>
            <div className={style.reviewCard}>
                <h1 className={style.reviewTitle}>{title}</h1>
                <p className={style.reviewDescription}>{description}
                </p>
                <div className={style.reviewBottomWrap}>
                    <div>
                        <span className={style.productPrice}>{price} ₽</span>
                        <span className={style.productWeight}>/ {weight} г</span>
                    </div>
                    
                    <button onClick={addProduct} className={style.orderButton}>В корзину</button>
              
                </div>
            </div>
        </div>
    )
}

export default ReviewCard;
