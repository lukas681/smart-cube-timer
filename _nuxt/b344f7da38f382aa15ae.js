(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{207:function(t,e,n){var content=n(407);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("09ffd1bf",content,!0,{sourceMap:!1})},406:function(t,e,n){"use strict";var r=n(207);n.n(r).a},407:function(t,e,n){(e=n(38)(!1)).push([t.i,"\ntr {\n\theight: 32px !important;\n}\ntd, th {\n\tpadding: 0 0 0 8px !important;\n\theight: 32px !important\n}\ntd:last-child, th:last-child {\n\tpadding: 0 8px !important;\n}\n.row-header {\n\twidth: 100px;\n\twhite-space: nowrap;\n}\n",""]),t.exports=e},430:function(t,e,n){"use strict";n.r(e);n(154),n(26),n(18);var r=n(3),c=n(31),o=n(151),l=n(160),x=n(159),d={data:function(){return{headers:[{text:"Case",align:"left",value:"index"},{text:"Count",align:"right",value:"count"},{text:"Time",align:"right",value:"averageTime"},{text:"Insp.",align:"right",value:"averageInspection"},{text:"Exec.",align:"right",value:"averageExecution"}],stats:[],cases:x.d.map((function(t){var e=Object(c.a)(t,2);return{name:e[0],id:e[1],count:null,averageTime:0,averageTimeText:"",averageInspection:0,averageInspectionText:"",averageExecution:0,averageExecutionText:""}}))}},computed:{},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.f)();case 2:t.stats=e.sent,t.cases=t.cases.map((function(e,n){var r=e.name,c=e.id,l=t.stats.find((function(s){return s.id===n})),x=l?l.times/l.count:1/0,d=l?l.inspectionTimes/l.count:1/0,v=l?l.executionTimes/l.count:1/0;return{index:n,name:r,id:c,count:l?l.count:0,averageTime:x,averageTimeText:Object(o.f)(x),averageInspection:d,averageInspectionText:Object(o.f)(d),averageExecution:v,averageExecutionText:Object(o.f)(v)}}));case 4:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"PLL Stats"}}},v=(n(406),n(19)),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"","grid-list-md":"","text-xs-center":""}},[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.cases,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[n("th",{staticClass:"row-header text-xs-left"},[null===e.item.id?n("span",[t._v(t._s(e.item.name))]):n("a",{attrs:{href:"http://algdb.net/puzzle/333/pll/"+e.item.id,target:"_blank",rel:"noopener"}},[t._v("\n\t\t\t\t\t"+t._s(e.item.name)+"\n\t\t\t\t")])]),t._v(" "),n("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.count))]),t._v(" "),n("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.averageTimeText))]),t._v(" "),n("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.averageInspectionText))]),t._v(" "),n("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.averageExecutionText))])]}}])})],1)}),[],!1,null,null,null);e.default=component.exports}}]);