import React from 'react';
import './styles/common.css'
import { Outlet } from 'react-router-dom';
import Layout, { Content, Footer, Header } from 'antd/es/layout/layout';
import { MainMenu } from './menu';
import styled from 'styled-components';

  const DivContent = styled(Content)`
    padding: 12px;
    min-height: 90vh;
  `
  const DivHeader = styled(Header)`
    height: 5vh;
    margin: 0px;
    background-color: #391085;
  `

  const DivFooter = styled(Footer)`
  height: 5vh;
  display: flex;
  flex-flow: row;
  align-items: center;
  align-content: space-around;
  justify-content: center;
  width: 100%;
  `

export const LayoutPage = () => {

  return <Layout style={{margin: '0px'}}>
    <DivHeader>
      <MainMenu /> 
    </DivHeader>
      <DivContent>
        <Outlet />
      </DivContent>
    <DivFooter>
      footer 2023
    </DivFooter>
  </Layout>
}
