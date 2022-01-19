import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import CartContext from "./components/CartContext"
import { BrowserRouter} from "react-router-dom"


const App = () => {

    return (
        <>
        <BrowserRouter>
            <CartContext>
                <Header/>
                <Main/>
            </CartContext>    
        </BrowserRouter>
        <Footer/>
    </>
    )
}

export default App;