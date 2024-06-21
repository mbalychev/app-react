import React, { ReactNode, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MenuButtonStyled } from './menu.styles';

interface MenuButtonProps {
    href: string;
    children: ReactNode;
}

const MenuButton: React.FC<MenuButtonProps> = ({ href, children }) => {
    const location = useLocation();
    const navigation = useNavigate();

    const navigateTo = (href: string) => navigation(href);
    const isActive = useMemo(() => location.pathname === href, [location.pathname, href]);

    return (
        <MenuButtonStyled isActive={isActive} onClick={() => navigateTo(href)}>
            {children}
        </MenuButtonStyled>
    );
};

export default MenuButton;