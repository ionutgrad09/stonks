import React, { memo } from 'react';
import ListItem from '@/components/ListItem';
import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { ReactComponent as Industry } from '@/assets/industry.svg';
import { ReactComponent as MarketCap } from '@/assets/market_cap.svg';

type AdditionalInfoProps = {
    showInfo: boolean;
    companyName: string;
    industry: string;
    computedMarketCap: string;
};

const SymbolInfo = ({ showInfo, companyName, industry, computedMarketCap }: AdditionalInfoProps) => {
    if (!showInfo) {
        return null;
    }

    return (
        <>
            <ListItem spacing="space-between" Icon={<CompanyIcon />} label={companyName} />
            <ListItem spacing="space-between" Icon={<Industry />} label={industry} />
            <ListItem spacing="space-between" Icon={<MarketCap />} label={computedMarketCap} />
        </>
    );
};

export default memo(SymbolInfo);
