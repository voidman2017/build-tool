
/* === react === */
import React from 'react';
import ReactDOM from 'react-dom';
import App from '@views/app';
import '@css/index';
import '@css/base';
import '@css/reset';
import '@css/bootstrap'

ReactDOM.render(
    <App />,
    document.getElementById('app1')
)

if (module.hot) {
    module.hot.accept();
}

