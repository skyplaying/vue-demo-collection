(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1017:function(t,n,e){"use strict";e.r(n);e(12);var i={name:"SubmitButton",props:{type:{type:String,default:"primary"},submit:{type:Function,default:function(){return new Promise((function(t,n){setTimeout((function(){t("TEST")}),2e3)}))}}},data:function(){return{loading:!1}},methods:{click:function(){var t=this;return this.loading=!0,this.submit().then((function(n){return t.loading=!1,n})).catch((function(n){t.loading=!1,Promise.reject(n)}))}}},u=e(46),o=Object(u.a)(i,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("el-button",t._b({attrs:{type:t.type,loading:t.loading},on:{click:t.click}},"el-button",t.$attrs,!1),[t._t("default",(function(){return[t._v("确定")]}))],2)}),[],!1,null,null,null);n.default=o.exports}}]);