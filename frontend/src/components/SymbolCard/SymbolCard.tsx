import './symbolCard.css';
import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { ReactComponent as MarketCap } from '@/assets/market_cap.svg';
import { ReactComponent as Industry } from '@/assets/industry.svg';
import { useAppSelector } from '@/hooks/redux';
import ListItem from '@/components/ListItem';
import Up from '@/assets/up.png';
import Down from '@/assets/down.png';
import {getLargeNumberWithCurrency, getPriceWithCurrency} from "@/utils/numbers";
import usePreviousValue from "@/hooks/usePreviousValue";
import {useMemo} from "react";
import {selectors} from "@/store/dashboardOptionsSlice";

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
  const isPriceGoingUp = useMemo(() => previousPrice && price > previousPrice, [price, previousPrice]);
  const isPriceGoingDown = useMemo(() => previousPrice && price < previousPrice, [price, previousPrice]);
  const isPriceSignificantlyDifferent = useMemo(() => !previousPrice || (price >= previousPrice * 1.25 || price <= previousPrice * 0.75), [price, previousPrice]);
  const isActive = useMemo(() => activeSymbol === id, [activeSymbol, id]);
  const isNotActive = useMemo(() => activeSymbol !== id && activeSymbol !== null, [activeSymbol, id]);
  const containerClassNames = useMemo(() => `symbolCard ${!showInfo && "symbolCard--noInfo"} ${isNotActive && "symbolCard--notActive"} ${isActive && "symbolCard--active"} ${isPriceGoingUp && "symbolCard--green"} ${isPriceGoingDown && "symbolCard--red"} ${isPriceSignificantlyDifferent && "symbolCard__shake"}`,
      [showInfo, isActive, isNotActive, isPriceGoingUp, isPriceGoingDown, isPriceSignificantlyDifferent]);

  return (
    <div onClick={handleOnClick} className={containerClassNames}>
        <div className="symbolCard__header">
            <span>{id}</span>
            {trend && (
                <img
                    className="symbolCard__header__trendIcon"
                    src={trend === "UP" ? Up : Down}
                    alt={trend}
                />
            )}
        </div>
        <div className="symbolCard__content">
            <div className="symbolCard__content__price">
                <p>Price:</p>
                <div>{computedPrice} </div>
            </div>
            {showInfo && <><ListItem spacing="space-between" Icon={<CompanyIcon />} label={companyName} />
            <ListItem spacing="space-between" Icon={<Industry />} label={industry} />
            <ListItem spacing="space-between" Icon={<MarketCap />} label={computedMarketCap} /></>}
        </div>
    </div>
  );
};
export default SymbolCard;
