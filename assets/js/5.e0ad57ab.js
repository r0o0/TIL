(window.webpackJsonp=window.webpackJsonp||[]).push([[5,7,9],{111:function(t,n,e){"use strict";var i=e(97),s=e(5),r=e(267),a=e(46),o=e(28),c=e(47),l=e(29),u=e(4),p=Math.min,h=[].push,v=!u((function(){RegExp(4294967295,"y")}));e(48)("split",2,(function(t,n,e,u){var d;return d="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var s=String(this);if(void 0===t&&0===n)return[];if(!i(t))return e.call(s,t,n);for(var r,a,o,c=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,v=void 0===n?4294967295:n>>>0,d=new RegExp(t.source,u+"g");(r=l.call(d,s))&&!((a=d.lastIndex)>p&&(c.push(s.slice(p,r.index)),r.length>1&&r.index<s.length&&h.apply(c,r.slice(1)),o=r[0].length,p=a,c.length>=v));)d.lastIndex===r.index&&d.lastIndex++;return p===s.length?!o&&d.test("")||c.push(""):c.push(s.slice(p)),c.length>v?c.slice(0,v):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,i){var s=t(this),r=null==e?void 0:e[n];return void 0!==r?r.call(e,s,i):d.call(String(s),e,i)},function(t,n){var i=u(d,t,this,n,d!==e);if(i.done)return i.value;var l=s(t),h=String(this),f=r(l,RegExp),_=l.unicode,m=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(v?"y":"g"),g=new f(v?l:"^(?:"+l.source+")",m),y=void 0===n?4294967295:n>>>0;if(0===y)return[];if(0===h.length)return null===c(g,h)?[h]:[];for(var C=0,x=0,b=[];x<h.length;){g.lastIndex=v?x:0;var S,k=c(g,v?h:h.slice(x));if(null===k||(S=p(o(g.lastIndex+(v?0:x)),h.length))===C)x=a(h,x,_);else{if(b.push(h.slice(C,x)),b.length===y)return b;for(var w=1;w<=k.length-1;w++)if(b.push(k[w]),b.length===y)return b;x=C=S}}return b.push(h.slice(C)),b}]}))},267:function(t,n,e){var i=e(5),s=e(49),r=e(27)("species");t.exports=function(t,n){var e,a=i(t).constructor;return void 0===a||null==(e=i(a)[r])?n:s(e)}},268:function(t,n,e){},296:function(t,n,e){"use strict";e.r(n);e(96);var i={name:"Button",inheritAttrs:!1,props:{icon:String,type:{default:"button",type:String},link:String,text:String}},s=e(0),r=Object(s.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return"link"===t.type?e("a",{attrs:{role:t.type,target:"_blank",href:t.link}},[t.icon?e("Icon",{staticStyle:{width:"inherit",height:"inherit"},attrs:{name:t.icon}}):e("span",[t._v(t._s(t.text))])],1):e("button",t._b({attrs:{type:t.type}},"button",t.$attrs,!1),[t.icon?e("Icon",{attrs:{name:t.icon}}):e("span",[t._v(t._s(t.text))])],1)}),[],!1,null,null,null);n.default=r.exports},366:function(t,n,e){"use strict";var i=e(268);e.n(i).a},374:function(t,n,e){"use strict";e.r(n);e(111),e(296);var i={name:"Terminal",props:{commands:Array},data:function(){return{isCopied:!1}},methods:{getCurrentDirectory:function(t){return t.toLowerCase().split(" ").join("-")},copyCommand:function(){var t=this;this.$copyText(this.commands[0]).then((function(n){t.isCopied=!0,setTimeout((function(){t.isCopied=!1,n.clearSelection()}),2e3)})).catch((function(t){return console.error(t)}))},onClick:function(){console.log("btn click"),this.copyCommand()}},computed:{currentPage:function(){return this.getCurrentDirectory(this.$page.frontmatter.title)}}},s=(e(366),e(0)),r=Object(s.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"terminal-box"},[e("pre",{staticClass:"terminal-box__content terminal"},[t._v("    "),t._l(t.commands,(function(n){return e("code",{staticClass:"terminal__code"},[t._v("\n      "),e("span",{staticClass:"terminal__directory"},[t._v("~/r0o0/"+t._s(t.currentPage))]),t._v("\n      "),e("span",[e("span",{staticClass:"terminal__start-symbol"},[t._v(">")]),t._v(" "+t._s(n))]),t._v("\n    ")])})),e("code",{staticClass:"terminal__code"},[t._v("\n      "),e("span",{staticClass:"terminal__directory"},[t._v("~/r0o0/"+t._s(t.currentPage))]),t._v("\n      "),e("span",{staticClass:"terminal__start-symbol"},[t._v(">")]),t._v(" "),e("span",{staticClass:"terminal__cursor"},[t._v("_")]),t._v("\n    ")]),t._v("\n  ")],2),t._v(" "),e("div",{staticClass:"copy-box"},[e("Button",{staticClass:"btn-copy",attrs:{text:"Copy"},nativeOn:{click:function(n){return t.onClick(n)}}}),t._v(" "),t.isCopied?e("div",{staticClass:"tooltip"},[t._v("Copied")]):t._e()],1)])}),[],!1,null,"09158e44",null);n.default=r.exports},92:function(t,n,e){},94:function(t,n,e){"use strict";var i=e(92);e.n(i).a},96:function(t,n,e){"use strict";e.r(n);var i={name:"Icon",props:{name:String,ariaHidden:Boolean,customStyle:Object}},s=(e(94),e(0)),r=Object(s.a)(i,(function(){var t=this.$createElement,n=this._self._c||t;return n("i",{staticClass:"icon",style:this.customStyle,attrs:{"aria-hidden":this.ariaHidden}},[n("img",{attrs:{src:this.$withBase("/icons/icon-"+this.name+".svg"),alt:"icon "+this.name}})])}),[],!1,null,"53fc07a0",null);n.default=r.exports},97:function(t,n,e){var i=e(7),s=e(17),r=e(27)("match");t.exports=function(t){var n;return i(t)&&(void 0!==(n=t[r])?!!n:"RegExp"==s(t))}}}]);