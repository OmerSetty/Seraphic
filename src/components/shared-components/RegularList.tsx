import { CustomDivider } from './CustomComponents';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

type Props = {
  headline: string | null;
  data: { [key: string]: any };
}

export function RegularList({ headline, data }: Props): JSX.Element {
  return (
    <>
      <CustomDivider />
      {headline && (
        <Typography variant='basicHeadline' sx={{
          color: 'primary.headers',
          mb: '0.75em'
        }}>
          {headline}
        </Typography>
      )}
      {data && <Box sx={{ mt: '0.5em' }}>
        {Object.keys(data).map((key: string) => (
          <Box key={key} sx={{ mb: '0.375em' }}>
            <Grid container>
              <Grid item xs={5}>
                <Typography variant='listKey' sx={{ color: 'primary.listKeys' }}>
                  {key}
                </Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography variant='listValue' sx={{ color: 'primary.listValues' }}>
                  {data[key].iconName !== undefined ? <img src='icons/apple.png' alt='apple-icon' /> : (
                    data[key].isURL !== undefined ? <a href={data[key].value}>{data[key].value}</a> : (
                      <>{data[key]}</>
                    )
                  )}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>}
    </>
  )
}