import "./bask.css"
import Card from "../../components/UI/basketOrder"
import Exit from "../../components/UI/Logout"
import styled from 'styled-components'

function Bask({ totalsum }) {

    const BasketTitle = styled.h1`
                font-style: normal;
                font-weight: 700;
                font-size: 31px;
                line-height: 38px;
                text-transform: uppercase;
                color: #FFFFFF;
                margin:0 auto;
                `;

    const Total = styled.span`
                color: #D58C51;
    `;

    return (
        <div className="basketWrapper">
            <div className="containerBasket">
                <header className="basketHeader">
                    <button className="returnButton">
                        <img className="backArrow" src="/images/arrow_back.png" alt="" />
                    </button>
                    <BasketTitle>Корзина с выбранными товарами</BasketTitle>
                    <Exit/>
                </header>
                <main className="basketMain">
                    <Card src="/images/1.png" name="Устрицы по рокфеллеровски" price="2 700" />
                    <Card src="/images/3.png" name="Креветки по-королевски в лимонном соке" price="1 820" />
                    <Card src="/images/2.png" name="Свиные ребрышки на гриле с зеленью" price="1 600" />

                </main>

            </div>
            <footer className="basketFooter">
                <div className="containerBasket footerWrap">
                    <span className="footerText">Заказ на сумму: <Total> {totalsum} ₽ </Total></span>
                    <button className="footerButton">Оформить заказ</button>
                </div>
            </footer>
        </div>
    )
}

export default Bask;
