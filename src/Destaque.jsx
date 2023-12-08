import React from "react";
import {Link} from "react-router-dom";
import Header from "./Componentes/Header";
import Card from "./Componentes/Card";

export default function Destaque(){
    const listinhamusic = JSON.parse(localStorage.getItem ("Lista")).slice(-3);
    const destaqueapp = listinhamusic.slice(-3)

    return (
        <div>
            <Header/>
            
                <Card listinhamusic ={destaqueapp}/>
            
        </div>
    );
}
