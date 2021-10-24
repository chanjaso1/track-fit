/**
 * Component that visually displays a Line Chart of the passed prop parameters.
 * 
 * Reference: https://stackoverflow.com/questions/65473469/how-to-use-chart-js-with-ionic-react
 */
import { Doughnut } from "react-chartjs-2";

type RingProps = {
  vals: any;
  labs: any;
};

const ProgressRing: React.FC<RingProps> = ({ vals, labs }) => {
  const RingData = {
    labels: labs,
    datasets: [
      {
        label: "Steps",
        backgroundColor: ["#36a2eb", "rgba(183,183,183,1)"],
        borderWidth: 0,
        hoverBackgroundColor: ["#80C2EE", "#E0E0E0"],
        data: vals,
      },
    ],
  };

  return (
    <div style={{ height: "45%", padding: 10 }}>
      <Doughnut
        data={RingData}
        options={{
          plugins: { legend: { display: false } },
          cutout: "80%",
          radius: "100%",
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default ProgressRing;
