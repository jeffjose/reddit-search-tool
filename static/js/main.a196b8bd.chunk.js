(this.webpackJsonpreddit=this.webpackJsonpreddit||[]).push([[0],{183:function(e,t,c){},184:function(e,t,c){},205:function(e,t,c){},206:function(e,t,c){},212:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(24),i=c.n(s),r=c(19),a=c.n(r),l=c(35),o=c(31),d=c(16),j=c(83),h=c(9),u=(c(94),c(6)),b=(c(95),c(49)),O=c.n(b),p=(c(96),c(0));var f=function(e){var t=e.updateData,c=e.setSearch,s=e.minimize,i=e.setMinimize,r=(e.search,e.showResults),a=e.showFava,l=e.changeQuerySize,d=e.toggleInput,j=Object(n.useRef)(),b=Object(n.useRef)(),f=function(e){var t,c=new URLSearchParams(e),n={},s=Object(o.a)(c.keys());try{for(s.s();!(t=s.n()).done;){var i=t.value;c.getAll(i).length>1?n[i]=c.getAll(i):n[i]=c.get(i)}}catch(r){s.e(r)}finally{s.f()}return n}(window.location.search),x=Object(n.useState)({author:f.username?f.username:"",subreddit:f.subreddit?f.subreddit:"",type:f.query?f.query:"",size:parseInt(f.numReturned)?parseInt(f.numReturned):25,score:f.score?f.score:"",before:f.before?Math.floor(new Date(f.before).getTime()/1e3*1e3):"",after:f.after?Math.floor(new Date(f.after).getTime()/1e3*1e3):"",q:f.searchTerm?f.searchTerm:"",over_18:f.over_18?f.over_18:"",stickied:f.stickied?f.stickied:"",is_self:f.is_self?f.is_self:"",locked:f.locked?f.locked:"",distinguished:f.distinguished?f.distinguished:""}),m=Object(h.a)(x,2),v=m[0],g=m[1];function y(e,t,c){t=encodeURIComponent(t),c=encodeURIComponent(c);var n,s=e.split("?")[0],i=t+"="+c,r="?"+i;if(n=void 0===e.split("?")[1]?"":"?"+e.split("?")[1]){var a=new RegExp("([?&])"+t+"=[^&]*"),l=new RegExp("([?&])"+t+"=[^&;]+[&;]?");r=void 0===c||null===c||""===c||"null"===c?(r=n.replace(l,"$1")).replace(/[&;]$/,""):null!==n.match(a)?n.replace(a,"$1"+i):""===n?"?"+i:n+"&"+i}return s+(r="?"===r?"":r)}console.log(v.locked),Object(n.useEffect)((function(){var e=!1;window.location.search&&!e&&(e=!0,t(v),c(!1),i(!0),a.current.style.display="flex",r.current.style.display="block")}),[]),console.log(f);var w=Object(n.useRef)();return Object(n.useEffect)((function(){"checked"===localStorage.getItem("setting1")&&(j.current.style.display="flex",b.current.style.display="block")})),Object(p.jsxs)("div",{id:"".concat(s?"search-query-minimized":"search-query-maximized"),children:[" ",Object(p.jsx)("div",{className:"panel-header",children:Object(p.jsxs)("h2",{id:"search-min",onClick:l,className:d?"light-search-tag":"",children:["Search Query"," ",Object(p.jsx)("i",{onClick:l,class:"fa fa-".concat(s?"plus":"minus","-square"),"aria-hidden":"true"})]})}),Object(p.jsx)("div",{id:"form-".concat(s?"hover":"parent"),onClick:s?l:"",className:d?"light-form":"",children:Object(p.jsx)("div",{id:d?"form-light":"form",children:Object(p.jsxs)("form",{onSubmit:function(e){t(v),e.preventDefault(),c(!1),i(!0),a.current.style.display="flex",r.current.style.display="block";var n=[];for(var s in v)for(var l in v){v.hasOwnProperty(l)&&"function"!==typeof v[l]&&n.push(l);var o=v[s];!o&&o||window.history.replaceState("","",y(window.location.href.replace(/[^?=&]+=(&|$)/g,"").replace(/&$/,""),s,o))}},class:"form-".concat(s?"minimize":"maximize"),ref:w,children:[Object(p.jsxs)("div",{id:"row-1",children:[Object(p.jsxs)("div",{className:"row-wrapper",children:[Object(p.jsx)("label",{children:"username"}),Object(p.jsx)("input",{value:v.username,placeholder:"Username",type:"text",onChange:function(e){g(Object(u.a)(Object(u.a)({},v),{},{author:e.target.value}))},id:"username-input"})," "]}),Object(p.jsxs)("div",{className:"row-wrapper",children:[Object(p.jsx)("label",{children:"subreddit"}),Object(p.jsx)("input",{value:v.subreddit,placeholder:"Subreddit",type:"text",onChange:function(e){g(Object(u.a)(Object(u.a)({},v),{},{subreddit:e.target.value}))},id:"subreddit-input"})," "]}),Object(p.jsxs)("div",{className:"row-wrapper",children:[Object(p.jsx)("label",{id:"search-for-input",children:"search for"}),Object(p.jsxs)("select",{onChange:function(e){g(Object(u.a)(Object(u.a)({},v),{},{type:e.target.value}))},children:[" ",Object(p.jsx)("option",{children:"Any"}),Object(p.jsx)("option",{children:"Comments"}),Object(p.jsx)("option",{children:"Submissions"})]})," "]})," "]}),Object(p.jsxs)("div",{id:"row-2",children:[Object(p.jsx)("div",{id:"num-input",children:Object(p.jsxs)("div",{id:"score-input",children:[Object(p.jsxs)("div",{className:"row-wrapper",children:[Object(p.jsx)("label",{children:"score"}),Object(p.jsx)("input",{placeholder:"Score",type:"number",id:"score-input-box",min:"25",step:"25",value:v.score,onChange:function(e){g(Object(u.a)(Object(u.a)({},v),{},{score:e.target.value}))}})," "]})," "]})}),Object(p.jsxs)("div",{className:"row-wrapper",children:[Object(p.jsxs)("div",{id:"before-input",children:[Object(p.jsx)("label",{children:"before"}),Object(p.jsx)(O.a,{popperProps:{positionFixed:!0},value:v.before,selected:v.before,onChange:function(e){g(Object(u.a)(Object(u.a)({},v),{},{before:e}))}})," ",Object(p.jsx)("span",{class:"fa fa-calendar-o"})]})," "]}),Object(p.jsx)("div",{className:"row-wrapper",children:Object(p.jsxs)("div",{id:"after-input",children:[Object(p.jsx)("label",{children:"after"}),Object(p.jsx)(O.a,{popperProps:{positionFixed:!0},type:"text",selected:v.after,onChange:function(e){return g(Object(u.a)(Object(u.a)({},v),{},{after:e}))}})," ",Object(p.jsx)("span",{class:"fa fa-calendar-o"})]})})," "]})," ",Object(p.jsxs)("div",{id:"advanced-row",ref:j,children:[Object(p.jsxs)("div",{className:"row-wrapper",children:[Object(p.jsx)("label",{children:"NSFW"}),Object(p.jsxs)("select",{className:"advanced-input",onChange:function(e){g(Object(u.a)(Object(u.a)({},v),{},{over_18:e.target.value}))},children:[Object(p.jsx)("option",{children:"Any"}),Object(p.jsx)("option",{children:"True"}),Object(p.jsx)("option",{children:"False"})]})," "]})," ",Object(p.jsxs)("div",{className:"row-wrapper",children:[Object(p.jsx)("label",{children:"Stickied"}),Object(p.jsxs)("select",{className:"advanced-input",onChange:function(e){g(Object(u.a)(Object(u.a)({},v),{},{stickied:e.target.value}))},children:[Object(p.jsx)("option",{children:"Any"}),Object(p.jsx)("option",{children:"True"}),Object(p.jsx)("option",{children:"False"})]})," "]})," ",Object(p.jsxs)("div",{className:"row-wrapper",children:[Object(p.jsx)("label",{children:"Is Self"}),Object(p.jsxs)("select",{className:"advanced-input",onChange:function(e){g(Object(u.a)(Object(u.a)({},v),{},{is_self:e.target.value}))},children:[Object(p.jsx)("option",{children:"Any"}),Object(p.jsx)("option",{children:"True"}),Object(p.jsx)("option",{children:"False"})]})," "]}),Object(p.jsxs)("div",{className:"row-wrapper",children:[Object(p.jsx)("label",{children:"Locked"}),Object(p.jsxs)("select",{className:"advanced-input",onChange:function(e){g(Object(u.a)(Object(u.a)({},v),{},{locked:e.target.value}))},children:[Object(p.jsx)("option",{children:"Any"}),Object(p.jsx)("option",{children:"True"}),Object(p.jsx)("option",{children:"False"})]})," "]})," ",Object(p.jsxs)("div",{className:"row-wrapper",children:[Object(p.jsx)("label",{children:"Distinguished"}),Object(p.jsxs)("select",{className:"advanced-input",onChange:function(e){g(Object(u.a)(Object(u.a)({},v),{},{distinguished:e.target.value}))},children:[Object(p.jsx)("option",{children:"Any"}),Object(p.jsx)("option",{children:"Admin"}),Object(p.jsx)("option",{children:"Moderator"})]})," "]})]}),Object(p.jsxs)("div",{id:"row-3",children:[Object(p.jsx)("div",{id:"search-term-input",children:Object(p.jsxs)("div",{className:"row-wrapper",children:[Object(p.jsx)("label",{children:"Search Terms"}),Object(p.jsx)("input",{value:v.searchTerm,placeholder:"Search Terms",type:"text",onChange:function(e){g(Object(u.a)(Object(u.a)({},v),{},{q:e.target.value}))}})," "]})}),Object(p.jsxs)("div",{className:"row-wrapper",children:[Object(p.jsx)("label",{children:"amount returned"}),Object(p.jsx)("input",{placeholder:"Size",onChange:function(e){g(Object(u.a)(Object(u.a)({},v),{},{size:parseInt(e.target.value)}))},value:v.numReturned,type:"number",min:"25",step:"25",id:"amnt-ret"})," "]})," ",Object(p.jsxs)("div",{className:"row-wrapper",id:"api-wrapper",ref:b,children:[Object(p.jsx)("label",{children:"API"}),Object(p.jsxs)("select",{id:"advanced-api-search",children:[Object(p.jsx)("option",{children:"Pushshift"}),Object(p.jsx)("option",{children:"True"}),Object(p.jsx)("option",{children:"False"})]})," "]})]}),Object(p.jsx)("div",{id:"row-4",children:Object(p.jsx)("div",{id:"seach-btn",children:Object(p.jsxs)("div",{className:"row-wrapper",children:[Object(p.jsx)("input",{id:"search-btn",value:"Search",type:"submit"})," "]})})})]})})})]})};c(183),c(184);var x=function(){return Object(p.jsxs)("div",{id:"loader-parent",children:[" ",Object(p.jsx)("i",{className:"fa fa-cog fa-spin",style:{color:"white",fontSize:"2em",position:"relative",display:"flex",alignContent:"center",top:"2px",fontSmooth:"auto"}})]})},m=c(52),v=c.n(m),g=c(86);var y=function(e){var t=e.api,s=(e.query,e.errorMessage),i=e.error,r=(e.data,e.setMore),a=e.minimizeR,l=e.showResults,o=e.size,d=e.loadingMessage,j=e.searchTerm,h=e.changeResultsSize,u=e.resultAmt,b=e.toggleInput,O=Object(n.useRef)(!1),f=Object(n.useRef)(!1),m=Object(n.useRef)(!1),y=Object(n.useRef)(),w=(Object(n.useRef)(),c(204));return console.log(t),Object(p.jsxs)("div",{id:"".concat(a?"results-minimized":""),onClick:a?h:"",children:[Object(p.jsx)("div",{id:"results-header",children:Object(p.jsxs)("h2",{id:"results-min",onClick:h,className:b?"light-results-tag":"",children:["Results - ",u," ",Object(p.jsx)("i",{onClick:h,className:"fa fa-".concat(a?"plus":"minus","-square"),"aria-hidden":"true"})]})}),Object(p.jsxs)("div",{id:"item-".concat(a?"hover":"parent"),ref:l,className:b?"light-results":"",children:[Object(p.jsxs)("div",{ref:i,id:"error",children:[" ",s]}),t.slice(0,o).map((function(e,c){var n=new Date(1e3*e.created_utc).toString();var s,r={Jan:"1",Feb:"2",Mar:"3",Apr:"4",May:"5",Jun:"6",Jul:"7",Aug:"8",Sep:"9",Oct:"10",Nov:"11",Dec:"12"}[n.slice(4,7)];if(!e)return y.current.style.display="none",Object(p.jsxs)("div",{id:"loader-wrapper",children:[Object(p.jsx)(x,{},c)," ",Object(p.jsx)("div",{id:"loading-text",children:"Loading \u2022 Results "})," "]});s=e.permalink?e.permalink:"/comments/".concat(e.link_id.split("_")[1],"/_/").concat(e.id);n.slice(8,10),n.slice(11,15);if(t.length>0&&O){y.current.style.display="block",a&&(y.current.style.display="none"),o>t.length&&(y.current.style.display="none"),0===t.length&&t?i.current.style.display="block":i.current.style.display="none";var l=w.getParser().render(e.body?e.body:e.selftext);return Object(p.jsx)("div",{className:"parent",id:"results-".concat(a?"minimize":"maximize"),children:Object(p.jsxs)("div",{className:"details",children:[" ",Object(p.jsxs)("div",{className:"image-parent",children:[e.domain?Object(p.jsxs)("div",{id:"image-child",children:["self"!==e.thumbnail&&"default"!==e.thumbnail&&"nsfw"!==e.thumbnail&&"image"!==e.thumbnail&&"spoiler"!==e.thumbnail?Object(p.jsx)("div",{id:"image",style:{backgroundImage:"url(".concat("bmp"===e.url.substring(e.url.length-3)||"jpg"===e.url.substring(e.url.length-3)||"png"===e.url.substring(e.url.length-3)||"gif"===e.url.substring(e.url.length-3)?e.url:e.thumbnail,")")}}):"","default"===e.thumbnail&&"self"===e.domain.slice(0,4)||"self"===e.thumbnail?Object(p.jsx)("div",{id:"self-post",children:Object(p.jsx)("i",{className:"fa fa-file-text-o","aria-hidden":"true"})}):"","nsfw"===e.thumbnail||"spoiler"===e.thumbnail?Object(p.jsx)("div",{id:"nsfw",children:Object(p.jsx)("i",{className:"fa fa-user-secret","aria-hidden":"true"})}):"","self"!==e.domain.slice(0,4)&&"default"===e.thumbnail||"nsfw"!==e.thumbnail&&"image"===e.thumbnail?Object(p.jsx)("div",{id:"link-post",children:Object(p.jsx)("i",{class:"fa fa-link","aria-hidden":"true"})}):""]}):"",Object(p.jsx)("div",{id:"align-vertically",children:Object(p.jsxs)("div",{id:"details-child",children:[Object(p.jsx)(v.a,{mark:j,children:e.title?Object(p.jsx)("div",{id:"title",ref:m,children:Object(p.jsx)("a",{id:"title-anchor",children:Object(p.jsxs)("p",{children:[Object(p.jsxs)("a",{id:"title-anchor-child",href:e.full_link||"https://reddit.com".concat(s),children:[" ",e.title]})," ",Object(p.jsxs)("a",{id:"domain",href:e.url,children:["(",e.domain,")"]})]})})}):""}),Object(p.jsxs)("a",{children:[e.domain?"submitted":"commented"," by "]}),Object(p.jsxs)("a",{className:"author",children:["u/",e.author]}),Object(p.jsxs)("a",{title:new Date(n),children:[" ",function(e){var t=Math.floor((new Date-e)/1e3),c=t/31536e3;return c>1?Math.floor(c)+" years":(c=t/2592e3)>1?Math.floor(c)+" months":(c=t/86400)>1?Math.floor(c)+" days":(c=t/3600)>1?Math.floor(c)+" hours":(c=t/60)>1?Math.floor(c)+" minutes":Math.floor(t)+" seconds"}(new Date(n))," ago in"," "]}),Object(p.jsxs)("a",{className:"subreddit",children:["r/",e.subreddit]}),Object(p.jsx)("div",{id:"upvote",children:Object(p.jsxs)("i",{class:"fa fa-arrow-up","aria-hidden":"true",children:[" ",Object(p.jsx)("span",{id:"score",children:e.score})]})})]})})]}),!(!e.body&&!e.selftext)&&Object(p.jsx)("div",{id:"body-parent",children:Object(p.jsx)(v.a,{mark:j,children:Object(p.jsxs)("div",{id:"body",ref:f,children:[Object(g.a)(l),c+1]})})}),Object(p.jsxs)("div",{className:"footer",children:[Object(p.jsx)("div",{id:"view-on-reddit",children:Object(p.jsx)("a",{href:e.full_link||"https://reddit.com".concat(s),target:"_blank",rel:"noreferrer",children:"view on reddit"})}),Object(p.jsx)("div",{id:"view-on-reddit",children:Object(p.jsx)("a",{href:"https://www.removeddit.com".concat(s),target:"_blank",rel:"noreferrer",children:"view on removeddit"})})]})]})},c)}y.current.style.display="none"})),Object(p.jsx)("button",{id:"load-more",onClick:function(e){r(!0)},ref:y,children:d?"Loading...":"Load More"})]})]})};c(205);var w=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{id:"temp",children:"Work In Progress"})})};c(206);var k=function(){var e=Object(n.useState)(),t=Object(h.a)(e,2),c=(t[0],t[1],Object(n.useState)()),s=Object(h.a)(c,2),i=(s[0],s[1],Object(n.useState)()),r=Object(h.a)(i,2),a=(r[0],r[1],Object(n.useRef)(!1)),l=Object(n.useRef)(!1),o=Object(n.useRef)(!1);return Object(n.useEffect)((function(){"checked"===localStorage.getItem("setting1")&&(l.current.checked=!0),"checked"===localStorage.getItem("setting2")&&(o.current.checked=!0),"checked"===localStorage.getItem("setting3")&&(a.current.checked=!0)})),Object(p.jsxs)("div",{id:"settings-parent",children:[Object(p.jsx)("div",{className:"settings-header",children:Object(p.jsx)("h2",{id:"settings-tag",children:"Settings "})}),Object(p.jsxs)("div",{id:"settings-child",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{type:"checkbox",id:"advanced-options",ref:l,onChange:function(e){var t="";e.target.checked&&(t="checked"),localStorage.setItem("setting1",t)}})," ",Object(p.jsx)("label",{for:"advanced-options",children:"Show Advanced Options"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{type:"checkbox",id:"developer-options",ref:o,onChange:function(e){var t="";e.target.checked&&(t="checked"),localStorage.setItem("setting2",t)}})," ",Object(p.jsx)("label",{for:"developer-options",children:" Show Developer Options"})]})," ",Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{type:"checkbox",id:"NSFW",ref:a,onChange:function(e){var t="";e.target.checked&&(t="checked"),localStorage.setItem("setting3",t)}})," ",Object(p.jsx)("label",{for:"NSFW",children:" Hide NSFW Content"})]})]})]})},S=c(21),N=c(8),R=c(87),C=c.n(R);var z=function(){var e=Object(n.useState)({author:!1,subreddit:!1,type:!1,size:100,score:!1,before:!1,after:!1,q:!1,is_self:!1}),t=Object(h.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)([]),r=Object(h.a)(i,2),u=r[0],b=r[1],O=Object(n.useState)(!0),x=Object(h.a)(O,2),m=x[0],v=x[1],g=Object(n.useState)(!1),R=Object(h.a)(g,2),z=R[0],_=R[1],I=Object(n.useState)(!1),A=Object(h.a)(I,2),M=A[0],D=A[1],F=Object(n.useState)(!1),T=Object(h.a)(F,2),P=T[0],q=T[1],L=Object(n.useState)(!1),E=Object(h.a)(L,2),U=(E[0],E[1],Object(n.useState)(!1)),J=Object(h.a)(U,2),W=(J[0],J[1],Object(n.useState)(!1)),$=Object(h.a)(W,2),H=($[0],$[1],Object(n.useState)()),Q=Object(h.a)(H,2),B=Q[0],G=Q[1],K=Object(n.useState)(),V=Object(h.a)(K,2),X=V[0],Y=V[1],Z=Object(n.useState)(),ee=Object(h.a)(Z,2),te=ee[0],ce=ee[1],ne=Object(n.useRef)(!1),se=Object(n.useRef)(!1),ie=Object(n.useRef)(!1),re=C()(),ae=Object(n.useState)([]),le=Object(h.a)(ae,2),oe=le[0],de=le[1];Object(n.useEffect)((function(){return re.listen((function(e){"PUSH"===re.action&&de([e.key]),"POP"===re.action&&(oe[1]===e.key?(de((function(e){var t=Object(j.a)(e);t[0];return t.slice(1)})),window.location.reload()):(de((function(t){return[e.key].concat(Object(d.a)(t))})),window.location.reload()))}))}),[oe]);var je=Object(n.useRef)(null),he="Any",ue="";c.type.length>0&&(he=c.type.toLowerCase().slice(0,-1));var be=function(e){var t,c=new URLSearchParams(e),n={},s=Object(o.a)(c.keys());try{for(s.s();!(t=s.n()).done;){var i=t.value;c.getAll(i).length>1?n[i]=c.getAll(i):n[i]=c.get(i)}}catch(r){s.e(r)}finally{s.f()}return n}(window.location.search);be.before&&(be.before=Math.floor(new Date(be.before).getTime()/1e3));var Oe=encodeURIComponent,pe=Object.keys(be).map((function(e){return Oe(e)+"="+Oe(be[e])})).join("&"),fe="https://api.pushshift.io/reddit/search/".concat(he,"/?").concat(pe,"&html_decode=true");function xe(){return(xe=Object(l.a)(a.a.mark((function e(){var t,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b([!1]),e.next=4,fetch(fe);case 4:return t=e.sent,e.next=7,t.json();case 7:0===(c=e.sent).data.length?(G("No Results"),je.current.style.display="block"):je.current.style.display="none",b(c.data),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0),console.log("sb");case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function me(){return(me=Object(l.a)(a.a.mark((function e(){var t,c,n,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b([!1]),e.next=4,fetch("https://api.pushshift.io/reddit/search/submission/?".concat(pe,"&html_decode=true"));case 4:return t=e.sent,e.next=7,fetch("https://api.pushshift.io/reddit/search/comment/?".concat(pe,"&html_decode=true"));case 7:return c=e.sent,e.next=10,t.json();case 10:return n=e.sent,e.next=13,c.json();case 13:s=e.sent,console.log(n,s,t.url),0===n.data.length?(G("No Results"),je.current.style.display="block"):je.current.style.display="none",Promise.all([].concat(Object(d.a)(s.data),Object(d.a)(n.data))).then((function(e){e.sort((function(e,t){return new Date(t.created_utc)>new Date(e.created_utc)?1:-1})),b(e)})),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})))).apply(this,arguments)}function ve(){return(ve=Object(l.a)(a.a.mark((function e(){var t,c,n,s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=u.slice(-1)[0].created_utc,ue+="before="+t+"&",e.next=5,fetch("https://api.pushshift.io/reddit/search/submission/?".concat(pe,"&").concat(ue,"&html_decode=true"));case 5:return c=e.sent,e.next=8,fetch("https://api.pushshift.io/reddit/search/comment/?".concat(pe,"&").concat(ue,"&html_decode=true"));case 8:return n=e.sent,e.next=11,c.json();case 11:return s=e.sent,e.next=14,n.json();case 14:i=e.sent,console.log(s,i,c.url,n,"LOAD MORR"),0===s.data.length?(G("No Results"),je.current.style.display="block"):je.current.style.display="none",Promise.all([].concat(Object(d.a)(i.data),Object(d.a)(s.data))).then((function(e){e.sort((function(e,t){return new Date(t.created_utc)>new Date(e.created_utc)?1:-1})),b((function(t){return[].concat(Object(d.a)(t),Object(d.a)(e))})),Y(!1)})),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})))).apply(this,arguments)}m||"Any"===he||"an"===he?(!m&&"Any"===he||!m&&"an"===he)&&(je.current.style.display="none",function(){me.apply(this,arguments)}(),v(!0)):(!function(){xe.apply(this,arguments)}(),je.current.style.display="none",v(!0)),Object(n.useEffect)((function(){z&&(c.size<u.length?(c.size+=25,_(!1),Y(!1)):c.size===u.length&&(!function(){ve.apply(this,arguments)}(),Y(!0)))})),console.log(z,c.size,u.length);var ge=0;return ge=1!==u.length||u[0]?u.length<c.size?u.length:c.size:0,console.log(u,c.size),Object(n.useEffect)((function(){"light"===localStorage.getItem("theme")?(se.current.checked=!0,ce(!0)):(se.current.checked=!1,ce(!1))})),Object(n.useEffect)((function(){te?document.body.classList.add("light-mode"):document.body.classList.remove("light-mode")}),[te]),Object(p.jsxs)(S.a,{basename:"",forceRefresh:!0,children:[Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("div",{id:"logo-parent",children:[Object(p.jsxs)("div",{id:"logo",children:[Object(p.jsxs)(S.b,{to:"/",activeClassName:"none",exact:!0,children:[Object(p.jsxs)("h1",{id:"logo-text",children:[Object(p.jsx)("i",{className:"fa fa-reddit-alien",id:"icon","aria-hidden":"true"})," ","Reddit Search Tool ",Object(p.jsx)("br",{})," "]})," "]}),Object(p.jsxs)("h2",{id:"pushift-descript",children:[Object(p.jsx)("a",{className:te?"light-pushift":"",href:"https://pushshift.io/",target:"_blank",children:"Utilizing Pushift.io"})," "]})," "]})," "]})," ",Object(p.jsxs)("header",{children:[" ",Object(p.jsxs)("nav",{children:[" ",Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("ul",{children:[" ",Object(p.jsx)("li",{children:Object(p.jsx)(S.b,{to:"/",activeClassName:"active",className:"non-active",exact:!0,children:"Home"})}),Object(p.jsx)("li",{children:Object(p.jsx)(S.b,{to:"/about",activeClassName:"active",className:"non-active",children:"About"})}),Object(p.jsx)("li",{children:Object(p.jsx)(S.b,{to:"/settings",activeClassName:"active",className:"non-active",children:"Settings"})})]})," ",Object(p.jsx)("div",{id:"container-parent",children:Object(p.jsxs)("label",{id:"switch",className:"switch",children:[Object(p.jsx)("input",{type:"checkbox",id:"slider",onChange:function(e){var t="";e.target.checked?(t="light",ce(!0)):(t="dark",ce(!1)),localStorage.setItem("theme",t)},ref:se}),Object(p.jsx)("span",{className:"slider round"})]})})]})]})]}),Object(p.jsxs)(N.c,{children:[" ",Object(p.jsxs)(N.a,{path:"/",exact:!0,render:!0,children:[Object(p.jsx)("div",{id:"search-form",children:Object(p.jsx)("div",{id:"form-wrapper",children:Object(p.jsx)(f,{minimize:M,setSearch:v,search:m,updateData:s,setMinimize:D,showResults:ne,showFava:ie,changeQuerySize:function(){D(!0),M&&D(!1)},toggleInput:te})})}),Object(p.jsx)("div",{id:"items-parent",ref:ie,children:Object(p.jsx)("div",{children:Object(p.jsx)(y,{api:u,query:c.query,minimizeR:P,errorMessage:B,error:je,data:s,setMore:_,showResults:ne,size:c.size,loadingMessage:X,searchTerm:c.q,changeResultsSize:function(){q(!0),P&&q(!1)},resultAmt:ge,toggleInput:te})})})]})," ",Object(p.jsx)(N.a,{path:"/about",children:Object(p.jsx)("div",{children:Object(p.jsx)(w,{})})}),Object(p.jsxs)(N.a,{path:"/settings",children:[" ",Object(p.jsx)("div",{children:Object(p.jsx)(k,{})})]})]})]})," "]})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,214)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),i(e),r(e)}))};i.a.render(Object(p.jsx)(z,{}),document.getElementById("root")),_()},94:function(e,t,c){},95:function(e,t,c){}},[[212,1,2]]]);
//# sourceMappingURL=main.a196b8bd.chunk.js.map