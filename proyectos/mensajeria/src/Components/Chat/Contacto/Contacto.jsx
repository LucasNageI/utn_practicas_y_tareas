import React from "react"
import "./Contacto.css"
import { MOOK_MENSAJES } from "../mookMensajes"
import { Link } from "react-router-dom"

export const Contacto = () => {
  return (
    <header className="header-contacto">
        <div className="contact-container">
            <Link to={'/Contactos'} className="back-btn"><i class="icon bi bi-arrow-left-short"></i></Link>
            <img className="foto-de-perfil" src="https://media.0221.com.ar/adjuntos/357/migration/0221/032019/1553553111207.jpg" alt="foto-de-perfil" />
            <span className="nombre-contacto">{MOOK_MENSAJES[1].author}</span>
        </div>
    </header>
  )
}