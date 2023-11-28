import { Link } from "react-router-dom"
import "../style/card.css"

function Cards({ listaVideos }) {

    return (
        
        listaVideos.map((video) =>
         <div className="card">
            <iframe
            width="500"
            height="500"
            scr={ 
                "https://www.youtube.com/embed/" + video.url.slice(10)}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-white; encrypted-media;">
                </iframe>

         </div>
        )
    )
}