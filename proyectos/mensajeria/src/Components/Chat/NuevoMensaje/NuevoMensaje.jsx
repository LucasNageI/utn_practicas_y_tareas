import React from "react"
import "./NuevoMensaje.css"

export const NuevoMensaje = ({agregarNuevoMensaje}) => {

    const handleSubmit = (e) => {
        e.preventDefault()   

        let mensajeNuevo = e.target["text"].value

        if(mensajeNuevo != ""){
            agregarNuevoMensaje(mensajeNuevo)
            e.target["text"].value = ""
    }
}
  return (
    <>
        <form onSubmit={handleSubmit} autoComplete="off" className="form-container">
            <input className="input-mensaje" name="text" id="text" type="text" />
            <button className="enviar" type="submit"><i className="bi bi-send"></i></button>
        </form>
    </>
  )

}