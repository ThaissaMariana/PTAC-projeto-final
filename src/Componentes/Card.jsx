import { Link } from "react-router-dom";

export default function Card({listinhamusic}){
    return(
        listinhamusic.map((videozinho) => (
             <div className="cardee">
            <div class="produto-carde" key={videozinho.id}>
               
              <Link to={`/detalhe/${videozinho.id}`}>
                <p class="letrinhas">Música: {videozinho.musica}</p>
              </Link>  
            
              

              <iframe
            width="300"
            height="300"
            src={ 
                "https://www.youtube.com/embed/" + videozinho.linkmusic.slice(17)}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-white; encrypted-media;">
                </iframe>
          </div>
          </div>
            )) 
    )}