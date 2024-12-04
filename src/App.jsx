import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Detail from './views/Details';
import Home from './views/Home';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id/:tipo" element={<Detail />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;