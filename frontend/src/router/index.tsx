import React from 'react';
import SymbolsView from '@/components/SymbolsView';
import { Route, Routes, Navigate } from 'react-router-dom';
import withSuspense from "@/router/withSuspense";

// Improve performance and bundle size by lazy-loading Profile and Statements pages
const ProfileView = withSuspense(React.lazy(() => import('@/components/ProfileView')));
const StatementsView = withSuspense(React.lazy(() => import('@/components/StatementsView')));

const Router = () => {
  return (
      <Routes>
        <Route index element={<SymbolsView />} />
        <Route index path="profile" element={<ProfileView />} />
        <Route index path="statements" element={<StatementsView />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
  );
};

export default Router;
