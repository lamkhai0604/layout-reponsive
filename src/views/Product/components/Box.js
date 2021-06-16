import "./BoxStyle.css";
import HeartIcon from "../../../assets/products/heart-icon.png";

const Box = (props) => {
    const { data, doShowPopup } = props;

    return (
        <div className="product-box">
            {data &&
                data.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className="product-box__details"
                            onClick={() => doShowPopup(item.description)}
                        >
                            <div className="details__imgBg">
                                {item.discount && item.discount === "yes" ? (
                                    <span className="details__imgBg-bagde">{item.percent}%</span>
                                ) : null}

                                <img src={item.imageUrl} alt={item.name} />
                                <div>
                                    <img src={HeartIcon} alt="Heart" />
                                </div>
                            </div>
                            <div className="details__content">
                                <p>{item.description}</p>
                                <p className="details__content-price">${item.price}</p>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default Box;
