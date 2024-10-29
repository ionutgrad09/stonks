import React from 'react';
import './highlightedSymbols.css';

import PerformanceCard from '@/components/PerformanceCard';
import Row from '@/components/Row';

type HighlightedSymbol = {
  trend?: 'UP' | 'DOWN' | null;
  symbolId: string;
  volume: number;
  change: number;
};

const data: HighlightedSymbol[] = [
  {
    trend: 'UP',
    symbolId: 'NVDA',
    volume: 323_463_212,
    change: 1.127
  },
  {
    trend: 'DOWN',
    symbolId: 'AAPL',
    volume: 221_673_743,
    change: 0.6534
  },
  {
    trend: 'DOWN',
    symbolId: 'TSLA',
    volume: 151_865_316,
    change: 0.99
  },
  {
    trend: 'DOWN',
    symbolId: 'AMZN',
    volume: 98_527_158,
    change: 0.9269
  },
  {
    trend: 'UP',
    symbolId: 'GOOGL',
    volume: 83_316_914,
    change: 1.1134
  },
  {
    trend: 'DOWN',
    symbolId: 'MSFT',
    volume: 73_735_142,
    change: 0.9932
  }
];

const HighlightedSymbols = () => {
  return (
    <Row spacing="md" className="highlightedSymbols">
      {data.map((symbol, index) => {
        return (
          <PerformanceCard
            change={symbol.change}
            key={index}
            trend={symbol.trend}
            title={symbol.symbolId}
            volume={symbol.volume}
          />
        );
      })}
    </Row>
  );
};

export default HighlightedSymbols;
