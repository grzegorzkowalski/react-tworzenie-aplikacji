import React from 'react';
import './ProductList.css';

type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
};

type ProductListProps = {
    products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <div className="product-details">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p><strong>${product.price.toFixed(2)}</strong></p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
