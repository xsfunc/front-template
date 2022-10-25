import { createRoute, createRouterControls } from 'atomic-router'

export const routes = {
  home: createRoute(),
  settings: createRoute(),
  errors: {
    notFound: createRoute(),
  },
}

export const controls = createRouterControls()
export const routesMap = [
  { path: '/', route: routes.home },
  { path: '/settings', route: routes.settings },
  { path: '/404', route: routes.errors.notFound },
]
