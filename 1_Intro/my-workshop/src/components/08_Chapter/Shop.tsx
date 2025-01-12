import React, {useState} from 'react';
import ShopItem from "./ShopItem.tsx";

const Shop : React.FC = () => {
    const [basketItems, setBasketItems] = useState<string[]>([]);

    const onBuy = (title : string) : void => {
        setBasketItems(prev => [...prev, title]);
    }

    return (
        <div>
            <ShopItem title="MacBook Pro" onBuy={onBuy} />
            <ShopItem title="Dell X5500" onBuy={onBuy} />
            <ShopItem title="Asus NT6000" onBuy={onBuy} />
            <ul>
                {
                    basketItems.map((item, i) => <li key={i}>{item}</li>)
                }
            </ul>
        </div>
    );
};

export default Shop;