import { useState } from "react"
import { getItem, setItem } from "../../services/LocalSorage"
import { BsFillCartDashFill, BsFillArrowLeftSquareFill } from 'react-icons/bs'
import { Link } from "react-router-dom"
import { H1, Header, Main, ProductsArea, SubTotal } from "../../styles/styles"


export function Cart() {
    const [data, setData] = useState(getItem('carrinhoYT') || [])

    const removeItem = (obj) => {
        const arrFilter = data.filter((e) => e.id != obj.id)
        setData(arrFilter)
        setItem("carrinhoYT", arrFilter)
    }

    const subTotal = Math.ceil(data.reduce((acc,cur) => acc + cur.price, 0))
    return (
        <>
            <Header>
                <Link to="/"><BsFillArrowLeftSquareFill /></Link>
                <H1>Card</H1>
            </Header>
            <Main>
                {
                    data.map((e) => (
                        <ProductsArea key={e.id}>
                            <h4>{e.title}</h4>
                            <img src={e.thumbnail} alt="" />
                            <h4>{`R$ ${e.price}`}</h4>
                            <button onClick={() => removeItem(e)}>
                                <BsFillCartDashFill />
                            </button>
                        </ProductsArea>
                    ))
                }
            </Main>
            <SubTotal>{`Subtotal R$ ${subTotal}`}</SubTotal>
        </>
    )
}