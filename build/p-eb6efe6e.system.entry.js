var __awaiter=this&&this.__awaiter||function(e,n,t,r){function i(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,a){function s(e){try{l(r.next(e))}catch(n){a(n)}}function o(e){try{l(r["throw"](e))}catch(n){a(n)}}function l(e){e.done?t(e.value):i(e.value).then(s,o)}l((r=r.apply(e,n||[])).next())}))};var __generator=this&&this.__generator||function(e,n){var t={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(n){return l([e,n])}}function l(s){if(r)throw new TypeError("Generator is already executing.");while(t)try{if(r=1,i&&(a=s[0]&2?i["return"]:s[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;if(i=0,a)s=[s[0]&2,a.value];switch(s[0]){case 0:case 1:a=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;i=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(a=t.trys,a=a.length>0&&a[a.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){t.label=s[1];break}if(s[0]===6&&t.label<a[1]){t.label=a[1];a=s;break}if(a&&t.label<a[2]){t.label=a[2];t.ops.push(s);break}if(a[2])t.ops.pop();t.trys.pop();continue}s=n.call(e,t)}catch(o){s=[6,o];i=0}finally{r=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-957e4f08.system.js"],(function(e){"use strict";var n,t,r,i;return{setters:[function(e){n=e.r;t=e.c;r=e.h;i=e.H}],execute:function(){var a=':host{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;font-family:"Nunito Sans", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:0.875rem}:host .banner__holder{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;width:100%;min-height:40px;color:#f8fbfb;background:#c226fb}:host .banner__holder--align--left{-ms-flex-pack:start;justify-content:flex-start}:host .banner__holder--align--right{-ms-flex-pack:end;justify-content:flex-end}:host .banner__holder--warning{background-color:#e7edf4;color:#505f79;font-weight:600}:host .banner__holder--warning bds-icon{color:#f6a721}:host .banner__holder--system{font-weight:400}@media (max-width: 780px){:host .banner__holder{padding:16px}}@media (min-width: 780px){:host .banner__holder{padding:0 16px}}:host .banner__content{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}:host .banner__content--left{-ms-flex-pack:start;justify-content:flex-start}:host .banner__content--center{-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}:host .banner__content--right{-ms-flex-pack:start;justify-content:flex-start}@media (max-width: 780px){:host .banner__content{display:inline;-webkit-box-sizing:border-box;box-sizing:border-box}}:host .banner__content .icon_warning{padding-right:8px}:host .banner__action{cursor:pointer;display:-ms-flexbox;display:flex}.space_left{display:-ms-flexbox;display:flex}:host(.banner--hide){display:none}';var s=e("bds_banner",function(){function e(e){var r=this;n(this,e);this.bdsBannerClose=t(this,"bdsBannerClose",7);this.visible=true;this.bannerAlign="center";this.variant="system";this.close=function(){r.bdsBannerClose.emit();r.visible=false}}e.prototype.toggle=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.visible=!this.visible;return[2]}))}))};e.prototype.render=function(){var e;return r(i,{class:{banner:true,"banner--hide":!this.visible}},r("div",{class:(e={banner__holder:true},e["banner__holder--align--"+this.bannerAlign]=true,e["banner__holder--"+this.variant]=true,e)},this.variant!=="warning"&&r("div",{class:"space_left"}),r("div",{class:{banner__content:true}},this.variant==="warning"&&r("bds-icon",{class:"icon_warning",theme:"solid",size:"large",name:"warning"}),r("slot",null)),this.variant!=="warning"&&r("div",{class:"banner__action",onClick:this.close},r("bds-icon",{name:"close"}))))};return e}());s.style=a}}}));