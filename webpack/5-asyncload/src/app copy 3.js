
/* === react === */
import React from 'react';
import ReactDOM from 'react-dom';
import App from '@views/app';
import '@css/index';
import '@css/base';
import '@css/reset';


ReactDOM.render(
    <App />,
    document.getElementById('app3')
)

if (module.hot) {
    module.hot.accept();
}

