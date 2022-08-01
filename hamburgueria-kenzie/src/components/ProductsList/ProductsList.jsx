import api from '../../services/api';
import { useState, useEffect } from 'react'
import loadGif from "./1493.gif"
import Product from './Product/Product';
import {LoadingGif, ProdList} from './ProductsList.style'

const ProductList = ({products, setProducts, currentSale, setCurrentSale, filteredProducts}) =>{

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
    
        api.get()
            .then(response => {
              const results = response.data;
      
              setProducts(results);
                
            })
            .catch(error => console.log(error))
            .finally(() => {
              setLoading(false)
            });

        }, []);

    return(
        <ProdList>
          {loading ? 
            <LoadingGif>
              <img src={loadGif} alt="loading"/>
            </LoadingGif>
          : filteredProducts.length===0?
            (<>
              {products.map(({ id, name, img, category, price }) => {
                return <Product 
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
            </>):(
              <>
              {filteredProducts.map(({ id, name, img, category, price }) => {
                return <Product 
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
            </>
            )
          }  
        </ProdList>
    )
}

export default ProductList