import styled from "styled-components";

export const ProdCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border:0.5px solid;
    border-radius: 4px;
    margin: 0 4vh 3vh 0;
    border-width: 3px;
    border-color: #E0E0E0;
    transition: 1s;
&:hover{transform: scale(1.1)}
@media (max-width:435px){
&:hover{transform: none;}
}
`

export const ConteinerImg = styled.div`
    background-color: #F5F5F5;
    width: 100%;
@media (max-width:435px){
    width: 20vh;
}
`

export const ProductImg = styled.img`
    align-items: center;
    height: 100%;
    width: 50%;
    margin: 0 25% 0 25%;
@media (max-width:435px){
    width: 20vh;
    margin: 0;
}
`
export const ProductName = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    margin: 1vh 0 1vh 0;
    font-size: 1.7vh;
@media (max-width:768px){
    font-size: 1.5vh;
}
@media (max-width:435px){
    font-size: 1.8vh;
    margin: 2vh 0 2vh 0;


}
`

export const ProductCategory = styled.span`
    color: #828282;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 1.2vh;
`

export const ProductPrice = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 1.6vh;
    margin: 1vh 0 1vh 0;
    color: #27AE60;
@media (max-width:435px){
    font-size: 2vh;
    margin: 5vh 0 2vh 0;
}
`
export const AddProduct = styled.button`
    cursor: pointer;
    width: 15vh;
    border: none;
    font-size: 1.4vh;
    color: white;
    border-radius: 3px;
    height: 3vh;
    background-color: #27AE60;
    margin: 1vh 0 2vh 0;
    &:hover{background-color:#34b96b9f}
@media (max-width:435px){
    width: 15vh;
}
`