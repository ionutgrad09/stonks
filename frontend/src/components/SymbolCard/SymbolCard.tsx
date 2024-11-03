import React, {memo, useCallback, useEffect, useMemo, useRef} from "react";
import './symbolCard.css';
import {useAppSelector} from '@/hooks/redux';
import {getLargeNumberWithCurrency, getPriceWithCurrency} from "@/utils/numbers";
import usePreviousValue from "@/hooks/usePreviousValue";
import {selectors} from "@/store/dashboardOptionsSlice";
import PriceInfo from "@/components/SymbolCard/src/SymbolPrice";
import SymbolInfo from "@/components/SymbolCard/src/SymbolInfo";
import TrendIcon from "@/components/SymbolCard/src/TrendIcon";

const ANIMATION_TIMEOUT_MILLIS = 1000;

const SYMBOL_CARD_GREEN_CLASS = 'symbolCard--green';
const SYMBOL_CARD_RED_CLASS = 'symbolCard--red';

type SymbolCardProps = {
  id: string;
  onClick: (symbolId: string | null) => void;
  price: number;
  activeSymbol: string | null;
};

const SymbolCard = ({ id, onClick, price, activeSymbol }: SymbolCardProps) => {
  const { trend, companyName, industry, marketCap } = useAppSelector((state) => state.stocks.entities[id]);
  const showInfo = useAppSelector(selectors.selectShowCardInfo);

  const rootDivRef = useRef<HTMLDivElement | null>(null);

  const previousPrice = usePreviousValue(price);

  const computedPrice = useMemo(() => price ? getPriceWithCurrency(price) : "--", [price]);
  const computedMarketCap = useMemo(() => marketCap ? getLargeNumberWithCurrency(marketCap) : "--", [marketCap]);
  const priceChangeStatus = useMemo(() => {
    if (!previousPrice || previousPrice === price) {
      return { up: false, down: false, significant: false };
    }

    const up = price > previousPrice;
    const down = price < previousPrice;
    // 25% change is considered significant
    const significant = price >= previousPrice * 1.25 || price <= previousPrice * 0.75;

    return { up, down, significant };
  }, [price, previousPrice]);

  const isActive = activeSymbol === id;
  const isNotActive = activeSymbol !== id && activeSymbol !== null;

  const containerClassNames = useMemo(() => (['symbolCard',
      priceChangeStatus.significant && 'symbolCard__shake',
      !showInfo && 'symbolCard--noInfo',
      isNotActive && 'symbolCard--notActive',
      isActive && 'symbolCard--active',
    ].filter(Boolean).join(' ')),
    [showInfo, isActive, isNotActive, priceChangeStatus]);

  useEffect(() => {
    if (rootDivRef.current) {
      const rootDivElement = rootDivRef.current;

      if (priceChangeStatus.up) {
        rootDivElement.classList.add(SYMBOL_CARD_GREEN_CLASS);
      } else if (priceChangeStatus.down) {
        rootDivElement.classList.add(SYMBOL_CARD_RED_CLASS);
      }

      const timer = setTimeout(() => {
        rootDivElement.classList.remove(SYMBOL_CARD_GREEN_CLASS, SYMBOL_CARD_RED_CLASS);
      }, ANIMATION_TIMEOUT_MILLIS);

      // Cleanup in case the component re-renders very fast
      return () => clearTimeout(timer);
    }
  }, [priceChangeStatus.up, priceChangeStatus.down]);

  const handleOnClick = useCallback(() => {
    onClick(isActive ? null : id);
  }, [isActive, onClick, id]);


  return (
    <div ref={rootDivRef} onClick={handleOnClick} className={containerClassNames}>
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
export default memo(SymbolCard);
