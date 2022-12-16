import useFetchLocalDataAsync from '../../../custom-hooks/useFetchLocalDataAsync';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import { EventHeader } from './EventHeader';
import { ActionButton } from '../../shared-components/ActionButton';
import { EventContent } from './EventContent';

export function EventPanel(): JSX.Element {
  const { data } = useFetchLocalDataAsync('eventData');

  const { Date, ...restData } = data;
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <EventHeader date={Date} />
        <EventContent eventData={restData} />
      </CardContent>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mb: '12px' }}>
        <ActionButton text={'Export'} styling={{
          color: 'primary.exportButton',
          bgcolor: 'primary.exportButtonBg', "&:hover": { bgcolor: "primary.exportButtonBg" }
        }} iconName='export' iconPosition='start' />
        <ActionButton text={'Actions'} styling={{
          color: 'primary.headers',
          bgcolor: 'primary.actionsButtonBg', "&:hover": { bgcolor: "primary.actionsButtonBg" }
        }} iconName='drop-down' iconPosition='end' />
      </Box>
    </Box>
  )
}