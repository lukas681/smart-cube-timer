(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{158:function(t,e,n){var content=n(212);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("bce28922",content,!0,{sourceMap:!1})},208:function(t,e,n){"use strict";e.decode=e.parse=n(209),e.encode=e.stringify=n(210)},209:function(t,e,n){"use strict";function o(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,n,l){e=e||"&",n=n||"=";var c={};if("string"!=typeof t||0===t.length)return c;var v=/\+/g;t=t.split(e);var f=1e3;l&&"number"==typeof l.maxKeys&&(f=l.maxKeys);var m=t.length;f>0&&m>f&&(m=f);for(var i=0;i<m;++i){var d,h,x,_,C=t[i].replace(v,"%20"),O=C.indexOf(n);O>=0?(d=C.substr(0,O),h=C.substr(O+1)):(d=C,h=""),x=decodeURIComponent(d),_=decodeURIComponent(h),o(c,x)?r(c[x])?c[x].push(_):c[x]=[c[x],_]:c[x]=_}return c};var r=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},210:function(t,e,n){"use strict";var o=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,n,c){return e=e||"&",n=n||"=",null===t&&(t=void 0),"object"==typeof t?map(l(t),(function(l){var c=encodeURIComponent(o(l))+n;return r(t[l])?map(t[l],(function(t){return c+encodeURIComponent(o(t))})).join(e):c+encodeURIComponent(o(t[l]))})).join(e):c?encodeURIComponent(o(c))+n+encodeURIComponent(o(t)):""};var r=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function map(t,e){if(t.map)return t.map(e);for(var n=[],i=0;i<t.length;i++)n.push(e(t[i],i));return n}var l=Object.keys||function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}},211:function(t,e,n){"use strict";var o=n(158);n.n(o).a},212:function(t,e,n){(e=n(38)(!1)).push([t.i,"\n.stage-info {\n\tline-height: 1 !important;\n}\n.stage-info-chip {\n\tz-index: 0;\n}\n.inspection-time {\n\tfont-size: 70%;\n\topacity: 0.7;\n\tdisplay: flex;\n\tline-height: 1.5em;\n\tmargin-left: 0.5em;\n}\n.stage-info-right {\n\tmargin-left: 0.6rem;\n}\n.time-info {\n\tposition: relative;\n\talign-self: flex-end;\n}\n.time-spacer {\n\twidth: 0.8em;\n\ttext-align: center;\n\talign-self: flex-end;\n}\n",""]),t.exports=e},213:function(t,e,n){var content=n(409);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("890e5b4c",content,!0,{sourceMap:!1})},215:function(t,e,n){"use strict";n(154);var o=n(31),r=(n(28),n(29),n(13),n(26),n(151)),l=n(164),c=n.n(l),v=n(165),f=n(197),m=n.n(f),d=n(208),h=n.n(d),x={props:["replay","stages","mode","time","cross","isXcross","oll","isOll2Look","pll","pllLooks","cll","rouxBlock","scrambleText","cubeStage"],data:function(){return{}},computed:{stagesInfo:function(){var t=this;return v.a.stagesData[this.mode||"cfop"].map((function(e,n,l){var f=e.id,m=e.name,d=e.color,h=e.dark,x=e.showInspection,_=t.stages[f]||{time:null},C=0===n?null:t.stages[l[n-1].id],O=C?C.time:null,y=(_.time||t.time)-(null===O?0:O),j=null!==_.time&&0!==_.sequence.length,k=j?_.sequence.length:null,w=j?(k/(y/1e3)).toFixed(2):null,D="roux"===t.mode&&C&&C.orientation?C.orientation.down:t.cross,L=j&&x?Object(r.g)({stage:_,cross:D,previousTime:O}):{inspection:null,execution:null},T=L.inspection,S=L.execution,F=[];"unknown"===f&&(t.cross&&F.push({text:"".concat(v.a.faceColors[t.cross].name," Cross"),color:v.a.faceColors[t.cross].color,textColor:Object(r.r)(v.a.faceColors[t.cross].color)}),t.isXcross&&F.push({text:"XCross",color:"#4A148C",textColor:Object(r.r)("#4A148C")})),"oll"===f&&(t.oll&&F.push({text:t.oll.name,color:"#f5f5f5",textColor:Object(r.r)("#f5f5f5")}),t.isOll2Look&&F.push({avatar:"2",text:"Look",color:"green",textColor:"white"})),"pll"===f&&(t.pll&&F.push({text:t.pll.name,color:"#FFEE58",textColor:Object(r.r)("#FFEE58")}),t.pllLooks&&t.pllLooks.length>1&&F.push({avatar:t.pllLooks.length.toString(),text:"Look",color:"green",textColor:"white"})),"cll"===f&&t.cll&&F.push({text:t.cll.name,color:"#FFEE58",textColor:Object(r.r)("#FFEE58")});var E="--";if(_.sequence)if(0===_.sequence.length)null!==_.time&&0===_.sequence.length&&(E="(Skipped)");else if(null!==t.cross){var R=_.sequence.toText({cross:t.cross,slices:["M","S"]});if(E=R.text,null!==_.orientation){var I=[_.orientation.down,_.orientation.left].map((function(t){return Object(r.n)(t,{from:[R.orientation.left,R.orientation.down],to:["L","D"]})})),B=Object(o.a)(I,2),P=B[0],U=B[1],A=Object(r.p)({from:[U,P],to:["L","D"]});""!==A&&(E+=" ".concat(A))}if("unknown"===f){var W=Object(r.o)({from:t.cross,to:"D"});""!==W&&(E="".concat(W," ").concat(E))}}else if(null!==t.rouxBlock)if("unknown"===f){E=_.sequence.toString({rouxBlock:{side:_.orientation.left,bottomDirection:_.orientation.down},fixDirection:!1});var z=Object(r.p)({from:[_.orientation.left,_.orientation.down],to:["L","D"]});""!==z&&(E="".concat(z," ").concat(E))}else{var X=_.sequence.toText({rouxBlock:{side:C.orientation.left,bottomDirection:C.orientation.down},fixDirection:!0});if(E=X.text,null!==_.orientation){var $=[X.orientation.down,X.orientation.left,_.orientation.down,_.orientation.left].map((function(t){return Object(r.n)(t,{from:[C.orientation.left,C.orientation.down],to:["L","D"]})})),M=Object(o.a)($,4),J=M[0],K=M[1],G=M[2],H=M[3];c()("L"===K),c()("L"===H);var N=Object(r.p)({from:["L",J],to:["L",G]});""!==N&&(E+=" ".concat(N))}}else E=_.sequence.toString();return{id:f,name:m,infos:F,color:d,dark:h,sequenceText:E,time:Object(r.f)(j||t.cubeStage===f?y:0),moveCount:k,speed:w,inspectionTime:T&&Object(r.f)(T),executionTime:S&&Object(r.f)(S)}}))},replayUrl:function(){var t=this,e=this.stagesInfo.map((function(e){var n=t.stages[e.id];if(!n.sequence||0===n.sequence.length)return null;var o=m()(v.a.stagesData,[t.mode],[]).find((function(t){var e=t.id;return n.id===e})),r=o?" // ".concat(o.name):"";return"".concat(e.sequenceText).concat(r)})).filter((function(line){return null!==line})).join("\n"),n=this.scrambleText;return"https://alg.cubing.net/?".concat(h.a.encode({alg:e,setup:n}))}}},_=(n(211),n(19)),component=Object(_.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.replay?n("v-btn",{attrs:{href:t.replayUrl,color:"success",target:"_blank"}},[t._v("\n\t\tReplay on alg.cubing.net\n\t")]):t._e(),t._v(" "),n("v-layout",{attrs:{wrap:""}},t._l(t.stagesInfo,(function(e){return n("v-flex",{key:e.id,attrs:{id:e.id,xs12:"",lg4:"",xl3:""}},[n("v-card",{class:e.class,attrs:{dark:e.dark,color:e.color}},[n("v-card-title",[n("div",{style:{width:"100%"}},[n("h2",{staticClass:"display-1 font-weight-bold text-xs-left"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t\t"),t._l(e.infos,(function(e){return n("v-chip",{key:e.id,staticClass:"stage-info-chip",style:{backgroundColor:e.color.startsWith("#")?e.color:"",color:e.textColor.startsWith("#")?e.textColor:""},attrs:{color:e.color.startsWith("#")?null:e.color,"text-color":e.textColor.startsWith("#")?null:e.textColor,small:""}},[e.avatar?n("v-avatar",{staticClass:"darken-3",attrs:{color:e.color.startsWith("#")?null:e.color,"text-color":e.textColor.startsWith("#")?null:e.textColor}},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e.avatar)+"\n\t\t\t\t\t\t\t\t")]):t._e(),t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.text)+"\n\t\t\t\t\t\t\t")],1)}))],2),t._v(" "),n("v-layout",{staticClass:"stage-info headline ma-0"},[n("strong",{style:{color:"inherit"}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.time)+"\n\t\t\t\t\t\t\t")]),t._v(" "),null!==e.inspectionTime?n("small",{staticClass:"inspection-time"},[n("span",{staticClass:"time-info"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e.inspectionTime)+"\n\t\t\t\t\t\t\t\t")]),t._v(" "),n("span",{staticClass:"time-spacer"},[t._v("\n\t\t\t\t\t\t\t\t\t/\n\t\t\t\t\t\t\t\t")]),t._v(" "),n("span",{staticClass:"time-info"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e.executionTime)+"\n\t\t\t\t\t\t\t\t")])]):t._e(),t._v(" "),n("v-spacer"),t._v(" "),null!==e.moveCount?n("div",{staticClass:"subheading stage-info-right"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.moveCount)+" turns\n\t\t\t\t\t\t\t")]):t._e(),t._v(" "),null!==e.speed?n("div",{staticClass:"subheading stage-info-right"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.speed)+" tps\n\t\t\t\t\t\t\t")]):t._e()],1),t._v(" "),n("div",{staticClass:"content text-xs-left"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.sequenceText)+"\n\t\t\t\t\t\t")])],1)])],1)],1)})),1)],1)}),[],!1,null,null,null);e.a=component.exports},408:function(t,e,n){"use strict";var o=n(213);n.n(o).a},409:function(t,e,n){(e=n(38)(!1)).push([t.i,"\n.solve-details .scramble {\n\t\tmax-width: 110vmin;\n\t\tfont-size: 4vmin;\n\t\tline-height: 1.2em;\n\t\tmargin: 0.3em auto 0;\n}\n.solve-details .timer {\n\t\tfont-size: 20vmin;\n\t\tfont-weight: bold;\n\t\tline-height: 0.9em;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n}\n.solve-details .timer .v-dialog__activator {\n\t\tdisplay: flex;\n}\n.solve-details .solve-info {\n\t\tmargin: 0 0.2rem;\n}\n",""]),t.exports=e},431:function(t,e,n){"use strict";n.r(e);n(72),n(27),n(57),n(28),n(29),n(18);var o=n(3),r=n(31),l=(n(58),n(59),n(43)),c=n(169),data=(n(30),n(13),n(182),n(159)),v=n(160),f=n(151),m=n(180),d=n(215),h=n(201),x=n.n(h);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={components:{Stages:d.a},data:function(){return{solve:null,isDeleteDialogOpen:!1}},computed:{displayTime:function(){return Object(f.f)(this.solve&&this.solve.time)},moveCount:function(){return x()(Object.values(this.solve.stages),(function(t){var e=t.turns;return new m.a(e).length}))},speed:function(){return 0===this.solve.time?(0).toFixed(2):(this.moveCount/(this.solve.time/1e3)).toFixed(2)},stages:function(){var t=0;return Object.assign.apply(Object,Object(c.a)(this.solve.stages.map((function(e){return t+=e.time,Object(l.a)({},e.id,C({},e,{sequence:new m.a(e.turns.filter((function(t){var e=t.face;return f.a.includes(e)}))),time:t}))}))))},oll:function(){if(null===this.solve._ollCase)return null;var t=Object(r.a)(data.c[this.solve._ollCase],1)[0];return{index:this.solve._ollCase,name:t}},pll:function(){if(null===this.solve._pllCase)return null;var t=Object(r.a)(data.d[this.solve._pllCase],1)[0];return{index:this.solve._pllCase,name:t}},cll:function(){if(null===this.solve._cllCase)return null;var t=Object(r.a)(data.a[this.solve._cllCase],1)[0];return{index:this.solve._cllCase,name:t}}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.g)(t.$route.params.id);case 2:n=e.sent,t.solve=C({},n,{_rouxBlock:n._rouxBlockSide?{side:n._rouxBlockSide,bottom:n._rouxBlockBottom}:null}),t.scrambleText=new m.a(n.scramble).toString();case 5:case"end":return e.stop()}}),e)})))()},methods:{onClickDelete:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)(t.solve.id);case 2:t.$router.push({path:"/solves"});case 3:case"end":return e.stop()}}),e)})))()}}},y=(n(408),n(19)),component=Object(y.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"fill-height":"","grid-list-lg":"","text-xs-center":""}},[t.solve?n("v-layout",[n("v-flex",{staticClass:"solve-details"},[n("div",{staticClass:"timer"},[n("v-btn",{staticClass:"ma-0",attrs:{icon:"",flat:"",disabled:""}}),t._v("\n\t\t\t\t"+t._s(t.displayTime)+"\n\t\t\t\t"),n("v-dialog",{model:{value:t.isDeleteDialogOpen,callback:function(e){t.isDeleteDialogOpen=e},expression:"isDeleteDialogOpen"}},[n("v-btn",{staticClass:"ma-0",attrs:{slot:"activator",icon:"",flat:"",color:"red lighten-2"},slot:"activator"},[n("v-icon",{attrs:{dark:""}},[t._v("delete")])],1),t._v(" "),n("v-card",[n("v-card-text",[t._v("\n\t\t\t\t\t\t\tDelete solve?\n\t\t\t\t\t\t")]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.isDeleteDialogOpen=!1}}},[t._v("\n\t\t\t\t\t\t\t\tCancel\n\t\t\t\t\t\t\t")]),t._v(" "),n("v-btn",{attrs:{color:"red lighten-1",flat:""},on:{click:t.onClickDelete}},[t._v("\n\t\t\t\t\t\t\t\tDelete\n\t\t\t\t\t\t\t")])],1)],1)],1)],1),t._v(" "),n("div",{staticClass:"solve-infos"},[n("span",{staticClass:"solve-info headline"},[t._v("\n\t\t\t\t\t"+t._s(t.moveCount)+" turns\n\t\t\t\t")]),t._v(" "),n("span",{staticClass:"solve-info headline"},[t._v("\n\t\t\t\t\t"+t._s(t.speed)+" tps\n\t\t\t\t")])]),t._v(" "),n("div",{staticClass:"scramble"},[t._v("\n\t\t\t\t"+t._s(t.scrambleText)+"\n\t\t\t")]),t._v(" "),n("stages",{attrs:{replay:!0,stages:t.stages,mode:t.solve.mode,time:t.solve.time,cross:t.solve._crossFace,"is-xcross":t.solve._isXcross,oll:t.oll,"is-oll2look":2===t.solve._ollLooks,pll:t.pll,"pll-looks":t.solve._pllLooks,"roux-block":t.solve._rouxBlock,cll:t.cll,"scramble-text":t.scrambleText,"cube-stage":null}})],1)],1):n("v-layout",{attrs:{"align-center":"","fill-height":""}},[n("v-flex",{attrs:{"text-xs-center":""}},[n("v-progress-circular",{attrs:{size:70,indeterminate:"",color:"purple"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);