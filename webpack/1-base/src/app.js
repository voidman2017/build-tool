import './css/index.scss';
import name from './js/name';
// import "babel-polyfill";

/*  */
class Class {
    constructor() {
        this.str = 'success';
    }
    appendToBody() {
        const p = document.createElement('p');
        p.innerHTML = this.str;
        document.body.appendChild(p);
    }
}
const obj = new Class();
obj.appendToBody();

document.getElementById('app').innerHTML = name