import { useState, useEffect } from "react";
import "./style.css";
import Box from "./components/Box";
import Popup from "./components/Popup";
import data from "./product.js";

const Product = () => {
    const [animation, setAnimation] = useState("");
    const [productName, setProductName] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setAnimation("");
            setProductName("");
        }, 1000);
    }, [productName]);

    const doShowPopup = (name) => {
        setAnimation("popup-product__active");
        setProductName(name);
    };

    return (
        <div className="product-page">
            <div className="product-page__header">
                <p className="product-page__header-title">New Products</p>
                <p className="product-page__header-btn">See All</p>
            </div>
            <div>
                <Box data={data} doShowPopup={doShowPopup} />
            </div>
            <div className="product-page__header">
                <p className="product-page__header-title">Popular</p>
                <p className="product-page__header-btn">See All</p>
            </div>
            <Box data={data} doShowPopup={doShowPopup} />
            <div className="product-page__header">
                <p className="product-page__header-title">Discount</p>
                <p className="product-page__header-btn">See All</p>
            </div>
            <Box data={data} doShowPopup={doShowPopup} />
            <Popup animation={animation} productName={productName} />
        </div>
    );
};

export default Product;
