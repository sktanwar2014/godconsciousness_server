(this["webpackJsonpa1abilities_in_node-react"]=this["webpackJsonpa1abilities_in_node-react"]||[]).push([[12],{102:function(e,t,a){"use strict";var o=a(3),n=a(63),i=a(0),r=(a(13),a(64)),c=a(65),l=a(75),s=a(71),d=a(143);var u=a(96),p=a(89),b=a(185),m=a(142),g=Object(m.a)(i.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),h=Object(m.a)(i.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),v=Object(m.a)(i.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),f=Object(m.a)(i.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),y=a(69),O=i.forwardRef((function(e,t){var a=e.classes,c=e.className,l=e.color,s=void 0===l?"standard":l,d=e.component,u=e.disabled,m=void 0!==u&&u,O=e.page,j=e.selected,x=void 0!==j&&j,C=e.shape,k=void 0===C?"round":C,E=e.size,$=void 0===E?"medium":E,N=e.type,w=void 0===N?"page":N,z=e.variant,B=void 0===z?"text":z,P=Object(n.a)(e,["classes","className","color","component","disabled","page","selected","shape","size","type","variant"]),L=("rtl"===Object(p.a)().direction?{previous:f,next:v,last:g,first:h}:{previous:v,next:f,first:g,last:h})[w];return"start-ellipsis"===w||"end-ellipsis"===w?i.createElement("div",{ref:t,className:Object(r.a)(a.root,a.ellipsis,m&&a.disabled,"medium"!==$&&a["size".concat(Object(y.a)($))])},"\u2026"):i.createElement(b.a,Object(o.a)({ref:t,component:d,disabled:m,focusVisibleClassName:a.focusVisible,className:Object(r.a)(a.root,a.page,a[B],a[k],c,"standard"!==s&&a["".concat(B).concat(Object(y.a)(s))],m&&a.disabled,x&&a.selected,"medium"!==$&&a["size".concat(Object(y.a)($))])},P),"page"===w&&O,L?i.createElement(L,{className:a.icon}):null)})),j=Object(c.a)((function(e){return{root:Object(o.a)(Object(o.a)({},e.typography.body2),{},{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:e.palette.text.primary}),page:{transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},"&$focusVisible":{backgroundColor:e.palette.action.focus},"&$selected":{backgroundColor:e.palette.action.selected,"&:hover, &$focusVisible":{backgroundColor:Object(u.b)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{opacity:1,color:e.palette.action.disabled,backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:e.palette.action.disabledOpacity}},sizeSmall:{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px","& $icon":{fontSize:e.typography.pxToRem(18)}},sizeLarge:{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15),"& $icon":{fontSize:e.typography.pxToRem(22)}},textPrimary:{"&$selected":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}},"&$disabled":{color:e.palette.action.disabled}}},textSecondary:{"&$selected":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}},"&$disabled":{color:e.palette.action.disabled}}},outlined:{border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$selected":{"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}}},outlinedPrimary:{"&$selected":{color:e.palette.primary.main,border:"1px solid ".concat(Object(u.b)(e.palette.primary.main,.5)),backgroundColor:Object(u.b)(e.palette.primary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(u.b)(e.palette.primary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},outlinedSecondary:{"&$selected":{color:e.palette.secondary.main,border:"1px solid ".concat(Object(u.b)(e.palette.secondary.main,.5)),backgroundColor:Object(u.b)(e.palette.secondary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(u.b)(e.palette.secondary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},rounded:{borderRadius:e.shape.borderRadius},ellipsis:{height:"auto","&$disabled":{opacity:e.palette.action.disabledOpacity}},focusVisible:{},disabled:{},selected:{},icon:{fontSize:e.typography.pxToRem(20),margin:"0 -8px"}}}),{name:"MuiPaginationItem"})(O);function x(e,t,a){return"page"===e?"".concat(a?"":"Go to ","page ").concat(t):"Go to ".concat(e," page")}var C=i.forwardRef((function(e,t){e.boundaryCount;var a=e.classes,c=e.className,u=e.color,p=void 0===u?"standard":u,b=(e.count,e.defaultPage,e.disabled,e.getItemAriaLabel),m=void 0===b?x:b,g=(e.hideNextButton,e.hidePrevButton,e.onChange,e.page,e.renderItem),h=void 0===g?function(e){return i.createElement(j,e)}:g,v=e.shape,f=void 0===v?"round":v,y=(e.showFirstButton,e.showLastButton,e.siblingCount,e.size),O=void 0===y?"medium":y,C=e.variant,k=void 0===C?"text":C,E=Object(n.a)(e,["boundaryCount","classes","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"]),$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.boundaryCount,a=void 0===t?1:t,i=e.componentName,r=void 0===i?"usePagination":i,c=e.count,u=void 0===c?1:c,p=e.defaultPage,b=void 0===p?1:p,m=e.disabled,g=void 0!==m&&m,h=e.hideNextButton,v=void 0!==h&&h,f=e.hidePrevButton,y=void 0!==f&&f,O=e.onChange,j=e.page,x=e.showFirstButton,C=void 0!==x&&x,k=e.showLastButton,E=void 0!==k&&k,$=e.siblingCount,N=void 0===$?1:$,w=Object(n.a)(e,["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"]),z=Object(d.a)({controlled:j,default:b,name:r,state:"page"}),B=Object(s.a)(z,2),P=B[0],L=B[1],M=function(e,t){j||L(t),O&&O(e,t)},S=function(e,t){var a=t-e+1;return Array.from({length:a},(function(t,a){return e+a}))},R=S(1,Math.min(a,u)),V=S(Math.max(u-a+1,a+1),u),F=Math.max(Math.min(P-N,u-a-2*N-1),a+2),I=Math.min(Math.max(P+N,a+2*N+2),V[0]-2),T=[].concat(Object(l.a)(C?["first"]:[]),Object(l.a)(y?[]:["previous"]),Object(l.a)(R),Object(l.a)(F>a+2?["start-ellipsis"]:a+1<u-a?[a+1]:[]),Object(l.a)(S(F,I)),Object(l.a)(I<u-a-1?["end-ellipsis"]:u-a>a?[u-a]:[]),Object(l.a)(V),Object(l.a)(v?[]:["next"]),Object(l.a)(E?["last"]:[])),_=function(e){switch(e){case"first":return 1;case"previous":return P-1;case"next":return P+1;case"last":return u;default:return null}},A=T.map((function(e){return"number"===typeof e?{onClick:function(t){M(t,e)},type:"page",page:e,selected:e===P,disabled:g,"aria-current":e===P?"true":void 0}:{onClick:function(t){M(t,_(e))},type:e,page:_(e),selected:!1,disabled:g||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?P>=u:P<=1)}}));return Object(o.a)({items:A},w)}(Object(o.a)(Object(o.a)({},e),{},{componentName:"Pagination"})).items;return i.createElement("nav",Object(o.a)({"aria-label":"pagination navigation",className:Object(r.a)(a.root,c),ref:t},E),i.createElement("ul",{className:a.ul},$.map((function(e,t){return i.createElement("li",{key:t},h(Object(o.a)(Object(o.a)({},e),{},{color:p,"aria-label":m(e.type,e.page,e.selected),shape:f,size:O,variant:k})))}))))}));t.a=Object(c.a)({root:{},ul:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}},{name:"MuiPagination"})(C)},180:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var o=a(1),n=a.n(o),i=a(5),r=a(11),c=a(0),l=a.n(c),s=a(30),d=a(102),u=a(19),p=a(14),b=a(4);function m(e){var t=Object(c.useState)([]),a=Object(r.a)(t,2),o=a[0],m=a[1],g=Object(c.useState)(!1),h=Object(r.a)(g,2),v=h[0],f=h[1],y=Object(c.useState)(0),O=Object(r.a)(y,2),j=O[0],x=O[1],C=Object(c.useState)(1),k=Object(r.a)(C,2),E=k[0],$=k[1];Object(c.useEffect)((function(){N()}),[]);var N=function(){var e=Object(i.a)(n.a.mark((function e(){var t,a,o=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:1,f(!0),e.prev=2,e.next=5,p.a.fetchPageData({page:"Prayer",pageNo:t});case 5:a=e.sent,f(!1),x(a.counts),m(a.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log("Error...",e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}();return l.a.createElement(c.Fragment,null,l.a.createElement("section",{class:"site-section bg-light"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row",id:"top"},(o.length>0?o:[]).map((function(e,t){return l.a.createElement("div",{class:"col-md-6 col-lg-4 mb-5"},l.a.createElement("div",{class:"block-20"},l.a.createElement("figure",null,l.a.createElement("img",{src:b.c+"/api/images?path=Prayer/"+e.image_name,class:"img-fluid img-box"})),l.a.createElement("div",{class:"text text-center"},l.a.createElement("h3",{class:"heading"},e.title.length>15?e.title.substring(0,15)+"...":e.title),l.a.createElement("p",null,e.content.length>70?e.content.substring(0,70)+"...":e.content),l.a.createElement("p",null," ",l.a.createElement(s.b,{to:{pathname:"/DailyPrayer",state:e.id}}," Read Full ")," "))))}))),l.a.createElement("div",{class:"row",style:{justifyContent:"center"}},l.a.createElement("a",{href:"#top"},l.a.createElement(d.a,{count:Math.ceil(j/9),page:E,showFirstButton:!0,showLastButton:!0,onChange:function(e,t){$(t),N(t)}})," ")))),!0===v?l.a.createElement(u.a,null):null)}}}]);
//# sourceMappingURL=12.d4fe25d6.chunk.js.map