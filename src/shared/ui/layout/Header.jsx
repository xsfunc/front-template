import { Container } from '@mui/joy'
import { useLayout } from '.'

export function Header({ children }) {
  const { maxWidth } = useLayout()
  return (
    <Container
      maxWidth={maxWidth}
      component='header'
      sx={{
        // p: 0,
        height: 60,
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        mb: 2,
      }}
    >
      {children}
    </Container>
  )
}
