import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";
import Specials from "./components/Specials";
import RatingSection from "./components/RatingSection";
import Chicago from "./components/Chicago";

function App() {
  return (
    <body>
      <Header />
      <CallToAction />
      <Specials />
      <RatingSection />
      <Chicago />
      <Footer />
    </body>
  );
}

export default App;
