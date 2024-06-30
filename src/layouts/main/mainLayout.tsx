import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';
import MainMenu from '../../components/menu/menu';
import { DivContent, DivFooter, DivHeader, Layout } from './mainLayout.style';
import Footer from '../../components/menu/footer';


const LayoutPage = () => {

  return <Layout>
    <DivHeader>
      <MainMenu />
    </DivHeader>
    <DivContent>
      <Outlet />
    </DivContent>
    <Footer />
  </Layout>
}

export default memo(LayoutPage);