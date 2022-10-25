import { Typography } from '@mui/joy'
import { Layout } from '@/shared/ui'
import { Header } from '@/widgets/header'

export function NotFoundPage() {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <Typography>Not found</Typography>
      </Layout.Content>
    </Layout>
  )
}
