import { CustomDivider } from '../shared-components/CustomComponents';
import { ResultSummary } from './ResultSummary';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type Props = {
  headline: string;
  results: { [key: string]: any };
}

export function ResultsSummary({ headline, results }: Props): JSX.Element {
  return (
    <>
      <CustomDivider />
      <Typography variant='basicHeadline' sx={{
        color: 'primary.headers',
      }}>
        {headline}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '0.75em' }}>
        {results && Object.keys(results).map(key => (
          <div key={key}>
            <ResultSummary label={key} result={results[key]} />
          </div>
        ))}
      </Box>
    </>
  )
}