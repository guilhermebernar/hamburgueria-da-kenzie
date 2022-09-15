import styled from "styled-components";

export const ProdList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
@media (max-width:425px){
    display: flex;
    flex-direction: row;
    overflow: scroll;
    grid-template-columns: none;
    height: 50vh;
}
`

export const LoadingGif = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 8vh;
    max-height: 8vh;
    margin: 50% auto;
`