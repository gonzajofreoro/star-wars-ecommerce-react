import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import {Routes,Route} from "react-router-dom"
import Cart from "./Cart"

const Main = () => {

    return (
        <>
            <Routes>
                <Route path="/categorias/:bando" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </>
    )
}

export default Main