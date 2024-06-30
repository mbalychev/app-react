import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/common.style';


const FooterContainer = styled.footer`
  background-color: ${colors.background};
  color: ${colors.lightText};
  padding: 1rem 2rem;
  margin-top: 2rem;
  border-top: 1px solid ${colors.primaryLight};
  text-align: center;
`;

const FooterText = styled.div``

const FooterContent = styled.div`
`;




const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterText>© 2024 Балычев Михаил Михайлович</FooterText>
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;