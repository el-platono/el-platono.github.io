(window.webpackJsonp=window.webpackJsonp||[]).push([[7,14,15],{442:function(t,e,r){"use strict";r.r(e);var n={name:"BaseSubheading"},o=r(39),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h2",t._g(t._b({staticClass:"subheading text-uppercase font-weight-medium mb-3"},"h2",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},443:function(t,e,r){var content=r(444);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("e23b7040",content,!0,{sourceMap:!1})},444:function(t,e,r){var n=r(18)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},445:function(t,e,r){"use strict";r.r(e);var n={name:"BaseCard"},o=r(39),c=r(62),l=r.n(c),v=(r(11),r(9),r(8),r(3),r(15),r(10),r(16),r(2)),d=(r(21),r(173),r(174),r(443),r(214)),h=r(215),_=r(95),m=r(7);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(v.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w=Object(m.a)(h.a,_.a,d.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return x(x({"v-card":!0},_.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},d.a.options.computed.classes.call(this))},styles:function(){var style=x({},d.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=h.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}}),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-card",t._g(t._b({attrs:{flat:"",tile:""}},"v-card",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:w})},509:function(t,e,r){"use strict";r.r(e);var n={name:"HomeSubscribe"},o=r(39),c=r(62),l=r.n(c),v=r(295),d=r(436),h=r(441),_=r(205),m=r(206),f=r(133),x=r(207),w=r(136),y=r(204),k=r(433),O=r(438),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{id:"subscribe",tag:"section"}},[r("base-card",{staticClass:"pa-3",attrs:{color:"rgba(203, 170, 92, 0.51)"}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"5"}},[r("base-subheading",{staticClass:"mb-3"},[t._v("\n            Subscribe\n          ")]),t._v(" "),r("p",[t._v("\n            Enter your email address to subscribe to this blog\n            and receive notifications of new posts by email.\n          ")]),t._v(" "),r("v-row",{staticClass:"pa-2"},[r("v-responsive",{staticClass:"overflow-visible mr-2",attrs:{"max-width":"400"}},[r("v-text-field",{attrs:{"hide-details":"",label:"Your Email Address",solo:""}})],1),t._v(" "),r("v-btn",{staticClass:"ma-0",staticStyle:{height:"48px"},attrs:{block:t.$vuetify.breakpoint.xsOnly,color:"secondary"}},[t._v("\n              Subscribe\n            ")])],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"6","offset-md":"1"}},[r("base-subheading",[t._v("Contact")]),t._v(" "),r("v-list",{staticClass:"transparent"},[r("v-list-item",[r("v-list-item-avatar",{attrs:{color:"primary"}},[r("v-icon",{staticClass:"elevation-4",attrs:{dark:""}},[t._v("\n                  mdi-email-outline\n                ")])],1),t._v(" "),r("v-list-item-title",[t._v("EMAIL")]),t._v(" "),r("v-list-item-subtitle",[t._v("\n                THEARTOFTRAVEL@GMAIL.COM\n              ")])],1),t._v(" "),r("v-list-item",[r("v-list-item-avatar",{attrs:{color:"primary"}},[r("v-icon",{staticClass:"elevation-4",attrs:{dark:""}},[t._v("\n                  mdi-map-marker\n                ")])],1),t._v(" "),r("v-list-item-title",[t._v("ADDRESS")]),t._v(" "),r("v-list-item-subtitle",[t._v("\n                1234 WORLD DR. HERE, TX 76123\n              ")])],1),t._v(" "),r("v-list-item",[r("v-list-item-avatar",{attrs:{color:"primary"}},[r("v-icon",{staticClass:"elevation-4",attrs:{dark:""}},[t._v("\n                  mdi-phone\n                ")])],1),t._v(" "),r("v-list-item-title",[t._v("PHONE")]),t._v(" "),r("v-list-item-subtitle",[t._v("\n                555-789-1234\n              ")])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{BaseSubheading:r(442).default,BaseCard:r(445).default}),l()(component,{VBtn:v.a,VCol:d.a,VContainer:h.a,VIcon:_.a,VList:m.a,VListItem:f.a,VListItemAvatar:x.a,VListItemSubtitle:w.b,VListItemTitle:w.c,VResponsive:y.a,VRow:k.a,VTextField:O.a})}}]);