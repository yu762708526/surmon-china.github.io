import{i as R,G as a,E as c,O as s,Q as w,R as P,y as v,D as b,F as d,S as r,T as l,U as N,V as k,W as M,M as S,N as U,X as H,Y as u}from"./vendor.ab7157f0.js";import{a as T,b as C,c as F,T as I,C as L}from"./index.0c299dc6.js";import{_ as G}from"./plugin-vue_export-helper.21dcd24c.js";function we(e){return`${e} | Homepage`}function Pe(e){return`${e} GitHub homepage`}function Te(e){return[`${e} examples`,`How to use ${e}`]}function B(e){return e>1e3?`${parseFloat((e/1e3).toFixed(2))}k`:String(e)}function D(e){return String(e).replace(/.{1,3}(?=(.{3})+$)/g,"$&,")}function O(e){return`https://www.npmjs.com/package/${e}`}function z(e){return`https://github.com/${T}/${e}`}function Ge(e,n){return`https://github.com/${T}/${e}/tree/source${n}`}const V=R({name:"loading"}),j={class:"loading"},E={class:"animation"};function K(e,n,p,h,g,m){return a(),c("div",j,[s("div",E,[(a(),c(w,null,P(5,i=>s("div",{key:i})),64))])])}var x=G(V,[["render",K],["__scopeId","data-v-684e37cb"]]);const q=R({name:"navbar",components:{Loading:x},props:{repository:{type:String,required:!0}},setup(){const e=C(),n=F(),p=v(()=>n.initialized),h=v(()=>n.githubOwnRepositories),g=_=>Boolean(n.getRepositoryNPMPackage(_)),m=_=>{const $=n.getRepositoryNPMPackage(_);if(!$)return"-";const y=n.npmPackagesDownloadsMap.get($.package.name);return y?D(y):"-"},i=e.theme,f=e.toggle,t=v(()=>({[I.Light]:"icon-sun",[I.Dark]:"icon-moon"})[i.value]);return{CONFIG:L,themeIcon:t,toggleTheme:f,ownRepositories:h,initialized:p,isNPMPackage:g,getNPMDownloads:m,getNPMHomepageURL:O,getGitHubRepositoryURL:z,countToK:B}}}),o=e=>(S("data-v-e125cf66"),e=e(),U(),e),A={class:"navbar"},Q={class:"container"},W={class:"left"},X=o(()=>s("i",{class:"iconfont icon-github"},null,-1)),Y={class:"text"},J=o(()=>s("span",{class:"dot"},"\u2022",-1)),Z=o(()=>s("span",{class:"text"},"Sponsor",-1)),ee={class:"right"},se={class:"item project"},te=o(()=>s("span",{class:"text"},"Projects",-1)),oe=o(()=>s("i",{class:"iconfont icon-arrow-down"},null,-1)),ne={class:"projects"},ae={class:"container"},ie={key:1,class:"list"},ce={class:"title"},re=o(()=>s("i",{class:"iconfont icon-link-external"},null,-1)),le={key:0,class:"archived",title:"This repository has been archived. It is now read-only."},de=o(()=>s("span",{class:"icon"},"\u26A0\uFE0F",-1)),_e=o(()=>s("span",{class:"text"},"archived",-1)),ue=[de,_e],pe=["title"],he={class:"meta"},ge={class:"left"},me=o(()=>s("i",{class:"iconfont icon-star"},null,-1)),fe=o(()=>s("i",{class:"iconfont icon-npm"},null,-1)),ve={key:1,class:"item"},ke={class:"right"},$e=o(()=>s("span",{class:"text"},"HP",-1)),ye=o(()=>s("i",{class:"iconfont icon-link-external"},null,-1));function be(e,n,p,h,g,m){const i=b("ulink"),f=b("loading");return a(),c("header",A,[s("div",Q,[s("div",W,[d(i,{class:"item",href:e.CONFIG.GITHUB_USER_URL},{default:r(()=>[X,s("span",Y,l(e.CONFIG.GITHUB_UID),1)]),_:1},8,["href"]),J,d(i,{class:"item",href:e.CONFIG.GITHUB_SPONSORS_URL},{default:r(()=>[Z]),_:1},8,["href"])]),s("div",ee,[s("button",{class:"item theme",onClick:n[0]||(n[0]=(...t)=>e.toggleTheme&&e.toggleTheme(...t))},[s("i",{class:N(["iconfont",e.themeIcon])},null,2)]),s("div",se,[te,oe,s("div",ne,[s("div",ae,[d(M,{name:"module",mode:"out-in"},{default:r(()=>[e.initialized?(a(),c("ul",ie,[(a(!0),c(w,null,P(e.ownRepositories,t=>(a(),c("li",{class:N(["item",{activated:t.name===e.repository}]),key:t.name},[s("div",ce,[d(i,{class:"link",href:e.getGitHubRepositoryURL(t.name),title:t.name},{default:r(()=>[H(l(t.name),1)]),_:2},1032,["href","title"]),re,t.archived?(a(),c("span",le,ue)):u("",!0)]),s("div",{class:"description",title:t.description},l(t.description||"-"),9,pe),s("div",he,[s("div",ge,[d(i,{class:"item",href:e.getGitHubRepositoryURL(t.name),title:`GitHub stars: ${t.stargazers_count}`},{default:r(()=>[me,s("span",null,l(e.countToK(t.stargazers_count)),1)]),_:2},1032,["href","title"]),e.isNPMPackage(t.name)?(a(),k(i,{key:0,class:"item npm",href:e.getNPMHomepageURL(t.name),title:`NPM downloads: ${t.stargazers_count}`},{default:r(()=>[fe,s("span",null,l(e.getNPMDownloads(t.name)),1)]),_:2},1032,["href","title"])):u("",!0),t.language?(a(),c("span",ve,l(t.language),1)):u("",!0)]),s("div",ke,[t.homepage?(a(),k(i,{key:0,class:"homepage",href:t.homepage},{default:r(()=>[$e,ye]),_:2},1032,["href"])):u("",!0)])])],2))),128))])):(a(),k(f,{key:0,class:"loading"}))]),_:1})])])])])])])}var Me=G(q,[["render",be],["__scopeId","data-v-e125cf66"]]);export{Me as N,Te as a,Pe as b,z as c,Ge as d,B as e,O as f,we as g,D as n};
