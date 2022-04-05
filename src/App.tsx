import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Eight } from './components/Eight';
import { Five } from './components/Five';
import { Four } from './components/Four';
import { Header } from './components/Header';
import { One } from './components/One';
import { Seven } from './components/Seven';
import { SideNav } from './components/SideNav';
import { Six } from './components/Six';
import { Three } from './components/Three';
import { Two } from './components/Two';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


function App() {

  const [open, setOpen] = useState(true)

  const expand = () => {
    setOpen(true)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className='navTab'>
          {open ? <SideNav open={open} setOpen={setOpen} /> : <div className='expand' onClick={expand}><ArrowRightAltIcon style={{ fontSize: "50px" }} /></div>}
          <Routes>
            <Route path="option1" element={<One />} />
            <Route path="option2" element={<Two />} />
            <Route path="option3" element={<Three />} />
            <Route path="option4" element={<Four />} />
            <Route path="option5" element={<Five />} />
            <Route path="option6" element={<Six />} />
            <Route path="option7" element={<Seven />} />
            <Route path="option8" element={<Eight />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
