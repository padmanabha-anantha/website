import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { Routes, Route, useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { createTheme , ThemeProvider} from '@mui/material/styles';
import Container from '@mui/material/Container';
import { Home } from './Components/Home';
import { Research } from './Components/Research';
import { Teaching } from './Components/Teaching';


const theme = createTheme({
  typography: {
    align: 'right',
  },
  palette: {
    primary: {
      light: '#718792',
      main: '#455a64',
      dark: '#1c313a',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#8d8d8d',
      main: '#606060',
      dark: '#363636',
      contrastText: '#ffffff',
    },
  },
  
});




const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseNavMenuAndNavigate = (path) => {
    setAnchorElNav(null);
    navigate(path)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
               <MenuItem  onClick={() => handleCloseNavMenuAndNavigate('/')}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
                <MenuItem  onClick={() => handleCloseNavMenuAndNavigate('/research')}>
                  <Typography textAlign="center">Research</Typography>
                </MenuItem>
                <MenuItem  onClick={() => handleCloseNavMenuAndNavigate('/teaching')}>
                  <Typography textAlign="center">Teaching</Typography>
                </MenuItem>
            
            </Menu>
          </Box>
         
          <Box sx={{ flexGrow: 1, justifyContent: 'flex-end', display: { xs: 'none', md: 'flex' } }}>
          <Button
                onClick={() => navigate('/')}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
              </Button>
            
              <Button
                onClick={() => navigate('/research')}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Research
              </Button>
              <Button
                
                onClick={() => navigate('/teaching')}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Teaching
              </Button>
          
          </Box>

         
        </Toolbar>
      </Container>
    </AppBar>
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="research" element={<Research/>} />
        <Route path="teaching" element={<Teaching/>} />
      </Routes>
    
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;
