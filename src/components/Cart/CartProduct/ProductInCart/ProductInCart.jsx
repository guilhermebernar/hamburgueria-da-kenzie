import { ContainerImgProduct, ContainerInfos, ContainerPrice, ContainerProduct, ContainerRmvButton, ImgProduct, InfoCategory, InfoName, Infos, Price, RmvButton } from "./ProductInCart.style"

const ProductInCart = (
    { id, name, img, category, price, currentSale, setCurrentSale }
    ) => {

    const deleteProduct = (e) => {
        const newlist = currentSale.filter((e) => e.id !== id)
        setCurrentSale(newlist)
      }

    return (
      <ContainerProduct key={id}>
        <ContainerImgProduct>
          <ImgProduct
            src={img}
            alt={`Imagem do produto ${name} que está no carrinho`}
          />
        </ContainerImgProduct>
        <ContainerInfos>
          <Infos>
            <InfoName>{name}</InfoName>
            <InfoCategory>{category}</InfoCategory>
          </Infos>
          <ContainerPrice>
            <Price>
              {price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </Price>
          </ContainerPrice>
        </ContainerInfos>
        <ContainerRmvButton>
          <RmvButton onClick={() => deleteProduct()}>Remover</RmvButton>
        </ContainerRmvButton>
      </ContainerProduct>
    );
}

export default ProductInCart