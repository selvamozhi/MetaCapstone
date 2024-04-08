import 'bootstrap/dist/css/bootstrap.css';
import logo from "./icons_assets/Logo.svg";
export default function Nav(){
    return <>
  <nav class="navbar navbar-expand-lg navbar-light bg-light header-navbar">
  <div class="container-fluid">
   <span class="navbar-brand">
      <img src={logo} alt='file'/>
    </span>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <a class="nav-link" href="./home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./menu">Menu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./reservation">Reservation</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./orderOnline">Order Online</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./login">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
}