import { useParams } from "react-router-dom";
import Header from "./Componentes/Header";
export default function Detalhe(){
    const { id } = useParams();
    const lista = JSON.parse( localStorage.getItem("Lista"));

    const musica = lista.filter((objeto) => {
        if(objeto.id == id){
            return objeto;
        }
        return null;
    })



    return(
        
       musica.map((musica)=>
      <div>
        <Header/>
        <div className="cardee">
         <iframe
            width="300"
            height="300"
            src={ 
                "https://www.youtube.com/embed/" + musica.linkmusic.slice(17)}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-white; encrypted-media;">
                </iframe>
                <p class="letrinhas">{musica.musica}</p>
                <p class="letrinhas">{musica.artista}</p>
                <p class="letrinhas">{musica.visualizacao}</p>
                <p class="letrinhas">{musica.curtidas}</p>
          </div>
      </div>

    ));
}