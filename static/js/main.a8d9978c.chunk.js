(this.webpackJsonpVoiceDownloader=this.webpackJsonpVoiceDownloader||[]).push([[0],{167:function(e,t,c){},168:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(59),s=c.n(n),r=c(35),i=c.n(r),o=c(70),d=c.n(o),j=c(74),l=c(65),b=c(31),h=c(52),u=c(71),p=(c(161),c(36)),O=c(32),x=c(44),f=c(50),m=c(43),g=c(53),k=c(49),v=c(48),y=c(12),w=function(e){var t=e.id,c=e.go,a=e.fetchedUser;return Object(y.jsxs)(p.a,{id:t,children:[Object(y.jsx)(O.a,{children:"Example"}),a&&Object(y.jsx)(m.a,{header:Object(y.jsx)(x.a,{mode:"secondary",children:"User Data Fetched with VK Bridge"}),children:Object(y.jsx)(g.a,{before:a.photo_200?Object(y.jsx)(v.a,{src:a.photo_200}):null,description:a.city&&a.city.title?a.city.title:"",children:"".concat(a.first_name," ").concat(a.last_name)})}),Object(y.jsx)(m.a,{header:Object(y.jsx)(x.a,{mode:"secondary",children:"Navigation Example"}),children:Object(y.jsx)(k.a,{children:Object(y.jsx)(f.a,{stretched:!0,size:"l",mode:"secondary",onClick:c,"data-to":"persik",children:"Show me the Persik, please"})})})]})},V=c(55),P=c.p+"static/media/persik.ae9f0072.png",U=(c(167),function(e){return Object(y.jsxs)(p.a,{id:e.id,children:[Object(y.jsx)(O.a,{left:Object(y.jsx)(V.a,{onClick:e.go,"data-to":"home"}),children:"Persik"}),Object(y.jsx)("img",{className:"Persik",src:P,alt:"Persik The Cat"})]})}),_=function(){var e=Object(a.useState)("home"),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(null),r=Object(l.a)(s,2),o=r[0],p=r[1],O=Object(a.useState)(Object(y.jsx)(h.a,{size:"large"})),x=Object(l.a)(O,2),f=x[0],m=x[1];Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,p(t),m(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.subscribe((function(e){var t=e.detail,c=t.type,a=t.data;if("VKWebAppUpdateConfig"===c){var n=document.createAttribute("scheme");n.value=a.scheme?a.scheme:"client_light",document.body.attributes.setNamedItem(n)}})),function(){e.apply(this,arguments)}()}),[]);var g=function(e){n(e.currentTarget.dataset.to)};return Object(y.jsx)(u.a,{children:Object(y.jsx)(u.b,{children:Object(y.jsxs)(b.a,{activePanel:c,popout:f,children:[Object(y.jsx)(w,{id:"home",fetchedUser:o,go:g}),Object(y.jsx)(U,{id:"persik",go:g})]})})})};i.a.send("VKWebAppInit"),s.a.render(Object(y.jsx)(_,{}),document.getElementById("root"))}},[[168,1,2]]]);
//# sourceMappingURL=main.a8d9978c.chunk.js.map