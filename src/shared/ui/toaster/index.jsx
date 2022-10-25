import { Toaster } from 'react-hot-toast'

export const LeftBottomToaster = () => (
  <Toaster
    position='bottom-left'
    reverseOrder
    toastOptions={{
      style: {
        background: '#363636',
        color: '#fff',
      },
    }}
  />
)
