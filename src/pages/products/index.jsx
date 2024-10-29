import "./products.css"
import Card from '../../components/elements/Card'
import Basket from "../../components/UI/Basket";


function Products() {
    return (
        <main className="main">
            <div className="container">
                <header className="header">
                    <h1 className="main-title">Наша Продукция</h1>
                    <div className="basketWrapper">
                        <div>
                        <p className="minorInfo">3 товара </p>
                        <p className="minorInfo">на сумму 3 500 ₽</p>
                        </div>
                        <Basket />
                    </div>
                </header>

                <div className="productsList">
               
                    <Card
                        url="/images/1.png"
                        title="Устрицы по рокфеллеровски"
                        description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры "
                        price="2 700"
                        weight="500"
                        
                    />
                     

                    <Card
                        url="/images/2.png"
                        title="Свиные ребрышки на гриле с зеленью"
                        description="Не следует, однако забывать, что реализация намеченных плановых"
                        price="1 600"
                        weight="750"
                    />

                    <Card
                        url="/images/3.png"
                        title="Креветки по-королевски в лимонном соке"
                        description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
                        price="1 820"
                        weight="7"
                    />

                    <Card
                    url="/images/1.png"
                        title="Устрицы по рокфеллеровски"
                        description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры "
                        price="2 700"
                        weight="500"
                    />

                    <Card
                    url="/images/1.png"
                        title="Устрицы по рокфеллеровски"
                        description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры "
                        price="2 700"
                        weight="500"
                    />

                    <Card
                    url="/images/2.png"
                        title="Свиные ребрышки на гриле с зеленью"
                        description="Не следует, однако забывать, что реализация намеченных плановых"
                        price="1 600"
                        weight="750"
                    />

                    <Card
                    url="/images/3.png"
                        title="Креветки по-королевски в лимонном соке"
                        description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
                        price="1 820"
                        weight="7"
                    />

                    <Card
                    url="/images/1.png"
                        title="Устрицы по рокфеллеровски"
                        description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры "
                        price="2 700"
                        weight="500"
                    />

                </div>

            </div>
        </main>
    )
}

export default Products;
