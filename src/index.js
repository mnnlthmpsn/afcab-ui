import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'antd/dist/antd.css'
import './assets/css/custom.css'
import './assets/css/bt.css'
import LoadContextProvider from './context/loadContext';
import CourseContextProvider from './context/courseContext';

ReactDOM.render(
  <React.StrictMode>
    <LoadContextProvider>
      <CourseContextProvider>
        <App />
      </CourseContextProvider>
    </LoadContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);