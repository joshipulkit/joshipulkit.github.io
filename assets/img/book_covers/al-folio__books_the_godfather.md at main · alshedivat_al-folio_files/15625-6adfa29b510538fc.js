performance.mark("js-parse-end:15625-6adfa29b510538fc.js"),(globalThis.webpackChunk_github_ui_github_ui=globalThis.webpackChunk_github_ui_github_ui||[]).push([["15625"],{61828(e,t,r){function n(e){let t=e.closest(".js-render-needs-enrichment");t&&(t.classList.remove("render-error"),c.get(t)?.setLoading(!1))}function a(e,t){let r=e.closest(".js-render-needs-enrichment");return!!r&&(r.classList.add("render-error"),r.querySelector(".js-render-block-actions")?.remove(),c.get(r)?.setError(!0,t))}function i(e,t,r){let n=r.identifier??"",a=new URL(e,window.location.origin);for(let[e,r]of Object.entries(t))a.searchParams.append(e,`${r}`);return a.hash=n,o.qy`
    <div
      class="render-container color-bg-transparent js-render-target p-0"
      data-identity="${n}"
      data-host="${a.origin}"
      data-type="${r.type}"
    >
      <iframe
        title="File display"
        role="presentation"
        class="render-viewer"
        src="${String(a)}"
        name="${n}"
        data-content="${r.contentJson}"
        sandbox="allow-scripts allow-same-origin allow-top-navigation allow-popups"
      >
      </iframe>
    </div>
  `}r.r(t),r.d(t,{markdownEnrichmentSuccess:()=>n,showMarkdownRenderError:()=>a});var o=r(6997),d=r(21403),l=r(21744),s=r(59836);let c=new WeakMap;(0,d.lB)(".js-render-needs-enrichment",{constructor:HTMLElement,initialize:function(e){var t,r;let n,a,d={color_mode:(0,s.PT)()},l=e.getAttribute("data-type"),u=e.getAttribute("data-src"),h=e.getAttribute("data-identity"),p=e.getElementsByClassName("js-render-enrichment-target")[0],m=e.getElementsByClassName("js-render-enrichment-loader")[0],g=p.closest("details"),y=document.createElement("div");y.classList.add("js-render-enrichment-fallback"),e.appendChild(y);let f=p.firstElementChild;y.appendChild(f);let v={setLoading(e){m.hidden=!e},setError:(e,t)=>(v.setLoading(!1),!1!==e&&(f.classList.toggle("render-plaintext-hidden",!e),!!t&&((0,o.XX)([t,f],y),!0)))};c.set(e,v);let b=p.getAttribute("data-plain"),w=p.getAttribute("data-json");if(null==w||null==b)throw v.setError(!0,o.qy`<p class="flash flash-error">Unable to render rich display</p>`),Error(`Expected to see input data for type: ${l}`);let k=i(u,d,{type:l,identifier:h,contentJson:w}),L=i(u,d,{type:l,identifier:`${h}-fullscreen`,contentJson:w}),_=(t=()=>{(0,o.XX)(L,p.getElementsByClassName("Box-body")[0])},r={type:l},n=o.qy`<clipboard-copy
    aria-label="Copy ${r.type} code"
    .value=${b}
    class="btn my-2 js-clipboard-copy p-0 d-inline-flex tooltipped-no-delay"
    role="button"
    data-copy-feedback="Copied!"
    data-tooltip-direction="s"
  >
    <svg
      aria-hidden="true"
      height="16"
      viewBox="0 0 16 16"
      version="1.1"
      width="16"
      class="octicon octicon-copy js-clipboard-copy-icon m-2"
    >
      <path
        fill-rule="evenodd"
        d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"
      ></path>
      <path
        fill-rule="evenodd"
        d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"
      ></path>
    </svg>
    <svg
      aria-hidden="true"
      height="16"
      viewBox="0 0 16 16"
      version="1.1"
      width="16"
      class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none m-2"
    >
      <path
        fill-rule="evenodd"
        d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
      ></path>
    </svg>
  </clipboard-copy>`,a=o.qy`
    <details class="details-reset details-overlay details-overlay-dark" style="display: contents">
      <summary
        role="button"
        aria-label="Open dialog"
        class="btn my-2 mr-2 p-0 d-inline-flex"
        aria-haspopup="dialog"
        @click="${t}"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="octicon m-2">
          <path
            fill-rule="evenodd"
            d="M3.72 3.72a.75.75 0 011.06 1.06L2.56 7h10.88l-2.22-2.22a.75.75 0 011.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 11-1.06-1.06l2.22-2.22H2.56l2.22 2.22a.75.75 0 11-1.06 1.06l-3.5-3.5a.75.75 0 010-1.06l3.5-3.5z"
          ></path>
        </svg>
      </summary>
      <details-dialog
        class="Box Box--overlay render-full-screen d-flex flex-column anim-fade-in fast"
        aria-label="${r.type} rendered container"
      >
        <div>
          <button
            aria-label="Close dialog"
            data-close-dialog=""
            type="button"
            data-view-component="true"
            class="Link--muted btn-link position-absolute render-full-screen-close"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              style="display:inline-block;vertical-align:text-bottom"
              class="octicon octicon-x"
            >
              <path
                fill-rule="evenodd"
                d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"
              ></path>
            </svg>
          </button>
          <div class="Box-body border-0" role="presentation"></div>
        </div>
      </details-dialog>
    </details>
  `,o.qy`<div
    class="js-render-block-actions position-absolute top-0 pr-2 right-0 d-flex flex-justify-end flex-items-center"
  >
    ${a}${n}
  </div>`);g&&!g.open?g.addEventListener("toggle",()=>{g.open&&(0,o.XX)([_,k],p)},{once:!0}):(0,o.XX)([_,k],p)}}),(0,l.on)("preview:toggle:off",".js-previewable-comment-form",function(e){let t=e.currentTarget.querySelector(".js-render-needs-enrichment"),r=t?.querySelector(".js-render-enrichment-target");r&&(r.textContent="")}),(0,l.on)("preview:rendered",".js-previewable-comment-form",function(e){let t=e.currentTarget.querySelector(".js-render-needs-enrichment");t&&c.get(t)?.setLoading(!1)})},67440(e,t,r){function n(e){return!!e.querySelector('.js-render-target[data-type="ipynb"]')}function a(e){let t=y.get(e);null!=t&&(t.load=t.hello=null,t.helloTimer&&(clearTimeout(t.helloTimer),t.helloTimer=null),t.loadTimer&&(clearTimeout(t.loadTimer),t.loadTimer=null))}function i(e,t=""){var r,n;let i;e.classList.remove(...m),e.classList.add("is-render-failed");let o=function(e){let t=c.qy`<p>Unable to render rich display</p>`;if(""!==e){let r=e.split("\n");t=c.qy`<p><b>Unable to render rich display</b></p>
      <p>${r.map(e=>c.qy`${e}<br />`)}</p>`}return c.qy`<div class="flash flash-error">${t}</div>`}(t);!1===(0,u.showMarkdownRenderError)(e,o)&&(n=o,(i=(r=e).querySelector(".render-viewer-error"))&&(i.remove(),r.classList.remove("render-container"),(0,c.XX)(n,r))),a(e)}function o(e,t=!1){e&&(0,p.A)(e)&&!e.classList.contains("is-render-ready")&&!e.classList.contains("is-render-failed")&&!e.classList.contains("is-render-failed-fatally")&&(!t||y.get(e)?.hello)&&i(e)}function d(e,t,r){return!!e&&!!e.postMessage&&(e.postMessage(JSON.stringify(t),r),!0)}function l(e){return t=>{if(!t.querySelector(".js-render-target"))return;let r=t.querySelector("iframe"),n=r?.contentWindow;return n?e(n):void 0}}function s(e){let t=e.data;if(!t)return;if("string"==typeof t)try{t=JSON.parse(t)}catch{return}if("object"!=typeof t&&null!=t||"render"!==t.type||"string"!=typeof t.identity)return;let r=t.identity;if("string"!=typeof t.body)return;let n=t.body,a=function(e,t){for(let r of e.querySelectorAll(".js-render-target[data-identity][data-host]"))if(r.getAttribute("data-identity")===t)return r;return null}(document,r);if(!a||e.origin!==a.getAttribute("data-host"))return;let o=e.origin,l=null!=t.payload?t.payload:void 0,s=a.querySelector("iframe"),c=s?.contentWindow;switch(n){case"hello":if((y.get(a)||{untimed:!0}).hello=Date.now(),!c)return;d(c,{type:"render:cmd",body:{cmd:"ack",ack:!0}},o),d(c,{type:"render:cmd",body:{cmd:"branding",branding:!1}},o);break;case"error":i(a,l?.error);break;case"error:fatal":i(a,l?.error),a.classList.add("is-render-failed-fatal");break;case"error:invalid":i(a,l?.error),a.classList.add("is-render-failed-invalid");break;case"loading":a.classList.remove(...m),a.classList.add("is-render-loading");break;case"loaded":a.classList.remove(...m),a.classList.add("is-render-loaded");break;case"ready":(0,u.markdownEnrichmentSuccess)(a),a.classList.remove(...m),a.classList.add("is-render-ready"),l&&"number"==typeof l.height&&(a.style.height=`${l.height}px`,""!==location.hash&&window.dispatchEvent(new HashChangeEvent("hashchange"))),!0===l?.ack&&window.requestAnimationFrame(()=>{setTimeout(()=>{d(c,{type:"render:cmd",body:{cmd:"code_rendering_service:ready:ack","code_rendering_service:ready:ack":{}}},o)},0)});break;case"resize":l&&"number"==typeof l.height&&(a.style.height=`${l.height}px`);break;case"code_rendering_service:container:get_size":d(c,{type:"render:cmd",body:{cmd:"code_rendering_service:container:size","code_rendering_service:container:size":{width:a?.getBoundingClientRect().width}}},o);break;case"code_rendering_service:markdown:get_data":let e;if(!c)return;let t=s?.getAttribute("data-content")??"";try{e=JSON.parse(t)?.data}catch{e=null}e&&d(c,{type:"render:cmd",body:{cmd:"code_rendering_service:data:ready","code_rendering_service:data:ready":{data:e,width:a?.getBoundingClientRect().width}}},o)}}r.r(t),r.d(t,{collapseAllInContainer:()=>v,expandAllInContainer:()=>f,handleMessage:()=>s,supportsRichExpanding:()=>n});var c=r(6997),u=r(61828),h=r(21403),p=r(1433);let m=["is-render-pending","is-render-ready","is-render-loading","is-render-loaded"],g=["is-render-ready","is-render-loading","is-render-loaded","is-render-failed","is-render-failed-fatally"],y=new WeakMap;(0,h.lB)(".js-render-target",function(e){e.classList.remove(...g),e.style.height="auto",y.get(e)?.load||(a(e),y.get(e)||(y.set(e,{load:Date.now(),hello:null,helloTimer:window.setTimeout(o,1e4,e,!0),loadTimer:window.setTimeout(o,45e3,e)}),e.classList.add("is-render-automatic","is-render-requested")))}),window.addEventListener("message",s);let f=l(e=>d(e,{type:"render:cmd",body:{cmd:"code_rendering_service:behaviour:expand_all"}},origin)),v=l(e=>d(e,{type:"render:cmd",body:{cmd:"code_rendering_service:behaviour:collapse_all"}},origin))},59836(e,t,r){function n(){(0,u.TV)("preferred_color_mode",a())}function a(){return i("dark")?"dark":i("light")?"light":void 0}function i(e){return window.matchMedia&&window.matchMedia(`(prefers-color-scheme: ${e})`).matches}function o(e){let t=document.querySelector("html[data-color-mode]");t&&t.setAttribute("data-color-mode",e)}function d(e,t){let r=document.querySelector("html[data-color-mode]");r&&r.setAttribute(`data-${t}-theme`,e)}function l(e){let t=document.querySelector("html[data-color-mode]");if(t)return t.getAttribute(`data-${e}-theme`)}function s(e="light"){let t=function(){let e=document.querySelector("html[data-color-mode]");if(e)return e.getAttribute("data-color-mode")}();return("auto"===t?a():t)??e}r.d(t,{OQ:()=>a,PA:()=>o,PT:()=>s,Px:()=>d,to:()=>l});var c=r(1289),u=r(17005);(async()=>{if(await c.G,n(),window.matchMedia){let e=window.matchMedia("(prefers-color-scheme: dark)");e?.addEventListener?e.addEventListener("change",n):e.addListener(n)}})()},1433(e,t,r){function n(e){return!(e.offsetWidth<=0&&e.offsetHeight<=0)}r.d(t,{A:()=>n})}}]);