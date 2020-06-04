!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function e(t,n){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"press",(function(){a.actions.pressed=!0})),o(this,"up",(function(){a.actions.pressed=!1,a.actions.pressValue=!a.actions.pressValue})),o(this,"init",(function(){a.setLine(),a.setBariers()})),o(this,"setLine",(function(){var e={x:0,y:390,r:4,color:"black"};a._linesStore.addLine(e)})),o(this,"setBariers",(function(){var e=a.getRand(a.minTop,a.maxTop),t={x:"500",y:e,prevY:0,color:"blue",r:2,vx:1},n={x:"500",y:e+a.maxHole,prevY:"780",color:"red",r:2,vx:1};a._bariersStore.addBarier([t,n])})),o(this,"animate",(function(){a.isStop||(a.lineAnimation(),a.barierAnimation(),a._canvas.drawLines([].concat(i(a._linesStore.getLines()),i(a._bariersStore.getBariers().flat())))),window.requestAnimationFrame(a.animate)})),o(this,"lineAnimation",(function(){var e=a._linesStore.getLines(),t=e[e.length-1],n=a._bariersStore.getBariers();e.forEach((function(e){a.changeDirection(e),e.xIsStop&&(e.x-=a.lineXspeed,e.prevX-=a.lineXspeed),t.x>"250"&&(e.xIsStop=!0)})),e.length>"250"&&e.shift();var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e[e.length-1]);a.move(i),a._linesStore.addLine(i),n.forEach((function(e){var t=e[0],n=e[1],r=Math.abs(t.x-i.x)<=a.lineXspeed,o=n.y-t.y,s=Math.abs(i.y-t.y)<o&&i.y-t.y>0;r&&!s&&(confirm("game over! \nschore: ".concat(a.score))&&location.reload(),a.isStop=!0),r&&(a.lineYspeed+=.2,a.lineXspeed+=.2,a.bariersSpeed+=.2,a.score+=1)}))})),o(this,"barierAnimation",(function(){a._bariersStore.getBariers().forEach((function(e,t){var n=e[0],r=e[1];n.x<0&&(n.x="500",r.x="500",n.y=a.getRand(a.minTop,a.maxTop),r.y=n.y+a.maxHole),a.moveBariers(n),a.moveBariers(r)}))})),o(this,"changeDirection",(function(e){a.actions.pressed&&!a.actions.pressValue?(e.color="yellow",e.vy=-a.lineYspeed):a.actions.pressed&&a.actions.pressValue?(e.color="red",e.vy=a.lineYspeed):(e.color="black",e.vy=0)})),o(this,"move",(function(e){e.prevX=e.x,e.prevY=e.y,e.xIsStop||(e.xt=e.t),e.y+=e.vy,e.x+=a.lineXspeed})),o(this,"moveBariers",(function(e){e.prevX=e.x,e.x-=a.bariersSpeed})),o(this,"getRand",(function(e,t){return Math.random()*(t-e)+e})),o(this,"distance",(function(e,t,n,r){return Math.sqrt(Math.pow(e-n,2)+Math.pow(t-r,2))})),this._canvas=n.waveCanvas,this._linesStore=t.lines,this._bariersStore=t.bariers,this.isStop=!1,this.actions={pressed:!1,pressValue:!1},this.maxHole=50,this.minTop=300,this.maxTop=480,this.lineYspeed=1,this.lineXspeed=1,this.bariersSpeed=1,this.score=0,window.requestAnimationFrame(this.animate),this.init(),n.onCanvasPress(this.press),n.onCanvasUp(this.up)};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"getBariers",(function(){return t._bariers})),u(this,"addBarier",(function(e){return t._bariers.push(e)})),u(this,"clearAlBariers",(function(){return t._bariers=[]})),this._bariers=[]},f={lines:new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"getLines",(function(){return t._lines})),c(this,"addLine",(function(e){return t._lines.push(e)})),c(this,"clearAlLlines",(function(){return t._lines=[]})),this._lines=[]},bariers:new l};function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,"drawLines",(function(e,n){t.clearCanvas(),e.forEach((function(e){t.drawLine(e)}))})),p(this,"drawLine",(function(e){var n=e.x,r=e.y,i=e.prevX,a=e.prevY,o=e.r,s=e.color;t._ctx.beginPath(),t._ctx.lineCap="round",t._ctx.lineWidth=o,t._ctx.strokeStyle=s,t._ctx.moveTo(i,a),t._ctx.lineTo(n,r),t._ctx.stroke(),t._ctx.closePath()})),p(this,"drawBariers",(function(e){t.clearCanvas(),t.drawLine(e)})),p(this,"clearCanvas",(function(){t._ctx.clearRect(0,0,t._w,t._h)})),this._h="780",this._w="500",this._canvas=document.createElement("canvas"),this._canvas.setAttribute("width",this._w),this._canvas.setAttribute("height",this._h),this._ctx=this._canvas.getContext("2d")};n(0);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}new s(f,new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,"onCanvasPress",(function(e){t._canvas.onmousedown=function(){e()},t._canvas.ontouchstart=function(){e()}})),d(this,"onCanvasUp",(function(e){t._canvas.onmouseup=function(){e()},t._canvas.ontouchend=function(){e()}})),this.waveCanvas=new h,this._canvas=this.waveCanvas._canvas,this._canvas.style.border="3px solid black",this._root=document.getElementById("root");var n=document.createElement("div");n.className="canvas-wrapper";var r=document.createElement("div");r.className="wrapper",n.append(this._canvas),r.append.apply(r,[n]),this._root.append(r)})}]);