(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[180],{906:function(t,o,e){"use strict";var i=e(11),n=e(184);o.Z=function(t){var o=t.movies,e=t.location;return(0,n.jsx)("ul",{children:o.map((function(t){return(0,n.jsx)("li",{children:(0,n.jsx)(i.O2,{to:"/movies/".concat(t.id),state:{from:e},children:t.title||t.name})},t.id)}))})}},11:function(t,o,e){"use strict";e.d(o,{II:function(){return u},JL:function(){return x},O2:function(){return y},l0:function(){return p},zx:function(){return d}});var i,n,a,r,s,l,c=e(168),f=e(934),m=e(87),p=f.Z.form(i||(i=(0,c.Z)(["\n  margin-top: 20px;\n"]))),d=f.Z.button(n||(n=(0,c.Z)(["\n  margin: 10px;\n  padding: 12px;\n  background-color: hotpink;\n  /* font-size: 24px; */\n  border-radius: 4px;\n  color: darkblue;\n  font-weight: bold;\n  &:hover {\n    color: white;\n  }\n"]))),u=f.Z.input(a||(a=(0,c.Z)(["\n  padding: 12px;\n  background-color: #fda6d1;\n  /* font-size: 24px; */\n  border-radius: 4px;\n  color: darkblue;\n  font-weight: bold;\n  margin-right: 20px;\n"]))),x=f.Z.nav(r||(r=(0,c.Z)(["\n  padding: 32px;\n  display: flex;\n  text-decoration: none;\n  gap: 20px;\n  background-color: hotpink;\n  font-size: 24px;\n  font-weight: bold;\n  &:hover {\n    color: white;\n  }\n"]))),y=(0,f.Z)(m.rU)(s||(s=(0,c.Z)(["\n  text-decoration: none;\n  color: darkblue;\n  font-size: 15px;\n  font-weight: bold;\n  a:hover {\n    color: #040110;\n  }\n"])));f.Z.li(l||(l=(0,c.Z)(["\n  text-decoration: none;\n"])))},180:function(t,o,e){"use strict";e.r(o),e.d(o,{default:function(){return d}});var i=e(439),n=e(791),a=e(659),r=e(689),s=e(87),l=e(264),c=e(11),f=e(184),m=function(t){var o=(0,n.useState)(""),e=(0,i.Z)(o,2),a=e[0],r=e[1];return(0,f.jsxs)(c.l0,{onSubmit:function(o){o.preventDefault(),t.searchQuery(a)},children:[(0,f.jsx)(c.II,{type:"text",value:a,onChange:function(t){r(t.target.value)}}),(0,f.jsx)(c.zx,{type:"submit",children:"Search"})]})},p=e(906),d=function(){var t,o=(0,n.useState)([]),e=(0,i.Z)(o,2),c=e[0],d=e[1],u=(0,s.lr)(),x=(0,i.Z)(u,2),y=x[0],g=x[1],b=null!==(t=y.get("name"))&&void 0!==t?t:"",h=(0,r.TH)();return console.log(y),(0,n.useEffect)((function(){b&&(0,a.zp)(b).then((function(t){0===t.length&&(l.Notify.info("Sorry no info with this name"),d([])),d(t)})).catch((function(t){console.log("Error: "+t)}))}),[b]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(m,{searchQuery:function(t){console.log(t),g(""!==t?{name:t}:{})}}),(0,f.jsx)(p.Z,{movies:c,location:h})]})}},659:function(t,o,e){"use strict";e.d(o,{FO:function(){return f},Jh:function(){return m},XT:function(){return c},yO:function(){return p},zp:function(){return d}});var i=e(861),n=e(687),a=e.n(n),r=e(243),s="https://api.themoviedb.org/3/",l="api_key=d2aad9d08af0864f29f140d50d0d9bda",c=function(){var t=(0,i.Z)(a().mark((function t(){var o,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.Z.get("".concat(s,"trending/movie/day?").concat(l));case 2:return o=t.sent,e=o.data.results.map((function(t){return{id:t.id,title:t.title,poster_path:t.poster_path,vote_average:t.vote_average}})),t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,i.Z)(a().mark((function t(o){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.Z.get("".concat(s,"movie/").concat(o,"?").concat(l));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(o){return t.apply(this,arguments)}}(),m=function(){var t=(0,i.Z)(a().mark((function t(o){var e,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.Z.get("".concat(s,"movie/").concat(o,"/reviews?").concat(l));case 2:return e=t.sent,i=e.data.results.map((function(t){return{author:t.author,content:t.content,id:t.id}})),t.abrupt("return",i);case 5:case"end":return t.stop()}}),t)})));return function(o){return t.apply(this,arguments)}}(),p=function(){var t=(0,i.Z)(a().mark((function t(o){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.Z.get("".concat(s,"movie/").concat(o,"/credits?").concat(l));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(o){return t.apply(this,arguments)}}(),d=function(){var t=(0,i.Z)(a().mark((function t(o){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.Z.get("".concat(s,"search/movie?").concat(l,"&language=en-US&page=1&include_adult=false&query=").concat(o));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(o){return t.apply(this,arguments)}}()},264:function(t,o,e){var i,n;n="undefined"!==typeof e.g?e.g:"undefined"!==typeof window?window:this,i=function(){return function(t){"use strict";if("undefined"===typeof t&&"undefined"===typeof t.document)return!1;var o,e="Notiflix",i="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",n='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',a={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},r={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(t){return console.error("%c "+e+" Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+i)},l=function(o){return o||(o="head"),null!==t.document[o]||(s('\nNotiflix needs to be appended to the "<'+o+'>" element, but you called it before the "<'+o+'>" element has been created.'),!1)},c=function(o,e){if(!l("head"))return!1;if(null!==o()&&!t.document.getElementById(e)){var i=t.document.createElement("style");i.id=e,i.innerHTML=o(),t.document.head.appendChild(i)}},f=function t(){var o={},e=!1,i=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],i++);for(var n=function(i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e&&"[object Object]"===Object.prototype.toString.call(i[n])?o[n]=t(o[n],i[n]):o[n]=i[n])};i<arguments.length;i++)n(arguments[i]);return o},m=function(o){var e=t.document.createElement("div");return e.innerHTML=o,e.textContent||e.innerText||""},p=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},d=0,u=function(e,i,s,c){if(!l("body"))return!1;o||x.Notify.init({});var p=f(!0,o,{});if("object"===typeof s&&!Array.isArray(s)||"object"===typeof c&&!Array.isArray(c)){var u={};"object"===typeof s?u=s:"object"===typeof c&&(u=c),o=f(!0,o,u)}var y=o[e.toLocaleLowerCase("en")];d++,"string"!==typeof i&&(i="Notiflix "+e),o.plainText&&(i=m(i)),!o.plainText&&i.length>o.messageMaxLength&&(o=f(!0,o,{closeButton:!0,messageMaxLength:150}),i='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),i.length>o.messageMaxLength&&(i=i.substring(0,o.messageMaxLength)+"..."),"shadow"===o.fontAwesomeIconStyle&&(y.fontAwesomeIconColor=y.background),o.cssAnimation||(o.cssAnimationDuration=0);var g=t.document.getElementById(r.wrapID)||t.document.createElement("div");if(g.id=r.wrapID,g.style.width=o.width,g.style.zIndex=o.zindex,g.style.opacity=o.opacity,"center-center"===o.position?(g.style.left=o.distance,g.style.top=o.distance,g.style.right=o.distance,g.style.bottom=o.distance,g.style.margin="auto",g.classList.add("nx-flex-center-center"),g.style.maxHeight="calc((100vh - "+o.distance+") - "+o.distance+")",g.style.display="flex",g.style.flexWrap="wrap",g.style.flexDirection="column",g.style.justifyContent="center",g.style.alignItems="center",g.style.pointerEvents="none"):"center-top"===o.position?(g.style.left=o.distance,g.style.right=o.distance,g.style.top=o.distance,g.style.bottom="auto",g.style.margin="auto"):"center-bottom"===o.position?(g.style.left=o.distance,g.style.right=o.distance,g.style.bottom=o.distance,g.style.top="auto",g.style.margin="auto"):"right-bottom"===o.position?(g.style.right=o.distance,g.style.bottom=o.distance,g.style.top="auto",g.style.left="auto"):"left-top"===o.position?(g.style.left=o.distance,g.style.top=o.distance,g.style.right="auto",g.style.bottom="auto"):"left-bottom"===o.position?(g.style.left=o.distance,g.style.bottom=o.distance,g.style.top="auto",g.style.right="auto"):(g.style.right=o.distance,g.style.top=o.distance,g.style.left="auto",g.style.bottom="auto"),o.backOverlay){var b=t.document.getElementById(r.overlayID)||t.document.createElement("div");b.id=r.overlayID,b.style.width="100%",b.style.height="100%",b.style.position="fixed",b.style.zIndex=o.zindex-1,b.style.left=0,b.style.top=0,b.style.right=0,b.style.bottom=0,b.style.background=y.backOverlayColor||o.backOverlayColor,b.className=o.cssAnimation?"nx-with-animation":"",b.style.animationDuration=o.cssAnimation?o.cssAnimationDuration+"ms":"",t.document.getElementById(r.overlayID)||t.document.body.appendChild(b)}t.document.getElementById(r.wrapID)||t.document.body.appendChild(g);var h=t.document.createElement("div");h.id=o.ID+"-"+d,h.className=o.className+" "+y.childClassName+" "+(o.cssAnimation?"nx-with-animation":"")+" "+(o.useIcon?"nx-with-icon":"")+" nx-"+o.cssAnimationStyle+" "+(o.closeButton&&"function"!==typeof s?"nx-with-close-button":"")+" "+("function"===typeof s?"nx-with-callback":"")+" "+(o.clickToClose?"nx-notify-click-to-close":""),h.style.fontSize=o.fontSize,h.style.color=y.textColor,h.style.background=y.background,h.style.borderRadius=o.borderRadius,h.style.pointerEvents="all",o.rtl&&(h.setAttribute("dir","rtl"),h.classList.add("nx-rtl-on")),h.style.fontFamily='"'+o.fontFamily+'", '+n,o.cssAnimation&&(h.style.animationDuration=o.cssAnimationDuration+"ms");var w="";if(o.closeButton&&"function"!==typeof s&&(w='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+y.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),o.useIcon)if(o.useFontAwesome)h.innerHTML='<i style="color:'+y.fontAwesomeIconColor+"; font-size:"+o.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+y.fontAwesomeClassName+" "+("shadow"===o.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+i+"</span>"+(o.closeButton?w:"");else{var v="";e===a.Success?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+y.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':e===a.Failure?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+y.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':e===a.Warning?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+y.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':e===a.Info&&(v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+y.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),h.innerHTML=v+'<span class="nx-message nx-with-icon">'+i+"</span>"+(o.closeButton?w:"")}else h.innerHTML='<span class="nx-message">'+i+"</span>"+(o.closeButton?w:"");if("left-bottom"===o.position||"right-bottom"===o.position){var k=t.document.getElementById(r.wrapID);k.insertBefore(h,k.firstChild)}else t.document.getElementById(r.wrapID).appendChild(h);var N=t.document.getElementById(h.id);if(N){var I,C,z=function(){N.classList.add("nx-remove");var o=t.document.getElementById(r.overlayID);o&&g.childElementCount<=0&&o.classList.add("nx-remove"),clearTimeout(I)},W=function(){if(N&&null!==N.parentNode&&N.parentNode.removeChild(N),g.childElementCount<=0&&null!==g.parentNode){g.parentNode.removeChild(g);var o=t.document.getElementById(r.overlayID);o&&null!==o.parentNode&&o.parentNode.removeChild(o)}clearTimeout(C)};if(o.closeButton&&"function"!==typeof s&&t.document.getElementById(h.id).querySelector("span.nx-close-button").addEventListener("click",(function(){z();var t=setTimeout((function(){W(),clearTimeout(t)}),o.cssAnimationDuration)})),("function"===typeof s||o.clickToClose)&&N.addEventListener("click",(function(){"function"===typeof s&&s(),z();var t=setTimeout((function(){W(),clearTimeout(t)}),o.cssAnimationDuration)})),!o.closeButton&&"function"!==typeof s){var A=function(){I=setTimeout((function(){z()}),o.timeout),C=setTimeout((function(){W()}),o.timeout+o.cssAnimationDuration)};A(),o.pauseOnHover&&(N.addEventListener("mouseenter",(function(){N.classList.add("nx-paused"),clearTimeout(I),clearTimeout(C)})),N.addEventListener("mouseleave",(function(){N.classList.remove("nx-paused"),A()})))}}if(o.showOnlyTheLastOne&&d>0)for(var S=t.document.querySelectorAll("[id^="+o.ID+"-]:not([id="+o.ID+"-"+d+"])"),T=0;T<S.length;T++){var B=S[T];null!==B.parentNode&&B.parentNode.removeChild(B)}o=f(!0,o,p)},x={Notify:{init:function(t){o=f(!0,r,t),c(p,"NotiflixNotifyInternalCSS")},merge:function(t){if(!o)return s("You have to initialize the Notify module before call Merge function."),!1;o=f(!0,o,t)},success:function(t,o,e){u(a.Success,t,o,e)},failure:function(t,o,e){u(a.Failure,t,o,e)},warning:function(t,o,e){u(a.Warning,t,o,e)},info:function(t,o,e){u(a.Info,t,o,e)}}};return"object"===typeof t.Notiflix?f(!0,t.Notiflix,{Notify:x.Notify}):{Notify:x.Notify}}(n)}.apply(o,[]),void 0===i||(t.exports=i)}}]);
//# sourceMappingURL=180.788ad64a.chunk.js.map