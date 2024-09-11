import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("h1",{id:"heading"},"I am ready");

//JXS transpiled before it reaches the js - Done by parcel - babel

//JXS => React.createElement => object => HTMLElement(render);

const jsx = <h1>Hello guy</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(jsx);