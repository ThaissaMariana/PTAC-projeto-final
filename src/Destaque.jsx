import React from "react";
import {Link} from "react-router-dom";
import Header from "./Componentes/Header";
import Card from "./Componentes/Card";

export default function Destaque(){
    const listinhamusic = JSON.parse(localStorage.getItem ("Lista")).slice(-4);
    const destaqueapp = listinhamusic.slice(-4)

    return (
        <div>
            <Header/>
                <h2 class="destaquenome">Canzoni Preferite</h2>
                <Card listinhamusic ={destaqueapp}/>
                <footer class="rodape">  © Canzoni Preferite 2023</footer>
            
        </div>
    );
}
