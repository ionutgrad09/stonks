import React from 'react';
import './topHeadlines.css';

import Row from '@/components/Row';
import TopHeadline from './src/TopHeadline';
import { stockTypes } from '@/lib/types';

type Headline = {
  bias: stockTypes.Bias;
  headline: string;
};

const data: Headline[] = [
  {
    bias: 'POSITIVE',
    headline: 'RegionX: to the moon and beyond!'
  },
  {
    bias: 'NEGATIVE',
    headline: 'Investors are worried about Potato Inc?'
  },
  {
    bias: 'NEUTRAL',
    headline: 'The Tangerine: We are not sure what is going on...'
  },
  {
    bias: 'POSITIVE',
    headline: 'WoodAxe: self driving is the future!'
  }
];

const TopHeadlines = () => {
  return (
    <Row spacing="md" className="topHeadlines">
      {data.map(({ headline, bias }, index) => {
        return <TopHeadline key={headline} bias={bias} headline={headline} />;
      })}
    </Row>
  );
};

export default TopHeadlines;
