import lemondessert from "./icons_assets/lemon dessert.jpg";
import mainImg from './icons_assets/restauranfood.jpg';
import greensalad from "./icons_assets/greek salad.jpg";
import Bro from "./icons_assets/bruchetta.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

export default function HomePage(){
    const navigate = useNavigate()
    const handleButtonClick=()=>{
        //window.location.href = '/booking-form';
        navigate('/booking-form');
    }
    return(<>
    <main>
    <div className="titleContainer">
        <div className="caption-container">
            <div className="grid">
                <div className="grid-item">
                    <p className="cap-title">Little Lemon</p>
                    <p className="cap-location">chicago</p>
                    <p className="title-description">Little lemon Restaurant is fashioned after the green rooms in theaters and studios where performers relax when they are not on stage or camera. Everyone is a star at The Green Room with our immersive cocktail experiences, VIP service and the best views of the city.</p>
                    <button className="reserve-btn" onClick={handleButtonClick} aria-label="On Click">Reserve a Table</button>
                    </div>
                <div className="grid-item">
                    <div className="img-container">
                    <img src={mainImg} alt="error not found"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="titleContainer offerContainer">
        <div className="caption-container">
            <div className="grid">
                <div className="grid-item">
                    <p className="offer-caption">This Week Specials!!</p>
                </div>
                <div className="button-grid-item">
                    <button className="reserve-btn online-btn" aria-label="On Click">Order Online</button>
                </div>
            </div>
        </div>
    </div>
    <div className="flex-container">
        <div className="flex-item">
        <div className="menu-item">
            <img src={greensalad} alt="Menu Item greensalad not found"/>
            <div className="menu-item-content">
                <div className="menu-item-titlePrice">
                <span className="menu-item-title">Green Salad</span>
                <aside>
                    <span className="menu-item-price">$30.50</span>
                </aside>
            </div>
            <div className="menu-item-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in arcu eu felis gravida posuere.</p>
            </div>
            <div className="menu-item-delivery">
                <p>Order a delivery &nbsp; <FontAwesomeIcon icon={faMotorcycle} /></p>
            </div>
            </div>
        </div>
        </div>
        <div className="flex-item">
        <div className="menu-item">
            <img src={Bro} alt="Menu Item Bro Images not"/>
            <div className="menu-item-content">
                <div className="menu-item-titlePrice">
                <span className="menu-item-title">Bruchetta</span>
                <aside>
                    <span className="menu-item-price">$18.00</span>
                </aside>
            </div>
            <div className="menu-item-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in arcu eu felis gravida posuere.</p>
            </div>
            <div className="menu-item-delivery">
                <p>Order a delivery &nbsp; <FontAwesomeIcon icon={faMotorcycle} /></p>
            </div>
            </div>
        </div>
        </div>
        <div className="flex-item">
        <div className="menu-item">
            <img src={lemondessert} alt="Menu Item Imagess"/>
            <div className="menu-item-content">
                <div className="menu-item-titlePrice">
                <span className="menu-item-title">Lemon Dessert</span>
                <aside>
                    <span className="menu-item-price">$20.00</span>
                </aside>
            </div>
            <div className="menu-item-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in arcu eu felis gravida posuere.</p>
            </div>
            <div className="menu-item-delivery">
                <p>Order a delivery &nbsp; <FontAwesomeIcon icon={faMotorcycle} /></p>
            </div>
            </div>
        </div>
        </div>
    </div>
    </main>
    </>)
}