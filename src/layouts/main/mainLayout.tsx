import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';
import MainMenu from '../../components/array/menu/menu';
import { DivContent, DivFooter, DivHeader, Layout } from './mainLayout.style';


const LayoutPage = () => {

  return <Layout>
    <DivHeader>
      <MainMenu />
    </DivHeader>
    <DivContent>
      <Outlet />
    </DivContent>
    <DivFooter>
      footer 2024
    </DivFooter>
  </Layout>
}

export default memo(LayoutPage);