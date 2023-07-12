
"use client";

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: [
        'Alexander Brown Hall',
        'Awolowo Hall',
        'Bello Hall',
        'Idia Hall',
        'Independence Hall',
        'Kuti Hall',
        'Mellanby Hall',
        'Nnamdi Azikwe Hall',
        'Queen Elizabeth Hall',
        'Tedder Hall',
      ],
      datasets: [
        {
          label: 'Amount (in millions)',
          data: [150, 100, 200, 180, 220, 80, 120, 250, 130, 160],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF',
            '#FF9F40',
            '#42f5ec',
            '#ff0066',
            '#ac73e8',
            '#00ff99',
          ],
        },
      ],
    };

    const options = {
      scales: {
        x: {
          title: {
            display: true,
            text: 'Amount (in millions)',
          },
          ticks: {
            beginAtZero: true,
            max: 250,
            stepSize: 50,
          },
        },
        y: {
          title: {
            display: true,
            text: 'Halls',
          },
        },
      },
    };

    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });
  }, []);

  return (
    <div className="w-full bg-whiterounded-lg p-8">
      <canvas ref={chartRef} />
    </div>
  );
};

export default BarChart;
