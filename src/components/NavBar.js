import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const count=useSelector(state=>state.counter.count);
    return ( <>
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      className='bg-black p-2 text-ligth myNav'
    >
      <Nav.Item>
        <Nav.Link>
            <NavLink to="/">Movie List</NavLink>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
            <NavLink to="/watchList">Watch List:{count}</NavLink>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
            <NavLink to="/login">Login</NavLink>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
            <NavLink to="/Register">Register</NavLink>
        </Nav.Link>
      </Nav.Item>
    </Nav>
    
    
    </> );
}
 
export default NavBar;