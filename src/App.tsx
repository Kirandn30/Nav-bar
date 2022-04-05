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
  const [option, setOption] = useState<string>("option one")

  const expand = () => {
    setOpen(true)
  }


  return (
    <div className="App">
      <Header />
      <div className='navTab'>
        {open ? <SideNav open={open} setOpen={setOpen} setOption={setOption} /> : <div className='expand' onClick={expand}><ArrowRightAltIcon style={{ fontSize: "50px" }} /></div>}
        {option == "option one" && <One />}
        {option == "option two" && <Two />}
        {option == "option three" && <Three />}
        {option == "option four" && <Four />}
        {option == "option five" && <Five />}
        {option == "option six" && <Six />}
        {option == "option seven" && <Seven />}
        {option == "option eight" && <Eight />}
      </div>
    </div>
  );
}

export default App;
