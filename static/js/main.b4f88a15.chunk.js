(this.webpackJsonpgeo_locator=this.webpackJsonpgeo_locator||[]).push([[0],{16:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n.n(c),r=n(17),i=n.n(r),s=(n(23),n(24),n(3)),a=n(4),u=n(6),l=n(5),j=n(18),d=n.n(j),b=(n(16),n(0)),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).state={countryName:"",countryCode:"",continentCode:"",city:"",region:"",timeZone:"",countryCapital:"",currency:""},c}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://ipapi.co/json/").then((function(t){var n=t.data;console.log(n),e.setState({countryName:n.country_name,countryCode:n.country_code_iso3,continentCode:n.continent_code,city:n.city,region:n.region,timeZone:n.timezone,countryCapital:n.country_capital,currency:n.currency_name})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.countryName,n=e.countryCode,c=(e.continentCode,e.city),o=e.region,r=e.timeZone,i=e.countryCapital,s=e.currency,a="";return a=t,Object(b.jsx)("div",{id:"board",children:Object(b.jsxs)("div",{id:"card",children:[Object(b.jsx)("span",{children:Object(b.jsxs)("b",{children:["Country code : ",n]})}),Object(b.jsx)("span",{children:Object(b.jsxs)("b",{children:["Country name : ",a]})}),Object(b.jsx)("span",{children:Object(b.jsxs)("b",{children:["Country capital : ",i]})}),Object(b.jsx)("span",{children:Object(b.jsxs)("b",{children:["Currency : ",s]})}),Object(b.jsx)("span",{children:Object(b.jsxs)("b",{children:["region : ",o]})}),Object(b.jsx)("span",{children:Object(b.jsxs)("b",{children:["City : ",c]})}),Object(b.jsx)("span",{children:Object(b.jsxs)("b",{children:["Timezone : ",r]})})]})})}}]),n}(c.Component),y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).errorMessage=function(){document.querySelector(".container").style.display="none";var e=document.createElement("p");e.innerHTML="PERMISSION DENIED",document.querySelector(".App").append(e)},c.loadPage=function(){document.querySelector(".container").style.display="none",c.setState({message:Object(b.jsx)(h,{})})},c.state={message:""},c}return Object(a.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("p",{id:"text",children:"The site wants to use your location"}),Object(b.jsx)("button",{onClick:this.loadPage,className:"button",children:"Allow"}),Object(b.jsx)("button",{onClick:this.errorMessage,className:"button",children:"Deny"})]}),this.state.message]})}}]),n}(c.Component);var O=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(y,{})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),r(e),i(e)}))};i.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),p()}},[[44,1,2]]]);
//# sourceMappingURL=main.b4f88a15.chunk.js.map