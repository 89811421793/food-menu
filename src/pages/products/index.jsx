import  style from "./products.module.css"
import Card from '../../components/elements/Card'
import Basket from "../../components/UI/Basket";
import Exit from "../../components/UI/Logout"
import {Link } from "react-router-dom";
import { useSelector } from 'react-redux';


function Products() {

 const products = useSelector(state => state.products.products)
    const count = useSelector(state => state.products.countProduct)
    const price = useSelector(state => state.products.allPriceProductsBasket)



    return ( 
        <main className={style.main}>
            <div className={style.container}>
                <header className={style.header}>
                    <h1 className={style.mainTitle}>Наша Продукция</h1>
                    <div className={style.basketWrapper}>
                        <div>
                        <p className={style.minorInfo}>{count} товара </p>
                        <p className={style.minorInfo}>на сумму {price} ₽</p>
                        </div>
                        <Link to={'/prodbasket'}>
                        <Basket />
                        </Link>
                        <Exit/>
                    </div>
                </header>

                <div className={style.productsList}>
                {products.map(item=>{
                        return(
                        <Card
                        key={item.id}
	       id={item.id}
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
