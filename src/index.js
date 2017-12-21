import Layer from './compotents/layer/layer.js';

document.querySelector("#app").innerHTML = (new Layer()).tpl({"name":"hojo"});