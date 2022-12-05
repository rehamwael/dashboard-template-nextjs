// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

const FooterContent = () => {
  // ** Var
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', background: "white", p: 6, borderTopLeftRadius: "15px", }}>
      <Typography sx={{ mr: 2, color: "#000" }}>
        {`${new Date().getFullYear()}  `}
        <Box component='span'>
         © AiFlux.ai
        </Box>
      </Typography>
      {hidden ? null : (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', '& :not(:last-child)': { mr: 4 } }}>
          <Link
            target='_blank'
            href='#'
          >
            Support
          </Link>
          <Link target='_blank' href='#'>
            Terms & Conditions
          </Link>
          <Link
            target='_blank'
            href='#'
          >
            Privacy Policy
          </Link>
        </Box>
      )}
    </Box>
  )
}

export default FooterContent
