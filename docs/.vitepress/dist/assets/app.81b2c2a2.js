import{W as s,ah as p,ai as i,aj as u,ak as c,al as l,am as f,an as d,ao as m,ap as h,aq as A,Z as g,d as P,u as v,j as _,A as y,ar as C,as as w,at as E,au as R}from"./chunks/framework.a1253909.js";import{t as b}from"./chunks/theme.303fe780.js";const j={...b};function r(e){if(e.extends){const t=r(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const o=r(j),D=P({name:"VitePressApp",setup(){const{site:e}=v();return _(()=>{y(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),C(),w(),E(),o.setup&&o.setup(),()=>R(o.Layout)}});async function O(){const e=T(),t=S();t.provide(i,e);const a=u(e.route);return t.provide(c,a),t.component("Content",l),t.component("ClientOnly",f),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:t,router:e,siteData:d}),{app:t,router:e,data:a}}function S(){return m(D)}function T(){let e=s,t;return h(a=>{let n=A(a);return n?(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),s&&(e=!1),g(()=>import(n),[])):null},o.NotFound)}s&&O().then(({app:e,router:t,data:a})=>{t.go().then(()=>{p(t.route,a.site),e.mount("#app")})});export{O as createApp};
