import { Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import './App.css';
import Home from './pages/Home/Home';
import Destination from './pages/Destination/Destination';

const theme ={
    textColor:{
      "whiteColor":"#FFFFFF",
      "darkColor":"#0B0D17"

    },
    mediaQueryNumber:{
        tablet:"600px",
        mobile:"360px",
    },
    color:{
        "dark":"#0B0D17"
    }
}


const App=()=>{

  return (
    <ThemeProvider theme={theme}>
            <Routes>


              <Route path="/" element={<Home />} />
              <Route path="/destination" element={<Destination />} />
              
            </Routes>
    </ThemeProvider>
  );
}

export default App;
