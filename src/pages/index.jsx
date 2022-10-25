import { Route } from 'atomic-router-react'
import { HomePage } from './home'
import { NotFoundPage } from './not-found'
import { routes } from '@/shared/config'

const Modals = () => (
  <>
  </>
)

export const Pages = () => (
  <>
    <Route route={routes.home} view={HomePage} />
    <Route route={routes.errors.notFound} view={NotFoundPage} />
    <Modals />
  </>
)

export const notFoundRoute = routes.errors.notFound
