!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){e.exports=t.p+"sounds/sound2.mp3"},function(e,n,t){e.exports=t.p+"sounds/sound3.mp3"},function(e,n,t){e.exports=t.p+"sounds/tick.mp3"},function(e,n,t){},function(e,n,t){"use strict";t.r(n);t(0),t(1),t(2);function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var a=function e(n,t){var o=this;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,"press",(function(){o.actions.pressed=!0})),s(this,"up",(function(){o.actions.pressed=!1,o.actions.pressValue=!o.actions.pressValue})),s(this,"init",(function(){o.setLine(),o.setBariers()})),s(this,"setLine",(function(){var e={x:0,y:390,r:4,color:"black"};o._linesStore.addLine(e)})),s(this,"setBariers",(function(){var e=o.getRand(o.minTop,o.maxTop),n={x:"500",y:e,prevY:0,color:"blue",r:10,vx:1,id:1},t={x:"500",y:e+o.maxHole,prevY:"780",color:"red",r:10,vx:1,id:1};o._bariersStore.addBarier([n,t])})),s(this,"animate",(function(){o.isStop||(o.lineAnimation(),o.barierAnimation(),o.score.value>19&&o.playNextMusic(),o._canvas.draw([].concat(i(o._linesStore.getLines()),i(o._bariersStore.getBariers().flat())),o.score)),window.requestAnimationFrame(o.animate)})),s(this,"lineAnimation",(function(){var e=o._linesStore.getLines(),n=e[e.length-1];e.forEach((function(e){o.changeDirection(e),n.x>"250"&&(e.xIsStop=!0,e.x-=o.lineXspeed,e.prevX-=o.lineXspeed)})),e.length>"250"&&e.shift();var t=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e[e.length-1]);o.move(t),o._linesStore.addLine(t),o.crossingBarier(t)})),s(this,"crossingBarier",(function(e){o._bariersStore.getBariers().forEach((function(n){var t=n[0],r=n[1],i=Math.abs(t.x-e.x)<=o.lineXspeed,s=r.y-t.y,a=Math.abs(e.y-t.y)<s&&e.y-t.y>0;t.isCrossed&&o.changeBariersPosition(t,r),i&&!a&&(confirm("game over! \nscore: ".concat(o.score.value))&&location.reload(),o.isStop=!0),i&&!t.isCrossed&&(o.changeScore(t.id),t.isCrossed=!0,o.barierSound.play(),o.speedLimit>o.bariersSpeed&&(o.lineYspeed+=.2,o.lineXspeed+=.2,o.bariersSpeed+=.2))}))})),s(this,"changeScore",(function(e){o.score.value=e,o.score.color=e>15?"blue":"black"})),s(this,"changeBariersPosition",(function(e,n){o.score.value>6&&(e.y-=5,n.y+=5),o.score.value>9&&(e.y-=5,n.y+=5),o.score.value>15&&(n.x-=4,e.x-=4),o.score.value>24&&(n.x-=10,e.x-=10)})),s(this,"barierAnimation",(function(){o._bariersStore.getBariers().forEach((function(e){var n=e[0],t=e[1];n.x<0&&(n.x="500",t.x="500",n.y=o.getRand(o.minTop,o.maxTop),t.y=n.y+o.maxHole,n.id+=1,n.isCrossed=!1,o._bariersStore.clearAllBariers(),o._bariersStore.addBarier([n,t])),o.moveBariers(n),o.moveBariers(t)}))})),s(this,"changeDirection",(function(e){o.actions.pressed&&!o.actions.pressValue?(e.color="yellow",e.vy=-o.lineYspeed):o.actions.pressed&&o.actions.pressValue?(e.color="red",e.vy=o.lineYspeed):(e.color="black",e.vy=0)})),s(this,"move",(function(e){e.prevX=e.x,e.prevY=e.y,e.xIsStop||(e.xt=e.t),e.y+=e.vy,e.x+=o.lineXspeed})),s(this,"moveBariers",(function(e){e.prevX=e.x-o.bariersSpeed,e.x-=o.bariersSpeed})),s(this,"playMusic",(function(){o.music.play(),o.music.loop=!0})),s(this,"playNextMusic",(function(){o.music.loop=!1,o.music.pause(),o.nextMusic.play(),o.nextMusic.loop=!0})),s(this,"getRand",(function(e,n){return Math.random()*(n-e)+e})),this._canvas=t.waveCanvas,this._linesStore=n.lines,this._bariersStore=n.bariers,this.isStop=!1,this.actions={pressed:!1,pressValue:!1},this.maxHole=50,this.minTop=300,this.maxTop=480,this.lineYspeed=1,this.lineXspeed=1,this.bariersSpeed=1,this.speedLimit=7,this.score={value:0,color:"black"},window.requestAnimationFrame(this.animate),this.init(),t.onCanvasPress(this.press),t.onCanvasUp(this.up),this.music=new Audio("sounds/sound2.mp3"),this.nextMusic=new Audio("sounds/sound3.mp3"),this.barierSound=new Audio("sounds/tick.mp3"),this.playMusic()};function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var l=function e(){var n=this;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"getBariers",(function(){return n._bariers})),u(this,"addBarier",(function(e){return n._bariers.push(e)})),u(this,"clearAllBariers",(function(){return n._bariers=[]})),this._bariers=[]},f={lines:new function e(){var n=this;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"getLines",(function(){return n._lines})),c(this,"addLine",(function(e){return n._lines.push(e)})),c(this,"clearAlLlines",(function(){return n._lines=[]})),this._lines=[]},bariers:new l};function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var h=function e(){var n=this;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,"draw",(function(e,t){n.clearCanvas(),n.drawLines(e),n.drawScore(t)})),p(this,"drawScore",(function(e){var t=e.value,r=e.color;n._ctx.fillText(t,250,60),n._ctx.font="60px Comic Sans MS",n._ctx.fillStyle=r})),p(this,"drawLines",(function(e){e.forEach((function(e){n.drawLine(e)}))})),p(this,"drawLine",(function(e){var t=e.x,r=e.y,i=e.prevX,o=e.prevY,s=e.r,a=e.color;n._ctx.beginPath(),n._ctx.lineCap="round",n._ctx.lineWidth=s,n._ctx.strokeStyle=a,n._ctx.moveTo(i,o),n._ctx.lineTo(t,r),n._ctx.stroke(),n._ctx.closePath()})),p(this,"clearCanvas",(function(){n._ctx.clearRect(0,0,n._w,n._h)})),this._h="780",this._w="500",this._canvas=document.createElement("canvas"),this._canvas.setAttribute("width",this._w),this._canvas.setAttribute("height",this._h),this._ctx=this._canvas.getContext("2d")};t(3);function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}new a(f,new function e(){var n=this;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,"onCanvasPress",(function(e){n._canvas.onmousedown=function(){e()},n._canvas.ontouchstart=function(){e()}})),d(this,"onCanvasUp",(function(e){n._canvas.onmouseup=function(){e()},n._canvas.ontouchcancel=function(){e()}})),this.waveCanvas=new h,this._canvas=this.waveCanvas._canvas,this._canvas.style.border="3px solid black",this._root=document.getElementById("root");var t=document.createElement("div");t.className="canvas-wrapper";var r=document.createElement("div");r.className="wrapper",t.append(this._canvas),r.append.apply(r,[t]),this._root.append(r)})}]);