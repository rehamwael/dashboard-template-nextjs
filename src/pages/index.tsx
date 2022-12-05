// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Custom Components Imports
import ProductionPerformanceComponent from 'src/views/dashboard/ProductionPerformanceComponent'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import DashboardInfo from 'src/views/dashboard/DashboardInfo'
import Button from '@mui/material/Button'

const startIcon = <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M4.06252 17.2916C3.86287 17.2916 3.66322 17.2117 3.50349 17.052L1.90627 15.4548C1.58683 15.1354 1.58683 14.6562 1.90627 14.3367C2.22571 14.0173 2.74481 14.0173 3.02433 14.3367L4.06252 15.3749L6.69794 12.7395C7.01738 12.4201 7.49655 12.4201 7.81599 12.7395C8.13544 13.059 8.13544 13.5381 7.81599 13.8576L4.62155 17.052C4.46183 17.2117 4.26217 17.2916 4.06252 17.2916Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M10.8196 15C10.6052 11.7424 7.89508 9.16663 4.58331 9.16663C4.15523 9.16663 3.7372 9.20966 3.33331 9.29165V5.83329C3.33331 4.91282 4.07951 4.16663 4.99998 4.16663H16.6666C17.5871 4.16663 18.3333 4.91282 18.3333 5.83329V13.3333C18.3333 14.2538 17.5871 15 16.6666 15H10.8196ZM15.9537 5.69967L10.8333 8.45678L5.71296 5.69967C5.40904 5.53602 5.03 5.64973 4.86635 5.95365C4.7027 6.25757 4.81641 6.63661 5.12033 6.80025L10.537 9.71692C10.722 9.81653 10.9446 9.81653 11.1296 9.71692L16.5463 6.80025C16.8502 6.63661 16.9639 6.25757 16.8003 5.95365C16.6366 5.64973 16.2576 5.53602 15.9537 5.69967Z" fill="white"/>
</svg>;
const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={8}>
          <DashboardInfo />
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid display="flex" justifyContent="flex-end">
          <Button variant="contained" sx={{ mr: 2, textTransform: "capitalize", backgroundColor: 'grey.300', color: 'grey.800' }}>
            Button
          </Button>
          <Button variant="contained" sx={{ mr: 2, textTransform: "capitalize", backgroundColor: 'grey.300', color: 'grey.800' }}>
            Button
          </Button>
          <Button variant="contained" startIcon={startIcon} sx={{ mr: 2, textTransform: "capitalize", backgroundColor: 'primary.main' }}>
            Report an Issue
          </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={12}>
          <ProductionPerformanceComponent />
        </Grid>
        <Grid item xs={12}>
          <Table />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
