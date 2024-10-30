import './symbolCard.css';
import {useAppSelector} from '@/hooks/redux';
import {getLargeNumberWithCurrency, getPriceWithCurrency} from "@/utils/numbers";
import usePreviousValue from "@/hooks/usePreviousValue";
import React, {useMemo} from "react";
import {selectors} from "@/store/dashboardOptionsSlice";
import PriceInfo from "@/components/SymbolCard/src/SymbolPrice";
import SymbolInfo from "@/components/SymbolCard/src/SymbolInfo";
import TrendIcon from "@/components/SymbolCard/src/TrendIcon";

type SymbolCardProps = {
  id: string;
  onClick: (symbolId: string) => void;
  price: number;
  activeSymbol: string | null;
};

const SymbolCard = ({ id, onClick, price, activeSymbol }: SymbolCardProps) => {
  const { trend, companyName, industry, marketCap } = useAppSelector((state) => state.stocks.entities[id]);
  const previousPrice = usePreviousValue(price);
  const showInfo = useAppSelector(selectors.selectShowCardInfo);

  const handleOnClick = () => {
    onClick(id);
  };

  const computedPrice = useMemo(() => price ? getPriceWithCurrency(price) : "--", [price]);
  const computedMarketCap = useMemo(() => marketCap ? getLargeNumberWithCurrency(marketCap) : "--", [marketCap]);

    const priceChangeStatus = useMemo(() => {
        if (!previousPrice) return { up: false, down: false, significant: false };

        const up = price > previousPrice;
        const down = price < previousPrice;
        const significant = price >= previousPrice * 1.25 || price <= previousPrice * 0.75;

        return { up, down, significant };
    }, [price, previousPrice]);

    const isActive = activeSymbol === id;
    const isNotActive = activeSymbol !== id && activeSymbol !== null;

    const containerClassNames = useMemo(() => {
        const classes = ['symbolCard'];

        if (!showInfo) classes.push('symbolCard--noInfo');
        if (isNotActive) classes.push('symbolCard--notActive');
        if (isActive) classes.push('symbolCard--active');
        if (priceChangeStatus.up) classes.push('symbolCard--green');
        if (priceChangeStatus.down) classes.push('symbolCard--red');
        if (priceChangeStatus.significant) classes.push('symbolCard__shake');

        return classes.join(' ');
    }, [showInfo, isActive, isNotActive, priceChangeStatus]);


  return (
    <div onClick={handleOnClick} className={containerClassNames}>
        <div className="symbolCard__header">
            <span>{id}</span>
            <TrendIcon trend={trend} />
        </div>
        <div className="symbolCard__content">
            <PriceInfo computedPrice={computedPrice} />
            <SymbolInfo showInfo={showInfo} companyName={companyName} computedMarketCap={computedMarketCap} industry={industry} />
        </div>
    </div>
  );
};
export default SymbolCard;
