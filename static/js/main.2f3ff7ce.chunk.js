(this["webpackJsonpcast-app"]=this["webpackJsonpcast-app"]||[]).push([[0],{72:function(e,t,n){},73:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(0),c=n.n(i),a=n(28),s=n.n(a),o=(n(72),n(73),n(99)),l=n(100),j=n(101),h=n(102),d=n(103),b=n(104),x=n(55),m=n.n(x),O=n(56),u=n.n(O),p=n(57),g=n.n(p),f=Object(o.a)((function(e){return{root:{flexGrow:1,paddingTop:"150px"},menuButton:{marginRight:e.spacing(2)},toolbar:{flexGrow:1,minHeight:128,alignItems:"flex-start",paddingTop:e.spacing(1),paddingBottom:e.spacing(2),backgroundColor:"#393939",color:"#fff"},sectionSpacing:{marginRight:e.spacing(2)},appBar:{top:"auto",bottom:0},linkList:{listStyle:"none","& li":{display:"inline",padding:"0 10px",borderLeft:"solid 1px white","& a":{color:"#fff"}}},"@global":{"li:first-child":{borderLeft:"none"}}}}));var v=function(e){var t=f(),n=function(e){return e.preventDefault()};return Object(r.jsx)("div",{className:t.root,id:"footer",children:Object(r.jsx)(l.a,{position:"static",className:t.appBar,children:Object(r.jsx)(j.a,{className:t.toolbar,children:Object(r.jsxs)(h.a,{container:!0,children:[Object(r.jsx)(h.a,{item:!0,xs:12,children:Object(r.jsx)("div",{children:Object(r.jsxs)("ul",{className:t.linkList,children:[Object(r.jsx)("li",{children:Object(r.jsx)(d.a,{href:"#",onClick:n,children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)(d.a,{href:"#",onClick:n,children:"Terms and Conditions"})}),Object(r.jsx)("li",{children:Object(r.jsx)(d.a,{href:"#",onClick:n,children:"Privacy Policy"})}),Object(r.jsx)("li",{children:Object(r.jsx)(d.a,{href:"#",onClick:n,children:"Collection Statement"})}),Object(r.jsx)("li",{children:Object(r.jsx)(d.a,{href:"#",onClick:n,children:"Help"})}),Object(r.jsx)("li",{children:Object(r.jsx)(d.a,{href:"#",onClick:n,children:"Manage Account"})})]})})}),Object(r.jsx)(h.a,{item:!0,xs:12,children:Object(r.jsxs)("footer",{children:[" ","Copyright \xa9 2016 DEMO Streaming. All Rights Reserved"]})}),Object(r.jsxs)(h.a,{item:!0,xs:12,children:[Object(r.jsx)(b.a,{"aria-label":"search",color:"inherit",children:Object(r.jsx)(m.a,{})}),Object(r.jsx)(b.a,{"aria-label":"search",color:"inherit",children:Object(r.jsx)(u.a,{})}),Object(r.jsx)(b.a,{"aria-label":"search",color:"inherit",children:Object(r.jsx)(g.a,{})}),Object(r.jsx)(b.a,{"aria-label":"search",color:"inherit",children:Object(r.jsx)("img",{width:80,src:"https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/assets/store/app-store.svg",alt:"App Store"})}),Object(r.jsx)(b.a,{"aria-label":"search",color:"inherit",children:Object(r.jsx)("img",{width:80,src:"https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/assets/store/app-store.svg",alt:"App Store"})}),Object(r.jsx)(b.a,{"aria-label":"search",color:"inherit",children:Object(r.jsx)("img",{width:80,src:"https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/assets/store/windows-store.svg",alt:"Windows Store"})})]})]})})})})},w=n(45),y=n(87),k=n(105),S=Object(o.a)((function(e){return{root:{flexGrow:1},grow:{flexGrow:1},trialBtn:Object(w.a)({backgroundColor:"#000",color:"#fff","&:hover":{backgroundColor:"#4b4747"}},e.breakpoints.down("md"),{}),title:Object(w.a)({fontSize:"1.5rem"},e.breakpoints.down("md"),{fontSize:"1rem"})}}));var N=function(e){console.log("HEADER",e);var t=S();return Object(r.jsx)("div",{className:t.root,children:Object(r.jsx)(l.a,{position:"fixed",children:Object(r.jsxs)(j.a,{children:[Object(r.jsx)(y.a,{onClick:function(){window.location.replace("/")},variant:"h6",className:t.title,children:"DEMO Streaming"}),Object(r.jsx)("div",{className:t.grow}),Object(r.jsxs)("div",{children:[Object(r.jsx)(k.a,{className:t.logInBtn,color:"inherit",size:"small",children:"Log in"}),Object(r.jsx)(k.a,{size:"small",color:"inherit",className:t.trialBtn,children:"Start your free trial"})]})]})})})},C=n.p+"static/media/series.6f8c9841.svg",A=n.p+"static/media/movies.cdfae65c.svg",P=n(106),T=n(107),R=n(108),B=n(109),E=Object(o.a)((function(){return{root:{maxWidth:250},media:{height:30,width:"100%",paddingTop:"36.25%"}}})),I=[{id:1,label:"Popluar Series",path:"/series",icon:C},{id:2,label:"Popular Movies",path:"/movies",icon:A}];var W=function(e){var t=E();return Object(r.jsx)("div",{children:Object(r.jsx)(P.a,{maxWidth:"sm",children:Object(r.jsx)(h.a,{container:!0,alignItems:"center",spacing:2,children:I.map((function(n){return Object(r.jsx)(h.a,{item:!0,xs:6,children:Object(r.jsxs)(T.a,{className:t.root,onClick:function(){return t=n.path,void e.history.push("".concat(t));var t},children:[Object(r.jsx)(R.a,{className:t.media,image:n.icon,title:n.label}),Object(r.jsx)(B.a,{children:Object(r.jsx)(y.a,{variant:"body2",color:"textSecondary",component:"p",children:n.label})})]})},n.id)}))})})})},z=n(15),L=n.n(z),D=n(22),M=n(16),Y=n(110),F=n(113),G=n(112),H=function(){return fetch("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json")},J=function(e,t){var n=[];e.length>0&&(n=e.filter((function(e){return e.releaseYear>=2010&&e.programType===t})).sort((function(e,t){return t.title<e.title?1:t.title>e.title?-1:0})));return n.length>0?n.splice(0,21):n},q=function(e,t){var n=[];return e.length>0&&(n=e.filter((function(e){return e.title===t}))),n.length>0?n[0]:n},K=Object(o.a)((function(e){return{root:{maxWidth:250,cursor:"pointer"},media:{height:30,width:"100%",paddingTop:"36.25%"},title:{margin:"1rem",fontSize:"0.8rem"}}}));var Q=function(e){var t=K(),n=Object(i.useState)([]),c=Object(M.a)(n,2),a=c[0],s=c[1],o=Object(i.useState)(!0),l=Object(M.a)(o,2),j=l[0],d=l[1],b=function(){var e=Object(D.a)(L.a.mark((function e(){var t,n,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H();case 2:if(!(t=e.sent)||!t.ok){e.next=9;break}return e.next=6,t.json();case 6:(n=e.sent)&&n.hasOwnProperty("entries")&&n.entries.length>0&&(d(!1),r=n.entries,s(J(r,"movie"))),console.log(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){b()}),[]),Object(r.jsx)("div",{children:Object(r.jsx)(P.a,{maxWidth:"md",children:Object(r.jsxs)(h.a,{container:!0,alignItems:"center",spacing:2,children:[a.length>0?a.map((function(n){return Object(r.jsx)(h.a,{item:!0,xs:3,children:Object(r.jsxs)(T.a,{className:t.root,onClick:function(){return t=n.title,void e.history.push("/movies/".concat(t));var t},children:[n.images["Poster Art"].url?Object(r.jsx)(R.a,{className:t.media,image:n.images["Poster Art"].url,title:n.title}):Object(r.jsx)(Y.a,{variant:"rect",width:210,height:118}),Object(r.jsx)("span",{className:t.title,children:n.title})]})},n.id)})):j&&[0,1,2].map((function(e,t){return Object(r.jsx)(G.a,{width:180,marginRight:.5,my:2,children:Object(r.jsx)(Y.a,{variant:"rect",width:180,height:118})},t)})),!j&&0==a.length&&Object(r.jsx)("div",{style:{width:"100%"},children:Object(r.jsx)(F.a,{severity:"error",children:"Oops,somthing went wrong!"})})]})})})},U=Object(o.a)((function(e){return{root:{maxWidth:250,cursor:"pointer"},media:{height:30,width:"100%",paddingTop:"36.25%"},title:{margin:"1rem",fontSize:"0.8rem"}}}));var V=function(e){var t=U(),n=Object(i.useState)([]),c=Object(M.a)(n,2),a=c[0],s=c[1],o=Object(i.useState)(!0),l=Object(M.a)(o,2),j=l[0],d=l[1],b=function(){var e=Object(D.a)(L.a.mark((function e(){var t,n,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H();case 2:if(!(t=e.sent)||!t.ok){e.next=9;break}return e.next=6,t.json();case 6:(n=e.sent)&&n.hasOwnProperty("entries")&&n.entries.length>0&&(d(!1),r=n.entries,s(J(r,"series"))),console.log(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){b()}),[]),Object(r.jsx)("div",{children:Object(r.jsx)(P.a,{maxWidth:"md",children:Object(r.jsxs)(h.a,{container:!0,alignItems:"center",spacing:2,children:[a.length>0?a.map((function(n){return Object(r.jsx)(h.a,{item:!0,xs:3,children:Object(r.jsxs)(T.a,{className:t.root,onClick:function(){return t=n.title,void e.history.push("/series/".concat(t));var t},children:[n.images["Poster Art"].url?Object(r.jsx)(R.a,{className:t.media,image:n.images["Poster Art"].url,title:n.title}):Object(r.jsx)(Y.a,{variant:"rect",width:210,height:118}),Object(r.jsx)("span",{className:t.title,children:n.title})]})},n.id)})):j&&[0,1,2].map((function(e,t){return Object(r.jsx)(G.a,{width:180,marginRight:.5,my:2,children:Object(r.jsx)(Y.a,{variant:"rect",width:180,height:118})},t)})),!j&&0==a.length&&Object(r.jsx)("div",{style:{width:"100%"},children:Object(r.jsx)(F.a,{severity:"error",children:"Oops,somthing went wrong!"})})]})})})},X=Object(o.a)((function(e){return{media:{height:30,width:"100%",paddingTop:"36.25%"},title:{margin:"1rem",fontSize:"0.8rem"}}}));var Z=function(e){var t=e.match.params.id,n=X(),c=Object(i.useState)({}),a=Object(M.a)(c,2),s=a[0],o=a[1],l=Object(i.useState)(!0),j=Object(M.a)(l,2),d=j[0],b=j[1],x=function(){var e=Object(D.a)(L.a.mark((function e(){var n,r,i,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H();case 2:if(!(n=e.sent)||!n.ok){e.next=9;break}return e.next=6,n.json();case 6:(r=e.sent)&&r.hasOwnProperty("entries")&&r.entries.length>0&&(i=r.entries,c=q(i,t),o(c),b(!1)),console.log(r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){x()}),[]),Object(r.jsx)("div",{children:Object(r.jsx)(P.a,{maxWidth:"md",children:Object(r.jsxs)(h.a,{container:!0,alignItems:"center",spacing:2,children:[!d&&s?Object(r.jsx)(h.a,{item:!0,xs:12,children:Object(r.jsxs)(T.a,{className:n.root,children:[s.images["Poster Art"].url?Object(r.jsx)(R.a,{className:n.media,image:s.images["Poster Art"].url,title:s.title}):Object(r.jsx)(Y.a,{variant:"rect",width:210,height:118}),Object(r.jsxs)(B.a,{children:[Object(r.jsxs)("div",{style:{textAlign:"left"},children:[Object(r.jsx)("span",{children:"Title:"}),Object(r.jsx)("span",{className:n.title,children:s.title})]}),Object(r.jsxs)("div",{style:{textAlign:"left"},children:[Object(r.jsx)("span",{children:"Program Type:"}),Object(r.jsx)("span",{className:n.title,children:s.programType})]}),Object(r.jsxs)("div",{style:{textAlign:"left"},children:[Object(r.jsx)("span",{children:"Release Year:"}),Object(r.jsx)("span",{className:n.title,children:s.releaseYear})]})]})]})},s.title):d&&Object(r.jsx)(G.a,{width:180,marginRight:.5,my:2,children:Object(r.jsx)(Y.a,{variant:"rect",width:180,height:118})}),!d&&0==s.length&&Object(r.jsx)("div",{style:{width:"100%"},children:Object(r.jsx)(F.a,{severity:"error",children:"Oops,somthing went wrong!"})})]})})})},$=Object(o.a)((function(e){return{root:{},media:{height:30,width:"100%",paddingTop:"36.25%"},title:{margin:"1rem",fontSize:"0.8rem"}}}));var _=function(e){var t=e.match.params.id,n=$(),c=Object(i.useState)({}),a=Object(M.a)(c,2),s=a[0],o=a[1],l=Object(i.useState)(!0),j=Object(M.a)(l,2),d=j[0],b=j[1],x=function(){var e=Object(D.a)(L.a.mark((function e(){var n,r,i,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H();case 2:if(!(n=e.sent)||!n.ok){e.next=9;break}return e.next=6,n.json();case 6:(r=e.sent)&&r.hasOwnProperty("entries")&&r.entries.length>0&&(i=r.entries,c=q(i,t),o(c),b(!1)),console.log(r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){x()}),[]),Object(r.jsx)("div",{children:Object(r.jsx)(P.a,{maxWidth:"md",children:Object(r.jsxs)(h.a,{container:!0,alignItems:"center",spacing:2,children:[!d&&s?Object(r.jsx)(h.a,{item:!0,xs:12,children:Object(r.jsxs)(T.a,{className:n.root,children:[s.images["Poster Art"].url?Object(r.jsx)(R.a,{className:n.media,image:s.images["Poster Art"].url,title:s.title}):Object(r.jsx)(Y.a,{variant:"rect",width:210,height:118}),Object(r.jsxs)(B.a,{children:[Object(r.jsxs)("div",{style:{textAlign:"left"},children:[Object(r.jsx)("span",{children:"Title:"}),Object(r.jsx)("span",{className:n.title,children:s.title})]}),Object(r.jsxs)("div",{style:{textAlign:"left"},children:[Object(r.jsx)("span",{children:"Program Type:"}),Object(r.jsx)("span",{className:n.title,children:s.programType})]}),Object(r.jsxs)("div",{style:{textAlign:"left"},children:[Object(r.jsx)("span",{children:"Release Year:"}),Object(r.jsx)("span",{className:n.title,children:s.releaseYear})]})]})]})},s.title):d&&Object(r.jsx)(G.a,{width:180,marginRight:.5,my:2,children:Object(r.jsx)(Y.a,{variant:"rect",width:180,height:118})}),!d&&0==s.length&&Object(r.jsx)("div",{style:{width:"100%"},children:Object(r.jsx)(F.a,{severity:"error",children:"Oops,somthing went wrong!"})})]})})})},ee=n(8),te=[{id:1,route:"/",component:W,exact:!0},{id:2,route:"/movies",component:Q,exact:!0},{id:3,route:"/movies/:id",component:_,exact:!0},{id:4,route:"/series",component:V,exact:!0},{id:4,route:"/series/:id",component:Z,exact:!0}],ne=function(e){return Object(r.jsx)(ee.c,{children:te.map((function(e){return Object(r.jsx)(ee.a,{exact:e.exact||!1,path:e.route,component:e.component},e.id)}))})};var re=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(N,{}),Object(r.jsx)("div",{style:{marginTop:"80px"},children:Object(r.jsx)(ne,{})}),Object(r.jsx)(v,{})]})},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,115)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),c(e),a(e)}))},ce=n(58),ae=n(111),se=n(44),oe=Object(ce.a)({palette:{primary:{main:"#008eff"}}});s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(ae.a,{theme:oe,children:Object(r.jsx)(se.a,{children:Object(r.jsx)(re,{})})})}),document.getElementById("root")),ie()}},[[84,1,2]]]);
//# sourceMappingURL=main.2f3ff7ce.chunk.js.map