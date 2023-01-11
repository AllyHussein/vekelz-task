import './App.css';
import {BrowserRouter , Routes ,Route} from "react-router-dom"
import Booking from './components/Booking/Booking';
import Dashborad from './components/Dashboard/Dashborad';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Booking />} />
            <Route path='/Dashboard' element={<Dashborad />} />
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
