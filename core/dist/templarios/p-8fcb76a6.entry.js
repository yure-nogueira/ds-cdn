import{r as t,h as o,H as e,a}from"./p-5c36ed66.js";import{c as r}from"./p-9655f2f1.js";const p='@charset "UTF-8";.sc-tp-autocomplete-h{--tp-input-element-height:42px;--tp-dropdown-max-height:164px}.sc-tp-autocomplete-h{display:block;position:relative}.sc-tp-autocomplete-h.sc-tp-autocomplete-s>tp-dropdown{--tp-top:var(--tp-input-element-height);max-height:var(--tp-dropdown-max-height);background:var(--tp-color-neutral-2);cursor:pointer;overflow:auto;border:1px solid transparent}.tp-autocomplete.tp-autocomplete--dropdown-hide.sc-tp-autocomplete-h{opacity:1;animation-duration:300ms;animation-timing-function:ease-in-out;animation-fill-mode:forwards}.sc-tp-autocomplete-h.tp-autocomplete.tp-autocomplete--dropdown-hide.sc-tp-autocomplete-s>tp-dropdown{opacity:0;pointer-events:none;animation-name:fadeOut;animation-duration:300ms;animation-timing-function:ease-in-out}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.tp-autocomplete.tp-autocomplete--dropdown-show.sc-tp-autocomplete-h{opacity:1;animation-duration:300ms;animation-timing-function:ease-in-out;animation-fill-mode:forwards}.sc-tp-autocomplete-h.tp-autocomplete.tp-autocomplete--dropdown-show.sc-tp-autocomplete-s>tp-input-container{--tp-border-radius:8px 8px 0 0}.sc-tp-autocomplete-h.tp-autocomplete.tp-autocomplete--dropdown-show.sc-tp-autocomplete-s>tp-dropdown{opacity:1;animation-name:showUp;animation-duration:300ms;animation-timing-function:ease-in-out}@keyframes showUp{0%{opacity:0}100%{opacity:1}}.sc-tp-autocomplete-h.tp-color.sc-tp-autocomplete-s>tp-dropdown,.sc-tp-autocomplete-h.tp-color .sc-tp-autocomplete-s>tp-dropdown{--tp-scroll-color-content:var(--tp-color-contrast);--tp-scroll-color-track:var(--tp-color-base);background-color:var(--tp-color-base);border:1px solid var(--tp-color-base);border-top:initial}';const c=p;const s=class{constructor(o){t(this,o);this.color=undefined;this.locked=false;this.openOnFocus=false;this.open=false;this.inputValue=undefined}closeOnOutsideClick(t){const o=t.target;if(!this.host.contains(o)){this.open=false}}handleInput(t){this.inputValue=`${t.target.value}`;this.open=Boolean(this.inputValue)}handleFocus(){this.open=this.openOnFocus||Boolean(this.inputValue)}render(){const{color:t,open:a,locked:p}=this;return o(e,{key:"84c302e586d51f2f2892ec1838da781bea54c7c4",class:r(t,{"tp-autocomplete":true,"tp-autocomplete--dropdown-hide":p||!a,"tp-autocomplete--dropdown-show":!p&&a})},o("slot",{key:"a8351e10484e34bf3f36a73235a26b015922a397"}))}get host(){return a(this)}};s.style=c;const n=":host{--tp-background:var(--tp-color-neutral-3);--tp-z-index:1;--tp-left:0;--tp-top:0}:host{display:block;background-color:var(--tp-background);position:absolute;z-index:var(--tp-z-index);left:var(--tp-left);top:var(--tp-top);border-radius:0 0 8px 8px;width:100%;--tp-scroll-color-content:var(--tp-color-neutral-3);--tp-scroll-color-track:var(--tp-color-neutral-1);--tp-scroll-width:8px;scroll-snap-type:both mandatory;scroll-padding-top:30px;scroll-behavior:smooth}:host::-webkit-scrollbar{width:var(--tp-scroll-width);height:8px}@media (max-width: 576px){:host::-webkit-scrollbar{width:0}}:host::-webkit-scrollbar-track{background:var(--tp-scroll-color-track)}:host::-webkit-scrollbar-thumb{color:transparent;background:var(--tp-scroll-color-content)}:host::-webkit-scrollbar-thumb:hover{background:var(--tp-scroll-color-content)}:host::-webkit-scrollbar-thumb{background-clip:content-box;border:2px solid transparent;border-radius:16px;box-shadow:inset 0 0 0 10px}:host::-webkit-scrollbar-button{display:none;width:0;height:0}::slotted(ion-item){--background:transparent}::slotted(ion-item.item-lines-full){--border-color:var(--tp-color-neutral-4) !important}::slotted(ion-item.item-lines-full:last-child){--border-width:0}";const i=n;const l=class{constructor(o){t(this,o)}render(){return o(e,{key:"9f5e44227cd284a94d9dc3c2f5eed139cf9192c7",class:"tp-dropdown"},o("slot",{key:"c9eeedd9ab3f23ba40e69a9c5de52937dbd12841"}))}};l.style=i;export{s as tp_autocomplete,l as tp_dropdown};
//# sourceMappingURL=p-8fcb76a6.entry.js.map