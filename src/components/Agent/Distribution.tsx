import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type Props = {
  distributionData: string[];
  distributionJumps: string[];
}
type colorByStateType = {
  [key: string]: any
}
const colorByState: colorByStateType = {
  active: '#58C86A',
  inactive: '#FF275B',
  disable: '#9E9E9E',
}

export function Distribution({ distributionData, distributionJumps }: Props): JSX.Element {
  return (
    <>
      <Box sx={{ mt: '1em' }}>
        {distributionData.map((state: string, index: number) => (
          <Box key={index} sx={{ width: '0.125em', display: 'inline-block', mr: `${distributionData.length === index + 1 ? '0em' : '0.465em'}`, height: '17px', bgcolor: colorByState[state], borderRadius: '2px' }} />
        ))}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {distributionJumps.map((current: string, index: number) => (
          <Typography key={index} variant='date' sx={{ color: 'primary.listKeys' }}>
            {current}
          </Typography>
        ))}
      </Box>
    </>
  )
}