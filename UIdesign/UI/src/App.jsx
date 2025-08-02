import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import VRLFooter from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ContactPage from './Components/Contact';
import History from './Components/History';
import Services from './Components/OtherServices';
import About from './Components/About';
import TrackConsignment from './Components/TrackConsignment';
import BoardOfDirectors from './Components/BoardofDirectors';
import Investors from './Components/Investors';
import BranchList from './Components/Branchlist';
import Logistics from './Components/Logistics';
import MissionVision from './Components/MissionVision';
import Pickup from './Components/Pickup';
import FullTruckload from './Components/FulltrackLoad';
import Careers from './Components/Careers';


const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contactus" element={<ContactPage/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/otherservices" element={<Services/>}/>
          <Route path="/aboutus" element={<About/>}/>
          <Route path="/consignment" element={<TrackConsignment/>}/>
          <Route path="/directors" element={<BoardOfDirectors/>}/>
          <Route path="/investors" element={<Investors/>}/>
          <Route path="/branchlist" element={<BranchList/>}/>
          <Route path="/logistics" element={<Logistics/>}/>
          <Route path="/vision" element={<MissionVision/>}/>
          <Route path="/pickup" element={<Pickup/>}/>
          <Route path="/fulltruckload" element={<FullTruckload/>}/>
          <Route path="/career" element={<Careers/>}/>
        </Routes>
        <VRLFooter/>
      </Router>

    </div>
  )
}

export default App