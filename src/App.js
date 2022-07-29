import "./App.css";
import Homepage from "./component/Homepage";
import {BrowserRouter,Route,Routes,} from 'react-router-dom'
import Activitypage from "./component/Activitypage";
import Navbar from "./component/Navbar";
import Infopage from "./component/Infopage";

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route  index path="/" element={<Homepage/>} />
    <Route path="/activity" element={<Activitypage/>} />
    <Route path="/information" element={<Infopage/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
