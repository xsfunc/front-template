import { Container, Stack } from '@mui/joy'
import { createContext, useContext } from 'react'
import { Header } from './Header'

const LayoutContext = createContext({})

export function Layout({ children, maxWidth = 'lg' }) {
  return (
    <LayoutContext.Provider value={{ maxWidth }}>
      <Stack
        sx={{ boxSizing: 'border-box', minHeight: '100vh' }}
        direction='column'
      >
        {children}
      </Stack>
    </LayoutContext.Provider>
  )
}

export function useLayout() {
  const context = useContext(LayoutContext)
  if (context)
    return context
  throw new Error('Component must be inside Layout.')
}

function Main({ children, maxWidth, sx }) {
  const { maxWidth: layoutMaxWidth } = useLayout()
  return (
    <Container
      maxWidth={maxWidth || layoutMaxWidth}
      component='main'
      sx={{
        flexGrow: 1,
        ...sx,
      }}
    >
      {children}
    </Container>
  )
}

function Footer({ children }) {
  const { maxWidth } = useLayout()
  return (
    <Container component='footer' maxWidth={maxWidth}>
      {children}
    </Container>
  )
}

Layout.Footer = Footer
Layout.Header = Header
Layout.Main = Main
