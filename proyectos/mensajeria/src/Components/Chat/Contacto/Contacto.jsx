import React from "react"
import "./Contacto.css"
import { MOOK_MENSAJES } from "../mookMensajes"

export const Contacto = () => {
  return (
    <header className="header-contacto">
        <div className="contact-container">
            <button className="back-btn"><i class="icon bi bi-arrow-left-short"></i></button>
            <img className="foto-de-perfil" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkwux2cnhItp4x1syD11EEmrjXx_fEVThndA&s" alt="foto-de-perfil" />
            <span className="nombre-contacto">{MOOK_MENSAJES[1].author}</span>
        </div>
    </header>
  )
}