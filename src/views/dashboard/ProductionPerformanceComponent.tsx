// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

// ** Types Imports
import { Grid } from "@mui/material";
// react plugin used to create charts
import { Doughnut } from "react-chartjs-2";
import { violationData, impactData } from "src/model/data";
const ProductionPerformanceComponent = () => {
  return (
    <Card>
      <CardContent>
        <Box>
          <Typography variant="h5" color="primary.main">
            Production Performance Index (PPI)
          </Typography>
          <Grid container spacing={6} sx={{ mt: 4, pb: 6 }}>
            <Grid item xs={12} md={3}>
              <Typography variant="body1" color="primary.main" fontWeight="600">
                STBD - Brace Cutting - Section 9
              </Typography>
              <Typography
                variant="body1"
                color="grey.500"
                sx={{ fontSize: "12px" }}
              >
                CN/19/2113-CHMCESL0W0F-00023
              </Typography>
              <Grid display="flex" alignItems="center" sx={{ mt: 4 }}>
                <Box
                  sx={{
                    width: "14px",
                    height: "14px",
                    backgroundColor: "warning.dark",
                    borderRadius: "5px",
                    mr: 2,
                  }}
                />
                <Typography color="primary.main" sx={{ fontSize: "14px" }}>
                  In Progress (Execution)
                </Typography>
              </Grid>
              <Grid display="flex" alignItems="center" sx={{ mt: 7 }}>
                <img src="/images/picture.png" height={36} width={36} />
                <Grid sx={{ ml: 3 }}>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "12px" }}
                    color="primary.main"
                  >
                    Kunwar Singh
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: "10px" }}>
                    Accountable Owner
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3} sx={{ maxHeight: "180px" }}>
              <Grid container>
                <Grid item xs={6} md={6}>
                  <Grid style={{ position: "relative" }}>
                    <Doughnut
                      data={violationData}
                      options={{
                        legend: {
                          display: false,
                        },
                        cutoutPercentage: 85,
                        responsive: true,
                        maintainAspectRatio: false,
                      }}
                    />
                    <Grid
                      sx={{
                        position: "absolute",
                        width: "100%",
                        top: "50%",
                        left: 0,
                        textAlign: "center",
                        marginTop: "-28px",
                        lineHeight: "20px",
                      }}
                    >
                      <Typography variant="h4">12</Typography>
                      <Typography variant="body1" sx={{ fontSize: "12px" }}>
                        Violation
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6} md={6} display="flex">
                  <Grid>
                    {violationData.datasets[0].backgroundColor.map((data) => (
                      <Box
                        sx={{
                          background: data,
                          height: "10px",
                          width: "10px",
                          mt: 7,
                          mr: 1.5,
                          borderRadius: "3px",
                        }}
                      />
                    ))}
                  </Grid>
                  <Grid>
                    {violationData.labels.map((data) => (
                      <Typography sx={{ mt: 5.6, mr: 1, fontSize: "12px" }}>
                        {data} ..............
                      </Typography>
                    ))}
                  </Grid>
                  <Grid>
                    {violationData.datasets[0].data.map((data) => (
                      <Typography sx={{ mt: 5.6, fontSize: "12px" }}>
                        {data}
                      </Typography>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3} sx={{ maxHeight: "180px" }}>
              <Grid container>
                <Grid item xs={6} md={6}>
                  <Grid style={{ position: "relative" }}>
                    <Doughnut
                      data={impactData}
                      options={{
                        legend: {
                          display: false,
                        },
                        cutoutPercentage: 85,
                        responsive: true,
                        maintainAspectRatio: false,
                      }}
                    />
                    <Grid
                      sx={{
                        position: "absolute",
                        width: "100%",
                        top: "50%",
                        left: 0,
                        textAlign: "center",
                        marginTop: "-28px",
                        lineHeight: "20px",
                      }}
                    >
                      <Typography variant="h4">12</Typography>
                      <Typography variant="body1" sx={{ fontSize: "12px" }}>
                        Impact
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6} md={6} display="flex">
                  <Grid>
                    {impactData.datasets[0].backgroundColor.map((data) => (
                      <Box
                        sx={{
                          background: data,
                          height: "10px",
                          width: "10px",
                          mt: 7,
                          mr: 1.5,
                          borderRadius: "3px",
                        }}
                      />
                    ))}
                  </Grid>
                  <Grid>
                    {impactData.labels.map((data) => (
                      <Typography sx={{ mt: 5.6, mr: 1, fontSize: "12px" }}>
                        {data} ..............
                      </Typography>
                    ))}
                  </Grid>
                  <Grid>
                    {impactData.datasets[0].data.map((data) => (
                      <Typography sx={{ mt: 5.6, fontSize: "12px" }}>
                        {data}
                      </Typography>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  backgroundColor: "grey.700",
                  p: 10,
                  height: "180px",
                  width: "370px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  borderRadius: "5px",
                }}
              >
                <Typography color="primary.main">
                  <span style={{ fontSize: "60px" }}>1 </span>hour
                </Typography>
                <Typography
                  color="primary.main"
                  variant="body1"
                  fontWeight="500"
                  fontSize="18px"
                >
                  Potential productivity time loss
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductionPerformanceComponent;
