import styled from "styled-components"

export const CartContainer = styled.div`
`

export const CartHeader = styled.div`
    background-color: #27AE60;
    padding: 3vh 0 3vh 0;
    border-radius: 6px 6px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CartMain = styled.div`
    background-color: #F5F5F5;
    padding: 3vh 2vh 3vh 2vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0px 0px 6px 6px;
`

export const CartTitle = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #FFFFFF;
`

export const CartEmpty01 = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #333333;
    margin-bottom: 3vh;
`

export const CartEmpty02 = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #828282;
`