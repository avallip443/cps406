import React from 'react';
import { render } from '@testing-library/react';
import BugStatsGraph from '../BugStatsGraph';

describe('BugStatsGraph', () => {
  it('renders correctly', () => {
    const mockGraphData = {
      labels: ['Sprint 1', 'Sprint 2'],
      datasets: [{ label: 'New Bugs', data: [5, 10] }],
    };

    const { getByText } = render(<BugStatsGraph graphData={mockGraphData} />);
    expect(getByText('New Bugs')).toBeInTheDocument();
  });
});
