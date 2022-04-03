import Homepage from './componnents/Homepage'
import Gotonew from './componnents/Gotonew';
import Portfolio from './componnents/portfoliotwo';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Country from './countriescities/Country'
import Portfoliothree from './componnents/portfoliothree'
import Home from "./Components/LandingPage/Home";
import AllProjects from "./Components/AllProjects/AllProjects";
import PageNotFound from "./Components/PageNotFound";

function App() {
return(
  <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="all-projects" element={<AllProjects />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </>
)
}

export default App;