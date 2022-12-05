// ** MUI Imports
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'



const rows = [
  {
    workItem: "Cutting 6 Pipes",
    index: 1.10,
    quality: "01",
    quantity: "02",
    effort: 0,
    totalEvents: '03 Events',
  },
  {
    workItem: "Move out 4 Pipes",
    index: 1.10,
    quality: "01",
    quantity: "02",
    effort: 0,
    totalEvents: '09 Events',
  },
  {
    workItem: "Cutting 6 Pipes",
    index: 1.10,
    quality: "01",
    quantity: "02",
    effort: 0,
    totalEvents: '02 Events',
  },
  {
    workItem: "Painting Pipes",
    index: 1.10,
    quality: "01",
    quantity: "02",
    effort: 0,
    totalEvents: '03 Events',
  },
  {
    workItem: "Cutting 4 Pipes",
    index: 1.10,
    quality: "01",
    quantity: "02",
    effort: 0,
    totalEvents: '05 Events',
  },

  {
    workItem: "Cutting 6 Pipes",
    index: 1.10,
    quality: "01",
    quantity: "02",
    effort: 0,
    totalEvents: '04 Events',
  },
  {
    workItem: "Move in 10 Pipes",
    index: 1.10,
    quality: "01",
    quantity: "02",
    effort: 0,
    totalEvents: '07 Events',
  },
]

const statusObj = {
  applied: { color: 'info' },
  rejected: { color: 'error' },
  current: { color: 'primary' },
  resigned: { color: 'warning' },
  professional: { color: 'success' }
}

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
            {rows.map((row) => (
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
