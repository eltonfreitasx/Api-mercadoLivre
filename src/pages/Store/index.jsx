import { BsFillCartCheckFill, BsCartPlusFill } from 'react-icons/bs'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getItem, setItem } from "../../services/LocalSorage"
import { H1, Header, Main, ProductsArea } from '../../styles/styles'

export function Store() {
    const [data, setData] = useState([])
    const [cart, setCart] = useState(getItem('carrinhoYT') || [])

    useEffect(() => {
        const fetchApi = async () => {
            const url = 'https://api.mercadolibre.com/sites/MLB/search?q=celular';
            const response = await fetch(url);
            const objJson = await response.json()
            setData(objJson.results)
        }
        fetchApi()
    }, [])

    const handleClick = (obj) => {
        const element = cart.find((e) => e.id === obj.id)
        if (element) {
            const arrFilter = cart.filter((e) => e.id != obj.id)
            setCart(arrFilter)
            setItem('carrinhoYT', arrFilter)
        } else {
            setCart([...cart, obj])
            setItem('carrinhoYT', [...cart, obj])
        }
    }

    const subTotal = data.reduce((acc,cur) => acc + cur.price, 0)

    return (
        <>
            <Header>
            <H1>Store</H1>
            <Link to="/cart">Carrinho</Link>
            </Header>
            <Main>
                {
                    data.map((e) => (
                        <ProductsArea key={e.id}>
                            <h4>{e.title}</h4>
                            <img src={e.thumbnail} alt="" />
                            <h4>{`R$ ${e.price}`}</h4>
                            <button
                                onClick={() => handleClick(e)}
                            >
                                {
                                    cart.some((itemCart) => itemCart.id === e.id) ? (
                                        <BsFillCartCheckFill />
                                    ) : (
                                        <BsCartPlusFill />
                                    )
                                }
                            </button>
                        </ProductsArea>
                    ))
                }
            </Main>
        </>
    )
}