(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{28:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var l,i=a(1),o=a.n(i),n=a(16),r=a.n(n),s=(a(28),a(3)),c=a(5),d=a(18),u=(a(32),a(0)),b=function(){var e,t,a,l,o=Object(s.c)((function(e){return e.home})),n=Object(i.useState)(0),r=Object(c.a)(n,2),d=r[0],b=r[1],p=function(){return b(window.pageYOffset)};return Object(i.useEffect)((function(){return window.addEventListener("scroll",p),function(){return window.removeEventListener("scroll",p)}}),[]),o&&Object(u.jsx)("div",{"data-scroll-section":!0,children:Object(u.jsx)("section",{id:"start",className:"content-full",children:Object(u.jsx)("div",{className:"hero p-v-6",children:Object(u.jsxs)("div",{className:"text-block smooth-scroll",style:{transform:"translateY(-".concat(.3*d,"px)")},children:[Object(u.jsx)("h1",{className:"author",children:null===(e=o.heroHeader)||void 0===e?void 0:e.heroTitle.value}),Object(u.jsxs)("div",{className:"presentation",style:{transform:"translateY(-".concat(.02*d,"px)")},children:[Object(u.jsx)("h1",{className:"programmer",children:null===(t=o.heroHeader)||void 0===t?void 0:t.heroProgrammer.value}),Object(u.jsx)("h1",{className:"and",children:null===(a=o.heroHeader)||void 0===a?void 0:a.heroAnd.value}),Object(u.jsx)("h1",{className:"design",children:null===(l=o.heroHeader)||void 0===l?void 0:l.heroDesigner.value})]})]})})})})},p=(a.p,a(34),function(e){var t,a=e.closeModal,l=Object(s.c)((function(e){return e.home})),i=l.projectsSection.projects;for(var o in i)l.selectedProjectID===i[o].id&&(t=i[o]);return console.log("Selected project",t),l&&Object(u.jsx)("div",{className:"modal-background",children:Object(u.jsxs)("div",{className:"modal-container",children:[Object(u.jsx)("div",{className:"bg"}),Object(u.jsx)("button",{className:"close-x",onClick:function(){return a(!1)}}),Object(u.jsxs)("div",{className:"modal-left",children:[Object(u.jsx)("img",{className:"modal-img",src:t.projectImg.value,alt:"project"}),Object(u.jsxs)("div",{className:"modal-title",children:[Object(u.jsx)("h1",{className:"project-title",children:t.projectTitle.value}),Object(u.jsx)("h1",{className:"project-subtitle",children:t.projectSubtitle.value})]}),Object(u.jsx)("p",{className:"modal-description p-h-5",children:t.projectSingleDescription.value}),Object(u.jsx)("a",{href:t.linkToCode.value,className:"link-code",target:"_blank",rel:"noreferrer"})]})]})})}),j=(a(35),function(){var e,t,a,l,o=Object(s.c)((function(e){return e.home})),n=Object(i.useState)(!1),r=Object(c.a)(n,2),d=r[0],b=r[1],j=Object(i.useState)(0),v=Object(c.a)(j,2),m=v[0],h=v[1],f=function(){return h(window.pageYOffset)};return Object(i.useEffect)((function(){return window.addEventListener("scroll",f),function(){return window.removeEventListener("scroll",f)}}),[]),o&&Object(u.jsx)("section",{id:"project",className:"content-full",children:Object(u.jsxs)("div",{className:"featured p-h-6 p-v-5",children:[Object(u.jsx)("h1",{className:"project-section-title smooth-scroll-title",style:{transform:"translateY(-".concat(.04*m,"px)")},children:null===(e=o.projectsSection)||void 0===e?void 0:e.projectPresentation.value}),Object(u.jsxs)("div",{className:"projects",children:[Object(u.jsx)("div",{className:"project-section-grid ",children:null===(t=o.projectsSection)||void 0===t?void 0:t.projects.map((function(e){return Object(u.jsxs)("div",{className:"project-items",children:[Object(u.jsx)("img",{style:{transform:"translateY(-".concat(.08*m,"px)")},onClick:function(){o.selectedProjectID=e.id,b(!0)},className:"project-img scroll-projects",src:e.projectImg.value,alt:"projects images"}),Object(u.jsxs)("div",{className:"grid-title scroll-projects",style:{transform:"translateY(-".concat(.06*m,"px)")},children:[Object(u.jsx)("h3",{className:"project-title",children:e.projectTitle.value}),Object(u.jsx)("h3",{className:"project-subtitle",children:e.projectSubtitle.value})]})]},e.id)}))}),Object(u.jsxs)("div",{className:"project-description scroll-description",style:{transform:"translateY(-".concat(.06*m,"px)")},children:[Object(u.jsx)("h2",{className:"subtitle",children:null===(a=o.projectsSection)||void 0===a?void 0:a.subtitle.value}),Object(u.jsx)("p",{children:null===(l=o.projectsSection)||void 0===l?void 0:l.projectDescription.value})]}),d&&Object(u.jsx)(p,{closeModal:b})]})]})})}),v=(a(36),function(){var e,t,a,l,o,n,r,d=Object(s.c)((function(e){return e.home})),b=Object(i.useState)(0),p=Object(c.a)(b,2),j=p[0],v=p[1],m=function(){return v(window.pageYOffset)};return Object(i.useEffect)((function(){return window.addEventListener("scroll",m),function(){return window.removeEventListener("scroll",m)}}),[]),d&&Object(u.jsx)("section",{id:"about",className:"content-full",children:Object(u.jsxs)("div",{className:"about p-t-5 p-b-6 p-h-6",children:[Object(u.jsx)("h1",{className:"about-title smooth-scroll-title",style:{transform:"translateY(-".concat(.02*j,"px)")},children:null===(e=d.aboutSection)||void 0===e?void 0:e.aboutTitle.value}),Object(u.jsxs)("div",{className:"about-grid",children:[Object(u.jsxs)("div",{className:"scroll-about",style:{transform:"translateY(-".concat(.05*j,"px)")},children:[Object(u.jsx)("h2",{className:"subtitle-about m-b-z",children:null===(t=d.aboutSection)||void 0===t?void 0:t.aboutSubtitle.value}),Object(u.jsx)("p",{className:"description",children:null===(a=d.aboutSection)||void 0===a?void 0:a.aboutDescription.value})]}),Object(u.jsx)("div",{className:"about-img scroll-about-img",style:{transform:"translateY(-".concat(.03*j,"px)")},children:Object(u.jsx)("img",{className:"image",src:null===(l=d.aboutSection)||void 0===l?void 0:l.aboutImg.value,alt:"portrait"})}),Object(u.jsxs)("div",{className:"about-contact scroll-about",style:{transform:"translateY(-".concat(.04*j,"px)")},children:[Object(u.jsx)("h3",{className:"ingress m-b-z",children:null===(o=d.aboutSection)||void 0===o?void 0:o.aboutContactTitle.value}),Object(u.jsx)("h4",{className:"about-mail",children:null===(n=d.aboutSection)||void 0===n?void 0:n.aboutEmail.value}),Object(u.jsx)("div",{className:"about-link",children:null===(r=d.aboutSection)||void 0===r?void 0:r.socialLinks.map((function(e){return Object(u.jsx)("a",{className:"link-item",href:e.socialLink.value,rel:"noreferrer",target:"_blank",children:Object(u.jsx)("img",{className:"icons",src:e.aboutIcon.value,alt:"social icons"})},e.id)}))})]})]})]})})}),m=(a(37),function(){var e,t,a=Object(s.c)((function(e){return e.home})),l=Object(i.useState)(0),o=Object(c.a)(l,2),n=o[0],r=o[1],d=function(){return r(window.pageYOffset)};return Object(i.useEffect)((function(){return window.addEventListener("scroll",d),function(){return window.removeEventListener("scroll",d)}}),[]),a&&Object(u.jsx)("section",{className:"content-full",children:Object(u.jsxs)("div",{className:"skills p-v-5 p-h-6",children:[Object(u.jsx)("h1",{className:"skill-title smooth-scroll",style:{transform:"translateY(".concat(.02*n,"px)")},children:null===(e=a.skillsSection)||void 0===e?void 0:e.skillsTitle.value}),Object(u.jsx)("div",{className:"skill-box-icon p-v-5 p-h-6 smooth-scroll",style:{transform:"translateY(".concat(.01*n,"px)")},children:null===(t=a.skillsSection)||void 0===t?void 0:t.skillSectionIcon.map((function(e){return Object(u.jsxs)("div",{className:"skills-icons",children:[Object(u.jsx)("img",{className:"icon",src:e.skillsIcons.value,alt:"icons"}),Object(u.jsx)("p",{children:e.iconsTitles.value})]},e.id)}))})]})})}),h=(a(38),a(12)),f=["title","titleId"];function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var a,l,i=function(e,t){if(null==e)return{};var a,l,i={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}function O(e,t){var a=e.title,o=e.titleId,n=g(e,f);return i.createElement("svg",x({id:"circle",width:110,height:99,viewBox:"0 0 125 99",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},n),a?i.createElement("title",{id:o},a):null,l||(l=i.createElement("path",{d:"M2.00048 51.5C5.5 72.5 9 77 33 92.5C52.5 102.5 109 104.498 109 43.4999C109 24.0042 94.9997 16.5 70.9994 5.49999C51.9997 -4.49996 -3.49913 3 2.00048 51.5Z",stroke:"#252525",strokeWidth:2,strokeLinecap:"round"})))}var w,k=i.forwardRef(O),y=(a.p,function(){var e=Object(s.c)((function(e){return e.menu})),t=Object(i.useState)(!1),a=Object(c.a)(t,2),l=a[0],o=a[1],n=Object(i.useState)(!0),r=Object(c.a)(n,2),b=r[0],p=r[1],j=d.a.Anime,v="M1.49923 33.4999C-0.500114 72.4999 32.4994 57 40.3799 78.4997C48.2605 99.9995 126.999 89.9998 119.999 37.4999C112.999 -15 3.49856 -5.5002 1.49923 33.4999Z",m="M2.49957 40C13.4993 84.4999 10.4999 109 63.9999 96.5C117.5 84 137 77 100.5 31.5C64 -14 -8.50017 -4.49997 2.49957 40Z";return e&&Object(u.jsxs)("nav",{children:[b&&Object(u.jsxs)("button",{className:"menu-button",onClick:function(){o(!0),p(!1)},children:[Object(u.jsx)("span",{className:"circle-animation",children:Object(u.jsx)(j,{initial:[{targets:"#circle > path",easing:"cubicBezier(.37,.31,.2,.91)",duration:8e3,loop:!0,autoplay:!0,d:[{value:[v,m]},{value:v},{value:m}]}],children:Object(u.jsx)(k,{})})}),"menu"]}),l&&Object(u.jsxs)("ul",{className:"main-menu",children:[e.map((function(t){return Object(u.jsx)("li",{className:"main-item",onClick:function(){e.selectedMenuLabel=t.label,function(){var t=document.getElementById("project"),a=document.getElementById("about"),l=document.getElementById("contact");try{"Projects"===e.selectedMenuLabel&&t.scrollIntoView({behavior:"smooth",block:"start"}),"About"===e.selectedMenuLabel&&a.scrollIntoView({behavior:"smooth",block:"start"}),"Contact"===e.selectedMenuLabel&&l.scrollIntoView({behavior:"smooth",block:"start"})}catch(i){console.log(i)}}()},children:Object(u.jsx)(h.b,{to:t.url,children:t.label})},t.id)})),Object(u.jsx)("button",{className:"close-menu",onClick:function(){o(!1),p(!0)}})]})]})}),T=(a(41),function(){var e,t=Object(s.c)((function(e){return e.settings})),a=Object(s.c)((function(e){return e.home})),l=Object(i.useState)(!1),o=Object(c.a)(l,2),n=o[0],r=o[1],d=function(){window.scrollY>=80?r(!0):r(!1)};Object(i.useEffect)((function(){return window.addEventListener("scroll",d),function(){window.removeEventListener("scroll",d)}}));return Object(u.jsx)("header",{className:n?"header active":"header",children:Object(u.jsx)("div",{className:"content-full",children:Object(u.jsxs)("div",{className:"row justify-between",children:[Object(u.jsx)("div",{className:"col-2",children:Object(u.jsx)(h.b,{to:"/",children:Object(u.jsx)("img",{className:"logo m-l-5",src:null===(e=t.logo)||void 0===e?void 0:e.value,alt:"logotype",onClick:function(){a.startLabel=a.label,function(){var e=document.getElementById("start");"Start"===a.startLabel&&e.scrollIntoView({behavior:"smooth",block:"start"})}()}})})}),Object(u.jsx)("div",{className:"col-22",children:Object(u.jsx)(y,{})})]})})})}),S=(a(42),function(e){e.data;var t,a=Object(s.c)((function(e){return e.page}));return a&&Object(u.jsxs)("form",{children:[null===(t=a.contactSection)||void 0===t?void 0:t.contactTitle.value,Object(u.jsxs)("div",{className:"contact-form",children:[Object(u.jsx)("div",{children:Object(u.jsx)("input",{type:"text",placeholder:"YOUR NAME"})}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{className:"email",type:"text",placeholder:"E-MAIL"})}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{type:"text",placeholder:"SUBJECT"})}),Object(u.jsx)("div",{children:Object(u.jsx)("textarea",{placeholder:"YOUR MESSAGE"})}),Object(u.jsx)("button",{className:"send-button",children:"Send"})]})]})}),I=(a(43),function(){var e,t,a,l=Object(s.c)((function(e){return e.home})),o=Object(i.useState)(0),n=Object(c.a)(o,2),r=n[0],d=n[1],b=function(){return d(window.pageYOffset)};return Object(i.useEffect)((function(){return window.addEventListener("scroll",b),function(){return window.removeEventListener("scroll",b)}}),[]),l&&Object(u.jsx)("section",{id:"contact",className:"content-full",children:Object(u.jsxs)("div",{className:"contact p-h-6 p-v-5",children:[Object(u.jsx)("h1",{className:"contact-title smooth-scroll",style:{transform:"translateY(-".concat(.01*r,"px)")},children:null===(e=l.contactSection)||void 0===e?void 0:e.contactTitle.value}),Object(u.jsxs)("div",{className:"contact-grid smooth-scroll",style:{transform:"translateY(-".concat(.02*r,"px)")},children:[Object(u.jsxs)("div",{className:"p-r-6",children:[Object(u.jsx)("h2",{className:"contact-subtitle m-b-z",children:null===(t=l.contactSection)||void 0===t?void 0:t.contactSubtitle.value}),Object(u.jsx)("p",{children:null===(a=l.contactSection)||void 0===a?void 0:a.contactDescription.value})]}),Object(u.jsx)("div",{className:"p-t-6",children:Object(u.jsx)(S,{})})]})]})})}),N=(a(44),function(){var e,t,a,l,o,n=Object(s.c)((function(e){return e.settings}));n.office&&(o=n.office);var r=Object(i.useState)(0),d=Object(c.a)(r,2),b=d[0],p=d[1],j=function(){return p(window.pageYOffset)};return Object(i.useEffect)((function(){return window.addEventListener("scroll",j),function(){return window.removeEventListener("scroll",j)}}),[]),Object(u.jsx)("footer",{children:n.office&&Object(u.jsx)("div",{className:"content-standard smooth-scroll ",style:{transform:"translateY(-".concat(.03*b,"px)")},children:Object(u.jsxs)("div",{className:"footer-grid p-h-6 p-v-5",children:[Object(u.jsx)("div",{children:Object(u.jsx)("h2",{className:"footer-ingress",children:"Stay in touch!"})}),Object(u.jsxs)("div",{className:"contact-section",children:[Object(u.jsx)("h2",{className:"footer-mail",children:null===(e=o.mail)||void 0===e?void 0:e.value}),Object(u.jsx)("h2",{className:"footer-phone",children:null===(t=o.phone)||void 0===t?void 0:t.value}),Object(u.jsx)("h2",{children:null===(a=o.city)||void 0===a?void 0:a.value})]}),Object(u.jsx)("div",{className:"social-section p-h-5",children:null===(l=n.socialMediaSection)||void 0===l?void 0:l.socialMedia.map((function(e){return Object(u.jsx)("a",{className:"icon-item",href:e.socialLink.value,rel:"noreferrer",target:"_blank",children:Object(u.jsx)("img",{src:e.socialIcon.value,alt:"social icons"})},e.id)}))})]})})})}),E=["title","titleId"];function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}function L(e,t){if(null==e)return{};var a,l,i=function(e,t){if(null==e)return{};var a,l,i={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}function P(e,t){var a=e.title,l=e.titleId,o=L(e,E);return i.createElement("svg",C({id:"cora",viewBox:"0 0 793.7 1122.5",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":l},o),a?i.createElement("title",{id:l},a):null,w||(w=i.createElement("path",{d:"m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.76 135.93 170.09 228.56 303.31 87.574-132.4 228.56-172.86 228.56-303.31 0-66.24-53.76-120-120-120-48.048 0-89.402 28.37-108.56 69.188-19.161-40.817-60.514-69.188-108.56-69.188z",fill:"#252525",strokeWidth:0})))}var B=i.forwardRef(P),M=(a.p,a(45),function(){var e=Object(i.useState)(!1),t=Object(c.a)(e,2),a=t[0],l=t[1],o=d.a.Anime,n="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.76 135.93 170.09 228.56 303.31 87.574-132.4 228.56-172.86 228.56-303.31 0-66.24-53.76-120-120-120-48.048 0-89.402 28.37-108.56 69.188-19.161-40.817-60.514-69.188-108.56-69.188z",r="M63.0674 181.885C96.7099 207.803 105.569 236.428 107.823 255.181C124.201 235.294 146.427 219.045 192.05 194.35C255.805 159.841 278.603 90.3547 228.314 62.7458C199.654 47.0109 169.442 50.7811 137.069 86.727C112.121 50.7809 72.1438 28.236 33.5393 58.0661C-1.39142 85.0574 9.86003 140.895 63.0674 181.885Z";return Object(i.useEffect)((function(){l(!1),setTimeout((function(){l(!1)}),2e3)}),[]),Object(u.jsx)(u.Fragment,{children:a?Object(u.jsxs)("div",{className:"loader-wrapper",children:[Object(u.jsx)("span",{children:Object(u.jsx)(o,{initial:[{targets:"#cora",keyframes:[{translateX:300},{translateX:-300}],easing:"cubicBezier(.84,0,.25,.99)",duration:3e3,loop:!0,autoplay:!0,d:[{value:[n,r]},{value:n},{value:r}]}],children:Object(u.jsx)(B,{style:{width:"100px"}})})}),Object(u.jsx)("h1",{children:"Hej! Hola! Hello!"}),Object(u.jsx)("h4",{children:"Loading..."})]}):Object(u.jsx)("section",{className:"home",children:Object(u.jsxs)("div",{className:"content-full",id:"main-container",children:[Object(u.jsx)(T,{}),Object(u.jsx)(b,{}),Object(u.jsx)(j,{}),Object(u.jsx)(v,{}),Object(u.jsx)(m,{}),Object(u.jsx)(I,{}),Object(u.jsx)(N,{})]})})})}),D=a(10),H=a.n(D),Y=a(13),R=a.p+"static/media/inge.f75944d7.png",A=a.p+"static/media/meetup.d1bf697e.png",G=a.p+"static/media/gossip.323ac3dc.png",V=a.p+"static/media/tdd-f.7f8c59cc.png",F=a.p+"static/media/tdd-b.2b17ebef.png",J=a.p+"static/media/star.2e49a0ee.png",W=a(4);var z=function(){var e=Object(s.b)();return Object(i.useEffect)((function(){e(function(){var e=Object(Y.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t({type:"FETCH_MENU",payload:[{refLinkable:{label:"Projects",parentId:51951,webModuleId:40,urlname:"projects",url:"/projects",color:0,orderBy:1,showDate:"2021-09-22T15:53:00+02:00",edited:"2021-09-22T15:54:52.8556859+02:00",created:"2021-09-22T15:53:59.5917438+02:00",online:!0,id:53189},refObjectId:53189,refWebModuleId:40,value:"/projects",children:[],label:"Projects",parentId:0,level:1,locked:!1,orderBy:1,current:!1,id:80624},{refLinkable:{label:"About",parentId:51951,webModuleId:40,urlname:"about",url:"/about",color:0,orderBy:3,showDate:"2021-09-29T12:15:00+02:00",edited:"2021-09-29T12:15:54.3835255+02:00",created:"2021-09-29T12:15:54.3835285+02:00",online:!0,id:53785},refObjectId:53785,refWebModuleId:40,value:"/about",children:[],label:"About",parentId:0,level:1,locked:!1,orderBy:0,current:!1,target:"",id:80625},{refLinkable:{label:"Contact",parentId:51951,webModuleId:40,urlname:"contact",url:"/contact",color:0,orderBy:2,showDate:"2021-09-29T12:13:00+02:00",edited:"2021-09-29T12:13:37.5756902+02:00",created:"2021-09-29T12:13:30.711+02:00",online:!0,id:53784},refObjectId:53784,refWebModuleId:40,value:"/contact",children:[],label:"Contact",parentId:0,level:1,locked:!1,orderBy:2,current:!1,id:81295}]})}catch(a){console.log(a.message)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(Y.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t({type:"FETCH_SETTINGS",payload:{id:196397,label:"Settings",office:{label:"Kontor",name:{label:"F\xf6retagsnamn",id:502209,value:"Romina Rebolledo"},phone:{label:"Telefon",id:502210,value:"73 788 95 44"},mail:{label:"E-post",id:502211,value:"rominarebolledo[at]gmail.com"},postal:{label:"Postnummer",id:502213,value:"11 242"},city:{label:"Stad",id:502214,value:"Stockholm"},id:502208},socialMediaSection:{label:"Social Media",socialMedia:[{label:"Sektion",socialIcon:{label:"github-logo",id:530880,value:"https://romina-portfolio.easyweb.site/upl/images/759472.svg"},socialLink:{label:"Extern links",id:511580,value:"https://github.com/rominonix"},id:511578},{label:"Sektion",socialIcon:{label:"instagram-logo",id:530858,value:"https://romina-portfolio.easyweb.site/upl/images/759468.svg"},socialLink:{label:"Extern links",id:511583,value:"https://www.instagram.com/corrientealterna/"},id:511581},{label:"Sektion",socialIcon:{label:"linke-logo",id:530877,value:"https://romina-portfolio.easyweb.site/upl/images/759471.svg"},socialLink:{label:"Extern links",id:511586,value:"https://www.linkedin.com/in/rominarebolledo/"},id:511584}],id:511575},logo:{label:"Ro",id:532406,value:"https://romina-portfolio.easyweb.site/upl/images/759812.svg"}}})}catch(a){console.log(a.message)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(Y.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t({type:"FETCH_HOME",payload:{label:"Start",urlname:"",viewKey:"Home",id:51950,heroHeader:{label:"Hero",heroProgrammer:{label:"Huvudrubrik",id:510220,value:"Programmer"},heroAnd:{label:"Huvudrubrik",id:510180,value:"&"},heroDesigner:{label:"Huvudrubrik",id:510221,value:"designer"},heroTitle:{label:"Rubrik",id:510181,value:"Romina Rebolledo"},id:501727},projectsSection:{label:"My project",projectPresentation:{label:"Huvudrubrik",id:510743,value:"Projects"},subtitle:{label:"Subtitle",id:528780,value:"Nice!"},projectDescription:{label:"Beskrivning (textarea)",id:510744,value:"Great that we continue together on this little trip through my website. Here you can see some of my Javascript and Typescript projects. They are all different and range from back-end projects such as REST API:s, front-end, to full-stack in which I also include interface design. You can find projects in vanilla Javascript as well as with frameworks such as Vue.js, React.js, React Native and other applications made with Express and Firebase."},projectLink:{label:"Projects",id:510748,value:"https://romina-portfolio.easyweb.site/projects"},projects:[{label:"Sektion",projectTitle:{label:"Textrad (textbox)",id:501199,value:"E-"},projectSubtitle:{label:"Textrad (textbox)",id:511152,value:"Wallet"},projectImg:{label:"e-wallet",id:512644,value:"https://romina-portfolio.easyweb.site/upl/images/752951.png"},projectSingleDescription:{label:"Beskrivning (textarea)",id:512672,value:"This is a project written in Javascript and Vue.js. It is a simulation in which you can create and delete different credit cards in a virtual wallet."},projectVideo:{label:"Grabacio\xb4n de pantalla 2021-09-16 a la(s) 11.24.30",id:512873,value:"https://romina-portfolio.easyweb.site/upl/files/178090.mp4"},linkToCode:{label:"Extern links",id:512874,value:"https://github.com/rominonix/e-wallet-VUE"},id:501198},{label:"Sektion",projectTitle:{label:"Textrad (textbox)",id:501202,value:"Troll"},projectSubtitle:{label:"Textrad (textbox)",id:511153,value:"Skogen"},projectImg:{label:"trollskogen",id:512645,value:"https://romina-portfolio.easyweb.site/upl/images/752952.png"},projectSingleDescription:{label:"Beskrivning (textarea)",id:512674,value:"Since I love the Swedish forest there is nothing better than doing a little project in which to make a play on words and make random new profiles. This is a back-end project with Javascript, Express, and SQLite. Here you can create 10 fake profiles per day for various uses."},projectVideo:{label:"Grabacio\xb4n de pantalla 2021-09-16 a la(s) 11.24.30",id:512922,value:"https://romina-portfolio.easyweb.site/upl/files/178090.mp4"},linkToCode:{label:"Extern links",id:512923,value:"https://github.com/rominonix/backend-trollskogen"},id:501201},{label:"Sektion",projectTitle:{label:"Textrad (textbox)",id:502135,value:"Beer"},projectSubtitle:{label:"Textrad (textbox)",id:511154,value:"Project"},projectImg:{label:"beer-p",id:512646,value:"https://romina-portfolio.easyweb.site/upl/images/752953.png"},projectSingleDescription:{label:"Beskrivning (textarea)",id:512675,value:"Many of us love beers and why not interact with Punki API to choose a different beer every day. I wrote this project in vanilla Javascript interacting directly with the DOM. Every time you click on the random button, you get a different beer and by clicking on it you can see all its details. Sk\xe5l \ud83c\udf7b!"},projectVideo:{label:"Grabacio\xb4n de pantalla 2021-09-16 a la(s) 11.24.30",id:517822,value:"https://romina-portfolio.easyweb.site/upl/files/178090.mp4"},linkToCode:{label:"Extern links",id:517923,value:"https://github.com/rominonix/wiki-beer"},id:502134},{label:"Project",projectTitle:{label:"Textrad (textbox)",id:502409,value:"Sinus"},projectSubtitle:{label:"Textrad (textbox)",id:511156,value:"Webshop"},projectImg:{label:"sinus2",id:512657,value:"https://romina-portfolio.easyweb.site/upl/images/752954.png"},projectSingleDescription:{label:"Beskrivning (textarea)",id:512677,value:"Sinus is a skateboard webshop built in Javascript and Vue.js (with Vuex). I made the designs using figma and I took inspiration from the artist and skater The Gonz (Mark Gonz\xe1les)."},projectVideo:{label:"Grabacio\xb4n de pantalla 2021-09-16 a la(s) 11.24.30",id:512824,value:"https://romina-portfolio.easyweb.site/upl/files/178090.mp4"},linkToCode:{label:"Extern links",id:512825,value:"https://github.com/rominonix/sinus"},id:502497},{label:"Project",projectTitle:{label:"Textrad (textbox)",id:502410,value:"In"},projectSubtitle:{label:"Textrad (textbox)",id:511111,value:"Touch"},projectImg:{label:"meetup",id:512647,value:A},projectSingleDescription:{label:"Beskrivning (textarea)",id:512676,value:"Do you want to make plans again and meet new people who have the same interests as you? Well, here is InTouch. A full-stack project written in Typescript. In the front-end I used React, the back-end with Express and Sqlite was used as a database. For the tests I used Testing Library, Jest and Enzyme."},projectVideo:{label:"Grabacio\xb4n de pantalla 2021-09-16 a la(s) 11.24.30",id:512822,value:"https://romina-portfolio.easyweb.site/upl/files/178090.mp4"},linkToCode:{label:"Extern links",id:512823,value:"https://github.com/rominonix/meetup-tdd"},id:502487},{label:"Project",projectTitle:{label:"Textrad (textbox)",id:502428,value:"Inge"},projectSubtitle:{label:"Textrad (textbox)",id:511115,value:"BraBygg"},projectImg:{label:"inge",id:512617,value:R},projectSingleDescription:{label:"Beskrivning (textarea)",id:512616,value:"Norra Tornen is the architectural project on which I based the design for Inge Bra Bygg. The application is written in Javascript with Express, SQLite and React Native."},projectVideo:{label:"Grabacio\xb4n de pantalla 2021-09-16 a la(s) 11.24.30",id:512812,value:"https://romina-portfolio.easyweb.site/upl/files/178090.mp4"},linkToCode:{label:"Extern links",id:512813,value:"https://github.com/rominonix/crossplatform-react-native"},id:502477},{label:"Project",projectTitle:{label:"Textrad (textbox)",id:502528,value:"24"},projectSubtitle:{label:"Textrad (textbox)",id:511116,value:"Gossip"},projectImg:{label:"gossip",id:512717,value:G},projectSingleDescription:{label:"Beskrivning (textarea)",id:512618,value:"If you like to know the latest news from your favorite celebrities, 24 gossip is the perfect application for you. This is a full-stack app written in Typescript, the back-end is an Express app, using Firebase as database and Contentful as CMS. On the front-end we have React Native with Expo."},projectVideo:{label:"Grabacio\xb4n de pantalla 2021-09-16 a la(s) 11.24.30",id:512912,value:"https://romina-portfolio.easyweb.site/upl/files/178090.mp4"},linkToCode:{label:"Extern links",id:512814,value:"https://github.com/rominonix/crossplatform-react-native"},id:502478},{label:"Project",projectTitle:{label:"Textrad (textbox)",id:502529,value:"plant"},projectSubtitle:{label:"Textrad (textbox)",id:511114,value:"webshop"},projectImg:{label:"plant",id:512718,value:V},projectSingleDescription:{label:"Beskrivning (textarea)",id:512619,value:"The project was developed using Test-Driven Development (TDD) and it is a webshop for buying plants. The app is written in Typescript, with React and Redux Toolkit. For tests I used Enzyme, Jest and Test Library."},projectVideo:{label:"Grabacio\xb4n de pantalla 2021-09-16 a la(s) 11.24.30",id:512913,value:"https://romina-portfolio.easyweb.site/upl/files/178090.mp4"},linkToCode:{label:"Extern links",id:512815,value:"https://github.com/rominonix/tdd-frontend"},id:502579},{label:"Project",projectTitle:{label:"Textrad (textbox)",id:502529,value:"StarWars"},projectSubtitle:{label:"Textrad (textbox)",id:511114,value:"Catalog"},projectImg:{label:"star",id:512718,value:J},projectSingleDescription:{label:"Beskrivning (textarea)",id:512619,value:"This is a vanilla Javascript project that interacts directly with the DOM and with the SWAPI API. Here you can see the characteristics of each of the characters from the different movies of the Star Wars saga."},projectVideo:{label:"Grabacio\xb4n de pantalla 2021-09-16 a la(s) 11.24.30",id:512913,value:"https://romina-portfolio.easyweb.site/upl/files/178090.mp4"},linkToCode:{label:"Extern links",id:512815,value:"https://github.com/rominonix/star-wars-catalog"},id:502479},{label:"Project",projectTitle:{label:"Textrad (textbox)",id:502629,value:"Plant"},projectSubtitle:{label:"Textrad (textbox)",id:511214,value:"Backend"},projectImg:{label:"tdd-backend",id:512719,value:F},projectSingleDescription:{label:"Beskrivning (textarea)",id:512620,value:"This is the back-end for the Plants webshop. It was also developed using Test-Driven Development, and it includes a REST API written with Express and SQlite as a database. The app is written in Typescript and for tests used Jest and Super Test."},projectVideo:{label:"Grabacio\xb4n de pantalla 2021-09-16 a la(s) 11.24.30",id:512914,value:"https://romina-portfolio.easyweb.site/upl/files/178090.mp4"},linkToCode:{label:"Extern links",id:512816,value:"https://github.com/rominonix/tdd-backend"},id:502480}],id:501197},aboutSection:{label:"About",aboutTitle:{label:"Huvudrubrik",id:510818,value:"About"},aboutSubtitle:{label:"Rubrik",id:510819,value:"Hi!"},aboutDescription:{label:"Beskrivning (textarea)",id:502422,value:"I'm Romina, Javascript developer, designer and visual artist. For many years my work has moved between design, programming and art projects. During the last two years web development has become the most important role \ud83d\udc69\u200d\ud83d\udcbb. In the projects section \ud83d\udc46 you can see my featured projects in Javascript. I am Chilean-Swedish, I was born in Santiago and have lived in different countries. I currently live in Stockholm, a wonderful city that has the perfect balance between urban and nature \ud83c\udf33."},aboutImg:{label:"romi-portrait",id:511841,value:"https://romina-portfolio.easyweb.site/upl/images/752633.png"},aboutContactTitle:{label:"Rubrik",id:510840,value:"Stay in touch!"},aboutEmail:{label:"Textrad (textbox)",id:510821,value:"rominarebolledo[at]gmail.com"},socialLinks:[{label:"Social",socialTitle:{label:"Textrad (textbox)",id:511842,value:"LinkedIn"},aboutIcon:{label:"linke",id:529476,value:"https://romina-portfolio.easyweb.site/upl/images/758307.svg"},socialLink:{label:"Extern links",id:510879,value:"https://www.linkedin.com/in/rominarebolledo/"},id:510876},{label:"Social",socialTitle:{label:"Textrad (textbox)",id:511843,value:"Instagram"},aboutIcon:{label:"insta",id:529436,value:"https://romina-portfolio.easyweb.site/upl/images/758300.svg"},socialLink:{label:"Extern links",id:510882,value:"https://www.instagram.com/corrientealterna/"},id:510880},{label:"Social",socialTitle:{label:"Textrad (textbox)",id:511844,value:"Github"},aboutIcon:{label:"git",id:529909,value:"https://romina-portfolio.easyweb.site/upl/images/758340.svg"},socialLink:{label:"Extern links",id:511363,value:"https://github.com/rominonix"},id:511361}],id:502418},skillsSection:{label:"Skills",skillsTitle:{label:"Huvudrubrik",id:511444,value:"Skills"},skillSectionIcon:[{label:"skillSectionIcon",iconsTitles:{label:"Textrad (textbox)",id:511531,value:"Javascript"},skillsIcons:{label:"Js-logo",id:530919,value:"https://romina-portfolio.easyweb.site/upl/images/759493.svg"},id:511524},{label:"skillSectionIcon",iconsTitles:{label:"Textrad (textbox)",id:511533,value:"html"},skillsIcons:{label:"html-logo",id:531578,value:"https://romina-portfolio.easyweb.site/upl/images/759757.svg"},id:511532},{label:"skillSectionIcon",iconsTitles:{label:"Textrad (textbox)",id:511536,value:"css"},skillsIcons:{label:"css",id:532405,value:"https://romina-portfolio.easyweb.site/upl/images/759761.svg"},id:511535},{label:"skillSectionIcon",iconsTitles:{label:"Textrad (textbox)",id:511539,value:"react"},skillsIcons:{label:"react-logo",id:531572,value:"https://romina-portfolio.easyweb.site/upl/images/759657.svg"},id:511538},{label:"skillSectionIcon",iconsTitles:{label:"Textrad (textbox)",id:511542,value:"vue js"},skillsIcons:{label:"vue-logo",id:531573,value:"https://romina-portfolio.easyweb.site/upl/images/759753.svg"},id:511541},{label:"skillSectionIcon",iconsTitles:{label:"Textrad (textbox)",id:511545,value:"react native"},skillsIcons:{label:"react-logo",id:531574,value:"https://romina-portfolio.easyweb.site/upl/images/759657.svg"},id:511544},{label:"skillSectionIcon",iconsTitles:{label:"Textrad (textbox)",id:531576,value:"git"},skillsIcons:{label:"github-logo",id:531577,value:"https://romina-portfolio.easyweb.site/upl/images/759472.svg"},id:531575}],id:510892},contactSection:{label:"Contact",contactTitle:{label:"Huvudrubrik",id:511557,value:"Contact"},contactSubtitle:{label:"Rubrik",id:511558,value:"Write Me!"},contactDescription:{label:"Beskrivning (textarea)",id:511559,value:"Well, here you can contact me if you want us to do a project together, or just write to me to say hello and meet for a \u2615 or a \ud83c\udf7a and talk about art, design and of course code \ud83e\udd13."},id:511556}}})}catch(a){console.log(a.message)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(u.jsxs)(h.a,{basename:"/portfolio",children:[Object(u.jsx)("div",{className:"bg"}),Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(W.c,{children:Object(u.jsx)(W.a,{path:"/",exact:!0,children:Object(u.jsx)(M,{})})})})]})},_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,48)).then((function(t){var a=t.getCLS,l=t.getFID,i=t.getFCP,o=t.getLCP,n=t.getTTFB;a(e),l(e),i(e),o(e),n(e)}))},U=a(14),Z=a(23),Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_MENU":return t.payload;default:return e}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_SETTINGS":return t.payload;default:return e}},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_HOME":return t.payload;default:return e}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PAGE":return t.payload;default:return e}},$=Object(U.b)({menu:Q,settings:K,home:X,page:q}),ee=Object(U.d)($,Object(U.c)(Object(U.a)(Z.a)));r.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(s.a,{store:ee,children:Object(u.jsx)(z,{})})}),document.getElementById("root")),_()}},[[47,1,2]]]);
//# sourceMappingURL=main.91f571e3.chunk.js.map