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
        <p></p>
      </div>

    ));
}