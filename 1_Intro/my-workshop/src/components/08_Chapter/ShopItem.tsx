import React from 'react';

interface ShopItemProps {
    title: string;
    onBuy: (title: string) => void;
}

const ShopItem: React.FC<ShopItemProps> = ({title, onBuy}) => {
    const clickHandler:  React.MouseEventHandler<HTMLButtonElement> | undefined = () => {
        if (typeof onBuy !== "function") {
            return;
        }
        onBuy(title);
    }

    return (
        <div>
            <p>{title}</p>
            <button onClick={clickHandler}>Buy</button>
        </div>
    );
};

export default ShopItem;