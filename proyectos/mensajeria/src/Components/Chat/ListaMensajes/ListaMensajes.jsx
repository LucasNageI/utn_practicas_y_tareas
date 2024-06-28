import React from "react"
import "./ListaMensajes.css"

export const ListaMensajes = ({mensaje}) => { /* aca va el .map() */

        return mensaje.map((mensaje) =>
            <div className="mensaje-container" id={mensaje.id}>
                <div className="author-texto-container">
                    <span className="author">{mensaje.author}</span>
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