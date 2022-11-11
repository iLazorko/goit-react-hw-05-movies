"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{5573:function(n,e,t){t.d(e,{Df:function(){return s},Jh:function(){return f},Pg:function(){return i},Pt:function(){return p},bp:function(){return l}});var r=t(5861),a=t(7757),c=t.n(a),o=t(1044),u="592f788186491be4ee714869feb8dcec";o.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("trending/movie/day?api_key=".concat(u));case 3:return e=n.sent,n.next=6,e.data.results;case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("movie/".concat(e,"?api_key=").concat(u,"&language=en-US"));case 3:return t=n.sent,n.next=6,t.data;case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("search/movie/?api_key=".concat(u,"&language=en-US&query=").concat(e,"&include_adult=false"));case 3:return t=n.sent,n.next=6,t.data;case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("movie/".concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 3:return t=n.sent,n.next=6,t.data.cast;case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("movie/".concat(e,"/reviews?api_key=").concat(u,"&language=en-US"));case 3:return t=n.sent,n.next=6,t.data.results;case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},9245:function(n,e,t){t.d(e,{a:function(){return s}});var r,a=t(5243),c=t(168),o=t(6444).ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 100px;\n"]))),u=t(184);function s(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(o,{children:[(0,u.jsx)(a.p2,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0}),";"]})})}},9779:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,a,c,o,u,s,i=t(5861),p=t(885),l=t(7757),f=t.n(l),h=t(7689),x=t(2791),d=t(5573),v=t(9245),g=t(1077),m=t(168),Z=t(6444),b=Z.ZP.h3(r||(r=(0,m.Z)(["\n  font-size: 30px;\n  text-transform: uppercase;\n  color: #7cfd82;\n  text-align: center;\n  margin-bottom: 40px;\n"]))),w=Z.ZP.ul(a||(a=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n"]))),y=Z.ZP.p(c||(c=(0,m.Z)(["\n  color: #be7474;\n  font-size: 20px;\n"]))),k=Z.ZP.p(o||(o=(0,m.Z)(["\n  color: #cfcfcf;\n  font-size: 18px;\n  line-height: 1.7;\n"]))),P=Z.ZP.p(u||(u=(0,m.Z)(["\n  color: #706b6b;\n  font-size: 14px;\n  margin-bottom: 15px;\n"]))),j=Z.ZP.p(s||(s=(0,m.Z)(["\n  color: #b8c640;\n  font-size: 24px;\n  margin-bottom: 15px;\n"]))),_=t(184);function S(){var n=(0,h.UO)().movieId,e=(0,x.useState)([]),t=(0,p.Z)(e,2),r=t[0],a=t[1],c=(0,x.useState)(!1),o=(0,p.Z)(c,2),u=o[0],s=o[1];return(0,x.useEffect)((function(){!function(){var e=(0,i.Z)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,(0,d.Jh)(n);case 4:t=e.sent,a(t),s(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()()}),[n]),(0,_.jsxs)(_.Fragment,{children:[u&&(0,_.jsx)(v.a,{}),!u&&r.length>0&&(0,_.jsxs)(g.$,{children:[(0,_.jsx)(b,{children:"Reviews"}),(0,_.jsx)(w,{children:r.map((function(n){var e=n.author,t=n.content,r=n.id,a=n.updated_at;return(0,_.jsxs)("li",{children:[(0,_.jsx)(j,{children:(0,_.jsx)("b",{children:e})}),(0,_.jsx)(P,{children:a.split("T")[0]}),(0,_.jsxs)(k,{children:['"',t,'"']})]},r)}))})]}),!u&&0===r.length&&(0,_.jsx)(g.$,{children:(0,_.jsx)(y,{children:"Sorry, we don't have any reviews for this movie."})})]})}},1077:function(n,e,t){t.d(e,{$:function(){return u},X:function(){return s}});var r,a,c=t(168),o=t(6444),u=o.ZP.section(r||(r=(0,c.Z)(["\n  /* position: relative; */\n  padding: 30px 15px;\n  max-width: 1320px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),s=o.ZP.h1(a||(a=(0,c.Z)(["\n  font-size: 36px;\n  text-align: center;\n  color: #c5ecc5;\n  margin-bottom: 50px;\n"])))}}]);
//# sourceMappingURL=779.c43a9670.chunk.js.map