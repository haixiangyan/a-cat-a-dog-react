(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{177:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),o=a(19),s=a.n(o),l=a(41),u=a(27),m=a(28),h=a(33),d=a(29),v=a(34),p=a(66),b=a(42),f=a.n(b),g=f.a.create({baseURL:"https://api.thecatapi.com/v1",headers:{"x-api-key":"416848bd-ea2f-4d38-a329-0e858ab5cd38"}}),w=(f.a.create({baseURL:"https://api.thecatapi.com/v1",headers:{"x-api-key":"89e98203-1b5b-4c32-a67b-e314bf19f4c5"}}),a(67)),O=a(45),j=a.n(O),k=function(e){function t(e){return Object(u.a)(this,t),Object(h.a)(this,Object(d.a)(t).call(this,e))}return Object(v.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.createElement("div",{className:"change"},"Child")}}]),t}(n.Component);a(97);function E(){var e=Object(p.a)(["\n  text-align: center;\n  color: red;\n  .change {\n    color: green;\n  }\n"]);return E=function(){return e},e}var y=w.a.div(E()),x=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).vote=Object(l.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.state.animals,e.next=3,g.post("/votes",{image_id:"eUKD6V2pm",sub_id:"hai_test",value:1});case 3:case"end":return e.stop()}},e)})),a.state={animals:[]},a}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/images/search");case 2:return t=e.sent,e.next=5,g.get("/votes?sub_id=hai_test");case 5:a=e.sent,console.log(a),this.setState({animals:t.data});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(y,null,"Test",r.a.createElement(j.a,{variant:"contained",color:"primary"},"Hello World"),r.a.createElement("div",{className:"change"},"Change Color"),r.a.createElement(k,null),r.a.createElement("div",{className:"hello"},"Yes"),this.state.animals.map(function(t){return r.a.createElement("div",{key:t.id},r.a.createElement("img",{src:t.url,alt:"animalImg"}),r.a.createElement("div",null,JSON.stringify(t)),r.a.createElement(j.a,{onClick:e.vote},"Vote"))}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},72:function(e,t,a){e.exports=a(177)},97:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.4a841bf2.chunk.js.map