import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as createColorClasses } from './color.function.js';

const autocompleteCss = "@charset \"UTF-8\";.sc-tp-autocomplete-h{--tp-input-element-height:42px;--tp-dropdown-max-height:164px}.sc-tp-autocomplete-h{display:block;position:relative}.sc-tp-autocomplete-h.sc-tp-autocomplete-s>tp-dropdown{--tp-top:var(--tp-input-element-height);max-height:var(--tp-dropdown-max-height);background:var(--tp-color-neutral-2);cursor:pointer;overflow:auto;border:1px solid transparent}.tp-autocomplete.tp-autocomplete--dropdown-hide.sc-tp-autocomplete-h{opacity:1;animation-duration:300ms;animation-timing-function:ease-in-out;animation-fill-mode:forwards}.sc-tp-autocomplete-h.tp-autocomplete.tp-autocomplete--dropdown-hide.sc-tp-autocomplete-s>tp-dropdown{opacity:0;pointer-events:none;animation-name:fadeOut;animation-duration:300ms;animation-timing-function:ease-in-out}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}.tp-autocomplete.tp-autocomplete--dropdown-show.sc-tp-autocomplete-h{opacity:1;animation-duration:300ms;animation-timing-function:ease-in-out;animation-fill-mode:forwards}.sc-tp-autocomplete-h.tp-autocomplete.tp-autocomplete--dropdown-show.sc-tp-autocomplete-s>tp-input-container{--tp-border-radius:8px 8px 0 0}.sc-tp-autocomplete-h.tp-autocomplete.tp-autocomplete--dropdown-show.sc-tp-autocomplete-s>tp-dropdown{opacity:1;animation-name:showUp;animation-duration:300ms;animation-timing-function:ease-in-out}@keyframes showUp{0%{opacity:0}100%{opacity:1}}.sc-tp-autocomplete-h.tp-color.sc-tp-autocomplete-s>tp-dropdown,.sc-tp-autocomplete-h.tp-color .sc-tp-autocomplete-s>tp-dropdown{--tp-scroll-color-content:var(--tp-color-contrast);--tp-scroll-color-track:var(--tp-color-base);background-color:var(--tp-color-base);border:1px solid var(--tp-color-base);border-top:initial}";
const TpAutocompleteStyle0 = autocompleteCss;

const TpAutocomplete = /*@__PURE__*/ proxyCustomElement(class TpAutocomplete extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.color = undefined;
        this.locked = false;
        this.openOnFocus = false;
        this.open = false;
        this.inputValue = undefined;
    }
    /**
     * Event listeners.
     */
    closeOnOutsideClick(event) {
        const target = event.target;
        if (!this.host.contains(target)) {
            this.open = false;
        }
    }
    handleInput(event) {
        this.inputValue = `${event.target.value}`;
        this.open = Boolean(this.inputValue);
    }
    handleFocus() {
        this.open = this.openOnFocus || Boolean(this.inputValue);
    }
    render() {
        const { color, open, locked } = this;
        return (h(Host, { key: '84c302e586d51f2f2892ec1838da781bea54c7c4', class: createColorClasses(color, {
                'tp-autocomplete': true,
                'tp-autocomplete--dropdown-hide': locked || !open,
                'tp-autocomplete--dropdown-show': !locked && open,
            }) }, h("slot", { key: 'a8351e10484e34bf3f36a73235a26b015922a397' })));
    }
    get host() { return this; }
    static get style() { return TpAutocompleteStyle0; }
}, [6, "tp-autocomplete", {
        "color": [513],
        "locked": [516],
        "openOnFocus": [516, "open-on-focus"],
        "open": [32],
        "inputValue": [32]
    }, [[16, "click", "closeOnOutsideClick"], [0, "ionInput", "handleInput"], [0, "ionFocus", "handleFocus"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-autocomplete"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-autocomplete":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpAutocomplete);
            }
            break;
    } });
}

export { TpAutocomplete as T, defineCustomElement as d };

//# sourceMappingURL=autocomplete.js.map