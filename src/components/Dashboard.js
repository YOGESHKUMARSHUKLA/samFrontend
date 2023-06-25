import React, { Component } from 'react';
import Chart from 'chart.js/auto';

class TraineeDashboard extends Component {
  chartRef = React.createRef();

  state = {
    traineeData: {
      totalTrainees: 0,
      maleTrainees: 0,
      femaleTrainees: 0,
      marriedTrainees: 0,
      singleTrainees: 0,
    },
  };

  componentDidMount() {
    // Fetch trainee statistics data from an API or calculate it from available data
    // For simplicity, let's assume the data is fetched and stored in state
    const traineeData = {
      totalTrainees: 100,
      maleTrainees: 60,
      femaleTrainees: 40,
      marriedTrainees: 30,
      singleTrainees: 70,
    };

    this.setState({ traineeData }, () => {
      this.createCharts();
    });
  }

  createCharts() {
    const { traineeData } = this.state;

    const chartLabels = ['Total', 'Male', 'Female', 'Married', 'Single'];
    const chartData = [
      traineeData.totalTrainees,
      traineeData.maleTrainees,
      traineeData.femaleTrainees,
      traineeData.marriedTrainees,
      traineeData.singleTrainees,
    ];

    const chartColors = [
      'rgba(255, 99, 132, 0.5)',
      'rgba(54, 162, 235, 0.5)',
      'rgba(255, 206, 86, 0.5)',
      'rgba(75, 192, 192, 0.5)',
      'rgba(153, 102, 255, 0.5)',
    ];

    const chartOptions = {
      scales: {
        y: {
          beginAtZero: true,
          precision: 0,
        },
      },
    };

    const chartConfig = {
      type: 'bar',
      data: {
        labels: chartLabels,
        datasets: [
          {
            label: 'Trainee Statistics',
            data: chartData,
            backgroundColor: chartColors,
          },
        ],
      },
      options: chartOptions,
    };

    const chartCanvas = this.chartRef.current.getContext('2d');
    new Chart(chartCanvas, chartConfig);
  }

  render() {
    return (
        <div>
      <div className="dashboard" style={{ backgroundColor: 'lightblue' }}>
        <h1>Statistics</h1>
        <div className="chart-container">
          <canvas ref={this.chartRef} />
        </div>
      </div>
      </div>
    );
  }
}

export default TraineeDashboard;
