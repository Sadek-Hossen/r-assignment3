import { Routes, Route } from 'react-router-dom';
import Navbur from './Compunent/Navbur';
import IconSection from './Compunent/Icon';
import Carasol from './Compunent/Carasol';
import Trands from './Compunent/Trands';
import Recent from './Compunent/Recent';
import Footer from './Compunent/Footer';
import Restruents from './Compunent/Restruents';


function App() {
  return (
    <>
      <Navbur />
      <Routes>
        <Route path="/" element={
          <>
            <IconSection />
            <Carasol />
            <Trands />
            <Recent />
            <Footer />
          </>
        } />
        <Route path="/Restruents" element={<Restruents />} />
      </Routes>
    </>
  );
}

export default App;
