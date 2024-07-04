import React from 'react'
import { ColorCardList } from './ColorCards'
import { useState } from 'react'

const colors_card_info = [
    {
        id: 1,
        likes: 9,
        fecha: '9/12/2018',
        colores: ['#EEEDEB', '#E6B9A6', '#939185', '#2F3645']
    },
    {
        id: 2,
        likes: 12,
        fecha: '1 hora',
        colores: ['#36BA98', '#E9C46A', '#F4A261', '#E76F51']
    },
    {
        id: 3,
        likes: 2018,
        fecha: '2 dias',
        colores: ['#91DDCF', '#F7F9F2', '#7776B3', '#E2BBE9']
    },
    {
        id: 4,
        likes: 4,
        fecha: '1 dia',
        colores: ['#219C90', '#059212', '#D8EFD3', '#78ABA8']
    }
]  

const App = () => {

    const [colors_state, setColorCardInfo] = useState(colors_card_info)
    const handleSubmit = (e) => {
        e.preventDefault()

        const new_color_card = {
            id: colors_state.length + 1,
            likes: 0,            
            fecha: e.target.value,
            colores: [],
        }
        for(let i = 1; i <= 4; i++){
            new_color_card.colores.push(e.target[`color-${i}`].value)
        }
        setColorCardInfo([...colors_state, new_color_card])
    }

    return (
        <>
            <div className='color-cards'>
                <ColorCardList colors_info={colors_card_info}/>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <h2>Cree su propia carta</h2>
                    <div>
                        <label htmlFor="color-1">Ingrese color 1</label>
                        <input id="color-1" name="color-1" type="text"/>
                    </div>
                    <div>
                        <label htmlFor="color-2">Ingrese color 2</label>
                        <input id="color-2" name="color-2" type="text"/>
                    </div>
                    <div>
                        <label htmlFor="color-3">Ingrese color 3</label>
                        <input id="color-3" name="color-3" type="text"/>
                    </div>
                    <div>
                        <label htmlFor="color-4">Ingrese color 4</label>
                        <input id="color-4" name="color-4" type="text"/>
                    </div>
                    <div>
                        <label htmlFor="fecha">Ingrese la hora</label>
                        <input id="fecha" name="fecha" type="text"/>
                    </div>
                    <div>
                        <input id="likes" name="likes" className="likes" type="button"/>
                    </div>
                    <input type="submit"/>
                </form>
            </div>
        </>
    )
}

export default App