(self.webpackChunkportfolio_blog=self.webpackChunkportfolio_blog||[]).push([[8848],{287:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var l=n(7294),a=n(5444),r=n(6802),i={colors:["azure-light","indigo-light","pink-light","green-light"],getRndColor:function(){return this.colors[Math.floor(Math.random()*this.colors.length)]}},o=function(e){var t=e.nodeObj,n=e.postType,o=e.cardGradient,s=t.frontmatter,c=s.title,m=s.description,u=s.path,d=s.tags,p=s.featuredImage,g=s.featuredImageAlt,f=(0,r.d)(p);return l.createElement("li",null,l.createElement(a.Link,{to:u,title:m,className:"list-item "+(o?"card-gradient-"+o:"")},d&&l.createElement("div",{className:"tag-list"},d.map((function(e,t){return l.createElement("span",{className:"tag-list_item "+i.getRndColor(e),key:n+"-tag"+t},e)}))),p&&l.createElement(r.G,{loading:"lazy",className:"list-item_image",image:f,alt:g,quality:"100"}),l.createElement("div",{className:"list-item_info"},l.createElement("h3",{className:"h4 list-item_title"},c),l.createElement("p",{className:"list-item_text"},m))))},s=function(e){var t=e.title,n=e.linkTo,r=e.linkText;return l.createElement("div",{className:"section-caption"},l.createElement("h2",null,t),l.createElement(a.Link,{to:n},r,l.createElement("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 16 16","aria-hidden":"true",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{fillRule:"evenodd",d:"M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z",clipRule:"evenodd"}),l.createElement("path",{fillRule:"evenodd",d:"M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z",clipRule:"evenodd"}))))},c=function(e){var t=e.title,n=e.query,a=e.postType,r=e.tagNameFilter,i=e.linkText;return l.createElement("div",{className:a+"-list-container posts-list-container"},t&&l.createElement(s,{title:t,linkTo:"/"+a,linkText:i}),l.createElement("ul",{className:"list"},n.edges.map((function(e,t){var n=e.node,i=n.frontmatter.tags;return r?i.filter((function(e){return e===r})).map((function(){return l.createElement(o,{nodeObj:n,postType:a,cardGradient:t+1,key:a+"ListItem"+t})})):l.createElement(o,{nodeObj:n,postType:a,cardGradient:t+1,key:a+"ListItem"+t})}))))}},501:function(e,t,n){"use strict";n.r(t);var l=n(7294),a=n(9044),r=n(3790),i=n(287),o=n(1248);function s(e,t){return t[e%100>4&&e%100<20?2:[2,0,1,1,1,2][e%10<5?e%10:5]]}t.default=function(e){var t=e.pageContext,n=e.data,c=t.tag,m={title:"Тег - "+c,description:"Записи с тегом - "+c};return l.createElement(a.Z,null,l.createElement(o.Z,{pageTitle:m.title,pageDescription:m.description}),l.createElement(r.Z,null),l.createElement("div",{className:"tags"},l.createElement("div",{className:"wrapper"},0!==n.projects.totalCount&&l.createElement(i.Z,{title:n.projects.totalCount+" "+s(n.projects.totalCount,["проект","проекта","проектов"])+' с тегом "'+c+'"',postType:"projects",query:n.projects,linkText:"Все проекты"}),0!==n.notes.totalCount&&l.createElement(i.Z,{title:n.notes.totalCount+" "+s(n.notes.totalCount,["заметка","заметки","заметок"])+' с тегом "'+c+'"',postType:"notes",query:n.notes,linkText:"Все заметки"}))))}}}]);
//# sourceMappingURL=component---src-templates-tags-page-js-5380186ed2952979383f.js.map