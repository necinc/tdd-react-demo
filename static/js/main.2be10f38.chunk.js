(this["webpackJsonptdd-react-demo"]=this["webpackJsonptdd-react-demo"]||[]).push([[0],{149:function(n,e,t){"use strict";t.r(e);var r=t(2),a=t.n(r),c=t(13),u=t(0),i=t.n(u),o=t(22),l=t.n(o),m=t(3),s=t(23),f=t(27),d=t(24),p=t(28),v=function(n){Object(d.a)(t,n);var e=Object(f.a)(t);function t(){return Object(s.a)(this,t),e.call(this,"Promise has been canceled")}return t}(Object(p.a)(Error));function b(){}var h=t(152),j=t(4),E=t(5);function O(){var n=Object(j.a)(["\n  color: #666;\n  font-size: 0.8rem;\n"]);return O=function(){return n},n}function g(){var n=Object(j.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);return g=function(){return n},n}function w(){var n=Object(j.a)(["\n  font-weight: bold;\n"]);return w=function(){return n},n}function y(){var n=Object(j.a)(["\n  width: 2em;\n  height: 2em;\n  border-radius: 0.2rem;\n  margin-right: 0.5rem;\n"]);return y=function(){return n},n}function k(){var n=Object(j.a)(["\n  display: flex;\n  align-items: center;\n"]);return k=function(){return n},n}function x(){var n=Object(j.a)(["\n  border: 1px solid #ddd;\n  border-radius: 0.2rem;\n  max-width: 35rem;\n  margin: 0 auto 2rem;\n  padding: 1rem;\n"]);return x=function(){return n},n}var S=E.a.article(x());function C(n){var e=n.avatar,t=n.fullName;return i.a.createElement(D,null,i.a.createElement(M,{src:e}),i.a.createElement(N,null,t))}var D=E.a.div(k()),M=E.a.img(y()),N=E.a.span(w()),z=E.a.header(g()),A=E.a.span(O());function J(){var n=Object(j.a)(["\n  padding: 1em;\n"]);return J=function(){return n},n}function P(){var n=Object(j.a)(["\n  border-top: 1px solid #ddd;\n  font-size: 0.85rem;\n"]);return P=function(){return n},n}function W(n){var e=n.comments,t=Object(u.useState)(!0),r=Object(m.a)(t,2),a=r[0],c=r[1];if(0===e.length)return null;var o=e.length>2&&a,l=o?e.slice(0,1):e;return i.a.createElement(R,null,l.map((function(n){return i.a.createElement(B,Object.assign({key:n.id},n))})),o&&a&&i.a.createElement(I,{count:e.length-1,onClick:function(){return c(!1)}}))}function B(n){var e=n.author,t=n.content;return i.a.createElement(T,null,i.a.createElement(C,e),i.a.createElement("p",null,t))}function I(n){var e=n.count,t=n.onClick;return i.a.createElement("button",{type:"button",onClick:t},"Show ",e," more")}var R=E.a.section(P()),T=E.a.article(J());function q(n){var e=n.author,t=n.content,r=n.timestamp,a=n.comments;return i.a.createElement(S,null,i.a.createElement(z,null,i.a.createElement(C,e),i.a.createElement(A,null,Object(h.a)(new Date(r),"yyyy-MM-dd"))),i.a.createElement("p",null,t),i.a.createElement(W,{comments:a}))}var F=function(){var n=Object(u.useState)([]),e=Object(m.a)(n,2),t=e[0],r=e[1];return Object(u.useEffect)((function(){var n=function(n){var e=!1,t=new v;return{promise:new Promise((function(r,a){n.then((function(n){return e?a(t):r(n)}),(function(n){return a(e?t:n)}))})),cancel:function(){e=!0}}}(fetch("/posts"));return n.promise.then((function(n){return n.json()})).then(r).catch(b),function(){return n.cancel()}}),[]),i.a.createElement("div",null,i.a.createElement("h1",null,"TDD in React is \ud83d\udd25"),t.map((function(n){return i.a.createElement(q,Object.assign({key:n.id},n))})))},G=(t(36),t(16)),H=t(17),K=t(8),L=t(6),Q=t.n(L);function U(){return{avatar:Q.a.image.avatar(),fullName:Q.a.name.findName("","",void 0)}}function V(n,e){var t=Q.a.random.number({min:n,max:e});return new Array(t).fill(null).map((function(){return{id:Q.a.random.uuid(),author:U(),content:Q.a.lorem.lines()}}))}var X=[K.b.get("/posts",(function(n,e,t){return e(t.json(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3;return new Array(n).fill(null).map((function(){return{id:Q.a.random.uuid(),content:Q.a.lorem.lines(),author:U(),timestamp:Q.a.date.recent(),comments:V(0,5)}}))}(5)))}))],Y=H.a.apply(void 0,Object(G.a)(X));Object(c.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Y.start({serviceWorker:{url:"https://necinc.github.io/tdd-react-demo/mockServiceWorker.js",options:{scope:"https://necinc.github.io/tdd-react-demo/"}}});case 2:l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(F,null)),document.getElementById("root"));case 3:case"end":return n.stop()}}),n)})))()},30:function(n,e,t){n.exports=t(149)},36:function(n,e,t){}},[[30,1,2]]]);
//# sourceMappingURL=main.2be10f38.chunk.js.map