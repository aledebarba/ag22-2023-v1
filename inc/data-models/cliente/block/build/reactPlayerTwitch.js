"use strict";(globalThis.webpackChunkdatamodelbase=globalThis.webpackChunkdatamodelbase||[]).push([[216],{566:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}(r(196)),a=r(276),l=r(331);function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(b,e);var t,r,i,d,h=(i=b,d=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t,r,o=f(i);if(d){var a=f(this).constructor;e=Reflect.construct(o,arguments,a)}else e=o.apply(this,arguments);return t=this,!(r=e)||"object"!==n(r)&&"function"!=typeof r?s(t):r});function b(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return y(s(e=h.call.apply(h,[this].concat(r))),"callPlayer",a.callPlayer),y(s(e),"playerID",e.props.config.playerId||"".concat("twitch-player-").concat((0,a.randomString)())),y(s(e),"mute",(function(){e.callPlayer("setMuted",!0)})),y(s(e),"unmute",(function(){e.callPlayer("setMuted",!1)})),e}return t=b,r=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e,t){var r=this,n=this.props,o=n.playsinline,i=n.onError,u=n.config,p=n.controls,s=l.MATCH_URL_TWITCH_CHANNEL.test(e),f=s?e.match(l.MATCH_URL_TWITCH_CHANNEL)[1]:e.match(l.MATCH_URL_TWITCH_VIDEO)[1];t?s?this.player.setChannel(f):this.player.setVideo("v"+f):(0,a.getSDK)("https://player.twitch.tv/js/embed/v1.js","Twitch").then((function(t){r.player=new t.Player(r.playerID,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({video:s?"":f,channel:s?f:"",height:"100%",width:"100%",playsinline:o,autoplay:r.props.playing,muted:r.props.muted,controls:!!s||p,time:(0,a.parseStartTime)(e)},u.options));var n=t.Player,l=n.READY,i=n.PLAYING,d=n.PAUSE,h=n.ENDED,b=n.ONLINE,v=n.OFFLINE,O=n.SEEK;r.player.addEventListener(l,r.props.onReady),r.player.addEventListener(i,r.props.onPlay),r.player.addEventListener(d,r.props.onPause),r.player.addEventListener(h,r.props.onEnded),r.player.addEventListener(O,r.props.onSeek),r.player.addEventListener(b,r.props.onLoaded),r.player.addEventListener(v,r.props.onLoaded)}),i)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){this.callPlayer("pause")}},{key:"seekTo",value:function(e){this.callPlayer("seek",e)}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"getDuration",value:function(){return this.callPlayer("getDuration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("getCurrentTime")}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){return o.default.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID})}}],r&&u(t.prototype,r),b}(o.Component);t.default=d,y(d,"displayName","Twitch"),y(d,"canPlay",l.canPlay.twitch),y(d,"loopOnEnded",!0)}}]);