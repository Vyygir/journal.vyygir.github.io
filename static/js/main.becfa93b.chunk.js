(this["webpackJsonpjournal.vyygir.me"]=this["webpackJsonpjournal.vyygir.me"]||[]).push([[0],{115:function(t,e,n){},116:function(t,e,n){},117:function(t,e,n){},121:function(t,e,n){},124:function(t,e,n){},125:function(t,e,n){},129:function(t,e,n){},509:function(t,e,n){"use strict";n.r(e);var s=n(0),i=n.n(s),a=n(97),r=n.n(a),c=n(22),o=n(3),h=n(18),l=(n(115),n(116),function(t){void 0===t&&(t=(new Date).getTime()),this.N=624,this.M=397,this.MATRIX_A=2567483615,this.UPPER_MASK=2147483648,this.LOWER_MASK=2147483647,this.mt=[this.N],this.mti=this.N+1,this.init_genrand(t)});function j(t){return new l(t).random()}l.prototype.init_genrand=function(t){for(this.mt[0]=t>>>0,this.mti=1;this.mti<this.N;this.mti++){var e=this.mt[this.mti-1]^this.mt[this.mti-1]>>>30;this.mt[this.mti]=(1812433253*((4294901760&e)>>>16)<<16)+1812433253*(65535&e)+this.mti,this.mt[this.mti]>>>=0}},l.prototype.init_by_array=function(t,e){var n,s,i;for(this.init_genrand(19650218),n=1,s=0,i=this.N>e?this.N:e;i;i--){var a=this.mt[n-1]^this.mt[n-1]>>>30;this.mt[n]=(this.mt[n]^(1664525*((4294901760&a)>>>16)<<16)+1664525*(65535&a))+t[s]+s,this.mt[n]>>>=0,s++,++n>=this.N&&(this.mt[0]=this.mt[this.N-1],n=1),s>=e&&(s=0)}for(i=this.N-1;i;i--){var r=this.mt[n-1]^this.mt[n-1]>>>30;this.mt[n]=(this.mt[n]^(1566083941*((4294901760&r)>>>16)<<16)+1566083941*(65535&r))-n,this.mt[n]>>>=0,++n>=this.N&&(this.mt[0]=this.mt[this.N-1],n=1)}this.mt[0]=2147483648},l.prototype.genrand_int32=function(){var t,e=[0,this.MATRIX_A];if(this.mti>=this.N){var n;for(this.mti===this.N+1&&this.init_genrand(5489),n=0;n<this.N-this.M;n++)t=this.mt[n]&this.UPPER_MASK|this.mt[n+1]&this.LOWER_MASK,this.mt[n]=this.mt[n+this.M]^t>>>1^e[1&t];for(;n<this.N-1;n++)t=this.mt[n]&this.UPPER_MASK|this.mt[n+1]&this.LOWER_MASK,this.mt[n]=this.mt[n+(this.M-this.N)]^t>>>1^e[1&t];t=this.mt[this.N-1]&this.UPPER_MASK|this.mt[0]&this.LOWER_MASK,this.mt[this.N-1]=this.mt[this.M-1]^t>>>1^e[1&t],this.mti=0}return t=this.mt[this.mti++],t^=t>>>11,t^=t<<7&2636928640,t^=t<<15&4022730752,(t^=t>>>18)>>>0},l.prototype.genrand_int31=function(){return this.genrand_int32()>>>1},l.prototype.genrand_real1=function(){return this.genrand_int32()*(1/4294967295)},l.prototype.random=function(){return this.genrand_int32()*(1/4294967296)},l.prototype.genrand_real3=function(){return(this.genrand_int32()+.5)*(1/4294967296)},l.prototype.genrand_res53=function(){return(67108864*(this.genrand_int32()>>>5)+(this.genrand_int32()>>>6))*(1/9007199254740992)};var u=["Sometimes sober ramblings","Offense intended","Hail Satan","Laughs in billable hours","Mo' metal, no problems"],m=n(6),d=n(7),p=n(9),b=n(8),O=(n(117),n(1)),f=function(t){Object(p.a)(n,t);var e=Object(b.a)(n);function n(){return Object(m.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"page-header",children:Object(O.jsx)("h1",{className:"page-header__title",children:Object(O.jsx)(c.b,{to:"/",children:this.props.title})})})}}]),n}(i.a.Component),g=(n(121),function(t){Object(p.a)(n,t);var e=Object(b.a)(n);function n(){return Object(m.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{className:this.props.class,children:this.props.children})}}]),n}(i.a.Component));function v(t,e){window.fetch("https://graphql.contentful.com/content/v1/spaces/".concat("bukwijr8w13c"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat("mGmA-gR664wswQQ0IPt4EJEi19leIEBFC0yLL3uoQis")},body:JSON.stringify({query:t})}).then((function(t){return t.json()})).then((function(t){var n=t.data,s=t.errors;"function"===typeof e&&e({data:n,errors:s})}))}var x=n(108),y=n(36),_=n.n(y),N=n(19),w=n.n(N),M=function(t){Object(p.a)(n,t);var e=Object(b.a)(n);function n(){return Object(m.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){if(this.props.tag){var t=this.props.element||"span",e=this.props.tag;return i.a.createElement(t,{className:"tag-list__item"},e.title)}}}]),n}(i.a.Component),A=(n(124),function(t){Object(p.a)(n,t);var e=Object(b.a)(n);function n(){return Object(m.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props.tags;if(t)return Object(O.jsx)("ul",{className:"tag-list",children:t.map((function(t,e){return Object(O.jsx)(M,{tag:t,element:"li"},e)}))})}}]),n}(i.a.Component)),k=(n(125),function(t){Object(p.a)(n,t);var e=Object(b.a)(n);function n(){return Object(m.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props.data;return t?Object(O.jsxs)("div",{className:"post-item",children:[Object(O.jsxs)("article",{className:"post-item__content",children:[Object(O.jsx)("h3",{className:"post-item__title anaglyph-title",children:Object(O.jsx)(c.b,{to:"/post/".concat(t.slug),children:t.title})}),t.excerpt?Object(O.jsx)("p",{children:t.excerpt}):""]}),Object(O.jsxs)("footer",{className:"post-item__meta",children:[Object(O.jsxs)("span",{className:"post-item__date",children:["Posted on ",Object(O.jsx)("time",{dateTime:t.publishedAt,children:Object(O.jsx)(_.a,{format:"Do MMMM, YYYY [at] h:mma",children:t.publishedAt})})]}),Object(O.jsx)(A,{tags:t.tagCollection.items||[]})]})]}):Object(x.a)(Array(3)).map((function(t,e){return Object(O.jsxs)("div",{className:"post-item",children:[Object(O.jsxs)("article",{className:"post-item__content",children:[Object(O.jsx)("h3",{className:"post-item__title",children:Object(O.jsx)(w.a,{})}),Object(O.jsx)("p",{children:Object(O.jsx)(w.a,{count:3})})]}),Object(O.jsx)("footer",{className:"post-item__meta",children:Object(O.jsx)("span",{className:"post-item__date",children:Object(O.jsx)(w.a,{width:300,height:15})})})]},e)}))}}]),n}(i.a.Component)),C=(n(129),function(t){Object(p.a)(n,t);var e=Object(b.a)(n);function n(){var t;return Object(m.a)(this,n),(t=e.call(this)).state={posts:[]},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;v("{\n    postCollection {\n        items {\n            title\n            slug\n            excerpt\n            tagCollection {\n                items {\n                    title\n                }\n            }\n            sys {\n                publishedAt\n                publishedVersion\n            }\n        }\n    }\n}",(function(e){var n=e.data,s=e.errors;s&&console.log(s),t.setState({posts:n.postCollection.items})}))}},{key:"render",value:function(){var t=Object(O.jsx)("div",{className:"test",children:"skeleton goes here"});return this.state.posts&&(t=this.state.posts.map((function(t,e){return Object(O.jsx)(k,{data:t},e)}))),Object(O.jsx)("div",{className:"post-list",children:t})}}]),n}(i.a.Component)),S=n(101),T=n.n(S),E=n(102),P=n.n(E);var I=n(511),R=n(107),Y=function(t){Object(p.a)(n,t);var e=Object(b.a)(n);function n(){return Object(m.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props,e=t.language,n=t.value;return Object(O.jsx)(I.a,{language:e,style:R.okaidia,children:n})}}]),n}(s.PureComponent);Y.defaultProps={language:null};n(95);var L=function(t){Object(p.a)(n,t);var e=Object(b.a)(n);function n(){var t;return Object(m.a)(this,n),(t=e.call(this)).state={post:null},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t,e,n=this;t=this.props.match.params.slug,e=function(t){var e=t.data,s=t.errors;s&&console.log(s),n.setState({post:e.postCollection.items[0]||!1})},v('{\n    postCollection(where: {slug: "{slug}"}) {\n        items {\n            title\n            content\n            tagCollection {\n                items {\n                    title\n                }\n            }\n        }\n    }\n}'.replace("{slug}",t),e)}},{key:"render",value:function(){var t=this.state.post;return null===t?Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)(h.a,{children:Object(O.jsx)("title",{children:"Loading post"})}),Object(O.jsxs)("div",{className:"post-view",children:[Object(O.jsx)("h2",{className:"post-view__title",children:Object(O.jsx)(w.a,{})}),Object(O.jsx)("div",{className:"post-view__meta",children:Object(O.jsx)(w.a,{width:300,height:15})}),Object(O.jsx)("article",{className:"post-view__content",children:Object(O.jsx)(w.a,{count:20})})]})]}):!1===t?Object(O.jsx)(o.a,{to:"/not-found"}):Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)(h.a,{children:Object(O.jsxs)("title",{children:['Reading: "',t.title,'"']})}),Object(O.jsxs)("div",{className:"post-view",children:[Object(O.jsx)("h2",{className:"post-view__title anaglyph-title",children:Object(O.jsx)("span",{children:t.title})}),Object(O.jsxs)("div",{className:"post-view__meta",children:[Object(O.jsxs)("span",{className:"post-view__date",children:["Posted on ",Object(O.jsx)("time",{dateTime:t.publishedAt,children:Object(O.jsx)(_.a,{format:"Do MMMM, YYYY [at] h:mma",children:t.publishedAt})})]}),Object(O.jsx)(A,{tags:t.tagCollection.items||[]})]}),Object(O.jsx)("article",{className:"post-view__content",children:Object(O.jsx)(T.a,{source:t.content,renderers:{code:Y},plugins:[P.a]})})]})]})}}]),n}(i.a.Component),K=["Trying is the first step towards failure.","Success is just failure that hasn't happened yet.","Not everything is a lesson. Sometimes you just fail.","If at first you don't success, try, try again. Then quit. No use being a damn fool about it.","I'm sure the universe is full of intelligentl ife. It's just been too intelligent to come here.","Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.","Always remember that you are absolutely unique. Just like everyone else.","I am free of all prejudice. I hate everyone equally.","Light travels faster than sound. This is why some people appear bright until you hear them speak.","Hope is the first step on the road to disappointment.","The story so far: in the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.","Everything happens for a reason. Sometimes the reason is you're stupid and make bad decisions."],q=function(t){Object(p.a)(n,t);var e=Object(b.a)(n);function n(){return Object(m.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(O.jsxs)(s.Fragment,{children:[Object(O.jsx)(h.a,{children:Object(O.jsx)("title",{children:"There's nothing here"})}),Object(O.jsxs)("div",{className:"post-view",children:[Object(O.jsx)("h2",{className:"post-view__title anaglyph-title",children:Object(O.jsx)("span",{children:"You've found nothing. Well done."})}),Object(O.jsxs)("article",{className:"post-view__content",children:[Object(O.jsx)("p",{children:"There's nothing here yet. If you intended to find something, then you're going about it the wrong way."}),Object(O.jsx)("p",{children:"Your prize? A demotivational quote to remind you how awful you are."}),Object(O.jsx)("blockquote",{children:Object(O.jsx)("p",{children:K[Math.floor(j()*K.length)]})})]})]})]})}}]),n}(i.a.Component),D=u[Math.floor(j()*u.length)];r.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsxs)(h.b,{children:[Object(O.jsx)(h.a,{children:Object(O.jsx)("title",{children:D})}),Object(O.jsxs)(c.a,{basename:"",children:[Object(O.jsx)(f,{title:D}),Object(O.jsx)("div",{className:"container",children:Object(O.jsx)(g,{class:"page-content",children:Object(O.jsxs)(o.d,{children:[Object(O.jsx)(o.b,{path:"/not-found",component:q}),Object(O.jsx)(o.b,{path:"/post/:slug",component:L}),Object(O.jsx)(o.b,{path:"/",component:C}),Object(O.jsx)(o.b,{component:q})]})})})]})]})}),document.getElementById("root"))},95:function(t,e,n){}},[[509,1,2]]]);
//# sourceMappingURL=main.becfa93b.chunk.js.map