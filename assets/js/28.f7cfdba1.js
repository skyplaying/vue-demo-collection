(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1020:function(l,o,t){"use strict";t.r(o);t(398);var s=t(569),e={props:{data:{type:Array,default:null},probeType:{type:Number,default:2},click:{type:Boolean,default:!0},getScrollPos:{type:Boolean,default:!1},pullingDown:{type:Boolean,default:!1},pullingUp:{type:Boolean,default:!1}},mounted:function(){var l=this;setTimeout((function(){l._initScroll()}),20)},methods:{_initScroll:function(){var l=this;if(this.$refs.wrapper){if(this.scroll=new s.a(this.$refs.wrapper,{probeType:this.probeType,click:this.click,pullUpLoad:{threshold:-20}}),this.getScrollPos&&this.scroll.on("scroll",(function(o){l.$emit("scroll",o)})),this.pullingDown){var o=this;this.scroll.on("touchEnd",(function(l){l.y>50&&(console.log("下拉刷新动作"),o.$emit("pullingDown"))}))}if(this.pullingUp){var t=this;this.scroll.on("scrollEnd",(function(){l.scroll.y<=l.scroll.maxScrollY+50&&(console.log("上拉加载动作"),t.$emit("pullingUp"))}))}}},refresh:function(){this.scroll&&this.scroll.refresh()},scrollTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement(this.scroll,arguments)}}},i=t(46),r=Object(i.a)(e,(function(){var l=this.$createElement;return(this._self._c||l)("div",{ref:"wrapper"},[this._t("default")],2)}),[],!1,null,null,null);o.default=r.exports}}]);