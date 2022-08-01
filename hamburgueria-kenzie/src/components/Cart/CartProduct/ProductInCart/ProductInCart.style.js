import styled from "styled-components";

export const ContainerProduct = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 0.25fr 2.5fr 0.25fr;
    margin-bottom: 2vh;
`
export const ContainerImgProduct = styled.div`
    height: 10vh;
    background-color:#E0E0E0;
    border-radius: 5px;
    max-width: 8vh;
    max-height: 8vh;
`
export const ImgProduct = styled.img`
    height: 8vh;
`
export const ContainerInfos = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 0 1vh;
`
export const Infos = styled.div`
    display: flex;
    flex-direction: column;
`
export const InfoName = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #333333;
`
export const InfoCategory = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #828282;
    margin-top: 0.8vh;
`
export const ContainerPrice = styled.div`
    margin-top: 1vh;
`
export const Price = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #27AE60;
`
export const ContainerRmvButton = styled.div`
    margin: 0 0 0 0.3vh;
`
export const RmvButton = styled.button`
    cursor: pointer;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    background-color: transparent;
    border: none;
    color: #BDBDBD;
    &:hover{color: #27AE60;}
`