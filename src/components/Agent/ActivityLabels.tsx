import Typography from '@mui/material/Typography';

type Props = {
  margin?: string;
}

export function InactiveLabel({ margin }: Props): JSX.Element {
  return (
    <Typography variant='listKey' sx={{ color: 'primary.inactive', bgcolor: 'primary.inactiveBg', borderRadius: '4px', py: '2px', px: '8px', mr: `${margin}` }}>
      Inactive
    </Typography>
  )
}

export function ActiveLabel({ margin }: Props): JSX.Element {
  return (
    <Typography variant='listKey' sx={{ color: 'primary.active', bgcolor: 'primary.activeBg', borderRadius: '4px', py: '2px', px: '8px', mr: `${margin}` }}>
      Active
    </Typography>
  )
}