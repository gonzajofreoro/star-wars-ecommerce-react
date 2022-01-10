import { useEffect, useState } from "react"
import "../styles.css"
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router';
import naves from "./naves.json"

const ItemDetailContainer = () => {

    const {id} = useParams();

    const [mensaje, setMensaje] = useState("Solicitando Información")
    const [item, setItems] = useState([])
    
    useEffect(()=>{

        const promesa = new Promise((res, rej) => {

            setTimeout(() => {
                const filtro = naves.filter((naves)=> naves.nave.name === id)
                res(filtro)
            }, 1000)
        })
        promesa
            .then((resultado) => {
                setMensaje("Todo bien")
                setItems(resultado)
            })
            .catch(() => {
                setMensaje("Cargando los archivos")

            })
    },[id])

    if(item.length === 0){
        return (
            <div>
                <h1>{mensaje}</h1>
            </div>
        )
    }else{
        return (
            <div>
                <ItemDetail item={item[0]}/>
            </div>
        )
    }
}

export default ItemDetailContainer