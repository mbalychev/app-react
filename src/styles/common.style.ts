import styled from "styled-components";

export const colors = {
    primary: "#83cbce",
    primaryLight: "#b6d7d8",
    secondary: "#2c3e50",
    text: "#34495e",
    lightText: "#7f8c8d",
    background: "#f8f9fa",
    border: "#e0e0e0",
};

export const ContainerProject = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: ${colors.background};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const HeaderH1 = styled.h1`
  color: ${colors.secondary};
  font-size: 2.4rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid ${colors.primary};
  padding-bottom: 0.5rem;
`;

export const HeaderH4 = styled.h4`
  color: ${colors.secondary};
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid ${colors.primary};
  padding-bottom: 0.5rem;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;

  &:before {
    content: "•";
    color: ${colors.primary};
    font-weight: bold;
    margin-right: 0.5rem;
  }
`;

export const Label = styled.span`
  /* font-weight: bold; */
  color: ${colors.lightText};
  min-width: 150px;
`;

export const Value = styled.span`
  color: ${colors.secondary};
`;

export const Paragraph = styled.p`
  color: ${colors.text};
  line-height: 1.6;
  margin-top: 1.5rem;
`;

export const OrderedList = styled.ol`
  padding-left: 1.5rem;
  margin-top: 1rem;
`;

export const OrderedListItem = styled.li`
  color: ${colors.text};
  margin-bottom: 0.5rem;
`;