(this.webpackJsonpshoppify=this.webpackJsonpshoppify||[]).push([[0],{26:function(e,t,n){},40:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(1),i=n.n(a),r=n(12),s=n.n(r),o=(n(40),n(33)),l=n(16),j=n.n(l),h=n(31),d=n(9),u=(n(42),n(32)),b=n.n(u),m=n(75),O=n(34),x=n(76),f=n(77),p=n(78),v=(n(26),n(71)),g=n(72),w=n(73),y=function(e){var t=e.NomineeComp;return Object(c.jsx)(a.Fragment,{children:e.movies.map((function(n,a){return Object(c.jsx)(v.a,{md:"6",xs:"12",lg:"3",children:Object(c.jsxs)(g.a,{body:!0,style:{height:"200px"},className:"mb-4 display-card",children:[Object(c.jsx)("h5",{children:n.Title}),Object(c.jsx)("h6",{children:n.Year}),Object(c.jsx)(w.a,{block:!0,color:"primary",onClick:function(){return e.handleClick(n)},className:"button",children:Object(c.jsx)(t,{})})]})})}))})},M=n(74),N=function(e){return Object(c.jsx)(a.Fragment,{children:Object(c.jsx)(M.a,{type:"text",value:e.search,id:"search-input",onChange:function(t){return e.setSearch(t.target.value)},placeholder:"Search a movie"})})},S=function(){return Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)("span",{className:"mr-2",children:"Nominate Movie"}),Object(c.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-heart-fill",fill:"red",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"})})]})},C=function(){return Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)("span",{className:"mr-2",children:"Remove Movie"}),Object(c.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-x-square",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[Object(c.jsx)("path",{"fill-rule":"evenodd",d:"M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),Object(c.jsx)("path",{"fill-rule":"evenodd",d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})]})]})},F=function(e){return Object(c.jsx)("div",{className:"col",children:Object(c.jsx)("h3",{className:"section-header",children:e.heading})})},k=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)([]),s=Object(d.a)(r,2),l=s[0],u=s[1],v=Object(a.useState)(""),g=Object(d.a)(v,2),w=g[0],M=g[1],k=Object(a.useState)(null),L=Object(d.a)(k,2),T=L[0],z=L[1],B=Object(a.useState)([]),I=Object(d.a)(B,2),D=I[0],E=I[1],H=Object(a.useState)(!0),J=Object(d.a)(H,2),P=J[0],V=J[1],q=function(){var e=Object(h.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),n="https://www.omdbapi.com/?s=".concat(t,"s&apikey=f489ec74"),e.next=4,b.a.get(n).then((function(e){var t=e.data;t.Search&&(u(t.Search),i(!1))})).catch((function(e){return console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){q(w),console.log(D)}),[w]);var R=Object(c.jsx)(m.a,{color:"primary",children:"Maximum nomination is 5!"}),Y=Object(c.jsx)(O.a,{color:"danger",isOpen:P,toggle:function(){return V(!1)},children:"Movie already nominated"});return Object(c.jsxs)(x.a,{children:[Object(c.jsxs)("div",{className:"justify-content-md-center mt-6 mb-4",children:[Object(c.jsx)("h4",{className:"mb-4 mt-4 brand",children:"The Shoppies"}),D.length>=5?R:"",T?Y:"",Object(c.jsx)(N,{search:w,setSearch:M})]}),Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)(F,{heading:"Movies"}),n?Object(c.jsx)("div",{className:"spinner",children:Object(c.jsx)(f.a,{color:"primary"})}):Object(c.jsx)(p.a,{children:Object(c.jsx)(y,{movies:l,NomineeComp:S,handleClick:function(e){if(D.map((function(e){return e.Title})).includes(e.Title))z({errMsg:"Movie already nominated"}),console.log("Movied already nominated");else{var t=[].concat(Object(o.a)(D),[e]);if(t.length<6)return E(t)}}})})]}),Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)(F,{heading:"Nominated ".concat(D.length>1?"Movies":"Movie")}),Object(c.jsx)(p.a,{className:"justify-content-center nominated",children:Object(c.jsx)(y,{movies:D,handleClick:function(e){var t=D.filter((function(t){return t.imdbID!==e.imdbID}));E(t)},NomineeComp:C})})]})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),L()}},[[70,1,2]]]);
//# sourceMappingURL=main.ddf472ef.chunk.js.map