(window.webpackJsonp=window.webpackJsonp||[]).push([[23,12],{446:function(t,e,r){"use strict";e.a={siteUrl:"https://el-platono.github.io/",siteName:"El Platono blog",author:"Valentin Platonov",twitterHandle:"@el_platono",twitterURL:"https://twitter.com/el_platono",githubURL:"https://github.com/s-platono",siteTitle:"El Platono",siteDesc:"A description for your site here, this will show on the home page.",mainImage:"",siteType:"website",perPage:11}},453:function(t,e,r){"use strict";var n=r(27),c=(r(82),r(446));e.a=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e,r,n){var o,l,h,f,m,d,w;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=parseInt(r.page),t.next=3,e("articles").fetch();case 3:return l=t.sent,h=l.length,f=Math.ceil(h/c.a.perPage),m=h%c.a.perPage==0?c.a.perPage:h%c.a.perPage,d=function(){return 1===o?0:o===f?h-m:(o-1)*c.a.perPage},t.next=10,e("articles").only(["title","description","img","slug","tags","createdAt","author"]).sortBy("createdAt","desc").limit(c.a.perPage).skip(d()).fetch();case 10:if(w=t.sent,0!==o&&w.length){t.next=13;break}return t.abrupt("return",n({statusCode:404,message:"No articles found!"}));case 13:return t.abrupt("return",{allArticles:l,paginatedArticles:w});case 14:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}()},494:function(t,e,r){"use strict";r.r(e);var n=r(27),c=(r(82),r(3),r(40),r(41),r(30),r(453)),o={components:{Articles:function(){return Promise.all([r.e(0),r.e(6)]).then(r.bind(null,489))}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,content;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,t.app,n=t.params,o=t.error,e.next=3,Object(c.a)(r,n,o);case 3:return content=e.sent,e.abrupt("return",{total:content.allArticles,articles:content.paginatedArticles});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{link:[{hid:"canonical",rel:"canonical",href:"".concat(this.$config.baseUrl,"/articles/page/").concat(this.$route.params.page)}]}}},l=r(39),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("articles",{attrs:{articles:t.articles,total:t.total}})}),[],!1,null,"a1968c5c",null);e.default=component.exports}}]);