import React from 'react'
import ReactDOM from 'react-dom/client'
import ColorCard from './ColorCard.jsx'

const card1 = {
    likes:"3",
    fecha:"1 hora",
    colores:["#36BA98", "#E9C46A", "#F4A261", "#E76F51"]
}
const card2 = {
    likes:"1",
    fecha:"1 minuto",
    colores:["#667BC6", "#FDFFD2", "#FFB4C2", "#DA7297"]
}
const card3 = {
    likes:"643",
    fecha:"ayer",
    colores:["#F5F7F8", "#F4CE14", "#379777", "#45474B"]
}
const card4 = {
    likes:"32",
    fecha:"1 año",
    colores:["#071952", "#088395", "#37B7C3", "#EBF4F6"]
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorCard carta={card1}/>
    <ColorCard carta={card2}/>
    <ColorCard carta={card3}/>
    <ColorCard carta={card4}/>
  </React.StrictMode>,
)
