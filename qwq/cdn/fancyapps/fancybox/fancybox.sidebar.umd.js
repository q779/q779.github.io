/*! License details at fancyapps.com/license */
(function(e,t){typeof exports==`object`&&typeof module<`u`?t(exports):typeof define==`function`&&define.amd?define([`exports`],t):(e=typeof globalThis<`u`?globalThis:e||self,t(e.window=e.window||{}))})(this,function(e){Object.defineProperty(e,Symbol.toStringTag,{value:`Module`});let t=e=>typeof e==`object`&&!!e&&e.constructor===Object&&Object.prototype.toString.call(e)===`[object Object]`,n=e=>typeof e==`string`,r={defaultCaption:`<em>{{NO_CAPTION}}</em>`,mainTpl:`<dialog class="fancybox__dialog">
    <div class="fancybox__container" tabindex="0" aria-label="{{MODAL}}">
      <div class="fancybox__backdrop"></div>
      <div class="fancybox__carousel">
        <div class="fancybox__grid">
          <div class="fancybox__column with-viewport">
            <div class="fancybox__viewport"></div>
          </div>
          <div class="fancybox__column with-sidebar">
            <div class="fancybox__sidebar"></div>
          </div>
        </div>
      </div>
    </div>
  </dialog>`,showOnStart:!0};e.Sidebar=()=>{let e,i=!1;function a(){let n=e?.getOptions().Sidebar;return t(n)?{...r,...n}:r}function o(t){i&&e?.getContainer()?.classList.toggle(`has-sidebar`,t)}function s(){(e?.getCarousel()?.getPlugins().Toolbar)?.add(`sidebar`,{tpl:`<button class="f-button" title="{{TOGGLE_SIDEBAR}}"><svg><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></button>`,click:()=>o()})}function c(){let t=e?.getOptions();if(!e||!t||t.Sidebar===!1)return;i=!0;let r=a();t.mainTpl=r.mainTpl,t.Carousel=t.Carousel||{},t.Carousel.formatCaption=(t,i)=>{let a=i.caption||``;if(!a){let t=e?.getOptions().triggerEl?.dataset.fancybox;if(t){let e=document.querySelector(`[data-fancybox-caption="${t}"]`);e&&(a=e.innerHTML)}}if(!a){let t=r.defaultCaption;a=typeof t==`function`?e?t(e):``:t}return a&&n(a)&&e&&(a=e.localize(a)),a},t.Carousel.captionEl=()=>e?.getContainer()?.querySelector(`.fancybox__sidebar`)||null;let o=t.Carousel.Thumbs;o!==!1&&(o||={},o.parentEl=e=>e.getViewport()?.parentElement||null,t.Carousel.Thumbs=o)}function l(){o(a().showOnStart)}return{init:function(t){e=t,e.on(`Carousel.initPlugins`,s),e.on(`initSlides`,c),e.on(`initLayout`,l)},destroy:function(){i=!1,e?.off(`Carousel.initPlugins`,s),e?.off(`initSlides`,c),e?.off(`initLayout`,l)},isEnabled:function(){return i},toggle:o}}});