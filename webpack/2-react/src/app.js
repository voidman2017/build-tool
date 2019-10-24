
/* === react === */
import React from 'react';
import ReactDOM from 'react-dom';
import App from '@views/app';
import '@css/index';
import '@css/base';
import '@css/reset';

ReactDOM.render(
    <App />,
    document.getElementById('app')
)

if (module.hot) {
    module.hot.accept();
}

/* const container = document.getElementById("app");
const render = Component => {
    ReactDOM.hydrate(
        <AppContainer>
            <Component />
        </AppContainer>,
        container
    );
}
render(App)

if (module.hot) {
    module.hot.accept("./views/app.jsx", () => {
        const nextApp = require("./views/app.jsx").default;
        render(nextApp);
    });
} */

