var t=function(t){return"Function"===Object.prototype.toString.apply(t).slice(8,-1)},e=function(t,e){return(t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector).call(t,e)},n=function(t){"loading"!==document.readyState?t():document.addEventListener("DOMContentLoaded",t)};function i(e){if(!(this instanceof i))return new i(e);t(e)?n(e):this.elements=document.querySelectorAll(e)}i.fn=i.prototype={each:function(t){return this.elements.forEach(t),this},attr:function(t,e){if(e)this.each(function(n){return n.setAttribute(t,e)});else if(!e)return 1===this.elements.length?this.elements[0].getAttribute(t):this.elements.map(function(e){return e.getAttribute(t)});return this},val:function(t){return t?(this.each(function(e){e.value=t}),this):1===this.elements.length?this.elements[0].value:this.elements.map(function(t){return t.value})},addClass:function(t){return this.each(function(e){return e.classList.add(t)}),this},removeClass:function(t){return this.each(function(e){e.classList.remove(t)}),this},hasClass:function(t){var e=!1;return this.each(function(n){e=n.classList.contains(t)}),e},toggleClass:function(t){return this.each(function(e){e.classList.toggle(t)}),this},clone:function(){var t=[];this.each(function(e){t.push(e.cloneNode(!0))});var e=new i;return e.elements=t,e.length=t.length,e},html:function(t){return t?(this.each(function(e){e.innerHTML=t}),this):1===this.elements.length?this.elements[0].innerHTML||"":this.elements.map(function(t){return t.innerHTML||""})},css:function(t,e){if(t)this.each(function(n){n.style[t]=e});else if(!e)return 1===this.elements.length?getComputedStyle(this.elements[0])[t]:this.elements.map(function(e){return getComputedStyle(e)[t]});return this},text:function(t){return t?this.each(function(e){e.textContent=t}):1===this.elements.length?this.elements[0].textContent:this.elements.map(function(t){return t.textContent})},children:function(t){var n=[];return this.each(function(t){n.push(t.children)}),t?n.filter(function(n){return e(n,t)}):n},on:function(t,e){return this.each(function(n){n.addEventListener(t,e)})},off:function(t,e){return this.each(function(n){n.removeEventListener(t,e)})},trigger:function(t,e){var n=document.createEvent("HTMLEvents");return n.data=e,n.initEvent(t,!0,!1),this.each(function(t){return t.dispatchEvent(n)})}},module.exports=i;
//# sourceMappingURL=djy.js.map
