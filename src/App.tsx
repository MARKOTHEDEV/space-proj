import { ThemeProvider } from 'styled-components';
import './App.css';
import Home from './pages/Home/Home';


const theme ={
    textColor:{
      "whiteColor":"#FFFFFF",
      "darkColor":"#0B0D17"

    }
}
function App() {
  return (
    <ThemeProvider theme={theme}>
          <div className="App">
            <Home />
          </div>
    </ThemeProvider>
  );
}

export default App;
