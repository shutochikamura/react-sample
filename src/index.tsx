import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContainerSample from './components/ContainerSample'
import ContextSample from './components/ContextSample'
import Counter from './components/Counter'
import Hello from './components/Hello'
import Name from './components/Name'
import Message from './components/Message';
import UseReducerCounter from './components/UseReducerCounter';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UseReducerCounter initialValue={0}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
