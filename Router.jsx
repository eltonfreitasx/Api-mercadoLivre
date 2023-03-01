import { Routes, Route } from 'react-router-dom'
import { Store } from './src/pages/Store'
import { Cart } from './src/pages/Cart'

export function Router() {
    return (
        <Routes>
                <Route exact path="/" element={<Store />} />
                <Route exact path="/cart" element={<Cart />} />
        </Routes>
    )
}