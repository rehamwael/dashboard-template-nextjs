// ** MUI Imports
import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import InputAdornment from '@mui/material/InputAdornment'

// ** Icons Imports
import Menu from 'mdi-material-ui/Menu'
import Magnify from 'mdi-material-ui/Magnify'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Components
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import { MenuItem, Grid } from '@mui/material'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
}

const AppBarContent = (props: Props) => {
  // ** Props
  const { hidden, settings, saveSettings, toggleNavVisibility } = props

  // ** Hook
  const hiddenSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
      {hidden ? (
          <IconButton
            color='inherit'
            onClick={toggleNavVisibility}
            sx={{ ml: -2.75, ...(hiddenSm ? {} : { mr: 3.5 }) }}
          >
            <Menu />
          </IconButton>
        ) : null}
        {!hiddenSm && (
          <Grid display="flex">
            <MenuItem sx={{ color: "#747B8A", fontSize: "13px" }}>Menu Button</MenuItem>
            <MenuItem sx={{ color: "#747B8A", fontSize: "13px" }}>Menu Button</MenuItem>
            <MenuItem sx={{ color: "#747B8A", fontSize: "13px" }}>Menu Button</MenuItem>
        </Grid>
        )}
      </Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: "center" }}>
        <Grid sx={{ mt: 2 }}>
          <img src="/images/warning.svg" />
          <img src="/images/ring.svg" />
        </Grid>
        <Grid sx={{ mt: 3, mr: 4 }}>
          <ModeToggler settings={settings} saveSettings={saveSettings} />
        </Grid>
        <UserDropdown />
      </Box>
    </Box>
  )
}

export default AppBarContent
