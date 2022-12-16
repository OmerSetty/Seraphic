import Box from '@mui/material/Box';
import { ResultsSummary } from '../ResultsSummary';
import useFetchLocalData from '../../../custom-hooks/useFetchLocalData';
import { RegularList } from '../../shared-components/RegularList';
import { Status } from '../Status';

export function AgentContent(): JSX.Element {
  const { data } = useFetchLocalData('agentData');
  return (
    <Box sx={{ mb: '1em' }}>
      <ResultsSummary headline={'Associated Alerts'} results={data['Associated Alerts']} />
      <RegularList headline={null} data={data['Assigned policy group']} />
      <RegularList headline={'Meta data'} data={data['Meta data']} />
      <Status headline={'Status'} statusData={data['Status']} />
    </Box>
  )
}