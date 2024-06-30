import styled from "styled-components";
import { colors } from "../../styles/common.style";

export const SubHeader = styled.p`
    color: ${colors.lightText};
    margin-top: -1.5rem;
    margin-bottom: 1rem;
`;


export const Photo = styled.img`
    width: 200px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 1rem;
`;

export const PhotoBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
`;

export const LinkDiv = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
`;

export const SkillTag = styled.span`
    margin-right: 5px;
    padding: 2px 5px;
    background-color: ${colors.border};
    color: ${colors.secondary};
    border-radius: 3px;
`;