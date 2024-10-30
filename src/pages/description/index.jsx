import style from "./desc.module.css"
import { Link, useParams } from "react-router-dom";
import Basket from "../../components/UI/Basket"
import Exit from "../../components/UI/Logout"
import ReviewCard from '../../components/elements/Review'
import { useSelector } from 'react-redux';

function Item() {
    const products = useSelector(state => state.products.products);
    const itemsCounter = useSelector(state => state.products.countProduct);
    const itemPrice = useSelector(state => state.products.allPriceProductsBasket);

    const { id } = useParams();
    
    /* Находим продукт по id (используем Array.prototype.find() для поиска продукта в
     массиве products на основе id, который мы получили из useParams(). Важно использовать
    parseInt(id), чтобы преобразовать строку в число, так как id в URL будет строкой.)*/

    const chosenProduct = products.find(item => item.id === parseInt(id));

    return (
        <main className={style.main}>
            <div className={style.container}>
                <header className={style.header}>
                    <Link to={'/'} className="returnButton">
                        <img className="backArrow" src="/images/arrow_back.png" alt="" />
                    </Link>

                    <div className={style.basketWrapper}>
                        <div>
                            <p className={style.minorInfo}> {itemsCounter} товара </p>
                            <p className={style.minorInfo}>на сумму {itemPrice}  ₽</p>
                        </div>
                        <Link to={'/prodbasket'}>
                            <Basket />
                        </Link>
                        <Exit />
                    </div>
                </header>
                <div className={style.itemSection}>
                    <ReviewCard 
                        urlPic={chosenProduct.url}
                        title={chosenProduct.title}
                        description={chosenProduct.description}
                        price={chosenProduct.price}
                        weight={chosenProduct.weight}
                    />
                </div>
            </div>
        </main>
    );
}

export default Item;