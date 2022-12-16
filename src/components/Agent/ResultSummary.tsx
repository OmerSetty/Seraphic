import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type Props = {
  label: string;
  result: { [key: string]: any };
}

export function ResultSummary({ label, result }: Props): JSX.Element {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant='listKey' sx={{ color: 'primary.listKeys', mb: '0.5em' }}>
          {label}
        </Typography>
        <Box>
          <Typography variant='resultValue' sx={{ color: 'primary.headers' }}>
            {result.value}
          </Typography>
          {result.change !== null && (
            <img style={{ marginLeft: '8px' }} src={`icons/${result.change}.png`} alt={`${result.change}-icon`} />
          )}
        </Box>
      </Box>
    </>
  )
}