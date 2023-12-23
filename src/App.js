import './App.css';
import { Card, Companies, Contact, FAQ, Footer, Hero, HowItWorks, Images, ClientTestimonial } from './Components';

/**
 * App.js
 * 
 * Shows all the components of the page in browser
 * 
 */
function App() {
  return (
    <div className='scroll-smooth'>
      <Hero/>
      <Companies/>
      <Images/>
      <HowItWorks/>
      <ClientTestimonial/>
      <Card/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
