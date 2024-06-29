import styled from "styled-components";
import { colors } from "../../styles/common.style";

export const PhotoBlock = styled.div`
width: 10%;
margin-left: auto;
margin-right: 5%;
text-align: center;
`

export const Photo = styled.img`
width: 60%;
border-radius: 6px;
`


export const LinkDiv = styled.div`
width: 100%;
display: flex;
gap: 4px;
align-items: center;
flex-direction: row;
margin: 0.5rem 0;
font-size: 0.9rem;
`;

export const LinkToAnotherSrc = styled.a`
  color: ${colors.primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;