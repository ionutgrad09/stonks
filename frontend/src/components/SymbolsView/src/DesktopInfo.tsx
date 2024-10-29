import './desktopInfo.css';
import HighlightSymbols from '@/components/HighlightedSymbols';
import TopHeadlines from '@/components/TopHeadlines';
import { memo } from 'react';

const DesktopInfo = () => {
  return (
    <div className="desktopInfo">
      <HighlightSymbols />
      <TopHeadlines />
    </div>
  );
};

export default memo(DesktopInfo);
