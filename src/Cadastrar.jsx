import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Header from "./Componentes/Header";

export default function Cadastrar () {

  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || []; 
  const [lista, setLista] = useState(listaLocalStorage);
  const [id,setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);
  const [musica, setMusica] = useState("");
  const [artista, setArtista] = useState("");
  const [visualizacao, setVisualizacao] = useState("");
  const [mostrarMensagem, setMostrarMensagem] = useState(false);
  const [curtidas, setCurtidas] = useState("")
  const [linkmusic, setLinkmusic] = useState("");

  useEffect(() => { localStorage.setItem("Lista", JSON.stringify(lista)) }, [lista]);

    const salvar =(e) =>{
        e.preventDefault();
        setLista([...lista, {
                musica: musica, artista: artista, visualizacao: visualizacao, curtidas: curtidas, linkmusic: linkmusic, 
                id: id 
              }]);
        setId(id + 1);
        setMusica("");
        setArtista("");
        setVisualizacao("");
        setCurtidas("");
        setMostrarMensagem(true);
        setLinkmusic("");
    };
    
  return (
    <div class="container">
      <Header/>
    <Link to="/">Voltar para a Home</Link>
    <h1 class="nomee"> Cadastrar Músicas</h1>
    <form class="produto-cardd" onSubmit={salvar}>

  <div class="card" style={{width: "18rem;"}}>
  <div class="card-body">
    <h5 class="card-title">Cadastre sua música aqui</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Informações</h6>
  
  <p class="nomee">Música:</p>
      <input value={musica} type="text"
      onChange={(e) =>{ setMusica(e.target.value)}}/>

  <p class="nomee">Artista:</p>
      <input value={artista} type="text"
      onChange={(e) =>{ setArtista(e.target.value)}}/>

  <p class="nomee">Visualizações:</p>
      <input value={visualizacao} type="text"
      onChange={(e) =>{ setVisualizacao(e.target.value)}}/>

  <p class="nomee">Curtidas:</p>
      <input value={curtidas} type="text"
      onChange={(e) =>{ setCurtidas(e.target.value)}}/>

   <p class="nomee">Link da música:</p>
      <input value={linkmusic} type="text"
      onChange={(e) =>{ setLinkmusic(e.target.value)}}/>
      
      <button className="button-red">Adicionar</button>
      </div>
</div>
    </form>
        {lista.map((ativ) => (
        <div class="produto-card" key={ativ.id}>

          <Link to={'/detalhe/${ativ.id}'}>
            <p>{ativ.atividade}</p>
          </Link>  
          <img src={ativ.linkmusic} alt="" class="imagem" />
          <p class="nomee">Música: {ativ.musica}</p>
          <p class="nomee">Artista: {ativ.artista}</p>
          <p class="nomee">Visualizações: {ativ.visualizacao}</p>
          <p class="nomee">Curtidas: {ativ.curtidas}</p>
      </div>
      
        ))}  
        </div>                                                                                                                     
  ); 

}