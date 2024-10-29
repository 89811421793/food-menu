import "./products.css"
import Card from '../../components/elements/Card'
import Basket from "../../components/UI/Basket";
import {productsList} from "../../products.js"


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
               
                {productsList.map(item=>{
                        return(
                        <Card
                        key={item.id}
                        url={item.url}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        weight={item.weight}
                        />
                        )
                })}


                </div>

            </div>
        </main>
    )
}

export default Products;
