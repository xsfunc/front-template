import { createEvent, createStore } from 'effector'
import { modelFactory } from 'effector-factorio'

export const basicModalFactory = modelFactory(() => {
  const closed = createEvent()
  const opened = createEvent()

  const $open = createStore(false)
    .on(closed, () => false)
    .on(opened, () => true)

  return {
    isOpen: $open,
    close: closed,
    open: opened,
  }
})

function create(combine) {
  const closed = createEvent()
  const opened = createEvent()

  const $open = createStore(false)
    .on(closed, () => false)
    .on(opened, () => true)

  return {
    isOpen: $open,
    close: closed,
    open: opened,
    ...combine,
  }
}

export const modalFactory = {
  create,
}
