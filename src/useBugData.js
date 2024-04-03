import { useState, useEffect } from 'react';

const useBugData = () => {
  const [graphData, setGraphData] = useState({
    // Mock data structure; replace with actual data fetching logic
    labels: ['Sprint 1', 'Sprint 2', 'Sprint 3', 'Sprint 4'],
    datasets: [
      {
        label: 'New Bugs',
        data: [10, 20, 15, 7],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Existing Bugs',
        data: [5, 15, 10, 5],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  });

  // Replace useEffect with actual data fetching
  useEffect(() => {
    // Fetch data here
  }, []);

  return graphData;
};

export default useBugData;
