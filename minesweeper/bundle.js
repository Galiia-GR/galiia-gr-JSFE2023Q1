!function(){"use strict";var s={};s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(s){if("object"==typeof window)return window}}(),function(){var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var a=n.length-1;a>-1&&!e;)e=n[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e}();const e=s.p+"./audio/win.c59a615a1da600c23dde.mp3",t=s.p+"./audio/flag.13a651bebe8f5a6f15ee.wav";var n,a=0,i=!1;function c(s){if(console.log(L),n=Number(s.getAttribute("id")),!(s.classList.contains("open")||s.classList.contains("flag")||h||s.classList.contains("bomb")||s.classList.contains("bomb-medium")||s.classList.contains("bomb-hard"))){var e=s.getAttribute("data");if(0!=e)switch(s.innerText=e,s.classList.add("open"),s.classList.add("number"),e){case"1":s.classList.add("one");break;case"2":s.classList.add("two");break;case"3":s.classList.add("three");break;case"4":s.classList.add("four")}document.querySelector(".active-easy")&&(function(s){var e=s%r==0,t=s%r==r-1;setTimeout((function(){if(s+1<=r*r-1&&!t&&!E[s].classList.contains("number")&&!E[s+1].classList.contains("open")&&!E[s+1].classList.contains("flag")&&!E[s+1].classList.contains("bomb")){var n=E[s+1].id;c(document.getElementById(n))}if(s-1>=0&&!e&&!E[s].classList.contains("number")&&!E[s-1].classList.contains("open")&&!E[s-1].classList.contains("flag")&&!E[s-1].classList.contains("bomb")){var a=E[s-1].id;c(document.getElementById(a))}if(s+r<=r*r-1&&!E[s].classList.contains("number")&&!E[s+r].classList.contains("open")&&!E[s+r].classList.contains("flag")&&!E[s+r].classList.contains("bomb")){var i=E[s+r].id;c(document.getElementById(i))}if(s+(r+1)<=r*r-1&&!t&&!E[s].classList.contains("number")&&!E[s+(r+1)].classList.contains("open")&&!E[s+(r+1)].classList.contains("flag")&&!E[s+(r+1)].classList.contains("bomb")){var o=E[s+(r+1)].id;c(document.getElementById(o))}if(s+(r-1)<=r*r-1&&!e&&!E[s].classList.contains("number")&&!E[s+(r-1)].classList.contains("open")&&!E[s+(r-1)].classList.contains("flag")&&!E[s+(r-1)].classList.contains("bomb")){var d=E[s+(r-1)].id;c(document.getElementById(d))}if(s-(r-1)>=0&&!t&&!E[s].classList.contains("number")&&!E[s-(r-1)].classList.contains("open")&&!E[s-(r-1)].classList.contains("flag")&&!E[s-(r-1)].classList.contains("bomb")){var l=E[s-(r-1)].id;c(document.getElementById(l))}if(s-r>=0&&!E[s].classList.contains("number")&&!E[s-r].classList.contains("open")&&!E[s-r].classList.contains("flag")&&!E[s-r].classList.contains("bomb")){var m=E[s-r].id;c(document.getElementById(m))}if(s-(r+1)>=0&&!e&&!E[s].classList.contains("number")&&!E[s-(r+1)].classList.contains("open")&&!E[s-(r+1)].classList.contains("flag")&&!E[s-(r+1)].classList.contains("bomb")){var L=E[s-(r+1)].id;c(document.getElementById(L))}}),50)}(n),console.log(n),E[n].classList.add("open")),document.querySelector(".active-medium")&&(function(s){var e=s%r==0,t=s%r==r-1;setTimeout((function(){if(s+1<=r*r-1&&!t&&!y[s].classList.contains("number")&&!y[s+1].classList.contains("open")&&!y[s+1].classList.contains("flag")&&!y[s+1].classList.contains("bomb-medium")){var n=y[s+1].id;c(document.getElementById(n))}if(s-1>=0&&!e&&!y[s].classList.contains("number")&&!y[s-1].classList.contains("open")&&!y[s-1].classList.contains("flag")&&!y[s-1].classList.contains("bomb-medium")){var a=y[s-1].id;c(document.getElementById(a))}if(s+r<=r*r-1&&!y[s].classList.contains("number")&&!y[s+r].classList.contains("open")&&!y[s+r].classList.contains("flag")&&!y[s+r].classList.contains("bomb-medium")){var i=y[s+r].id;c(document.getElementById(i))}if(s+(r+1)<=r*r-1&&!t&&!y[s].classList.contains("number")&&!y[s+(r+1)].classList.contains("open")&&!y[s+(r+1)].classList.contains("flag")&&!y[s+(r+1)].classList.contains("bomb-medium")){var o=y[s+(r+1)].id;c(document.getElementById(o))}if(s+(r-1)<=r*r-1&&!e&&!y[s].classList.contains("number")&&!y[s+(r-1)].classList.contains("open")&&!y[s+(r-1)].classList.contains("flag")&&!y[s+(r-1)].classList.contains("bomb-medium")){var d=y[s+(r-1)].id;c(document.getElementById(d))}if(s-(r-1)>=0&&!t&&!y[s].classList.contains("number")&&!y[s-(r-1)].classList.contains("open")&&!y[s-(r-1)].classList.contains("flag")&&!y[s-(r-1)].classList.contains("bomb-medium")){var l=y[s-(r-1)].id;c(document.getElementById(l))}if(s-r>=0&&!y[s].classList.contains("number")&&!y[s-r].classList.contains("open")&&!y[s-r].classList.contains("flag")&&!y[s-r].classList.contains("bomb-medium")){var m=y[s-r].id;c(document.getElementById(m))}if(s-(r+1)>=0&&!e&&!y[s].classList.contains("number")&&!y[s-(r+1)].classList.contains("open")&&!y[s-(r+1)].classList.contains("flag")&&!y[s-(r+1)].classList.contains("bomb-medium")){var L=y[s-(r+1)].id;c(document.getElementById(L))}}),50)}(n),console.log(n),y[n].classList.add("open")),document.querySelector(".active-hard")&&(function(s){var e=s%r==0,t=s%r==r-1;setTimeout((function(){if(s+1<=r*r-1&&!t&&!T[s].classList.contains("number")&&!T[s+1].classList.contains("open")&&!T[s+1].classList.contains("flag")&&!T[s+1].classList.contains("bomb-hard")){var n=T[s+1].id;c(document.getElementById(n))}if(s-1>=0&&!e&&!T[s].classList.contains("number")&&!T[s-1].classList.contains("open")&&!T[s-1].classList.contains("flag")&&!T[s-1].classList.contains("bomb-hard")){var a=T[s-1].id;c(document.getElementById(a))}if(s+r<=r*r-1&&!T[s].classList.contains("number")&&!T[s+r].classList.contains("open")&&!T[s+r].classList.contains("flag")&&!T[s+r].classList.contains("bomb-hard")){var i=T[s+r].id;c(document.getElementById(i))}if(s+(r+1)<=r*r-1&&!t&&!T[s].classList.contains("number")&&!T[s+(r+1)].classList.contains("open")&&!T[s+(r+1)].classList.contains("flag")&&!T[s+(r+1)].classList.contains("bomb-hard")){var o=T[s+(r+1)].id;c(document.getElementById(o))}if(s+(r-1)<=r*r-1&&!e&&!T[s].classList.contains("number")&&!T[s+(r-1)].classList.contains("open")&&!T[s+(r-1)].classList.contains("flag")&&!T[s+(r-1)].classList.contains("bomb-hard")){var d=T[s+(r-1)].id;c(document.getElementById(d))}if(s-(r-1)>=0&&!t&&!T[s].classList.contains("number")&&!T[s-(r-1)].classList.contains("open")&&!T[s-(r-1)].classList.contains("flag")&&!T[s-(r-1)].classList.contains("bomb-hard")){var l=T[s-(r-1)].id;c(document.getElementById(l))}if(s-r>=0&&!T[s].classList.contains("number")&&!T[s-r].classList.contains("open")&&!T[s-r].classList.contains("flag")&&!T[s-r].classList.contains("bomb-hard")){var m=T[s-r].id;c(document.getElementById(m))}if(s-(r+1)>=0&&!e&&!T[s].classList.contains("number")&&!T[s-(r+1)].classList.contains("open")&&!T[s-(r+1)].classList.contains("flag")&&!T[s-(r+1)].classList.contains("bomb-hard")){var L=T[s-(r+1)].id;c(document.getElementById(L))}}),50)}(n),console.log(n),T[n].classList.add("open"))}}function o(s){var n=document.querySelector(".drawFlag"),c=document.querySelector(".drawBombs");!h&&!s.classList.contains("open")&&a<m&&(s.classList.contains("flag")?(s.classList.remove("flag"),a--,n.innerText=a,c.innerText=m-a):(g&&new Audio(t).play(),s.classList.add("flag"),a++,n.innerText=a,c.innerText=m-a,function(){for(var s=0,e=0;e<E.length;e++)if(E[e].classList.contains("flag")&&E[e].classList.contains("bomb")&&s++,s===m){i=!0,clearInterval(u),document.querySelector(".gameSummary").innerText="HOORAY YOU WON!!!";for(var t=0;t<E.length;t++)E[t].classList.add("win")}for(var n=0;n<y.length;n++)if(y[n].classList.contains("flag")&&y[n].classList.contains("bomb-medium")&&s++,s===m){i=!0,clearInterval(u),document.querySelector(".gameSummary").innerText="HOORAY YOU WON!!!";for(var a=0;a<y.length;a++)y[a].classList.add("win")}for(var c=0;c<T.length;c++)if(T[c].classList.contains("flag")&&T[c].classList.contains("bomb-hard")&&s++,s===m){i=!0,clearInterval(u),document.querySelector(".gameSummary").innerText="HOORAY YOU WON!!!";for(var o=0;o<T.length;o++)T[o].classList.add("win")}i&&(document.querySelector(".score__list").innerHTML+='\n     <span class="time__result"> your time\n     '.concat(document.querySelector(".timer__sec").textContent,' sec\n     </span> <span class="moves__result">').concat(document.querySelector(".timer__mov").textContent," moves</span>"))}(),g&&i&&(new Audio(e).play(),document.querySelector(".score__list").classList.remove("score__hide"))))}const d=s.p+"./audio/loose.28fb0d430b5aab739121.wav",l=s.p+"./audio/open2.b84b86dd85540ed5d0b3.wav";var r,m,L,u,b,v,f,p=document.body,h=!1,g=!0,E=[],y=[],T=[],_=0,w=document.createElement("div"),x=document.createElement("header"),C=document.createElement("h1"),I=document.createElement("p"),O=document.createElement("div"),S=document.createElement("div"),B=document.createElement("div"),A=document.createElement("div"),k=document.createElement("div"),M=document.createElement("div"),q=document.createElement("div"),H=document.createElement("div"),Y=document.createElement("div"),D=document.createElement("div"),U=document.createElement("div"),N=document.createElement("div"),P=document.createElement("div"),R=document.createElement("div"),F=document.createElement("div"),W=document.createElement("div"),$=document.createElement("div"),j=document.createElement("div"),V=document.createElement("div"),z=document.createElement("div"),G=document.createElement("div"),J=document.createElement("div"),K=document.createElement("div"),Q=document.createElement("div"),X=document.createElement("div"),Z=document.createElement("div");function ss(){w.classList.add("container"),p.appendChild(w),x.classList.add("header"),w.appendChild(x),C.classList.add("header__title"),x.appendChild(C),C.innerText="minesweeper",O.classList.add("header__wrapper"),x.appendChild(O),S.classList.add("header__flag"),O.appendChild(S),S.innerText="flags",B.classList.add("drawFlag"),S.appendChild(B),B.innerText=0,A.classList.add("header__mines"),O.appendChild(A),A.innerText="mines",k.classList.add("drawBombs"),A.appendChild(k),M.classList.add("header__sound"),O.appendChild(M),M.innerText="sound",q.classList.add("drawSounds"),M.appendChild(q),q.innerText="pull",H.classList.add("header__start"),O.appendChild(H),H.innerText="start",Y.classList.add("drawStart"),H.appendChild(Y),Y.innerText="pull",D.classList.add("header__score"),O.appendChild(D),D.innerText="score",U.classList.add("drawList"),D.appendChild(U),U.innerText="list",z.classList.add("header__dark"),O.appendChild(z),z.innerText="Theme",G.classList.add("drawTheme"),z.appendChild(G),G.innerText="Dark",P.classList.add("header__level"),O.appendChild(P),P.innerText="level",R.classList.add("level__easy"),P.appendChild(R),R.innerText="easy",F.classList.add("level__medium"),P.appendChild(F),F.innerText="medium",W.classList.add("level__hard"),P.appendChild(W),W.innerText="hard",$.classList.add("minesweeper1"),w.appendChild($),j.classList.add("minesweeper2"),w.appendChild(j),V.classList.add("minesweeper3"),w.appendChild(V),I.classList.add("gameSummary"),w.appendChild(I),I.innerText="",J.classList.add("timer"),w.appendChild(J),K.classList.add("timer__draw"),J.appendChild(K),K.innerText="YOU TIME: ",Q.classList.add("timer__draw"),J.appendChild(Q),Q.innerText="YOU MOVE: ",X.classList.add("timer__sec"),K.appendChild(X),X.innerText="0",Z.classList.add("timer__mov"),Q.appendChild(Z),Z.innerText=_,N.classList.add("score__list"),w.appendChild(N),N.innerText="RESULTS",N.classList.add("score__hide"),g&&q.classList.add("active-music"),W.classList.contains("active-hard")||R.classList.contains("active-easy")||F.classList.contains("active-medium")||(R.classList.add("active-easy"),j.classList.add("hide"),V.classList.add("hide"),L=1,r=10,m=10,k.innerText=m,j.innerHTML="",V.innerHTML="",es(r,m,L),function(s){s.forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault(),_++,Z.innerText=_,e.classList.contains("bomb")&&(h=!0,clearInterval(u),I.innerText="BOOM! OOPS YOU LOST!",g&&new Audio(d).play(),s.forEach((function(s){s.classList.contains("bomb")&&s.classList.contains("bomb")&&s.classList.add("bomb-open")}))),e.classList.contains("flag")||(c(e),g&&new Audio(l).play())}))})),s.forEach((function(s){s.addEventListener("contextmenu",(function(s){s.preventDefault(),o(s.target)}))}))}(E),console.log(E)),F.classList.contains("active-medium")&&(L=2,r=15,m=25,k.innerText=m,$.innerHTML="",V.innerHTML="",es(r,m,L),function(s){s.forEach((function(e){e.addEventListener("click",(function(t){_++,Z.innerText=_,t.preventDefault(),e.classList.contains("bomb-medium")&&(h=!0,clearInterval(u),I.innerText="BOOM! OOPS YOU LOST!",g&&new Audio(d).play(),s.forEach((function(s){s.classList.contains("bomb-medium")&&s.classList.add("bomb-open")}))),e.classList.contains("flag")||(c(e),g&&new Audio(l).play())}))})),s.forEach((function(s){s.addEventListener("contextmenu",(function(s){s.preventDefault(),o(s.target)}))}))}(y),console.log(y)),W.classList.contains("active-hard")&&(L=3,r=25,m=65,k.innerText=m,$.innerHTML="",j.innerHTML="",es(r,m,L),function(s){s.forEach((function(e){e.addEventListener("click",(function(t){_++,Z.innerText=_,t.preventDefault(),e.classList.contains("bomb-hard")&&(h=!0,clearInterval(u),I.innerText="BOOM! OOPS YOU LOST!",g&&new Audio(d).play(),s.forEach((function(s){s.classList.contains("bomb-hard")&&s.classList.add("bomb-open")}))),e.classList.contains("flag")||(c(e),g&&new Audio(l).play())}))})),s.forEach((function(s){s.addEventListener("contextmenu",(function(s){s.preventDefault(),o(s.target)}))}))}(T),console.log(T)),P.addEventListener("click",(function(s){s.preventDefault(),s.target.classList.contains("level__easy")&&(R.classList.add("active-easy"),F.classList.remove("active-medium"),W.classList.remove("active-hard"),document.innerHTML="",ss(),$.classList.remove("hide"),j.classList.add("hide"),V.classList.add("hide")),s.target.classList.contains("level__medium")&&(F.classList.add("active-medium"),R.classList.remove("active-easy"),W.classList.remove("active-hard"),document.innerHTML="",ss(),$.classList.add("hide"),j.classList.remove("hide"),V.classList.add("hide")),s.target.classList.contains("level__hard")&&(W.classList.add("active-hard"),R.classList.remove("active-easy"),F.classList.remove("active-medium"),document.innerHTML="",ss(),$.classList.add("hide"),j.classList.add("hide"),V.classList.remove("hide"))}))}function es(s,e,t){if(1===t){b=Array(e).fill("bomb"),v=Array(s*s-e).fill("field"),f=v.concat(b).sort((function(){return Math.random()-.5}));for(var n=0;n<s*s;n++){var a=document.createElement("div");a.classList.add(f[n]),a.setAttribute("id",n),document.querySelector(".minesweeper1").appendChild(a),E.push(a)}for(var i=0;i<E.length;i++){var c=0,o=i%s==0,d=i%s==s-1;E[i].classList.contains("field")&&(i-1>=0&&!o&&E[i-1].classList.contains("bomb")&&c++,i+(s-1)<=s*s-1&&!o&&E[i+(s-1)].classList.contains("bomb")&&c++,i-s>=0&&E[i-s].classList.contains("bomb")&&c++,i-(s-1)>=0&&!d&&E[i-(s-1)].classList.contains("bomb")&&c++,i+1<=s*s-1&&!d&&E[i+1].classList.contains("bomb")&&c++,i-(s+1)>=0&&!o&&E[i-(s+1)].classList.contains("bomb")&&c++,i+(s+1)<=s*s-1&&!d&&E[i+(s+1)].classList.contains("bomb")&&c++,i+s<=s*s-1&&E[i+s].classList.contains("bomb")&&c++,E[i].setAttribute("data",c))}}if(2===t){b=Array(e).fill("bomb-medium"),v=Array(s*s-e).fill("field-medium"),f=v.concat(b).sort((function(){return Math.random()-.5}));for(var l=0;l<s*s;l++){var r=document.createElement("div");r.classList.add(f[l]),r.setAttribute("id",l),document.querySelector(".minesweeper2").appendChild(r),y.push(r)}for(var m=0;m<y.length;m++){var L=0,u=m%s==0,p=m%s==s-1;y[m].classList.contains("field-medium")&&(m-1>=0&&!u&&y[m-1].classList.contains("bomb-medium")&&L++,m+(s-1)<=s*s-1&&!u&&y[m+(s-1)].classList.contains("bomb-medium")&&L++,m-s>=0&&y[m-s].classList.contains("bomb-medium")&&L++,m-(s-1)>=0&&!p&&y[m-(s-1)].classList.contains("bomb-medium")&&L++,m+1<=s*s-1&&!p&&y[m+1].classList.contains("bomb-medium")&&L++,m-(s+1)>=0&&!u&&y[m-(s+1)].classList.contains("bomb-medium")&&L++,m+(s+1)<=s*s-1&&!p&&y[m+(s+1)].classList.contains("bomb-medium")&&L++,m+s<=s*s-1&&y[m+s].classList.contains("bomb-medium")&&L++,y[m].setAttribute("data",L))}}if(3===t){b=Array(e).fill("bomb-hard"),v=Array(s*s-e).fill("field-hard"),f=v.concat(b).sort((function(){return Math.random()-.5}));for(var h=0;h<s*s;h++){var g=document.createElement("div");g.classList.add(f[h]),g.setAttribute("id",h),document.querySelector(".minesweeper3").appendChild(g),T.push(g)}for(var _=0;_<T.length;_++){var w=0,x=_%s==0,C=_%s==s-1;T[_].classList.contains("field-hard")&&(_-1>=0&&!x&&T[_-1].classList.contains("bomb-hard")&&w++,_+(s-1)<=s*s-1&&!x&&T[_+(s-1)].classList.contains("bomb-hard")&&w++,_-s>=0&&T[_-s].classList.contains("bomb-hard")&&w++,_-(s-1)>=0&&!C&&T[_-(s-1)].classList.contains("bomb-hard")&&w++,_+1<=s*s-1&&!C&&T[_+1].classList.contains("bomb-hard")&&w++,_-(s+1)>=0&&!x&&T[_-(s+1)].classList.contains("bomb-hard")&&w++,_+(s+1)<=s*s-1&&!C&&T[_+(s+1)].classList.contains("bomb-hard")&&w++,_+s<=s*s-1&&T[_+s].classList.contains("bomb-hard")&&w++,T[_].setAttribute("data",w))}}}Y.addEventListener("click",(function(s){s.preventDefault(),console.log("restart"),location.reload(),ss()})),G.addEventListener("click",(function(){G.classList.contains("active-dark")?(G.classList.remove("active-dark"),document.body.classList.remove("dark")):(G.classList.add("active-dark"),document.body.classList.add("dark"))})),q.addEventListener("click",(function(){q.classList.contains("active-music")?(q.classList.remove("active-music"),g=!1):(q.classList.add("active-music"),g=!0)})),document.addEventListener("mousedown",(function s(e){console.log(e.target),(e.target.parentNode.classList.contains("minesweeper1")||e.target.parentNode.classList.contains("minesweeper2")||e.target.parentNode.classList.contains("minesweeper2"))&&(document.removeEventListener("mousedown",s),console.log("I work"),u=setInterval((function(){X.innerText=+X.innerText+1}),1e3))})),U.addEventListener("click",(function(){U.classList.contains("active-list")?(U.classList.remove("active-list"),N.classList.add("score__hide")):(U.classList.add("active-list"),N.classList.remove("score__hide"))})),ss()}();