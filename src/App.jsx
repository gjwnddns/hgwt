import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, CardMedia, Grid } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import header_main from './img/head_page.png'
import HWLogo from './img/HWLogo.svg'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box
          width={"100%"}
          height={"838px"}
          display={'flex'}
          py={4}
          sx={{
            justifyContent: 'center',
          }}>
          <Box component="header"
            width={"80%"}
            display={'flex'}
            sx={{
              justifyContent: 'center'
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={8}
                borderBottom={'1px solid'}
                paddingBottom={'20px'}>
                <CardMedia
                  sx={{ width: "49px", height: "24px" }}
                  image={HWLogo} />
              </Grid>
              <Grid item xs={4}
                borderBottom={'1px solid'}
                paddingBottom={'20px'}
                container spacing={1}
                justifyContent={'flex-end'}>
                <Grid item xs={6}
                container
                justifyContent={'flex-end'}>
                  Key Technology
                </Grid>
                <Grid item xs={6}
                container
                justifyContent={'center'}>
                  Main Service
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <CardMedia
                  sx={{ width: "100%", height: "838px" }}
                  image={header_main} />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;