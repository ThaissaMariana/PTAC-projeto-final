import { Link } from "react-router-dom"
import "../style/card.css"

function Cards({ listaVideos }) {
    return (
        listaVideos.map((video) =>  
         <div className="card">
            <iframe
             width="500"
             height="500"

            </div>
        
        
        )
    )
}