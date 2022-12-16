import Box from '@mui/material/Box';
import { RegularList } from '../../shared-components/RegularList';

type Props = {
  eventData: { [key: string]: any };
}

export function EventContent({ eventData }: Props): JSX.Element {
  return (
    <>
      {Object.keys(eventData).map((key: string) => (
        <Box key={key}>
          <RegularList headline={key} data={eventData[key]} />
        </Box>
      ))}
    </>
  )
}