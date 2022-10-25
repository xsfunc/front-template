import { createEvent, sample } from 'effector'
import { routes } from '@/shared/config'

export const toHomePressed = createEvent()
sample({
  clock: toHomePressed,
  source: {},
  target: routes.home.navigate,
})
