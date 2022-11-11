"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[753],{5573:function(n,e,t){t.d(e,{Df:function(){return u},Jh:function(){return f},Pg:function(){return i},Pt:function(){return p},bp:function(){return l}});var r=t(5861),a=t(7757),c=t.n(a),o=t(1044),s="592f788186491be4ee714869feb8dcec";o.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("trending/movie/day?api_key=".concat(s));case 3:return e=n.sent,n.next=6,e.data.results;case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 3:return t=n.sent,n.next=6,t.data;case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,n.prev=1,n.next=4,o.ZP.get("search/movie?api_key=".concat(s,"&language=en-US&query=").concat(e,"&page=").concat(t,"&include_adult=false"));case 4:return r=n.sent,n.next=7,r.data;case 7:return n.abrupt("return",n.sent);case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return t=n.sent,n.next=6,t.data.cast;case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.ZP.get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US"));case 3:return t=n.sent,n.next=6,t.data.results;case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},9245:function(n,e,t){t.d(e,{a:function(){return u}});var r,a=t(5243),c=t(168),o=t(6444).ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 100px;\n"]))),s=t(184);function u(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(o,{children:[(0,s.jsx)(a.p2,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0}),";"]})})}},7047:function(n,e,t){t.d(e,{e:function(){return m}});var r,a,c,o,s,u=t(168),i=t(6444),p=t(6731),l=i.ZP.ul(r||(r=(0,u.Z)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 30px;\n"]))),f=i.ZP.li(a||(a=(0,u.Z)(["\n  background-color: #000;\n\n  &:hover {\n    box-shadow: 0px 0px 7px 6px rgb(53 100 39);\n  }\n"]))),d=(0,i.ZP)(p.rU)(c||(c=(0,u.Z)(["\n  text-decoration: none;\n  color: #ffffff;\n"]))),x=i.ZP.div(o||(o=(0,u.Z)(["\n  background-color: #000;\n  padding-bottom: 10px;\n"]))),g=i.ZP.p(s||(s=(0,u.Z)(["\n  display: block;\n  font-size: 20px;\n  font-weight: 400;\n  text-align: center;\n  padding-top: 10px;\n"]))),h=t(5820),v=t(184),m=function(n){var e=n.movies,t=n.state;return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(l,{children:e.map((function(n){var e=n.id,r=n.poster_path,a=n.title,c=n.release_date.slice(0,4);return(0,v.jsx)(f,{children:(0,v.jsx)(d,{to:"/movies/".concat(e),state:t,children:(0,v.jsxs)(x,{children:[(0,v.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):h,alt:a}),(0,v.jsxs)(g,{children:['"',a,'"']}),(0,v.jsx)(g,{children:c})]})})},e)}))})})}},1077:function(n,e,t){t.d(e,{$:function(){return s},X:function(){return u}});var r,a,c=t(168),o=t(6444),s=o.ZP.section(r||(r=(0,c.Z)(["\n  /* position: relative; */\n  padding: 30px 15px;\n  max-width: 1320px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),u=o.ZP.h1(a||(a=(0,c.Z)(["\n  font-size: 36px;\n  text-align: center;\n  color: #c5ecc5;\n  margin-bottom: 50px;\n"])))},6753:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,a,c,o=t(5861),s=t(885),u=t(7757),i=t.n(u),p=t(2791),l=t(6731),f=t(7689),d=t(5573),x=t(168),g=t(6444),h=g.ZP.form(r||(r=(0,x.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n  margin-bottom: 30px;\n"]))),v=g.ZP.input(a||(a=(0,x.Z)(["\n  width: 400px;\n  padding: 10px;\n  font-weight: 500;\n  background-color: #242227;\n  border: 1px solid green;\n  color: #ffffff;\n  transition: outline 300ms ease;\n\n  &:focus,\n  &:hover {\n    outline: 2px solid #59ff1b;\n  }\n\n  &::placeholder {\n    color: #ffffff;\n  }\n"]))),m=g.ZP.button(c||(c=(0,x.Z)(["\n  background-color: #067c11;\n  padding: 10px 30px;\n  border: 1px solid #067c11;\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-colo 300ms ease;\n\n  &:focus,\n  &:hover {\n    background-color: #379d10;\n  }\n"]))),Z=t(184),b=function(n){var e=n.updateQuery;return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(h,{onSubmit:function(n){n.preventDefault();var t=n.currentTarget.elements.inputValue.value;""!==t&&(e(t),n.currentTarget.reset())},children:[(0,Z.jsx)(v,{type:"text",name:"inputValue",placeholder:"Enter movie name"}),(0,Z.jsx)(m,{type:"submit",children:"Search"})]})})},w=t(7047),y=t(1077),j=t(9245);function k(){var n=(0,l.lr)(),e=(0,s.Z)(n,2),t=e[0],r=e[1],a=(0,p.useState)([]),c=(0,s.Z)(a,2),u=c[0],x=c[1],g=(0,p.useState)(!1),h=(0,s.Z)(g,2),v=h[0],m=h[1],k=(0,f.TH)();(0,p.useEffect)((function(){var n=t.get("query");function e(){return e=(0,o.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,m(!0),n.next=4,(0,d.Pt)(e);case 4:t=n.sent,console.log(e),console.log(t),console.log(t.results),x(t.results),m(!1),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0),console.log(n.t0.message);case 16:case"end":return n.stop()}}),n,null,[[0,12]])}))),e.apply(this,arguments)}n&&function(n){e.apply(this,arguments)}(n)}),[t]);return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)("main",{children:(0,Z.jsxs)(y.$,{children:[(0,Z.jsx)(b,{updateQuery:function(n){r({query:n})}}),v&&(0,Z.jsx)(j.a,{}),u.length>0&&(0,Z.jsx)("div",{children:(0,Z.jsx)(w.e,{movies:u,state:{from:k}})})]})})})}},5820:function(n,e,t){n.exports=t.p+"static/media/poster-default.da8011a991f1636157b0.jpg"}}]);
//# sourceMappingURL=753.2ca59d39.chunk.js.map