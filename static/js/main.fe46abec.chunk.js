(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){e.exports={movie:"MovieImage_movie__1y_N9"}},25:function(e,t,n){"use strict";n.r(t);var c=n(13),r=n.n(c),a=(n(12),n(15)),i=n(10),o=n(2),s=n(5),u=n(3),j=n(1),l=n(14),b=n.n(l),d=n(0),h=function(e){var t=e.poster_path,n="https://image.tmdb.org/t/p/w500/"+t;return Object(d.jsx)("div",{className:b.a.movie,children:t?Object(d.jsx)("img",{src:n,alt:"movie"}):Object(d.jsx)("p",{children:"No image"})})},m=n(8),v=n.n(m),O=function(e){var t=e.closeModal,n=e.original_title,c=e.overview,r=e.release_date,a=e.vote_average,i=e.poster_path,o="https://image.tmdb.org/t/p/w500/"+i;return Object(d.jsxs)("div",{className:v.a.modal,onClick:function(e){return e.stopPropagation()},children:[Object(d.jsx)("div",{className:v.a.button,children:Object(d.jsx)("button",{onClick:t,children:"\u2718"})}),i?Object(d.jsx)("img",{src:o,alt:"img"}):Object(d.jsx)("p",{children:"No image for this movie"}),Object(d.jsxs)("div",{className:v.a.content,children:[Object(d.jsx)("h2",{children:n}),Object(d.jsx)("h3",{children:r}),Object(d.jsx)("h4",{children:a}),Object(d.jsx)("h5",{children:c})]})]})},f="https://api.themoviedb.org/3/search/movie?api_key=d329c9c7d67f3a237c50b4cdb4556d40&query=";function p(){return(p=Object(s.a)(Object(o.a)().mark((function e(t){var n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(f).concat(t),e.abrupt("return",fetch(n).then((function(e){return e.json()})).then((function(e){return e.results})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g={getMovies:function(e){return p.apply(this,arguments)}},x=g,_="https://api.themoviedb.org/3/movie/popular?api_key=d329c9c7d67f3a237c50b4cdb4556d40";function N(){return(N=Object(s.a)(Object(o.a)().mark((function e(){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(_).then((function(e){return e.json()})).then((function(e){return e.results})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y={getMovies:function(){return N.apply(this,arguments)}},M=y,k=n(9),S=n.n(k),w=function(e){var t=e.goHome,n=e.myMovies,c=e.submit,r=e.value,a=e.change;return Object(d.jsxs)("header",{children:[Object(d.jsxs)("div",{className:"menu",children:[Object(d.jsx)("div",{className:S.a.logo,onClick:t,children:"Movies"}),Object(d.jsx)("div",{className:S.a.mine,onClick:n,children:"My Movies"})]}),Object(d.jsxs)("form",{onSubmit:c,className:S.a.search,children:[Object(d.jsx)("input",{name:"searchMovie",value:r,onChange:a,placeholder:"Search movie"}),Object(d.jsx)("button",{type:"submit",children:"Search"})]})]})},C=function(){var e=Object(j.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(j.useState)([]),l=Object(u.a)(r,2),b=l[0],m=l[1],v=Object(j.useState)([]),f=Object(u.a)(v,2),p=f[0],g=f[1],_=Object(j.useState)(!1),N=Object(u.a)(_,2),y=N[0],k=N[1],S=Object(j.useState)(""),C=Object(u.a)(S,2),H=C[0],R=C[1],B=Object(j.useState)(!1),D=Object(u.a)(B,2),E=D[0],I=D[1],J=Object(j.useState)(!1),P=Object(u.a)(J,2),Y=P[0],q=P[1];Object(j.useEffect)((function(){M.getMovies().then((function(e){return c(e)}))}),[E]);var z=function(){var e=Object(s.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),q(!1),R(""),x.getMovies(H).then((function(e){return c(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=n.map((function(e){var t=p.filter((function(t){return t.id===e.id})).length>0?"favorite green":"favorite";return Object(d.jsxs)("div",{className:"movie",children:[Object(d.jsx)(h,Object(i.a)({},e)),Object(d.jsxs)("div",{className:"menu-movie",children:[Object(d.jsx)("button",{className:"large",onClick:function(){k(!0),m(e)}}),Object(d.jsx)("div",{onClick:function(t){if(m(e),t.currentTarget.classList.toggle("green"),console.log("hehe"),p.filter((function(t){return t.id===e.id})).length>0){var n=p.filter((function(t){return t.id!==e.id}));g(n),Y&&c(n)}else g([].concat(Object(a.a)(p),[e])),console.log(p)},className:t,children:"\u2605"})]})]},e.id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)(w,{goHome:function(){I(!E),k(!1),q(!1)},myMovies:function(e){c(p),k(!1),q(!0)},submit:z,value:H,change:function(e){return R(e.target.value)}}),Object(d.jsxs)("div",{className:"container",onClick:function(e){e.stopPropagation(),y&&k(!1)},children:[y&&Object(d.jsx)(O,Object(i.a)({closeModal:function(){return k(!1)}},b)),0===n.length&&Object(d.jsx)("h1",{children:"Sorry !! can't find any movie"}),Object(d.jsx)("div",{className:"grid",children:K})]})]})};r.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(C,{}))},8:function(e,t,n){e.exports={modal:"Modal_modal__2_ODe",button:"Modal_button__39zYY",content:"Modal_content__2-Z4W"}},9:function(e,t,n){e.exports={search:"Header_search__1Rioj",logo:"Header_logo__1_XSR",mine:"Header_mine__KNjB_"}}},[[25,1,2]]]);
//# sourceMappingURL=main.fe46abec.chunk.js.map