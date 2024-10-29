import './loading.css';
import { memo } from 'react';
const Loading = () => {
  return (
    <div className="loading">
      <div className="loading__pulse"></div>
    </div>
  );
};

export default memo(Loading);
