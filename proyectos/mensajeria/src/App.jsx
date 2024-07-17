import React from 'react'
import { ChatScreen } from './Screens/Contacto/ChatScreen'
import {Routes, Route} from 'react-router-dom'
import { ListaContactosScreen } from './Screens/ListaContactos/ListaContactosScreen'

    const App = () => {
        return (
            <Routes>
                <Route element={<ListaContactosScreen/>} path='/Contactos'/>
                <Route element={<ChatScreen/>} path='/ChatScreen'/>
            </Routes>
        )
    }

export default App