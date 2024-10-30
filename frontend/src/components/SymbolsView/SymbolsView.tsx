import "./symbolsView.css";
import SymbolsGrid from '@/components/SymbolsGrid';
import PriceChart from '@/components/PriceChart';
import DesktopInfo from './src/DesktopInfo';
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { dashboardOptionsSlice, selectors } from "@/store/dashboardOptionsSlice";

const SymbolsView = () => {
  const activeSymbol = useAppSelector(selectors.getActiveSymbol);
  const dispatch = useAppDispatch();

  const handleSymbolClick = (symbolId: string) => {
    dispatch(dashboardOptionsSlice.actions.setActiveSymbol(symbolId !== activeSymbol ? symbolId : null));
  };

  return (
    <div className="symbolsView">
      <DesktopInfo/>
      <div className="symbolsView__content">
        <SymbolsGrid activeSymbol={activeSymbol} onSymbolClick={handleSymbolClick}/>
        <div className="symbolsView__chart">
          <h3>PRICE HISTORY</h3>
          <PriceChart symbolId={activeSymbol}/>
        </div>
      </div>
    </div>
  );
};

export default SymbolsView;
