import './App.css';
import Header from './components/Header';

import Footer from './components/Footer';
import CallToAction from './components/CallToAction';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import Chicago from './components/Chicago';

function App() {
  return (
    <body>
      <Header/>
      <CallToAction/>
      <Specials/>
      <Testimonials/>
      <Chicago/>
      <Footer/>
    </body>
  );
}

export default App;
