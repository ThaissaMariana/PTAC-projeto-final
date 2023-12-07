import { useParams } from "react-router-dom";
import Card from '../Components/Card';
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
        <div className="cardee">
         <iframe
            width="300"
            height="300"
            src={ 
                "https://www.youtube.com/embed/" + videozinho.linkmusic.slice(17)}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-white; encrypted-media;">
                </iframe>
                <p>{musica.Musica}</p>
                <p>{musica.Artista}</p>
                <p>{musica.Visualizacao}</p>
                <p>{musica.Curtidas}</p>
          </div>
      </div>

    ));
}