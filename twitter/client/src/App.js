import { BrowserRouter,Navigate,Route,Routes } from 'react-router-dom';
import HomePage from 'scenes/homePage';
import LoginPage from 'scenes/loginPage';
import ProfilePage from 'scenes/profilePage';
import { useMemo } from 'react';
import { UseSelector, useSelector } from 'react-redux';
import { CssBaseline,ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import { themeSettings } from 'theme';
import { create } from '@mui/material/styles/createTransitions';


function App() {

  const mode =useSelector((state)=> state.mode)
  const theme=useMemo(()=>createTheme(themeSettings(mode)),[mode]);
  const isAuth=Boolean(useSelector((state)=>state.token));

  return (
    <div className="App">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline>
      <Routes>
        <Route path='/' element={<LoginPage></LoginPage>}></Route>
        <Route path='/home' element={isAuth ? <HomePage/> : <Navigate to="/"/>}></Route>
        <Route path='/profile/:userId' element={isAuth ?  <ProfilePage/> : <Navigate to="/"/>}></Route>
      </Routes>
      </CssBaseline>
      </ThemeProvider>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
