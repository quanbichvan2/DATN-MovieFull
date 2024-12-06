import { useState } from "react";
import { Product } from "../../models/product";
import { formatCurrency } from "./ulti";

interface SnackComponentProp {
    product: Product
}
const SnackComponent = ({ product }: SnackComponentProp) => {
    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => setQuantity((prev) => prev + 1);
    const decreaseQuantity = () => setQuantity((prev) => {
        if (prev == 0) {
            return 0
        }
        return prev > 0 ? prev - 1 : 0
    });

    return (
        <div className="item-box">
            <div className="item-image">
                <img src={product.image} alt={product.name} className="img-fluid" style={
                    {
                        width: "100%",
                        height: '200px',
                        objectFit: "cover",
                        objectPosition: "center"

                    }
                } />
            </div>
            <div className="item-details">
                <div className="item-title">{product.name}</div>
                <p>{product.description}</p>
                <span className="item-price">{formatCurrency(product.price)}</span>
                <div className="mt-3">
                    <button className="btn-quantity" onClick={() =>
                        decreaseQuantity()
                    }>-</button>
                    <input
                        type="text"
                        className="quantity-input mx-2"
                        value={quantity}
                        readOnly
                        style={{ border: 'none', width: '50px' }} />
                    <button className="btn-quantity" onClick={() => increaseQuantity()}>+</button>
                </div>
            </div>
        </div>
    )
}

export { SnackComponent };