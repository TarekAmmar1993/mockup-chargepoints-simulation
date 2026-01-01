# Chargepoints Simulation app

This is a simulation app that helps parking space owners run simulations about installing charge points for electric vehicles. The user fills in a quick form specifying the number of charge points, car consumption (kWh), charging power per point (kW), etc., and generates a full report containing graphs and useful insights.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **pnpm** (v8 or higher) or **npm** / **yarn** as alternatives
- **Typescript**

## Getting Started

### 1. Extract the project / Clone the project locally

Unzip the `.zip` file and open the extracted folder with you favorite IDE

### 2. Install Dependencies

```bash
pnpm i
# or
npm install
# or
yarn install
```

### 3. Run the Development Server

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

### 4. See the magic

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Features

- **Interactive Form** - User-friendly form to input simulation parameters (number of chargepoints, saturation level, car consumption, charging power, simulation duration)
- **Real-time Validation** - Form validation with friendly error messages for better user experience
- **Data Visualization** - Multiple interactive charts (Bar charts, Line charts) to visualize charging events and energy distribution
- **Simulation Reports** - Comprehensive reports displaying:
  - Simulation parameters summary
  - Charging values per chargepoint by month
  - Example data from a randomly chosen day
  - Charge events statistics (per year, month, week, day)
  - Energy consumption metrics
- **Responsive Design** - Mobile-friendly interface that works seamlessly across all devices
- **State Management** - Global state management using React Context API for form data persistence
- **Reset Functionality** - Easy reset button to clear form data and start a new simulation

### Tech Stack

- **Vite** - Next-generation frontend build tool for fast development and optimized production builds
- **React 18** - Modern JavaScript library for building user interfaces with hooks
- **TypeScript** - Type-safe development for improved code quality and maintainability
- **Tailwind CSS 4** - Utility-first CSS framework for rapid UI development
- **Recharts** - Composable charting library built on React components for data visualization
- **React Context API** - Built-in state management for global form data sharing

## Notes

> **P.S.** The `useEffect` hook and timeout in the `<Report />` component are used solely to simulate the loading time before displaying the simulation results and charts. In a production environment, this delay would represent the actual computation time of the simulation algorithm.
