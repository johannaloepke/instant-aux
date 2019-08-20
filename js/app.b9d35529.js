(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)i=o[p],r[i]&&d.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/instant-aux/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("v-toolbar-title",[a("span",{staticClass:"headline font-weight-bold"},[t._v("Instant Aux")]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.smAndUp,expression:"$vuetify.breakpoint.smAndUp"}],staticClass:"font-weight-light title ml-5",domProps:{textContent:t._s(" Generate playlists that everyone will enjoy")}})]),a("v-spacer"),a("v-btn",{attrs:{href:"https://github.com/johannaloepke/instant-aux/",target:"_blank"}},[a("span",{staticClass:"mr-2"},[t._v("Source Code")])])],1),a("v-content",[a("router-view")],1)],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("h1",{staticClass:"display-2 font-weight-bold mt-3 pa-1 pt-5"},[t._v("\n        What do you want to hear?\n      ")]),a("h3",{staticClass:"font-weight-light mt-3 mb-5 pb-5 pt-2"},[t._v("\n        Please choose at least one genre or artist.\n      ")])]),a("v-flex",{attrs:{"mb-4":""}},[a("p",{staticClass:"display-1 font-weight-medium"},[t._v(" Genres ")]),a("Genres",{on:{genres_selected:function(e){return t.genresSelected(e)}}}),a("p",{staticClass:"display-1 font-weight-medium mt-5 pt-5 pb-3"},[t._v(" Artists ")]),a("SearchChips",{attrs:{label:"e.g. twenty one pilots"},on:{chip_searched:function(e){return t.artistsSearched(e)}}}),a("v-layout",{attrs:{"justify-center":""}},[a("v-flex",{attrs:{xs10:""}},[a("p",{staticClass:"display-1 font-weight-medium mt-5 pt-5 mb-7"},[t._v(" Track Attributes ")]),a("attribute-slider",{attrs:{label:"Acousticness",prependIcon:"mdi-guitar-electric",appendIcon:"mdi-guitar-acoustic"},on:{attribute_value:function(e){return t.acousticnessValue(e)}}})],1)],1),a("v-layout",{attrs:{"justify-center":""}},[a("v-flex",{attrs:{xs10:""}},[a("attribute-slider",{attrs:{label:"Danceability",prependIcon:"mdi-human-male",appendIcon:"mdi-human-handsup"},on:{attribute_value:function(e){return t.danceabilityValue(e)}}})],1)],1),a("v-layout",{attrs:{"justify-center":""}},[a("v-flex",{attrs:{xs10:""}},[a("attribute-slider",{attrs:{label:"Liveness",prependIcon:"mdi-headphones",appendIcon:"mdi-microphone-variant"},on:{attribute_value:function(e){return t.energyValue(e)}}})],1)],1),a("v-layout",{attrs:{"justify-center":""}},[a("v-flex",{attrs:{xs10:""}},[a("attribute-slider",{attrs:{label:"Energy",prependIcon:"mdi-tortoise",appendIcon:"mdi-rabbit"},on:{attribute_value:function(e){return t.energyValue(e)}}})],1)],1),a("v-layout",{attrs:{"justify-center":""}},[a("v-flex",{attrs:{xs10:""}},[a("attribute-slider",{attrs:{label:"Mood",prependIcon:"mdi-emoticon-sad",appendIcon:"mdi-emoticon-happy"},on:{attribute_value:function(e){return t.moodValue(e)}}})],1)],1)],1),a("v-layout",{attrs:{"justify-center":""}},[a("v-flex",{attrs:{xs10:"",md4:""}},[a("v-spacer"),a("v-btn",{attrs:{loading:t.loading,"x-large":"",block:"",color:"primary"},on:{click:t.submit}},[t._v(" \n        Submit \n        ")])],1)],1)],1)],1)},o=[],c=a("8683"),l=c["a"],u=(a("d514"),a("2877")),p=a("6544"),d=a.n(p),h=a("8336"),f=a("a523"),m=a("0e8f"),v=a("a722"),b=a("2fa4"),y=Object(u["a"])(l,i,o,!1,null,"4c2ab2b8",null),g=y.exports;d()(y,{VBtn:h["a"],VContainer:f["a"],VFlex:m["a"],VLayout:v["a"],VSpacer:b["a"]});var w={name:"App",components:{LandingPage:g},data:function(){return{}}},x=w,k=a("7496"),_=a("40dc"),C=a("a75b"),j=a("2a7f"),V=Object(u["a"])(x,r,s,!1,null,null,null),S=V.exports;d()(V,{VApp:k["a"],VAppBar:_["a"],VBtn:h["a"],VContent:C["a"],VSpacer:b["a"],VToolbarTitle:j["a"]});a("5363");var F=a("f309");n["a"].use(F["a"]);var I=new F["a"]({icons:{iconfont:"mdi"},theme:{themes:{light:{primary:"#1DB954",secondary:"#FFFFFF",accent:"#000000",error:"#D1001A",success:"#23947A",warning:"#FFC107"},dark:{primary:"#000000",secondary:"#1DB954",accent:"#FFFFFF",error:"#D1001A",success:"#23947A",warning:"#FFC107"}}},options:{customProperties:!0}}),O=a("8c4f"),$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-xs-center":"","justify-center":"",wrap:""}},[a("h1",{staticClass:"display-2 font-weight-bold ma-5 pa-3 pb-6 mb-10"},[t._v(" Results: ")]),t._l(t.embedLinks,function(t){return a("div",{key:t.id,staticClass:"mb-n8 mt-n5"},[a("iframe",{staticStyle:{width:"70vw",height:"50%"},attrs:{src:t,frameborder:"0",allowtransparency:"true",allow:"encrypted-media"}})])})],2)],1)},A=[],T=(a("ac4d"),a("8a81"),a("ac6a"),a("bc3a"),{components:{},data:function(){return{tracks:this.$route.params.tracks,embedLinks:[]}},created:function(){var t=!0,e=!1,a=void 0;try{for(var n,r=this.tracks[Symbol.iterator]();!(t=(n=r.next()).done);t=!0){var s=n.value;this.embedLinks.push("https://open.spotify.com/embed/track/"+s.id)}}catch(i){e=!0,a=i}finally{try{t||null==r.return||r.return()}finally{if(e)throw a}}},beforeDestroy:function(){delete this.tracks,delete this.embedLinks}}),L=T,P=(a("6f29"),Object(u["a"])(L,$,A,!1,null,"0a75705e",null)),B=P.exports;d()(P,{VContainer:f["a"],VLayout:v["a"]});var D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-center":"",wrap:""}},[a("h1",{staticClass:"display-2 font-weight-bold mt-3 pb-0 pa-3 pt-5"},[t._v("\n          404 Page Not Found\n      ")])])],1)},E=[],z={},G=Object(u["a"])(z,D,E,!1,null,null,null),M=G.exports;d()(G,{VContainer:f["a"],VLayout:v["a"]}),n["a"].use(O["a"]);var J=new O["a"]({mode:"history",base:"/instant-aux/",routes:[{path:"/",name:"home",component:g},{path:"/results",name:"results",component:B},{path:"*",component:M}],scrollBehavior:function(){return{x:0,y:0}}});n["a"].config.productionTip=!1,new n["a"]({vuetify:I,router:J,render:function(t){return t(S)}}).$mount("#app")},6788:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[a("v-switch",{staticClass:"ma-2",model:{value:t.active,callback:function(e){t.active=e},expression:"active"}}),a("v-slider",{attrs:{"append-icon":t.appendIcon,"prepend-icon":t.prependIcon,min:t.min,max:t.max,"thumb-label":"always",disabled:!t.active,label:t.label},model:{value:t.attribute,callback:function(e){t.attribute=e},expression:"attribute"}})],1)},r=[],s=(a("7ab5"),{data:function(){return{attribute:null,min:0,max:100,active:!1}},props:{appendIcon:null,prependIcon:null,label:""},watch:{attribute:function(t){this.$emit("attribute_value",t)},active:function(){this.active?(this.value=0,this.$emit("attribute_value",this.value)):(this.value=null,this.$emit("attribute_value",this.value))}}}),i=s,o=a("2877"),c=a("6544"),l=a.n(c),u=a("a722"),p=a("ba0d"),d=a("b73d"),h=Object(o["a"])(i,n,r,!1,null,null,null);e["a"]=h.exports;l()(h,{VLayout:u["a"],VSlider:p["a"],VSwitch:d["a"]})},"6f29":function(t,e,a){"use strict";var n=a("8a60"),r=a.n(n);r.a},8683:function(t,e,a){"use strict";(function(t){a("8615"),a("7f7f"),a("ac4d"),a("8a81"),a("ac6a"),a("386d"),a("6b54");var n=a("bc3a"),r=a.n(n),s=a("6788"),i=a("914e"),o=a("f154");a("56d7");e["a"]={components:{SearchChips:i["a"],Genres:o["a"],AttributeSlider:s["a"]},data:function(){return{loading:null,accessToken:"",genres:[],artists:[],artistToId:{},danceability:null,acousticness:null,liveness:null,mood:null,energy:null}},created:function(){this.authenticate()},methods:{authenticate:function(){var e=this,a="e64304571242409c98bc589eb90104c3:d1dcc0be90b14193b700494439faee80",n=new t(a).toString("base64"),s="https://accounts.spotify.com/api/token";r()({method:"post",url:"https://cors-anywhere.herokuapp.com/"+s,params:{grant_type:"client_credentials"},headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+n},data:null}).then(function(t){e.accessToken=t.data.access_token,e.$emit("authenticated")}).catch(function(t){console.log(t)})},genresSelected:function(t){this.genres=t},artistsSearched:function(t){this.artists=t,this.search()},danceabilityValue:function(t){this.danceability=t},acousticnessValue:function(t){this.acousticness=t},livenessValue:function(t){this.liveness=t},moodValue:function(t){this.mood=t},energyValue:function(t){this.energy=t},search:function(){var t=this,e="https://api.spotify.com/v1/search",a=!0,n=!1,s=void 0;try{for(var i,o=this.artists[Symbol.iterator]();!(a=(i=o.next()).done);a=!0){var c=i.value;this.artistToId[c.toLowerCase()]||r()({method:"get",url:"https://cors-anywhere.herokuapp.com/"+e,params:{q:c,type:"artist"},headers:{Authorization:"Bearer "+this.accessToken},data:null}).then(function(e){if(e.data){var a=e.data.artists.items[0];t.artistToId[a.name.toLowerCase()]=a.id}}).catch(function(t){console.log(t)})}}catch(l){n=!0,s=l}finally{try{a||null==o.return||o.return()}finally{if(n)throw s}}},submit:function(){var t=this;this.loading=!0;var e="https://api.spotify.com/v1/recommendations",a=Object.values(this.artistToId).slice(0,5-this.genres.length);console.log(this.danceability/100),r()({method:"get",url:"https://cors-anywhere.herokuapp.com/"+e,params:{seed_genres:this.genres.join(),seed_artists:a.join(),danceability:this.danceability/100,acousticness:this.acousticness/100,liveness:this.liveness/100,mood:this.mood/100,energy:this.energy/100},headers:{Authorization:"Bearer "+this.accessToken},data:null}).then(function(e){t.$router.push({name:"results",params:{tracks:e.data.tracks}})}).catch(function(e){t.loading=!1,console.log(e)})}},beforeDestroy:function(){delete this.genres,delete this.artists,delete this.artistToId}}}).call(this,a("b639").Buffer)},"8a60":function(t,e,a){},"914e":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{"justify-center":""}},[a("v-flex",{attrs:{xs10:""}},[a("v-combobox",{attrs:{chips:"","append-icon":"",clearable:"",label:t.label,multiple:"",solo:"",height:"80"},scopedSlots:t._u([{key:"selection",fn:function(e){var n=e.attrs,r=e.item,s=(e.select,e.selected);return[a("v-chip",t._b({attrs:{color:"primary","input-value":s,close:""},on:{"click:close":function(e){return t.remove(r)}}},"v-chip",n,!1),[a("strong",[t._v(t._s(r))]),t._v(" \n      ")])]}}]),model:{value:t.searchChips,callback:function(e){t.searchChips=e},expression:"searchChips"}})],1)],1)},r=[],s=a("75fc"),i={data:function(){return{searchChips:[],items:[]}},props:{label:""},watch:{searchChips:function(t){this.$emit("chip_searched",t)}},methods:{remove:function(t){this.searchChips.splice(this.searchChips.indexOf(t),1),this.searchChips=Object(s["a"])(this.searchChips)}},beforeDestroy:function(){delete this.searchChips,delete this.items}},o=i,c=a("2877"),l=a("6544"),u=a.n(l),p=a("cc20"),d=a("2b5d"),h=a("0e8f"),f=a("a722"),m=Object(c["a"])(o,n,r,!1,null,null,null);e["a"]=m.exports;u()(m,{VChip:p["a"],VCombobox:d["a"],VFlex:h["a"],VLayout:f["a"]})},d514:function(t,e,a){"use strict";var n=a("e4e7"),r=a.n(n);r.a},e4e7:function(t,e,a){},f154:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{"justify-center":""}},[a("v-flex",{attrs:{xs10:""}},[a("v-chip-group",{attrs:{multiple:"",max:"5",column:"","active-class":"primary--text"},model:{value:t.genresSelected,callback:function(e){t.genresSelected=e},expression:"genresSelected"}},t._l(t.genres,function(e){return a("v-chip",{key:e,attrs:{large:""}},[t._v("\n        "+t._s(e)+"\n      ")])}),1)],1)],1)},r=[],s=(a("ac4d"),a("8a81"),a("ac6a"),{data:function(){return{genres:["acoustic","afrobeat","alt-rock","alternative","ambient","anime","black-metal","bluegrass","blues","bossanova","brazil","breakbeat","british","cantopop","chicago-house","children","chill","classical","club","comedy","country","dance","dancehall","death-metal","deep-house","detroit-techno","disco","disney","drum-and-bass","dub","dubstep","edm","electro","electronic","emo","folk","forro","french","funk","garage","german","gospel","goth","grindcore","groove","grunge","guitar","happy","hard-rock","hardcore","hardstyle","heavy-metal","hip-hop","holidays","honky-tonk","house","idm","indian","indie","indie-pop","industrial","iranian","j-dance","j-idol","j-pop","j-rock","jazz","k-pop","kids","latin","latino","malay","mandopop","metal","metal-misc","metalcore","minimal-techno","movies","mpb","new-age","new-release","opera","pagode","party","philippines-opm","piano","pop","pop-film","post-dubstep","power-pop","progressive-house","psych-rock","punk","punk-rock","r-n-b","rainy-day","reggae","reggaeton","road-trip","rock","rock-n-roll","rockabilly","romance","sad","salsa","samba","sertanejo","show-tunes","singer-songwriter","ska","sleep","songwriter","soul","soundtracks","spanish","study","summer","swedish","synth-pop","tango","techno","trance","trip-hop","turkish","work-out","world-music"],genresSelected:[]}},watch:{genresSelected:function(t){var e=[],a=!0,n=!1,r=void 0;try{for(var s,i=t[Symbol.iterator]();!(a=(s=i.next()).done);a=!0){var o=s.value;e.push(this.genres[o])}}catch(c){n=!0,r=c}finally{try{a||null==i.return||i.return()}finally{if(n)throw r}}this.$emit("genres_selected",e)}},beforeDestroy:function(){delete this.genres}}),i=s,o=a("2877"),c=a("6544"),l=a.n(c),u=a("cc20"),p=a("ef9a"),d=a("0e8f"),h=a("a722"),f=Object(o["a"])(i,n,r,!1,null,null,null);e["a"]=f.exports;l()(f,{VChip:u["a"],VChipGroup:p["a"],VFlex:d["a"],VLayout:h["a"]})}});
//# sourceMappingURL=app.b9d35529.js.map