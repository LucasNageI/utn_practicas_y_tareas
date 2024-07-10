import React from "react"
import {ListaMensajes, Contacto, NuevoMensaje} from "/home/lucas/Desktop/Practicas UTN/proyectos/mensajeria/src/Components/Chat"
import "./ChatScreen.css"
import { MOOK_MENSAJES } from "../Components/Chat/mookMensajes"
import { useState } from "react"

export const ChatScreen = () => {

    const [mensajesActuales, setNuevosMensajes] = useState(MOOK_MENSAJES)

    const agregarMensajeEnviado = (texto) => {
        console.log(texto)
        const new_mensaje = {
            author: 'yo',
            text: texto,
            estado: 'recibido',
            day: 'hoy',
            hour: '14:21',
            id: (mensajesActuales.length) + 1
        }
        setNuevosMensajes([...mensajesActuales, new_mensaje])

    }


  return (
    <div className="main-container">
        <div className="contact-container">
            <Contacto />
        </div>
            <div className="mensajes-container">
                <ListaMensajes mensaje={mensajesActuales} />
            </div>
                <NuevoMensaje agregarNuevoMensaje={agregarMensajeEnviado} />

    </div>
  )
}