(this["webpackJsonpa1abilities_in_node-react"]=this["webpackJsonpa1abilities_in_node-react"]||[]).push([[11],{181:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var n=a(1),c=a.n(n),l=a(5),r=a(11),i=a(0),s=a.n(i),o=a(81),u=a(87),m=a(182),d=a(144),E=a(70),f=a(19),v=a(14),b=a(4);function p(e){var t=Object(o.isNullOrUndefined)(e.location.state)||""===e.location.state?0:e.location.state,a=Object(i.useState)([]),n=Object(r.a)(a,2),p=n[0],h=n[1],g=Object(i.useState)(new Date),O=Object(r.a)(g,2),j=O[0],k=O[1],y=Object(i.useState)(!1),D=Object(r.a)(y,2),Y=D[0],w=D[1];Object(i.useEffect)((function(){x("Id",j)}),[]);var x=function(){var e=Object(l.a)(c.a.mark((function e(a,n){var l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.prev=1,e.next=4,v.a.fetchPageData({page:"DailyPrayer",id:t,fetchBy:a,date:Object(E.a)(n)});case 4:l=e.sent,h(l.data),w(!1),Object(o.isNullOrUndefined)(l.data[0].date)&&""===l.data[0].date||k(Object(E.a)(l.data[0].date)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("Error...",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}();return s.a.createElement(i.Fragment,null,s.a.createElement("section",{class:"site-section"},s.a.createElement("div",{class:"container"},s.a.createElement("div",{class:"row"},s.a.createElement("div",{class:"col-md-4"},s.a.createElement("div",{className:"calendar-box"},s.a.createElement("div",{class:"block-16"},s.a.createElement("div",{class:"heading"},s.a.createElement("p",{className:"calendar-title"},"Prayer calendar")),s.a.createElement("figure",null,s.a.createElement(u.a,{utils:d.a},s.a.createElement(m.a,{autoOk:!0,variant:"static",value:j,onChange:function(e){k(e),x("Date",e)}})))))),s.a.createElement("div",{class:"col-md-8"},s.a.createElement("blockquote",null,(p.length>0?p:[]).map((function(e){return s.a.createElement(i.Fragment,null,s.a.createElement("div",{class:"col-md-12"},s.a.createElement("div",{class:"block-15"},s.a.createElement("div",{class:"heading",style:{maxWidth:"fit-content"}},s.a.createElement("h2",{style:{fontSize:"35px"}},e.title)))),s.a.createElement("div",{class:"col-md-12"},s.a.createElement("div",{class:"block-16"},s.a.createElement("figure",null,s.a.createElement("img",{src:b.c+"/api/images?path=Prayer/"+e.image_name,class:"img-fluid img-shadow"})))),s.a.createElement("div",{class:"col-md-12"},s.a.createElement("div",{class:"block-15"},s.a.createElement("div",null,s.a.createElement("p",{class:"mb-4"}," ",e.content," ")))),s.a.createElement("hr",null))}))))))),!0===Y?s.a.createElement(f.a,null):null)}},70:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return l}));var n=a(82);function c(e){return n(e).format("YYYY-MM-DD")}function l(e){return n(e).format("DD-MM-YYYY")}}}]);
//# sourceMappingURL=11.d8085d74.chunk.js.map