import DarkModeIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeIcon from '@mui/icons-material/LightModeOutlined'
import { useColorScheme } from '@mui/joy'
import { IconButton } from '@mui/material'
import { toggleTheme } from './lib'

export function ThemeButton({ sx }) {
  const { mode, setMode } = useColorScheme()
  const handleChange = () => setMode(toggleTheme(mode))
  return (
    <IconButton sx={sx} onClick={handleChange}>
      {mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  )
}
