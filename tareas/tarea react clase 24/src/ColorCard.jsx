import React from "react"
import  "./ColorCardStyles.css"

function ColorCard({carta}) {

    const {likes, fecha, colores} = carta
    console.log(colores[3])

  return ( 
    <div className="card-container">
        <div className="colores-container">
            <div style={
                {
                backgroundColor: colores[0],
                height: "40%",
                width: "100%"
                }
                }></div>

            <div style={
                {
                backgroundColor: colores[1],
                height: "30%",
                width: "100%"
                }
                }></div>

            <div style={
                {
                backgroundColor: colores[2],
                height: "18%",
                width: "100%"
                }
                }></div>

            <div style={
                {
                backgroundColor: colores[3],
                height: "12%",
                width: "100%"
                }
                }></div>
        </div>

        {/* los estilos en linea de react se escriben como si fueran objetos */}

        <div className="likes-hora">
            <button className="btn"><i className="bi bi-heart"></i>{likes}</button>
            <span className="fecha">{fecha}</span>
        </div>

    </div>
  )
}

export default ColorCard
