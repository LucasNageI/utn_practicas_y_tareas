import React from "react"
import "./ListaMensajes.css"
import { useState } from "react"
import { MOOK_MENSAJES } from "../mookMensajes"

export const ListaMensajes = ({mensaje}) => {
    const [nuevo_mensaje, setNuevoMensaje] = useState(mensaje)


            const array_de_mensajes = mensaje.map((mensaje) => {
                if(mensaje.author != "yo"){
                    return(
                        <div className="mensaje-externo-container" key={mensaje.id}>
                        <div className="author-texto-container">
                            <span className="otro">{mensaje.author}</span>
                            <p className="text">{mensaje.text}</p>
                        </div>
                        <div className="estado-day-hour-container">
                            <span className="estado">{mensaje.estado}</span>
                            <span className="day">{mensaje.day}</span>
                            <span className="hour">{mensaje.hour}</span>
                        </div>
                    </div> 
                    )
                }
                else{
                    return(
                        <div className="mensaje-propio-container" key={mensaje.id}>
                        <div className="author-texto-container">
                            <span className="yo">{mensaje.author}</span>
                            <p className="text">{mensaje.text}</p>
                        </div>
                        <div className="estado-day-hour-container">
                            <span className="estado">{mensaje.estado}</span>
                            <span className="day">{mensaje.day}</span>
                            <span className="hour">{mensaje.hour}</span>
                        </div>
                    </div> 
                    )
                }
            } 
            
        )
    return array_de_mensajes

}