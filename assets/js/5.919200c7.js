(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{360:function(t,i,n){},370:function(t,i,n){var s=n(2),h=n(371),e=n(116);s({target:"Array",proto:!0},{fill:h}),e("fill")},371:function(t,i,n){"use strict";var s=n(15),h=n(88),e=n(25);t.exports=function(t){for(var i=s(this),n=e(i),a=arguments.length,r=h(a>1?arguments[1]:void 0,n),o=a>2?arguments[2]:void 0,c=void 0===o?n:h(o,n);c>r;)i[r++]=t;return i}},372:function(t,i,n){var s=n(2),h=n(0),e=n(33),a=n(5),r=n(57),o=n(59),c=/MSIE .\./.test(r),u=h.Function,f=function(t){return function(i,n){var s=arguments.length>2,h=s?o(arguments,2):void 0;return t(s?function(){e(a(i)?i:u(i),this,h)}:i,n)}};s({global:!0,bind:!0,forced:c},{setTimeout:f(h.setTimeout),setInterval:f(h.setInterval)})},373:function(t,i,n){"use strict";n(360)},396:function(t,i,n){"use strict";n.r(i);n(60),n(61),n(8),n(90),n(20),n(26),n(120),n(30),n(31);var s=n(82);n(370),n(372);function h(t,i){return Math.random()*(i-t)+t}var e=["#c9e5ac","#d7eef9","#fcec91","#ebf5f9","#87c095"],a=-500,r=-500;function o(t,i,n){this.ctx=n,this.maxWidth=t,this.maxHeight=i}o.prototype={init:function(){this.t=h(0,360)/180*Math.PI,this.r=h(1,10),this.x=50*(2*Math.cos(this.t)-Math.cos(2*this.t))+this.maxWidth/2,this.y=50*(2*Math.sin(this.t)-Math.sin(2*this.t))+this.maxHeight/2,this.beiyongR=this.r,this.color=e[Math.floor(h(0,5))],this.vx=h(-1,1),this.vy=h(-1,1),this.beizhi=!1},draw:function(){this.ctx.beginPath(),this.ctx.fillStyle=this.color,this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI),this.ctx.fill()},move:function(){(this.x-this.r<0||this.x+this.r>this.maxWidth)&&(this.vx=-this.vx),(this.y-this.r<0||this.y+this.r>this.maxHeight)&&(this.vy=-this.vy);var t=Math.sqrt(Math.pow(a-this.x,2)+Math.pow(this.y-r,2)),i=this.x-a,n=this.y-r;if((t=5*Math.pow(i,2)+6*Math.abs(i)*n+5*Math.pow(n,2))<48e3){for(var s=0;s<10;s++)this.x+=this.vx,this.y+=this.vy;this.r<50&&this.r++}else t>52e3?(this.x+=this.vx,this.y+=this.vy,this.r>this.beiyongR&&this.r--):this.r>15&&this.r--;this.draw()}};var c={data:function(){return{ctx:null,canvasWidth:null,canvasHeight:null,balls:[]}},methods:{begin:function(t){for(var i=this,n=0;n<t;n++){var h=new o(this.canvasWidth,this.canvasHeight,this.ctx);h.init(),h.draw(),this.balls.push(h)}setInterval((function(){i.ctx.clearRect(0,0,i.canvasWidth,i.canvasHeight);var t,n=function(t,i){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=Object(s.a)(t))||i&&t&&"number"==typeof t.length){n&&(t=n);var h=0,e=function(){};return{s:e,n:function(){return h>=t.length?{done:!0}:{done:!1,value:t[h++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,o=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return r=t.done,t},e:function(t){o=!0,a=t},f:function(){try{r||null==n.return||n.return()}finally{if(o)throw a}}}}(i.balls);try{for(n.s();!(t=n.n()).done;){t.value.move()}}catch(t){n.e(t)}finally{n.f()}}),1e3/60)}},mounted:function(){this.canvasWidth=document.body.offsetWidth,this.canvasHeight=document.body.offsetHeight;var t=document.getElementById("stage");this.ctx=t.getContext("2d"),this.begin(100)}},u=(n(373),n(16)),f=Object(u.a)(c,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("div",{staticClass:"tip-info"},[this._v("404 你想要的我给不了")]),this._v(" "),i("canvas",{attrs:{id:"stage",width:this.canvasWidth,height:this.canvasHeight}})])}),[],!1,null,"9ba8fdbe",null);i.default=f.exports}}]);