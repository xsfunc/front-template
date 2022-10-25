import { CssVarsProvider } from '@mui/joy'
import { CssBaseline } from '@mui/material'
import { RouterProvider as PagesProvider } from 'atomic-router-react'
import { router } from './init'
import { Pages } from '@/pages'
import { theme } from '@/shared/config'
import { LeftBottomToaster } from '@/shared/ui'

export function App() {
  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <PagesProvider router={router}>
        <Pages />
      </PagesProvider>
      <LeftBottomToaster />
    </CssVarsProvider>
  )
}
