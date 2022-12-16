import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

type Props = {
  text: string;
  styling: { [key: string]: any };
  iconName?: string;
  iconPosition?: string;
}

export function ActionButton({ text, styling, iconName, iconPosition }: Props): JSX.Element {
  return (
    <Button variant="outlined" sx={{
      ...styling,
      textTransform: 'none', borderRadius: '4px', width: '90%', px: '12px', py: '8px', mt: '0.75em', ml: '0px'
    }} startIcon={iconPosition === 'start' && <img src={`icons/${iconName}.png`} alt={`${iconName}-icon`} />}
      endIcon={iconPosition === 'end' && <img src={`icons/${iconName}.png`} alt={`${iconName}-icon`} />}>
      <Typography variant='export'>
        {text}
      </Typography>
    </Button>
  )
}