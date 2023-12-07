import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Cadastrar from './Cadastrar'
import Destaque from './Destaque'
import Detalhe from './Detalhe'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Cadastro" element={<Cadastrar />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Destaque" element={<Destaque />}></Route>
        <Route path="/Detalhe/:id" element={<Detalhe />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
