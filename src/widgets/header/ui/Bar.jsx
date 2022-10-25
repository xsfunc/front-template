import { Stack, Typography } from '@mui/joy'
import { useUnit } from 'effector-react'
import { toHomePressed } from '../model'
import { Layout, ThemeButton } from '@/shared/ui'

export function Header() {
  const toHome = useUnit(toHomePressed)
  return (
    <Layout.Header>
      <Typography onClick={toHome} sx={{ mr: 'auto', cursor: 'pointer' }}>
        App
      </Typography>

      <Stack direction='row' spacing={1}>
        <ThemeButton />
      </Stack>
    </Layout.Header>
  )
}
