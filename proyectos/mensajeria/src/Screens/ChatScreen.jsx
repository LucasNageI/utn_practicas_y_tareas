import React from "react"
import {ListaMensajes, Contacto, NuevoMensaje} from "/home/lucas/Desktop/Practicas UTN/proyectos/mensajeria/src/Components/Chat"
import "./ChatScreen.css"

export const ChatScreen = () => {

    const MOOK_MENSAJES = [
        {
            author: 'yo',
            text: 'texto de mensaje',
            estado: 'visto',
            day: 'hoy',
            hour: '13:15',
            id: '1'
        },
        {
            author: 'minion',
            text: 'Hola que tal?',
            estado: 'visto',
            day: 'hoy',
            hour: '13:16',
            id: '2'
        },
        {
            author: 'yo',
            text: 'Sos real? OMG',
            estado: 'visto',
            day: 'hoy',
            hour: '13:17',
            id: '3'
        },
        {
            author: 'yo',
            text: 'texto de mensaje',
            estado: 'visto',
            day: 'hoy',
            hour: '13:15',
            id: '1'
        },
        {
            author: 'minion',
            text: 'Hola que tal?',
            estado: 'visto',
            day: 'hoy',
            hour: '13:16',
            id: '2'
        },
        {
            author: 'yo',
            text: 'Sos real? OMG',
            estado: 'visto',
            day: 'hoy',
            hour: '13:17',
            id: '3'
        },
        {
            author: 'yo',
            text: 'texto de mensaje',
            estado: 'visto',
            day: 'hoy',
            hour: '13:15',
            id: '1'
        },
        {
            author: 'minion',
            text: 'Hola que tal?',
            estado: 'visto',
            day: 'hoy',
            hour: '13:16',
            id: '2'
        },
        {
            author: 'yo',
            text: 'Sos real? OMG',
            estado: 'visto',
            day: 'hoy',
            hour: '13:17',
            id: '3'
        },
        {
            author: 'yo',
            text: 'texto de mensaje',
            estado: 'visto',
            day: 'hoy',
            hour: '13:15',
            id: '1'
        },
        {
            author: 'minion',
            text: 'Hola que tal?',
            estado: 'visto',
            day: 'hoy',
            hour: '13:16',
            id: '2'
        },
        {
            author: 'yo',
            text: 'Sos real? OMG',
            estado: 'visto',
            day: 'hoy',
            hour: '13:17',
            id: '3'
        },
        {
            author: 'yo',
            text: 'texto de mensaje',
            estado: 'visto',
            day: 'hoy',
            hour: '13:15',
            id: '1'
        },
        {
            author: 'minion',
            text: 'Hola que tal?',
            estado: 'visto',
            day: 'hoy',
            hour: '13:16',
            id: '2'
        },
        {
            author: 'yo',
            text: 'Sos real? OMG',
            estado: 'visto',
            day: 'hoy',
            hour: '13:17',
            id: '3'
        },
        {
            author: 'yo',
            text: 'texto de mensaje',
            estado: 'visto',
            day: 'hoy',
            hour: '13:15',
            id: '1'
        },
        {
            author: 'minion',
            text: 'Hola que tal?',
            estado: 'visto',
            day: 'hoy',
            hour: '13:16',
            id: '2'
        },
        {
            author: 'yo',
            text: 'Sos real? OMG',
            estado: 'visto',
            day: 'hoy',
            hour: '13:17',
            id: '3'
        }
    ]

  return (
    <div className="main-container">
        <div className="contact-container">
            <Contacto />
        </div>
            <div className="mensajes-container">
                <ListaMensajes mensaje={MOOK_MENSAJES} /> {/* hace el map */}
            </div>
        <NuevoMensaje />
    </div>
  )
}