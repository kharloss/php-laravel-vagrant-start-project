webpackJsonp([1],{43:function(t,e,s){var n=s(44)(s(48),s(51),null,null);t.exports=n.exports},44:function(t,e){t.exports=function(t,e,s,n){var r,i=t=t||{},a=typeof t["default"];"object"!==a&&"function"!==a||(r=t,i=t["default"]);var o="function"==typeof i?i.options:i;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),s&&(o._scopeId=s),n){var c=o.computed||(o.computed={});Object.keys(n).forEach(function(t){var e=n[t];c[t]=function(){return e}})}return{esModule:r,exports:i,options:o}}},48:function(t,e,s){"use strict";e["default"]={data:function(){return{trips:{}}},created:function(){this.getTrip()},methods:{getTrip:function(){var t=this,e="/trips/"+this.$route.params.id;this.axios.get(e).then(function(e){t.trips=e.data})}}}},51:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"panel panel-default"},[s("div",{staticClass:"container"},[s("h3",[t._v("Your Trip Details")]),t._v(" "),t._m(0),t._v(" "),s("ul",{attrs:{id:"trips"}},t._l(t.trips,function(e){return s("li",[t._v("\n                "+t._s(e.message)+"\n            ")])})),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-2"},[s("router-link",{staticClass:"btn btn-success",attrs:{to:{name:"DisplayTrip"}}},[t._v("Choose another Trip!")])],1)]),t._v(" "),s("br")])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-10"})])}]}}});