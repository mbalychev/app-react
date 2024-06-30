import React, { useState } from 'react';
import { Container, DropdownButton, DropdownContent, DropdownMenu, MenuContainer } from './menu.styles';
import MenuButton from './buttonDesctop';
import DropdownItem from './buttonMobile';


const MainMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <MenuContainer>
        <MenuButton href='/'>Главная</MenuButton>
        <MenuButton href='/programm'>Проекты</MenuButton>
        <MenuButton href='/about'>О сайте</MenuButton>
        <DropdownMenu>
          <DropdownButton onClick={toggleDropdown} isOpen={isOpen}>Меню</DropdownButton>
          <DropdownContent isOpen={isOpen}>
            <DropdownItem href='/' toggleDropdown={toggleDropdown}>Главная</DropdownItem>
            <DropdownItem href='/programm' toggleDropdown={toggleDropdown}>Проекты</DropdownItem>
            <DropdownItem href='/about' toggleDropdown={toggleDropdown}>О сайте</DropdownItem>
          </DropdownContent>
        </DropdownMenu>
      </MenuContainer>
    </Container>
  );
};

export default MainMenu;