import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }) => {
  console.log(dataPoints);
  const totalMax = Math.max(...dataPoints.map((dp) => dp.value));

  return (
    <div className='chart'>
      {dataPoints.map((dp) => (
        <ChartBar
          value={dp.value}
          max={totalMax}
          label={dp.label}
          key={dp.label}
        />
      ))}
    </div>
  );
};

export default Chart;
