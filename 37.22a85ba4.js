(window.webpackJsonp=window.webpackJsonp||[]).push([[37,7],{131:function(e,a,n){"use strict";var t=n(0),r=n.n(t),c=n(122),l=n.n(c),s=n(109),o=n(22);a.a=e=>{const a=Object(t.useRef)(!1),c=Object(t.useRef)(null),i=Object(s.useHistory)(),{siteConfig:h={}}=Object(o.default)(),{baseUrl:u}=h,d=()=>{a.current||(Promise.all([fetch(`${u}search-doc.json`).then((e=>e.json())),fetch(`${u}lunr-index.json`).then((e=>e.json())),Promise.all([n.e(34),n.e(38)]).then(n.bind(null,144)),n.e(21).then(n.t.bind(null,143,7))]).then((([e,a,{default:n}])=>{0!==e.length&&((e,a,n)=>{new n({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:(e,a,n)=>{const t=u+n.url;document.createElement("a").href=t,i.push(t)}})})(e,a,n)})),a.current=!0)},m=Object(t.useCallback)((a=>{c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:m,onKeyDown:m,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:m,onBlur:m,ref:c}))}},231:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(130);a.default=function(){return r.a.createElement(c.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);