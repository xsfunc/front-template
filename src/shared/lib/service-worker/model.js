import { createEffect, createEvent, restore, sample } from 'effector'
import { notify } from '../toast'

const registerStarted = createEvent()
const refreshNeeded = createEvent()
const offlinePrepared = createEvent()
const updateButtonPressed = createEvent()
const updatePromptTestStarted = createEvent()

const updateSwFx = createEffect(updateSw => updateSw())
const registerFx = createEffect(async () => {
  const { registerSW } = await import('virtual:pwa-register')
  const { SwUpdatePrompt } = await import('@/shared/ui/toaster/SwUpdatePrompt')
  return registerSW({
    onOfflineReady: () => offlinePrepared('Offline ready'),
    onNeedRefresh: () =>
      refreshNeeded({
        type: 'custom',
        message: SwUpdatePrompt,
        options: { duration: Infinity, update: updateButtonPressed },
      }),
  })
})

// to show prompt on dev
const updatePromptTestFx = createEffect(async () => {
  const { SwUpdatePrompt } = await import('@/shared/ui/toaster/SwUpdatePrompt')
  refreshNeeded({
    type: 'custom',
    message: SwUpdatePrompt,
    options: { duration: Infinity, update: updateButtonPressed },
  })
})

const $updateFn = restore(registerFx.doneData, null)

sample({
  clock: registerStarted,
  target: registerFx,
})
sample({
  clock: updateButtonPressed,
  source: $updateFn,
  target: updateSwFx,
})
sample({
  clock: refreshNeeded,
  target: notify,
})
sample({
  clock: updatePromptTestStarted,
  target: updatePromptTestFx,
})

export const serviceWorker = {
  register: registerStarted,
  update: updateButtonPressed,
  prependOffline: offlinePrepared,
  testUpdatePrompt: updatePromptTestStarted,
}
