/* === vue === */
import Vue from 'vue';
import Home from '@views/home';

import '@css/index';
import '@css/base';
import '@css/reset';

new Vue({
    el: '#vue',
    render: (h) => h(Home)
}) 

