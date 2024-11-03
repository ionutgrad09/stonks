import "./symbolPrice.css";
import React, { memo } from 'react';

type PriceInfoProps = {
    computedPrice: string;
};

const SymbolPrice = ({ computedPrice }: PriceInfoProps) => {
    return (
        <div className="priceInfo">
            <p className="priceInfo__label">Price:</p>
            <p className="priceInfo__value">{computedPrice}</p>
        </div>
    );
};

export default memo(SymbolPrice);
