import React, {useState} from "react";
import ShopItem from "./ShopItem.tsx";

const Shop: React.FC = () => {
    const [purchasedItems, setPurchasedItems] = useState<string[]>([]);

    const handleBuy = (title: string) => {
        setPurchasedItems([...purchasedItems, title]);
    };

    return (
        <div>
            <ShopItem title="MacBook Pro" onBuy={handleBuy} />
            <ShopItem title="Dell X5500" onBuy={handleBuy} />
            <ShopItem title="Asus NT6000" onBuy={handleBuy} />
            <ul>
                {purchasedItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Shop;