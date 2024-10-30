import style from "./desc.module.css"
import { Link } from "react-router-dom";
import Basket from "../../components/UI/Basket"
import Exit from "../../components/UI/Logout"
import ReviewCard from '../../components/elements/Review'
import { useSelector } from 'react-redux';


function Item() {
const product= useSelector(state => state.products.products)
    const itemsCounter = useSelector(state => state.products.countProduct)
    const itemPrice = useSelector(state => state.products.allPriceProductsBasket)


 
   

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

                    <ReviewCard urlPic="/images/2.png"
                        title="Свиные ребрышки на гриле"
                        description="Не следует, однако забывать, что консультация с широким активом представляет 
                        собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что
                         сложившаяся структура организации позволяет оценить значение новых предложений. 
                         Разнообразный и богатый опыт начало повседневной работы по формированию позиции 
                         требуют от нас анализа позиций.Не следует, однако забывать, что консультация с 
                         широким активом представляет собой интересный эксперимент проверки новых предложений.
                          Не следует, однако забывать, что сложившаяся структура организации позволяет оценить
                           значение новых предложений."
                        price={1600}
                        weight={750}
                    />
                </div>
            </div>
        </main>
    )
}

export default Item;
