import "./style.css";
import Home from "../../assets/products/house.png";
import Notification from "../../assets/products/notification.png";
import Heart from "../../assets/products/heart.png";
import User from "../../assets/products/user.png";
import Line from "../../assets/products/line.png";
import Click from "../../assets/products/click.png";
import Circle from "../../assets/products/circle.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-default">
                <div className="footer-default__icons">
                    <img src={Home} alt="Home" />
                </div>
                <div className="footer-default__icons">
                    <img src={Notification} alt="Home" />
                </div>
                <div className="footer-default__icons-middle">
                    <img src={Circle} alt="Home" className="icons-circle" />
                    <img src={Click} alt="Home" className="icons-middle" />
                    <img src={Line} alt="Home" className="icons-line" />
                </div>
                <div className="footer-default__icons">
                    <img src={Heart} alt="Home" />
                </div>
                <div className="footer-default__icons">
                    <img src={User} alt="Home" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
