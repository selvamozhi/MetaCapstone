import lemondessert from "./icons_assets/lemon dessert.jpg";
import mainImg from './icons_assets/restauranfood.jpg';
import greensalad from "./icons_assets/greek salad.jpg";
import Bro from "./icons_assets/bruchetta.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
export default function Main(){
    return<>
    <main>
    <div className="titleContainer">
        <div class="caption-container">
            <div class="grid">
                <div class="grid-item">
                    <p className="cap-title">Little Lemon</p>
                    <p className="cap-location">chicago</p>
                    <p className="title-description">Little lemon Restaurant is fashioned after the green rooms in theaters and studios where performers relax when they are not on stage or camera. Everyone is a star at The Green Room with our immersive cocktail experiences, VIP service and the best views of the city.</p>
                    <button className="reserve-btn">Reserve a Table</button>
                    </div>
                <div class="grid-item">
                    <div className="img-container">
                    <img src={mainImg} alt="errornot found"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="titleContainer offerContainer">
        <div class="caption-container">
            <div class="grid">
                <div class="grid-item">
                    <p className="offer-caption">This Week Specials!!</p>
                </div>
                <div class="button-grid-item">
                    <button className="reserve-btn online-btn">Order Online</button>
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
                <span className="menu-item-title">title</span>
                <aside>
                    <span className="menu-item-price">$19.99</span>
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
        <div class="flex-item">
        <div className="menu-item">
            <img src={Bro} alt="Menu Item Bro Images not found"/>
            <div className="menu-item-content">
                <div className="menu-item-titlePrice">
                <span className="menu-item-title">title</span>
                <aside>
                    <span className="menu-item-price">$19.99</span>
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
        <div class="flex-item">
        <div className="menu-item">
            <img src={lemondessert} alt="Menu Item Imagess"/>
            <div className="menu-item-content">
                <div className="menu-item-titlePrice">
                <span className="menu-item-title">title</span>
                <aside>
                    <span className="menu-item-price">$19.99</span>
                </aside>
            </div>
            <div className="menu-item-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing. Nullam in arcu eu felis gravida posuere.</p>
            </div>
            <div className="menu-item-delivery">
                <p>Order a delivery &nbsp; <FontAwesomeIcon icon={faMotorcycle} /></p>
            </div>
            </div>
        </div>
        </div>
    </div>
    </main>
    </>
}