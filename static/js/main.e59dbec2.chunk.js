(this.webpackJsonpreddit=this.webpackJsonpreddit||[]).push([[0],{168:function(e,t,c){},169:function(e,t,c){},172:function(e,t,c){"use strict";c.r(t);var i=c(1),r=c(20),s=c.n(r),a=c(38),n=c.n(a),d=c(69),l=c(12),o=(c(79),c(9)),j=c(70),b=(c(80),c(39)),u=c.n(b),h=(c(81),c(0));var O=function(e){var t=e.updateData,c=e.setSearch,r=e.minimize,s=e.setMinimize,a=e.search,n=e.showResults,d=e.showFava,b=function(e){var t,c=new URLSearchParams(e),i={},r=Object(j.a)(c.keys());try{for(r.s();!(t=r.n()).done;){var s=t.value;c.getAll(s).length>1?i[s]=c.getAll(s):i[s]=c.get(s)}}catch(a){r.e(a)}finally{r.f()}return i}(window.location.search),O=Object(i.useState)({username:b.username?b.username:"",subreddit:b.subreddit?b.subreddit:"",query:b.query?b.query:"",numReturned:b.numReturned?b.numReturned:"",score:b.score?b.score:"",before:b.before?b.before:"",after:b.after?b.after:"",searchTerm:b.searchTerm?b.searchTerm:""}),f=Object(l.a)(O,2),m=f[0],x=f[1];function p(e,t,c){var i="",r=e.split("?"),s=r[0],a=r[1],n="";if(a){r=a.split("&");for(var d=0;d<r.length;d++)r[d].split("=")[0]!=t&&(i+=n+r[d],n="&")}return s+"?"+i+(n+""+t+"="+c)}var v=p(window.location.href,"locId","newLoc");v=p(v,"resId","newResId"),Object(i.useEffect)((function(){})),console.log(a);var w=Object(i.useRef)();return Object(h.jsx)("div",{id:"form-".concat(r?"hover":"parent"),children:Object(h.jsx)("div",{id:"form",children:Object(h.jsxs)("form",{onSubmit:function(e){t(m),e.preventDefault(),c(!1),s(!0),d.current.style.display="flex",n.current.style.display="block";var i=[];for(var r in m)for(var a in m){m.hasOwnProperty(a)&&"function"!==typeof m[a]&&i.push(a);var l=m[r];l&&window.history.replaceState("","",p(window.location.href,r,l))}},class:"form-".concat(r?"minimize":"maximize"),ref:w,children:[Object(h.jsxs)("div",{id:"row-1",children:[Object(h.jsxs)("div",{className:"row-wrapper",children:[Object(h.jsx)("label",{children:"username"}),Object(h.jsx)("input",{value:m.username,placeholder:"Username",type:"text",onChange:function(e){x(Object(o.a)(Object(o.a)({},m),{},{username:e.target.value}))},id:"username-input"})," "]}),Object(h.jsxs)("div",{className:"row-wrapper",children:[Object(h.jsx)("label",{children:"subreddit"}),Object(h.jsx)("input",{value:m.subreddit,placeholder:"Subreddit",type:"text",onChange:function(e){x(Object(o.a)(Object(o.a)({},m),{},{subreddit:e.target.value}))},id:"subreddit-input"})," "]}),Object(h.jsxs)("div",{className:"row-wrapper",children:[Object(h.jsx)("label",{id:"search-for-input",children:"search for"}),Object(h.jsxs)("select",{onChange:function(e){x(Object(o.a)(Object(o.a)({},m),{},{query:e.target.value}))},children:[Object(h.jsx)("option",{children:"Comments"}),Object(h.jsx)("option",{children:"Submissions"})]})," "]})]}),Object(h.jsxs)("div",{id:"row-2",children:[Object(h.jsx)("div",{id:"num-input",children:Object(h.jsxs)("div",{id:"score-input",children:[Object(h.jsxs)("div",{className:"row-wrapper",children:[Object(h.jsx)("label",{children:"score"}),Object(h.jsx)("input",{placeholder:"Score",type:"number",id:"score-input-box",min:"25",step:"25",value:m.score,onChange:function(e){x(Object(o.a)(Object(o.a)({},m),{},{score:e.target.value}))}})," "]})," "]})}),Object(h.jsxs)("div",{className:"row-wrapper",children:[Object(h.jsxs)("div",{id:"before-input",children:[Object(h.jsx)("label",{children:"before"}),Object(h.jsx)(u.a,{popperProps:{positionFixed:!0},value:m.before,selected:m.before,onChange:function(e){x(Object(o.a)(Object(o.a)({},m),{},{before:e}))}})," ",Object(h.jsx)("span",{class:"fa fa-calendar-o"})]})," "]}),Object(h.jsx)("div",{className:"row-wrapper",children:Object(h.jsxs)("div",{id:"after-input",children:[Object(h.jsx)("label",{children:"after"}),Object(h.jsx)(u.a,{popperProps:{positionFixed:!0},type:"text",selected:m.after,onChange:function(e){return x(Object(o.a)(Object(o.a)({},m),{},{after:e}))}})," ",Object(h.jsx)("span",{class:"fa fa-calendar-o"})]})})]})," ",Object(h.jsxs)("div",{id:"row-3",children:[Object(h.jsx)("div",{id:"search-term-input",children:Object(h.jsxs)("div",{className:"row-wrapper",children:[Object(h.jsx)("label",{children:"keywords"}),Object(h.jsx)("input",{value:m.searchTerm,placeholder:"Keywords",type:"text",onChange:function(e){x(Object(o.a)(Object(o.a)({},m),{},{searchTerm:e.target.value}))}})," "]})}),Object(h.jsxs)("div",{className:"row-wrapper",children:[Object(h.jsx)("label",{children:"amount returned"}),Object(h.jsx)("input",{placeholder:"Size",onChange:function(e){x(Object(o.a)(Object(o.a)({},m),{},{numReturned:e.target.value}))},value:m.numReturned,type:"number",min:"25",step:"25",max:"100",id:"amnt-ret"})," "]})]}),Object(h.jsx)("div",{id:"row-4",children:Object(h.jsx)("div",{id:"seach-btn",children:Object(h.jsxs)("div",{className:"row-wrapper",children:[Object(h.jsx)("input",{id:"search-btn",value:"Search",type:"submit"})," "]})})})]})})})};c(168),c(169);var f=function(){return Object(h.jsx)("div",{id:"loader-parent",children:Object(h.jsx)("div",{id:"loading"})})};var m=function(e){var t=e.api,c=(e.query,e.errorMessage),r=e.error,s=(e.data,e.setMore,e.minimizeR),a=e.showResults,n=Object(i.useRef)(!1);return Object(i.useRef)(),Object(i.useRef)(),console.log(t),Object(h.jsxs)("div",{id:"item-".concat(s?"hover":"parent"),ref:a,children:[Object(h.jsxs)("h1",{ref:r,children:[" ",c," \ud83d\ude22 "]}),t.map((function(e,c){var i=new Date(1e3*e.created_utc).toString();var r,a={Jan:"1",Feb:"2",Mar:"3",Apr:"4",May:"5",Jun:"6",Jul:"7",Aug:"8",Sep:"9",Oct:"10",Nov:"11",Dec:"12"}[i.slice(4,7)];if(!e)return Object(h.jsxs)("div",{id:"loader-wrapper",children:[Object(h.jsx)(f,{},c)," ",Object(h.jsx)("div",{id:"loading-text",children:"Loading \u2022 Results "})," "]});r=e.permalink?e.permalink:"/comments/".concat(e.link_id.split("_")[1],"/_/").concat(e.id);i.slice(8,10),i.slice(11,15);return t.length>0&&n?Object(h.jsx)("div",{className:"parent",id:"results-".concat(s?"minimize":"maximize"),children:Object(h.jsxs)("div",{className:"details",children:[" ",Object(h.jsxs)("div",{className:"image-parent",children:[e.domain?Object(h.jsxs)("div",{id:"image-child",children:["self"!==e.thumbnail&&"default"!==e.thumbnail&&"nsfw"!==e.thumbnail&&"self"!==e.domain.slice(0,4)&&"i.redd.it"===e.domain&&"image"!==e.thumbnail?Object(h.jsx)("img",{src:e.thumbnail}):"","default"===e.thumbnail&&"self"===e.domain.slice(0,4)||"self"===e.thumbnail?Object(h.jsx)("div",{id:"self-post",children:Object(h.jsx)("i",{className:"fa fa-file-text-o","aria-hidden":"true"})}):"","nsfw"===e.thumbnail?Object(h.jsx)("div",{id:"nsfw",children:Object(h.jsx)("i",{className:"fa fa-user-secret","aria-hidden":"true"})}):"","i.redd.it"===e.domain&&"self"!==e.domain.slice(0,4)&&"nsfw"!==e.thumbnail&&"default"===e.thumbnail||"image"===e.thumbnail||"i.redd.it"!==e.domain&&"self"!==e.domain.slice(0,4)&&"nsfw"!==e.thumbnail?Object(h.jsx)("div",{id:"link-post",children:Object(h.jsx)("i",{class:"fa fa-link","aria-hidden":"true"})}):""]}):"",Object(h.jsx)("div",{id:"align-vertically",children:Object(h.jsxs)("div",{id:"details-child",children:[e.title?Object(h.jsxs)("h3",{id:"title",children:[e.title," ",Object(h.jsxs)("a",{id:"domain",children:["(",e.domain,")"]})]}):"",Object(h.jsxs)("a",{children:[e.domain?"submitted":"commented"," by "]}),Object(h.jsxs)("a",{className:"author",children:["u/",e.author]}),Object(h.jsxs)("a",{title:new Date(i),children:[" ",function(e){var t=Math.floor((new Date-e)/1e3),c=t/31536e3;return c>1?Math.floor(c)+" years":(c=t/2592e3)>1?Math.floor(c)+" months":(c=t/86400)>1?Math.floor(c)+" days":(c=t/3600)>1?Math.floor(c)+" hours":(c=t/60)>1?Math.floor(c)+" minutes":Math.floor(t)+" seconds"}(new Date(i))," ago in"," "]}),Object(h.jsxs)("a",{className:"subreddit",children:["r/",e.subreddit]}),Object(h.jsx)("div",{id:"upvote",children:Object(h.jsxs)("i",{class:"fa fa-arrow-up","aria-hidden":"true",children:[" ",Object(h.jsx)("span",{id:"score",children:e.score})]})})]})})]}),!(!e.body&&!e.selftext)&&Object(h.jsx)("div",{id:"body-parent",children:Object(h.jsxs)("p",{id:"body",children:[e.body,e.selftext]})}),Object(h.jsx)("div",{id:"view-on-reddit",children:Object(h.jsx)("a",{href:e.full_link||"https://reddit.com".concat(r),target:"_blank",rel:"noreferrer",children:"view on reddit"})})]})},c):void 0}))]})},x=c(18),p=c(7);var v=function(){var e=Object(i.useState)({username:!1,subreddit:!1,query:!1,numReturned:!1,score:!1,before:!1,after:!1,searchTerm:!1}),t=Object(l.a)(e,2),c=t[0],r=t[1],s=Object(i.useState)([]),a=Object(l.a)(s,2),o=a[0],j=a[1],b=Object(i.useState)(!0),u=Object(l.a)(b,2),f=u[0],v=u[1],w=Object(i.useState)(!1),g=Object(l.a)(w,2),y=g[0],S=g[1],N=Object(i.useState)(!1),R=Object(l.a)(N,2),C=R[0],k=R[1],M=Object(i.useState)(!1),T=Object(l.a)(M,2),q=T[0],z=T[1],D=Object(i.useState)(!1),F=Object(l.a)(D,2),_=(F[0],F[1],Object(i.useState)(!1)),P=Object(l.a)(_,2),A=(P[0],P[1],Object(i.useState)(!1)),L=Object(l.a)(A,2),I=(L[0],L[1],Object(i.useState)()),J=Object(l.a)(I,2),U=J[0],B=J[1],E=Object(i.useRef)(!1),H=Object(i.useRef)(!1),K=Object(i.useRef)(null),Q="",G="comment",V="",W="",X="";function Y(){return Z.apply(this,arguments)}function Z(){return(Z=Object(d.a)(n.a.mark((function e(){var t,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j([!1]),e.next=4,fetch("https://api.pushshift.io/reddit/search/".concat(G,"/?").concat(Q).concat(X).concat(W).concat(V));case 4:return t=e.sent,e.next=7,t.json();case 7:0===(c=e.sent).data.length?(B("Hey! That doesn't exist!"),K.current.style.display="block"):K.current.style.display="none",j(c.data),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}if(c.username&&(Q+="author="+c.username+"&"),c.subreddit&&(Q+="subreddit="+c.subreddit+"&"),c.searchTerm&&(Q+="q="+c.searchTerm+"&"),c.numReturned&&(Q+="size="+c.numReturned+"&"),c.query.length>0&&(G=c.query.toLowerCase().slice(0,-1)),c.before&&(W+="before="+Math.floor(c.before.getTime()/1e3)+"&",V=""),c.after&&(X+="after="+Math.floor(c.after.getTime()/1e3)+"&"),c.score&&(Q+="score=>"+c.score+"&"),!1===f&&(Y(),K.current.style.display="none",v(!0)),y){var $=o.slice(-1)[0].created_utc;V+="before="+$+"&",W="",X="",Y(),S(!1)}function ee(){k(!0),C&&k(!1)}function te(){z(!0),q&&z(!1)}return Object(h.jsxs)(x.a,{basename:"/reddit-search-tool",children:[Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("div",{id:"logo-parent",children:[Object(h.jsxs)("div",{id:"logo",children:[Object(h.jsxs)(x.b,{to:"/",activeClassName:"none",exact:!0,children:[Object(h.jsxs)("h1",{id:"logo-text",onClick:function(){window.location.reload()},children:[Object(h.jsx)("i",{class:"fa fa-reddit-alien",id:"icon","aria-hidden":"true"})," ","Reddit Search Tool ",Object(h.jsx)("br",{})," "]})," "]}),Object(h.jsx)("h2",{id:"pushift-descript",children:Object(h.jsxs)("a",{href:"https://pushshift.io/",target:"_blank",children:["Utilizing Pushift.io"," "]})})]})," "]})," ",Object(h.jsx)("header",{children:Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(x.b,{to:"/",activeClassName:"active",className:"non-active",exact:!0,children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)(x.b,{to:"/about",activeClassName:"active",className:"non-active",exact:!0,children:"About"})}),Object(h.jsx)("li",{children:Object(h.jsx)(x.b,{to:"/settings",activeClassName:"active",className:"non-active",exact:!0,children:"Settings"})})]})})}),Object(h.jsxs)(p.c,{children:[" ",Object(h.jsxs)(p.a,{path:"/",exact:!0,render:!0,children:[Object(h.jsx)("div",{id:"search-form",children:Object(h.jsxs)("div",{id:"form-wrapper",children:[Object(h.jsx)("div",{className:"panel-header",children:Object(h.jsxs)("h2",{id:"search-min",onClick:ee,children:["Search Query"," ",Object(h.jsx)("i",{onClick:ee,class:"fa fa-".concat(C?"plus":"minus","-square"),"aria-hidden":"true"})]})}),Object(h.jsx)(O,{minimize:C,setSearch:v,search:f,updateData:r,setMinimize:k,showResults:E,showFava:H})]})}),Object(h.jsx)("div",{id:"items-parent",ref:H,children:Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{id:"results-header",children:Object(h.jsxs)("h2",{id:"results-min",onClick:te,children:["Results"," ",Object(h.jsx)("i",{onClick:te,class:"fa fa-".concat(q?"plus":"minus","-square"),"aria-hidden":"true"})]})}),Object(h.jsx)(m,{api:o,query:c.query,minimizeR:q,errorMessage:U,error:K,data:r,setMore:S,showResults:E})]})})]})," "]})]})," "]})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,174)).then((function(t){var c=t.getCLS,i=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),i(e),r(e),s(e),a(e)}))};s.a.render(Object(h.jsx)(v,{}),document.getElementById("root")),w()},79:function(e,t,c){},80:function(e,t,c){}},[[172,1,2]]]);
//# sourceMappingURL=main.e59dbec2.chunk.js.map