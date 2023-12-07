import {Link} from "react-router-dom";
import Header from "./Componentes/Header";
import Card from "./Componentes/Card";

export default function Destaque(){
    const listinhamusic = JSON.parse(localStorage.getItem ("Lista")) || [];

    return (
        <div>
            <Header/>
            
                <Card listinhamusic ={listinhamusic}/>
            
        </div>
    );
}
