(this.webpackJsonppicgallery=this.webpackJsonppicgallery||[]).push([[0],{23:function(e,t,a){e.exports=a(33)},28:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(20),c=a.n(o),r=a(1),s=(a(28),a(3)),i=a(2),u=a(5),m=a.n(u);var d=function(){var e=Object(n.useContext)(N),t=e.state,a=e.dispatch,o=Object(n.useState)(""),c=Object(r.a)(o,2),u=c[0],d=c[1],p=Object(n.useState)([]),h=Object(r.a)(p,2),f=h[0],g=h[1],E=Object(s.f)(),b=Object(n.useRef)(null);return Object(n.useEffect)((function(){m.a.Modal.init(b.current)}),[]),l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper black"},l.a.createElement(i.b,{to:t?"/":"/login",className:"brand-logo left text-white"},"Picture Gallery"),l.a.createElement("ul",{id:"nav-mobile",className:"right "},t?[l.a.createElement("li",{key:"1"},l.a.createElement("i",{"data-target":"modal1",className:"large material-icons modal-trigger",style:{color:"white"}},"search")),l.a.createElement("li",{key:"2"},l.a.createElement(i.b,{to:"/myfeed"},"My Feed")),l.a.createElement("li",{key:"3"},l.a.createElement(i.b,{to:"/createpost"},"Upload Post")),l.a.createElement("li",{key:"4"},l.a.createElement(i.b,{to:"/followersPage"},"Followers Post")),l.a.createElement("li",{key:"5"},l.a.createElement("button",{className:"btn #000000 black",type:"submit",onClick:function(){localStorage.clear(),a({type:"CLEAR"}),E.push("/login")}},"Logout"))]:[l.a.createElement("li",{key:"6"},l.a.createElement(i.b,{to:"/login"},"Log-In")),l.a.createElement("li",{key:"7"},l.a.createElement(i.b,{to:"/signup"},"Sign-Up"))])),l.a.createElement("div",{id:"modal1",className:"modal",ref:b,style:{color:"black"}},l.a.createElement("div",{className:"modal-content"},l.a.createElement("label",{htmlFor:"search"},"Search User"),l.a.createElement("input",{type:"text",placeholder:"search user",value:u,onChange:function(e){return t=e.target.value,d(t),void fetch("http://localhost:1000/search-user",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:t})}).then((function(e){return e.json()})).then((function(e){g(e.user),console.log(e)}));var t}}),l.a.createElement("ul",{className:"collection"},f.map((function(e){return l.a.createElement(i.b,{to:e._id!==t._id?"/profile/"+e._id:"/profile",onClick:function(){m.a.Modal.getInstance(b.current).close(),d("")}},l.a.createElement("li",{className:"collection-item",style:{color:"black"}},e.email))})))),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("a",{className:"modal-close waves-effect waves-green btn-flat",onClick:function(){return d("")}},"Search")))))};var p=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],o=t[1],c=Object(n.useContext)(N),s=c.state;return c.dispatch,Object(n.useEffect)((function(){fetch("http://localhost:1000/findallpost",{headers:{Authorization:"Hello "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),o(e.posts)}))}),[]),l.a.createElement("div",{className:"home"},a.map((function(e){return l.a.createElement("div",{className:"card home-card",key:e._id},l.a.createElement("h5",{style:{padding:"5px"}},l.a.createElement(i.b,{to:(e.postedbyId._id,s._id,"/profile/"+e.postedbyId._id)},e.postedbyId.name)," ",e.postedbyId._id==s._id&&l.a.createElement("i",{className:"material-icons",style:{float:"right"},onClick:function(){return t=e._id,void fetch("http://localhost:1000/deletepost/".concat(t),{method:"delete",headers:{Authorization:"Hello "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=a.filter((function(t){return t._id!==e._id}));o(t)}));var t}},"delete")),l.a.createElement("div",{className:"card image"},l.a.createElement("img",{src:e.photo}),l.a.createElement("div",{className:"card-content"},e.likes.includes(s._id)?l.a.createElement("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("http://localhost:1000/unlike",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Hello "+localStorage.getItem("jwt")},body:JSON.stringify({postsId:t})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=a.map((function(t){return t._id==e._id?e:t}));o(t)})).catch((function(e){console.log(e)}))}},"thumb_down"):l.a.createElement("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("http://localhost:1000/like",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Hello "+localStorage.getItem("jwt")},body:JSON.stringify({postsId:t})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=a.map((function(t){return t._id==e._id?e:t}));o(t)})).catch((function(e){console.log(e)}))}},"thumb_up"),l.a.createElement("h6",null,e.likes.length," likes"),l.a.createElement("h4",null,e.title),l.a.createElement("p",null,e.body),e.comments.map((function(e){return l.a.createElement("h6",{key:e._id},l.a.createElement("span",{style:{fontWeight:"500"}},e.postedbyId.name)," ",e.text)})),l.a.createElement("form",{onSubmit:function(t){var n,l;t.preventDefault(),n=t.target[0].value,l=e._id,fetch("http://localhost:1000/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Hello "+localStorage.getItem("jwt")},body:JSON.stringify({postsId:l,text:n})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=a.map((function(t){return t._id==e._id?e:t}));o(t)})).catch((function(e){console.log(e)})),console.log(t.target[0].value)}},l.a.createElement("input",{type:"text",placeholder:"comment something"})))))})))};var h=function(){var e=Object(n.useContext)(N),t=(e.state,e.dispatch),a=Object(n.useState)(""),o=Object(r.a)(a,2),c=o[0],u=o[1],d=Object(n.useState)(""),p=Object(r.a)(d,2),h=p[0],f=p[1],g=Object(s.f)("");return l.a.createElement("div",{className:"login-card"},l.a.createElement("div",{className:"card auth-card"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),fetch("http://localhost:1000/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:c,password:h})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.err?m.a.toast({html:e.err,classes:"#f44336 red"}):(localStorage.setItem("jwt",e.token),localStorage.setItem("user",JSON.stringify(e.user)),t({type:"USER",payload:e.user}),m.a.toast({html:"Signed-In",classes:"#00bfa5 teal accent-4"}),g.push("/"))})).catch((function(e){console.log(e)}))}},l.a.createElement("div",null,l.a.createElement("h1",{style:{textAlign:"center"}},"Log-In"),l.a.createElement("label",{htmlFor:"email"},"E-mail:"),l.a.createElement("input",{type:"email",placeholder:"Email",value:c,onChange:function(e){return u(e.target.value)}}),l.a.createElement("label",{htmlFor:"password"},"Password:"),l.a.createElement("input",{type:"password",placeholder:"Password",value:h,onChange:function(e){return f(e.target.value)}}),l.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit"},"Log-In")),l.a.createElement("div",null,l.a.createElement("h6",null,l.a.createElement(i.b,{to:"/signup"},"Don't have a account?"))),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement(i.b,{to:"/reset-password"},"Forgot Password?"))))))};var f=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(""),u=Object(r.a)(c,2),d=u[0],p=u[1],h=Object(n.useState)(""),f=Object(r.a)(h,2),g=f[0],E=f[1],b=Object(n.useState)(""),y=Object(r.a)(b,2),v=y[0],j=y[1],w=Object(n.useState)(""),O=Object(r.a)(w,2),S=O[0],N=(O[1],Object(n.useState)(void 0)),x=Object(r.a)(N,2),_=x[0],C=x[1],I=Object(s.f)();Object(n.useEffect)((function(){_&&k()}),[_]);var k=function(){fetch("http://localhost:1000/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,password:d,email:v,pic:_})}).then((function(e){return e.json()})).then((function(e){e.error?m.a.toast({html:e.error,classes:"#f44336 red"}):(m.a.toast({html:e.message,classes:"#00bfa5 teal accent-4"}),I.push("/login")),console.log(e)})).catch((function(e){console.log(e)}))},P=function(){S?function(){console.log(S);var e=new FormData;e.append("file",S),e.append("upload_preset","Picture gallery"),e.append("cloud_name","siddtechbadal"),fetch("https://api.cloudinary.com/v1_1/siddtechbadal/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){C(e.url),console.log(e)})).catch((function(e){console.log(e)}))}():k()};return l.a.createElement("div",{className:"login-card"},l.a.createElement("div",{className:"card auth-card"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),P()}},l.a.createElement("div",null,l.a.createElement("h1",{style:{textAlign:"center"}},"Sign-Up"),l.a.createElement("label",{htmlFor:"name"},"Full-Name"),l.a.createElement("input",{type:"text",placeholder:"Name",value:a,onChange:function(e){return o(e.target.value)}}),l.a.createElement("label",{htmlFor:"email"},"E-mail:"),l.a.createElement("input",{type:"email",placeholder:"Email",value:v,onChange:function(e){return j(e.target.value)}}),l.a.createElement("label",{htmlFor:"password"},"Password:"),l.a.createElement("input",{type:"password",placeholder:"Password",value:d,onChange:function(e){return p(e.target.value)}}),l.a.createElement("label",{htmlFor:"re-password"},"ReType-Password:"),l.a.createElement("input",{type:"password",placeholder:"Password",value:g,onChange:function(e){return E(e.target.value)}}),l.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit"},"Log-In")),l.a.createElement("div",null,l.a.createElement(i.b,{to:"/login"},l.a.createElement("h6",null,"Already have a account??"))))))},g=a(6);var E=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],o=t[1],c=Object(n.useContext)(N),s=c.state,i=c.dispatch,u=Object(n.useState)(""),m=Object(r.a)(u,2),d=m[0],p=m[1];return Object(n.useEffect)((function(){fetch("http://localhost:1000/mypost",{headers:{Authorization:"Hello "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),o(e.mypost)}))}),[]),Object(n.useEffect)((function(){if(d){var e=new FormData;e.append("file",d),e.append("upload_preset","Picture gallery"),e.append("cloud_name","siddtechbadal"),fetch("https://api.cloudinary.com/v1_1/siddtechbadal/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){fetch("http://localhost:1000/updatepic",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Hello "+localStorage.getItem("jwt")},body:JSON.stringify({pic:e.url})}).then((function(e){return e.json()})).then((function(e){console.log(e),localStorage.setItem("user",JSON.stringify(Object(g.a)(Object(g.a)({},s),{},{pic:e.pic}))),i({type:"UPDATEPIC",payload:e.pic})}))})).catch((function(e){console.log(e)}))}}),[d]),l.a.createElement("div",{style:{maxWidth:"600px",margin:"10px auto"}},l.a.createElement("div",{style:{margin:"20px 20px",borderBottom:"1px solid grey"}},l.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},l.a.createElement("div",null,l.a.createElement("img",{style:{width:"160px",height:"160px",borderRadius:"80px"},src:s?s.pic:"loading"})),l.a.createElement("div",null,l.a.createElement("h4",null,s?s.name:"loading"),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",width:"110%"}},l.a.createElement("h6",null,a.length," Post"),l.a.createElement("h6",null,s?s.followers.length:"0"," Followers"),l.a.createElement("h6",null,s?s.following.length:"0"," Following")))),l.a.createElement("div",{className:"file-field input-field",style:{margin:"30px"}},l.a.createElement("div",{className:"btn"},l.a.createElement("span",null,"Update Picture"),l.a.createElement("input",{type:"file",onChange:function(e){var t;t=e.target.files[0],p(t)}})),l.a.createElement("div",{className:"file-path-wrapper"},l.a.createElement("input",{className:"file-path validate",type:"text"})))),l.a.createElement("div",{className:"gallery",style:{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}},a.map((function(e){return l.a.createElement("img",{key:e._id,className:"galleryItem",src:e.photo,alt:e.title})}))))};var b=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(""),i=Object(r.a)(c,2),u=i[0],d=i[1],p=Object(n.useState)(""),h=Object(r.a)(p,2),f=h[0],g=h[1],E=Object(n.useState)(""),b=Object(r.a)(E,2),y=b[0],v=b[1],j=Object(s.f)("");return Object(n.useEffect)((function(){y&&fetch("http://localhost:1000/createpost",{method:"post",headers:{"Content-Type":"application/json",Authorization:"Hello "+localStorage.getItem("jwt")},body:JSON.stringify({title:a,body:u,picUrl:y})}).then((function(e){return e.json()})).then((function(e){e.err?m.a.toast({html:e.err,classes:"#f44336 red"}):(m.a.toast({html:"Pic Uploaded",classes:"#00bfa5 teal accent-4"}),j.push("/"))}))}),[y]),l.a.createElement("div",{className:"card input-field",style:{margin:"50px auto",maxWidth:"500px",padding:"20px"}},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(){var e=new FormData;e.append("file",f),e.append("upload_preset","Picture gallery"),e.append("cloud_name","siddtechbadal"),fetch("\thttps://api.cloudinary.com/v1_1/siddtechbadal/image/upload",{method:"post",body:e}).then((function(e){return e.json()})).then((function(e){v(e.url),console.log(e)})).catch((function(e){console.log(e)}))}()}},l.a.createElement("label",{htmlFor:"title"},"Title"),l.a.createElement("input",{type:"text",placeholder:"title",value:a,onChange:function(e){return o(e.target.value)}}),l.a.createElement("label",{htmlFor:"body"},"Body"),l.a.createElement("input",{type:"text",placeholder:"body",value:u,onChange:function(e){d(e.target.value)}}),l.a.createElement("div",{className:"file-field input-field"},l.a.createElement("div",{className:"btn"},l.a.createElement("span",null,"Select Picture"),l.a.createElement("input",{type:"file",onChange:function(e){g(e.target.files[0])}})),l.a.createElement("div",{className:"file-path-wrapper"},l.a.createElement("input",{className:"file-path validate",type:"text"}))),l.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit"},"Upload")))},y=function(e,t){return"USER"==t.type?t.payload:"CLEAR"==t.type?null:"UPDATE"==t.type?Object(g.a)(Object(g.a)({},e),{},{followers:t.payload.followers,following:t.payload.following}):"UPDATEPIC"==t.type?Object(g.a)(Object(g.a)({},e),{},{pic:t.payload}):e},v=a(22);var j=function(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),a=t[0],o=t[1],c=Object(n.useContext)(N),i=c.state,u=c.dispatch,m=Object(s.g)().userid,d=Object(n.useState)(!i||!i.following.includes(m)),p=Object(r.a)(d,2),h=p[0],f=p[1];return Object(n.useEffect)((function(){fetch("http://localhost:1000/user/".concat(m),{headers:{Authorization:"Hello "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),o(e)}))}),[]),l.a.createElement(l.a.Fragment,null,a?l.a.createElement("div",{style:{maxWidth:"600px",margin:"10px auto"}},l.a.createElement("div",{style:{display:"flex",justifyContent:"space-around",margin:"20px 20px",borderBottom:"1px solid grey"}},l.a.createElement("div",null,l.a.createElement("img",{style:{width:"160px",height:"160px",borderRadius:"80px"},src:a.user.pic})),l.a.createElement("div",null,l.a.createElement("h4",null,a.user.name),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",width:"110%"}},l.a.createElement("h6",null,a.posts.length," Post"),l.a.createElement("h6",null,a.user.followers.length," Followers"),l.a.createElement("h6",null,a.user.following.length," Following")),h?l.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit",onClick:function(){fetch("http://localhost:1000/follow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Hello "+localStorage.getItem("jwt")},body:JSON.stringify({followId:m})}).then((function(e){return e.json()})).then((function(e){u({type:"UPDATE",payload:{following:e.following,followers:e.followers}}),localStorage.setItem("user",JSON.stringify(e)),o((function(t){return Object(g.a)(Object(g.a)({},t),{},{user:Object(g.a)(Object(g.a)({},t.user),{},{followers:[].concat(Object(v.a)(t.user.followers),[e._id])})})})),f(!1),console.log(e)}))}},"Follow"):l.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit",onClick:function(){fetch("http://localhost:1000/unfollow",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Hello "+localStorage.getItem("jwt")},body:JSON.stringify({unfollowId:m})}).then((function(e){return e.json()})).then((function(e){u({type:"UPDATE",payload:{following:e.following,followers:e.followers}}),localStorage.setItem("user",JSON.stringify(e)),o((function(t){var a=t.user.followers.filter((function(t){return t!=e._id}));return Object(g.a)(Object(g.a)({},t),{},{user:Object(g.a)(Object(g.a)({},t.user),{},{followers:a})})})),f(!0),console.log(e)}))}},"UnFollow"))),l.a.createElement("div",{className:"gallery",style:{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}},a.posts.map((function(e){return l.a.createElement("img",{key:e._id,className:"galleryItem",src:e.photo,alt:e.title})})))):l.a.createElement("h2",null,"loading!..."))};var w=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],o=t[1],c=Object(n.useContext)(N),s=c.state;return c.dispatch,Object(n.useEffect)((function(){fetch("http://localhost:1000/subscriberPost",{headers:{Authorization:"Hello "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e),o(e.posts)}))}),[]),l.a.createElement("div",{className:"home"},a.map((function(e){return l.a.createElement("div",{className:"card home-card",key:e._id},l.a.createElement("h5",{style:{padding:"5px"}},l.a.createElement(i.b,{to:(e.postedbyId._id,s._id,"/profile/"+e.postedbyId._id)},e.postedbyId.name)," ",e.postedbyId._id==s._id&&l.a.createElement("i",{className:"material-icons",style:{float:"right"},onClick:function(){return t=e._id,void fetch("http://localhost:1000/deletepost/".concat(t),{method:"delete",headers:{Authorization:"Hello "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=a.filter((function(t){return t._id!==e._id}));o(t)}));var t}},"delete")),l.a.createElement("div",{className:"card image"},l.a.createElement("img",{src:e.photo}),l.a.createElement("div",{className:"card-content"},e.likes.includes(s._id)?l.a.createElement("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("http://localhost:1000/unlike",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Hello "+localStorage.getItem("jwt")},body:JSON.stringify({postsId:t})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=a.map((function(t){return t._id==e._id?e:t}));o(t)})).catch((function(e){console.log(e)}))}},"thumb_down"):l.a.createElement("i",{className:"material-icons",onClick:function(){var t;t=e._id,fetch("http://localhost:1000/like",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Hello "+localStorage.getItem("jwt")},body:JSON.stringify({postsId:t})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=a.map((function(t){return t._id==e._id?e:t}));o(t)})).catch((function(e){console.log(e)}))}},"thumb_up"),l.a.createElement("h6",null,e.likes.length," likes"),l.a.createElement("h4",null,e.title),l.a.createElement("p",null,e.body),e.comments.map((function(e){return l.a.createElement("h6",{key:e._id},l.a.createElement("span",{style:{fontWeight:"500"}},e.postedbyId.name)," ",e.text)})),l.a.createElement("form",{onSubmit:function(t){var n,l;t.preventDefault(),n=t.target[0].value,l=e._id,fetch("http://localhost:1000/comment",{method:"put",headers:{"Content-Type":"application/json",Authorization:"Hello "+localStorage.getItem("jwt")},body:JSON.stringify({postsId:l,text:n})}).then((function(e){return e.json()})).then((function(e){console.log(e);var t=a.map((function(t){return t._id==e._id?e:t}));o(t)})).catch((function(e){console.log(e)})),console.log(t.target[0].value)}},l.a.createElement("input",{type:"text",placeholder:"comment something"})))))})))};var O=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],o=t[1],c=Object(s.f)("");return l.a.createElement("div",{className:"login-card"},l.a.createElement("div",{className:"card auth-card"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),fetch("http://localhost:1000/reset-password",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a})}).then((function(e){return e.json()})).then((function(e){e.err?m.a.toast({html:e.err,classes:"#f44336 red"}):(m.a.toast({html:e.message,classes:"#00bfa5 teal accent-4"}),c.push("/login"))})).catch((function(e){console.log(e)}))}},l.a.createElement("div",null,l.a.createElement("h1",{style:{textAlign:"center"}},"Reset-Password"),l.a.createElement("label",{htmlFor:"email"},"E-mail:"),l.a.createElement("input",{type:"email",placeholder:"Email",value:a,onChange:function(e){return o(e.target.value)}}),l.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit"},"Reset-Password")),l.a.createElement("div",null,l.a.createElement("h6",null,l.a.createElement(i.b,{to:"/signup"},"Have a Account?"))))))};var S=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],o=t[1],c=Object(s.f)(""),i=Object(s.g)().token;return console.log(i),l.a.createElement("div",{className:"login-card"},l.a.createElement("div",{className:"card auth-card"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),fetch("http://localhost:1000/new-password",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:a,token:i})}).then((function(e){return e.json()})).then((function(e){console.log(e),e.err?m.a.toast({html:e.err,classes:"#f44336 red"}):(m.a.toast({html:e.message,classes:"#00bfa5 teal accent-4"}),c.push("/login"))})).catch((function(e){console.log(e)}))}},l.a.createElement("div",null,l.a.createElement("h1",{style:{textAlign:"center"}},"Type New Password"),l.a.createElement("label",{htmlFor:"password"},"Password:"),l.a.createElement("input",{type:"password",placeholder:"Enter New Password",value:a,onChange:function(e){return o(e.target.value)}}),l.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit"},"Change Password")))))},N=Object(n.createContext)(),x=function(){var e=Object(s.f)(),t=Object(n.useContext)(N),a=(t.state,t.dispatch);return Object(n.useEffect)((function(){var t=JSON.parse(localStorage.getItem("user"));t?a({type:"USER",payload:t}):e.location.pathname.startsWith("/reset")||e.push("/login")}),[]),l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/",exact:!0},l.a.createElement(p,null)),l.a.createElement(s.a,{path:"/login"},l.a.createElement(h,null)),l.a.createElement(s.a,{path:"/signup"},l.a.createElement(f,null)),l.a.createElement(s.a,{exact:!0,path:"/myfeed"},l.a.createElement(E,null)),l.a.createElement(s.a,{path:"/createpost"},l.a.createElement(b,null)),l.a.createElement(s.a,{path:"/profile/:userid"},l.a.createElement(j,null)),l.a.createElement(s.a,{path:"/followersPage"},l.a.createElement(w,null)),l.a.createElement(s.a,{exact:!0,path:"/reset-password"},l.a.createElement(O,null)),l.a.createElement(s.a,{path:"/reset-password/:token"},l.a.createElement(S,null)))};var _=function(){var e=Object(n.useReducer)(y,null),t=Object(r.a)(e,2),a=t[0],o=t[1];return l.a.createElement("div",{className:"App"},l.a.createElement(N.Provider,{value:{state:a,dispatch:o}},l.a.createElement(i.a,null,l.a.createElement(d,null),l.a.createElement(x,null))))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(_,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.0af7ce3a.chunk.js.map