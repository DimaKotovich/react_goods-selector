(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var c=s(3),o=s.n(c),n=s(6),a=s(4),r=s(5),i=s(8),l=s(7),d=s(1),u=s.n(d),h=(s(13),s(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(a.a)(this,s);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={selectedGoods:["Jam"]},e.switchGood=function(t){e.setState((function(e){var s=e.selectedGoods;return{selectedGoods:s.includes(t)?s.filter((function(e){return e!==t})):[].concat(Object(n.a)(s),[t])}}))},e.clearGoods=function(){e.setState({selectedGoods:[]})},e.getGoods=function(){var t=e.state.selectedGoods;switch(t.length){case 0:return"No goods";case 1:return"".concat(t[0]);default:return"".concat(t.slice(0,-1).join(", ")," and ").concat(t.at(-1))}},e}return Object(r.a)(s,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return Object(h.jsxs)("div",{className:"app",children:[Object(h.jsxs)("h1",{className:"app__title",children:[this.getGoods(),t.length>0&&Object(h.jsx)("button",{className:"app__button",type:"button",onClick:this.clearGoods,children:"Clear"})]}),Object(h.jsx)("ul",{className:"goodsList",children:j.map((function(s){var c=t.includes(s);return Object(h.jsxs)("li",{className:"goodsList__item",children:[Object(h.jsx)("span",{className:"goodsList__goods",children:s}),Object(h.jsx)("button",{type:"button",className:"goodsList__button",onClick:function(){e.switchGood(s)},children:c?"Remove":"Select"})]},s)}))})]})}}]),s}(u.a.Component),p=b;o.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.18f6b66c.chunk.js.map