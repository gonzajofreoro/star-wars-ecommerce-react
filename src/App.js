import Header from "./components/Header"
import Main from "./components/Main"
import { BrowserRouter} from "react-router-dom"
import Footer from "./components/Footer"


const App = () => {

    return (
        <>
            <BrowserRouter>
                    <Header/>
                    <Main/>
            </BrowserRouter>
            <Footer/>
        </>
    )
}

export default App;