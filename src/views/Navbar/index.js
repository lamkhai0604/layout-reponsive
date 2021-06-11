import React from "react";
import "./style.css";
import btnToggle from "../../assets/Vector.png";
import Seacrh from "../../assets/search.png";
import Cart from "../../assets/cart.png";

const titleData = [
    { id: 1, name: "Home", url: "/home" },
    { id: 2, name: "Shop", url: "/shop" },
    { id: 3, name: "Product", url: "/product" },
];

const Navbar = () => {
    return (
        <div>
            <div className="backdrop" />
            <div className="main-header">
                <span id="side-menu-toggle">
                    <img src={btnToggle} alt="Logo" />
                </span>
                <div className="main-header__nav">
                    <ul className="main-header__item-list">
                        {titleData &&
                            titleData.map((item) => {
                                return (
                                    <li key={item.id} className="main-header__item">
                                        <a href={item.url}>{item.name}</a>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
                <div className="main-header__nav-title">
                    <div className="nav-title__name">
                        <p>LETRO</p>
                    </div>
                    <div className="nav-title__icons">
                        <img src={Seacrh} alt="Search" style={{marginRight: "5px"}} />
                        <img src={Cart} alt="Cart" />
                    </div>
                </div>
            </div>

            <div className="mobile-nav"></div>
        </div>
    );
};

export default Navbar;
