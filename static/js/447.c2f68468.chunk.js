"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[447],{5573:function(n,e,t){t.d(e,{Df:function(){return i},Jh:function(){return f},Pg:function(){return s},Pt:function(){return p},bp:function(){return l}});var r=t(5861),a=t(7757),o=t.n(a),c=t(1044),u="592f788186491be4ee714869feb8dcec";c.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var n=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.ZP.get("trending/movie/day?api_key=".concat(u));case 3:return e=n.sent,n.next=6,e.data.results;case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.ZP.get("movie/".concat(e,"?api_key=").concat(u,"&language=en-US"));case 3:return t=n.sent,n.next=6,t.data;case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r,a=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,n.prev=1,n.next=4,c.ZP.get("search/movie?api_key=".concat(u,"&language=en-US&query=").concat(e,"&page=").concat(t,"&include_adult=false"));case 4:return r=n.sent,n.next=7,r.data;case 7:return n.abrupt("return",n.sent);case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.ZP.get("movie/".concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 3:return t=n.sent,n.next=6,t.data.cast;case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.ZP.get("movie/".concat(e,"/reviews?api_key=").concat(u,"&language=en-US"));case 3:return t=n.sent,n.next=6,t.data.results;case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},9245:function(n,e,t){t.d(e,{a:function(){return i}});var r,a=t(5243),o=t(168),c=t(6444).ZP.div(r||(r=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 100px;\n"]))),u=t(184);function i(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(c,{children:[(0,u.jsx)(a.p2,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0}),";"]})})}},7047:function(n,e,t){t.d(e,{e:function(){return m}});var r,a,o,c,u,i=t(168),s=t(6444),p=t(6731),l=s.ZP.ul(r||(r=(0,i.Z)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 30px;\n"]))),f=s.ZP.li(a||(a=(0,i.Z)(["\n  background-color: #000;\n\n  &:hover {\n    box-shadow: 0px 0px 7px 6px rgb(53 100 39);\n  }\n"]))),d=(0,s.ZP)(p.rU)(o||(o=(0,i.Z)(["\n  text-decoration: none;\n  color: #ffffff;\n"]))),x=s.ZP.div(c||(c=(0,i.Z)(["\n  background-color: #000;\n  padding-bottom: 10px;\n"]))),g=s.ZP.p(u||(u=(0,i.Z)(["\n  display: block;\n  font-size: 20px;\n  font-weight: 400;\n  text-align: center;\n  padding-top: 10px;\n"]))),h=t(5820),v=t(184),m=function(n){var e=n.movies,t=n.state;return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(l,{children:e.map((function(n){var e=n.id,r=n.poster_path,a=n.title,o=n.release_date.slice(0,4);return(0,v.jsx)(f,{children:(0,v.jsx)(d,{to:"/movies/".concat(e),state:t,children:(0,v.jsxs)(x,{children:[(0,v.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):h,alt:a}),(0,v.jsxs)(g,{children:['"',a,'"']}),(0,v.jsx)(g,{children:o})]})})},e)}))})})}},1077:function(n,e,t){t.d(e,{$:function(){return u},X:function(){return i}});var r,a,o=t(168),c=t(6444),u=c.ZP.section(r||(r=(0,o.Z)(["\n  /* position: relative; */\n  padding: 30px 15px;\n  max-width: 1320px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),i=c.ZP.h1(a||(a=(0,o.Z)(["\n  font-size: 36px;\n  text-align: center;\n  color: #c5ecc5;\n  margin-bottom: 50px;\n"])))},1447:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,a,o,c,u=t(2982),i=t(5861),s=t(885),p=t(7757),l=t.n(p),f=t(2791),d=t(6731),x=t(7689),g=t(5573),h=t(168),v=t(6444),m=v.ZP.form(r||(r=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n  margin-bottom: 30px;\n"]))),Z=v.ZP.input(a||(a=(0,h.Z)(["\n  width: 400px;\n  padding: 10px;\n  font-weight: 500;\n  background-color: #242227;\n  border: 1px solid green;\n  color: #ffffff;\n  transition: outline 300ms ease;\n\n  &:focus,\n  &:hover {\n    outline: 2px solid #59ff1b;\n  }\n\n  &::placeholder {\n    color: #ffffff;\n  }\n"]))),b=v.ZP.button(o||(o=(0,h.Z)(["\n  background-color: #067c11;\n  padding: 10px 30px;\n  border: 1px solid #067c11;\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 300ms ease;\n\n  &:focus,\n  &:hover {\n    background-color: #379d10;\n  }\n"]))),k=t(184),w=function(n){var e=n.updateQuery;return(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(m,{onSubmit:function(n){n.preventDefault();var t=n.currentTarget.elements.inputValue.value;""!==t&&(e(t),n.currentTarget.reset())},children:[(0,k.jsx)(Z,{type:"text",name:"inputValue",placeholder:"Enter movie name"}),(0,k.jsx)(b,{type:"submit",children:"Search"})]})})},j=t(7047),y=t(1077),P=t(9245),_=v.ZP.button(c||(c=(0,h.Z)(["\n  display: block;\n  padding: 10px 30px;\n  margin-top: 30px;\n  margin-left: auto;\n  margin-right: auto;\n  border: 1px solid #067c11;\n  color: #ffffff;\n  background-color: #067c11;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: 500;\n  width: 180px;\n  transition: background-color 300ms ease;\n\n  &:hover,\n  &:focus {\n    background-color: #379d10;\n  }\n"]))),S=function(n){var e=n.loadMore;return(0,k.jsx)(_,{type:"button",onClick:e,children:"Load more"})};function U(){var n=(0,f.useState)(1),e=(0,s.Z)(n,2),t=e[0],r=e[1],a=(0,f.useState)(null),o=(0,s.Z)(a,2),c=o[0],p=o[1],h=(0,d.lr)(),v=(0,s.Z)(h,2),m=v[0],Z=v[1],b=(0,f.useState)([]),_=(0,s.Z)(b,2),U=_[0],F=_[1],z=(0,f.useState)(!1),C=(0,s.Z)(z,2),q=C[0],L=C[1],T=(0,x.TH)();(0,f.useEffect)((function(){var n=m.get("query");n&&function(){var e=(0,i.Z)(l().mark((function e(){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,L(!0),e.next=4,(0,g.Pt)(n,t);case 4:r=e.sent,F((function(n){return[].concat((0,u.Z)(n),(0,u.Z)(r.results))})),p(r.total_pages),L(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),console.log(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()()}),[m,t]);return(0,k.jsx)(k.Fragment,{children:(0,k.jsx)("main",{children:(0,k.jsxs)(y.$,{children:[(0,k.jsx)(w,{updateQuery:function(n){F([]),r(1),p(null),Z({query:n})}}),q&&(0,k.jsx)(P.a,{}),U.length>0&&!q&&(0,k.jsx)(k.Fragment,{children:(0,k.jsx)("div",{children:(0,k.jsx)(j.e,{movies:U,state:{from:T}})})}),c>1&&t<c&&!q&&(0,k.jsx)(S,{loadMore:function(){r((function(n){return n+1}))}})]})})})}},5820:function(n,e,t){n.exports=t.p+"static/media/poster-default.da8011a991f1636157b0.jpg"}}]);
//# sourceMappingURL=447.c2f68468.chunk.js.map