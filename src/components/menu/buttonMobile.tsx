import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DropdownItemStyled } from './menu.styles';

interface DropdownItemProps {
    toggleDropdown: () => void;
    href: string;
    children: React.ReactNode;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ href, children, toggleDropdown }) => {
    const location = useLocation();
    const navigation = useNavigate();

    const navigateTo = (href: string) => navigation(href);
    const isActive = useMemo(() => location.pathname === href, [location.pathname, href]);

    return (
        <DropdownItemStyled isActive={isActive} onClick={() => { navigateTo(href); toggleDropdown() }}>
            {children}
        </DropdownItemStyled>
    );
};

export default DropdownItem;