/**
 * Component that visually displays a Line Chart of the passed prop parameters.
 *
 * Reference: https://stackoverflow.com/questions/65473469/how-to-use-chart-js-with-ionic-react
 */
import { Line, Bar } from "react-chartjs-2";

type ChartProps = {
  weights: any;
  days: any;
};

const LineChart: React.FC<ChartProps> = ({ weights, days }) => {
  const lineChartData = {
    labels: days,
    datasets: [
      {
        label: "Weight",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 3,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: weights,
      },
    ],
  };

  return (
    <Line
      data={lineChartData}
      options={
        {
          //scales: {xAxes: {ticks: {display: false}}}
        }
      }
    />
  );
};

export default LineChart;
