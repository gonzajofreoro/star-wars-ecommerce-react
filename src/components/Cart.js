import { Link } from "react-router-dom";
import "../styles.css"
const Cart = () => {

    return (
        <>   
            <Link to="/"><button className="boton"><b>Volver al inicio</b></button></Link>
            <h2>Aqui esta tu flota:</h2>
                <div className="back">
                    <ul>
                    {Cart.map((element) =>(
                        <li>
                            <h2>{element.nave.name}</h2>
                            <h3>{element.nave.model}</h3>
                            <img src={element.nave.img_url} alt={element.nave.name} className="ItemImg"/>
                            <button >Borrar elemento</button>
                            <button  >Reset</button>
                        </li>
                    ))} 
                </ul>
            </div>
        </>
    )
}

export default Cart ; 