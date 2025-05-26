<template>
  <div class="chart-demo">
    <Bar :data="barData" :options="barOptions" />
  </div>
</template>

<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const barData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'Votes',
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
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }
  ]
}

const barOptions = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: 'var(--vp-c-text-1)'
      }
    },
    title: {
      display: true,
      text: 'Votes by Color',
      color: 'var(--vp-c-text-1)'
    }
  },
  scales: {
    x: {
      ticks: {
        color: 'var(--vp-c-text-1)'
      },
      grid: {
        color: 'rgba(0,0,0,0.1)'
      }
    },
    y: {
      ticks: {
        color: 'var(--vp-c-text-1)'
      },
      grid: {
        color: 'rgba(0,0,0,0.1)'
      }
    }
  }
}
</script>

<style scoped>
.chart-demo {
  max-width: 600px;
  margin: 2rem auto;
}
</style> 