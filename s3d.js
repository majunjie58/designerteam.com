window.show3d=function(S,u,T,U,ka,B,la,ma,na,oa,pa,H,I,qa,ra,sa,V,ta,W,ua,X,va,wa,defaultZomm,p_when,px,py,px2,py2,r01,r02,rx1,ry1,rx2,ry2,psx1,cx1,psy1,cy1,psx2,cx2,psy2,cy2,cx01,cy01,cx02,cy02,qsx1,qx1,qsx2,qx2,rtop1,rtop2){var zxt1=/MQQB/i.test(navigator.userAgent);var la0=la;if(na&&la>=3){la=la*2-2}var pixgif="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";var src_lock=false;var debug1=document.getElementById("debug1");var un_touch;if(un_touch==false){}else{un_touch=true}var auto_run_lock=false;this.auto_run=true;function L(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&(a.detachEvent("on"+b,a["e"+b+c]),a["e"+b+c]=null)}function l(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&(a["e"+b+c]=c,a.attachEvent("on"+b,function(){a["e"+b+c]()}))}function Y(){var a=!1;-1!=navigator.platform.toString().indexOf("Win")&&-1!=navigator.appVersion.indexOf("MSIE")&&(a=!0);return a}function xa(){var a=document.getElementById(S),b=a.requestFullScreen||a.webkitRequestFullScreen||a.mozRequestFullScreen||a.msRequestFullScreen;"undefined"!=typeof b&&b&&b.call(a)}function ya(r){a.ma=!1;r.pointerId in a.F&&delete a.F[r.pointerId];Z(r)}function za(r){a.ma&&(a.F[r.pointerId]=[r.pageX,r.pageY],$(r))}function Aa(r){a.ma=!0;a.F[r.pointerId]=[r.pageX,r.pageY];aa(r)}function ba(){a.k?(setTimeout(function(){a.u(!1)},20),setTimeout(function(){a.u(!0)},120)):(setTimeout(function(){a.u(!0)},20),setTimeout(function(){a.u(!1)},120))}function E(){var a={x:0,y:0},b=s;if(b.offsetParent){do{a.x+=b.offsetLeft,a.y+=b.offsetTop}while(b=b.offsetParent)}return a}function ca(){var r=c.g;c.g=1;r!=c.g&&a.S(a.v()*r/c.g);q.setAttribute("width",w.width);q.src=q.src;if(a.k){q.removeAttribute("height");q.style.width="100%";q.style[J]="scale("+c.n+")";q.style.height="auto";s.style["background-color"]=a.backgroundColor;document.body.style["background-color"]=a.backgroundColor}else{q.setAttribute("height",w.height);q.style[J]="translate("+-w.width/2+"px,"+-w.height/2+"px) scale("+c.g+") translate("+0.5*A.width/c.g+"px,"+0.5*A.height/c.g+"px) translate("+c.i+"px,"+c.j+"px) scale("+c.n+")";if(d.U>(d.l/2)){q.style[J]=q.style[J]+" rotate(180deg)"}q.style["max-width"]="";q.style.width="";q.style.height="";s.style["background-color"]=a.backgroundColor}}function M(){a.Qa(a.h.offsetWidth,a.h.offsetHeight)}function da(a,b){m.start.x=a;m.start.y=b;m.a.x=a;m.a.y=b;h.a.x=a;h.a.y=b}function ea(a,b){m.b.x=a-m.a.x;m.b.y=b-m.a.y;if(Math.abs(m.b.x)>Math.abs(m.b.y)){m.b.y=0;m.n.x=a;m.a.x=a}else{m.b.x=0;m.n.y=b;m.a.y=b}}function D(b){b||(b=window.event);var e=0;b.keyCode?e=b.keyCode:b.which&&(e=b.which);1==e?k.c|=1:1<e&&(k.c|=2);a.va(b);b.preventDefault?b.preventDefault():b.returnValue=!1}function F(b){b||(b=window.event);var e=E();a.cursor.x=b.pageX-e.x+n.left;a.cursor.y=b.pageY-e.y+n.top;b.preventDefault?b.preventDefault():b.returnValue=!1;if(0<k.c){if(un_touch===true){un_touch=false}if(1==k.c){ea(b.pageX,b.pageY)}else{if(2==k.c){b=a.cursor.y-C.start.y;e=a.v();a.S(c.t*Math.exp(b/200));b=a.v();c.i+=parseFloat(a.e*e-a.e*b);c.j+=parseFloat(a.f*e-a.f*b)}else{if(3==k.c){e=a.cursor.x-C.start.x;b=a.cursor.y-C.start.y;c.i=c.i+parseFloat((e-c.m.x)/c.g);c.j=c.j+parseFloat((b-c.m.y)/c.g);c.m.x=e;c.m.y=b}}}}}function K(b){b||(b=window.event);var e=0;b.keyCode?e=b.keyCode:b.which&&(e=b.which);1==e?k.c&=-2:1<e&&(k.c&=-3);a.va(b);b.preventDefault?b.preventDefault():b.returnValue=!1}function N(b){b||(b=window.event);a.Fa(0<(b.detail?-1*b.detail:b.wheelDelta/40)?1:-1);b.preventDefault?b.preventDefault():b.returnValue=!1}function aa(b){b||(b=window.event);var e=fa(),d=E();a.cursor.x=e[0].pageX-d.x+n.left;a.cursor.y=e[0].pageY-d.y+n.top;if(1==e.length&&e[0]){if(k.start.x=e[0].pageX,k.start.y=e[0].pageY,k.a.x=e[0].pageX,k.a.y=e[0].pageY,a.pa=e[0].target,a.pa==a.r){k.c=1,da(e[0].pageX,e[0].pageY)}else{for(var f=a.pa;f&&f!=a.r;){if(f.onclick){f.onclick()}f=f.parentNode}}}if(2==e.length&&e[0]&&e[1]){k.c=3;k.ca.x=e[0].pageX-d.x+n.left;k.ca.y=e[0].pageY-d.y+n.top;k.da.x=e[1].pageX-d.x+n.left;k.da.y=e[1].pageY-d.y+n.top;var f=e[0].pageX-e[1].pageX,g=e[0].pageY-e[1].pageY,h=(e[0].pageX-d.x+n.left+(e[1].pageX-d.x+n.left))/2,e=(e[0].pageY-d.y+n.top+(e[1].pageY-d.y+n.top))/2;c.oa=!1;c.Ra=Math.sqrt(f*f+g*g);c.t=a.v();a.e=parseFloat(h-0.5*A.width);a.f=parseFloat(e-0.5*A.height);a.e*=parseFloat(a.Q);a.f*=parseFloat(a.Q);a.e-=parseFloat(c.i);a.f-=parseFloat(c.j);a.e/=parseFloat(c.t);a.f/=parseFloat(c.t)}b.preventDefault()}function $(b){b||(b=window.event);if(un_touch===true){un_touch=false}var e=fa(),d=E();a.cursor.x=e[0].pageX-d.x+n.left;a.cursor.y=e[0].pageY-d.y+n.top;1==e.length&&e[0]&&(k.a.x=e[0].pageX,k.a.y=e[0].pageY,0<=k.c&&ea(k.a.x,k.a.y));if(2==e.length&&e[0]&&e[1]){var f=a.v(),g=e[0].pageX-e[1].pageX,h=e[0].pageY-e[1].pageY;a.S(c.t/c.Ra*Math.sqrt(g*g+h*h));g=a.v();h=a.f*f-a.f*g;c.i+=a.e*f-a.e*g;c.j+=h;f=(a.cursor.x+e[1].pageX-d.x+n.left)/2-(k.ca.x+k.da.x)/2;e=(a.cursor.y+e[1].pageY-d.y+n.top)/2-(k.ca.y+k.da.y)/2;!1==c.oa&&(c.m.x=f,c.m.y=e,c.oa=!0);
    c.i+=(f-c.m.x)/c.g;c.j+=(e-c.m.y)/c.g;c.m.x=f;c.m.y=e}b.preventDefault()}function fa(){if(!Y()){return window.event.touches}var b=[];for(id in a.F){var e=a.F[id],d={};d.pageX=e[0];d.pageY=e[1];d.target=a.r;d.preventDefault=function(){};b.push(d)}return b}function Z(b){b.preventDefault();a.pa=null;k.c=0;var e=(new Date).getTime(),d=e-(O||e+1);clearTimeout(P);500>d&&0<d||(O=e,P=setTimeout(function(){clearTimeout(P)},500,[b]));O=e}function Ba(a){a.preventDefault();k.c=0}function Q(){Ca(Q);if(a.X==a.$){if(1==k.c){if(0.01<h.I){h.b.x=0.4*(m.a.x-h.a.x);h.b.y=0.4*(m.a.y-h.a.y);h.a.x+=h.b.x;h.a.y+=h.b.y;a.la(h.b.x,h.b.y)}else{a.la(m.b.x,m.b.y);m.b.x=0;m.b.y=0}}else{if(0.01<h.I){h.b.x*=h.I;h.b.y*=h.I;if(0.055>h.b.x*h.b.x+h.b.y*h.b.y){h.b.x=0;h.b.y=0;m.b.x=0;m.b.y=0;m.a.x=h.a.x;m.a.y=h.a.y}if(0==h.b.x){if(0==h.b.y){}else{a.la(h.b.x,h.b.y)}}}}}a.Ba();var b=0;if(-1==a.ha){for(var e=1,e=0;e<a.A.length;e++){var c=a.M[e];if(0==a.w[c]&&a.A[e].complete){a.O[c]=a.w[c];a.w[c]=-1;if(a.X==a.$){var f=a.A.length+a.za;f>d.q&&(f=d.q);if(f-=b){for(var g=0;g<f;g++){a.ga()}}}d.H=!0;0==e&&a.Ba()}if(-1!=a.O[c]){b++}}e=parseFloat(b/d.q);a.Pa(e);if(e>0.98){if(a.A.length==d.q){for(var k1 in a.A){if(a.A[k1]&&!a.A[k1].complete){var c=k1;if(0==a.w[c]&&a.A[e].complete){a.O[c]=a.w[c];a.w[c]=-1;if(a.X==a.$){a.ga()}d.H=!0}if(-1!=a.O[c]){b++}}else{b=d.q}}}}if(b==d.q&&a.O[(d.T+1)*d.d-1]==0){a.ha=0;a.Oa()}}}function ga(a){a=a?a:window.event;if(un_touch===true){un_touch=false}if(40==a.keyCode){d.H=true;if(d.U<d.l-1){d.U++}else{d.U=0}}else{if(38==a.keyCode){d.H=true;if(d.U>0){d.U--}else{d.U=d.l-1}}else{if(37==a.keyCode){d.H=true;if(d.T>0){d.T--}else{d.T=d.d-1}}else{if(39==a.keyCode){d.H=true;if(d.T<d.d-1){d.T++}else{d.T=0}}}}}}var z="/",G=window.location.href,ha=G.lastIndexOf("/");0<=ha&&(z=G.substr(0,ha+1));if(u.indexOf("ttps://")>0){z=""}var R=G=!1;this.ma=!1;this.F=[];this.Ba=function(){if(this.auto_run&&un_touch===true&&auto_run_lock===false){auto_run_lock=true;d.H=true;if(d.T<d.d-1){d.T++}else{d.T=0}setTimeout(function(){auto_run_lock=false},150)}if(!src_lock&&d.H){d.H=!1;src_lock=true;var b=parseInt(d.U*d.d+d.T);if(!a.D[b]){}else{if(d.Da){var z_rot=d.U-d.l/4;if(z_rot>d.l/4){z_rot=d.l/2-z_rot}z_rot=z_rot*90/(d.l/4);var rot0=0;var x1=ia.style.transform?ia.style.transform:ia.style["-webkit-transform"];var t1=x1.replace(/rotate\(\S+\)/,"");var tx0=0;var ty0=0;ia.style.left="0px";ia.style.top="0px";if(d.U>(d.l/2)){var t=-1}else{var t=1}var p_dis0=0;var p_dis=0;if(d.U<p_when||(d.U>(d.l/2)&&la-d.U<p_when)){if(qsx1||qsx1===0){p_dis0=Math.sin((2*Math.PI/360)*360/d.d*(d.T-qsx1));p_dis=p_dis0*Math.cos((2*Math.PI/360)*z_rot);if(qx1&&qx1!=0){rot0+=t*qx1*p_dis}}if(rtop1){p_dis=Math.sin((2*Math.PI/360)*z_rot);rot0+=rtop1*p_dis}if(psy1||psy1===0){p_dis0=Math.sin((2*Math.PI/360)*360/d.d*(d.T-psy1));p_dis=p_dis0*Math.sin((2*Math.PI/360)*z_rot);if(cy01&&cy01!=0){ty0+=cy01*p_dis0*c.n*T/1000}if(cy1&&cy1!=0){ty0+=cy1*p_dis*c.n*T/1000}}if(psx1||psx1===0){p_dis0=Math.sin((2*Math.PI/360)*360/d.d*(d.T-psx1));p_dis=p_dis0*Math.sin((2*Math.PI/360)*z_rot);if(cx01&&cx01!=0){tx0+=cx01*p_dis0*c.n*T/1000}if(cx1&&cx1!=0){tx0+=cx1*p_dis*c.n*T/1000}}if(this.cxonly1&&this.cxonly1!=0){if((Math.abs(d.T-this.psxonly1)<=d.d/4&&t>0)||(Math.abs(d.T-this.psxonly1)>=d.d/4&&t<0)){p_dis0=Math.abs(Math.cos((2*Math.PI/360)*360/d.d*(d.T-this.psxonly1)));if(t<0){p_dis0=p_dis0*-1}p_dis=p_dis0*Math.cos((2*Math.PI/360)*z_rot);tx0+=this.cxonly1*p_dis*c.n*T/1000}}if(psy1||psy1===0){p_dis0=Math.sin((2*Math.PI/360)*360/d.d*(d.T-psy1));p_dis=p_dis0*Math.sin((2*Math.PI/360)*z_rot);if(cy01&&cy01!=0){ty0+=cy01*p_dis0*c.n*T/1000}if(cy1&&cy1!=0){ty0+=cy1*p_dis*c.n*T/1000}}if(r01){rot0+=r01}if(px&&px!=0){tx0+=t*c.n*T*px/100}if(py&&py!=0){ty0+=t*c.n*U*py/100}if(rx1&&rx1!=0){tx0+=t*c.n*Math.cos((2*Math.PI/360)*z_rot)*rx1*T/100}if(ry1&&ry1!=0){ty0+=t*c.n*Math.sin((2*Math.PI/360)*z_rot)*ry1*U/100}}else{if(qsx2||qsx2===0){p_dis0=Math.sin((2*Math.PI/360)*360/d.d*(d.T-qsx2));p_dis=p_dis0*Math.cos((2*Math.PI/360)*z_rot);if(qx2&&qx2!=0){rot0+=t*qx2*p_dis}}if(rtop2){p_dis=Math.sin((2*Math.PI/360)*z_rot);rot0+=rtop2*p_dis}if(psx2||psx2===0){p_dis0=Math.sin((2*Math.PI/360)*360/d.d*(d.T-psx2));p_dis=p_dis0*Math.sin((2*Math.PI/360)*z_rot);if(cx02&&cx02!=0){tx0+=cx02*p_dis0*c.n*T/1000}if(cx2&&cx2!=0){tx0+=cx2*p_dis*c.n*T/1000}}if(this.cxonly2&&this.cxonly2!=0){if((Math.abs(d.T-this.psxonly2)<=d.d/4&&t>0)||(Math.abs(d.T-this.psxonly2)>=d.d/4&&t<0)){p_dis0=Math.abs(Math.cos((2*Math.PI/360)*360/d.d*(d.T-this.psxonly2)));if(t<0){p_dis0=p_dis0*-1}p_dis=p_dis0*Math.cos((2*Math.PI/360)*z_rot);tx0+=this.cxonly2*p_dis*c.n*T/1000}}if(psy2||psy2===0){p_dis0=Math.sin((2*Math.PI/360)*360/d.d*(d.T-psy2));p_dis=p_dis0*Math.sin((2*Math.PI/360)*z_rot);if(cy02&&cy02!=0){ty0+=cy02*p_dis0*c.n*T/1000}if(cy2&&cy2!=0){ty0+=cy2*p_dis*c.n*T/1000}}if(r02){rot0+=r02}if(px2&&px2!=0){tx0+=t*c.n*T*px2/100}if(py2&&py2!=0){ty0+=t*c.n*U*py2/100}if(rx2&&rx2!=0){tx0+=t*c.n*Math.cos((2*Math.PI/360)*z_rot)*rx2*T/100}if(ry2&&ry2!=0){ty0+=t*c.n*Math.sin((2*Math.PI/360)*z_rot)*ry2*U/100
}}if(d.U>(d.l/2)){rot0+=180}else{rot0+=0}ia.style.left=tx0+"px";ia.style.top=ty0+"px";if(ia.style.transform){ia.style.transform=t1+" rotate("+rot0+"deg)"}else{ia.style["-webkit-transform"]=t1+" rotate("+rot0+"deg)"}a.Ta=a.Ta_t}ia.setAttribute("src",a.D[b]);if(this.debug){console.log(a.D[b])}}src_lock=false}if(c.n!=c.a||c.i!=c.wa||c.j!=c.xa){c.a=c.n,c.wa=c.i,c.xa=c.j,ca()}};this.ga=function(){if(a.na<d.q){var b=new Image,e=a.M[a.na];a.w[e]=0;b.src=a.D[e];a.A.push(b);var c=parseInt(e%d.d),f=parseInt(e/d.d),c=c/d.d,c=2*c*Math.PI,f=f/d.l,f=f*Math.PI,b=Math.sin(c),c=Math.cos(c),f=Math.cos(f),g=Math.sqrt(b*b+c*c+f*f);a.Ua[e]={ab:{x:b/g,y:c/g,z:f/g}};a.na++}};this.Ea=function(){for(var b=d.qa,e=d.ra,c=2,f=parseFloat(d.d/c),g=parseFloat(d.l/c),h=d.q,k=0,l=0,n=0,p=0,m=0;a.N<h;){var q=parseInt(b%d.d),s=parseInt(e%d.l),m=parseInt(s*d.d+q);if(a.D[m]){}else{a.M[a.N]=m;a.N++;a.D[m]=a.ua(q,s)}0==k&&(b+=f,l++);1==k&&(e+=g,n++);p++;if(p>=c){if(p=0,0==k){k=1;l=0}else{if(1==k&&(b+=f,l++,l>=c/2)){c*=2;b=d.qa;e=d.ra;f=parseFloat(d.d/c);g=parseFloat(d.l/c);if(1>f&&1>g){for(b=0;b<h;b++){e=parseInt(b%d.d),c=parseInt(b/d.d),m=parseInt(c*d.d+e),a.D[m]||(a.M[a.N]=m,a.N++,a.D[m]=a.ua(e,c))}break}k=n=l=0}}}}};this.ua=function(b,e){var out="";var y=e;var x=b;if(d.Da){if(e>(d.l/2)){y=d.l-e;if(b>=d.d/2){x=b-d.d/2}else{x=b+d.d/2}}}out=z+a.s+"/"+parseInt(y)+"_"+parseInt(x)+"."+ua;return out};this.la=function(b,e){b*=1<d.d?a.Ta:0;e*=1<d.l?a.Va:0;if(la0!=la){var t2=1;var t3=a.cursor.y-s.style.height.replace("px","")/2;var t4=d.U;var edis=la0/4;if(this.edis&&this.edis<=la0/2){edis=this.edis}if(d.U>=la0){t4=la0-(d.U-la0+2)}if(t4<edis){if(t3>0){t2*=-1}if(a.Ta<0){t2*=-1}}else{if((la0-t4)<=edis){if(t3<0){t2*=-1}if(a.Ta<0){t2*=-1}}else{if(d.U>=la0){t2*=-1}}}b*=t2}var c=Math.sqrt(b*b+e*e);if(0.0001<c&&(d.ea+=b,d.fa+=e,d.B+=c,1<d.B)){var c=parseInt(d.B),f=Math.atan2(d.ea,d.fa);d.B-=c;d.ea=0;d.fa=0;0>f&&(f+=2*Math.PI);f+=Math.PI/8;f=parseInt(f/(Math.PI/4));0>f&&(f+=8);f%=8;if(0!=x[f]){var b=parseInt(d.U*d.d+d.T);var g=d.T;var g_t1=g;g=g+c*x[f];while(-1==a.ha&&-1==a.O[b]){g=g+c*x[f];if(g<0){g+=d.d}if(g>=d.d){g-=d.d}b=parseInt(d.U*d.d+g);if(g==g_t1){break}}if(d.Ca){for(;0>g;){g+=d.d}for(;g>=d.d;){g-=d.d}}else{g>=d.d&&(g=d.d-1),0>g&&(g=0)}d.T!=g&&(d.T=g,d.H=!0)}if(0!=y[f]){b=parseInt(d.U*d.d+d.T);g=d.U;g_t1=g;g+=c*y[f];while(-1==a.ha&&-1==a.O[b]){g+=c*y[f];if(g<0){g+=d.l}if(g>=d.l){g-=d.l}b=parseInt(g*d.d+d.T);if(g==g_t1){break}}if(d.Da){for(;0>g;){g+=d.l}for(;g>=d.l;){g-=d.l}}else{g>=d.l&&(g=d.l-1),0>g&&(g=0)}d.U!=g&&(d.U=g,d.H=!0)}}};this.Sa=function(){a.u(!a.k);a.k?a.G.setAttribute("src",z+a.s+"/files/GoFullScreenIcon.png"):a.G.setAttribute("src",z+a.s+"/files/GoFixedSizeIcon.png")};this.u=function(b){a.k=b;a.k?(t.style.position="relative",t.style.left="0px",t.style.top="0px",document.body.style.overflow=""):(t.style.position="absolute",b=E(),t.style.left=window.pageXOffset-b.x+n.left+"px",t.style.top=window.pageYOffset-b.y+n.top+"px",document.body.style.overflow="hidden");document.body.style.margin="0";document.body.style.padding="0";M()};this.Ha=function(){var b=new Image;b.src=a.L.src;a.A[a.Z]=b;b=a.M[a.Z];a.O[b]=a.w[b];a.w[b]=-1;a.Z++;d.H=!0;a.Z==d.q&&(a.ha=0,a.Ia())};var P,O=null;this.va=function(b){var e=E();a.cursor.x=b.pageX-e.x+n.left;a.cursor.y=b.pageY-e.y+n.top;1==k.c?da(b.pageX,b.pageY):2==k.c?(C.start.x=a.cursor.x,C.start.y=a.cursor.y,c.t=a.v(),a.e=a.cursor.x-0.5*A.width,a.f=a.cursor.y-0.5*A.height,a.e*=a.Q,a.f*=a.Q,a.e-=c.i,a.f-=c.j,a.e/=c.t,a.f/=c.t):3==k.c&&(C.start.x=a.cursor.x,C.start.y=a.cursor.y,c.m.x=0,c.m.y=0)};this.Fa=function(b){a.S(c.n*Math.exp(-b/50))};this.v=function(){return c.n};this.S=function(a){a>c.ja/c.g&&(a=c.ja/c.g);a<c.ka/c.g&&(a=c.ka/c.g);c.n=a};this.Qa=function(b,c){c=parseInt(b*U/T);a.k||(b=window.innerWidth,c=window.innerHeight);var d=b-n.left-n.right,f=c-n.top-n.bottom;A.width=d;A.height=f;s.style.width=d+"px";a.k&&window.innerHeight<w.height&&(f=window.innerHeight);s.style.height=f+"px";s.style.left=n.left+"px";s.style.top=n.top+"px";ca();p.style.width=b+"px";p.style.height=c+"px";a.h.style.height=c+"px";p.Aa&&p.Aa(b,c);W&&(a.K.style.height=window.innerHeight+"px",a.K.style.width=window.innerWidth+"px")};this.V=function(a){l(a,"mousedown",D);l(a,"mousemove",F);l(a,"mouseup",K)};this.ba=function(a){L(a,"mousedown",D);L(a,"mousemove",F);L(a,"mouseup",K)};this.Oa=function(){a.p&&(a.p.style.visibility="hidden",a.ba(a.p),a.ba(a.P),a.ba(a.o));a.q2&&(a.q2.style.visibility="hidden")};this.Ia=function(){a.C.style.visibility="hidden";a.ba(a.C)};var Ca=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,10)}}();this.ta=function(){a.p=document.createElement("div");a.V(a.p);a.p.W=function(){this.parentNode&&(this.style.left="16px",this.style.top="16px")};b="position:absolute;";b+="left: 0px;";b+="top:  0px;";b+="width: 30px;";b+="height: 30px;";b+=v+"transform-origin: 50% 50%;";
    b+="visibility: inherit;";a.p.setAttribute("style",b);a.P=document.createElement("div");a.V(a.P);b="position:absolute;";b+="left: 0px;";b+="top:  29px;";b+="width: 80px;";b+="height: 80px;";b+=v+"transform-origin: 50% 50%;";b+="opacity: 1.0;";b+="visibility: inherit;";b+="border: 0px solid #000000;";b+="color: #ffffff;";b+="text-align: left;";b+="white-space: nowrap;";b+="padding: 0px 0px 0px 0px;";b+="overflow: hidden;";a.P.setAttribute("style",b);a.o=document.createElement("div");a.V(a.o);a.o.aa={Ka:0,La:0,ia:0,Ma:1,Na:1,Ya:1};b="position:absolute;";b+="left: 0px;";b+="top:  0px;";b+="width: 80px;";b+="height: 80px;";b+=v+"transform-origin: 50% 50%;";b+="opacity: 1.0;";b+="visibility: inherit;";b+="border: 0px solid #000000;";b+="color: #ffffff;";b+="text-align: left;";b+="white-space: nowrap;";b+="padding: 0px 0px 0px 0px;";b+="overflow: hidden;";var c=va;""==c&&(c="ks_logo.png");a.o.setAttribute("style",b);a.u(a.k);setTimeout(function(){a.u(a.k)},10)};this.Pa=function(b){if(a.p){a.q2.innerHTML='<div class="bar1"><div style="width:'+parseInt(100*b)+'%;"></div></div>'}};this.sa=function(){R=!0;Q()};this.ya=function(){l(window,"resize",M);wa&&l(p,"dblclick",xa);if(Y()){if(l(window,"mousewheel",N),l(window,"keydown",ga),/Tablet PC/i.test(navigator.userAgent)&&window.Wa){var b=new MSGesture;b.target=a.h;a.h.Ga=b;a.h.Ga.pointerType=null;a.h.Za=[];l(a.h,"MSPointerDown",Aa);l(a.h,"MSPointerMove",za);l(a.h,"MSPointerUp",ya)}else{l(p,"mousedown",D),l(q,"mousedown",D),l(p,"mousemove",F),l(q,"mousemove",F),l(document,"mouseup",K)}}else{if(p.addEventListener){l(document,"mouseup",K);l(p,"mousewheel",N);l(document,"keydown",ga);l(p,"mousedown",D);l(q,"mousedown",D);l(p,"mousemove",F);l(p,"touchstart",aa);l(p,"touchmove",$);l(p,"touchcancel",Ba);l(p,"touchend",Z);l(p,"DOMMouseScroll",N);l(window,"orientationchange",ba)}}};if(document.createElement("canvas").getContext){var a=this,t=a.h=null,s=null,ia=null,p=null,q=null;a.k=V;a.s=u;a.Xa=!1;a.$=!1;a.X=W;a.$a=0;a.N=0;a.Ta=parseFloat(oa);a.Ta_t=a.Ta;a.Va=parseFloat(pa);a.za=1;a.Z=0;a.ha=-1;var n={left:0,top:0,right:0,bottom:0},d={T:0,U:0,d:1,l:1,qa:0,ra:0,B:0,ea:0,fa:0,H:!1,q:0,Ca:!0,Da:!1};H||(H=0);I||(I=0);d.qa=H;d.ra=I;d.T=H;d.U=I;d.d=B;d.l=la;d.Ca=ma;d.Da=na;d.q=d.d*d.l;var w={width:0,height:0};w.width=T;w.height=U;var v="",J="transform",A={x:640,y:480},c={n:1,t:1,a:-1,i:0,j:0,wa:-1,xa:-1,g:1,ka:1,ja:1,m:{x:0,y:0},oa:!1};c.ka=parseFloat(qa);c.ja=parseFloat(ra);var m={start:{x:0,y:0},a:{x:0,y:0},Ja:{x:0,y:0},n:{x:0,y:0},b:{x:0,y:0}},C={start:{x:0,y:0}},k={c:0,start:{x:0,y:0},a:{x:0,y:0},Ja:{x:0,y:0},n:{x:0,y:0},b:{x:0,y:0},ca:{x:0,y:0},da:{x:0,y:0}},h={a:{x:0,y:0},b:{x:0,y:0},I:0.96};h.I=sa;a.cursor={x:0,y:0};var x=[],y=[];x[0]=0;y[0]=1;x[1]=1;y[1]=1;x[2]=1;y[2]=0;x[3]=1;y[3]=-1;x[4]=0;y[4]=-1;x[5]=-1;y[5]=-1;x[6]=-1;y[6]=0;x[7]=-1;y[7]=1;a.e=0;a.f=0;a.na=0;a.A=[];a.M=[];a.w=[];a.O=[];a.Ua=[];for(u=0;u<d.q;u++){a.w[u]=-1,a.O[u]=-1}a.D=[];u=["Webkit","Moz","0","ms","Ms"];for(B=0;B<u.length;B++){"undefined"!=typeof document.documentElement.style[u[B]+"Transform"]&&(v="-"+u[B].toLowerCase()+"-",J=u[B]+"Transform")}var b="";a.h=document.getElementById(S);b="width: "+T+"px;";b+="height: "+U+"px;";b+="max-width: 100%;";a.h.setAttribute("style",b);t=document.createElement("div");t.setAttribute("id","viewwindow");b="top:  0px;";b+="left: 0px;";b+="position: relative;";t.setAttribute("style",b);a.h.appendChild(t);s=document.createElement("div");s.setAttribute("id","turntable");b="top:  0px;";b+="left: 0px;";b+="overflow: hidden;";b+="position:absolute;";b+=v+"user-select: none;";s.setAttribute("style",b);t.appendChild(s);q=document.createElement("img");q.setAttribute("id","backbuffer");q.setAttribute("src",pixgif);b="top:  0px;";b+="left: 0px;";b+="position:absolute;";b+=v+"user-select: none;";q.setAttribute("style",b);s.appendChild(q);ia=q;p=document.createElement("div");a.r=p;b="top:  0px;";b+="left: 0px;";b+="width:  100px;";b+="height: 100px;";b+="overflow: hidden;";b+="position:absolute;";b+="z-index: 522;";b+=v+"user-select: none;";p.setAttribute("style",b);t.appendChild(p);p.Aa=function(a,b){var c=[];for(c.push(this);0<c.length;){var d=c.pop();d.W&&d.W(a,b);if(d.hasChildNodes()){for(var g=0;g<d.childNodes.length;g++){c.push(d.childNodes[g])}}}};this.C=document.createElement("div");b="position:absolute;";b+="left: 0px;";b+="top:  0px;";b+="width: 256px;";b+="height: 256px;";b+="opacity: 0.0;";b+=v+"transform-origin: 50% 50%;";b+="visibility: inherit;";b+="display: none";this.C.setAttribute("style",b);this.L=document.createElement("img");this.L.setAttribute("width",256);this.L.setAttribute("height",256);this.L.onload=function(){a.Ha()};a.V(this.C);this.C.appendChild(this.L);p.appendChild(this.C);var q2=document.createElement("div");b="position:absolute;";b+="left:0px;";b+="top:20px;";q2.setAttribute("style",b);p.appendChild(q2);a.q2=q2;if(ka.indexOf("rl(")<0){this.backgroundColor=s.style.backgroundColor=ka}else{this.backgroundColor=s.style.backgroundColor="#fff";s.style.background=ka;
    s.style.backgroundSize="cover"}ta&&(a.R=document.createElement("div"),b="position:absolute;",b+="width: 38px;",b+="height: 32px;",b+=v+"transform-origin: 50% 50%;",b+="visibility: inherit;",b+="cursor: pointer;",a.R.setAttribute("style",b),a.G=document.createElement("img"),a.k?a.G.setAttribute("src",z+a.s+"/files/GoFullScreenIcon.png"):a.G.setAttribute("src",z+a.s+"/files/GoFixedSizeIcon.png"),a.G.setAttribute("style","position: absolute;top: 0px;left: 0px;width: 38px;height: 32px;"),a.R.appendChild(a.G),a.R.W=function(a,b){this.style.left=a-38+"px";this.style.top=b-32+"px"},a.R.onclick=function(){a.Sa()},a.r.appendChild(a.R));if(a.X){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(G=!0);a.J=document.createElement("div");b="position:absolute;";b+="width: 92px;";b+="height: 92px;";b+=v+"transform-origin: 50% 50%;";b+="visibility: inherit;";b+="cursor: pointer;";a.J.setAttribute("style",b);a.Y=document.createElement("img");G?a.Y.setAttribute("src",z+a.s+"/files/vr_hand.gif"):a.Y.setAttribute("src",z+a.s+"/files/vr_cursor.gif");a.Y.setAttribute("style","position: absolute;top: 0px;left: 0px;width: 92px;height: 92px;");a.J.appendChild(a.Y);a.J.W=function(a,b){this.style.left=0.5*a-46+"px";this.style.top=0.5*b-46+"px"};a.K=document.createElement("div");b="position:absolute;";b+=v+"transform-origin: 50% 50%;";b+=" width: "+window.innerWidth+"px;";b+=" height: "+window.innerHeight+"px;";b+=" background-color: #ccc;";b+=" opacity: .7";a.K.setAttribute("style",b);a.r.appendChild(a.K);var ja=function(){a.J.style.visibility="hidden";a.K.style.visibility="hidden";X&&a.ta();a.$=!0;for(var b=0;b<a.za;b++){a.ga()}a.sa()};a.r.onmousedown=function(){R||ja()};a.r.ontouchstart=function(a){R||ja();a.preventDefault()};a.r.appendChild(a.J);a.ya()}else{a.X=!0,a.$=!0,X&&a.ta(),a.ya(),a.sa()}a.u(V);a.Q=defaultZomm||1/c.g;a.S(a.Q);this.Ea();a.ga();setTimeout(function(){Q()},10);setTimeout(function(){M()},15)}else{alert("need HTML5")}};
