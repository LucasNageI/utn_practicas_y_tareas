import React from "react"
import {ListaMensajes, Contacto, NuevoMensaje} from "/home/lucas/Desktop/Practicas UTN/proyectos/mensajeria/src/Components/Chat"
import "./ChatScreen.css"
import { MOOK_MENSAJES } from "../Components/Chat/mookMensajes"

export const ChatScreen = () => {
    
console.log(MOOK_MENSAJES)
  return (
    <div className="main-container">
        <div className="contact-container">
            <Contacto />
        </div>
            <div className="mensajes-container">
                <ListaMensajes mensaje={MOOK_MENSAJES} />
            </div>
        <NuevoMensaje />
    </div>
  )
}