"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[869],{869:function(t,n,e){e.r(n),e.d(n,{default:function(){return f}});var r=e(439),a=e(791),c=e(87),u=e(184),o=function(t){var n=t.movies,e=t.location;return(0,u.jsx)("ul",{children:n.map((function(t){return(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"/movies/".concat(t.id),state:{from:e},children:t.title||t.name})},t.id)}))})},i=e(659),s=e(689),f=function(){var t=(0,a.useState)([]),n=(0,r.Z)(t,2),e=n[0],c=n[1],f=(0,s.TH)();if((0,a.useEffect)((function(){(0,i.XT)().then(c).catch((function(t){console.log("Error: "+t)}))}),[]),0!==e.length)return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h2",{children:"Trending today"}),(0,u.jsx)(o,{movies:e,location:f})]})}},659:function(t,n,e){e.d(n,{FO:function(){return f},Jh:function(){return p},XT:function(){return s},yO:function(){return d},zp:function(){return v}});var r=e(861),a=e(757),c=e.n(a),u=e(243),o="https://api.themoviedb.org/3/",i="api_key=d2aad9d08af0864f29f140d50d0d9bda",s=function(){var t=(0,r.Z)(c().mark((function t(){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"trending/movie/day?").concat(i));case 2:return n=t.sent,e=n.data.results.map((function(t){return{id:t.id,title:t.title,poster_path:t.poster_path,vote_average:t.vote_average}})),t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"movie/").concat(n,"?").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"movie/").concat(n,"/reviews?").concat(i));case 2:return e=t.sent,r=e.data.results.map((function(t){return{author:t.author,content:t.content,id:t.id}})),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"movie/").concat(n,"/credits?").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"search/movie?").concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=869.dbdeaaa6.chunk.js.map