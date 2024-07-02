import React from "react"
import "./NuevoMensaje.css"

export const NuevoMensaje = () => {
  return (
    <div className="input-container">
        <input className="input-mensaje" type="text" />
        <button className="enviar" type="submit"><i className="bi bi-send"></i></button>
    </div>
  )
}