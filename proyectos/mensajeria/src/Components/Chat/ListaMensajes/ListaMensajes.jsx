import React from "react"
import "./ListaMensajes.css"
import { Mensaje } from "./Mensaje/Mensaje.jsx"

export const ListaMensajes = ({mensaje}) => { /* aca va el .map() */
    const {author, text, estado, day, hour, id} = mensaje
    const mapeo_mensajes = mensaje.map(() =>
        <div id={id}>
            <span>{author}</span>
            <p>{text}</p>
            <span>{estado}</span>
            <div>
            <span>{day}</span>
            <span>{hour}</span>
            </div>
        </div> 
    )
    return mapeo_mensajes
}