import { createTheme, ThemeOptions } from '@mui/material/styles';

interface IThemeOptions extends ThemeOptions { }

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    basicHeadline: true;
    headerHeadline: true;
    listKey: true;
    date: true;
    listValue: true;
    resultValue: true;
    sort: true;
    percentage: true;
    export: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#303030',
      headers: '#FCFCFC',
      active: '#39E194',
      activeBg: '#0A4400',
      inactive: '#FF275B',
      inactiveBg: '#500A1B',
      date: '#F6F6F6',
      listKeys: '#9E9E9E',
      listValues: '#DFDFDF',
      exportButton: '#303030',
      exportButtonBg: '#FFFFFF',
      actionsButtonBg: '#000000',
    }
  },
  typography: {
    headerHeadline: {
      fontFamily: 'Mulish',
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: '19px'
    },
    basicHeadline: {
      fontFamily: 'Mulish',
      fontWeight: 700,
      fontSize: '12px',
      lineHeight: '15px'
    },
    sort: {
      fontFamily: 'Mulish',
      fontWeight: 700,
      fontSize: '10px',
      lineHeight: '16px'
    },
    export: {
      fontFamily: 'Mulish',
      fontWeight: 600,
      fontSize: '12px',
      lineHeight: '15px'
    },
    listValue: {
      fontFamily: 'Mulish',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '15px'
    },
    listKey: {
      fontFamily: 'Mulish',
      fontWeight: 400,
      fontSize: '10px',
      lineHeight: '13px'
    },
    date: {
      fontFamily: 'Mulish',
      fontWeight: 400,
      fontSize: '8px',
      lineHeight: '17px'
    },
    resultValue: {
      fontFamily: 'Rajdhani',
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '15px'
    },
    percentage: {
      fontFamily: 'Rajdhani',
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '80%'
    }
  }
} as IThemeOptions);
