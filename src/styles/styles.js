import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding: 20px;
    background-color: ${(props) => props.theme['red-500']};
    color: ${(props) => props.theme['gray-100']};

    a {
        text-decoration: none;
        color: ${(props) => props.theme['gray-100']};
        font-size: 1.7rem;
        font-weight: bold;
        display: flex;
        align-items: center;

        &:hover {
            text-decoration: underline;
        }
    }
`

export const Main = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 50px;
`

export const H1 = styled.h1`
    align-items: center;
    text-align: center;
`

export const ProductsArea = styled.div`
   border: 1px solid rgb(194, 193, 193);
   width: 150px;
   height: 320px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-direction: column;
   padding: 20px;

   h4 {
    font-size: 0.9rem;
   }

   button {
    font-size: 30px;
    background: transparent;
    border: none;
    color: ${(props) => props.theme['red-500']};
    cursor: pointer;
   }

    img {
        border-radius: 20px;
    }
`

export const SubTotal = styled.h3`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
`