import React from "react";
import "./PopupStyle.css";

const Popup = (props) => {
    const { animation, productName } = props;

    return (
        <div className={`popup-product ${animation}`}>
            <div className="popup-product__border">{productName}</div>
        </div>
    );
};

export default Popup;
