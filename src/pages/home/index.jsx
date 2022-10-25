import { Layout, Section } from '@/shared/ui'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

export function HomePage() {
  return (
    <Layout>
      <Header />
      <Layout.Main>
        <Section title='Home' >
          Hello
        </Section>
      </Layout.Main>
      <Footer />
    </Layout>
  )
}
