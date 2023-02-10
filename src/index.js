import React from 'react';
import ReactDOM from 'react-dom/client';
// import Counter from './Counter';
// import Counter2 from './Counter2';
import './index.css';
import Collection from './Collection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Counter />
    <Counter2 /> */}
    <Collection/>
  </React.StrictMode>
);
