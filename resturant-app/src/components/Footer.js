import { Routes, Route, Link } from "react-router-dom";
import Menu from "./Menu";
import About from "./About";
import Login from "./Login";
import Online_Order from "./Online_Order";
import Contact_Address from "./Contact_Address";
import Contact_Phone_Number from "./Contact_Phone_Number";
import Contact_Email from "./Contact_Email";
import Social_Media_Adress from "./Social_Media_Adress";
import Social_Media_Phone_Number from "./Social_Media_Phone_Number";
import Social_Media_Email from "./Social_Media_Email";
import "../styles/Footer.css";
import { VStack, HStack } from "@chakra-ui/react";
import BookingPage from "./BookingPage";

function Footer() {
  return (
    <div>
      <footer>
        <HStack>
        <img />
        <div>
          <VStack>
            <Link to="/" className="footer-items">
              Home
            </Link>
            <Link to="/About" className="nav-item">
              About
            </Link>
            <Link to="/Menu" className="nav-item">
              Menu
            </Link>
            <Link to="/BookingPage" className="nav-item">
              Reservations
            </Link>
            <Link to="/Online_Order" className="nav-item">
              Online Order
            </Link>
            <Link to="/Login" className="nav-item">
              Login
            </Link>
          </VStack>
        </div>
        <div>
          <VStack>
            <Link to="" className="footer-items">
              Adress
            </Link>
            <Link to="" className="footer-items">
              Phone Number
            </Link>
            <Link to="" className="footer-items">
              Email
            </Link>
          </VStack>
        </div>
        <div>
          <VStack>
            <Link to="" className="footer-items">
              Adress
            </Link>
            <Link to="" className="footer-items">
              Phone Number
            </Link>
            <Link to="" className="footer-items">
              Email
            </Link>
          </VStack>
        </div>
        </HStack>
      </footer>
      <Routes>
        <Route path="/" />
        <Route path="/About" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/BookingPage" element={<BookingPage />} />
        <Route path="/Online_Order" element={<Online_Order />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Contact_Address" element={<Contact_Address />} />
        <Route
          path="/Contact_Phone_Number"
          element={<Contact_Phone_Number />}
        />
        <Route path="/Contact_Email" element={<Contact_Email />} />
        <Route path="/Social_Media_Adress" element={<Social_Media_Adress />} />
        <Route
          path="/Social_Media_Phone_Number"
          element={<Social_Media_Phone_Number />}
        />
        <Route path="/Social_Media_Email" element={<Social_Media_Email />} />
      </Routes>
    </div>
  );
}

export default Footer;
