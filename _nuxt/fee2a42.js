(window.webpackJsonp=window.webpackJsonp||[]).push([[15,9,18,19],{444:function(t,e,r){"use strict";r.r(e);var n=r(28),l=(r(82),r(24),r(214),{data:function(){return{searchQuery:"",articles:[]}},watch:{searchQuery:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t){r.next=4;break}return e.articles=[],e.$refs.dropdownSearch.visible=!1,r.abrupt("return");case 4:return r.next=6,e.$content("articles").limit(6).search(t).fetch();case 6:e.articles=r.sent,e.articles.length>0&&(e.$refs.dropdownSearch.visible=!0);case 8:case"end":return r.stop()}}),r)})))()}}}),c=r(41),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-nav-form",{staticClass:"d-flex p-0"},[r("b-form-input",{staticClass:"mr-sm-2 col-sm-12",attrs:{type:"search",autocomplete:"off",placeholder:"Search articles"},model:{value:t.searchQuery,callback:function(e){t.searchQuery=e},expression:"searchQuery"}}),t._v(" "),r("b-nav-item-dropdown",{directives:[{name:"show",rawName:"v-show",value:t.articles.length,expression:"articles.length"}],ref:"dropdownSearch",attrs:{right:""}},t._l(t.articles,(function(article){return r("b-dropdown-item",{key:article.slug,attrs:{to:{name:"article-slug",params:{slug:article.slug}}}},[t._v("\n      "+t._s(article.title)+"\n    ")])})),1)],1)}),[],!1,null,null,null);e.default=component.exports},445:function(t,e,r){"use strict";r.r(e);var n=r(41),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"NuxtLogo",attrs:{width:"80",height:"40",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#00C58E"}}),t._v(" "),r("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#108775"}}),t._v(" "),r("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#2F495E"}})])}),[],!1,null,null,null);e.default=component.exports},449:function(t,e,r){"use strict";r.r(e);var n=r(444),l={name:"Navbar",props:{tags:Array},comments:{AppSearchInput:n.default},mounted:function(){this.$nextTick((function(){window.addEventListener("scroll",(function(){var t=document.getElementById("nav").classList;document.documentElement.scrollTop>=150?!1===t.contains("shrink")&&(t.toggle("shrink"),t.toggle("py-2"),t.remove("bg-light"),t.remove("navbar-light"),t.toggle("bg-dark"),t.toggle("navbar-dark"),t.remove("col-lg-10"),t.remove("offset-lg-1")):!0===t.contains("shrink")&&(t.toggle("shrink"),t.toggle("py-2"),t.toggle("bg-dark"),t.toggle("navbar-dark"),t.add("bg-light"),t.add("navbar-light"),t.add("col-lg-10"),t.add("offset-lg-1"))}))}))}},c=r(41),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar is-fixed-top",attrs:{role:"navigation","aria-label":"main navigation"}},[t._m(0),t._v(" "),r("div",{staticClass:"navbar-menu",attrs:{id:"navbarBasicExample"}},[r("div",{staticClass:"navbar-start"},t._l(t.tags,(function(e){return r("NuxtLink",{key:e.slug,staticClass:"navbar-item",attrs:{to:"/tag/"+e.slug}},[t._v("\n          "+t._s(e.name)+"\n        ")])})),1)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"navbar-brand"},[r("a",{staticClass:"navbar-item",attrs:{href:"https://bulma.io"}},[r("img",{attrs:{src:"https://bulma.io/images/bulma-logo.png",width:"112",height:"28"}})]),t._v(" "),r("a",{staticClass:"navbar-burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[r("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),r("span",{attrs:{"aria-hidden":"true"}}),t._v(" "),r("span",{attrs:{"aria-hidden":"true"}})])])}],!1,null,"1984baa2",null);e.default=component.exports},452:function(t,e,r){"use strict";r.r(e);r(11),r(8),r(9),r(3),r(15),r(10),r(16);var n=r(2),l=r(63),c=r(444),o=r(449),d=r(445);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={components:{Navbar:o.default,AppSearchInput:c.default,Logo:d.default},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)({tags:"tags"}))},h=f,m=r(41),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("Navbar",{attrs:{tags:t.tags}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:r(449).default,Header:r(452).default})}}]);