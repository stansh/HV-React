(this.webpackJsonpjazzscene=this.webpackJsonpjazzscene||[]).push([[0],{146:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(12),o=t.n(l),c=(t(87),t(88),t(39)),s=t(40),i=t(44),m=t(43),u=t(13),d=t(2),h=t(148),p=function(e){var a=Object(n.useState)(!0),t=Object(u.a)(a,2),l=t[0],o=t[1];return r.a.createElement(d.r,{sticky:"top",expand:"md",className:"navbar-light "},r.a.createElement(d.s,{href:"/",className:"ml-auto"},r.a.createElement("img",{src:"HV-React/images/logo.png",width:"100",alt:"Logo"})),r.a.createElement(d.t,{onClick:function(){return o(!l)},className:"mr-2"}),r.a.createElement(d.l,{isOpen:!l,navbar:!0},r.a.createElement(d.p,{navbar:!0,className:"mr-auto"},r.a.createElement(d.q,null,r.a.createElement(h.a,{className:"nav-link rounded",to:"/healththing"},r.a.createElement("strong",null,"the health thing"))),r.a.createElement(d.q,null,r.a.createElement(h.a,{className:"nav-link rounded",to:"/snacks"},r.a.createElement("strong",null,"snacks"))),r.a.createElement(d.q,null,r.a.createElement(h.a,{className:"nav-link rounded",to:"/recipes"},r.a.createElement("strong",null,"our recipes"))),r.a.createElement(d.q,null,r.a.createElement(h.a,{className:"nav-link rounded",to:"/catering"},r.a.createElement("strong",null,"catering"))))))},E=t(9),f=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement(E.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(1) translateX(-10%)"}},r.a.createElement("div",{className:"row my-2"},r.a.createElement("div",{className:"col-md "},r.a.createElement("img",{width:"100%",src:"HV-React/images/pic21.jpg",alt:"Card image cap",className:"rounded"})),r.a.createElement("div",{className:"col-md"},r.a.createElement(d.b,null,r.a.createElement(d.c,{className:"col-md text-align-right"},r.a.createElement(d.e,null,"Why hummus is great?"),r.a.createElement(d.d,null,"Hummus is typically made by blending chickpeas (garbanzo beans), tahini (ground sesame seeds), olive oil, lemon juice and garlic in a food processor. Not only is hummus delicious, but it is also versatile, packed with nutrients and has been linked to many impressive health and nutritional benefits. Hummus provides a wide variety of vitamins and minerals. It is also a great plant-based source of protein, which makes it a nutritious option for vegans and vegetarians.")))))),r.a.createElement(E.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(1) translateX(10%)"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md"},r.a.createElement("img",{width:"100%",src:"HV-React/images/pic31.jpg",alt:"Card image cap",className:"rounded"})),r.a.createElement("div",{className:"col-md"},r.a.createElement(d.b,null,r.a.createElement(d.c,{className:"col-md text-align-right"},r.a.createElement(d.e,null,"Why is it important to eat vegetables?"),r.a.createElement(d.d,null,r.a.createElement(d.n,null,r.a.createElement(d.o,null,"Most vegetables are naturally low in fat and calories. None have cholesterol. (Sauces or seasonings may add fat, calories, and/or cholesterol.)"),r.a.createElement(d.o,null,"Vegetables are important sources of many nutrients, including potassium, dietary fiber, folate (folic acid), vitamin A, and vitamin C"),r.a.createElement(d.o,null,"Diets rich in potassium may help to maintain healthy blood pressure. Vegetable sources of potassium include sweet potatoes, white potatoes, white beans, tomato products (paste, sauce, and juice), beet greens, soybeans, lima beans, spinach, lentils, and kidney beans.")))))))))},g=[{size:"Small Plate",description:"2 choices of hummus, 2 choices of veggies, 2 pitas",price:"$ 6.99"},{size:"Medium Plate",description:"3 choices of hummus, 4 choices of veggies, 3 pitas",price:"$ 8.99"},{size:"Large Plate",description:"5 choices of hummus, 5 choices of veggies, 5 pitas",price:"$11.99"},{size:"32 oz Container of Hummus",description:"",price:"$24.99"},{size:"22 oz Container of Hummus",description:"",price:"$18.99"},{size:"32 oz Jar of Fesh Juice",description:"",price:"$12.99"},{size:"16 oz Jar of Fesh Juice",description:"",price:"$5.99"},{size:"Large Juice",description:"",price:"$7.99"},{size:"Medium Juice",description:"",price:"$6.99"},{size:"Small Juice",description:"",price:"$4.99"}],b=t(11);var v=Object(b.connect)((function(e){return{menu:e.menu}}))((function(){var e=g.map((function(e){return r.a.createElement(E.Fade,{in:!0,key:e.id},r.a.createElement("div",null,r.a.createElement(d.v,{hover:!0},r.a.createElement("tbody",{className:"text-center"},r.a.createElement("tr",{className:"row"},r.a.createElement("td",{className:"col text-white"},e.size),r.a.createElement("td",{className:"col text-white "},e.description," "),r.a.createElement("td",{className:"col text-white"},e.price))))))}));return r.a.createElement("div",null," ",r.a.createElement("h2",{className:"text-center"},"Our Menu"),e)})),N=Object(b.connect)((function(e){return{snacks:e.snacks}}))((function(e){var a=e.snacks,t=Object(n.useState)(0),l=Object(u.a)(t,2),o=l[0],c=l[1],s=Object(n.useState)(!1),i=Object(u.a)(s,2),m=i[0],h=i[1],p=function(){if(!m){var e=o===a.length-1?0:o+1;c(e)}},f=function(){if(!m){var e=0===o?a.length-1:o-1;c(e)}},g=a.map((function(e){return r.a.createElement(d.j,{onExiting:function(){return h(!0)},onExited:function(){return h(!1)},key:e.src},r.a.createElement("img",{src:e.src,width:"100%",alt:e.altText}),r.a.createElement(d.g,{captionText:e.selection,captionHeader:e.caption}))}));return r.a.createElement("div",{className:"container"},r.a.createElement(E.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(1) translateY(-50%)"}},r.a.createElement("div",{className:"row"},r.a.createElement(d.f,{activeIndex:o,next:p,previous:f},r.a.createElement(d.i,{items:a,activeIndex:o,onClickHandler:function(e){m||c(e)}}),g,r.a.createElement(d.h,{direction:"prev",directionText:"Previous",onClickHandler:f}),r.a.createElement(d.h,{direction:"next",directionText:"Next",onClickHandler:p})))),r.a.createElement("div",null,r.a.createElement(E.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(1) translateY(50%)"}},r.a.createElement(v,null))))})),k=function(e){var a=Object(n.useState)(!1),t=Object(u.a)(a,2),l=t[0],o=t[1];return r.a.createElement("div",{className:"row"},r.a.createElement(d.a,{outline:!0,color:"success",size:"lg",block:!0,onClick:function(){return o(!l)},style:{marginBottom:"1rem"}},"Recipe #1"),r.a.createElement(d.l,{isOpen:l},r.a.createElement(d.b,null,r.a.createElement(d.c,null,r.a.createElement(d.n,null,r.a.createElement(d.o,null,"Start by prepping all of your ingredients: Drain 15\xbd oz. chickpeas in a strainer or colander and rinse thoroughly. Let drain again while you do the other prep."),r.a.createElement(d.o,null,"Cut 1 lemon in half, remove any visible seeds, and squeeze juice into a small bowl. You should have 3\u20134 Tbsp."),r.a.createElement(d.o,null,"Smash 1 garlic clove with the flat side of your knife on a cutting board and remove peel. Continue to mash with side of knife until a paste forms. (You can also grate garlic on a microplane if you have one\u2014you're just looking for a fine paste.)"),r.a.createElement(d.o,null,"Combine drained chickpeas, 3 Tbsp. lemon juice, garlic, \xbd cup tahini, \xbe tsp. salt, 10 cracks pepper, \xbc tsp. cumin, and 2 Tbsp. water in a food processor."),r.a.createElement(d.o,null,"Process until smooth, about 1 minute.With the motor running, stream in 3 Tbsp. oil, then continue to process until hummus is very light and creamy, about 1 minute longer. Taste and season with more salt, if needed."))))))},y=function(e){var a=Object(n.useState)(!1),t=Object(u.a)(a,2),l=t[0],o=t[1];return r.a.createElement("div",{className:"row"},r.a.createElement(d.a,{outline:!0,color:"success",size:"lg",block:!0,onClick:function(){return o(!l)},style:{marginBottom:"1rem"}},"Recipe #2"),r.a.createElement(d.l,{isOpen:l},r.a.createElement(d.b,null,r.a.createElement(d.c,null,r.a.createElement(d.n,null,r.a.createElement(d.o,null,"Add the chickpeas to your blender and make sure to reserve the liquid (it\u2019s called aquafaba). If you forget and accidentally toss it, no worries, just use water."),r.a.createElement(d.o,null,"Add the tahini (which I also make in my Vitamix), olive oil, fresh lemons, garlic, cumin and salt to the blender. Use two garlic cloves for your basic hummus, but if you\u2019re a garlic lover like me, feel free to add more. Roasted garlic is also divine."),r.a.createElement(d.o,null,"Turn your Vitamix on high and use the tamper as you would when making almond butter to push the ingredients into the blades. After 30 seconds, it should be fully blended. "),r.a.createElement(d.o,null,"Your hummus will be thick, creamy and smooth. If you\u2019d like a thinner consistency, just add a bit more aquafaba or water until it\u2019s your desired consistency."),r.a.createElement(d.o,null,"To serve, add a few large, heaping spoonfuls to a plate or bowl and give it a swish depression on top. This creates a little divot for your olive oil to stay in. Then sprinkle some paprika and add fresh parsley"),r.a.createElement(d.o,null,"Scrape the hummus into a serving bowl or platter, and use a spoon to create nice swooshes on top"))))))},w=function(e){var a=Object(n.useState)(!1),t=Object(u.a)(a,2),l=t[0],o=t[1];return r.a.createElement("div",{className:"row"},r.a.createElement(d.a,{outline:!0,color:"success",size:"lg",block:!0,onClick:function(){return o(!l)},style:{marginBottom:"1rem"}},"Recipe #3"),r.a.createElement(d.l,{isOpen:l},r.a.createElement(d.b,null,r.a.createElement(d.c,null,r.a.createElement(d.n,null,r.a.createElement(d.o,null,"In the bowl of a food processor, combine the tahini and lemon juice and process for 1 minute, scrape the sides and bottom of the bowl then process for 30 seconds more"),r.a.createElement(d.o,null,"Add the olive oil, minced garlic, cumin, and a 1/2 teaspoon of salt to the whipped tahini and lemon juice"),r.a.createElement(d.o,null,"With the food processor turned on, slowly add 2 to 3 tablespoons of water until you reach the perfect consistency"),r.a.createElement(d.o,null,"Taste for salt and adjust as needed. Serve hummus with a drizzle of olive oil and dash of paprika"))))))},x=function(e){var a=Object(n.useState)(!1),t=Object(u.a)(a,2),l=t[0],o=t[1];return r.a.createElement("div",{className:"row"},r.a.createElement(d.a,{outline:!0,color:"success",size:"lg",block:!0,onClick:function(){return o(!l)},style:{marginBottom:"1rem"}},"Recipe #4"),r.a.createElement(d.l,{isOpen:l},r.a.createElement(d.b,null,r.a.createElement(d.c,null,r.a.createElement(d.n,null,r.a.createElement(d.o,null,"Add all the ingredients to your Vitamix or high-powered blender and secure the lid. Remove the lid cap and insert the tamper"),r.a.createElement(d.o,null,"Turn the blender on high for 30 seconds (or more for a creamier texture) and use the tamper to push the hummus into the blades. Add more chickpea liquid (aquafaba), if desired, for a softer hummus"),r.a.createElement(d.o,null,"Add the hummus to a serving plate and garnish with olive oil, paprika and fresh parsley."),r.a.createElement(d.o,null,"The hummus will last for up to a week in the fridge, if kept in a sealed container. You can also freeze the hummus in sealed containers for future use, then just thaw as needed. It's actually one of the most common foods I meal prep on a regular basis as it's so easy"))))))},j=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(E.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(1) translateY(-100%)"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("img",{width:"100%",src:"HV-React/images/pic30.jpg",alt:"Card image cap",className:"rounded"})),r.a.createElement("div",{className:"col"},r.a.createElement(k,null),r.a.createElement(y,null),r.a.createElement(w,null),r.a.createElement(x,null)))))},T=t(8),C=function(e){return e&&e.length},O=function(e){return function(a){return!a||a.length<=e}},z=function(e){return function(a){return a&&a.length>=e}},S=function(e){return!isNaN(+e)},F=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},q=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={firstName:"",lastName:"",phoneNum:"",email:"",agree:!1,contactType:"By Phone",feedback:"",touched:{firstName:!1,lastName:!1,phoneNum:!1,email:!1}},n}return Object(s.a)(t,[{key:"handleSubmit",value:function(e){console.log("Current State is: "+JSON.stringify(e)),alert("Current State is: "+JSON.stringify(e))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement(E.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(1) translateY(-50%)"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement(T.LocalForm,{model:"feedbackForm",onSubmit:function(a){return e.handleSubmit(a)}}," ",r.a.createElement(d.u,{className:"form-group"},r.a.createElement(d.m,{htmlFor:"firstName",md:2},"First Name"),r.a.createElement(d.k,{md:10},r.a.createElement(T.Control.text,{model:".firstName",id:"firstName",name:"firstName",placeholder:"First Name",className:"form-control",validators:{required:C,minLength:z(2),maxLength:O(15)}}),r.a.createElement(T.Errors,{className:"text-danger",model:".firstName",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(d.u,{className:"form-group"},r.a.createElement(d.m,{htmlFor:"lastName",md:2},"Last Name"),r.a.createElement(d.k,{md:10},r.a.createElement(T.Control.text,{model:".lastName",id:"lastName",name:"lastName",placeholder:"Last Name",className:"form-control",validators:{required:C,minLength:z(2),maxLength:O(15)}}),r.a.createElement(T.Errors,{className:"text-danger",model:".lastName",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 2 characters",maxLength:"Must be 15 characters or less"}}))),r.a.createElement(d.u,{className:"form-group"},r.a.createElement(d.m,{htmlFor:"phoneNum",md:2},"Phone"),r.a.createElement(d.k,{md:10},r.a.createElement(T.Control.text,{model:".phoneNum",id:"phoneNum",name:"phoneNum",placeholder:"Phone number",className:"form-control",validators:{required:C,minLength:z(10),maxLength:O(15),isNumber:S}}),r.a.createElement(T.Errors,{className:"text-danger",model:".phoneNum",show:"touched",component:"div",messages:{required:"Required",minLength:"Must be at least 10 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}}))),r.a.createElement(d.u,{className:"form-group"},r.a.createElement(d.m,{htmlFor:"email",md:2},"Email"),r.a.createElement(d.k,{md:10},r.a.createElement(T.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:C,validEmail:F}}),r.a.createElement(T.Errors,{className:"text-danger",model:".email",show:"touched",component:"div",messages:{required:"Required",validEmail:"Invalid email address"}}))),r.a.createElement(d.u,{className:"form-group"},r.a.createElement(d.k,{md:{size:4,offset:2}},r.a.createElement("div",{className:"form-check"},r.a.createElement(d.m,{check:!0},r.a.createElement(T.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",r.a.createElement("strong",null,"May we contact you?")))),r.a.createElement(d.k,{md:4},r.a.createElement(T.Control.select,{model:".contactType",name:"contactType",className:"form-control"},r.a.createElement("option",null,"By Phone"),r.a.createElement("option",null,"By Email")))),r.a.createElement(d.u,{className:"form-group"},r.a.createElement(d.m,{htmlFor:"feedback",md:2},"Your Feedback"),r.a.createElement(d.k,{md:10},r.a.createElement(T.Control.textarea,{model:".feedback",id:"feedback",name:"feedback",rows:"12",className:"form-control"}))),r.a.createElement(d.u,{className:"form-group"},r.a.createElement(d.k,{md:{size:10,offset:2}},r.a.createElement(d.a,{type:"submit",color:"primary"},"Send Feedback"))))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("img",{width:"90%",src:"HV-React/images/pic44.jpg",alt:"Card image cap",className:"rounded"})))))}}]),t}(n.Component),P=t(57);var R=function(e){return r.a.createElement("footer",{className:"site-footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col my-auto"},r.a.createElement(P.a,{to:"/"},"The Health Thing"),r.a.createElement(P.a,{to:"/snacks"}," | Snacks"),r.a.createElement(P.a,{to:"/recipes"}," | Recipes"),r.a.createElement(P.a,{to:"/catering"}," | Catering")),r.a.createElement("div",{className:"col my-auto text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-instagram",href:"http://instagram.com/"},r.a.createElement("i",{className:"fa fa-instagram"}))," ",r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/"},r.a.createElement("i",{className:"fa fa-facebook-official"}))," ",r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"}))," ",r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"}))),r.a.createElement("div",{className:"col "},r.a.createElement("a",{role:"button",className:"btn btn-link",href:"tel:+12065551234"},r.a.createElement("i",{className:"fa fa-mobile"})," 1-206-555-1234"),r.a.createElement("a",{role:"button",className:"btn btn-link",href:"mailto:notreal@notreal.co"},r.a.createElement("i",{className:"fa fa-envelope"})," info@hummusveggies.com")))))},H=t(151),L=t(81),V=t(149),J=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement(H.a,null,r.a.createElement(L.a,{path:"/snacks",component:N,items:this.props.snacks}),r.a.createElement(L.a,{path:"/healththing",component:f}),r.a.createElement(L.a,{path:"/recipes",component:j}),r.a.createElement(L.a,{path:"/catering",component:q}),r.a.createElement(V.a,{to:"/healththing"})),r.a.createElement(R,null))}}]),t}(n.Component),A=t(150),M=t(17),$=[{src:"HV-React/images/CarPic23.png",altText:"Hummus Flavors",caption:"Hummus Flavors",selection:"classic | red pepper | basil pesto | roasted garlic | lemon"},{src:"HV-React/images/CarPic47.png",altText:"Veggies Selection",caption:"Veggies Selection",selection:"cucumbers | peppers | carrots | celery | broccoli"},{src:"HV-React/images/CarPic28.png",altText:"Pitas Flavors",caption:"Pitas Flavors",selection:"whole wheat | pita chips | pita with cheese "},{src:"HV-React/images/CarPic33.png",altText:"Juice Selection",caption:"Juice Selection",selection:"carrot | tomato | orange | mango | apple "}],I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,a=arguments.length>1?arguments[1]:void 0;return a.type,e},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,a=arguments.length>1?arguments[1]:void 0;return a.type,e},Y=Object(M.createStore)(Object(M.combineReducers)({snacks:I,menu:B}));var W=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.Provider,{store:Y},r.a.createElement(A.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(J,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(141),t(142),t(143),t(144),t(145);o.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},82:function(e,a,t){e.exports=t(146)},87:function(e,a,t){},88:function(e,a,t){}},[[82,1,2]]]);
//# sourceMappingURL=main.41eada34.chunk.js.map