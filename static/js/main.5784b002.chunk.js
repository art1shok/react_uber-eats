(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),s=a(6),i=(a(65),a(3)),o=a(2),u=a(15),m=a(46),d=a(4),p=a(47),_=a(48),f=a.n(_),E=new function e(){var t=this;Object(p.a)(this,e),this.instance=f.a.create({baseURL:"https://mate-uber-eats-api.herokuapp.com/api/v1"}),this.getRestaurants=function(){return t.instance.get("/restaurants").then((function(e){return e.data}))},this.getRestaurantInfo=function(e){return t.instance.get("/restaurants/".concat(e)).then((function(e){return e.data}))},this.getMenuItemInfo=function(e){return t.instance.get("menu-items/".concat(e)).then((function(e){return e.data}))},this.getLocationData=function(){return t.instance.get("/locations").then((function(e){return e.data}))}},g="SAVE_RESTAURANTS",v="SAVE_RESTAURANTS_INFO",b="SAVE_MENU_ITEM_INFO",h="START_LOADING",N="STOP_LOADING",O="SET_LOAD_RESTAURANTS_ERROR",k="SAVE_QUERY",j=function(e){return{type:O,payload:e}},y=function(){return{type:h}},w=function(){return{type:N}},S=function(){return function(e){e(y()),E.getRestaurants().then((function(t){var a=t.data;return e(function(e){return{type:g,payload:e}}(a))})).catch((function(t){e(j(t.message))})).finally((function(){return e(w())}))}},U=function(e){return function(t){t(y()),E.getRestaurantInfo(e).then((function(e){var a=e.data;return t(function(e){return{type:v,payload:e}}(a))})).catch((function(e){t(j(e.message))})).finally((function(){return t(w())}))}},I=function(e){return function(t){t(y()),E.getMenuItemInfo(e).then((function(e){return t(function(e){return{type:b,payload:e}}(e))})).catch((function(e){t(j(e.message))})).finally((function(){return t(w())}))}},R={restaurantsListData:null,restaurantInfo:null,menuItemInfo:null,queryString:"",isLoading:!1,error:null},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:var a=t.payload;return Object(d.a)(Object(d.a)({},e),{},{error:null,restaurantsListData:a});case v:var n=t.payload;return Object(d.a)(Object(d.a)({},e),{},{restaurantInfo:n});case b:var r=t.payload;return Object(d.a)(Object(d.a)({},e),{},{menuItemInfo:r});case k:var c=t.payload;return Object(d.a)(Object(d.a)({},e),{},{queryString:c});case O:var l=t.payload;return Object(d.a)(Object(d.a)({},e),{},{error:l,restaurantsListData:null});case h:return Object(d.a)(Object(d.a)({},e),{},{isLoading:!0});case N:return Object(d.a)(Object(d.a)({},e),{},{isLoading:!1});default:return e}},C=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.c,M=[m.a],A=Object(u.d)(L,C(u.a.apply(void 0,M))),T=a(14),x=a(12),B=(a(83),a(49)),F=a.n(B),P=a(21),D=a.n(P),V=a(22),G=a.n(V),q=a(50),W=a.n(q),J=a(30),Q=a.n(J),X=(a(84),function(e){var t=e.iconUrl,a=e.value,c=e.onChange,l=e.type,s=e.placeholder,i=e.name,o=e.className,u=e.isSmall,m=e.label,d=Object(n.useState)({isFocused:!1}),p=Object(x.a)(d,2),_=p[0],f=p[1],E=Object(n.useRef)(),g=_.isFocused,v=Q()("control__input-wrapper",Object(T.a)({"control__input-wrapper--focused":g},o,!!o)),b=Q()("control__input",{"control__input--small":u,"control__input--time":"time"===l});return r.a.createElement("label",{className:"control"},m&&r.a.createElement("p",{className:"control__label"},m),r.a.createElement("div",{className:v,onClick:function(){return E.current.focus()},role:"presentation"},!!t&&r.a.createElement("img",{src:t,alt:s,className:"control__icon"}),r.a.createElement("input",{ref:E,type:l,value:a,onChange:c,onFocus:function(){return f({isFocused:!0})},onBlur:function(){return f({isFocused:!1})},name:i,placeholder:s,className:b})))});X.defaultProps={iconUrl:"",value:"",type:"text",placeholder:"",className:"",label:"",isSmall:!0};var H=function(){var e=Object(n.useRef)(),t=Object(n.useState)({address:"",time:"",search:"",selectedButton:null}),a=Object(x.a)(t,2),c=a[0],l=a[1],o=Object(s.b)(),u=function(t){var a=e.current;a&&!a.contains(t.target)&&l({selectedButton:null})};Object(n.useEffect)((function(){return document.addEventListener("click",u),function(){document.removeEventListener("click",u)}}),[]),Object(n.useEffect)((function(){var e;o((e=c.search,{type:k,payload:e}))}),[o,c.search]);var m=[{src:D.a,alt:"place icon"},{src:G.a,alt:"search icon"}],d=function(e){var t=e.target;l(Object(T.a)({},t.name,t.value))},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;c.selectedButton===e?l({selectedButton:null}):l({selectedButton:e})};return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"content",ref:e},r.a.createElement("div",{className:"header__inner"},r.a.createElement(i.b,{to:"/"},r.a.createElement("img",{className:"header__logo",src:F.a,alt:"Uber Eats"})),r.a.createElement("div",{className:"header__delivery-info"},r.a.createElement(X,{name:"address",value:c.address,onChange:d,placeholder:"Address",iconUrl:D.a}),r.a.createElement(X,{name:"time",value:c.time,onChange:d,placeholder:"Time",type:"time"})),r.a.createElement("div",{className:"header__search"},r.a.createElement(X,{name:"search",value:c.search,onChange:d,placeholder:"Search",iconUrl:G.a})),r.a.createElement("div",{className:"header__toggle-buttons"},m.map((function(e,t){var a=e.src,n=e.alt,l=t===c.selectedButton?"header__toggle-btn--active":"";return r.a.createElement("button",{key:t,onClick:function(){return p(t)},type:"button",className:"header__toggle-btn ".concat(l)},r.a.createElement("img",{src:a,alt:n}))}))),r.a.createElement(i.b,{className:"header__link",to:"/sign-in"},"Sign In")),(0===c.selectedButton||1===c.selectedButton)&&r.a.createElement("div",{className:"header__mobile-controls mobile-controls"},0===c.selectedButton&&r.a.createElement(r.a.Fragment,null,r.a.createElement(X,{label:"Where",name:"address",value:c.address,onChange:d,placeholder:"Address",iconUrl:D.a,isSmall:!1}),r.a.createElement(X,{label:"To",name:"time",value:c.time,onChange:d,placeholder:"Time",type:"time",isSmall:!1})),1===c.selectedButton&&r.a.createElement(X,{label:"Find",name:"search",value:c.search,onChange:d,placeholder:"Search",iconUrl:G.a,isSmall:!1}),r.a.createElement("button",{onClick:function(){return p()},type:"button",className:"mobile-controls__close"},r.a.createElement("img",{src:W.a,alt:"close icon"})))))},Y=(a(86),a(51)),z=a.n(Y),K=a(20),Z=a.n(K),$=a(52),ee=a.n($),te=a(53),ae=a.n(te),ne=a(54),re=a.n(ne);a(87);var ce=function(e){var t=e.title,a=e.options,c=Object(n.useState)(!1),l=Object(x.a)(c,2),s=l[0],i=l[1],o=Object(n.useState)(t),u=Object(x.a)(o,2),m=u[0],d=u[1],p=Object(n.useRef)(),_=function(e){var t=p.current;t&&!t.contains(e.target)&&i(!1)};return Object(n.useEffect)((function(){return document.addEventListener("click",_),function(){return document.removeEventListener("click",_)}}),[]),r.a.createElement("div",{className:"select",role:"button",ref:p},r.a.createElement("div",{className:"select__header",role:"button",tabIndex:0,onClick:function(){return i((function(e){return!e}))},"aria-hidden":"true"},r.a.createElement("img",{src:Z.a,alt:"",className:"select__icon"}),r.a.createElement("p",{className:"dd-header__title--bold"},m),r.a.createElement("div",{className:"select__arrow ".concat(s?"select__arrow--opened":"")})),s&&r.a.createElement("div",{className:"select__body"},a.map((function(e){return r.a.createElement("div",{className:"select__option",key:e.id,role:"button",tabIndex:0,onClick:function(){return t=e.value,d(t),void i(!1);var t},"aria-hidden":"true"},r.a.createElement("span",null,e.value))}))))},le=[{id:1,value:"English"},{id:2,value:"Ukrainian"}],se=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"footer__top-part"},r.a.createElement("div",{className:"footer__main"},r.a.createElement("div",{className:"footer__logo-container"},r.a.createElement("img",{className:"footer__logo",src:z.a,alt:"Uber Eats"}),r.a.createElement(ce,{title:"English",options:le,iconUrl:Z.a})),r.a.createElement("div",{className:"footer__mobile-apps"},r.a.createElement("a",{className:"footer__mobile-app",href:"https://apps.apple.com/us/app/uber-eats-food-delivery/id1058959277"},r.a.createElement("div",{className:"footer__app-store"})),r.a.createElement("a",{className:"footer__mobile-app",href:"https://play.google.com/store/apps/details?id=com.ubercab.eats&hl=ru"},r.a.createElement("div",{className:"footer__google-play"})))),r.a.createElement("div",{className:"footer__top-links links"},r.a.createElement(i.b,{to:"/#",className:"links__link links__link--intended"},"About UberEats"),r.a.createElement(i.b,{to:"/#",className:"links__link"},"Read our blog"),r.a.createElement(i.b,{to:"/#",className:"links__link"},"Sign up to deliver"),r.a.createElement(i.b,{to:"/#",className:"links__link"},"Add your restaurant")),r.a.createElement("div",{className:"footer__top-links"},r.a.createElement(i.b,{to:"/#",className:"links__link links__link--intended"},"Get help"),r.a.createElement(i.b,{to:"/#",className:"links__link"},"Read FAQs"),r.a.createElement(i.b,{to:"/#",className:"links__link"},"View all cities"))),r.a.createElement("div",{className:"footer__bottom-part"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Uber Technologies Inc."),r.a.createElement("div",{className:"footer__misc"},r.a.createElement("div",{className:"footer__bottom-links links"},r.a.createElement(i.b,{to:"/#",className:"links__link"},"Privacy policy"),r.a.createElement(i.b,{to:"/#",className:"links__link"},"Terms of use"),r.a.createElement(i.b,{to:"/#",className:"links__link"},"Pricing")),r.a.createElement("div",{className:"footer__social social"},r.a.createElement("a",{href:"https://www.facebook.com/UberEats/",className:"social__link"},r.a.createElement("img",{src:ee.a,alt:"facebook",className:"social__facebook"})),r.a.createElement("a",{href:"https://twitter.com/ubereats",className:"social__link"},r.a.createElement("img",{src:ae.a,alt:"twitter",className:"social__twitter"})),r.a.createElement("a",{href:"https://www.instagram.com/ubereats/",className:"social__link"},r.a.createElement("img",{src:re.a,alt:"instagram",className:"social__twitter"})))))))},ie=function(e){return e.error},oe=function(e){var t=e.restaurantsListData;if(!t)return[];var a=t.feedItems,n=t.storesMap;return a.map((function(e){var t=e.uuid;return n[t]}))},ue=function(e){return e.isLoading},me=function(e){return e.restaurantInfo},de=function(e){return e.queryString},pe=(a(88),a(89),function(){return r.a.createElement("div",{className:"lds-roller"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}),_e=a(55),fe=(a(97),function(e){var t=e.sections,a=Object(n.useRef)();return r.a.createElement("nav",{className:"restaurant-page__nav-wrapper"},r.a.createElement("ul",{className:"restaurant-page__nav"},t.map((function(e){var t=e.uuid,n=e.title;return r.a.createElement("li",{key:t,ref:a},r.a.createElement(_e.Link,{to:n,className:"restaurant-page__nav-link",activeClass:"restaurant-page__nav-link--active",spy:!0,smooth:!0,offset:-120,duration:300},n))}))))}),Ee=(a(98),a(99),function(e,t){if(e)return e.length<=t?e:"".concat(e.substring(0,t-1),"...")}),ge=function(e){var t=e.cardInfo;return r.a.createElement("div",{className:"card-list"},t.map((function(e){return r.a.createElement("div",{className:"card-list__item",key:e.uuid},r.a.createElement("div",{className:"card-list__left-section"},r.a.createElement("h3",{className:"card-list__title"},e.imageUrl?Ee(e.title,20):e.title),r.a.createElement("p",{className:"card-list__description"},e.imageUrl?Ee(e.description,45):e.description),r.a.createElement("p",{className:"card-list__price"},"\xa3 ".concat(e.price/100))),e.imageUrl&&r.a.createElement("div",{className:"card-list__right-section"},r.a.createElement("img",{className:"card-list__img",src:e.imageUrl,alt:e.title})))})))};ge.defaultProps={cardInfo:{imageUrl:""}};var ve=function(e){var t=e.sections;return r.a.createElement("div",{className:"restaurant-page__menu-item"},t.map((function(e){return r.a.createElement("section",{key:e.uuid,id:e.title},r.a.createElement("div",{className:"restaurant-page__section-item-title"},r.a.createElement("h2",null,e.title)),r.a.createElement(ge,{cardInfo:e.itemUuids.map((function(t){return{title:e.entitiesMap[t].title,description:e.entitiesMap[t].description,price:e.entitiesMap[t].price,imageUrl:e.entitiesMap[t].imageUrl,uuid:e.entitiesMap[t].uuid}}))}))})))},be=function(){var e=Object(s.c)(me),t=Object(s.c)(ue),a=Object(s.b)(),c=Object(o.f)().uuid;return Object(n.useEffect)((function(){a(U(c))}),[a,c]),Object(n.useEffect)((function(){a(I(c))}),[a,c]),t&&!e?r.a.createElement(pe,null):r.a.createElement("div",{className:"restaurant-page"},e&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"restaurant-page__top"},r.a.createElement("div",{className:"restaurant-page__img-wrapper"},r.a.createElement("img",{src:e.heroImageUrls[e.heroImageUrls.length-1].url,alt:e.title,className:"restaurant-page__main-img"})),r.a.createElement("div",{className:"restaurant-page__details"},r.a.createElement("div",{className:"restaurant-page__details-wrapper"},r.a.createElement("div",{className:"restaurant-page__details-content"},r.a.createElement("h1",{className:"restaurant-page__main-title"},e.title),r.a.createElement("p",{className:"restaurant-page__description"},"\xa3 \u2022 ".concat(e.cuisineList.join(" \u2022 "))),r.a.createElement("p",{className:"restaurant-page__time"},"35 - 45 min"),r.a.createElement("p",{className:"restaurant-page__location"},e.location.address))))),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"restaurant-page__main-content"},r.a.createElement(fe,{sections:e.sections.map((function(t){return{title:e.sectionsMap[t].title,uuid:t}}))}),r.a.createElement(ve,{sections:e.sections.map((function(t){return{title:e.sectionsMap[t].title,uuid:t,itemUuids:e.sectionsMap[t].itemUuids,entitiesMap:e.entitiesMap}}))})))))},he=(a(100),a(101),function(e){var t=e.message;return r.a.createElement("div",{className:"error"},r.a.createElement("p",null,t),r.a.createElement(i.b,{to:"/#",className:"error__link"},"Go to Home"))});he.defaultProps={message:"Sorry, something went wrong"};var Ne=he,Oe=(a(102),function(e){var t=e.imageUrl,a=e.categories,n=e.title,c=e.etaRange,l=e.uuid;return r.a.createElement("div",{className:"restaurant-card"},r.a.createElement(i.b,{to:"/restaurant/".concat(l)},r.a.createElement("img",{src:t,alt:"restaurant_".concat(n),className:"restaurant-card__img"}),r.a.createElement("h2",{className:"restaurant-card__title"},n)),r.a.createElement("div",{className:"restaurant-card__categories"},a.join(" \u2022 ")),r.a.createElement("div",{className:"restaurant-card__time"},c.replace(/\u2013/," - ")))});Oe.defaultProps={categories:[],etaRange:""};a(103);var ke=function(e){var t=e.pagesCount,a=e.paginate,n=e.currentPage,c=[],l=t-1,s=n-2,i=n+2;l>=4&&(n<2&&(i=4),n>l-2&&(s=l-4));for(var o=0;o<=l;o+=1)o>=s&&o<=i&&c.push(o);return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},c.map((function(e){return r.a.createElement("li",{key:e,className:"pagination__item"},r.a.createElement("a",{onClick:function(t){return t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),a(e)},href:"/#",className:e===n?"pagination__link pagination__active":"pagination__link"},e+1))}))))};ke.defaultProps={pagesCount:null,paginate:null,currentPage:1};var je=ke,ye=function(){var e=Object(s.c)(ue),t=Object(s.c)(oe),a=Object(s.c)(ie),c=Object(s.c)(de),l=Object(s.b)(),i=Object(n.useState)(12),o=Object(x.a)(i,2),u=o[0],m=o[1],d=Object(n.useState)(0),p=Object(x.a)(d,2),_=p[0],f=p[1];Object(n.useEffect)((function(){window.innerWidth<=1280&&(m(9),window.innerWidth<=768&&m(4)),l(S())}),[l]);var E=Object(n.useMemo)((function(){return u*_}),[_,u]),g=Object(n.useMemo)((function(){return E+u}),[E,u]),v=Object(n.useMemo)((function(){return c?t.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())})):t}),[c,t]),b=Math.ceil(v.length/u);return e?r.a.createElement(pe,null):a?r.a.createElement(Ne,{message:a}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"restaurant-list content"},v.slice(E,g).map((function(e){return r.a.createElement(Oe,{key:e.uuid,uuid:e.uuid,title:e.title,imageUrl:e.heroImageUrl,categories:e.categories,etaRange:e.etaRange.text})}))),r.a.createElement(je,{pagesCount:b,paginate:f,currentPage:_}))},we=function(){return r.a.createElement(s.a,{store:A},r.a.createElement(i.a,null,r.a.createElement(H,null),r.a.createElement(o.c,null,r.a.createElement("main",{className:"page"},r.a.createElement(o.a,{path:"/",exact:!0,component:ye}),r.a.createElement(o.a,{path:"/restaurant/:uuid",component:be}))),r.a.createElement(se,null)))};a(104);l.a.render(r.a.createElement(we,null),document.getElementById("root"))},20:function(e,t,a){e.exports=a.p+"static/media/world.e459d9a7.svg"},21:function(e,t,a){e.exports=a.p+"static/media/place.c9bc8753.svg"},22:function(e,t,a){e.exports=a.p+"static/media/searchicon.810c92df.svg"},49:function(e,t,a){e.exports=a.p+"static/media/logo.3c398a8a.svg"},50:function(e,t,a){e.exports=a.p+"static/media/close.45662d3d.svg"},51:function(e,t,a){e.exports=a.p+"static/media/logo-white.233253c0.svg"},52:function(e,t,a){e.exports=a.p+"static/media/fb.7c048725.svg"},53:function(e,t,a){e.exports=a.p+"static/media/tw.58a51e83.svg"},54:function(e,t,a){e.exports=a.p+"static/media/ig.4ef5487c.svg"},56:function(e,t,a){e.exports=a(105)},65:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[56,1,2]]]);
//# sourceMappingURL=main.5784b002.chunk.js.map