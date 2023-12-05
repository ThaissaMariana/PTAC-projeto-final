export default function Card({videozinho}){
    return(

        <div>
            <h1>{atividade.atividade}</h1>
            <div className="card">
            <iframe
            width="500"
            height="500"
            scr={ 
                "https://www.youtube.com/embed/" + videozinho.linkmusic.slice(17)}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-white; encrypted-media;">
                </iframe>

         </div>
        </div>
    );
}