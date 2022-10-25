import { createHistoryRouter } from 'atomic-router'
import { createBrowserHistory } from 'history'
import { controls, routesMap as routes } from '@/shared/config'

const history = createBrowserHistory()
const router = createHistoryRouter({ routes, controls })

// should run before router.setHistory method
// sample({
//   clock: router.initialized,
//   target:
// })

router.setHistory(history)

export { router }

