import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const EprData = [15,20,23,23,31,39,48,51,62,73,75,82,94];
const EpData = [15,20,23,23,31,39,48,51,62,73,75,82,94];
const IData = [15, 24, 29, 26, 35,48, 53, 60, 78, 89, 90, 101, 119];
const xLabels = [
  '20',
  ' ',
  '25',
  '  ',
  '30',
  '   ',
  '35',
  '    ',
  '40',
  '     ',
  '60',
  '      ',
  '65'
];

export default function StackedBarChart() {
  return (
    <BarChart
      width={620}
      height={250}

      series={[
        { data: EprData,  id: 'EprId', stack: 'total' },
        { data: EpData,  id: 'EpId', stack: 'total' },
        { data: IData, id: 'IId', stack: 'total' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band',categoryGapRatio : 0.5 }]}
      margin={{
        top: 20,
        left: 30 ,
        bottom: 60,
      }}
      sx ={{
        '& .MuiBarElement-series-IId ' :{
          fill: "#6e69f6"
        },
        '& .MuiBarElement-series-EpId ' :{
          fill: "#362FD9"
        },
        '& .MuiBarElement-series-EprId ' :{
          fill: "#040085"
        },
        '& .MuiChartsLegend-mark ' :{
          fill: "white"
        },
        '& .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-line ' :{
          stroke: "none"
        }

      }}
    />
  );
}