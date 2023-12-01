import { Link } from "react-router-dom";
export default function Header() {
    return(
      <div>
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
           <img class="imagem" src="https://cdn.icon-icons.com/icons2/1379/PNG/512/folderredmusic_93355.png" alt=""></img>
            <a class="navbar-brand" href="#">Canzoni preferite</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Destaque</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Favoritos</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>

     );
}