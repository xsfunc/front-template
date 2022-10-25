import { createEffect, createEvent, sample } from 'effector'
import toast from 'react-hot-toast'

const notified = createEvent()

const notifyFx = createEffect(({ message, type, options }) =>
  type ? toast[type](message, options) : toast(message, options),
)

sample({
  clock: notified,
  target: notifyFx,
})

export { notified as notify }
