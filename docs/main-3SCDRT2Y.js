import{$ as F,F as x,H as a,I as N,P as O,V as D,W as S,X as A,Z as w,aa as k,ba as v,ca as _,j as c,l as r,m as l,s as h,u as I,v as M,w as n,x as i,y as m}from"./chunk-B34TNNUS.js";var u=class e{constructor(){}ngOnInit(){}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["shared-homePages"]],decls:2,vars:0,template:function(t,p){t&1&&(n(0,"p"),a(1,` homePages works!
`),i())}})};var d=class e{constructor(){}ngOnInit(){}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["shared-about-pages"]],decls:2,vars:0,template:function(t,p){t&1&&(n(0,"p"),a(1,` about-pages works!
`),i())}})};var g=class e{constructor(){}ngOnInit(){}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["shared-ContactPages"]],decls:2,vars:0,template:function(t,p){t&1&&(n(0,"p"),a(1,` ContactPages works!
`),i())}})};var E=[{path:"home",component:u},{path:"about",component:d},{path:"contact",component:g},{path:"countries",loadChildren:()=>import("./chunk-JKHTG4OT.js").then(e=>e.CountriesModule)},{path:"**",redirectTo:"countries"}],C=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=l({type:e});static \u0275inj=c({imports:[v.forRoot(E),v]})};function L(e,o){if(e&1&&(n(0,"li",2),a(1),i()),e&2){let t=o.$implicit;x("routerLink",t.route),h(),N(t.title)}}var b=class e{sidebarItem=[{route:"countries/by-capital",title:"Por capital"},{route:"countries/by-country",title:"Por pais"},{route:"countries/by-region",title:"Por region"}];constructor(){}ngOnInit(){}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["app-sidebar"]],decls:5,vars:1,consts:[[1,"list-group"],["type","button","routerLinkActive","active","class","list-group-item my-1",3,"routerLink",4,"ngFor","ngForOf"],["type","button","routerLinkActive","active",1,"list-group-item","my-1",3,"routerLink"]],template:function(t,p){t&1&&(n(0,"h2"),a(1,"Paises"),i(),m(2,"hr"),n(3,"ul",0),I(4,L,2,2,"li",1),i()),t&2&&(h(4),M("ngForOf",p.sidebarItem))},dependencies:[O,F,k]})};var P=class e{title="SPA";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"row","mt-4"],[1,"col-3"],[1,"col"]],template:function(t,p){t&1&&(n(0,"div",0)(1,"div",1),m(2,"app-sidebar"),i(),n(3,"div",2),m(4,"router-outlet"),i()())},dependencies:[w,b]})};var y=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=l({type:e,bootstrap:[P]});static \u0275inj=c({providers:[D()],imports:[A,C,_]})};S().bootstrapModule(y,{ngZoneEventCoalescing:!0}).catch(e=>console.error(e));
