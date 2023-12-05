import {Link} from "react-router-dom";
import Header from "./Componentes/Header";
import Card from "./Componentes/Card";

const listinhamusic = JSON.parse(localStorage.getItem ("listaVideos")) || [];

export default function Home(){
    return (
        <div>
            <Header/>
            {listinhamusic.map((videozinho)=>
                <Card videozinho ={videozinho}/>
            )};
            
        </div>
    );
}
