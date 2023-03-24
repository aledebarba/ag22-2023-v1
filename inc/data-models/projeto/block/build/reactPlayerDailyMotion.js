"use strict";(globalThis.webpackChunkdatamodelbase=globalThis.webpackChunkdatamodelbase||[]).push([[596],{807:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}(r(196)),a=r(276),i=r(331);function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(v,e);var t,r,u,c,h=(u=v,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t,r,o=d(u);if(c){var a=d(this).constructor;e=Reflect.construct(o,arguments,a)}else e=o.apply(this,arguments);return t=this,!(r=e)||"object"!==n(r)&&"function"!=typeof r?y(t):r});function v(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,v);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return b(y(e=h.call.apply(h,[this].concat(r))),"callPlayer",a.callPlayer),b(y(e),"onDurationChange",(function(){var t=e.getDuration();e.props.onDuration(t)})),b(y(e),"mute",(function(){e.callPlayer("setMuted",!0)})),b(y(e),"unmute",(function(){e.callPlayer("setMuted",!1)})),b(y(e),"ref",(function(t){e.container=t})),e}return t=v,(r=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var t,r,n=this,o=this.props,u=o.controls,c=o.config,p=o.onError,s=o.playing,y=(t=e.match(i.MATCH_URL_DAILYMOTION),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],_n=!0,n=!1,o=void 0;try{for(var a,i=e[Symbol.iterator]();!(_n=(a=i.next()).done)&&(r.push(a.value),!t||r.length!==t);_n=!0);}catch(e){n=!0,o=e}finally{try{_n||null==i.return||i.return()}finally{if(n)throw o}}return r}}(t,r)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[1];this.player?this.player.load(y,{start:(0,a.parseStartTime)(e),autoplay:s}):(0,a.getSDK)("https://api.dmcdn.net/all.js","DM","dmAsyncInit",(function(e){return e.player})).then((function(t){if(n.container){var r=t.player;n.player=new r(n.container,{width:"100%",height:"100%",video:y,params:l({controls:u,autoplay:n.props.playing,mute:n.props.muted,start:(0,a.parseStartTime)(e),origin:window.location.origin},c.params),events:{apiready:n.props.onReady,seeked:function(){return n.props.onSeek(n.player.currentTime)},video_end:n.props.onEnded,durationchange:n.onDurationChange,pause:n.props.onPause,playing:n.props.onPlay,waiting:n.props.onBuffer,error:function(e){return p(e)}}})}}),p)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){this.callPlayer("seek",e)}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"getDuration",value:function(){return this.player.duration||null}},{key:"getCurrentTime",value:function(){return this.player.currentTime}},{key:"getSecondsLoaded",value:function(){return this.player.bufferedTime}},{key:"render",value:function(){var e={width:"100%",height:"100%",display:this.props.display};return o.default.createElement("div",{style:e},o.default.createElement("div",{ref:this.ref}))}}])&&p(t.prototype,r),v}(o.Component);t.default=h,b(h,"displayName","DailyMotion"),b(h,"canPlay",i.canPlay.dailymotion),b(h,"loopOnEnded",!0)}}]);