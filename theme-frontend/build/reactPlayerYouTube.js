"use strict";(globalThis.webpackChunktheme_frontend=globalThis.webpackChunktheme_frontend||[]).push([[439],{2427:(e,t,n)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}return n.default=e,t&&t.set(e,n),n}(n(9196)),a=n(2276),i=n(9331);function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],_n=!0,r=!1,o=void 0;try{for(var a,i=e[Symbol.iterator]();!(_n=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);_n=!0);}catch(e){r=!0,o=e}finally{try{_n||null==i.return||i.return()}finally{if(r)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,m=/user\/([a-zA-Z0-9_-]+)\/?/,P=/youtube-nocookie\.com/,g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(g,e);var t,n,l,u,y=(l=g,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t,n,o=h(l);if(u){var a=h(this).constructor;e=Reflect.construct(o,arguments,a)}else e=o.apply(this,arguments);return t=this,!(n=e)||"object"!==r(n)&&"function"!=typeof n?d(t):n});function g(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,g);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return b(d(e=y.call.apply(y,[this].concat(n))),"callPlayer",a.callPlayer),b(d(e),"parsePlaylist",(function(t){return t instanceof Array?{listType:"playlist",playlist:t.map(e.getID).join(",")}:v.test(t)?{listType:"playlist",list:s(t.match(v),2)[1].replace(/^UC/,"UU")}:m.test(t)?{listType:"user_uploads",list:s(t.match(m),2)[1]}:{}})),b(d(e),"onStateChange",(function(t){var n=t.data,r=e.props,o=r.onPlay,a=r.onPause,i=r.onBuffer,l=r.onBufferEnd,u=r.onEnded,c=r.onReady,s=r.loop,y=r.config,f=y.playerVars,p=y.onUnstarted,d=window.YT.PlayerState,h=d.UNSTARTED,b=d.PLAYING,v=d.PAUSED,m=d.BUFFERING,P=d.ENDED,g=d.CUED;if(n===h&&p(),n===b&&(o(),l()),n===v&&a(),n===m&&i(),n===P){var O=!!e.callPlayer("getPlaylist");s&&!O&&(f.start?e.seekTo(f.start):e.play()),u()}n===g&&c()})),b(d(e),"mute",(function(){e.callPlayer("mute")})),b(d(e),"unmute",(function(){e.callPlayer("unMute")})),b(d(e),"ref",(function(t){e.container=t})),e}return t=g,(n=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"getID",value:function(e){return!e||e instanceof Array||v.test(e)?null:e.match(i.MATCH_URL_YOUTUBE)[1]}},{key:"load",value:function(e,t){var n=this,r=this.props,o=r.playing,i=r.muted,l=r.playsinline,u=r.controls,s=r.loop,y=r.config,f=r.onError,p=y.playerVars,d=y.embedOptions,h=this.getID(e);if(t)return v.test(e)||m.test(e)||e instanceof Array?void this.player.loadPlaylist(this.parsePlaylist(e)):void this.player.cueVideoById({videoId:h,startSeconds:(0,a.parseStartTime)(e)||p.start,endSeconds:(0,a.parseEndTime)(e)||p.end});(0,a.getSDK)("https://www.youtube.com/iframe_api","YT","onYouTubeIframeAPIReady",(function(e){return e.loaded})).then((function(t){n.container&&(n.player=new t.Player(n.container,c({width:"100%",height:"100%",videoId:h,playerVars:c(c({autoplay:o?1:0,mute:i?1:0,controls:u?1:0,start:(0,a.parseStartTime)(e),end:(0,a.parseEndTime)(e),origin:window.location.origin,playsinline:l?1:0},n.parsePlaylist(e)),p),events:{onReady:function(){s&&n.player.setLoop(!0),n.props.onReady()},onPlaybackRateChange:function(e){return n.props.onPlaybackRateChange(e.data)},onStateChange:n.onStateChange,onError:function(e){return f(e.data)}},host:P.test(e)?"https://www.youtube-nocookie.com":void 0},d)))}),f),d.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause")}},{key:"play",value:function(){this.callPlayer("playVideo")}},{key:"pause",value:function(){this.callPlayer("pauseVideo")}},{key:"stop",value:function(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}},{key:"seekTo",value:function(e){this.callPlayer("seekTo",e),this.props.playing||this.pause()}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",100*e)}},{key:"setPlaybackRate",value:function(e){this.callPlayer("setPlaybackRate",e)}},{key:"setLoop",value:function(e){this.callPlayer("setLoop",e)}},{key:"getDuration",value:function(){return this.callPlayer("getDuration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("getCurrentTime")}},{key:"getSecondsLoaded",value:function(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}},{key:"render",value:function(){var e={width:"100%",height:"100%",display:this.props.display};return o.default.createElement("div",{style:e},o.default.createElement("div",{ref:this.ref}))}}])&&f(t.prototype,n),g}(o.Component);t.default=g,b(g,"displayName","YouTube"),b(g,"canPlay",i.canPlay.youtube)}}]);