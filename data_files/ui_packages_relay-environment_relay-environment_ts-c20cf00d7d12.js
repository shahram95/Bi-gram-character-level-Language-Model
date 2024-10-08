"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_relay-environment_relay-environment_ts"],{21303:(e,t,r)=>{let n;r.d(t,{H:()=>T});var s=r(10204);let AliveSession=class AliveSession extends s.ib{getUrlFromRefreshUrl(){return i(this.refreshUrl)}constructor(e,t,r,n){super(e,()=>this.getUrlFromRefreshUrl(),r,n),this.refreshUrl=t}};async function i(e){let t=await o(e);return t&&t.url&&t.token?a(t.url,t.token):null}async function o(e){let t=await fetch(e,{headers:{Accept:"application/json"}});if(t.ok)return t.json();if(404===t.status)return null;throw Error("fetch error")}async function a(e,t){let r=await fetch(e,{method:"POST",mode:"same-origin",headers:{"Scoped-CSRF-Token":t}});if(r.ok)return r.text();throw Error("fetch error")}var c=r(70170),l=r(5728),u=r(74572),d=r(6440),h=r(51528),p=r(2240);let f="alive";let InvalidSourceRelError=class InvalidSourceRelError extends p.r{};let w=d.wA.createPolicy(f,{createScriptURL:e=>p.b.apply({policy:()=>{if(!(0,h.X)())return e;if(!e.startsWith("/"))throw new InvalidSourceRelError("Alive worker src URL must start with a slash");return e},policyName:f,fallback:e,fallbackOnError:!0})});var b=r(23683);function y(e,{channel:t,type:r,data:n}){for(let s of e)s.dispatchEvent(new CustomEvent(`socket:${r}`,{bubbles:!1,cancelable:!1,detail:{name:t,data:n}}))}let g=class AliveSessionProxy{subscribe(e){let t=this.subscriptions.add(...e);t.length&&this.worker.port.postMessage({subscribe:t});let r=new Set(t.map(e=>e.name)),n=e.reduce((e,t)=>{let n=t.topic.name;return(0,s.JR)(n)&&!r.has(n)&&e.add(n),e},new Set);n.size&&this.worker.port.postMessage({requestPresence:Array.from(n)})}unsubscribeAll(...e){let t=this.subscriptions.drain(...e);t.length&&this.worker.port.postMessage({unsubscribe:t});let r=this.presenceMetadata.removeSubscribers(e);this.sendPresenceMetadataUpdate(r)}updatePresenceMetadata(e){let t=new Set;for(let r of e)this.presenceMetadata.setMetadata(r),t.add(r.channelName);this.sendPresenceMetadataUpdate(t)}sendPresenceMetadataUpdate(e){if(!e.size)return;let t=[];for(let r of e)t.push({channelName:r,metadata:this.presenceMetadata.getChannelMetadata(r)});this.worker.port.postMessage({updatePresenceMetadata:t})}online(){this.worker.port.postMessage({online:!0})}offline(){this.worker.port.postMessage({online:!1})}hangup(){this.worker.port.postMessage({hangup:!0})}receive(e){let{channel:t}=e;if("presence"===e.type){let r=this.notifyPresenceDebouncedByChannel.get(t);r||(r=(0,c.s)((e,r)=>{this.notify(e,r),this.notifyPresenceDebouncedByChannel.delete(t)},100),this.notifyPresenceDebouncedByChannel.set(t,r)),r(this.subscriptions.subscribers(t),e);return}this.notify(this.subscriptions.subscribers(t),e)}constructor(e,t,r,n,i){this.subscriptions=new s.m0,this.presenceMetadata=new s.VH,this.notifyPresenceDebouncedByChannel=new Map,this.notify=i,this.worker=new SharedWorker(e,`github-socket-worker-v2-${n}`),this.worker.port.onmessage=({data:e})=>this.receive(e),this.worker.port.postMessage({connect:{url:t,refreshUrl:r}})}};async function S(){let e=function(){let e=document.head.querySelector("link[rel=shared-web-socket-src]")?.getAttribute("href")??"";try{return w.createScriptURL(e)}catch(e){if(e instanceof InvalidSourceRelError)return null;throw e}}();if(!e)return;let t=document.head.querySelector("link[rel=shared-web-socket]")?.href??null;if(!t)return;let r=document.head.querySelector("link[rel=shared-web-socket]")?.getAttribute("data-refresh-url")??null;if(!r)return;let n=document.head.querySelector("link[rel=shared-web-socket]")?.getAttribute("data-session-id")??null;if(!n)return;let s=(()=>{if(!(0,b.nr)()&&"SharedWorker"in window&&"true"!==(0,u.A)("localStorage").getItem("bypassSharedWorker"))try{return new g(e,t,r,n,y)}catch(e){}return new AliveSession(t,r,!1,y)})();return window.addEventListener("online",()=>s.online()),window.addEventListener("offline",()=>s.offline()),window.addEventListener("pagehide",()=>{"hangup"in s&&s.hangup()}),s}async function m(){return await l.G,S()}function T(){return n||(n=m())}},7665:(e,t,r)=>{r.d(t,{$:()=>s});var n=r(10204);function s(e,t,r){if(!e)throw Error("Not connected to alive");if(!t)throw Error("No channel name");let s=n.KK.parse(t);if(!s)throw Error("Invalid channel name");let i={subscriber:{dispatchEvent:e=>{e instanceof CustomEvent&&r(e.detail.data)}},topic:s};return e.subscribe([i]),{unsubscribe:()=>e.unsubscribeAll(i.subscriber)}}},20594:(e,t,r)=>{r.d(t,{Av:()=>a,BM:()=>s,Gr:()=>c,HX:()=>d,M_:()=>h,RD:()=>u,rb:()=>i});var n=r(97156);let s="GraphQLTraces",i="GraphQLTracingRefresh",o=decodeURIComponent(new URLSearchParams(n.fV.search).get("disable_clusters")||"").split(",").filter(e=>""!==e);function a(e){if(!n.cg||!c()||!e)return;let t=n.cg;t&&!t[s]&&(t[s]=[]),t&&e.__trace&&(t[s].push(e.__trace),"function"==typeof t[i]&&t[i]())}function c(){let e=n.cg;return"true"===new URLSearchParams(n.fV.search).get("_tracing")||e&&void 0!==e[s]}function l(){return o.length>0}function u(e){if(!c()&&!l())return e;let t=new URL(e,n.fV.origin);return c()&&t.searchParams.set("_tracing","true"),l()&&t.searchParams.set("disable_clusters",o.join(",")),t.pathname+t.search}function d(e){return o.indexOf(e)>-1}function h(e){let t=o.indexOf(e);t>-1?o.splice(t,1):o.push(e);let r=new URLSearchParams(n.fV.search);r.set("disable_clusters",o.join(",")),n.fV.search=r.toString()}},51884:(e,t,r)=>{r.d(t,{VB:()=>SSRNetwork,SD:()=>_,E7:()=>P});var n=r(40961),s=r(69487),i=r(20594),o=r(28784),a=r(97156),c=r(23780);let l=["SAML","SERVICE_UNAVAILABLE"],u={FORBIDDEN:["SAML error"],AUTHENTICATION:["Couldn\u2019t authenticate you"]},d=class ValidationError extends Error{constructor(e,t,r){super(e,t),this.catalogService=r}};async function h(e){if(e.status>=400&&404!==e.status){let t=await e.text();throw Error(`HTTP error (${e.status}): ${t}`)}}async function p(e,t,r,n="GET",s,i,o,a){return(await f(e,t,r,n,{isSubscription:!1,scope:void 0},s,i,o,a)).response}async function f(e,t,r,n="POST",o={},h,p,f,b){let y=JSON.stringify((0,s.stableCopy)({query:e,variables:r,...o.scopeObject?{scopeObject:o.scopeObject}:{}})),{isSubscription:g,scope:S,subscriptionTopic:m,dispatchTime:T}=o,E=function(e,t,r,n,s,i,o="/_graphql"){let c=[];if("GET"===e&&c.push(`body=${t}`),r&&c.push("subscription=1"),s&&c.push(`scope=${encodeURIComponent(s)}`),n&&c.push(`subscriptionTopic=${encodeURIComponent(n)}`),i&&c.push(`dispatchTime=${encodeURIComponent(i)}`),a.cg){let e=new URL(a.cg.location.href,a.cg.location.origin).searchParams.get("_features");e&&c.push(`_features=${e}`)}return c.length>0?`${o}?${c.join("&")}`:o}(n,encodeURIComponent(y),g,m,S,T,h),P=null;try{let{subscriptionId:r,requestId:s,json:o,status:a}=await w(E,n,y,p);if(P=r,f&&o.errors){let e=f[a];if(e)for(let r of o.errors){let n=e[r.type];n?.({persistedQueryName:t,errorMessage:r.message})}}let h=function(e,t,r,n){if("errors"in e&&(e.errors.filter(e=>l.includes(e.type)||!!u[e.type]?.includes(e.message)).map(e=>{console.error(`Failed to fetch data. Please use this request ID when contacting support: ${t} Error: ${e.type}: ${e.message} (path: ${e.path})`)}),e.errors=e.errors.filter(e=>!l.includes(e.type)&&!u[e.type]?.includes(e.message))),"errors"in e&&e.errors.length){let t=e.errors.map(e=>`GraphQL error: ${e.type}: ${e.message} (path: ${e.path})`).join(", "),s=new d(`${t} (Persisted query id: ${r})`,{cause:e.errors},e.extensions?.query_owning_catalog_service);if(n)(0,c.N7)(s),n.error(s);else throw s}if(!("data"in e)){let s=Error(`Expected data property in response: ${JSON.stringify(e)}. persistedQueryId: ${r}, requestId: ${t}`);if(n)(0,c.N7)(s),n.error(s);else throw s}return e}(o,s,e,b);return h&&(0,i.Av)(h),{subscriptionId:P,response:h}}catch(e){if(b)return(0,c.N7)(e),b.error(e),{subscriptionId:P,response:{errors:[{message:"An error occurred while fetching data. Please try again later."}],extensions:{}}};throw e}}async function w(e,t,r,n){return b((0,i.RD)(e),t,r,n)}async function b(e,t,r,n){let s;let i={};n?.issues_react_perf_test&&(i["X-LUC-Environment"]="issues"),i["X-Requested-With"]="XMLHttpRequest",s="GET"===t?await fetch(e,{method:t,cache:"no-cache",credentials:"include",headers:i}):await (0,o.DI)(e,{method:t,headers:{Accept:"application/json",...i},...r?{body:r}:void 0}),await h(s);let a=await s.json();return{subscriptionId:s.headers.get("X-Subscription-ID"),requestId:s.headers.get("X-Github-Request-Id")||"",json:a,status:s.status}}let y=[{kind:"linked",handle(e,t,r){if(null!=t&&t.getType()===s.ROOT_TYPE&&"node"===e.name&&r.hasOwnProperty("id"))return r.id}},{kind:"pluralLinked",handle(e,t,r){if(null!=t&&t.getType()===s.ROOT_TYPE&&"nodes"===e.name&&r.hasOwnProperty("ids"))return r.ids}}];var g=r(21303),S=r(7665),m=r(69982);function T(e){return(0,m.unstable_scheduleCallback)(m.unstable_LowPriority,e)}let E={cancel:()=>!1,schedule:e=>((0,n.unstable_batchedUpdates)(e),"")};let SSRNetwork=class SSRNetwork{execute(e,t,r){return this.relayNetwork.execute(e,t,r)}getPreloadedSubscriptions(){return this.preloadedSubscriptions}constructor(e,t={},r,n,i,o){this.ssrPreloadedData=e,this.enabled_features=t,this.preloadedSubscriptions=r,this.warningsShown=new Set,this.maxAge=i,this.errorCallbacks=o,this.relayNetwork=s.Network.create((e,t)=>s.Observable.create(r=>{let s=function({params:e,variables:t,ssrPreloadedQueries:r,baseUrl:n,emitWarning:s,enabledFeatures:i,maxAge:o,errorCallbacks:c,observer:l}){if(!e.id)throw Error("params has no id property!");if(e.id&&r){let n=JSON.stringify(t),s=r.get(e.id)?.get(n),i=Math.floor(new Date().getTime()/1e3),c=s?.timestamp;if(s&&(l.next(s),!(o&&c&&i>c+o))){l.complete();return}e.metadata?.isRelayRouteRequest&&(0,a.g5)()}let u="mutation"===e.operationKind?"POST":"GET";if(a.KJ)return p(e.id,e.name,t,u,n,i,c,l)}({params:e,variables:t,ssrPreloadedQueries:this.ssrPreloadedData,baseUrl:n,emitWarning:e=>{this.warningsShown.has(e)||(this.warningsShown.add(e),console.warn(e))},enabledFeatures:this.enabled_features,maxAge:i,errorCallbacks:this.errorCallbacks,observer:r});s instanceof Promise&&s.then(e=>{if(!Array.isArray(e)&&"extensions"in e&&e.extensions&&e.extensions.subscriptions){let t=e.extensions.subscriptions;for(let e in t)for(let r in this.preloadedSubscriptions.has(e)||this.preloadedSubscriptions.set(e,new Map),t[e])this.preloadedSubscriptions.get(e)?.set(r,t[e][r])}r.next(e),r.complete()})}),(e,t)=>(function(e,t,r=new Map){let n=e.id,i=e.name;return s.Observable.create(s=>{let o=()=>{},a=!1;return async function(){if(!n)throw Error("unexpected operation with no id!");let l=e.metadata?.scope,u=function(e,t,r,n){let s=n.get(e);if(s)e:for(let[e,n]of s){for(let[n,s]of Object.entries(JSON.parse(e)))if("$scope"===n&&r!==s||t[n]!==s)continue e;return n}}(n,t,l,r),d=null;if(u)d=u.subscriptionId,u.response&&s.next(u.response);else{let e=await f(n,i,t,"GET",{isSubscription:!0,scope:l});d=e.subscriptionId,e.response&&s.next(e.response)}try{let e=await (0,g.H)();if(a)return;let r=(0,S.$)(e,d,async({scope_object:e,subscription_topic:r,dispatch_time:o})=>{try{let{response:a}=await f(n,i,{...t},"GET",{isSubscription:!0,scopeObject:e,subscriptionTopic:r,dispatchTime:o,scope:l});a&&s.next(a)}catch(e){(0,c.N7)(e,{message:`Error in fetching update for ${n} with variables ${JSON.stringify(t)}`})}});r?.unsubscribe&&(o=r.unsubscribe)}catch(e){s.error(e)}}(),{get closed(){return a},unsubscribe(){a=!0,o()}}})})(e,t,this.preloadedSubscriptions))}};let P=(e,t)=>{let r=new SSRNetwork(new Map,{},new Map,e,void 0,t),n=new s.Environment({scheduler:E,store:new s.Store(new s.RecordSource,{gcReleaseBufferSize:50,queryCacheExpirationTime:3e5,gcScheduler:T}),getDataID:(e,t)=>{if("Viewer"===t)return null==e.id?(0,s.generateClientID)("client:root","viewer"):e.id;if("ProjectV2SingleSelectFieldOption"===t){let t=[];return e.id&&t.push(e.id),e.name&&t.push(e.name),e.color&&t.push(e.color),e.description&&t.push(function(e){let t=0;if(0===e.length)return t;for(let r=0;r<e.length;r++)t=(t<<5)-t+e.charCodeAt(r)|0;return t}(e.description)),t.join("_")}return e.id},network:r,missingFieldHandlers:y});return n.options={baseUrl:e,getPreloadedSubscriptions:()=>r.getPreloadedSubscriptions()},n};function _({environment:e,query:t,variables:r={}}){let n=(0,s.getRequest)(t),i=(0,s.createOperationDescriptor)(n,r);return e.retain(i),(0,s.fetchQuery)(e,t,r,{fetchPolicy:"store-or-network"})}},2240:(e,t,r)=>{r.d(t,{b:()=>l,r:()=>TrustedTypesPolicyError});var n=r(97564),s=r(51528),i=r(23780),o=r(42838),a=r.n(o),c=r(51848);let TrustedTypesPolicyError=class TrustedTypesPolicyError extends Error{};let l={apply:function({policy:e,policyName:t,fallback:r,fallbackOnError:o=!1,sanitize:l,silenceErrorReporting:u=!1}){try{if((0,n.G7)("BYPASS_TRUSTED_TYPES_POLICY_RULES"))return r;(0,s.i)({incrementKey:"TRUSTED_TYPES_POLICY_CALLED",trustedTypesPolicyName:t},!1,.1);let i=e();return l&&new Promise(e=>{let r=window.performance.now(),n=a().sanitize(i,{FORBID_ATTR:[]}),s=window.performance.now();if(i.length!==n.length){let o=Error("Trusted Types policy output sanitized"),a=o.stack?.slice(0,1e3),l=i.slice(0,250);(0,c.BI)("trusted_types_policy.sanitize",{policyName:t,output:l,stack:a,outputLength:i.length,sanitizedLength:n.length,executionTime:s-r}),e(i)}}),i}catch(e){if(e instanceof TrustedTypesPolicyError||(u||(0,i.N7)(e),(0,s.i)({incrementKey:"TRUSTED_TYPES_POLICY_ERROR",trustedTypesPolicyName:t}),!o))throw e}return r}}},6440:(e,t,r)=>{r.d(t,{wA:()=>u});var n,s=r(97156),i=r(51528);function o(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let a={createHTML:o("createHTML"),createScript:o("createScript"),createScriptURL:o("createScriptURL")},c=(n=globalThis).__TRUSTED_TYPE_POLICIES__??(n.__TRUSTED_TYPE_POLICIES__=new Map),l=globalThis.trustedTypes??{createPolicy:(e,t)=>({name:e,...a,...t})},u={createPolicy:(e,t)=>{if(c.has(e))return(0,i.i)({incrementKey:"TRUSTED_TYPES_POLICY_INITIALIZED_TWICE"}),c.get(e);{let r=Object.freeze(l.createPolicy(e,t));return c.set(e,r),r}}},d=!1;s.XC?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||d||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #prodsec-engineering if you have any additional questions about Trusted Types or CSP.`),d=!0)})},28784:(e,t,r)=>{function n(e,t={}){!function(e){if(new URL(e,window.location.origin).origin!==window.location.origin)throw Error("Can not make cross-origin requests from verifiedFetch")}(e);let r={...t.headers,"GitHub-Verified-Fetch":"true","X-Requested-With":"XMLHttpRequest"};return fetch(e,{...t,headers:r})}function s(e,t){let r={...t?.headers??{},Accept:"application/json","Content-Type":"application/json"},s=t?.body?JSON.stringify(t.body):void 0;return n(e,{...t,body:s,headers:r})}function i(e,t={}){let r={...t.headers,"GitHub-Is-React":"true"};return n(e,{...t,headers:r})}function o(e,t){let r={...t?.headers??{},"GitHub-Is-React":"true"};return s(e,{...t,headers:r})}r.d(t,{DI:()=>n,QJ:()=>i,Sr:()=>o,lS:()=>s})}}]);
//# sourceMappingURL=ui_packages_relay-environment_relay-environment_ts-6e1d2d4063f0.js.map