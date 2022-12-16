import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { AgentHeader } from './AgentHeader';
import { ActionButton } from '../../shared-components/ActionButton';
import { AgentContent } from './AgentContent';

export function AgentPanel(): JSX.Element {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <AgentHeader />
        <AgentContent />
      </CardContent>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mb: '0.75em' }}>
        <ActionButton text={'Export'} styling={{
          color: 'primary.exportButton',
          bgcolor: 'primary.exportButtonBg', "&:hover": { bgcolor: "primary.exportButtonBg" }
        }} iconName='export' iconPosition='start' />
        <ActionButton text={'Go to single agent'} styling={{
          color: 'primary.headers',
          bgcolor: 'primary.actionsButtonBg', "&:hover": { bgcolor: "primary.actionsButtonBg" }
        }} />
      </Box>
    </Box>
  )
}