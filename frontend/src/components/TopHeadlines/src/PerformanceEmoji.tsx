import { memo } from 'react';
import { ReactComponent as HappyFace } from '@/assets/happy.svg';
import { ReactComponent as NeutralFace } from '@/assets/neutral.svg';
import { ReactComponent as SadFace } from '@/assets/sad.svg';
import './performanceEmoji.css';
import { stockTypes } from '@/lib/types';
type PerformanceEmojiProps = {
  bias: stockTypes.Bias;
};

const PerformanceEmoji = ({ bias }: PerformanceEmojiProps) => {
  return (
    <div className="performanceEmoji">
      {bias === 'POSITIVE' && <HappyFace />}
      {bias === 'NEUTRAL' && <NeutralFace />}
      {bias === 'NEGATIVE' && <SadFace />}
    </div>
  );
};
export default memo(PerformanceEmoji);
