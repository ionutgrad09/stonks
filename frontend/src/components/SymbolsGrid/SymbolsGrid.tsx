import "./symbolsGrid.css";
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import SymbolCard from '../SymbolCard';
import { fetchAllStocks, selectors } from '@/store/stocksSlice';

type SymbolsGridProps = {
  onSymbolClick: (symbolId: string) => void;
  activeSymbol: string | null;
};

const SymbolsGrid = ({ onSymbolClick, activeSymbol }: SymbolsGridProps) => {
  const stockSymbols = useAppSelector(selectors.selectStockIds);
  const prices = useAppSelector((state) => state.prices);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllStocks());
  }, [dispatch]);

  return (
    <div className="symbolsGrid">
      {stockSymbols.map((id, i) => (
        <SymbolCard activeSymbol={activeSymbol} price={prices[id]} onClick={onSymbolClick} key={i} id={id} />
      ))}
    </div>
  );
};

export default SymbolsGrid;
