import { Sheet, Stack, Typography } from '@mui/joy'

function Heading({ title, children }) {
  return (
    <Stack
      sx={{ mb: 2 }}
      justifyContent='space-between'
      alignItems='center'
      direction='row'
    >
      <Typography noWrap component='h1' level='h4'>
        {title}
      </Typography>
      {children}
    </Stack>
  )
}
export function Section({ title, titleAction, children }) {
  return (
    <Sheet
      variant='outlined'
      component='section'
      sx={{ px: 2, pt: 2, pb: 3, mb: 3, borderRadius: 'lg' }}
    >
      <Heading title={title} children={titleAction} />
      {children}
    </Sheet>
  )
}
