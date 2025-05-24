<template>
  <div class="charts-container">
    <h1>Chart.js Demo</h1>
    
    <div class="chart-grid">
      <div class="chart-item">
        <h2>Line Chart</h2>
        <div class="chart-wrapper">
          <Line v-if="mounted" :data="lineData" :options="lineOptions" />
        </div>
      </div>
      
      <div class="chart-item">
        <h2>Bar Chart</h2>
        <div class="chart-wrapper">
          <Bar v-if="mounted" :data="barData" :options="barOptions" />
        </div>
      </div>
      
      <div class="chart-item">
        <h2>Pie Chart</h2>
        <div class="chart-wrapper">
          <Pie v-if="mounted" :data="pieData" :options="pieOptions" />
        </div>
      </div>
      
      <div class="chart-item">
        <h2>Doughnut Chart</h2>
        <div class="chart-wrapper">
          <Doughnut v-if="mounted" :data="doughnutData" :options="doughnutOptions" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement
} from 'chart.js'
import { Line, Bar, Pie, Doughnut } from 'vue-chartjs'

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

const mounted = ref(false)

// Common chart options
const commonOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Chart'
    }
  }
}

// Line Chart Data
const lineData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Monthly Sales',
      data: [12, 19, 3, 5, 2, 3],
      borderColor: '#4CAF50',
      backgroundColor: 'rgba(76, 175, 80, 0.2)',
      tension: 0.1,
      fill: true
    }
  ]
}

const lineOptions = {
  ...commonOptions,
  plugins: {
    ...commonOptions.plugins,
    title: {
      display: true,
      text: 'Line Chart Example'
    }
  }
}

// Bar Chart Data
const barData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(255, 159, 64, 0.7)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 206, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(255, 159, 64)'
      ],
      borderWidth: 1
    }
  ]
}

const barOptions = {
  ...commonOptions,
  plugins: {
    ...commonOptions.plugins,
    title: {
      display: true,
      text: 'Bar Chart Example'
    }
  }
}

// Pie Chart Data
const pieData = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 206, 86)'
      ],
      borderWidth: 1
    }
  ]
}

const pieOptions = {
  ...commonOptions,
  plugins: {
    ...commonOptions.plugins,
    title: {
      display: true,
      text: 'Pie Chart Example'
    }
  }
}

// Doughnut Chart Data
const doughnutData = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 206, 86)'
      ],
      borderWidth: 1
    }
  ]
}

const doughnutOptions = {
  ...commonOptions,
  plugins: {
    ...commonOptions.plugins,
    title: {
      display: true,
      text: 'Doughnut Chart Example'
    }
  }
}

// Ensure charts are rendered after component is mounted
onMounted(() => {
  mounted.value = true
  // Force a re-render of charts
  setTimeout(() => {
    window.dispatchEvent(new Event('resize'))
  }, 100)
})
</script>

<style scoped>
.charts-container {
  padding: 2rem;
}

.chart-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.chart-item {
  background: var(--vp-c-bg);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.chart-wrapper {
  position: relative;
  height: 300px;
  width: 100%;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--vp-c-text-1);
}

h2 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: var(--vp-c-text-1);
}

@media (max-width: 768px) {
  .chart-grid {
    grid-template-columns: 1fr;
  }
  
  .chart-item {
    padding: 1rem;
  }
  
  .chart-wrapper {
    height: 250px;
  }
}
</style> 