// ** MUI Imports
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { tableRowsPPI } from 'src/model/data'


const DashboardTable = () => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Work Item</TableCell>
              <TableCell>Index</TableCell>
              <TableCell>Quality</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Effort</TableCell>
              <TableCell>Total Events</TableCell>
              <TableCell>Action</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {tableRowsPPI.map((row) => (
              <TableRow hover key={row.index} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell>
                  {row.workItem}
                </TableCell>
                <TableCell>{row.index}</TableCell>
                <TableCell>{row.quality}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.effort}</TableCell>
                <TableCell>{row.totalEvents}</TableCell>
                <TableCell>
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
