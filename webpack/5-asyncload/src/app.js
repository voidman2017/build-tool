
/* === react === */
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from '@views/app';
// import '@css/index';
// import '@css/base';
// import '@css/reset';
// import '@css/bootstrap'

// ReactDOM.render(
//     <App />,
//     document.getElementById('app1')
// )

// if (module.hot) {
//     module.hot.accept();
// }





import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import '@css/index';
import '@css/base';
import '@css/reset';
import '@css/bootstrap'
import PageA from '@views/pageA'
import PageB from '@views/pageB'

const loading = () => <div>loading...</div>
const AsyncLoad = (loader) => Loadable({
    loader,
    loading
})


ReactDOM.render(
    <Router>
        <div>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/PageA">PageA</Link></li>
                <li><Link to="/PageB">PageB</Link></li>
            </ul>
            <hr />
            <Switch>
                <Route exact path="/" component={AsyncLoad(() => import(/*webpackChunkName:'views/home'*/'./views/home'))} />
                <Route exact path="/PageA" component={PageA} />
                <Route exact path="/PageB" component={PageB} />
            </Switch>
        </div>
    </Router>
    ,
    document.getElementById('app1')
);

if (module.hot) {
    module.hot.accept();
}
