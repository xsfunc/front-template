import Modal from '@mui/joy/Modal'
import ModalClose from '@mui/joy/ModalClose'
import Sheet from '@mui/joy/Sheet'
import Typography from '@mui/joy/Typography'
import { modelView } from 'effector-factorio'
import { useUnit } from 'effector-react'
import { basicModalFactory } from '../model'

export const BasicModal = modelView(
  basicModalFactory,
  ({ title, children }) => {
    return <ModalView title={title} children={children} />
  },
)

function ModalView({ title, children }) {
  const model = basicModalFactory.useModel()
  const { isOpen, close } = useUnit(model)
  return (
    <Modal
      aria-labelledby='modal-title'
      aria-describedby='modal-desc'
      open={isOpen}
      onClose={close}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Sheet
        variant='outlined'
        sx={{
          p: 3,
          maxWidth: 500,
          borderRadius: 'lg',
          boxShadow: 'lg',
        }}
      >
        <ModalClose
          variant='outlined'
          sx={{
            top: 'calc(-1/4 * var(--IconButton-size))',
            right: 'calc(-1/4 * var(--IconButton-size))',
            boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
            borderRadius: '50%',
            bgcolor: 'background.body',
          }}
        />
        <Typography
          id='modal-title'
          component='h2'
          level='h4'
          textColor='inherit'
          fontWeight='lg'
          mb={1}
        >
          {title}
        </Typography>
        {children}
      </Sheet>
    </Modal>
  )
}
