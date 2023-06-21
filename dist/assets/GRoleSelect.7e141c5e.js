var Oe=Object.defineProperty;var ze=(r,h,d)=>h in r?Oe(r,h,{enumerable:!0,configurable:!0,writable:!0,value:d}):r[h]=d;var Y=(r,h,d)=>(ze(r,typeof h!="symbol"?h+"":h,d),d);import{aj as Ne,ak as Le,aZ as Ie,a$ as P,b2 as ue,d as Te,j as ve,E as Ve,o as Ke,g as Pe,b3 as He,b1 as $e,_ as Fe}from"./index.7be5bb68.js";import{_ as We}from"./index.808275d9.js";const je=Object.prototype.toString;function Be(r,h){return je.call(r)===`[object ${h}]`}const qe=r=>typeof r<"u",Ye=r=>!qe(r),oe=r=>r!==null&&Be(r,"Object");function Me(r){return Be(r,"String")}function Fr(r){return r&&Array.isArray(r)}function Ue(r){return r===null}function G(r){return Ye(r)||Ue(r)}const Ge=()=>Ne.get(Le+"/basicRole/list"),Qe={},Ze=Object.freeze(Object.defineProperty({__proto__:null,default:Qe},Symbol.toStringTag,{value:"Module"}));var j={exports:{}};const U=Ie(Ze),Je="dotenv",Xe="16.3.1",er="Loads environment variables from .env file",rr="lib/main.js",tr="lib/main.d.ts",nr={".":{types:"./lib/main.d.ts",require:"./lib/main.js",default:"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},ar={"dts-check":"tsc --project tests/types/tsconfig.json",lint:"standard","lint-readme":"standard-markdown",pretest:"npm run lint && npm run dts-check",test:"tap tests/*.js --100 -Rspec",prerelease:"npm test",release:"standard-version"},or={type:"git",url:"git://github.com/motdotla/dotenv.git"},sr="https://github.com/motdotla/dotenv?sponsor=1",ir=["dotenv","env",".env","environment","variables","config","settings"],cr="README.md",fr="BSD-2-Clause",lr={"@definitelytyped/dtslint":"^0.0.133","@types/node":"^18.11.3",decache:"^4.6.1",sinon:"^14.0.1",standard:"^17.0.0","standard-markdown":"^7.1.0","standard-version":"^9.5.0",tap:"^16.3.0",tar:"^6.1.11",typescript:"^4.8.4"},ur={node:">=12"},vr={fs:!1},dr={name:Je,version:Xe,description:er,main:rr,types:tr,exports:nr,scripts:ar,repository:or,funding:sr,keywords:ir,readmeFilename:cr,license:fr,devDependencies:lr,engines:ur,browser:vr},Ce=U,fe=U,pr=U,hr=U,gr=dr,le=gr.version,_r=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function yr(r){const h={};let d=r.toString();d=d.replace(/\r\n?/mg,`
`);let s;for(;(s=_r.exec(d))!=null;){const C=s[1];let f=s[2]||"";f=f.trim();const k=f[0];f=f.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),k==='"'&&(f=f.replace(/\\n/g,`
`),f=f.replace(/\\r/g,"\r")),h[C]=f}return h}function xr(r){const h=we(r),d=V.configDotenv({path:h});if(!d.parsed)throw new Error(`MISSING_DATA: Cannot parse ${h} for an unknown reason`);const s=be(r).split(","),C=s.length;let f;for(let k=0;k<C;k++)try{const S=s[k].trim(),O=Br(d,S);f=V.decrypt(O.ciphertext,O.key);break}catch(S){if(k+1>=C)throw S}return V.parse(f)}function mr(r){console.log(`[dotenv@${le}][INFO] ${r}`)}function Er(r){console.log(`[dotenv@${le}][WARN] ${r}`)}function se(r){console.log(`[dotenv@${le}][DEBUG] ${r}`)}function be(r){return r&&r.DOTENV_KEY&&r.DOTENV_KEY.length>0?r.DOTENV_KEY:{}.DOTENV_KEY&&{}.DOTENV_KEY.length>0?{}.DOTENV_KEY:""}function Br(r,h){let d;try{d=new URL(h)}catch(S){throw S.code==="ERR_INVALID_URL"?new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenv.org/vault/.env.vault?environment=development"):S}const s=d.password;if(!s)throw new Error("INVALID_DOTENV_KEY: Missing key part");const C=d.searchParams.get("environment");if(!C)throw new Error("INVALID_DOTENV_KEY: Missing environment part");const f=`DOTENV_VAULT_${C.toUpperCase()}`,k=r.parsed[f];if(!k)throw new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${f} in your .env.vault file.`);return{ciphertext:k,key:s}}function we(r){let h=fe.resolve(process.cwd(),".env");return r&&r.path&&r.path.length>0&&(h=r.path),h.endsWith(".vault")?h:`${h}.vault`}function Cr(r){return r[0]==="~"?fe.join(pr.homedir(),r.slice(1)):r}function br(r){mr("Loading env from encrypted .env.vault");const h=V._parseVault(r);let d=process.env;return r&&r.processEnv!=null&&(d=r.processEnv),V.populate(d,h,r),{parsed:h}}function wr(r){let h=fe.resolve(process.cwd(),".env"),d="utf8";const s=Boolean(r&&r.debug);r&&(r.path!=null&&(h=Cr(r.path)),r.encoding!=null&&(d=r.encoding));try{const C=V.parse(Ce.readFileSync(h,{encoding:d}));let f=process.env;return r&&r.processEnv!=null&&(f=r.processEnv),V.populate(f,C,r),{parsed:C}}catch(C){return s&&se(`Failed to load ${h} ${C.message}`),{error:C}}}function kr(r){const h=we(r);return be(r).length===0?V.configDotenv(r):Ce.existsSync(h)?V._configVault(r):(Er(`You set DOTENV_KEY but you are missing a .env.vault file at ${h}. Did you forget to build it?`),V.configDotenv(r))}function Dr(r,h){const d=Buffer.from(h.slice(-64),"hex");let s=Buffer.from(r,"base64");const C=s.slice(0,12),f=s.slice(-16);s=s.slice(12,-16);try{const k=hr.createDecipheriv("aes-256-gcm",d,C);return k.setAuthTag(f),`${k.update(s)}${k.final()}`}catch(k){const S=k instanceof RangeError,O=k.message==="Invalid key length",a=k.message==="Unsupported state or unable to authenticate data";if(S||O){const E="INVALID_DOTENV_KEY: It must be 64 characters long (or more)";throw new Error(E)}else if(a){const E="DECRYPTION_FAILED: Please check your DOTENV_KEY";throw new Error(E)}else throw console.error("Error: ",k.code),console.error("Error: ",k.message),k}}function Sr(r,h,d={}){const s=Boolean(d&&d.debug),C=Boolean(d&&d.override);if(typeof h!="object")throw new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");for(const f of Object.keys(h))Object.prototype.hasOwnProperty.call(r,f)?(C===!0&&(r[f]=h[f]),s&&se(C===!0?`"${f}" is already defined and WAS overwritten`:`"${f}" is already defined and was NOT overwritten`)):r[f]=h[f]}const V={configDotenv:wr,_configVault:br,_parseVault:xr,config:kr,decrypt:Dr,parse:yr,populate:Sr};j.exports.configDotenv=V.configDotenv;j.exports._configVault=V._configVault;j.exports._parseVault=V._parseVault;j.exports.config=V.config;j.exports.decrypt=V.decrypt;j.exports.parse=V.parse;j.exports.populate=V.populate;j.exports=V;var ie=(r=>(r.Token="gw-root-token",r.RoleOptions="gw-root-cid-role-list",r))(ie||{}),M=(r=>(r.LOCAL="local",r.SESSION="session",r))(M||{}),ke={exports:{}};function Rr(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Q={exports:{}},de;function q(){return de||(de=1,function(r,h){(function(d,s){r.exports=s()})(P,function(){var d=d||function(s,C){var f;if(typeof window<"u"&&window.crypto&&(f=window.crypto),typeof self<"u"&&self.crypto&&(f=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(f=globalThis.crypto),!f&&typeof window<"u"&&window.msCrypto&&(f=window.msCrypto),!f&&typeof P<"u"&&P.crypto&&(f=P.crypto),!f&&typeof Rr=="function")try{f=U}catch{}var k=function(){if(f){if(typeof f.getRandomValues=="function")try{return f.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof f.randomBytes=="function")try{return f.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},S=Object.create||function(){function n(){}return function(e){var o;return n.prototype=e,o=new n,n.prototype=null,o}}(),O={},a=O.lib={},E=a.Base=function(){return{extend:function(n){var e=S(this);return n&&e.mixIn(n),(!e.hasOwnProperty("init")||this.init===e.init)&&(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var n=this.extend();return n.init.apply(n,arguments),n},init:function(){},mixIn:function(n){for(var e in n)n.hasOwnProperty(e)&&(this[e]=n[e]);n.hasOwnProperty("toString")&&(this.toString=n.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),b=a.WordArray=E.extend({init:function(n,e){n=this.words=n||[],e!=C?this.sigBytes=e:this.sigBytes=n.length*4},toString:function(n){return(n||x).stringify(this)},concat:function(n){var e=this.words,o=n.words,g=this.sigBytes,B=n.sigBytes;if(this.clamp(),g%4)for(var R=0;R<B;R++){var I=o[R>>>2]>>>24-R%4*8&255;e[g+R>>>2]|=I<<24-(g+R)%4*8}else for(var L=0;L<B;L+=4)e[g+L>>>2]=o[L>>>2];return this.sigBytes+=B,this},clamp:function(){var n=this.words,e=this.sigBytes;n[e>>>2]&=4294967295<<32-e%4*8,n.length=s.ceil(e/4)},clone:function(){var n=E.clone.call(this);return n.words=this.words.slice(0),n},random:function(n){for(var e=[],o=0;o<n;o+=4)e.push(k());return new b.init(e,n)}}),_=O.enc={},x=_.Hex={stringify:function(n){for(var e=n.words,o=n.sigBytes,g=[],B=0;B<o;B++){var R=e[B>>>2]>>>24-B%4*8&255;g.push((R>>>4).toString(16)),g.push((R&15).toString(16))}return g.join("")},parse:function(n){for(var e=n.length,o=[],g=0;g<e;g+=2)o[g>>>3]|=parseInt(n.substr(g,2),16)<<24-g%8*4;return new b.init(o,e/2)}},D=_.Latin1={stringify:function(n){for(var e=n.words,o=n.sigBytes,g=[],B=0;B<o;B++){var R=e[B>>>2]>>>24-B%4*8&255;g.push(String.fromCharCode(R))}return g.join("")},parse:function(n){for(var e=n.length,o=[],g=0;g<e;g++)o[g>>>2]|=(n.charCodeAt(g)&255)<<24-g%4*8;return new b.init(o,e)}},m=_.Utf8={stringify:function(n){try{return decodeURIComponent(escape(D.stringify(n)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(n){return D.parse(unescape(encodeURIComponent(n)))}},w=a.BufferedBlockAlgorithm=E.extend({reset:function(){this._data=new b.init,this._nDataBytes=0},_append:function(n){typeof n=="string"&&(n=m.parse(n)),this._data.concat(n),this._nDataBytes+=n.sigBytes},_process:function(n){var e,o=this._data,g=o.words,B=o.sigBytes,R=this.blockSize,I=R*4,L=B/I;n?L=s.ceil(L):L=s.max((L|0)-this._minBufferSize,0);var t=L*R,i=s.min(t*4,B);if(t){for(var y=0;y<t;y+=R)this._doProcessBlock(g,y);e=g.splice(0,t),o.sigBytes-=i}return new b.init(e,i)},clone:function(){var n=E.clone.call(this);return n._data=this._data.clone(),n},_minBufferSize:0});a.Hasher=w.extend({cfg:E.extend(),init:function(n){this.cfg=this.cfg.extend(n),this.reset()},reset:function(){w.reset.call(this),this._doReset()},update:function(n){return this._append(n),this._process(),this},finalize:function(n){n&&this._append(n);var e=this._doFinalize();return e},blockSize:16,_createHelper:function(n){return function(e,o){return new n.init(o).finalize(e)}},_createHmacHelper:function(n){return function(e,o){return new N.HMAC.init(n,o).finalize(e)}}});var N=O.algo={};return O}(Math);return d})}(Q)),Q.exports}var Z={exports:{}},pe;function Ar(){return pe||(pe=1,function(r,h){(function(d,s){r.exports=s(q())})(P,function(d){return function(){var s=d,C=s.lib,f=C.WordArray,k=s.enc;k.Base64={stringify:function(O){var a=O.words,E=O.sigBytes,b=this._map;O.clamp();for(var _=[],x=0;x<E;x+=3)for(var D=a[x>>>2]>>>24-x%4*8&255,m=a[x+1>>>2]>>>24-(x+1)%4*8&255,w=a[x+2>>>2]>>>24-(x+2)%4*8&255,N=D<<16|m<<8|w,n=0;n<4&&x+n*.75<E;n++)_.push(b.charAt(N>>>6*(3-n)&63));var e=b.charAt(64);if(e)for(;_.length%4;)_.push(e);return _.join("")},parse:function(O){var a=O.length,E=this._map,b=this._reverseMap;if(!b){b=this._reverseMap=[];for(var _=0;_<E.length;_++)b[E.charCodeAt(_)]=_}var x=E.charAt(64);if(x){var D=O.indexOf(x);D!==-1&&(a=D)}return S(O,a,b)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};function S(O,a,E){for(var b=[],_=0,x=0;x<a;x++)if(x%4){var D=E[O.charCodeAt(x-1)]<<x%4*2,m=E[O.charCodeAt(x)]>>>6-x%4*2,w=D|m;b[_>>>2]|=w<<24-_%4*8,_++}return f.create(b,_)}}(),d.enc.Base64})}(Z)),Z.exports}var J={exports:{}},he;function De(){return he||(he=1,function(r,h){(function(d,s){r.exports=s(q())})(P,function(d){return function(s){var C=d,f=C.lib,k=f.WordArray,S=f.Hasher,O=C.algo,a=[];(function(){for(var m=0;m<64;m++)a[m]=s.abs(s.sin(m+1))*4294967296|0})();var E=O.MD5=S.extend({_doReset:function(){this._hash=new k.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(m,w){for(var N=0;N<16;N++){var n=w+N,e=m[n];m[n]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360}var o=this._hash.words,g=m[w+0],B=m[w+1],R=m[w+2],I=m[w+3],L=m[w+4],t=m[w+5],i=m[w+6],y=m[w+7],p=m[w+8],A=m[w+9],z=m[w+10],T=m[w+11],K=m[w+12],$=m[w+13],F=m[w+14],W=m[w+15],c=o[0],l=o[1],u=o[2],v=o[3];c=b(c,l,u,v,g,7,a[0]),v=b(v,c,l,u,B,12,a[1]),u=b(u,v,c,l,R,17,a[2]),l=b(l,u,v,c,I,22,a[3]),c=b(c,l,u,v,L,7,a[4]),v=b(v,c,l,u,t,12,a[5]),u=b(u,v,c,l,i,17,a[6]),l=b(l,u,v,c,y,22,a[7]),c=b(c,l,u,v,p,7,a[8]),v=b(v,c,l,u,A,12,a[9]),u=b(u,v,c,l,z,17,a[10]),l=b(l,u,v,c,T,22,a[11]),c=b(c,l,u,v,K,7,a[12]),v=b(v,c,l,u,$,12,a[13]),u=b(u,v,c,l,F,17,a[14]),l=b(l,u,v,c,W,22,a[15]),c=_(c,l,u,v,B,5,a[16]),v=_(v,c,l,u,i,9,a[17]),u=_(u,v,c,l,T,14,a[18]),l=_(l,u,v,c,g,20,a[19]),c=_(c,l,u,v,t,5,a[20]),v=_(v,c,l,u,z,9,a[21]),u=_(u,v,c,l,W,14,a[22]),l=_(l,u,v,c,L,20,a[23]),c=_(c,l,u,v,A,5,a[24]),v=_(v,c,l,u,F,9,a[25]),u=_(u,v,c,l,I,14,a[26]),l=_(l,u,v,c,p,20,a[27]),c=_(c,l,u,v,$,5,a[28]),v=_(v,c,l,u,R,9,a[29]),u=_(u,v,c,l,y,14,a[30]),l=_(l,u,v,c,K,20,a[31]),c=x(c,l,u,v,t,4,a[32]),v=x(v,c,l,u,p,11,a[33]),u=x(u,v,c,l,T,16,a[34]),l=x(l,u,v,c,F,23,a[35]),c=x(c,l,u,v,B,4,a[36]),v=x(v,c,l,u,L,11,a[37]),u=x(u,v,c,l,y,16,a[38]),l=x(l,u,v,c,z,23,a[39]),c=x(c,l,u,v,$,4,a[40]),v=x(v,c,l,u,g,11,a[41]),u=x(u,v,c,l,I,16,a[42]),l=x(l,u,v,c,i,23,a[43]),c=x(c,l,u,v,A,4,a[44]),v=x(v,c,l,u,K,11,a[45]),u=x(u,v,c,l,W,16,a[46]),l=x(l,u,v,c,R,23,a[47]),c=D(c,l,u,v,g,6,a[48]),v=D(v,c,l,u,y,10,a[49]),u=D(u,v,c,l,F,15,a[50]),l=D(l,u,v,c,t,21,a[51]),c=D(c,l,u,v,K,6,a[52]),v=D(v,c,l,u,I,10,a[53]),u=D(u,v,c,l,z,15,a[54]),l=D(l,u,v,c,B,21,a[55]),c=D(c,l,u,v,p,6,a[56]),v=D(v,c,l,u,W,10,a[57]),u=D(u,v,c,l,i,15,a[58]),l=D(l,u,v,c,$,21,a[59]),c=D(c,l,u,v,L,6,a[60]),v=D(v,c,l,u,T,10,a[61]),u=D(u,v,c,l,R,15,a[62]),l=D(l,u,v,c,A,21,a[63]),o[0]=o[0]+c|0,o[1]=o[1]+l|0,o[2]=o[2]+u|0,o[3]=o[3]+v|0},_doFinalize:function(){var m=this._data,w=m.words,N=this._nDataBytes*8,n=m.sigBytes*8;w[n>>>5]|=128<<24-n%32;var e=s.floor(N/4294967296),o=N;w[(n+64>>>9<<4)+15]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360,w[(n+64>>>9<<4)+14]=(o<<8|o>>>24)&16711935|(o<<24|o>>>8)&4278255360,m.sigBytes=(w.length+1)*4,this._process();for(var g=this._hash,B=g.words,R=0;R<4;R++){var I=B[R];B[R]=(I<<8|I>>>24)&16711935|(I<<24|I>>>8)&4278255360}return g},clone:function(){var m=S.clone.call(this);return m._hash=this._hash.clone(),m}});function b(m,w,N,n,e,o,g){var B=m+(w&N|~w&n)+e+g;return(B<<o|B>>>32-o)+w}function _(m,w,N,n,e,o,g){var B=m+(w&n|N&~n)+e+g;return(B<<o|B>>>32-o)+w}function x(m,w,N,n,e,o,g){var B=m+(w^N^n)+e+g;return(B<<o|B>>>32-o)+w}function D(m,w,N,n,e,o,g){var B=m+(N^(w|~n))+e+g;return(B<<o|B>>>32-o)+w}C.MD5=S._createHelper(E),C.HmacMD5=S._createHmacHelper(E)}(Math),d.MD5})}(J)),J.exports}var X={exports:{}},ee={exports:{}},ge;function Or(){return ge||(ge=1,function(r,h){(function(d,s){r.exports=s(q())})(P,function(d){return function(){var s=d,C=s.lib,f=C.WordArray,k=C.Hasher,S=s.algo,O=[],a=S.SHA1=k.extend({_doReset:function(){this._hash=new f.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(E,b){for(var _=this._hash.words,x=_[0],D=_[1],m=_[2],w=_[3],N=_[4],n=0;n<80;n++){if(n<16)O[n]=E[b+n]|0;else{var e=O[n-3]^O[n-8]^O[n-14]^O[n-16];O[n]=e<<1|e>>>31}var o=(x<<5|x>>>27)+N+O[n];n<20?o+=(D&m|~D&w)+1518500249:n<40?o+=(D^m^w)+1859775393:n<60?o+=(D&m|D&w|m&w)-1894007588:o+=(D^m^w)-899497514,N=w,w=m,m=D<<30|D>>>2,D=x,x=o}_[0]=_[0]+x|0,_[1]=_[1]+D|0,_[2]=_[2]+m|0,_[3]=_[3]+w|0,_[4]=_[4]+N|0},_doFinalize:function(){var E=this._data,b=E.words,_=this._nDataBytes*8,x=E.sigBytes*8;return b[x>>>5]|=128<<24-x%32,b[(x+64>>>9<<4)+14]=Math.floor(_/4294967296),b[(x+64>>>9<<4)+15]=_,E.sigBytes=b.length*4,this._process(),this._hash},clone:function(){var E=k.clone.call(this);return E._hash=this._hash.clone(),E}});s.SHA1=k._createHelper(a),s.HmacSHA1=k._createHmacHelper(a)}(),d.SHA1})}(ee)),ee.exports}var re={exports:{}},_e;function zr(){return _e||(_e=1,function(r,h){(function(d,s){r.exports=s(q())})(P,function(d){(function(){var s=d,C=s.lib,f=C.Base,k=s.enc,S=k.Utf8,O=s.algo;O.HMAC=f.extend({init:function(a,E){a=this._hasher=new a.init,typeof E=="string"&&(E=S.parse(E));var b=a.blockSize,_=b*4;E.sigBytes>_&&(E=a.finalize(E)),E.clamp();for(var x=this._oKey=E.clone(),D=this._iKey=E.clone(),m=x.words,w=D.words,N=0;N<b;N++)m[N]^=1549556828,w[N]^=909522486;x.sigBytes=D.sigBytes=_,this.reset()},reset:function(){var a=this._hasher;a.reset(),a.update(this._iKey)},update:function(a){return this._hasher.update(a),this},finalize:function(a){var E=this._hasher,b=E.finalize(a);E.reset();var _=E.finalize(this._oKey.clone().concat(b));return _}})})()})}(re)),re.exports}var ye;function Se(){return ye||(ye=1,function(r,h){(function(d,s,C){r.exports=s(q(),Or(),zr())})(P,function(d){return function(){var s=d,C=s.lib,f=C.Base,k=C.WordArray,S=s.algo,O=S.MD5,a=S.EvpKDF=f.extend({cfg:f.extend({keySize:128/32,hasher:O,iterations:1}),init:function(E){this.cfg=this.cfg.extend(E)},compute:function(E,b){for(var _,x=this.cfg,D=x.hasher.create(),m=k.create(),w=m.words,N=x.keySize,n=x.iterations;w.length<N;){_&&D.update(_),_=D.update(E).finalize(b),D.reset();for(var e=1;e<n;e++)_=D.finalize(_),D.reset();m.concat(_)}return m.sigBytes=N*4,m}});s.EvpKDF=function(E,b,_){return a.create(_).compute(E,b)}}(),d.EvpKDF})}(X)),X.exports}var te={exports:{}},xe;function Nr(){return xe||(xe=1,function(r,h){(function(d,s,C){r.exports=s(q(),Se())})(P,function(d){d.lib.Cipher||function(s){var C=d,f=C.lib,k=f.Base,S=f.WordArray,O=f.BufferedBlockAlgorithm,a=C.enc;a.Utf8;var E=a.Base64,b=C.algo,_=b.EvpKDF,x=f.Cipher=O.extend({cfg:k.extend(),createEncryptor:function(t,i){return this.create(this._ENC_XFORM_MODE,t,i)},createDecryptor:function(t,i){return this.create(this._DEC_XFORM_MODE,t,i)},init:function(t,i,y){this.cfg=this.cfg.extend(y),this._xformMode=t,this._key=i,this.reset()},reset:function(){O.reset.call(this),this._doReset()},process:function(t){return this._append(t),this._process()},finalize:function(t){t&&this._append(t);var i=this._doFinalize();return i},keySize:128/32,ivSize:128/32,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function t(i){return typeof i=="string"?L:B}return function(i){return{encrypt:function(y,p,A){return t(p).encrypt(i,y,p,A)},decrypt:function(y,p,A){return t(p).decrypt(i,y,p,A)}}}}()});f.StreamCipher=x.extend({_doFinalize:function(){var t=this._process(!0);return t},blockSize:1});var D=C.mode={},m=f.BlockCipherMode=k.extend({createEncryptor:function(t,i){return this.Encryptor.create(t,i)},createDecryptor:function(t,i){return this.Decryptor.create(t,i)},init:function(t,i){this._cipher=t,this._iv=i}}),w=D.CBC=function(){var t=m.extend();t.Encryptor=t.extend({processBlock:function(y,p){var A=this._cipher,z=A.blockSize;i.call(this,y,p,z),A.encryptBlock(y,p),this._prevBlock=y.slice(p,p+z)}}),t.Decryptor=t.extend({processBlock:function(y,p){var A=this._cipher,z=A.blockSize,T=y.slice(p,p+z);A.decryptBlock(y,p),i.call(this,y,p,z),this._prevBlock=T}});function i(y,p,A){var z,T=this._iv;T?(z=T,this._iv=s):z=this._prevBlock;for(var K=0;K<A;K++)y[p+K]^=z[K]}return t}(),N=C.pad={},n=N.Pkcs7={pad:function(t,i){for(var y=i*4,p=y-t.sigBytes%y,A=p<<24|p<<16|p<<8|p,z=[],T=0;T<p;T+=4)z.push(A);var K=S.create(z,p);t.concat(K)},unpad:function(t){var i=t.words[t.sigBytes-1>>>2]&255;t.sigBytes-=i}};f.BlockCipher=x.extend({cfg:x.cfg.extend({mode:w,padding:n}),reset:function(){var t;x.reset.call(this);var i=this.cfg,y=i.iv,p=i.mode;this._xformMode==this._ENC_XFORM_MODE?t=p.createEncryptor:(t=p.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==t?this._mode.init(this,y&&y.words):(this._mode=t.call(p,this,y&&y.words),this._mode.__creator=t)},_doProcessBlock:function(t,i){this._mode.processBlock(t,i)},_doFinalize:function(){var t,i=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(i.pad(this._data,this.blockSize),t=this._process(!0)):(t=this._process(!0),i.unpad(t)),t},blockSize:128/32});var e=f.CipherParams=k.extend({init:function(t){this.mixIn(t)},toString:function(t){return(t||this.formatter).stringify(this)}}),o=C.format={},g=o.OpenSSL={stringify:function(t){var i,y=t.ciphertext,p=t.salt;return p?i=S.create([1398893684,1701076831]).concat(p).concat(y):i=y,i.toString(E)},parse:function(t){var i,y=E.parse(t),p=y.words;return p[0]==1398893684&&p[1]==1701076831&&(i=S.create(p.slice(2,4)),p.splice(0,4),y.sigBytes-=16),e.create({ciphertext:y,salt:i})}},B=f.SerializableCipher=k.extend({cfg:k.extend({format:g}),encrypt:function(t,i,y,p){p=this.cfg.extend(p);var A=t.createEncryptor(y,p),z=A.finalize(i),T=A.cfg;return e.create({ciphertext:z,key:y,iv:T.iv,algorithm:t,mode:T.mode,padding:T.padding,blockSize:t.blockSize,formatter:p.format})},decrypt:function(t,i,y,p){p=this.cfg.extend(p),i=this._parse(i,p.format);var A=t.createDecryptor(y,p).finalize(i.ciphertext);return A},_parse:function(t,i){return typeof t=="string"?i.parse(t,this):t}}),R=C.kdf={},I=R.OpenSSL={execute:function(t,i,y,p){p||(p=S.random(64/8));var A=_.create({keySize:i+y}).compute(t,p),z=S.create(A.words.slice(i),y*4);return A.sigBytes=i*4,e.create({key:A,iv:z,salt:p})}},L=f.PasswordBasedCipher=B.extend({cfg:B.cfg.extend({kdf:I}),encrypt:function(t,i,y,p){p=this.cfg.extend(p);var A=p.kdf.execute(y,t.keySize,t.ivSize);p.iv=A.iv;var z=B.encrypt.call(this,t,i,A.key,p);return z.mixIn(A),z},decrypt:function(t,i,y,p){p=this.cfg.extend(p),i=this._parse(i,p.format);var A=p.kdf.execute(y,t.keySize,t.ivSize,i.salt);p.iv=A.iv;var z=B.decrypt.call(this,t,i,A.key,p);return z}})}()})}(te)),te.exports}(function(r,h){(function(d,s,C){r.exports=s(q(),Ar(),De(),Se(),Nr())})(P,function(d){return function(){var s=d,C=s.lib,f=C.BlockCipher,k=s.algo,S=[],O=[],a=[],E=[],b=[],_=[],x=[],D=[],m=[],w=[];(function(){for(var e=[],o=0;o<256;o++)o<128?e[o]=o<<1:e[o]=o<<1^283;for(var g=0,B=0,o=0;o<256;o++){var R=B^B<<1^B<<2^B<<3^B<<4;R=R>>>8^R&255^99,S[g]=R,O[R]=g;var I=e[g],L=e[I],t=e[L],i=e[R]*257^R*16843008;a[g]=i<<24|i>>>8,E[g]=i<<16|i>>>16,b[g]=i<<8|i>>>24,_[g]=i;var i=t*16843009^L*65537^I*257^g*16843008;x[R]=i<<24|i>>>8,D[R]=i<<16|i>>>16,m[R]=i<<8|i>>>24,w[R]=i,g?(g=I^e[e[e[t^I]]],B^=e[e[B]]):g=B=1}})();var N=[0,1,2,4,8,16,32,64,128,27,54],n=k.AES=f.extend({_doReset:function(){var e;if(!(this._nRounds&&this._keyPriorReset===this._key)){for(var o=this._keyPriorReset=this._key,g=o.words,B=o.sigBytes/4,R=this._nRounds=B+6,I=(R+1)*4,L=this._keySchedule=[],t=0;t<I;t++)t<B?L[t]=g[t]:(e=L[t-1],t%B?B>6&&t%B==4&&(e=S[e>>>24]<<24|S[e>>>16&255]<<16|S[e>>>8&255]<<8|S[e&255]):(e=e<<8|e>>>24,e=S[e>>>24]<<24|S[e>>>16&255]<<16|S[e>>>8&255]<<8|S[e&255],e^=N[t/B|0]<<24),L[t]=L[t-B]^e);for(var i=this._invKeySchedule=[],y=0;y<I;y++){var t=I-y;if(y%4)var e=L[t];else var e=L[t-4];y<4||t<=4?i[y]=e:i[y]=x[S[e>>>24]]^D[S[e>>>16&255]]^m[S[e>>>8&255]]^w[S[e&255]]}}},encryptBlock:function(e,o){this._doCryptBlock(e,o,this._keySchedule,a,E,b,_,S)},decryptBlock:function(e,o){var g=e[o+1];e[o+1]=e[o+3],e[o+3]=g,this._doCryptBlock(e,o,this._invKeySchedule,x,D,m,w,O);var g=e[o+1];e[o+1]=e[o+3],e[o+3]=g},_doCryptBlock:function(e,o,g,B,R,I,L,t){for(var i=this._nRounds,y=e[o]^g[0],p=e[o+1]^g[1],A=e[o+2]^g[2],z=e[o+3]^g[3],T=4,K=1;K<i;K++){var $=B[y>>>24]^R[p>>>16&255]^I[A>>>8&255]^L[z&255]^g[T++],F=B[p>>>24]^R[A>>>16&255]^I[z>>>8&255]^L[y&255]^g[T++],W=B[A>>>24]^R[z>>>16&255]^I[y>>>8&255]^L[p&255]^g[T++],c=B[z>>>24]^R[y>>>16&255]^I[p>>>8&255]^L[A&255]^g[T++];y=$,p=F,A=W,z=c}var $=(t[y>>>24]<<24|t[p>>>16&255]<<16|t[A>>>8&255]<<8|t[z&255])^g[T++],F=(t[p>>>24]<<24|t[A>>>16&255]<<16|t[z>>>8&255]<<8|t[y&255])^g[T++],W=(t[A>>>24]<<24|t[z>>>16&255]<<16|t[y>>>8&255]<<8|t[p&255])^g[T++],c=(t[z>>>24]<<24|t[y>>>16&255]<<16|t[p>>>8&255]<<8|t[A&255])^g[T++];e[o]=$,e[o+1]=F,e[o+2]=W,e[o+3]=c},keySize:256/32});s.AES=f._createHelper(n)}(),d.AES})})(ke);const ce=ke.exports;var H=q();De();const Re="AS1314520",Lr=r=>{const h=H.enc.Utf8.parse(Re),d=h;let s="";if(Me(r))s=ce.encrypt(r,h,{iv:d,mode:H.mode.CBC,padding:H.pad.Pkcs7});else if(oe(r)){let f=JSON.stringify(r);s=ce.encrypt(f,h,{iv:d,mode:H.mode.CBC,padding:H.pad.Pkcs7})}return s.toString()},Ir=r=>{const h=H.enc.Utf8.parse(Re),d=h;return ce.decrypt(r,h,{iv:d,mode:H.mode.CBC,padding:H.pad.Pkcs7}).toString(H.enc.Utf8)},ne=new Map,ae=new Map;class Ae{constructor({storage:h=sessionStorage,hasEncrypt:d=!0,key:s="",expire:C}){Y(this,"storage");Y(this,"hasEncrypt");Y(this,"KEY");Y(this,"expire");this.storage=h,this.hasEncrypt=d,this.KEY=s,this.expire=C||null}get(h){const d=this.storage.getItem(this.KEY);if(!d)return null;const s=this.hasEncrypt?Ir(d):d,C=JSON.parse(s),{value:f,expire:k}=C;if(G(k)||k>=ue().valueOf())return oe(f)&&!G(h)?f[`cacheKey-${h}`]:f;this.remove()}set(h,d){let s;if(G(d))s=h;else{const k=oe(this.get())?this.get():{};k[`cacheKey-${d}`]=h,s=k}const C=JSON.stringify({value:s,expire:G(this.expire)?null:ue().valueOf()+this.expire*1e3}),f=this.hasEncrypt?Lr(C):C;this.storage.setItem(this.KEY,f)}remove(){this.storage.removeItem(this.KEY)}}function me(r){if(r.type===M.LOCAL)return Tr(r);if(r.type===M.SESSION)return Vr(r);throw new Error("Invalid storage type")}const Tr=({hasEncrypt:r=!0,key:h,expire:d=null})=>{if(!h)throw new Error("please enter the Key");if(ne.get(h))return ne.get(h);{const s=new Ae({storage:localStorage,hasEncrypt:r,key:h,expire:d});return ne.set(h,s),s}},Vr=({hasEncrypt:r=!0,key:h,expire:d=null})=>{if(!h)throw new Error("please enter the Key");if(ae.get(h))return ae.get(h);{const s=new Ae({storage:sessionStorage,hasEncrypt:r,key:h,expire:d});return ae.set(h,s),s}},Ee={Token:{key:ie.Token,type:M.LOCAL},RoleSelect:{key:ie.RoleOptions,type:M.SESSION,expire:60}},Kr=Te({__name:"GRoleSelect",props:{isImmediately:{type:Boolean,default:!1}},setup(r,{expose:h}){const d=r,s=ve(!1),C=ve([]),f=a=>a.map(E=>({label:E.name,value:E.id})),k=async()=>{try{s.value=!0;const a=me(Ee.RoleSelect),E=a.get();if(E)C.value=f(E);else{let{data:b}=await Ge();b&&b.length>0&&(C.value=f(b),a.set(b))}}catch(a){console.log("error",a),$e.error("\u83B7\u53D6\u89D2\u8272\u5217\u8868\u5931\u8D25")}finally{s.value=!1}},S=()=>{me(Ee.RoleSelect).remove(),k()},O=()=>C.value;return Ve(()=>{d.isImmediately&&k()}),h({refresh:S,getData:O}),(a,E)=>{const b=We;return Ke(),Pe(b,He(a.$attrs,{loading:s.value,options:C.value,allowClear:"",onFocus:k,placeholder:"\u8BF7\u9009\u62E9\u89D2\u8272\u7C7B\u578B",class:"roleSelect"}),null,16,["loading","options"])}}});const Wr=Fe(Kr,[["__scopeId","data-v-1ad9f7b6"]]);export{Wr as G,M as S,Me as a,me as c,Fr as i};