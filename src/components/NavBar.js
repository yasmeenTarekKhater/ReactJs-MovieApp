import Nav from "react-bootstrap/Nav";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { useContext } from "react";
import { MovieLangContext, languageContext } from "../context/MovieLang";

const NavBar = () => {
  const count = useSelector((state) => state.counter.count); //Redux
  const { setmovielang } = useContext(MovieLangContext); //Context
  const handleLanguage=(direction)=>{
    setmovielang(direction)
  }
  return (
    <>
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        className="bg-black p-2 text-ligth myNav"
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
        <Nav.Item>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              language
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item className="text-black" onClick={()=>handleLanguage('ltr')}>English</Dropdown.Item>
              <Dropdown.Item className="text-black" onClick={()=>handleLanguage('rtl')}>Arabic</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default NavBar;
