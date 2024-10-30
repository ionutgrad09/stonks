import "./symbolsView.css";
import SymbolsGrid from '@/components/SymbolsGrid';
import PriceChart from '@/components/PriceChart';
import DesktopInfo from './src/DesktopInfo';
import {useState} from 'react';

const SymbolsView = () => {
  const [activeSymbol, setActiveSymbol] = useState<null | string>(null);

  const handleSymbolClick = (symbolId: string) => {
    setActiveSymbol((s) => s === symbolId ? null : symbolId);
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
