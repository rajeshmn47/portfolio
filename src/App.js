import Homepage from './componnents/Homepage'
import Gotonew from './componnents/Gotonew';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
return(
  <>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Homepage/>}/>
  <Route path='/goto' element={<Gotonew/>}/>
  </Routes>
  </BrowserRouter>
  </>
)
}

export default App;
