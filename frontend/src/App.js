
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Header from './components/Header'
import Registration from './components/Registration';
import Profile from './components/Profile';
import Login from './components/Login';
import Hero from './components/Hero'
import { Toaster } from 'react-hot-toast';
import CalcBmi from './components/CalcBmi';
import Emailer from './components/Emailer';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <div className="App">
    

      <Router>
        <Header/>
        <Toaster />
        
        <Routes>
          
          
        <Route
  path='/'
  element={
    <>
      
      <Hero />
      <Pricing/>
      <Footer/>

    </>
  }
/>

          <Route path='/login' element={ <Login/>}/>
          <Route path='/Email' element={ <Emailer/>}/>
          <Route path='/register' element={ <Registration />}/>
          <Route path='/profile' element={ <Profile />}/>
          <Route path='/CalcBm' element={ <CalcBmi />}/>
          <Route path='/emailsend' element={ <Emailer/>}/>
        </Routes>
      </Router>
      
    </div>
    </>

  );
}

export default App;
