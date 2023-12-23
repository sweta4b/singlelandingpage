import './App.css';
import { Card, Companies, Contact, FAQ, Footer, Hero, HowItWorks, Images, Manager, Navbar } from './Components';


function App() {
  return (
    <div className='scroll-smooth'>
      <Navbar/>
      <Hero/>
      <Companies/>
      <Images/>
      <HowItWorks/>
      <Manager/>
      <Card/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
