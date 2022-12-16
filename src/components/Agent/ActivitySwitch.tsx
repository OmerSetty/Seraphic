import React from 'react';
import Switch from '@mui/material/Switch';

type Props = {
  toggleActivity: React.Dispatch<React.SetStateAction<boolean>>;
};

export function ActivitySwitch({ toggleActivity }: Props): JSX.Element {
  return (
    <Switch onChange={() => toggleActivity((current: boolean) => !current)} focusVisibleClassName=".Mui-focusVisible" disableRipple defaultChecked sx={{
      m: 0,
      width: 34,
      height: 18,
      padding: 0,
      '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 0.3,
        transitionDuration: '300ms',
        '&.Mui-checked': {
          transform: 'translateX(16px)',
          color: '#fff',
          '& + .MuiSwitch-track': {
            backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
            opacity: 1,
            border: 0,
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.5,
          },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
          color: '#33cf4d',
          border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
          color: (theme) => (
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[600]
          )
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: (theme) => theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
      },
      '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 13.5,
        height: 13.5,
      },
      '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: (theme) => theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: (theme) => theme.transitions.create(['background-color'], {
          duration: 500,
        }),
      },
    }} />
  )
}