(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('path')) :
	typeof define === 'function' && define.amd ? define(['path'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.path));
})(this, (function (path) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var path__default = /*#__PURE__*/_interopDefaultLegacy(path);

	const a = 1;
	console.log(a);
	console.log(path__default["default"].join('', 'hello'));

	// rollup -i index.js --file dist.js --format [umd/]

}));
