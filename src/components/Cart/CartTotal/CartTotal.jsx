import { ContainerTotals, RmvAllButton, Total, TotalInfos, TotalValue } from "./CartTotal.style"

const CartTotal = ({currentSale, setCurrentSale}) =>{

    const total = () => {
        return currentSale.reduce((p, c) => p + Number(c.price), 0);
      }

    return(
        <ContainerTotals>
            <TotalInfos>
                <Total>Total</Total>
                <TotalValue>{
                    total().toLocaleString("pt-br",{style:"currency", currency:"BRL"})
                    }</TotalValue>
            </TotalInfos>
            <RmvAllButton onClick={()=>setCurrentSale([])}>Remover todos</RmvAllButton>
        </ContainerTotals>
    )
}

export default CartTotal