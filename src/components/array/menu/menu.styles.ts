import styled from "styled-components";
import { colors } from "../../../styles/common.style";


interface DropdownContentProps {
  isOpen: boolean;
}

interface MenuButtonProps {
  isActive: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const MenuContainer = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const MenuButtonStyled = styled.button.attrs<MenuButtonProps>((props) => ({ 'isActive': props.isActive }))`
min-width: 160px;
  padding: 10px 20px;
  margin: 0 10px;
  background-color: ${(props) => (props.isActive ? colors.primaryLight : '#f0f0f0')} ;
  border: 1px #d6d6d6;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 10px 0;
    display: none;
  }

  &:hover {
    background-color: #83cbce;
  }
`;

export const DropdownMenu = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const DropdownButton = styled.button.attrs<DropdownContentProps>((props) => ({ 'isOpen': props.isOpen }))`
  padding: 10px 20px;
  background-color: ${(props) => (props.isOpen ? '#83cbce' : '#f9f9f9')};
  border: none;
  cursor: pointer;
  width: 100%;
`;

export const DropdownContent = styled.div.attrs<DropdownContentProps>((props) => ({
  'isOpen': props.isOpen,
})) <DropdownContentProps>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropdownItemStyled = styled.div.attrs<MenuButtonProps>((props) => ({ 'isActive': props.isActive }))`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  background-color: ${(props) => (props.isActive ? ' ${colors.primaryLight}' : '#f0f0f0')} ;
  &:hover {
    background-color: #83cbce;
  }
`;