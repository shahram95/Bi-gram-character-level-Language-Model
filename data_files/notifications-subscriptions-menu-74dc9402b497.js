"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["notifications-subscriptions-menu"],{21605:(e,t,a)=>{a.d(t,{y:()=>r});var n=a(74848),s=a(96540),o=a(31481);function r({children:e,appName:t,category:a,metadata:r}){let i=(0,s.useMemo)(()=>({appName:t,category:a,metadata:r}),[t,a,r]);return(0,n.jsx)(o.I.Provider,{value:i,children:e})}try{r.displayName||(r.displayName="AnalyticsProvider")}catch{}},31481:(e,t,a)=>{a.d(t,{I:()=>n});let n=(0,a(96540).createContext)(null)},67726:(e,t,a)=>{a.d(t,{l:()=>n});let n=()=>void 0},84923:(e,t,a)=>{let n;var s,o,r=a(72245),i=a(74848),l=a(96540),c=a(89323),d=a(26886),u=a(38621),h=a(28784);let p=(n="/notifications/subscribe",async e=>{try{let t=await (0,h.DI)(n,{method:"POST",body:e});if(t.ok)return t;return Error("Failed to update")}catch(e){return e}});var m=a(16823),b=a(52464);!function(e){e.NONE="none",e.WATCHING="watching",e.IGNORING="ignoring",e.CUSTOM="custom"}(s||(s={}));let f={none:"Participating and @mentions",watching:"All Activity",ignoring:"Ignore",custom:"Custom"},g={...f,none:"Participating"},y={none:"Watch",watching:"Unwatch",ignoring:"Stop ignoring",custom:"Unwatch"},x=[{name:f.none,description:"Only receive notifications from this repository when participating or @mentioned.",subscriptionType:"none"},{name:f.watching,description:"Notified of all notifications on this repository.",subscriptionType:"watching"},{name:f.ignoring,description:"Never be notified.",subscriptionType:"ignoring"},{name:f.custom,description:"Select events you want to be notified of in addition to participating and @mentions.",trailingIcon:(0,l.createElement)(u.ArrowRightIcon),subscriptionType:"custom"}],C=e=>e in y?y[e]:"",v=(e,t)=>{let a=C(e),n=g[e];return"ignoring"===e?`${a} in ${t}`:`${a}: ${n} in ${t}`};function w(e){return(0,i.jsx)(m.l,{selectionVariant:"single",children:x.map((t,a)=>(0,i.jsxs)(l.Fragment,{children:[(0,i.jsxs)(m.l.Item,{selected:t.subscriptionType===e.selected,onSelect:()=>e.onSelect(t.subscriptionType),children:[(0,i.jsx)(b.A,{sx:{fontWeight:"bold"},children:t.name}),(0,i.jsx)(m.l.Description,{variant:"block",children:t.description}),t.trailingIcon?(0,i.jsx)(m.l.TrailingVisual,{children:t.trailingIcon}):null]}),a!==x.length-1?(0,i.jsx)(m.l.Divider,{}):""]},a))})}try{w.displayName||(w.displayName="SubscriptionList")}catch{}var S=a(82560),j=a(38501),N=a(67269),A=a(55847),T=a(94977),k=a(38553);let I={footerContainer:"FooterActions-module__footerContainer--Z9ixI",buttonsContainer:"FooterActions-module__buttonsContainer--lkkwg"};function L(e){let[t,a]=(0,l.useState)(!1),n=(0,l.useCallback)(()=>(e.nextFocusRef?.current?.focus(),!0),[e.nextFocusRef]),s=(0,l.useCallback)(()=>{a(!0)},[]),o=(0,l.useCallback)(()=>{e.onApply(),setTimeout(()=>{e?.checkStatus&&e.checkStatus(s)},600)},[e,s]);return(0,i.jsxs)("div",{className:I.footerContainer,children:[e.showError?(0,i.jsx)(b.A,{sx:{py:3,pl:3,color:"var(--fgColor-muted, var(--color-fg-muted))"},children:"Error. Please try again."}):null,(0,i.jsxs)("div",{className:I.buttonsContainer,style:e.overrideButtonStyles??{padding:"var(--base-size-16)"},children:[!e.showError&&t?(0,i.jsx)(k.A,{size:"small",sx:{mr:2}}):null,(0,i.jsx)(A.Q,{size:"small",onClick:()=>e.onCancel(),onBlur:t=>{e.disabled&&n(t)},children:"Cancel"}),(0,i.jsx)(A.Q,{disabled:e.disabled,variant:"primary",size:"small",onClick:()=>o(),onBlur:n,sx:{ml:2},children:"Apply"})]})]})}try{L.displayName||(L.displayName="FooterActions")}catch{}function _(e){let[t,a]=(0,l.useState)(!1),[n,s]=(0,l.useState)(""),o=e.items.filter(e=>e?.text?.toLowerCase().startsWith(n.toLowerCase())),r=(0,l.useCallback)(()=>{e.applyLabels(),a(!1)},[e]),c=(0,l.useCallback)(()=>{e.resetLabels(),a(!1)},[e]),d=l.memo(R);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(N.X,{title:"Select labels",renderAnchor:t=>0===e.items.length?(0,i.jsx)(T.A,{text:"Add labels to this repository to filter on them.",direction:"s",children:(0,i.jsx)(d,{anchorProps:t,itemsLength:e.items.length,labelsText:e.labelsText})}):(0,i.jsx)(d,{anchorProps:t,itemsLength:e.items.length,labelsText:e.labelsText}),placeholderText:"Filter labels",open:t,onOpenChange:a,items:o,selected:e.selectedLabels,onSelectedChange:e.onChangeLabels,onFilterChange:s,showItemDividers:!0,overlayProps:{width:"small",height:"medium",maxHeight:"medium"},footer:(0,i.jsx)("div",{style:{width:"100%"},children:(0,i.jsx)(L,{onCancel:c,onApply:r,overrideButtonStyles:{padding:"var(--base-size-8)"}})})})})}let R=({anchorProps:e,itemsLength:t,labelsText:a})=>(0,i.jsx)(A.Q,{leadingVisual:u.TagIcon,trailingAction:u.TriangleDownIcon,...e,"aria-label":"Filter labels","aria-describedby":"select-labels","aria-haspopup":"dialog",size:"small",disabled:0===t,children:0===t?"No labels available":(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:"color-fg-muted",children:"Labels: "}),(0,i.jsx)("span",{id:"select-labels",children:a})]})});try{_.displayName||(_.displayName="FilterLabels")}catch{}try{(o=ButtonFilter).displayName||(o.displayName="ButtonFilter")}catch{}let E=e=>{let t=$(e,2);if(e.length>=2){if(2===e.length)return O(e);let a=$(e,3);if(a.length>30)return`${t.slice(0,30)}... +${e.length-2} more`;{let t=e.length>3?` +${e.length-3} more`:"";return`${a}${t}`}}if(1!==e.length)return"All";{let t=e[0]?.text||"";return t.length>30?`${t.slice(0,30)}...`:t}},O=e=>{let t=e[0]?.text||"",a=$(e,2);return a.length>30?t.length>25?`${t.slice(0,25)}... +1 more`:`${a.slice(0,30)}...`:a},$=(e,t)=>e.slice(0,t).map(e=>e.text).join(", "),P=e=>{switch(e){case"PullRequest":return"Pull requests";case"SecurityAlert":return"Security alerts";default:return`${e}s`}},F={filterContainer:"ThreadList-module__filterContainer--eNebD",threadContent:"ThreadList-module__threadContent--Ry8II",threadRow:"ThreadList-module__threadRow--lx6FW"};function M(e){let[t,a]=(0,l.useState)(e.appliedThreads),[n,s]=(0,l.useState)(e.appliedLabels),[o,r]=(0,l.useState)(e.appliedLabels),[c,d]=(0,l.useState)(()=>E(e.appliedLabels));(0,l.useEffect)(()=>{e.appliedLabels.length>0&&!t.includes("Issue")&&a([...t,"Issue"])},[]);let u=(0,l.useCallback)(e=>{t&&t.includes(e)?a(t.filter(t=>t!==e)):a([...t,e])},[t]),h=(0,l.useCallback)(()=>{e.applyThreads(t)},[e,t]),p=(0,l.useCallback)(e=>{r(e),d(E(e))},[]),m=(0,l.useCallback)(()=>{s(o)},[o]),f=(0,l.useCallback)(()=>{r(n),d(E(n))},[n]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:F.threadContent,children:e.subscribableThreadTypes.map((a,n)=>(0,i.jsxs)("div",{className:F.threadRow,style:n===e.subscribableThreadTypes.length-1?{}:{borderBottom:"1px solid var(--borderColor-default, var(--color-border-default))"},children:[(0,i.jsxs)(S.A,{children:[(0,i.jsx)(j.A,{checked:t.includes(a.name),onChange:()=>u(a.name)}),(0,i.jsx)(S.A.Label,{children:P(a.name)})]}),a.enabled?null:(0,i.jsxs)(b.A,{as:"p",sx:{fontSize:"12px",m:0,color:"var(--fgColor-muted)",ml:"var(--base-size-24)"},children:[P(a.name)," are not enabled for this repository"]}),(0,i.jsx)("div",{"aria-live":"polite",children:"Issue"===a.name&&e.showLabelSubscriptions&&t.includes("Issue")?(0,i.jsx)("div",{className:F.filterContainer,children:(0,i.jsx)(_,{filterAction:h,items:e.repoLabels,labelsText:c,onChangeLabels:p,selectedLabels:o,applyLabels:m,resetLabels:f})}):null})]},n))}),(0,i.jsx)(L,{onCancel:e.cancelMenuCallback,onApply:()=>e.saveThreads(t,o),showError:e.showError,disabled:0===t.length||e.isSavingThreads})]})}try{M.displayName||(M.displayName="ThreadList")}catch{}let D={watchCounter:"NotificationsSubscriptionsMenu-module__watchCounter--nAbhU",watchButton:"NotificationsSubscriptionsMenu-module__watchButton--ifxlS"};function W({repositoryId:e,repositoryName:t,watchersCount:a,subscriptionType:n,subscribableThreadTypes:o,repositoryLabels:r,showLabelSubscriptions:h}){let m=(0,l.useMemo)(()=>r.map(e=>({id:e.id,text:e.name,selected:e.subscribed})),[r]),b=m.filter(e=>e.selected),f=(0,l.useMemo)(()=>o.map(e=>e.subscribed||"Issue"===e.name&&h&&b.length>0?e.name:null).filter(e=>null!==e),[o,h,b]),[g,y]=(0,l.useState)(!1),[x,S]=(0,l.useState)(!1),[j,N]=(0,l.useState)(f.length>0?s.CUSTOM:n),[A,T]=(0,l.useState)(j),[k,I]=(0,l.useState)(f),[L,_]=(0,l.useState)(b),[R,E]=(0,l.useState)(!1),O=(0,l.useRef)(null),$=(0,l.useCallback)(()=>{S(!1),N(A)},[A]),P=(0,l.useCallback)(async(t,a)=>{E(!0),I(t),_(a),T(s.CUSTOM);let n=new FormData;n.set("do","custom"),n.set("repository_id",e),t.map(e=>{n.append("thread_types[]",e)}),a.map(e=>{e.id&&n.append("labels[]",e.id.toString())}),(await p(n)).ok?(S(!1),E(!1)):y(!0)},[e]),F=(0,l.useCallback)(async t=>{let a=new FormData;t===s.IGNORING?a.set("do","ignore"):t===s.WATCHING?a.set("do","subscribed"):(t===s.NONE||t===s.CUSTOM&&0===k.length)&&a.set("do","included"),a.append("thread_types[]",""),a.set("repository_id",e),await p(a)},[e,k]),W=(0,l.useCallback)(e=>{e===s.CUSTOM?(S(!0),N(s.CUSTOM)):(N(e),T(e),F(e),I([]))},[N]),B=(0,l.useCallback)(e=>{I(e)},[I]),q=(0,l.useMemo)(()=>v(j,t),[j,t]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"d-md-none",children:(0,i.jsxs)(c.W,{children:[(0,i.jsx)(c.W.Button,{"data-testid":"notifications-subscriptions-menu-button-desktop",leadingVisual:j===s.IGNORING?u.BellSlashIcon:u.EyeIcon,trailingAction:null,className:D.watchButton,"aria-label":q,children:(0,i.jsx)(i.Fragment,{})}),(0,i.jsx)(c.W.Overlay,{width:"medium",children:(0,i.jsx)(w,{selected:j,onSelect:W})})]})}),(0,i.jsx)("div",{className:"d-none d-md-block",children:(0,i.jsxs)(c.W,{children:[(0,i.jsxs)(c.W.Button,{"data-testid":"notifications-subscriptions-menu-button-mobile",size:"small",leadingVisual:j===s.IGNORING?u.BellSlashIcon:u.EyeIcon,sx:{'&& [data-component="leadingVisual"]':{color:"var(--fgColor-muted, var(--color-fg-muted))"}},"aria-label":q,children:[C(j),(0,i.jsx)("span",{className:`ml-2 Counter rounded-3 ${D.watchCounter}`,children:a})]}),(0,i.jsx)(c.W.Overlay,{width:"medium",children:(0,i.jsx)(w,{selected:j,onSelect:W})})]})}),(0,i.jsx)(d.A,{returnFocusRef:O,isOpen:x,onDismiss:()=>$(),"aria-labelledby":"header",children:(0,i.jsxs)("div",{"data-testid":"inner",children:[(0,i.jsxs)(d.A.Header,{id:"header",children:["Subscribe to events for ",t]}),(0,i.jsx)(M,{subscribableThreadTypes:o,showLabelSubscriptions:h,cancelMenuCallback:$,appliedThreads:k,repoLabels:m,subscribedThreads:f,applyThreads:B,appliedLabels:L,saveThreads:P,showError:g,isSavingThreads:R})]})})]})}try{W.displayName||(W.displayName="NotificationsSubscriptionsMenu")}catch{}(0,r.k)("notifications-subscriptions-menu",{Component:W})},23581:(e,t,a)=>{a.d(t,{A:()=>i});let{getItem:n,setItem:s,removeItem:o}=(0,a(74572).A)("localStorage"),r="REACT_PROFILING_ENABLED",i={enable:()=>s(r,"true"),disable:()=>o(r),isEnabled:()=>!!n(r)}},59840:(e,t,a)=>{a.d(t,{m:()=>o});var n=a(96540),s=a(97156);function o(e,t){s.KJ&&(0,n.useLayoutEffect)(e,t)}},73272:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(59840),s=a(96540);function o(){let e=(0,s.useRef)(!1),t=(0,s.useCallback)(()=>e.current,[]);return(0,n.m)(()=>(e.current=!0,()=>{e.current=!1}),[]),t}},83784:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(73272),s=a(96540);let o=function(e){let t=(0,n.A)(),[a,o]=(0,s.useState)(e);return[a,(0,s.useCallback)(e=>{t()&&o(e)},[t])]}},28784:(e,t,a)=>{function n(e,t={}){!function(e){if(new URL(e,window.location.origin).origin!==window.location.origin)throw Error("Can not make cross-origin requests from verifiedFetch")}(e);let a={...t.headers,"GitHub-Verified-Fetch":"true","X-Requested-With":"XMLHttpRequest"};return fetch(e,{...t,headers:a})}function s(e,t){let a={...t?.headers??{},Accept:"application/json","Content-Type":"application/json"},s=t?.body?JSON.stringify(t.body):void 0;return n(e,{...t,body:s,headers:a})}function o(e,t={}){let a={...t.headers,"GitHub-Is-React":"true"};return n(e,{...t,headers:a})}function r(e,t){let a={...t?.headers??{},"GitHub-Is-React":"true"};return s(e,{...t,headers:a})}a.d(t,{DI:()=>n,QJ:()=>o,Sr:()=>r,lS:()=>s})},47831:(e,t,a)=>{a.d(t,{D3:()=>c,O8:()=>n,xd:()=>l});var n,s=a(74848),o=a(96540),r=a(97156),i=a(59840);!function(e){e.ServerRender="ServerRender",e.ClientHydrate="ClientHydrate",e.ClientRender="ClientRender"}(n||(n={}));let l=(0,o.createContext)("ClientRender");function c({wasServerRendered:e,children:t}){let[a,n]=(0,o.useState)(()=>r.X3?"ServerRender":e?"ClientHydrate":"ClientRender");return(0,i.m)(()=>{"ClientRender"!==a&&n("ClientRender")},[a]),(0,s.jsx)(l.Provider,{value:a,children:t})}try{l.displayName||(l.displayName="RenderPhaseContext")}catch{}try{c.displayName||(c.displayName="RenderPhaseProvider")}catch{}},54156:(e,t,a)=>{a.d(t,{Qn:()=>l,T8:()=>d,Y6:()=>h,k6:()=>u});var n=a(74848),s=a(65556),o=a(96540),r=a(67726),i=a(83784);let l=5e3,c=(0,o.createContext)({addToast:r.l,addPersistedToast:r.l,clearPersistedToast:r.l}),d=(0,o.createContext)({toasts:[],persistedToast:null});function u({children:e}){let[t,a]=(0,i.A)([]),[r,u]=(0,o.useState)(null),{safeSetTimeout:h}=(0,s.A)(),p=(0,o.useCallback)(function(e){a([...t,e]),h(()=>a(t.slice(1)),l)},[t,h,a]),m=(0,o.useCallback)(function(e){u(e)},[u]),b=(0,o.useCallback)(function(){u(null)},[u]),f=(0,o.useMemo)(()=>({addToast:p,addPersistedToast:m,clearPersistedToast:b}),[m,p,b]),g=(0,o.useMemo)(()=>({toasts:t,persistedToast:r}),[t,r]);return(0,n.jsx)(c.Provider,{value:f,children:(0,n.jsx)(d.Provider,{value:g,children:e})})}function h(){return(0,o.useContext)(c)}try{c.displayName||(c.displayName="ToastContext")}catch{}try{d.displayName||(d.displayName="InternalToastsContext")}catch{}try{u.displayName||(u.displayName="ToastContextProvider")}catch{}},67870:(e,t,a)=>{a.d(t,{V:()=>h});var n=a(74848),s=a(96540),o=a(54156),r=a(38621),i=a(65556),l=a(16255);let c={info:"",success:"Toast--success",error:"Toast--error"},d={info:(0,n.jsx)(r.InfoIcon,{}),success:(0,n.jsx)(r.CheckIcon,{}),error:(0,n.jsx)(r.StopIcon,{})},u=({message:e,timeToLive:t,icon:a,type:o="info",role:r="log"})=>{let[u,h]=s.useState(!0),{safeSetTimeout:p}=(0,i.A)();return(0,s.useEffect)(()=>{t&&p(()=>h(!1),t-300)},[p,t]),(0,n.jsx)(l.Z,{children:(0,n.jsx)("div",{className:"p-1 position-fixed bottom-0 left-0 mb-3 ml-3",children:(0,n.jsxs)("div",{className:`Toast ${c[o]} ${u?"Toast--animateIn":"Toast--animateOut"}`,id:"ui-app-toast","data-testid":`ui-app-toast-${o}`,role:r,children:[(0,n.jsx)("span",{className:"Toast-icon",children:a||d[o]}),(0,n.jsx)("span",{className:"Toast-content",children:e})]})})})};try{u.displayName||(u.displayName="Toast")}catch{}function h(){let{toasts:e,persistedToast:t}=(0,s.useContext)(o.T8);return(0,n.jsxs)(n.Fragment,{children:[e.map((e,t)=>(0,n.jsx)(u,{message:e.message,icon:e.icon,timeToLive:o.Qn,type:e.type,role:e.role},t)),t&&(0,n.jsx)(u,{message:t.message,icon:t.icon,type:t.type,role:t.role})]})}try{h.displayName||(h.displayName="Toasts")}catch{}},39595:(e,t,a)=>{let n;a.d(t,{CF:()=>b,p_:()=>w,FB:()=>u,Se:()=>I,aC:()=>C,zV:()=>v});let s=new WeakSet,o=new WeakMap;function r(e=document){if(o.has(e))return o.get(e);let t=!1,a=new MutationObserver(e=>{for(let t of e)if("attributes"===t.type&&t.target instanceof Element)d(t.target);else if("childList"===t.type&&t.addedNodes.length)for(let e of t.addedNodes)e instanceof Element&&i(e)});a.observe(e,{childList:!0,subtree:!0,attributeFilter:["data-action"]});let n={get closed(){return t},unsubscribe(){t=!0,o.delete(e),a.disconnect()}};return o.set(e,n),n}function i(e){for(let t of e.querySelectorAll("[data-action]"))d(t);e instanceof Element&&e.hasAttribute("data-action")&&d(e)}function l(e){let t=e.currentTarget;for(let a of c(t))if(e.type===a.type){let n=t.closest(a.tag);s.has(n)&&"function"==typeof n[a.method]&&n[a.method](e);let o=t.getRootNode();if(o instanceof ShadowRoot&&s.has(o.host)&&o.host.matches(a.tag)){let t=o.host;"function"==typeof t[a.method]&&t[a.method](e)}}}function*c(e){for(let t of(e.getAttribute("data-action")||"").trim().split(/\s+/)){let e=t.lastIndexOf(":"),a=Math.max(0,t.lastIndexOf("#"))||t.length;yield{type:t.slice(0,e),tag:t.slice(e+1,a),method:t.slice(a+1)||"handleEvent"}}}function d(e){for(let t of c(e))e.addEventListener(t.type,l)}function u(e,t){let a=e.tagName.toLowerCase();if(e.shadowRoot){for(let n of e.shadowRoot.querySelectorAll(`[data-target~="${a}.${t}"]`))if(!n.closest(a))return n}for(let n of e.querySelectorAll(`[data-target~="${a}.${t}"]`))if(n.closest(a)===e)return n}let h=e=>String("symbol"==typeof e?e.description:e).replace(/([A-Z]($|[a-z]))/g,"-$1").replace(/--/g,"-").replace(/^-|-$/,"").toLowerCase(),p=(e,t="property")=>{let a=h(e);if(!a.includes("-"))throw new DOMException(`${t}: ${String(e)} is not a valid ${t} name`,"SyntaxError");return a},m="attr";function b(e,t){x(e,m).add(t)}let f=new WeakSet;function g(e,t){if(f.has(e))return;f.add(e);let a=Object.getPrototypeOf(e),n=a?.constructor?.attrPrefix??"data-";for(let s of(t||(t=x(a,m)),t)){let t=e[s],a=p(`${n}${s}`),o={configurable:!0,get(){return this.getAttribute(a)||""},set(e){this.setAttribute(a,e||"")}};"number"==typeof t?o={configurable:!0,get(){return Number(this.getAttribute(a)||0)},set(e){this.setAttribute(a,e)}}:"boolean"==typeof t&&(o={configurable:!0,get(){return this.hasAttribute(a)},set(e){this.toggleAttribute(a,e)}}),Object.defineProperty(e,s,o),s in e&&!e.hasAttribute(a)&&o.set.call(e,t)}}let y=Symbol.for("catalyst");let CatalystDelegate=class CatalystDelegate{constructor(e){let t=this,a=e.prototype.connectedCallback;e.prototype.connectedCallback=function(){t.connectedCallback(this,a)};let n=e.prototype.disconnectedCallback;e.prototype.disconnectedCallback=function(){t.disconnectedCallback(this,n)};let s=e.prototype.attributeChangedCallback;e.prototype.attributeChangedCallback=function(e,a,n){t.attributeChangedCallback(this,e,a,n,s)};let o=e.observedAttributes||[];Object.defineProperty(e,"observedAttributes",{configurable:!0,get(){return t.observedAttributes(this,o)},set(e){o=e}}),function(e){let t=e.observedAttributes||[],a=e.attrPrefix??"data-",n=e=>p(`${a}${e}`);Object.defineProperty(e,"observedAttributes",{configurable:!0,get:()=>[...x(e.prototype,m)].map(n).concat(t),set(e){t=e}})}(e),function(e){let t=h(e.name).replace(/-element$/,"");try{window.customElements.define(t,e),window[e.name]=customElements.get(t)}catch(e){if(!(e instanceof DOMException&&"NotSupportedError"===e.name))throw e}}(e)}observedAttributes(e,t){return t}connectedCallback(e,t){var a,n;e.toggleAttribute("data-catalyst",!0),customElements.upgrade(e),!function(e){for(let t of e.querySelectorAll("template[data-shadowroot]"))t.parentElement===e&&e.attachShadow({mode:"closed"===t.getAttribute("data-shadowroot")?"closed":"open"}).append(t.content.cloneNode(!0))}(e),g(e),s.add(e),e.shadowRoot&&(i(n=e.shadowRoot),r(n)),i(e),r(e.ownerDocument),t?.call(e),e.shadowRoot&&(i(a=e.shadowRoot),r(a))}disconnectedCallback(e,t){t?.call(e)}attributeChangedCallback(e,t,a,n,s){g(e),"data-catalyst"!==t&&s&&s.call(e,t,a,n)}};function x(e,t){if(!Object.prototype.hasOwnProperty.call(e,y)){let t=e[y],a=e[y]=new Map;if(t)for(let[e,n]of t)a.set(e,new Set(n))}let a=e[y];return a.has(t)||a.set(t,new Set),a.get(t)}function C(e,t){x(e,"target").add(t),Object.defineProperty(e,t,{configurable:!0,get(){return u(this,t)}})}function v(e,t){x(e,"targets").add(t),Object.defineProperty(e,t,{configurable:!0,get(){return function(e,t){let a=e.tagName.toLowerCase(),n=[];if(e.shadowRoot)for(let s of e.shadowRoot.querySelectorAll(`[data-targets~="${a}.${t}"]`))s.closest(a)||n.push(s);for(let s of e.querySelectorAll(`[data-targets~="${a}.${t}"]`))s.closest(a)===e&&n.push(s);return n}(this,t)}})}function w(e){new CatalystDelegate(e)}let S=new Map,j=new Promise(e=>{"loading"!==document.readyState?e():document.addEventListener("readystatechange",()=>e(),{once:!0})}),N=new Promise(e=>{let t=new AbortController;t.signal.addEventListener("abort",()=>e());let a={once:!0,passive:!0,signal:t.signal},n=()=>t.abort();document.addEventListener("mousedown",n,a),document.addEventListener("touchstart",n,a),document.addEventListener("keydown",n,a),document.addEventListener("pointerdown",n,a)}),A={ready:()=>j,firstInteraction:()=>N,visible:e=>new Promise(t=>{let a=new IntersectionObserver(e=>{for(let n of e)if(n.isIntersecting){t(),a.disconnect();return}},{rootMargin:"0px 0px 256px 0px",threshold:.01});for(let t of document.querySelectorAll(e))a.observe(t)})},T=new WeakMap;function k(e){cancelAnimationFrame(T.get(e)||0),T.set(e,requestAnimationFrame(()=>{for(let t of S.keys()){let a=e.matches(t)?e:e.querySelector(t);if(customElements.get(t)||a){let n=a?.getAttribute("data-load-on")||"ready",s=n in A?A[n]:A.ready;for(let e of S.get(t)||[])s(t).then(e);S.delete(t),T.delete(e)}}}))}function I(e,t){S.has(e)||S.set(e,new Set),S.get(e).add(t),k(document.body),n||(n=new MutationObserver(e=>{if(S.size)for(let t of e)for(let e of t.addedNodes)e instanceof Element&&k(e)})).observe(document,{subtree:!0,childList:!0})}}},e=>{var t=t=>e(e.s=t);e.O(0,["primer-react","react-core","react-lib","octicons-react","vendors-node_modules_primer_behaviors_dist_esm_index_mjs","vendors-node_modules_emotion_is-prop-valid_dist_emotion-is-prop-valid_esm_js-node_modules_emo-41da55","vendors-node_modules_oddbird_popover-polyfill_dist_popover-fn_js","ui_packages_failbot_failbot_ts"],()=>t(84923)),e.O()}]);
//# sourceMappingURL=notifications-subscriptions-menu-02940cc09428.js.map