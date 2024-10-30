import "./symbolPrice.css";
import React, { memo } from 'react';

type PriceInfoProps = {
    computedPrice: string;
};

const SymbolPrice = ({ computedPrice }: PriceInfoProps) => {
    return (
        <div className="priceInfo">
            <p>Price:</p>
            <div>{computedPrice}</div>
        </div>
    );
};

export default memo(SymbolPrice);
