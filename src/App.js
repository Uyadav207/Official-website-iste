import React from 'react';
import './index.css';
import Header from "./Components/Utils/Header";
import Aboutus from './Components/Utils/About-us';
import Footer from './Components/Utils/Footer';
import Contactus from './Components/Utils/contact-us';
function App() {
  return (
    <div className="App">
        <Header/>
        <Aboutus/>
        <Contactus/>
        <Footer/>
    </div>
  );
}

export default App;
