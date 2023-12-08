import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Componentes/Header";
import "./style.css";


export default function Cadastrar () {

  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || []; 
  const [lista, setLista] = useState(listaLocalStorage);
  const [id,setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);
  const [musica, setMusica] = useState("");
  const [artista, setArtista] = useState("");
  const [visualizacao, setVisualizacao] = useState("");
 
  const [curtidas, setCurtidas] = useState("")
  const [linkmusic, setLinkmusic] = useState("");

  useEffect(() => { localStorage.setItem("Lista", JSON.stringify(lista)) }, [lista]);

    const navigate = useNavigate();

    const salvar = async(e) =>{
        e.preventDefault();
       await setLista([...lista, {
                musica: musica, artista: artista, visualizacao: visualizacao, curtidas: curtidas, linkmusic: linkmusic, 
                id: id 
              }]);
        setId(id + 1);
        navigate("/");
        setMusica("");
        setArtista("");
        setVisualizacao("");
        setCurtidas("");
        setLinkmusic("");
    };
 
 <div class="container"></div>
  return (
    <div class="nomeio">
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
        </div>                                                                                                                     
  ); 

}