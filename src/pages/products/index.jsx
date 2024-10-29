import  style from "./products.module.css"
import Card from '../../components/elements/Card'
import Basket from "../../components/UI/Basket";
import {productsList} from "../../products.js"
import Exit from "../../components/UI/Logout"
import {Link } from "react-router-dom";


function Products() {
    return ( 
        <main className={style.main}>
            <div className={style.container}>
                <header className={style.header}>
                    <h1 className={style.mainTitle}>Наша Продукция</h1>
                    <div className={style.basketWrapper}>
                        <div>
                        <p className={style.minorInfo}>3 товара </p>
                        <p className={style.minorInfo}>на сумму 3 500 ₽</p>
                        </div>
                        <Link to={'/prodbasket'}>
                        <Basket />
                        </Link>
                        <Exit/>
                    </div>
                </header>

                <div className={style.productsList}>
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
