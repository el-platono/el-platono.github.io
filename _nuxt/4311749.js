(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{505:function(t,e,n){"use strict";n.r(e);var r={name:"Pagination",props:["page","pages"],computed:{totalPages:function(){return Math.ceil(this.total/10)},currentPage:function(){return parseInt(this.$route.params.page)||1},prevPage:function(){return this.currentPage>1?this.currentPage-1:1},nextPage:function(){return this.currentPage<this.totalPages?this.currentPage+1:this.totalPages}}},c=n(39),o=n(62),l=n.n(o),v=n(436),h=n(205),P=n(433),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{cols:"3"}},[1!==t.page?n("base-btn",{staticClass:"ml-0",attrs:{square:"",title:"Previous page"},on:{click:function(e){t.page--}}},[n("v-icon",[t._v("mdi-chevron-left")])],1):t._e()],1),t._v(" "),n("v-col",{staticClass:"text-center subheading",attrs:{cols:"6"}},[t._v("\n    PAGE "+t._s(t.page)+" OF "+t._s(t.pages)+"\n  ")]),t._v(" "),n("v-col",{staticClass:"text-right",attrs:{cols:"3"}},[t.pages>1&&t.page<t.pages?n("base-btn",{staticClass:"mr-0",attrs:{square:"",title:"Next page"},on:{click:function(e){t.page++}}},[n("v-icon",[t._v("mdi-chevron-right")])],1):t._e()],1)],1)}),[],!1,null,"6a8ceabe",null);e.default=component.exports;l()(component,{BaseBtn:n(298).default}),l()(component,{VCol:v.a,VIcon:h.a,VRow:P.a})}}]);