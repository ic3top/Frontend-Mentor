!function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(o){return(e="function"==typeof Symbol&&"symbol"===t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)})(o)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var s=function(){function t(n){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"flipdown",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(o(this,t),"number"!=typeof n)throw new Error("FlipDown: Constructor expected unix timestamp, got ".concat(e(n)," instead."));"object"===e(s)&&(i=s,s="flipdown"),this.version="0.3.2",this.initialised=!1,this.now=this._getTime(),this.epoch=n,this.countdownEnded=!1,this.hasEndedCallback=null,this.element=document.getElementById(s),this.rotors=[],this.rotorLeafFront=[],this.rotorLeafRear=[],this.rotorTops=[],this.rotorBottoms=[],this.countdown=null,this.daysRemaining=0,this.clockValues={},this.clockStrings={},this.clockValuesAsString=[],this.prevClockValuesAsString=[],this.opts=this._parseOptions(i),this._setOptions(),console.log("FlipDown ".concat(this.version," (Theme: ").concat(this.opts.theme,")"))}var s,a;return s=t,(a=[{key:"start",value:function(){return this.initialised||this._init(),this.countdown=setInterval(this._tick.bind(this),1e3),this}},{key:"ifEnded",value:function(t){return this.hasEndedCallback=function(){t(),this.hasEndedCallback=null},this}},{key:"_getTime",value:function(){return(new Date).getTime()/1e3}},{key:"_hasCountdownEnded",value:function(){return this.epoch-this.now<0?(this.countdownEnded=!0,null!=this.hasEndedCallback&&(this.hasEndedCallback(),this.hasEndedCallback=null),!0):(this.countdownEnded=!1,!1)}},{key:"_parseOptions",value:function(t){var e=["Days","Hours","Minutes","Seconds"];return t.headings&&4===t.headings.length&&(e=t.headings),{theme:t.hasOwnProperty("theme")?t.theme:"dark",headings:e}}},{key:"_setOptions",value:function(){this.element.classList.add("flipdown__theme-".concat(this.opts.theme))}},{key:"_init",value:function(){this.initialised=!0,this._hasCountdownEnded()?this.daysremaining=0:this.daysremaining=Math.floor((this.epoch-this.now)/86400).toString().length;for(var t=this.daysremaining<=2?2:this.daysremaining,e=0;e<t+6;e++)this.rotors.push(this._createRotor(0));var o=[];for(e=0;e<t;e++)o.push(this.rotors[e]);this.element.appendChild(this._createRotorGroup(o,0));var n=t;for(e=0;e<3;e++){for(var s=[],i=0;i<2;i++)s.push(this.rotors[n]),n++;this.element.appendChild(this._createRotorGroup(s,e+1))}return this.rotorLeafFront=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-leaf-front")),this.rotorLeafRear=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-leaf-rear")),this.rotorTop=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-top")),this.rotorBottom=Array.prototype.slice.call(this.element.getElementsByClassName("rotor-bottom")),this._tick(),this._updateClockValues(!0),this}},{key:"_createRotorGroup",value:function(t,e){var o=document.createElement("div");o.className="rotor-group";var n=document.createElement("div");return n.className="rotor-group-heading",n.setAttribute("data-before",this.opts.headings[e]),o.appendChild(n),r(o,t),o}},{key:"_createRotor",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=document.createElement("div"),o=document.createElement("div"),n=document.createElement("figure"),s=document.createElement("figure"),i=document.createElement("div"),a=document.createElement("div");return e.className="rotor",o.className="rotor-leaf",n.className="rotor-leaf-rear",s.className="rotor-leaf-front",i.className="rotor-top",a.className="rotor-bottom",n.textContent=t,i.textContent=t,a.textContent=t,r(e,[o,i,a]),r(o,[n,s]),e}},{key:"_tick",value:function(){this.now=this._getTime();var t=this.epoch-this.now<=0?0:this.epoch-this.now;this.clockValues.d=Math.floor(t/86400),t-=86400*this.clockValues.d,this.clockValues.h=Math.floor(t/3600),t-=3600*this.clockValues.h,this.clockValues.m=Math.floor(t/60),t-=60*this.clockValues.m,this.clockValues.s=Math.floor(t),this._updateClockValues(),this._hasCountdownEnded()}},{key:"_updateClockValues",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];function o(){var t=this;this.rotorTop.forEach((function(e,o){e.textContent!=t.clockValuesAsString[o]&&(e.textContent=t.clockValuesAsString[o])}))}function n(){var t=this;this.rotorLeafRear.forEach((function(e,o){if(e.textContent!=t.clockValuesAsString[o]){e.textContent=t.clockValuesAsString[o],e.parentElement.classList.add("flipped");var n=setInterval(function(){e.parentElement.classList.remove("flipped"),clearInterval(n)}.bind(t),500)}}))}this.clockStrings.d=i(this.clockValues.d,2),this.clockStrings.h=i(this.clockValues.h,2),this.clockStrings.m=i(this.clockValues.m,2),this.clockStrings.s=i(this.clockValues.s,2),this.clockValuesAsString=(this.clockStrings.d+this.clockStrings.h+this.clockStrings.m+this.clockStrings.s).split(""),this.rotorLeafFront.forEach((function(e,o){e.textContent=t.prevClockValuesAsString[o]})),this.rotorBottom.forEach((function(e,o){e.textContent=t.prevClockValuesAsString[o]})),e?(o.call(this),n.call(this)):(setTimeout(o.bind(this),500),setTimeout(n.bind(this),500)),this.prevClockValuesAsString=this.clockValuesAsString}}])&&n(s.prototype,a),t}();function i(t,e){return(t=t.toString()).length<e?i("0"+t,e):t}function r(t,e){e.forEach((function(e){t.appendChild(e)}))}document.addEventListener("DOMContentLoaded",(function(){var t=(new Date).getTime()/1e3+172800+1;new s(t,"timer").start().ifEnded((function(){console.log("The countdown has ended!")}))}))}();