!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["projectstorm/react-diagrams"]=t():e["projectstorm/react-diagrams"]=t()}(window,function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t){e.exports=require("@projectstorm/react-diagrams-core")},function(e,t){e.exports=require("@projectstorm/react-diagrams-defaults")},function(e,t){e.exports=require("@projectstorm/react-diagrams-routing")},function(e,t,r){"use strict";function o(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0});const n=r(0),a=r(1),i=r(2),c=r(4);o(r(0)),o(r(1)),o(r(2)),t.default=(e={})=>{const t=new n.DiagramEngine(e);return t.getLayerFactories().registerFactory(new n.NodeLayerFactory),t.getLayerFactories().registerFactory(new n.LinkLayerFactory),t.getLayerFactories().registerFactory(new c.SelectionBoxLayerFactory),t.getLabelFactories().registerFactory(new a.DefaultLabelFactory),t.getNodeFactories().registerFactory(new a.DefaultNodeFactory),t.getLinkFactories().registerFactory(new a.DefaultLinkFactory),t.getLinkFactories().registerFactory(new i.PathFindingLinkFactory),t.getPortFactories().registerFactory(new a.DefaultPortFactory),t.getStateMachine().pushState(new n.DefaultDiagramState),t}},function(e,t){e.exports=require("@projectstorm/react-canvas-core")}])});