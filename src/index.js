import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Component
//React Application은 하나의 Component만을 Rendering함
ReactDOM.render(  //JSX : Javascript와 HTML사이의 조합(only in React)
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
