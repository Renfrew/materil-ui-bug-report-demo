import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  palette: {
    primary: {
      main: '#FEC015',
    },
    secondary: {
      main: '#11cb5f',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            '"Roboto"',
            '"Oxygen"',
            '"Ubuntu"',
            '"Cantarell"',
            '"Fira Sans"',
            '"Droid Sans"',
            '"Helvetica Neue"',
            'sans-serif',
          ].join(','),
          '& a': {
            textDecoration: 'none',
            color: 'inherit',
            boxSizing: 'border-box',
            transition:
              'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            backgroundColor: 'transparent',
          },
          '& a:hover': {
            textDecoration: 'none',
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
        },
        code: {
          fontFamily: [
            'source-code-pro',
            'Menlo',
            'Monaco',
            'Consolas',
            '"Courier New"',
            'monospace',
          ].join(','),
        },
      },
    },
  },
})
