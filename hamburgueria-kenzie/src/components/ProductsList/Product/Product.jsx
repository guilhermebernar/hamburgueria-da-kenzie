import { toast } from "react-toastify";
import { ProductImg, ProdCard, ConteinerImg, ProductName, ProductCategory, ProductPrice, AddProduct} from "./Product.style";

const Product = ({ id, name, img, category, price, currentSale, setCurrentSale}) => {

  const sendToCart = (e) => {
    currentSale.some((e)=>e.id === id)
    ? toast.error("Produto já foi adicionado",{
      position: "top-center",
      autoClose: 1000,
    })
    :setCurrentSale([...currentSale, {
      name: name,
      id: id,
      price: price,
      category: category,
      img: img,
    }]);
    !currentSale.some((e)=>e.id === id)&& toast.success("Produto adicionado!",{
      position: "top-center",
      autoClose: 1000,
    })
  };

  return (
    <ProdCard key={id}>
      <ConteinerImg>
        <ProductImg src={img} alt={`Imagem do produto ${name}`} />
      </ConteinerImg>
      <ProductName>{name}</ProductName>
      <ProductCategory>{category}</ProductCategory>
      <ProductPrice>
        {price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
      </ProductPrice>
      <AddProduct onClick={()=>sendToCart()}>Adicionar</AddProduct>
    </ProdCard>
  );
};

export default Product;
