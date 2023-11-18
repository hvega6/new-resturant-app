import { Routes, Route, Link} from 'react-router-dom';
import Menu from './Menu';
import About from './About';
import Login from './Login';
import Online_Order from './Online_Order';
import '../styles/nav.css'
import BookingPage from './BookingPage';


function Header() {
    return(
        <section>
          <nav>
            <Link to='/' className='nav-item'>Home</Link>
            <Link to='/About' className='nav-item'>About</Link>
            <Link to='/Menu' className='nav-item'>Menu</Link>
            <Link to='/BookingPage' className='nav-item'>Reservations</Link>
            <Link to='/Online_Order' className='nav-item'>Online Order</Link>
            <Link to='/Login' className='nav-item'>Login</Link>
          </nav>
          <Routes>
            <Route path='/' >
              <Route path='About' element={<About /> } />
              <Route path='Menu' element={<Menu /> } />
              <Route path='BookingPage' element={<BookingPage /> } />
              <Route path='Online_Order' element={<Online_Order /> } />
              <Route path='Login' element={<Login /> } />
            </Route>
          </Routes>
        </section>
    );
}

export default Header;