import React from 'react';
import useBugData from '../../useBugData';
import BugStatsGraph from '../../components/BugStatsGraph';

const StatsPage = () => {
  const graphData = useBugData();

  return (
    <div>
      <h2>Bug Statistics</h2>
      <BugStatsGraph graphData={graphData} />
    </div>
  );
};

export default StatsPage;
