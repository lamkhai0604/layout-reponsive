import "./style.css";
import Box from "./components/Box";
import data from "./product.js";

const Product = () => {
    return (
        <div className="product-page">
            <div className="product-page__header">
                <p className="product-page__header-title">New Products</p>
                <p className="product-page__header-btn">See All</p>
            </div>
            <div>
                <Box data={data} />
            </div>
            <div className="product-page__header">
                <p className="product-page__header-title">Popular</p>
                <p className="product-page__header-btn">See All</p>
            </div>
            <Box data={data} />
            <div className="product-page__header">
                <p className="product-page__header-title">Discount</p>
                <p className="product-page__header-btn">See All</p>
            </div>
            <Box data={data} />
        </div>
    );
};

export default Product;
