import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { OddsArray } from './components/array/odds_array';
import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { MultiplesComp } from './components/array/multiples';

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          Header
        </Header>
        <Content>
          {/* <Link to={}/> */}
        </Content>
        <Footer>

        </Footer>
        <MultiplesComp />
        <OddsArray />
      </Layout>
    </div>
  );
}

export default App;
