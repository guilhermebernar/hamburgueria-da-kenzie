import { CartContainer } from "./CartProduct.style"
import ProductInCart from "./ProductInCart/ProductInCart"

const CartProduct = ({currentSale, setCurrentSale}) =>{
    return(
        <CartContainer>
            {currentSale.map(({ id, name, img, category, price }, ) => {
                return <ProductInCart 
                key={id}
                id={id}
                name={name} 
                img={img} 
                category={category} 
                price={price}
                currentSale={currentSale}
                setCurrentSale={setCurrentSale}
                />
                })}
        </CartContainer>
    )
}

export default CartProduct