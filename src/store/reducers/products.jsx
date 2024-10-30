// слайс=модуль?
import { createSlice } from '@reduxjs/toolkit'
import { products } from '../../products'

// установка начального состояния
const initialState = {
    products: products,
    basketProducts: [],
    countProduct: 0,
    allPriceProductsBasket: 0,
    product: null
}

/*createAction+createReducer=createSlice;
Имя — свойство в состоянии приложения, внутри которого хранятся данные текущего слайса, начальный стэйт( базовая структура данных
 и какие-то изначальные данные) и набор редьюсеров, где происходят изменения состояния;*/
export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProductsBasket: (state, payload) => {

            state.basketProducts.push(payload.payload);
            // при добавлении надо запустить проверку длины массива
            state.countProduct = state.basketProducts.length;
            state.allPriceProductsBasket = state.basketProducts.reduce((acc, current) => {
                return acc + current.price
            }, 0)


        },

        deleteProductsBasket: (state, payload) => {
            state.basketProducts = state.basketProducts.filter((item) => {
                return item.idx !== payload.payload
            })
            // аналогично, только здесь отмена 
            state.countProduct = state.basketProducts.length;
            state.allPriceProductsBasket = state.basketProducts.reduce((acc, current) => {
                return acc + current.price
            }, 0)
        }
    }
})


export const { addProductsBasket, deleteProductsBasket } = productsSlice.actions

export default productsSlice.reducer
