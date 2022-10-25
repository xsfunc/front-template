import { Link, Stack, Typography } from '@mui/joy'
import { Layout } from '@/shared/ui'
import { xsfuncUrl } from '@/shared/config'

export function Footer() {
  return (
    <Layout.Footer>
      <Stack
        sx={{ pb: 1, mt: 4, mb: 1 }}
        direction='row'
        alignItems='end'
        justifyContent='space-between'
      >
        <Stack>
          <Typography level='body2'>
            created by{' '}
            <Link href={xsfuncUrl} target='_blank'>
              xsfunc
            </Link>
          </Typography>
        </Stack>

      </Stack>
    </Layout.Footer>
  )
}
