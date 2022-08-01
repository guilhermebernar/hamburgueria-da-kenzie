import styled from 'styled-components'

export const MainApp = styled.main`
    display: grid;
    grid-template-columns: 1.4fr 0.6fr;
    padding: 3vh 10vh 1vh 10vh;
@media (max-width: 768px){
    padding: 3vh 5vh 1vh 5vh;

}
@media (max-width: 425px){
    display: flex;
    flex-direction: column;
    padding: 3vh 2vh 1vh 2vh;
    height: 88vh;
}
`