import Divider, { DividerProps } from '@mui/material/Divider';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

export const CustomDivider = styled(Divider)<DividerProps>(() => ({
  opacity: 0.2,
  border: '1px solid #787878',
  marginTop: '1em',
  marginBottom: '0.75em'
}));

export const CustomIconButton = styled(IconButton)<IconButtonProps>(() => ({
  padding: 0
}));
