import React from "react"
import "./NuevoMensaje.css"
import { useState } from "react"

export const NuevoMensaje = ({mensajes_actuales}) => {

    const [mensajes, setMensaje] = useState(mensajes_actuales)

    const handleSubmit = (e) => {
        e.preventDefault()   

        if(e.target[`text`].value != ""){
            const new_mensaje = {
                author: 'yo',
                text: e.target[`text`].value,
                estado: 'recibido',
                day: 'hoy',
                hour: '14:21',
                id: (mensajes.length + 1)
            }

        setMensaje([...mensajes, new_mensaje])
        console.log(mensajes)
            e.target[`text`]. value = ""
        }
    }

  return (
        <>
            <form onSubmit={handleSubmit} className="form-container">
                <input className="input-mensaje" name="text" id="text" type="text" />
                <button className="enviar" type="submit"><i className="bi bi-send"></i></button>
            </form>
        </>
  )
}