import { CartContainer, CartEmpty01, CartEmpty02, CartHeader, CartMain, CartTitle } from "./Cart.style";
import CartProduct from "./CartProduct/CartProduct";
import CartTotal from "./CartTotal/CartTotal";


const Cart = ({ currentSale, setCurrentSale, cartTotal, setCartTotal }) => {
  return (
    <>
      <CartContainer>
          <CartHeader>
            <CartTitle>Carrinho de compras</CartTitle>
          </CartHeader>
          <CartMain>
                {currentSale.length === 0 ? 
                (
                  <>
                    <CartEmpty01>
                      Sua sacola está Vazia.
                    </CartEmpty01>
                    <CartEmpty02>
                      Adicione itens.
                    </CartEmpty02>
                  </>

                  ) : (
                  
                  <>
                    <CartProduct
                      currentSale={currentSale}
                      setCurrentSale={setCurrentSale}
                    />

                    <CartTotal
                    cartTotal={cartTotal} 
                    setCartTotal={setCartTotal} 
                    currentSale={currentSale}
                    setCurrentSale={setCurrentSale}
                    />
                  </>
                
                )}
          </CartMain>
      </CartContainer>
    </>
  );
};

export default Cart;
