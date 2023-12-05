export default function Card({listaVideos }){
    return(

        <div>

            <div className="card">
            <iframe
            width="500"
            height="500"
            scr={ 
                "https://www.youtube.com/embed/" + listaVideos.linkmusic.slice(17)}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-white; encrypted-media;">
                </iframe>
                <p>{listaVideos.setMusica}</p>
                <p>{listaVideos.setArtista}</p>
                <p>{listaVideos.setVisualizacao}</p>
                <p>{listaVideos.setCurtidas}</p>
         </div>
        </div>
    );
}