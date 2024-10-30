import "./bask.css"
import Card from "../../components/UI/basketOrder"
import Exit from "../../components/UI/Logout"
import styled from 'styled-components'
import {Link } from "react-router-dom";
import { useSelector } from 'react-redux'

function Bask() {
// "подписка" на изменение состояния - хук useSelector
 const productsBasket = useSelector(state => state.products.basketProducts)

    const price = useSelector(state => state.products.allPriceProductsBasket)



    const BasketTitle = styled.h1`
                font-style: normal;
                font-weight: 700;
                font-size: 31px;
                line-height: 38px;
                text-transform: uppercase;
                color: #FFFFFF;
                margin:0 auto;
                `;

    return (
        <div className="basketWrapper">
            <div className="containerBasket">
                <header className="basketHeader">
                <Link to={'/'} className="returnButton">
                        <img className="backArrow" src="/images/arrow_back.png" alt="" />
                    </Link>
                    <BasketTitle>Корзина с выбранными товарами</BasketTitle>
                    <Exit/>
                </header>
                <main className="basketMain">
                    {productsBasket.map(item => {
                        return (
                            <Card
                                key={item.idx}
                                id={item.idx}
                                urlImg={item.url}
                                title={item.title}
                                price={item.price}

                            />
                        )
                    })}

                </main>

            </div>
            <footer className="basketFooter">
                <div className="containerBasket footerWrap">
                    <span className="footerText">Заказ на сумму: {price} ₽ </span>
                    <button className="footerButton">Оформить заказ</button>
                </div>
            </footer>
        </div>
    )
}

export default Bask;
