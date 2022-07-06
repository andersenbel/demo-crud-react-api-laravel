(function(){"use strict";var t={651:function(t,o,e){var n=e(9242),r=e(3396);function i(t,o,e,n,i,a){const s=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(s)}var a={name:"App",components:{}},s=e(89);const d=(0,s.Z)(a,[["render",i]]);var c=d,l=(e(8937),e(6866));const u={class:"container px-4 py-5",id:"hanging-icons"},p={class:"row"},m={class:"col"};function f(t,o,e,n,i,a){const s=(0,r.up)("InputForm"),d=(0,r.up)("ToDoList");return(0,r.wg)(),(0,r.iD)("div",u,[(0,r._)("div",p,[(0,r._)("div",m,[(0,r.Wm)(s)])]),(0,r.Wm)(d)])}const h=(0,r._)("h2",{class:"pb-2 border-bottom"},"Додати нотатку",-1),T={class:"mb-3"},v=(0,r._)("label",{for:"exampleInputHeader",class:"form-label"},"Заголовок",-1),b=(0,r._)("div",{id:"nameHelp",class:"form-text"},"Заголовок нотатки є обов'язковим",-1),g={class:"mb-3"},y=(0,r._)("label",{for:"exampleInputDescription",class:"form-label"},"Зміст",-1),_=(0,r._)("button",{type:"submit",class:"btn btn-primary"},"Додати",-1);function w(t,o,e,i,a,s){return(0,r.wg)(),(0,r.iD)(r.HY,null,[h,(0,r._)("form",{onSubmit:o[2]||(o[2]=(0,n.iM)((()=>{t.storeTodoList([t.nameTodo,t.descriptionTodo]),t.nameTodo="",t.descriptionTodo=""}),["prevent"]))},[(0,r._)("div",T,[v,(0,r.wy)((0,r._)("input",{type:"name",class:"form-control",id:"exampleInputHeader","aria-describedby":"nameHelp",placeholder:"Вкажіть заголовок нотатки","onUpdate:modelValue":o[0]||(o[0]=o=>t.nameTodo=o)},null,512),[[n.nr,t.nameTodo]]),b]),(0,r._)("div",g,[y,(0,r.wy)((0,r._)("textarea",{class:"form-control",id:"exampleInputDescription",placeholder:"Вкажіть зміст нотатки","onUpdate:modelValue":o[1]||(o[1]=o=>t.descriptionTodo=o)},null,512),[[n.nr,t.descriptionTodo]])]),_],32)],64)}var x=e(6623),L={data:function(){return{nameTodo:"",descriptionTodo:""}},mounted(){},methods:(0,x.nv)(["storeTodoList"])};const D=(0,s.Z)(L,[["render",w]]);var O=D,H=e(7139);const I={key:0,class:"row g-4 py-5 row-cols-1 row-cols-lg-3"},k=["id"],S={class:"text-success ellipsis h30"},j={class:"ellipsis h50"},C=["href"],Z=["onClick"];function P(t,o,e,n,i,a){return null!==t.allTodos?((0,r.wg)(),(0,r.iD)("div",I,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.allTodos,((o,e)=>((0,r.wg)(),(0,r.iD)("div",{class:"col d-flex align-items-start",key:o.id},[(0,r._)("div",{id:"todo"+e,class:"bg-light m-1 p-3 w100"},[(0,r._)("h2",S,(0,H.zw)(o["name"]),1),(0,r._)("p",j,(0,H.zw)(o["description"]),1),(0,r._)("a",{href:"/edit/"+o["id"],class:"btn btn-primary"}," Редагувати ",8,C),(0,r._)("a",{onClick:e=>t.deleteTodo(o["id"]),class:"btn btn-danger ms-1"}," Видалити ",8,Z)],8,k)])))),128))])):(0,r.kq)("",!0)}var F={computed:(0,x.Se)(["allTodos"]),methods:(0,x.nv)(["getTodoList","deleteTodo"]),data:function(){return{todoList:null}},mounted(){this.getTodoList()}};const M=(0,s.Z)(F,[["render",P],["__scopeId","data-v-4c1ee214"]]);var E=M,U={name:"App",components:{InputForm:O,ToDoList:E}};const V=(0,s.Z)(U,[["render",f]]);var A=V;const N={class:"container px-4 py-5",id:"hanging-icons"},W={class:"row"},Y={class:"col"};function z(t,o,e,n,i,a){const s=(0,r.up)("EditForm");return(0,r.wg)(),(0,r.iD)("div",N,[(0,r._)("div",W,[(0,r._)("div",Y,[(0,r.Wm)(s)])])])}const $=(0,r._)("h2",{class:"pb-2 border-bottom"},"Додати нотатку",-1),q={class:"mb-3"},K=(0,r._)("label",{for:"exampleInputHeader",class:"form-label"},"Заголовок",-1),B=(0,r._)("div",{id:"nameHelp",class:"form-text"},"Заголовок нотатки є обов'язковим",-1),G={class:"mb-3"},J=(0,r._)("label",{for:"exampleInputDescription",class:"form-label"},"Зміст",-1),Q=(0,r._)("button",{type:"submit",class:"btn btn-primary"},"Додати",-1);function R(t,o,e,i,a,s){return(0,r.wg)(),(0,r.iD)(r.HY,null,[$,(0,r._)("form",{onSubmit:o[2]||(o[2]=(0,n.iM)(((...t)=>s.updateComplex&&s.updateComplex(...t)),["prevent"]))},[(0,r._)("div",q,[K,(0,r.wy)((0,r._)("input",{type:"name",class:"form-control",id:"exampleInputHeader","aria-describedby":"nameHelp",placeholder:"Вкажіть заголовок нотатки","onUpdate:modelValue":o[0]||(o[0]=o=>t.nameTodo=o)},null,512),[[n.nr,t.nameTodo]]),B]),(0,r._)("div",G,[J,(0,r.wy)((0,r._)("textarea",{class:"form-control",id:"exampleInputDescription",placeholder:"Вкажіть зміст нотатки","onUpdate:modelValue":o[1]||(o[1]=o=>t.descriptionTodo=o)},null,512),[[n.nr,t.descriptionTodo]])]),Q],32)],64)}var X={computed:(0,x.Se)(["currentNameTodo","currentDescriptionTodo"]),methods:{...(0,x.nv)(["getTodo","updateTodo"]),updateComplex(){this.updateTodo([this.$route.params["id"],this.nameTodo,this.descriptionTodo]),window.location.href="/"}},data:function(){return{nameTodo:"",descriptionTodo:""}},mounted(){this.getTodo(this.$route.params["id"])},watch:{currentNameTodo(t){this.nameTodo=t},currentDescriptionTodo(t){this.descriptionTodo=t}}};const tt=(0,s.Z)(X,[["render",R]]);var ot=tt,et={name:"App",components:{EditForm:ot}};const nt=(0,s.Z)(et,[["render",z]]);var rt=nt;const it=[{path:"/",name:"Home",component:A},{path:"/edit/:id",name:"Edit",component:rt}],at=(0,l.p7)({history:(0,l.PO)(),routes:it});var st=at,dt=e(6265),ct=e.n(dt);class lt{static getList(){return ct().get("http://localhost:80/api/index",{}).then((t=>t.data))}static storeTodo(t,o){return ct().post("http://localhost:80/api/store",{name:t,description:o}).then((t=>t.data)).then((()=>this.getList()))}static deleteTodo(t){return ct().post("http://localhost:80/api/delete",{id:t}).then((t=>t.data)).then((()=>this.getList()))}static getTodo(t){return ct().get("http://localhost:80/api/show/"+t,{}).then((t=>t.data[0]))}static updateTodo(t,o,e){return ct().post("http://localhost:80/api/update",{id:t,name:o,description:e}).then((t=>t.data)).then((()=>this.getList()))}}var ut=new x.ZP.Store({actions:{async getTodoList(t){lt.getList().then((o=>t.commit("updateTodoList",o.data)))},async storeTodoList(t,o){lt.storeTodo(o[0],o[1]).then((o=>t.commit("updateTodoList",o.data)))},async deleteTodo(t,o){lt.deleteTodo(o).then((o=>t.commit("updateTodoList",o.data)))},async getTodo(t,o){lt.getTodo(o).then((o=>t.commit("updateCurrentTodo",o)))},async updateTodo(t,o){lt.updateTodo(o[0],o[1],o[2]).then((o=>t.commit("updateTodoList",o.data)))}},mutations:{updateTodoList(t,o){t.todos=o},updateCurrentTodo(t,o){t.currentTodo=o}},state:{todos:[],currentTodo:{}},getters:{allTodos(t){return t.todos},currentTodo(t){return t.currentTodo},currentNameTodo(t){return t.currentTodo["name"]},currentDescriptionTodo(t){return t.currentTodo["description"]}}});const pt=(0,n.ri)(c).use(ut).use(st);pt.mount("#app")}},o={};function e(n){var r=o[n];if(void 0!==r)return r.exports;var i=o[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(o,n,r,i){if(!n){var a=1/0;for(l=0;l<t.length;l++){n=t[l][0],r=t[l][1],i=t[l][2];for(var s=!0,d=0;d<n.length;d++)(!1&i||a>=i)&&Object.keys(e.O).every((function(t){return e.O[t](n[d])}))?n.splice(d--,1):(s=!1,i<a&&(a=i));if(s){t.splice(l--,1);var c=r();void 0!==c&&(o=c)}}return o}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[n,r,i]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,n){var r,i,a=n[0],s=n[1],d=n[2],c=0;if(a.some((function(o){return 0!==t[o]}))){for(r in s)e.o(s,r)&&(e.m[r]=s[r]);if(d)var l=d(e)}for(o&&o(n);c<a.length;c++)i=a[c],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(l)},n=self["webpackChunkaxios_vue"]=self["webpackChunkaxios_vue"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(651)}));n=e.O(n)})();
//# sourceMappingURL=app.8b96deca.js.map