import { Alert, Button } from '@mui/joy'

export const SwUpdatePrompt = ({ update }) => (
  <Alert
    variant='soft'
    color='success'
    endDecorator={
      <Button
        size='sm'
        variant='outlined'
        color='success'
        onClick={update}
        sx={{
          textTransform: 'uppercase',
          fontSize: 'xs',
          fontWeight: 'xl',
          ml: 2,
        }}
      >
        Update
      </Button>
    }
  >
    New version is available
  </Alert>
)
