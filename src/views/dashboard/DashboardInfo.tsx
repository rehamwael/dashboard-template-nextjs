import { Box, Grid, Typography } from "@mui/material";


const DashboardInfo = () => {
  return (
      <>
        <Typography variant="h5" sx={{ color: 'primary.main'}}>My Dashboard <Typography sx={{ fontSize: "12px", display: "inline-block" }}>  |  My KPI - <Typography sx={{ color: 'primary.main', display: "inline-block"}}>Production Performance Index</Typography></Typography></Typography>
        <Grid display="flex" sx={{ mt: 5 }}>
            <Box
                sx={{
                    width: 150,
                    height: 55,
                    backgroundColor: 'primary.dark',
                    borderRadius: "5px",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    mr: 2
                }}
                >My KPI</Box>

            <Box
                sx={{
                    width: 300,
                    height: 55,
                    backgroundColor: 'secondary.dark',
                    borderRadius: "5px",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    mr: 2
                }}
                >Production Performance Index (PPI)</Box>
            <Box
                sx={{
                    width: 260,
                    height: 55,
                    backgroundColor: 'grey.300',
                    borderRadius: "5px",
                    color: 'grey.900',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                }}
                >STBD - Brace Cutting - Section 9</Box>
        </Grid>
      </>
  )
}

export default DashboardInfo;
