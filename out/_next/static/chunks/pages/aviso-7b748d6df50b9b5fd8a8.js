(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[239],{3646:function(e,n,t){var r=t(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,n,t){var r=t(3646),a=t(6860),o=t(379),i=t(8206);e.exports=function(e){return r(e)||a(e)||o(e)||i()}},3367:function(e,n,t){"use strict";var r;n.__esModule=!0,n.AmpStateContext=void 0;var a=((r=t(7294))&&r.__esModule?r:{default:r}).default.createContext({});n.AmpStateContext=a},7845:function(e,n,t){"use strict";n.__esModule=!0,n.isInAmpMode=i,n.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=t(7294))&&r.__esModule?r:{default:r},o=t(3367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.ampFirst,t=void 0!==n&&n,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return t||a&&i}},7947:function(e,n,t){"use strict";var r=t(9713);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}n.__esModule=!0,n.defaultHead=p,n.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=l();if(n&&n.has(e))return n.get(e);var t={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(t,a,o):t[a]=e[a]}t.default=e,n&&n.set(e,t);return t}(t(7294)),s=(o=t(617))&&o.__esModule?o:{default:o},c=t(3367),u=t(4287),d=t(7845);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=[i.default.createElement("meta",{charSet:"utf-8"})];return e||n.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),n}function f(e,n){return"string"===typeof n||"number"===typeof n?e:n.type===i.default.Fragment?e.concat(i.default.Children.toArray(n.props.children).reduce((function(e,n){return"string"===typeof n||"number"===typeof n?e:e.concat(n)}),[])):e.concat(n)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,n){return e.reduce((function(e,n){var t=i.default.Children.toArray(n.props.children);return e.concat(t)}),[]).reduce(f,[]).reverse().concat(p(n.inAmpMode)).filter(function(){var e=new Set,n=new Set,t=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(a.type){case"title":case"base":n.has(a.type)?o=!1:n.add(a.type);break;case"meta":for(var c=0,u=h.length;c<u;c++){var d=h[c];if(a.props.hasOwnProperty(d))if("charSet"===d)t.has(d)?o=!1:t.add(d);else{var l=a.props[d],p=r[d]||new Set;"name"===d&&i||!p.has(l)?(p.add(l),r[d]=p):o=!1}}}return o}}()).reverse().map((function(e,t){var o=e.key||t;if(!n.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(n){return e.props.href.startsWith(n)}))){var s=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,i.default.cloneElement(e,s)}return i.default.cloneElement(e,{key:o})}))}function v(e){var n=e.children,t=(0,i.useContext)(c.AmpStateContext),r=(0,i.useContext)(u.HeadManagerContext);return i.default.createElement(s.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,d.isInAmpMode)(t)},n)}v.rewind=function(){};var b=v;n.default=b},617:function(e,n,t){"use strict";var r=t(319),a=t(4575),o=t(3913),i=(t(1506),t(2205)),s=t(8585),c=t(9754);function u(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=c(e);if(n){var a=c(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return s(this,t)}}n.__esModule=!0,n.default=void 0;var d=t(7294),l=function(e){i(t,e);var n=u(t);function t(e){var o;return a(this,t),(o=n.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(t,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),t}(d.Component);n.default=l},7406:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var r=t(5893),a=t(7294),o=t(9008),i=t(2465),s=t(9163),c=(t(280),t(5210));function u(){var e=(0,i.Z)(["\n  font-size: 18px;\n  text-align: justify;\n"]);return u=function(){return e},e}function d(){var e=(0,i.Z)(["\n  background-color: ",";\n  height: auto;\n  max-width: 1000px;\n  padding: 30px;\n  margin: 50px 15px;\n"]);return d=function(){return e},e}function l(){var e=(0,i.Z)(["\n  width: 100%;\n  height: auto;\n  min-height: calc(100vh - 75px);\n  overflow: auto;\n  object-fit: cover;\n  background-image: url('images/indice.png');\n  background-position: center center;\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return l=function(){return e},e}var p=s.ZP.div(l()),f=s.ZP.div(d(),c.O9.white),h=s.ZP.p(u()),m=function(){return(0,r.jsx)(p,{children:(0,r.jsxs)(f,{children:[(0,r.jsx)("h2",{children:"Pol\xedtica de Privacidad"}),(0,r.jsx)("br",{}),(0,r.jsxs)(h,{children:["Math Logic es una aplicaci\xf3n gratuita, por lo que no tiene ning\xfan costo este servicio. Esta p\xe1gina es solo para informar a los usuarios sobre las pol\xedticas y uso de la informaci\xf3n personal del juego.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Si acepta instalar la aplicaci\xf3n, entonces acepta la recopilaci\xf3n de informaci\xf3n solamente con fines de mejorar o modificar el juego. Dicha informaci\xf3n no se compartir\xe1 con nadie excepto con los dise\xf1adores y desarrolladores de este proyecto."]}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("h3",{children:"Uso y colecci\xf3n de informaci\xf3n"}),(0,r.jsx)("br",{}),(0,r.jsx)(h,{children:"Con el prop\xf3sito de mejorar la calidad del servicio, usted puede escribirnos acerca de alg\xfan disgusto o mala experiencia con el juego. Toda informaci\xf3n ser\xe1 analizada por el equipo de trabajo y no se divulgar\xe1 por ning\xfan motivo a personas externas del proyecto."}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("h3",{children:"Cookies"}),(0,r.jsx)("br",{}),(0,r.jsx)(h,{children:"La aplicaci\xf3n no utiliza las cookies del usuario almacenadas en su navegador, as\xed como tampoco c\xf3digo de terceros para obtener la informaci\xf3n."}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("h3",{children:"Proveedores de Servicio"}),(0,r.jsx)("br",{}),(0,r.jsx)(h,{children:"Esta aplicaci\xf3n no utiliza proveedores de servicios de terceros debido a que toda informaci\xf3n se encuentra autocontenida por lo que no requiere el uso del internet."}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("h3",{children:"Links a otros sitios"}),(0,r.jsx)("br",{}),(0,r.jsx)(h,{children:"Este sitio no contiene links a otros sitios, solamente links internos en el mismo juego."}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("h3",{children:"Privacidad Infantil"}),(0,r.jsx)("br",{}),(0,r.jsx)(h,{children:"Debido a que esta aplicaci\xf3n no recolecta informaci\xf3n personal, no existe posibilidad de recabar informaci\xf3n a partir de menores de edad."}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("h3",{children:"Cambios en la pol\xedtica de privacidad"}),(0,r.jsx)("br",{}),(0,r.jsxs)(h,{children:["Cualquier cambio importante en la funcionalidad de la aplicaci\xf3n podr\xeda conllevar una actualizaci\xf3n a las pol\xedticas de privacidad, por lo que exhortamos a revisar dichos cambios para futuras versiones.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Sin embargo, en caso de recolectar informaci\xf3n, esta ser\xe1 utilizada con fines estad\xedsticos para su an\xe1lisis y estudio con el objetivo de mejorar el juego, sin hacer uso de los datos personales del usuario."]}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("h3",{children:"\xbfEsta aplicaci\xf3n recolecta informaci\xf3n en tiempo real sobre la ubicaci\xf3n del dispositivo?"}),(0,r.jsx)("br",{}),(0,r.jsx)(h,{children:"Esta aplicaci\xf3n NO recolecta informaci\xf3n en tiempo real de la ubicaci\xf3n del dispositivo."})]})})},v=function(){return(0,r.jsxs)(a.Fragment,{children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:"Math-Logic | Pol\xedtica de Privacidad"}),(0,r.jsx)("link",{rel:"shortcut icon",href:""}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsx)(m,{})]})}},6486:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/aviso",function(){return t(7406)}])},9008:function(e,n,t){e.exports=t(7947)}},function(e){e.O(0,[774,888,179],(function(){return n=6486,e(e.s=n);var n}));var n=e.O();_N_E=n}]);