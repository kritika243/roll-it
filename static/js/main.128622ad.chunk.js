(this["webpackJsonproll-it"]=this["webpackJsonproll-it"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i=n(1),s=n.n(i),o=n(8),c=n.n(o),a=(n(13),n(2)),l=n(3),r=n(5),u=n(4),h=n(6),d=(n(14),n(0)),j=function(t){Object(r.a)(n,t);var e=Object(u.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsx)("i",{className:"Die fas fa-dice-".concat(this.props.face," ").concat(this.props.rolling?"jiggling":"")})}}]),n}(i.Component),b=(n(16),function(t){Object(r.a)(n,t);var e=Object(u.a)(n);function n(t){var i;return Object(a.a)(this,n),(i=e.call(this,t)).state={die1:"one",die2:"one",isRolling:!1},i.roll=i.roll.bind(Object(h.a)(i)),i}return Object(l.a)(n,[{key:"roll",value:function(){var t=this,e=this.props.sides[Math.floor(Math.random()*this.props.sides.length)],n=this.props.sides[Math.floor(Math.random()*this.props.sides.length)];this.setState({die1:e,die2:n,isRolling:!0}),setTimeout((function(){t.setState({isRolling:!1})}),1e3)}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"RollDice",children:[Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(j,{face:this.state.die1,rolling:this.state.isRolling}),Object(d.jsx)(j,{face:this.state.die2,rolling:this.state.isRolling})]}),Object(d.jsx)("button",{onClick:this.roll,disabled:this.state.isRolling,children:this.state.isRolling?"Rolling...":"Roll Dice!"})]})}}]),n}(i.Component));b.defaultProps={sides:["one","two","three","four","five","six"]};var f=b,p=(n(17),function(t){Object(r.a)(n,t);var e=Object(u.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(f,{})})}}]),n}(i.Component)),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,o=e.getLCP,c=e.getTTFB;n(t),i(t),s(t),o(t),c(t)}))};c.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),O()}],[[18,1,2]]]);
//# sourceMappingURL=main.128622ad.chunk.js.map