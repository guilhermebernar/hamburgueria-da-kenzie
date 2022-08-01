import { ButtonSearchField, HearderApp, LogoImg, SearchField, ShearchForm } from "./Header.style"
import logo from "./KenzieBurguerlogo.png"
import { useState, useEffect } from 'react'
import api from "../../services/api"

const HeaderApp = ({products, setFilteredProducts}) => {

    const [inputSearch, setinputSearch] = useState("")

    function searchProducts(search) {
        const listaFiltrada = products.filter((item) => {return item.name.toLowerCase().includes(inputSearch.toLowerCase())||item.category.toLowerCase().includes(inputSearch.toLowerCase())});
        setFilteredProducts(listaFiltrada);
      }

      useEffect(() => {
    
        api.get()
            .then(response => {
              const results = response.data;
      
              setFilteredProducts(results);
                
            })
            .catch(error => console.log(error))
            .finally(() => {
            });

        }, [inputSearch]);

    return(
        <HearderApp>
            <LogoImg src={logo} alt="logo"/>
            <ShearchForm  onSubmit={(e)=>{
                e.preventDefault()
                searchProducts()
                }}>
                <SearchField onChange={(e)=>setinputSearch(e.target.value)} htmlFor="search"/>
                <ButtonSearchField name="search" type="submit">Pesquisar</ButtonSearchField>
            </ShearchForm>
        </HearderApp>
    )
}

export default HeaderApp

// (e)=> searchProducts(e.value)