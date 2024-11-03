import "./trendIcon.css";
import React, { memo } from 'react';
import Up from '@/assets/up.png';
import Down from '@/assets/down.png';

type TrendIconProps = {
    trend: 'UP' | 'DOWN' | null;
};

const TrendIcon = ({ trend }: TrendIconProps) => {
    if (!trend) {
        return null;
    }

    return (
        <img
            className="trendIcon"
            src={trend === 'UP' ? Up : Down}
            alt={trend}
        />
    );
};

export default memo(TrendIcon);
