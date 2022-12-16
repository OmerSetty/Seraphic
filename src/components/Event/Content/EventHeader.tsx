import React from 'react';
import { CustomIconButton } from '../../shared-components/CustomComponents';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type Props = {
  date: string;
}

export const EventHeader = React.memo(function EventHeader({ date }: Props): JSX.Element {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <img src='icons/event-header.png' alt='event-header-icon' />
          <Typography variant='headerHeadline' sx={{ ml: 1, color: 'primary.headers' }}>
            Event Details
          </Typography>
        </Box>
        <Box>
          <CustomIconButton sx={{ mr: '0.25em' }} aria-label="ellipsis-icon">
            <img src='icons/ellipsis.png' alt='ellipsis-icon' />
          </CustomIconButton>
          <CustomIconButton aria-label="x-icon">
            <img src='icons/x.png' alt='x-icon' />
          </CustomIconButton>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant='date' sx={{ color: 'primary.date' }}>
            {date}
          </Typography>
        </Box>
        <Box>
          <img src='icons/critical.png' alt='critical-icon' width="12" height="12" />
          <Typography variant='listValue' sx={{ color: 'primary.date', ml: '0.5em' }}>
            Critical
          </Typography>
        </Box>
      </Box>
    </>
  )
});