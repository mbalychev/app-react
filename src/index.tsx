import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Router } from './Route';
import { ConfigProvider } from 'antd';
import locale from 'antd/lib/locale/ru_RU';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
     <ConfigProvider locale={locale}>
        <Router />
     </ConfigProvider>
  </React.StrictMode>
);
reportWebVitals();
