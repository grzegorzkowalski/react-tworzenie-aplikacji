import React from 'react';

interface ShopItemProps {
    title: string;
    onBuy: (title: string) => void;
}

const ShopItem: React.FC<ShopItemProps> = ({ title, onBuy }) => {
    if (typeof onBuy !== 'function') {
        console.error('onBuy prop must be a function');
        return null;
    }

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={() => onBuy(title)}>Kup</button>
        </div>
    );
};

export default ShopItem;