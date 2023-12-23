import './App.css';
import { Card, Companies, Contact, FAQ, Footer, Hero, HowItWorks, Images, Manager } from './Components';


function App() {
  return (
    <div className='scroll-smooth'>
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
