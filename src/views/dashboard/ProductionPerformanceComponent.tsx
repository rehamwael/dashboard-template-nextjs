// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'


// ** Types Imports
import { Grid } from '@mui/material'
import { Chart, ArcElement } from 'chart.js';
// react plugin used to create charts
 import { Doughnut } from 'react-chartjs-2';
 import { violationData, impactData } from 'src/MockData/data'


const ProductionPerformanceComponent = () => {
  Chart.register(ArcElement)
  return (
    <Card>
      <CardContent>
        <Box>
          <Typography variant='h5' color="primary.main">Production Performance Index (PPI)</Typography>
          <Grid container spacing={6} sx={{ mt: 4, pb: 6 }}>
          <Grid item xs={12} md={3}>
              <Typography variant='body1' color="primary.main" fontWeight="600">STBD - Brace Cutting - Section 9</Typography>
              <Typography variant='body1' color="grey.500" sx={{ fontSize: "12px" }}>CN/19/2113-CHMCESL0W0F-00023</Typography>
              <Grid display="flex" alignItems="center" sx={{ mt: 4 }}>
                  <Box sx={{ width: "14px", height: "14px", backgroundColor: "warning.dark", borderRadius: "5px", mr: 2 }} />
                  <Typography color="primary.main" sx={{ fontSize: "14px" }}>In Progress (Execution)</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3} sx={{ mt: 4, maxHeight: "180px" }}>
                <Doughnut
                    data={violationData}
                    options={ {
                      plugins: {
                        legend: {
                          display: true,
                          position: 'right'
                        },
                        tooltip: {
                          callbacks: {
                            label: (context) => {
                              let label = `${context.label.split(`${context.parsed}`)[0]}: ${context.parsed}%`;
                              return label;
                            }
                          }
                        }
                      },
                      cutout: '85%',
                      responsive: true,
                      maintainAspectRatio: false,
                    }}
                />
            </Grid>
            <Grid item xs={12} md={3}  sx={{ maxHeight: "180px" }}>
                <Doughnut
                    data={impactData}
                    options={ {
                      plugins: {
                        legend: {
                          display: true,
                          position: 'right'
                        },
                        tooltip: {
                          callbacks: {
                            label: (context) => {
                              let label = `${context.label.split(`${context.parsed}`)[0]}: ${context.parsed}%`;
                              return label;
                            }
                          }
                        }
                      },
                      cutout: '85%',
                      responsive: true,
                      maintainAspectRatio: false,
                    }}
                />
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ backgroundColor: "grey.700", p: 10, height: "180px", width: "370px", display: "flex", flexDirection: "column", justifyContent: "flex-end", borderRadius: "5px" }}>
                <Typography color="primary.main"><span style={{ fontSize: "60px" }}>1  </span>hour</Typography>
                <Typography color="primary.main" variant='body1' fontWeight="500" fontSize="18px">Potential productivity time loss</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ProductionPerformanceComponent;