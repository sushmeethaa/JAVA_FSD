import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const MenuBar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const handleItemClick = (e, { name }) => setActiveItem(name);
  return (
    <Menu secondary inverted size="huge" style={{ background: "#2185d0" }} pointing>
      <Menu.Item 
        as={Link} 
        to="/" 
        name='home' 
        active={activeItem === 'home'} 
        onClick={handleItemClick} 
      />
      <Menu.Item 
        as={Link} 
        to="/about" 
        name='AboutUs' 
        active={activeItem === 'AboutUs'} 
        onClick={handleItemClick} 
      />
      <Menu.Item 
        as={Link} 
        to="/contact" 
        name='Contact' 
        active={activeItem === 'Contact'} 
        onClick={handleItemClick} 
      />
      <Menu.Item 
        as={Link} 
        to="/services"
        name='Services' 
        active={activeItem === 'Services'} 
        onClick={handleItemClick} 
      />
      <Menu.Item 
        as={Link} 
        to="/user"
        name='User' 
        active={activeItem === 'User'} 
        onClick={handleItemClick} 
      />
    </Menu>
  );
}
export default MenuBar;
