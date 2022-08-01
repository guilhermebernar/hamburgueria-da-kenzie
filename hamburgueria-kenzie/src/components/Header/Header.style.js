import styled from "styled-components"

export const HearderApp = styled.header`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 1vh 10vh 1vh 10vh;
    background-color: #F5F5F5;
@media (max-width: 768px){
    padding: 1vh 5vh 1vh 5vh;

}
@media (max-width: 425px){
    padding: 1vh 2vh 1vh 2vh;
    flex-direction: column;
    align-items: center;
}
`

export const LogoImg = styled.img`
    height: 3vh;
@media (max-width: 425px){
    height: 2vh;
}
`

export const ShearchForm = styled.form`
    display:flex;
    flex-direction:row;
    align-items:center;
`

export const SearchField = styled.input`
    position: relative;
    left: 8vh;
    z-index: 1;
    width: 30vh;
    height: 3vh;
    border: solid;
    border-radius: 4px;
    border-color: #E0E0E0;
    border-width: 1px;
    outline: none;
    max-inline-size: 10;
    @media (max-width: 768px){
        width: 25vh;
    }
    @media (max-width: 425px){
        margin-left: -8vh;
        width: 30vh;
        height: 3vh;
        margin-top: 1vh;
    }
`
export const ButtonSearchField = styled.button`
    cursor: pointer;
    z-index: 2;
    width: 7.5vh;
    border: none;
    font-size: 1.2vh;
    color: white;
    border-radius: 3px;
    height: 2.3vh;
    background-color: #27AE60;
    &:hover{background-color:#34b96b9f}
@media (max-width: 425px){
    margin-top: 1vh;
}
`
