import { Routes, Route, Link } from "react-router-dom";
import Menu from "./Menu";
import About from "./About";
import Login from "./Login";
import Reservations from "./Reservations";
import Online_Order from "./Online_Order";

function Footer() {
  return (
    <div>
      <footer>
        <img />
        <div>
          <Link to="" className="footer-items">Home</Link>
          <Link to="" className="footer-items">About</Link>
          <Link to="" className="footer-items">Menu</Link>
          <Link to="" className="footer-items">Reservations</Link>
          <Link to="" className="footer-items">Order Online</Link>
          <Link to="" className="footer-items">Login</Link>
        </div>
        <div>
          <Link to="" className="footer-items">Adress</Link>
          <Link to="" className="footer-items">Phone Number</Link>
          <Link to="" className="footer-items">Email</Link>
        </div>
        <div>
          <Link to="" className="footer-items">Adress</Link>
          <Link to="" className="footer-items">Phone Number</Link>
          <Link to="" className="footer-items">Email</Link>
        </div>
      </footer>
      <Routes>
        <Route path=""/>
        <Route path=""/>
        <Route path=""/>
        <Route path=""/>
        <Route path=""/>
        <Route path=""/>
        <Route path=""/>
        <Route path=""/>
        <Route path=""/>
        <Route path=""/>
        <Route path=""/>
        <Route path=""/>
      </Routes>
    </div>
  );
}

export default Footer;