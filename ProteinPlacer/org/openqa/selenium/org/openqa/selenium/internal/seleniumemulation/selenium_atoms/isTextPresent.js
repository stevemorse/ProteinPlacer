function(){return function(){var f=void 0,h=!0,l=null,m=!1;function n(a){return function(){return a}}var p=this;function r(a){return"string"==typeof a}Math.floor(2147483648*Math.random()).toString(36);function aa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}}function ca(a,b){function c(){}c.prototype=b.prototype;a.J=b.prototype;a.prototype=new c};var da=window;function s(a){Error.captureStackTrace?Error.captureStackTrace(this,s):this.stack=Error().stack||"";a&&(this.message=String(a))}ca(s,Error);function ea(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")}
function t(a,b){for(var c=0,d=ea(String(a)).split("."),e=ea(String(b)).split("."),g=Math.max(d.length,e.length),k=0;0==c&&k<g;k++){var q=d[k]||"",D=e[k]||"",L=RegExp("(\\d*)(\\D*)","g"),ba=RegExp("(\\d*)(\\D*)","g");do{var x=L.exec(q)||["","",""],y=ba.exec(D)||["","",""];if(0==x[0].length&&0==y[0].length)break;c=((0==x[1].length?0:parseInt(x[1],10))<(0==y[1].length?0:parseInt(y[1],10))?-1:(0==x[1].length?0:parseInt(x[1],10))>(0==y[1].length?0:parseInt(y[1],10))?1:0)||((0==x[2].length)<(0==y[2].length)?
-1:(0==x[2].length)>(0==y[2].length)?1:0)||(x[2]<y[2]?-1:x[2]>y[2]?1:0)}while(0==c)}return c};var fa=Array.prototype;function u(a,b){for(var c=a.length,d=r(a)?a.split(""):a,e=0;e<c;e++)e in d&&b.call(f,d[e],e,a)}function ga(a,b){for(var c=a.length,d=[],e=0,g=r(a)?a.split(""):a,k=0;k<c;k++)if(k in g){var q=g[k];b.call(f,q,k,a)&&(d[e++]=q)}return d}function ha(a,b){if(a.reduce)return a.reduce(b,"");var c="";u(a,function(d,e){c=b.call(f,c,d,e,a)});return c}
function ia(a,b){var c;a:{c=a.length;for(var d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(f,d[e],e,a)){c=e;break a}c=-1}return 0>c?l:r(a)?a.charAt(c):a[c]}function ja(a,b,c){return 2>=arguments.length?fa.slice.call(a,b):fa.slice.call(a,b,c)};var v,ka,w,la;function z(){return p.navigator?p.navigator.userAgent:l}la=w=ka=v=m;var A;if(A=z()){var ma=p.navigator;v=0==A.indexOf("Opera");ka=!v&&-1!=A.indexOf("MSIE");w=!v&&-1!=A.indexOf("WebKit");la=!v&&!w&&"Gecko"==ma.product}var B=v,C=ka,E=la,F=w;function na(){var a=p.document;return a?a.documentMode:f}var G;
a:{var H="",I;if(B&&p.opera)var oa=p.opera.version,H="function"==typeof oa?oa():oa;else if(E?I=/rv\:([^\);]+)(\)|;)/:C?I=/MSIE\s+([^\);]+)(\)|;)/:F&&(I=/WebKit\/(\S+)/),I)var pa=I.exec(z()),H=pa?pa[1]:"";if(C){var qa=na();if(qa>parseFloat(H)){G=String(qa);break a}}G=H}var ra={};function sa(a){ra[a]||(ra[a]=0<=t(G,a))}var ta=p.document,J=!ta||!C?f:na()||("CSS1Compat"==ta.compatMode?parseInt(G,10):5);!E&&!C||C&&C&&9<=J||E&&sa("1.9.1");C&&sa("9");function ua(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function va(a,b){if(a==b)return 0;if(a.compareDocumentPosition)return a.compareDocumentPosition(b)&2?1:-1;if(C&&!(C&&9<=J)){if(9==a.nodeType)return-1;if(9==b.nodeType)return 1}if("sourceIndex"in a||a.parentNode&&"sourceIndex"in a.parentNode){var c=1==a.nodeType,d=1==b.nodeType;if(c&&d)return a.sourceIndex-b.sourceIndex;var e=a.parentNode,g=b.parentNode;return e==g?wa(a,b):!c&&ua(e,b)?-1*xa(a,b):!d&&ua(g,a)?xa(b,a):(c?a.sourceIndex:e.sourceIndex)-(d?b.sourceIndex:g.sourceIndex)}d=9==a.nodeType?a:a.ownerDocument||
a.document;c=d.createRange();c.selectNode(a);c.collapse(h);d=d.createRange();d.selectNode(b);d.collapse(h);return c.compareBoundaryPoints(p.Range.START_TO_END,d)}function xa(a,b){var c=a.parentNode;if(c==b)return-1;for(var d=b;d.parentNode!=c;)d=d.parentNode;return wa(d,a)}function wa(a,b){for(var c=b;c=c.previousSibling;)if(c==a)return-1;return 1};var ya,za,Aa,Ba,Ca,Da,Ea;Ea=Da=Ca=Ba=Aa=za=ya=m;var K=z();K&&(-1!=K.indexOf("Firefox")?ya=h:-1!=K.indexOf("Camino")?za=h:-1!=K.indexOf("iPhone")||-1!=K.indexOf("iPod")?Aa=h:-1!=K.indexOf("iPad")?Ba=h:-1!=K.indexOf("Android")?Ca=h:-1!=K.indexOf("Chrome")?Da=h:-1!=K.indexOf("Safari")&&(Ea=h));var Fa=ya,Ga=za,Ha=Aa,Ia=Ba,M=Ca,Ja=Da,Ka=Ea;var N=C&&!(C&&9<=J),La=C&&!(C&&8<=J);function Ma(a,b,c,d,e){this.e=a;this.nodeName=c;this.nodeValue=d;this.nodeType=2;this.ownerElement=b;this.H=e;this.parentNode=b}function Na(a,b,c){var d=La&&"href"==b.nodeName?a.getAttribute(b.nodeName,2):b.nodeValue;return new Ma(b,a,b.nodeName,d,c)};function O(a){var b=l,c=a.nodeType;1==c&&(b=a.textContent,b=b==f||b==l?a.innerText:b,b=b==f||b==l?"":b);if("string"!=typeof b)if(N&&"title"==a.nodeName.toLowerCase()&&1==c)b=a.text;else if(9==c||1==c){a=9==c?a.documentElement:a.firstChild;for(var c=0,d=[],b="";a;){do 1!=a.nodeType&&(b+=a.nodeValue),N&&"title"==a.nodeName.toLowerCase()&&(b+=a.text),d[c++]=a;while(a=a.firstChild);for(;c&&!(a=d[--c].nextSibling););}}else b=a.nodeValue;return""+b}
function P(a,b,c){if(b===l)return h;try{if(!a.getAttribute)return m}catch(d){return m}La&&"class"==b&&(b="className");return c==l?!!a.getAttribute(b):a.getAttribute(b,2)==c}function Q(a,b,c,d,e){return(N?Oa:Pa).call(l,a,b,r(c)?c:l,r(d)?d:l,e||new R)}
function Oa(a,b,c,d,e){if(8==a.g()||c&&a.g()===l){var g=b.all;if(!g)return e;a=a.getName();if("*"!=a&&(g=b.getElementsByTagName(a),!g))return e;if(c){for(var k=[],q=0;b=g[q++];)P(b,c,d)&&k.push(b);g=k}for(q=0;b=g[q++];)("*"!=a||"!"!=b.tagName)&&e.add(b);return e}Qa(a,b,c,d,e);return e}
function Pa(a,b,c,d,e){b.getElementsByName&&d&&"name"==c&&!C?(b=b.getElementsByName(d),u(b,function(b){a.matches(b)&&e.add(b)})):b.getElementsByClassName&&d&&"class"==c?(b=b.getElementsByClassName(d),u(b,function(b){b.className==d&&a.matches(b)&&e.add(b)})):b.getElementsByTagName&&(b=b.getElementsByTagName(a.getName()),u(b,function(a){P(a,c,d)&&e.add(a)}));return e}
function Ra(a,b,c,d,e){var g;if((8==a.g()||c&&a.g()===l)&&(g=b.childNodes)){var k=a.getName();if("*"!=k&&(g=ga(g,function(a){return a.tagName&&a.tagName.toLowerCase()==k}),!g))return e;c&&(g=ga(g,function(a){return P(a,c,d)}));u(g,function(a){("*"!=k||"!"!=a.tagName&&!("*"==k&&1!=a.nodeType))&&e.add(a)});return e}return Sa(a,b,c,d,e)}function Sa(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)P(b,c,d)&&a.matches(b)&&e.add(b);return e}
function Qa(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)P(b,c,d)&&a.matches(b)&&e.add(b),Qa(a,b,c,d,e)};function R(){this.d=this.c=l;this.h=0}function Ta(a){this.l=a;this.next=this.j=l}R.prototype.unshift=function(a){a=new Ta(a);a.next=this.c;this.d?this.c.j=a:this.c=this.d=a;this.c=a;this.h++};R.prototype.add=function(a){a=new Ta(a);a.j=this.d;this.c?this.d.next=a:this.c=this.d=a;this.d=a;this.h++};function Ua(a){return(a=a.c)?a.l:l}function S(a){return new Va(a,m)}function Va(a,b){this.F=a;this.k=(this.m=b)?a.d:a.c;this.q=l}
Va.prototype.next=function(){var a=this.k;if(a==l)return l;var b=this.q=a;this.k=this.m?a.j:a.next;return b.l};function T(a,b,c,d,e){b=b.evaluate(d);c=c.evaluate(d);var g;if(b instanceof R&&c instanceof R){e=S(b);for(d=e.next();d;d=e.next()){b=S(c);for(g=b.next();g;g=b.next())if(a(O(d),O(g)))return h}return m}if(b instanceof R||c instanceof R){b instanceof R?e=b:(e=c,c=b);e=S(e);b=typeof c;for(d=e.next();d;d=e.next()){switch(b){case "number":d=+O(d);break;case "boolean":d=!!O(d);break;case "string":d=O(d);break;default:throw Error("Illegal primitive type for comparison.");}if(a(d,c))return h}return m}return e?
"boolean"==typeof b||"boolean"==typeof c?a(!!b,!!c):"number"==typeof b||"number"==typeof c?a(+b,+c):a(b,c):a(+b,+c)}function Wa(a,b,c,d){this.r=a;this.I=b;this.o=c;this.p=d}Wa.prototype.toString=function(){return this.r};var Xa={};function U(a,b,c,d){if(a in Xa)throw Error("Binary operator already created: "+a);a=new Wa(a,b,c,d);Xa[a.toString()]=a}U("div",6,1,function(a,b,c){return a.b(c)/b.b(c)});U("mod",6,1,function(a,b,c){return a.b(c)%b.b(c)});U("*",6,1,function(a,b,c){return a.b(c)*b.b(c)});
U("+",5,1,function(a,b,c){return a.b(c)+b.b(c)});U("-",5,1,function(a,b,c){return a.b(c)-b.b(c)});U("<",4,2,function(a,b,c){return T(function(a,b){return a<b},a,b,c)});U(">",4,2,function(a,b,c){return T(function(a,b){return a>b},a,b,c)});U("<=",4,2,function(a,b,c){return T(function(a,b){return a<=b},a,b,c)});U(">=",4,2,function(a,b,c){return T(function(a,b){return a>=b},a,b,c)});U("=",3,2,function(a,b,c){return T(function(a,b){return a==b},a,b,c,h)});
U("!=",3,2,function(a,b,c){return T(function(a,b){return a!=b},a,b,c,h)});U("and",2,2,function(a,b,c){return a.f(c)&&b.f(c)});U("or",1,2,function(a,b,c){return a.f(c)||b.f(c)});function Ya(a,b,c,d,e,g,k,q,D){this.i=a;this.o=b;this.D=c;this.C=d;this.B=e;this.p=g;this.A=k;this.z=q!==f?q:k;this.G=!!D}Ya.prototype.toString=function(){return this.i};var Za={};function V(a,b,c,d,e,g,k,q){if(a in Za)throw Error("Function already created: "+a+".");Za[a]=new Ya(a,b,c,d,m,e,g,k,q)}V("boolean",2,m,m,function(a,b){return b.f(a)},1);V("ceiling",1,m,m,function(a,b){return Math.ceil(b.b(a))},1);
V("concat",3,m,m,function(a,b){var c=ja(arguments,1);return ha(c,function(b,c){return b+c.a(a)})},2,l);V("contains",2,m,m,function(a,b,c){b=b.a(a);a=c.a(a);return-1!=b.indexOf(a)},2);V("count",1,m,m,function(a,b){return b.evaluate(a).h},1,1,h);V("false",2,m,m,n(m),0);V("floor",1,m,m,function(a,b){return Math.floor(b.b(a))},1);
V("id",4,m,m,function(a,b){function c(a){if(N){var b=e.all[a];if(b){if(b.nodeType&&a==b.id)return b;if(b.length)return ia(b,function(b){return a==b.id})}return l}return e.getElementById(a)}var d=a.e,e=9==d.nodeType?d:d.ownerDocument,d=b.a(a).split(/\s+/),g=[];u(d,function(a){a=c(a);var b;if(b=a){a:if(r(g))b=!r(a)||1!=a.length?-1:g.indexOf(a,0);else{for(b=0;b<g.length;b++)if(b in g&&g[b]===a)break a;b=-1}b=!(0<=b)}b&&g.push(a)});g.sort(va);var k=new R;u(g,function(a){k.add(a)});return k},1);
V("lang",2,m,m,n(m),1);V("last",1,h,m,function(a){if(1!=arguments.length)throw Error("Function last expects ()");return a.v()},0);V("local-name",3,m,h,function(a,b){var c=b?Ua(b.evaluate(a)):a.e;return c?c.nodeName.toLowerCase():""},0,1,h);V("name",3,m,h,function(a,b){var c=b?Ua(b.evaluate(a)):a.e;return c?c.nodeName.toLowerCase():""},0,1,h);V("namespace-uri",3,h,m,n(""),0,1,h);V("normalize-space",3,m,h,function(a,b){return(b?b.a(a):O(a.e)).replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")},0,1);
V("not",2,m,m,function(a,b){return!b.f(a)},1);V("number",1,m,h,function(a,b){return b?b.b(a):+O(a.e)},0,1);V("position",1,h,m,function(a){return a.w()},0);V("round",1,m,m,function(a,b){return Math.round(b.b(a))},1);V("starts-with",2,m,m,function(a,b,c){b=b.a(a);a=c.a(a);return 0==b.lastIndexOf(a,0)},2);V("string",3,m,h,function(a,b){return b?b.a(a):O(a.e)},0,1);V("string-length",1,m,h,function(a,b){return(b?b.a(a):O(a.e)).length},0,1);
V("substring",3,m,m,function(a,b,c,d){c=c.b(a);if(isNaN(c)||Infinity==c||-Infinity==c)return"";d=d?d.b(a):Infinity;if(isNaN(d)||-Infinity===d)return"";c=Math.round(c)-1;var e=Math.max(c,0);a=b.a(a);if(Infinity==d)return a.substring(e);b=Math.round(d);return a.substring(e,c+b)},2,3);V("substring-after",3,m,m,function(a,b,c){b=b.a(a);a=c.a(a);c=b.indexOf(a);return-1==c?"":b.substring(c+a.length)},2);
V("substring-before",3,m,m,function(a,b,c){b=b.a(a);a=c.a(a);a=b.indexOf(a);return-1==a?"":b.substring(0,a)},2);V("sum",1,m,m,function(a,b){for(var c=S(b.evaluate(a)),d=0,e=c.next();e;e=c.next())d+=+O(e);return d},1,1,h);V("translate",3,m,m,function(a,b,c,d){b=b.a(a);c=c.a(a);var e=d.a(a);a=[];for(d=0;d<c.length;d++){var g=c.charAt(d);g in a||(a[g]=e.charAt(d))}c="";for(d=0;d<b.length;d++)g=b.charAt(d),c+=g in a?a[g]:g;return c},3);V("true",2,m,m,n(h),0);function $a(a,b,c,d){this.i=a;this.u=b;this.m=c;this.K=d}$a.prototype.toString=function(){return this.i};var ab={};function W(a,b,c,d){if(a in ab)throw Error("Axis already created: "+a);ab[a]=new $a(a,b,c,!!d)}W("ancestor",function(a,b){for(var c=new R,d=b;d=d.parentNode;)a.matches(d)&&c.unshift(d);return c},h);W("ancestor-or-self",function(a,b){var c=new R,d=b;do a.matches(d)&&c.unshift(d);while(d=d.parentNode);return c},h);
W("attribute",function(a,b){var c=new R,d=a.getName();if("style"==d&&b.style&&N)return c.add(new Ma(b.style,b,"style",b.style.cssText,b.sourceIndex)),c;var e=b.attributes;if(e)if("*"==d)for(var d=b.sourceIndex,g=0,k;k=e[g];g++)N?k.nodeValue&&c.add(Na(b,k,d)):c.add(k);else(k=e.getNamedItem(d))&&(N?k.nodeValue&&c.add(Na(b,k,b.sourceIndex)):c.add(k));return c},m);W("child",function(a,b,c,d,e){return(N?Ra:Sa).call(l,a,b,r(c)?c:l,r(d)?d:l,e||new R)},m,h);W("descendant",Q,m,h);
W("descendant-or-self",function(a,b,c,d){var e=new R;P(b,c,d)&&a.matches(b)&&e.add(b);return Q(a,b,c,d,e)},m,h);W("following",function(a,b,c,d){var e=new R;do for(var g=b;g=g.nextSibling;)P(g,c,d)&&a.matches(g)&&e.add(g),e=Q(a,g,c,d,e);while(b=b.parentNode);return e},m,h);W("following-sibling",function(a,b){for(var c=new R,d=b;d=d.nextSibling;)a.matches(d)&&c.add(d);return c},m);W("namespace",function(){return new R},m);
W("parent",function(a,b){var c=new R;if(9==b.nodeType)return c;if(2==b.nodeType)return c.add(b.ownerElement),c;var d=b.parentNode;a.matches(d)&&c.add(d);return c},m);W("preceding",function(a,b,c,d){var e=new R,g=[];do g.unshift(b);while(b=b.parentNode);for(var k=1,q=g.length;k<q;k++){var D=[];for(b=g[k];b=b.previousSibling;)D.unshift(b);for(var L=0,ba=D.length;L<ba;L++)b=D[L],P(b,c,d)&&a.matches(b)&&e.add(b),e=Q(a,b,c,d,e)}return e},h,h);
W("preceding-sibling",function(a,b){for(var c=new R,d=b;d=d.previousSibling;)a.matches(d)&&c.unshift(d);return c},h);W("self",function(a,b){var c=new R;a.matches(b)&&c.add(b);return c},m);function X(a){return(a=a.exec(z()))?a[1]:""}var bb=function(){if(Fa)return X(/Firefox\/([0-9.]+)/);if(C||B)return G;if(Ja)return X(/Chrome\/([0-9.]+)/);if(Ka)return X(/Version\/([0-9.]+)/);if(Ha||Ia){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(z());if(a)return a[1]+"."+a[2]}else{if(M)return(a=X(/Android\s+([0-9.]+)/))?a:X(/Version\/([0-9.]+)/);if(Ga)return X(/Camino\/([0-9.]+)/)}return""}();var cb={},db,eb,fb=function(){if(!E)return m;var a=p.Components;if(!a)return m;try{if(!a.classes)return m}catch(b){return m}var c=a.classes,a=a.interfaces,d=c["@mozilla.org/xpcom/version-comparator;1"].getService(a.nsIVersionComparator),c=c["@mozilla.org/xre/app-info;1"].getService(a.nsIXULAppInfo),e=c.platformVersion,g=c.version;db=function(a){d.n(e,""+a)};eb=function(a){return 0<=d.n(g,""+a)};return h}(),gb;if(M){var hb=/Android\s+([0-9\.]+)/.exec(z());gb=hb?hb[1]:"0"}else gb="0";var ib=gb;
M&&(fb?eb(2.3):M?t(ib,2.3):t(bb,2.3));!B&&F&&(fb?db("533"):C?t(J,"533"):sa("533"));function jb(a){s.call(this,a)}ca(jb,s);function kb(a,b){return RegExp(a).test(b)}function lb(a,b){return RegExp(a,"i").text(b)}function mb(a){a=a.replace(/([.^$+(){}\[\]\\|])/g,"\\$1");a=a.replace(/\?/g,"(.|[\r\n])");return a=a.replace(/\*/g,"(.|[\r\n])*")}var nb={exact:function(a,b){return-1!=b.indexOf(a)},glob:function(a,b){return RegExp("^"+mb(a)+"$").test(b)},globcontains:function(a,b){return RegExp(mb(a)).test(b)},regex:kb,regexi:lb,regexpi:lb,regexp:kb};
function ob(a){var b="glob",c=/^([a-zA-Z-]+):(.*)/.exec(a);if(c){var d=c[1],c=c[2];nb[d.toLowerCase()]&&(b=d.toLowerCase(),a=c)}d=nb[b];if(!d)throw new jb("Cannot find pattern matching strategy: "+b);"glob"==b?(0==a.indexOf("glob:")&&(a=a.substring(5)),d=nb.glob):"exact"==b&&0==a.indexOf("exact:")&&(a=a.substring(6));a=aa(d,a);a.s=b;return a};function pb(a,b){if(a.style&&("hidden"==a.style.visibility||"none"==a.style.display))return"";var c;if(3==a.nodeType)return c=a.data,b||(c=c.replace(/\n|\r|\t/g," ")),c.replace(/&nbsp/," ");if(1==a.nodeType&&"SCRIPT"!=a.nodeName){var d=b||"PRE"==a.tagName;c="";for(var e=0;e<a.childNodes.length;e++){var g=a.childNodes.item(e);g&&(c+=pb(g,d))}if("P"==a.tagName||"BR"==a.tagName||"HR"==a.tagName||"DIV"==a.tagName)c+="\n";c=c.replace(/&nbsp/," ");cb.t&&(fb?eb(9):M?0<=t(ib,9):0<=t(bb,9))&&(c=c.replace(/&#100;/,
" "));return c}return""};function qb(a){var b;if(b=da.document.body){var c="";E&&"1.8"<=G||F||B||C?c=pb(b,m):b.textContent?c=b.textContent:b.innerText&&(c=b.innerText);c=c.replace(/\r\n|\r/g,"\n");b=c.replace(/\ +/g," ");c=RegExp(String.fromCharCode(160),"g");if(F)for(c=String.fromCharCode(160);-1!=b.indexOf(c);)b=b.replace(c," ");else b=b.replace(c," ");b=ea(b)}else b="";c=ob(a);"glob"==c.s&&(0==a.indexOf("glob:")&&(a=a.substring(5)),c=ob("globContains:"+a));return c(b)}var Y=["_"],Z=p;
!(Y[0]in Z)&&Z.execScript&&Z.execScript("var "+Y[0]);for(var $;Y.length&&($=Y.shift());)!Y.length&&qb!==f?Z[$]=qb:Z=Z[$]?Z[$]:Z[$]={};; return this._.apply(null,arguments);}.apply({navigator:typeof window!=undefined?window.navigator:null,document:typeof window!=undefined?window.document:null}, arguments);}