(this["webpackJsonpa1abilities_in_node-react"]=this["webpackJsonpa1abilities_in_node-react"]||[]).push([[8],{167:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return E}));var n=a(1),c=a.n(n),l=a(5),s=a(11),r=a(0),i=a.n(r),o=a(76),m=a(70),u=a(14),d=a(4);function E(e){var t=Object(r.useState)(!1),a=Object(s.a)(t,2),n=a[0],E=a[1],v=Object(r.useState)(""),b=Object(s.a)(v,2),g=b[0],f=b[1],p=Object(r.useState)({id:"",content:"",image_name:"",link:""}),h=Object(s.a)(p,2),k=h[0],O=h[1],j=Object(r.useState)([]),y=Object(s.a)(j,2),w=y[0],x=y[1],M=Object(r.useState)([]),_=Object(s.a)(M,2),C=_[0],N=_[1],Y=Object(r.useState)({id:"",title:"",content:"",image_name:"",link:""}),q=Object(s.a)(Y,2),S=q[0],D=q[1];Object(r.useEffect)((function(){H()}),[]);var H=function(){var e=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.fetchPageData({page:"Home"});case 3:t=e.sent,O(t.about[0]),x(t.miracles),N(t.events),D(t.prayer[0]),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Error...",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),T=function(e,t){"Miracle"===t?f({content:w[e],title:t}):"Event"===t&&f({content:C[e],title:t}),E(!0)};return i.a.createElement(r.Fragment,null,i.a.createElement("section",{class:"block-42 overlap"},i.a.createElement("div",{class:"container"},i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"col-md-12 d-lg-flex"},i.a.createElement("div",{class:"block-42-text"},i.a.createElement("div",{class:"block-42-label",style:{fontWeight:"400"}},"Today's Prayer:"),i.a.createElement("div",{class:"block-42-title mx-2"},i.a.createElement("blockquote",{className:"blockqoute-home"},i.a.createElement("p",null,S.content)))))))),i.a.createElement("section",{class:"site-section"},i.a.createElement("div",{class:"container"},i.a.createElement("div",{class:"row align-items-center"},i.a.createElement("div",{class:"col-md-6 order-md-2"},i.a.createElement("div",{class:"block-16"},i.a.createElement("figure",null,i.a.createElement("img",{src:d.c+"/api/images?path=AboutWelcomeMessage/"+k.image_name,alt:"Image placeholder",class:"img-fluid img-shadow"}),i.a.createElement("a",{href:k.link,target:"_blank",class:"play-button popup-vimeo"},i.a.createElement("span",{class:"ion-ios-play"}))))),i.a.createElement("div",{class:"col-md-6 order-md-1"},i.a.createElement("div",{class:"block-15"},i.a.createElement("div",{class:"heading"},i.a.createElement("h2",null,"Welcome To God Consciousness ")),i.a.createElement("div",{class:"text mb-6"},i.a.createElement("p",{class:"mb-4 text-justify"}," ",k.content," "))))))),i.a.createElement("section",{class:"site-section bg-light"},i.a.createElement("div",{class:"container"},i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"col-md-12"},i.a.createElement("div",{class:"section-heading"},i.a.createElement("h2",{class:"heading"},"Miracles")))),i.a.createElement("div",{class:"row"},(w.length>0?w:[]).map((function(e,t){return i.a.createElement("div",{class:"col-md-6 col-lg-4 mb-5"},i.a.createElement("div",{class:"block-20"},i.a.createElement("figure",null,i.a.createElement("a",{href:"#"},i.a.createElement("img",{src:d.c+"/api/images?path=Miracle/"+e.image_name,class:"img-fluid img-box"}))),i.a.createElement("div",{class:"text text-center"},i.a.createElement("h3",{class:"heading"},e.title.length>22?e.title.substring(0,18)+"...":e.title),i.a.createElement("p",null,e.content.length>90?e.content.substring(0,90)+"...":e.content),i.a.createElement("p",null,i.a.createElement("a",{style:{cursor:"pointer"},onClick:function(e){T(t,"Miracle")}},"Read More")))))}))))),i.a.createElement("section",{class:"site-section"},i.a.createElement("div",{class:"container"},i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"col-md-12 mb-5"},i.a.createElement("div",{class:"section-heading mb-5"},i.a.createElement("h2",{class:"heading"},"Latest Events")))),i.a.createElement("div",{class:"row"},(C.length>0?C:[]).map((function(e,t){return i.a.createElement("div",{class:"col-md-6 col-lg-4 mb-5"},i.a.createElement("div",{class:"block-20"},i.a.createElement("figure",null,i.a.createElement("img",{src:d.c+"/api/images?path=Event/"+e.image_name,class:"img-fluid"})),i.a.createElement("div",{class:"text text-center"},i.a.createElement("h3",{class:"heading"},e.title),i.a.createElement("div",{class:"meta mb-3"},i.a.createElement("div",null,i.a.createElement("span",{class:"fa fa-calendar"}),"  "+Object(m.b)(e.date)),i.a.createElement("div",null,i.a.createElement("span",{class:"fa fa-clock-o"})," ","  "+e.time," ")),i.a.createElement("p",null,i.a.createElement("a",{style:{cursor:"pointer"},onClick:function(e){T(t,"Event")}},i.a.createElement("strong",null,"Read More"))))))})),0===C.length&&i.a.createElement("p",{className:"p-center"},"Coming soon")))),n?i.a.createElement(o.a,{show:n,handleClose:function(){E(!1)},data:g}):null)}},70:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return l}));var n=a(82);function c(e){return n(e).format("YYYY-MM-DD")}function l(e){return n(e).format("DD-MM-YYYY")}},76:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),c=a.n(n),l=a(183),s=a(186),r=a(81),i=a(70);function o(e){var t=e.show,a=e.handleClose,n=e.data,o=n.content;return c.a.createElement(l.a,{show:t,onHide:a,backdrop:"static",keyboard:!1},c.a.createElement(l.a.Header,{closeButton:!0},c.a.createElement(l.a.Title,null,n.title)),c.a.createElement(l.a.Body,null," ","Event"!==n.title?c.a.createElement("div",null,c.a.createElement("p",{className:"event-line"},"".concat(o.title)),c.a.createElement("blockquote",{className:"blockqoute-lay"},o.content)):c.a.createElement("div",null,c.a.createElement("p",{className:"event-line"},"".concat(o.title," organized on ").concat(Object(i.b)(o.date)," at ").concat(o.time," in ").concat(o.location,".")),c.a.createElement("blockquote",{className:"blockqoute-lay"}," ",o.content," "),""!==o.contact&&!Object(r.isNullOrUndefined)(o.contact)&&c.a.createElement("span",{className:"event-link"}," ","Contact : "+o.contact," "),""!==o.link&&!Object(r.isNullOrUndefined)(o.link)&&c.a.createElement("p",{className:"event-link"}," ","Also visit: ",c.a.createElement("a",{target:"_blank",href:o.link}," ",o.link)))," "),c.a.createElement(l.a.Footer,null,c.a.createElement(s.a,{variant:"secondary",onClick:a}," Close ")))}},95:function(e,t,a){"use strict";var n=a(0),c=a.n(n);t.a=c.a.createContext(null)}}]);
//# sourceMappingURL=8.219d8783.chunk.js.map