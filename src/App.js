// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import About from './components/About';


function App() {

  const [mode, changemode] = useState('light')

  const modefun = () => {
    if (mode === 'light') {
      changemode('dark')
      document.body.style.backgroundColor = ' #071827 '
    }
    else {
      changemode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  const [alert, setalert] = useState(null)

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500)
  }


  return (
    < >

      <Router>

        <Navbar title="Textutils" mode={mode} modefun={modefun} />
        <Alert alert={alert} />

        <Routes>

          <Route exact path="/about" element={<About mode={mode} />} />
          {/* <About />
          </Route> */}
          <Route exact path="/" element={<Textarea mode={mode} showalert={showalert} />} />
          {/* <Textarea mode={mode} showalert={showalert} />
          </Route> */}

        </Routes>

      </Router>

    </>
  );
}

export default App;
