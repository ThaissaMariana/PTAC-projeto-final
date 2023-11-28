import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../style.css';

export default function Cadastrar () {

  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
  const [lista, setLista] = useState(listaLocalStorage || []);
  const [id,setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);
  const [musica, setMusica] = useState("");
  const [artista, setArtista] = useState("");
  const [visualizacao, setVisualizacao] = useState("");
  const [mostrarMensagem, setMostrarMensagem] = useState(false);
  const [linkmusic, setLinkmusic] = useState("");

  useEffect(() => { localStorage.setItem("Lista", JSON.stringify(lista)) }, [lista]);

    const salvar =(e) =>{
        e.preventDefault();
        setLista([...lista, {
                musica: musica, artista: artista, linkmusic: linkmusic, 
                id: id 
              }]);
        setId(id + 1);
        setMusica("");
        setArtista("");
        setVisualizacao("");
        setMostrarMensagem(true);
        setLinkmusic("");
    };
    
  return (
    <div class="container">
    <Link to="/">home</Link>
    <h1 class="nomee">Músicas Favoritas</h1>
    <form onSubmit={salvar}>
  
  <p class="nomee">Música:</p>
      <input value={musica} type="text"
      onChange={(e) =>{ setMusica(e.target.value)}}/>

  <p class="nomee">Artista:</p>
      <input value={artista} type="text"
      onChange={(e) =>{ setArtista(e.target.value)}}/>

   <p class="nomee">Link da música:</p>
      <input value={linkmusic} type="text"
      onChange={(e) =>{ setLinkmusic(e.target.value)}}/>
      
      <button className="button-red">Adicionar</button>
    </form>
        {lista.map((ativ) => (
        <div class="produto-card" key={ativ.id}>

          <Link to={'/detalhe/${ativ.id}'}>
            <p>{ativ.atividade}</p>
          </Link>  
          <img src={ativ.linkmusic} alt="" class="imagem" />
          <p class="nomee">Música: {ativ.musica}</p>
          <p class="nomee">Artista: {ativ.artista}</p>
      </div>
      
        ))}  
        </div>                                                                                                                     
  ); 

}