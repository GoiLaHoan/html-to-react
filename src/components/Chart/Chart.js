import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
//   import { Line, Bar, Pie, Doughnut } from "react-chartjs-2";
  // import faker from "faker";
  
  ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  const labels = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
  
  export const data = {
    labels,
    datasets: [
      {
        label: "Salse",
        data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15],
        borderColor: "#dfe2e5",
        backgroundColor: "rgba(0, 156, 255, .3)",
      },
    ],
  };
  
  // Multiple Line Chart
  
  export const data1 = {
    labels: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
    datasets: [
      {
        label: "Salse",
        data: [15, 30, 55, 45, 70, 65, 85],
        borderColor: "#dfe2e5",
        backgroundColor: "rgba(0, 156, 255, .5)",
        fill: true,
      },
      {
        label: "Revenue",
        data: [99, 135, 170, 130, 190, 180, 270],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(0, 156, 255, .3)",
        fill: true,
      },
    ],
  };
  
  //Single Bar Chart
  // const label3 = ;
  
  export const data3 = {
    labels: ["Italy", "France", "Spain", "USA", "Argentina"],
    datasets: [
      {
        label: "Dataset 1",
        data: [55, 49, 44, 24, 15],
        backgroundColor: [
          "rgba(0, 156, 255, .7)",
          "rgba(0, 156, 255, .6)",
          "rgba(0, 156, 255, .5)",
          "rgba(0, 156, 255, .4)",
          "rgba(0, 156, 255, .3)",
        ],
      },
      // {
      //   label: 'Dataset 2',
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
      // },
    ],
  };
  
  //Multiple Bar Chart
  export const data4 = {
    labels: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
    datasets: [
      {
        label: "US",
        data: [15, 30, 55, 65, 60, 80, 95],
        backgroundColor: ["rgba(0, 156, 255, .8)"],
      },
      {
        label: "UK",
        data: [8, 35, 40, 60, 70, 55, 75],
        backgroundColor: ["rgba(0, 156, 255, .5)"],
      },
      {
        label: "AU",
        data: [12, 25, 45, 55, 65, 70, 60],
        backgroundColor: ["rgba(0, 156, 255, .2)"],
      },
    ],
  };
  
  export const data5 = {
    labels: ["Italy", "France", "Spain", "USA", "Argentina"],
    datasets: [
      {
        label: "# of Votes",
        data: [55, 49, 44, 24, 15],
        backgroundColor: [
          "rgba(0, 156, 255, .7)",
          "rgba(0, 156, 255, .6)",
          "rgba(0, 156, 255, .5)",
          "rgba(0, 156, 255, .4)",
          "rgba(0, 156, 255, .3)",
        ],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };
  
  export const data6 = {
    labels: ["Italy", "France", "Spain", "USA", "Argentina"],
    datasets: [
      {
        label: '# of Votes',
        data: [55, 49, 44, 24, 15],
        backgroundColor: [
          "rgba(0, 156, 255, .7)",
          "rgba(0, 156, 255, .6)",
          "rgba(0, 156, 255, .5)",
          "rgba(0, 156, 255, .4)",
          "rgba(0, 156, 255, .3)"
      ],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };