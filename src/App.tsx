import React from 'react';
import logo from './logo.svg';
import './App.css';
import { OddsArray } from './components/array/odds_array';
import Link from 'antd/es/typography/Link';
import { Layout } from 'antd';

function App() {
  return (
    <div className="App">
      <Layout>
        <OddsArray />
      </Layout>
    </div>
  );
}

export default App;
