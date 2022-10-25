import { useStoreMap } from 'effector-react'

export const useEntity = (store, id) =>
  useStoreMap({
    store,
    keys: [id],
    fn: data => data[id] || null,
  })
