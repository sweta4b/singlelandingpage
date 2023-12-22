import './App.css';
import { Card, Companies, Contact, FAQ, Footer, Hero, Images, Manager, Navbar } from './Components';


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Companies/>
      <Images/>
      <Manager/>
      <Card/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
