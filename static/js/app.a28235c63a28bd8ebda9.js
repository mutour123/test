webpackJsonp([1],{"0Oho":function(t,s){},"3daJ":function(t,s){},"9Q7+":function(t,s){},Docj:function(t,s){},MAnR:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("VCXJ"),a={name:"app",data:function(){return{actionList:["今日计划","分享圈","我的"],action:0}},methods:{initAction:function(){console.log("dajiahao"),this.action=store.get("action")?store.get("action"):0},showAdd:function(t){var s=t.currentTarget,e=$(s).children(".add-week-plan"),n=$(s).children(".add-day-plan");e.toggleClass("changeBtnWeek"),n.toggleClass("changeBtnDay")},changeAction:function(t){this.action=t},getDayTaskList:function(){var t=store.get("username")?store.get("username"):"";if(""==t)return!1;var s=store.get("dayTaskList")?store.get("dayTaskList"):{};s.list.length&&this.$http.post("/api/addshare",{shareList:s,shareUser:t}).then(function(t){1==t.data.ok&&console.log("成功")}).catch(function(t){console.log(t)})}},mounted:function(){this.initAction()},watch:{action:function(t){store.set("action",this.action)}}},i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("el-container",[e("el-header",[t._v(t._s(t.actionList[t.action])),e("span",{staticClass:"share",on:{click:t.getDayTaskList}},[t._v("分享")])]),t._v(" "),e("el-main",[e("keep-alive",[e("transition",{attrs:{mode:"out-in","enter-active-class":"animated bounceInLeft"}},[e("router-view")],1)],1)],1),t._v(" "),e("el-footer",[e("router-link",{attrs:{to:"/day"},nativeOn:{click:function(s){t.changeAction(0)}}},[t._v("今日计划")]),t._v(" "),e("router-link",{attrs:{to:"/history"},nativeOn:{click:function(s){t.changeAction(1)}}},[t._v("历史")]),t._v(" "),e("router-link",{attrs:{to:"/mine"},nativeOn:{click:function(s){t.changeAction(2)}}},[t._v("我的")])],1)],1)],1)},staticRenderFns:[]},o=e("8AGX")(a,i,!1,function(t){e("9Q7+")},null,null).exports,r=e("zO6J"),c={name:"HelloWorld",data:function(){return{taskInput:"",dayTaskList:{},nowTargetE:""}},methods:{addTask:function(){if(""==this.taskInput)return!1;this.dayTaskList.list.push({content:this.taskInput,state:!1}),this.taskInput=""},finished:function(t){this.dayTaskList.list[t].state=!this.dayTaskList.list[t].state,store.set("dayTaskList",this.dayTaskList)},deleteTask:function(t){this.dayTaskList.list.splice(t,1),store.set("dayTaskList",this.dayTaskList)},initTaskList:function(){this.dayTaskList=store.get("dayTaskList")?store.get("dayTaskList"):{time:(new Date).getTime(),list:[]}},showDetail:function(t){t.stopPropagation();var s=t.currentTarget,e=$(s).children(".detail");this.nowTargetE=e,e.toggle(),$(".mask").toggle()},hiddenMask:function(){$(".mask").toggle(),this.nowTargetE.toggle()},showSlideToggle:function(t){var s=t.currentTarget;$(s).children(".remarks").slideToggle()},showSlideToggle1:function(t){var s=t.currentTarget;$(s).parent().parent().parent().children(".remarks").slideToggle()},addHistory:function(){if((new Date).getDate()!=new Date(this.dayTaskList.time).getDate()){var t=store.get("historyTaskList")?store.get("historyTaskList"):[];0!=this.dayTaskList.list.length&&(t.push(this.dayTaskList),store.set("historyTaskList",t),store.remove("dayTaskList"),this.dayTaskList={})}}},mounted:function(){this.initTaskList(),this.addHistory()},watch:{"dayTaskList.list":function(t){store.set("dayTaskList",this.dayTaskList)}}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"home"},[e("div",{staticClass:"add-task-content"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.taskInput,expression:"taskInput"}],staticClass:"task-input",attrs:{type:"text",placeholder:"请输入内容"},domProps:{value:t.taskInput},on:{input:function(s){s.target.composing||(t.taskInput=s.target.value)}}}),t._v(" "),e("el-button",{staticClass:"task-btn",on:{click:t.addTask}},[t._v("确定")])],1),t._v(" "),e("div",{staticClass:"task-list"},[e("transition-group",{staticClass:"list-group test",attrs:{name:"bounceLeft",tag:"ul"}},t._l(t.dayTaskList.list,function(s,n){return e("li",{key:n,on:{click:function(s){t.showSlideToggle(s)}}},[e("div",{staticClass:"index"},[t._v(t._s(n+1))]),t._v(" "),e("div",{staticClass:"task",class:{addlinethrough:s.state}},[t._v(t._s(s.content))]),t._v(" "),e("div",{staticClass:"more",on:{click:function(s){t.showDetail(s)}}},[t._v("."),e("br"),t._v("."),e("br"),t._v(".\n                    "),e("div",{staticClass:"detail"},[e("div",{staticClass:"btn",on:{click:function(s){t.deleteTask(n)}}},[t._v("删除")]),t._v(" "),e("div",{staticClass:"btn",on:{click:function(s){t.finished(n)}}},[t._v("完成")]),t._v(" "),e("div",{staticClass:"btn",on:{click:function(s){t.showSlideToggle1(s)}}},[t._v("备注")])])]),t._v(" "),e("div",{staticClass:"remarks"},[t._v("\n                    备注：这次的完成度为70%，实在太累先放一放\n                ")])])}))],1),t._v(" "),e("div",{staticClass:"mask",on:{click:t.hiddenMask}})])},staticRenderFns:[]},u=e("8AGX")(c,l,!1,function(t){e("YcOg")},"data-v-6f0e61be",null).exports,d={name:"week",data:function(){return{taskInput:"",weekTaskList:[],nowTargetE:""}},methods:{addTask:function(){if(""==this.taskInput)return!1;this.weekTaskList.push({content:this.taskInput,state:!1}),this.taskInput="",store.set("weekTaskList",this.weekTaskList)},finished:function(t){this.weekTaskList[t].state=!this.weekTaskList[t].state,store.set("weekTaskList",this.weekTaskList)},deleteTask:function(t){this.weekTaskList.splice(t,1),store.set("weekTaskList",this.weekTaskList)},initTaskList:function(){this.weekTaskList=store.get("weekTaskList")?store.get("weekTaskList"):[]},showDetail:function(t){t.stopPropagation();var s=t.currentTarget,e=$(s).children(".detail");this.nowTargetE=e,e.toggle(),$(".mask").toggle()},hiddenMask:function(){$(".mask").toggle(),this.nowTargetE.toggle()},showSlideToggle:function(t){var s=t.currentTarget;$(s).children(".remarks").slideToggle()},showSlideToggle1:function(t){var s=t.currentTarget;$(s).parent().parent().parent().children(".remarks").slideToggle()}},mounted:function(){this.initTaskList()}},m={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"week"},[e("div",{staticClass:"add-task-content"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.taskInput,expression:"taskInput"}],staticClass:"task-input",attrs:{type:"text",placeholder:"请输入内容"},domProps:{value:t.taskInput},on:{input:function(s){s.target.composing||(t.taskInput=s.target.value)}}}),t._v(" "),e("el-button",{staticClass:"task-btn",on:{click:t.addTask}},[t._v("确定")])],1),t._v(" "),e("div",{staticClass:"task-list"},[e("transition-group",{staticClass:"list-group test",attrs:{name:"bounceLeft",tag:"ul"}},t._l(t.weekTaskList,function(s,n){return e("li",{key:n,on:{click:function(s){t.showSlideToggle(s)}}},[e("div",{staticClass:"index"},[t._v(t._s(n+1))]),t._v(" "),e("div",{staticClass:"task",class:{addlinethrough:s.state}},[t._v(t._s(s.content))]),t._v(" "),e("div",{staticClass:"more",on:{click:function(s){t.showDetail(s)}}},[t._v("."),e("br"),t._v("."),e("br"),t._v(".\n                    "),e("div",{staticClass:"detail"},[e("div",{staticClass:"btn",on:{click:function(s){t.deleteTask(n)}}},[t._v("删除")]),t._v(" "),e("div",{staticClass:"btn",on:{click:function(s){t.finished(n)}}},[t._v("完成")]),t._v(" "),e("div",{staticClass:"btn",on:{click:function(s){t.showSlideToggle1(s)}}},[t._v("备注")])])]),t._v(" "),e("div",{staticClass:"remarks"},[t._v("\n                    备注：这次的完成度为70%，实在太累先放一放\n                ")])])}))],1),t._v(" "),e("div",{staticClass:"mask",on:{click:t.hiddenMask}})])},staticRenderFns:[]},h=e("8AGX")(d,m,!1,function(t){e("Docj")},"data-v-4b9ecb7a",null).exports,p={name:"history",data:function(){return{historyTaskList:[]}},methods:{getHisttory:function(){this.historyTaskList=store.get("historyTaskList")?store.get("historyTaskList"):[],this.historyTaskList.reverse()}},mounted:function(){this.getHisttory()}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"history"},[e("ul",t._l(t.historyTaskList,function(s){return e("li",[e("div",{staticClass:"time"},[e("div",{staticClass:"cirle"}),t._v(t._s(new Date(s.time).getFullYear()+"年"+(new Date(s.time).getMonth()+1)+"月"+new Date(s.time).getDate()))]),t._v(" "),e("ul",{staticClass:"task-list"},t._l(s.list,function(s,n){return e("li",{staticClass:"task"},[e("span",{staticClass:"index"},[t._v(t._s(n+1))]),t._v(" "),e("span",{class:{addlinethrough:s.state}},[t._v(" "+t._s(s.content))])])}))])}))])},staticRenderFns:[]},g=e("8AGX")(p,v,!1,function(t){e("0Oho")},"data-v-dabe8778",null).exports,k={name:"share",data:function(){return{shareList:[],comment0InputconIsShow:!1,comment1InputconIsShow:!1,comment0Input:"好好学习，天天向上",comment1Input:"你也要好好学习，天天向上",grade:0,targetP:"",targetParent:""}},methods:{getShareList:function(){var t=this;this.$http.get("/api/getshare").then(function(s){t.shareList=s.data.reverse()}).catch(function(t){console.log(t)})},addyes:function(){console.log("你点了一个赞")},addComment:function(){this.comment0InputconIsShow=!this.comment0InputconIsShow},addCommentInput:function(t,s){var e=this;if(e.comment0InputconIsShow=!e.comment0InputconIsShow,this.comment0Input){var n={commentPeo:store.get("username"),toPeo:s,comment:e.comment0Input,grade:0,index:t};this.$http.post("/api/addcomment",n).then(function(t){1==t.data.ok&&e.getShareList()}).catch(function(t){console.log(t)})}},addComment1Input:function(t){this.comment1InputconIsShow=!this.comment1InputconIsShow;var s=this;if(this.comment1Input){var e={commentPeo:store.get("username"),toPeo:s.targetP,comment:s.comment1Input,grade:1,index:t};this.$http.post("/api/addcomment",e).then(function(t){1==t.data.ok&&s.getShareList()}).catch(function(t){console.log(t)})}},addHuifu:function(t){this.comment1InputconIsShow=!this.comment1InputconIsShow;var s=t.currentTarget;this.targetParent=$(s).parent();var e=$(s).children(".targ");this.targetP=e.text()}},mounted:function(){this.getShareList()}},f={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"share"},t._l(t.shareList,function(s){return n("div",{staticClass:"aPage"},[n("div",{staticClass:"header"},[t._m(0,!0),t._v(" "),n("div",{staticClass:"title"},[n("div",{staticClass:"name"},[t._v(t._s(s.shareUser))]),t._v(" "),n("div",{staticClass:"time"},[t._v(t._s(new Date(s.shareList.time).getFullYear()+"年"+(new Date(s.shareList.time).getMonth()+1)+"月"+new Date(s.shareList.time).getDate()+"日"))])])]),t._v(" "),n("div",{staticClass:"content"},[n("ul",[n("li",{staticClass:"task-con"},[n("ul",t._l(s.shareList.list,function(s,e){return n("li",{staticClass:"task"},[t._v("\n                            "+t._s(e+1+"，"+s.content)+"\n                        ")])}))])])]),t._v(" "),n("div",{staticClass:"dianzhan"},[n("ul",{staticClass:"dianzancon"},[n("li",{staticClass:"dianzhanList",on:{click:t.addyes}},[n("img",{staticClass:"dianzhanPic",attrs:{src:e("Pdo2"),alt:""}})]),t._v(" "),n("li",{staticClass:"dianzhanList",on:{click:t.addComment}},[n("img",{staticClass:"dianzhanPic1",attrs:{src:e("oNNj"),alt:""}})])]),t._v(" "),n("div",{staticClass:"commentInputcon",class:{commentInputconShow:t.comment0InputconIsShow}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.comment0Input,expression:"comment0Input"}],staticClass:"commentInput",attrs:{type:"text",placeholder:"评论"},domProps:{value:t.comment0Input},on:{input:function(s){s.target.composing||(t.comment0Input=s.target.value)}}}),t._v(" "),n("div",{staticClass:"commentBtn",on:{click:function(e){t.addCommentInput(s.index,s.shareUser)}}},[t._v("提交")])]),t._v(" "),n("div",{staticClass:"commentInputcon",class:{commentInputconShow:t.comment1InputconIsShow}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.comment1Input,expression:"comment1Input"}],staticClass:"commentInput",attrs:{type:"text",placeholder:"评论"},domProps:{value:t.comment1Input},on:{input:function(s){s.target.composing||(t.comment1Input=s.target.value)}}}),t._v(" "),n("div",{staticClass:"commentBtn",on:{click:function(e){t.addComment1Input(s.index)}}},[t._v("提交")])])]),t._v(" "),n("div",{staticClass:"comment"},[n("ul",t._l(s.comment,function(s){return n("li",{staticClass:"commentList",on:{click:function(s){t.addHuifu(s)}}},[n("span",{staticClass:"username targ"},[t._v(t._s(s.commentPeo))]),t._v(" "),s.grade?n("span",[t._v("回复")]):t._e(),t._v(" "),s.grade?n("span",{staticClass:"username"},[t._v(t._s(s.toPeo))]):t._e(),t._v(":\n                    "),n("span",[t._v(t._s(s.comment))])])}))])])}))},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"pic-con"},[s("img",{staticClass:"pic",attrs:{src:e("ZBJ4"),alt:""}})])}]},_=e("8AGX")(k,f,!1,function(t){e("UAaZ")},"data-v-afae5dbc",null).exports,w={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"mine"},[s("ul",[s("router-link",{attrs:{tag:"li",to:"/history"}},[this._v("我的历史")]),this._v(" "),s("router-link",{attrs:{tag:"li",to:"/login"}},[this._v("登录")]),this._v(" "),s("router-link",{attrs:{tag:"li",to:"/resign"}},[this._v("注册")])],1)])},staticRenderFns:[]},C=e("8AGX")({name:"mine"},w,!1,function(t){e("u50/")},"data-v-1cdddab3",null).exports,T={name:"login",data:function(){return{username:"念念公子",password:"123456"}},methods:{login:function(){var t=this;if(!this.username||!this.password)return!1;this.$http.post("/api/login",{username:this.username,password:this.password}).then(function(s){1===s.data.state&&(store.set("username",t.username),t.$router.push("/day"))}).catch(function(t){console.log(t)})}}},L={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"login"},[e("div",{staticClass:"inputCon"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"username",attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"password",attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),t._v(" "),e("button",{staticClass:"loginBtn",on:{click:t.login}},[t._v("登录")]),t._v(" "),e("router-link",{staticClass:"noNober",attrs:{to:"/resign"}},[t._v("没有账号？")])],1)},staticRenderFns:[]},I=e("8AGX")(T,L,!1,function(t){e("nD8r")},"data-v-1080ae68",null).exports,y={name:"resign",data:function(){return{username:"念念公子",password:"123456",surePassword:"123456"}},methods:{resign:function(){if(!(this.username&&this.password&&this.surePassword&&this.password===this.surePassword))return!1;this.$http.post("/api/adduser",{username:this.username,password:this.password}).then(function(t){console.log(t.data)}).catch(function(t){console.log(t)})}}},P={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"resign"},[e("div",{staticClass:"inputCon"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"username",attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"password",attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.surePassword,expression:"surePassword"}],staticClass:"password",attrs:{type:"password",placeholder:"请确认密码"},domProps:{value:t.surePassword},on:{input:function(s){s.target.composing||(t.surePassword=s.target.value)}}})]),t._v(" "),e("button",{staticClass:"loginBtn",on:{click:t.resign}},[t._v("登录")]),t._v(" "),e("router-link",{staticClass:"noNober",attrs:{to:"/resign"}},[t._v("已有账号？")])],1)},staticRenderFns:[]},b=e("8AGX")(y,P,!1,function(t){e("MAnR")},"data-v-fd080d64",null).exports;n.default.use(r.a);var x=new r.a({routes:[{path:"/",redirect:"/day"},{path:"/week",name:"Week",component:h},{path:"/history",name:"History",component:g},{path:"/day",name:"Day",component:u},{path:"/share",name:"Share",component:_},{path:"/mine",name:"Mine",component:C},{path:"/login",name:"Login",component:I},{path:"/resign",name:"Resign",component:b}]}),S=e("i9nl"),D=e.n(S),A=(e("c3k3"),e("YZSk"),e("3daJ"),e("9rMa")),N={changeIsWeek:function(t){(0,t.commit)("changeIsWeek",bool)}},E={state:{isWeek:!1,taskList:[]},mutations:{changeIsWeek:function(t,s){t.isWeek=s}}};e("UjVw");n.default.use(A.a);var M=new A.a.Store({actions:N,modules:{mutations:E}}),R=e("2sCs"),F=e.n(R);n.default.config.productionTip=!1,n.default.use(r.a),n.default.use(D.a),n.default.prototype.$http=F.a;new n.default({el:"#app",router:x,store:M,template:"<App/>",components:{App:o}})},Pdo2:function(t,s,e){t.exports=e.p+"static/img/timg.0d5d89b.jpg"},UAaZ:function(t,s){},UjVw:function(t,s){},YZSk:function(t,s){},YcOg:function(t,s){},ZBJ4:function(t,s,e){t.exports=e.p+"static/img/logo.4b2b2cc.png"},c3k3:function(t,s){},nD8r:function(t,s){},oNNj:function(t,s,e){t.exports=e.p+"static/img/pinglun.dea5b9f.png"},"u50/":function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.a28235c63a28bd8ebda9.js.map