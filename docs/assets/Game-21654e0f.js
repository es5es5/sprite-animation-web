var P=Object.defineProperty;var O=(i,A,t)=>A in i?P(i,A,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[A]=t;var s=(i,A,t)=>(O(i,typeof A!="symbol"?A+"":A,t),t);import{d as Y,a as b,r as X,b as k,e as u,f as o,w as W,v as j,F as G,g as L,u as N,o as v,t as F,p as K,h as U}from"./index-bf0d1f30.js";const Q={},l={initialState:"idle",spriteWidth:128,spriteHeight:128},J=[{name:"idle",frames:5,speed:10},{name:"idle_agro",frames:3,speed:10},{name:"walk",frames:6,speed:10},{name:"walk_agro",frames:3,speed:10},{name:"sleep",frames:8,speed:10},{name:"sleep_agro",frames:3,speed:10},{name:"hawl",frames:8,speed:10},{name:"standing",frames:3,speed:10},{name:"standing_walk",frames:8,speed:10},{name:"eat",frames:8,speed:10},{name:"wait1",frames:4,speed:10},{name:"wait2",frames:1,speed:10},{name:"wait3",frames:1,speed:10},{name:"dash",frames:3,speed:10}],a={imageSrc:new URL("data:image/png;base64,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",self.location).href,padding:4,titleBarHeight:36,width:328,height:360};class M{constructor(A){s(this,"ctx");s(this,"image");s(this,"width");s(this,"height");this.ctx=A,this.image=new Image,this.image.src=a.imageSrc,this.width=a.width,this.height=a.height}draw(){this.ctx.drawImage(this.image,0,0,this.width,this.height)}}const m={imageSrc:new URL("data:image/png;base64,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",self.location).href,width:320,height:320};class D{constructor(A){s(this,"ctx");s(this,"image");this.ctx=A,this.image=new Image,this.image.src=m.imageSrc}draw(){this.ctx.drawImage(this.image,a.padding,a.titleBarHeight,m.width,m.height)}}const e={imageSrc:new URL("data:image/png;base64,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",self.location).href,width:56,height:56,paddingHorizontal:4,paddingVertical:8};function f(i){return a.padding+e.paddingHorizontal+(e.width+e.paddingHorizontal)*(i-1)+10}function h(){return a.titleBarHeight+e.paddingVertical}class V{constructor(A,t){s(this,"ctx");s(this,"image");s(this,"index");s(this,"startX");s(this,"startY");s(this,"isActive",!1);s(this,"isHeld",!1);s(this,"isStatic",!1);return this.ctx=A,this.image=new Image,this.image.src=e.imageSrc,this.image.width=e.width,this.image.height=e.height,this.index=t,this.startX=f(this.index),this.startY=h(),this}draw(){this.ctx.drawImage(this.image,this.isActive?e.width:0,e.height*(this.index-1),e.width,e.height,this.startX,this.startY,e.width,e.height),this.isStatic=!1}drawStatic(){this.ctx.drawImage(this.image,0,e.height*(this.index-1),e.width,e.height,f(this.index),h(),e.width,e.height),this.isStatic=!0}setActive(A){if(!this.isStatic&&!this.isHeld)if(A.offsetX>this.startX&&A.offsetX<this.startX+e.width&&A.offsetY>this.startY&&A.offsetY<this.startY+e.height)this.isActive=!0;else{this.isActive=!1,A.preventDefault;return}}setDragging(A,t){this.isStatic||A>f(this.index)&&A<f(this.index)+e.width&&t>h()&&t<h()+e.height&&(this.isHeld=!0,this.isActive=!0)}setDragged(A,t){this.startX=A,this.startY=t}}const x=i=>(K("data-v-18bff92e"),i=i(),U(),i),T=x(()=>o("canvas",{id:"canvas1"},null,-1)),q={class:"controls"},y=x(()=>o("label",{for:"animations"},"Choose Animation:",-1)),Z=["value"],_=Y({__name:"Game",setup(i){let A=b();const t=X({sprite:{width:0,height:0},init:{state:"idle",x:0,y:0},current:{state:"idle",x:0,y:0}});return k(()=>{A.setCanvas(document.getElementById("canvas1"));const r=A.getCanvas,E=A.getCtx;r.width=a.width,r.height=a.height,r.addEventListener("pointermove",g=>{A.getMenuList.forEach(I=>{I.setActive(g)}),A.getMenuList.some(I=>I.isActive)?A.setCursor("pointer"):A.setCursor("default")}),r.addEventListener("pointerdown",g=>{console.log("pointerdown",g)}),r.addEventListener("pointerup",g=>{console.log("pointerup",g)});const n=new M(E),z=new D(E);for(let g=1;g<=5;g++)A.addMenuList(new V(E,g));const S=new Image;S.src=new URL("/assets/cat-1fdde7b2.png",self.location).href;const C=l.spriteWidth,d=l.spriteHeight;t.init.x=a.width/2-C/2,t.init.y=a.height-d-a.titleBarHeight+a.padding*2,t.init.state=l.initialState,t.current.x=t.init.x,t.current.y=t.init.y,t.current.state=t.init.state;let w=0;J.forEach((g,I)=>{let c={loc:[]};for(let B=0;B<g.frames;B++){let H=B*C,R=I*d;c.loc.push({x:H,y:R})}Q[g.name]=c,Q[g.name].speed=g.speed});function p(){let g=Math.floor(w/Q[t.current.state].speed)%Q[t.current.state].loc.length,I=C*g,c=Q[t.current.state].loc[g].y;n.draw(),z.draw(),A.getMenuList.forEach(B=>{B.drawStatic(),B.draw()}),E==null||E.drawImage(S,I,c,C,d,t.current.x,t.current.y,C,d),w++,requestAnimationFrame(p)}p()}),(r,E)=>(v(),u("div",null,[T,o("div",q,[y,W(o("select",{name:"animations",id:"animations","onUpdate:modelValue":E[0]||(E[0]=n=>t.current.state=n)},[(v(!0),u(G,null,L(N(J),n=>(v(),u("option",{value:n.name},F(n.name),9,Z))),256))],512),[[j,t.current.state]])])]))}});const $=(i,A)=>{const t=i.__vccOpts||i;for(const[r,E]of A)t[r]=E;return t},eA=$(_,[["__scopeId","data-v-18bff92e"]]);export{eA as default};
