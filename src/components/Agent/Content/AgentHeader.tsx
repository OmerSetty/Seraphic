import { useState } from 'react';
import Box from '@mui/material/Box';
import { CustomIconButton } from '../../shared-components/CustomComponents';
import Typography from '@mui/material/Typography';
import { ActiveLabel, InactiveLabel } from '../ActivityLabels';
import { ActivitySwitch } from '../ActivitySwitch';

export function AgentHeader(): JSX.Element {
  const [isActive, setIsActive] = useState<boolean>(true);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box>
        <img src='icons/agent-header.png' alt='agent-header-icon' />
        <Typography variant='headerHeadline' sx={{ ml: '0.5em', color: 'primary.headers' }}>
          Agent Details
        </Typography>
      </Box>
      <Box>
        {isActive ? (
          <ActiveLabel margin={'0.6em'}/>
          ) : (
          <InactiveLabel margin={'0.6em'} />
          )
        }
        <ActivitySwitch toggleActivity={setIsActive} />
        <CustomIconButton aria-label="ellipsis-icon">
          <img src='icons/ellipsis.png' alt='ellipsis-icon' />
        </CustomIconButton>
      </Box>
    </Box>
  )
}