import styled from "styled-components";

export const ContainerTotals = styled.div`
    height: 100%;
    width: 80%;
    margin-top: 1vh;
`
export const TotalInfos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const Total = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #333333;
`
export const TotalValue = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #828282;
`
export const RmvAllButton = styled.button`
    width: 100%;
    background: #E0E0E0;
    border: 2px solid #E0E0E0;
    border-radius: 8px;
    color: #828282;
    padding: 1.5vh;
    margin-top: 1vh;
&:hover{
    background: #d6d6d6;
    border: 2px solid #d6d6d6;
}
`