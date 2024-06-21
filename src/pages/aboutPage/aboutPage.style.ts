import styled from 'styled-components';

interface TechIconProps {
  size?: 'quadre' | 'wide';
}

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  text-indent: 1.5em;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 16px;
`;

export const TechList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const TechItem = styled.li`
  font-size: 14px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;

export const TechIcon = styled.img.attrs<TechIconProps>((props) => ({ 'size': props.size }))`
  width: ${(props) => ((props.size === 'quadre' || props.size === undefined) ? '24px' : '48px')};
  padding: ${(props) => ((props.size === 'quadre' || props.size === undefined) ? '0px 12px' : '0px')};
  height: 24px;
  margin-right: 16px;
`;