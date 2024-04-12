import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"
import logo from "./icons_assets/Logo.svg";
export default function Nav(){
    return <>
  <div class="container">
  <div class="navbar-brand">
    <img src={logo} alt="unable to find images"/>
  </div>
  <ul class="nav-links">
    <li><a href="./home">HOME</a></li>
    <li><a href="./about">ABOUT</a></li>
    <li><a href="./menu">MENU</a></li>
    <li><a href="./booking-form">RESERVATION</a></li>
    <li><a href="./orderOnline">ORDER ONLINE</a></li>
    <li><a href="./login">LOGIN</a></li>
  </ul>
</div>

    </>
}