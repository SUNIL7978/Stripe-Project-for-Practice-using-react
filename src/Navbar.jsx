import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './Context';
import logo from './Strapi.full.logo.light.png';
import Navlinks from './Navlinks';

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();

  const handleMouseOver = (e) => {
    if (!e.target.classList.contains('nav-link')) {
      setPageId(null);
    }
  };

  return (
    <nav onMouseOver={handleMouseOver}>
      <div className="nav-center">
        <img src={logo} className="logo" alt="Strapi logo" />
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        <Navlinks />
      </div>
    </nav>
  );
};

export default Navbar;
