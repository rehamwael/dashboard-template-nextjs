// ** MUI Imports
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { tableRowsPPI } from 'src/model/data'
import { Typography, Grid } from '@mui/material'


const DashboardTable = () => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow sx={{ backgroundColor: "grey.600" }}>
              <TableCell sx={{ color: "white", textTransform: "capitalize", fontSize: "15px" }}>Work Item</TableCell>
              <TableCell sx={{ color: "white", textTransform: "capitalize", fontSize: "15px" }}>Index</TableCell>
              <TableCell sx={{ color: "white", textTransform: "capitalize", fontSize: "15px" }}>Quality</TableCell>
              <TableCell sx={{ color: "white", textTransform: "capitalize", fontSize: "15px" }}>Quantity</TableCell>
              <TableCell sx={{ color: "white", textTransform: "capitalize", fontSize: "15px" }}>Effort</TableCell>
              <TableCell sx={{ color: "white", textTransform: "capitalize", fontSize: "15px" }}>Total Events</TableCell>
              <TableCell sx={{ color: "white", textTransform: "capitalize", fontSize: "15px" }}>Action</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {tableRowsPPI.map((row) => (
              <TableRow hover key={row.index} sx={{ border: 0, '&:nth-child(even)': {  backgroundColor: "grey.50" } }}>
                <TableCell sx={{ border: 0, py: 6 }}>
                  <Grid display="flex">
                  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="42" height="42" rx="6" fill="#D0D7E5"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6 18.5585L19.8243 22.7294C19.9021 22.7743 19.9837 22.8067 20.0667 22.8273V30.9167L13.1153 26.8028C12.7959 26.6138 12.6 26.2703 12.6 25.8992V18.5585ZM29.4 18.4476V25.8992C29.4 26.2703 29.2042 26.6138 28.8848 26.8028L21.9334 30.9167V22.7565C21.9503 22.748 21.9671 22.739 21.9837 22.7294L29.4 18.4476Z" fill="#7D879F"/>
                    <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M12.827 16.534C12.9152 16.4226 13.0266 16.3284 13.1564 16.2592L20.5064 12.3445C20.815 12.1801 21.1851 12.1801 21.4936 12.3445L28.8436 16.2592C28.9437 16.3126 29.0329 16.3807 29.1089 16.4602L21.0504 21.1128C20.9974 21.1434 20.9485 21.1784 20.904 21.2171C20.8595 21.1784 20.8106 21.1434 20.7576 21.1128L12.827 16.534Z" fill="#7D879F"/>
                  </svg>
                  <Grid sx={{ ml: 2 }}>
                    <Typography variant="body1" color="primary.dark" sx={{ fontSize: "14px"}}>{row.workItem}</Typography>
                    <Typography variant="body1" sx={{ fontSize: "12px"}}>2897364</Typography>
                  </Grid>
                  </Grid>
                </TableCell>
                <TableCell sx={{ border: 0, py: 6 }}>{row.index}</TableCell>
                <TableCell sx={{ border: 0, py: 6 }}>{row.quality}</TableCell>
                <TableCell sx={{ border: 0, py: 6 }}>{row.quantity}</TableCell>
                <TableCell sx={{ border: 0, py: 6 }}>{row.effort}</TableCell>
                <TableCell sx={{ border: 0, py: 6 }}>{row.totalEvents}</TableCell>
                <TableCell sx={{ border: 0, py: 6 }}>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable
