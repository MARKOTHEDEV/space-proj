import { Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import './App.css';
import Home from './pages/Home/Home';
import Destination from './pages/Destination/Destination';
import theme from "./theme/theme";
import Crew from "./pages/Crew/Crew";


const App=()=>{

  return (
    <ThemeProvider theme={theme}>
            <Routes>


              <Route path="/" element={<Home />} />
              <Route path="/destination" element={<Destination />} />
              <Route path="/crew" element={<Crew/>} />
              
            </Routes>
    </ThemeProvider>
  );
}

export default App;
