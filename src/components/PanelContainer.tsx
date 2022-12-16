import Card from '@mui/material/Card';

export function PanelContainer({ children }: React.PropsWithChildren<Record<never, any>>): JSX.Element {
  return (
    <>
      <Card variant="outlined" sx={{ bgcolor: 'primary.main', width: '21rem' }}>
        { children }
      </Card>
    </>
  )
}