import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as createColorClasses } from './color.function.js';

const DEVELOPMENT_CONFIG = {
    ASSETS_BASE_PATH: './assets',
};

const PRODUCTION_ELEMENTOR_CONFIG = {
    ASSETS_BASE_PATH: '/wp-content/plugins/templarios-institucional/web-components/assets',
};

const PRODUCTION_CONFIG = {
    ASSETS_BASE_PATH: './assets',
};

const CONFIG = getEnvironmentConfig();
function getEnvironmentConfig() {
    switch ("production") {
        case 'development':
            return DEVELOPMENT_CONFIG;
        case 'production':
            return PRODUCTION_CONFIG;
        case 'production:elementor':
            return PRODUCTION_ELEMENTOR_CONFIG;
        default:
            return DEVELOPMENT_CONFIG;
    }
}

var TpInputContainerState;
(function (TpInputContainerState) {
    TpInputContainerState["Error"] = "error";
    TpInputContainerState["Success"] = "success";
})(TpInputContainerState || (TpInputContainerState = {}));

const TP_INPUT_CONTAINER = {
    state: Object.values(TpInputContainerState),
    icons: {
        alertTriangle: `${CONFIG.ASSETS_BASE_PATH}/tp-alert-triangle.svg`,
        check: `${CONFIG.ASSETS_BASE_PATH}/tp-check.svg`,
        chevronDown: `${CONFIG.ASSETS_BASE_PATH}/tp-chevron-down.svg`,
    },
};

const inputContainerCss = ":host{--tp-border-radius:8px;--tp-background:var(--tp-color-neutral-2)}:host{position:relative;display:block;color:var(--tp-color-neutral-6)}:host ::slotted(ion-icon){color:var(--tp-color-neutral-6) !important}.tp-input-container__wrapper{display:flex;align-items:center;margin:8px 0;background:var(--tp-background);border:1px solid var(--tp-color-neutral-2);border-radius:var(--tp-border-radius)}.tp-input-container__wrapper:hover{--tp-background:var(--tp-color-neutral-3);border-color:var(--tp-color-neutral-3)}.tp-input-container__wrapper:focus-within{border-color:var(--tp-color-neutral-3)}.tp-input-container__icon-container{display:flex}.tp-input-container__state-container{height:24px;margin-right:16px}.tp-input-container__select-container{display:flex}.tp-input-container__select-icon{margin-right:8px;color:var(--tp-color-neutral-10);transition:transform ease-in-out 300ms}.tp-input-container__select-icon--open{transform:rotate(-180deg)}.tp-input-container__skeleton{--background-rgb:var(--tp-color-neutral-10-rgb);--border-radius:8px;width:100%;height:42px;margin:0}::slotted(*[slot=feedback-error]){display:none;color:var(--tp-color-warning) !important}::slotted(*[slot=feedback-success]){display:none;color:var(--tp-color-success) !important}::slotted(ion-icon){min-width:24px !important}::slotted(ion-icon[slot=start]){margin-left:16px}::slotted(ion-icon[slot=end]){margin-right:16px}:host(.tp-input-container--error) .tp-input-container__wrapper{border-color:var(--tp-color-warning)}:host(.tp-input-container--error) ion-select{max-width:calc(100% - 80px)}:host(.tp-input-container--error) ::slotted(*[slot=feedback-error]){display:block}:host(.tp-input-container--error) .tp-input-container__icon{color:var(--tp-color-warning)}:host(.tp-input-container--success) .tp-input-container__wrapper{border-color:var(--tp-color-success)}:host(.tp-input-container--success) ::slotted(*[slot=feedback-success]){display:block}:host(.tp-input-container--success) .tp-input-container__icon{color:var(--tp-color-success)}:host(.tp-input-container--disabled) .tp-input-container__wrapper{opacity:0.5;pointer-events:none}:host(.tp-input-container--disabled) .tp-input-container__wrapper:hover{--tp-background:var(--tp-color-neutral-2);border:1px solid var(--tp-color-neutral-2)}:host(.tp-input-container.tp-input-container--select-open) .tp-input-container__wrapper{border-radius:8px 8px 0 0 !important;transition:border-radius 400ms ease-in-out;pointer-events:none}:host(.tp-input-container.tp-input-container--inverted)::slotted(ion-icon){transform:rotate(-180deg)}:host(.tp-input-container.tp-input-container--inverted.tp-input-container--select-open):not(.tp-input-container--disabled){border-radius:0 0 8px 8px !important}:host(.tp-input-container.tp-input-container--with-select):not(.tp-input-container--disabled){cursor:pointer}:host(.tp-input-container.tp-input-container--with-select):not(.tp-input-container--disabled)::slotted(ion-icon){transition:transform 400ms linear}:host(.tp-input-container.tp-input-container--with-select.tp-input-container--select-open):not(.tp-input-container--disabled)::slotted(ion-icon){transform:rotate(-180deg)}:host(.tp-input-container.tp-input-container--with-select.tp-input-container--select-open.tp-input-container--inverted):not(.tp-input-container--disabled)::slotted(ion-icon){transform:rotate(0deg)}:host(.tp-color) .tp-input-container__wrapper{--tp-background:var(--tp-color-base);border-color:var(--tp-color-base)}:host(.tp-color) .tp-input-container__wrapper:hover{--tp-background:var(--tp-color-shade);border-color:var(--tp-color-shade)}:host(.tp-color) .tp-input-container__wrapper:focus-within{border-color:var(--tp-color-tint)}:host(.tp-color) ::slotted(ion-input.sc-ion-input-md-h){--color:var(--tp-color-contrast) !important;--placeholder-color:var(--tp-color-contrast) !important}:host(.tp-color) ::slotted(ion-input[clear-input]){--tp-fill-clear-icon:var(--tp-color-contrast) !important}:host(.tp-color) ::slotted(ion-searchbar.sc-ion-searchbar-md-h){--color:var(--tp-color-contrast) !important;--placeholder-color:var(--tp-color-contrast) !important;--tp-stroke-icon:var(--tp-color-contrast) !important;--icon-color:var(--tp-color-contrast) !important}:host(.tp-color) ::slotted(ion-textarea.sc-ion-textarea-md-h){--color:var(--tp-color-contrast) !important;--placeholder-color:var(--tp-color-contrast) !important}:host(.tp-color) ::slotted(ion-datetime-button){--tp-color:var(--tp-color-contrast) !important}:host(.tp-color) ::slotted(ion-icon){--ion-color-base:var(--tp-color-contrast) !important;--stroke:var(--ion-color-base) !important;color:var(--tp-color-contrast) !important}:host(.tp-color.tp-input-container--success) .tp-input-container__wrapper{border-color:var(--tp-color-success)}:host(.tp-color.tp-input-container--error) .tp-input-container__wrapper{border-color:var(--tp-color-warning)}";
const TpInputContainerStyle0 = inputContainerCss;

const TpInputContainer = /*@__PURE__*/ proxyCustomElement(class TpInputContainer extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.clickTarget = undefined;
        this.selectOpen = false;
        this.hasSelect = false;
        this.color = undefined;
        this.state = undefined;
        this.disabled = false;
        this.inverted = false;
        this.loading = undefined;
    }
    setClickTarget(e) {
        if (this.disabled)
            return;
        this.clickTarget = e.target;
    }
    catchSelectIconClick(e) {
        const target = e.target;
        const ionSelect = this.host.querySelector('ion-select');
        if (!ionSelect)
            return;
        const shouldOpenOverlay = this.host.contains(target) &&
            ionSelect.hasAttribute('interface') &&
            (target.nodeName === 'ION-ICON' ||
                target.nodeName === 'TP-INPUT-CONTAINER');
        if (shouldOpenOverlay) {
            ionSelect.open(e);
        }
    }
    setPopoverWidthOnResize() {
        if (!this.selectOpen)
            return;
        const popoverElement = document.querySelector('.select-popover');
        popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty('--width', `${this.host.clientWidth}px`);
        this.setPopoverPosition();
    }
    setPopoverCharacteristics() {
        if (!this.host.contains(this.clickTarget))
            return;
        this.selectOpen = true;
        this.hostWidth = this.host.clientWidth;
        const popoverElement = document.querySelector('.select-popover');
        popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty('--width', `${this.hostWidth}px`);
        if (popoverElement.classList.contains('popover-bottom')) {
            this.inverted = true;
        }
        this.setPopoverPosition();
    }
    unsetClikedState() {
        this.selectOpen = false;
    }
    componentDidLoad() {
        const ionSelect = this.host.querySelector('ION-SELECT');
        if (ionSelect)
            this.hasSelect = true;
    }
    setPopoverPosition() {
        const popoverElement = document.querySelector('.select-popover');
        const selectElement = this.host.querySelector('ion-select');
        const { top, bottom, left } = selectElement.getBoundingClientRect();
        const fixPositionX = 1;
        if (this.inverted) {
            popoverElement.classList.add('tp-popover--inverted');
            popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty('--offset-x', `${Math.round(left) - fixPositionX}px`);
            popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty('--offset-y', `${Math.round(window.innerHeight - top)}px`);
        }
        else {
            popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty('--offset-x', `${Math.round(left) - fixPositionX}px`);
            popoverElement === null || popoverElement === void 0 ? void 0 : popoverElement.style.setProperty('--offset-y', `${Math.round(bottom)}px`);
        }
    }
    render() {
        const { color, state, disabled, hasSelect, selectOpen, loading } = this;
        let content;
        let stateContent;
        let selectIconContainer;
        const icon = state === 'error'
            ? TP_INPUT_CONTAINER.icons.alertTriangle
            : TP_INPUT_CONTAINER.icons.check;
        if (loading) {
            content = (h("ion-skeleton-text", { key: 'f8b5b25501b7e551ebce2283922544cc663d517c', class: "tp-input-container__skeleton", animated: true }));
        }
        else {
            if (this.hasSelect) {
                selectIconContainer = (h("div", { key: '7a2caf004650013251f3814693280e6ec9a4e13b', class: "tp-input-container__select-container" }, h("ion-icon", { key: '8d68d545f089cb6dcdd9a3cf6075b83294a67bc0', class: {
                        'tp-input-container__select-icon': true,
                        'tp-input-container__select-icon--open': selectOpen,
                    }, src: TP_INPUT_CONTAINER.icons.chevronDown, "aria-hidden": "true" })));
            }
            if (state) {
                stateContent = (h("div", { key: '3ab0e41b2a4fe545dd86d346d7730128a8632204', class: "tp-input-container__state-container" }, h("ion-icon", { key: 'b09ad7f75a3aa8486f4f32ce3994e413ecd2a0cc', class: "tp-input-container__icon", src: icon, "aria-hidden": "true" })));
            }
            content = (h("div", { key: 'a91a98f750704a1f6e3943e01ec944da71a24a64' }, h("slot", { key: '6786daad3bee9968a4a7d441aad00bc55706cc8f', name: "label" }), h("div", { key: 'cda0813956a46d6bdd164e266b13a148c00cbd6c', class: "tp-input-container__wrapper" }, h("slot", { key: 'a5949eaf132bc0c743baaf71c6a15ce999b43d8f', name: "start" }), h("slot", { key: '21d3f3a6170fc22a5e393f5f3f0ead65a8f61cd0' }), h("slot", { key: '094e290d01b094b8d57069a4c13a91941d0d55b6', name: "end" }), selectIconContainer, stateContent), h("slot", { key: '425cfe564bdd4aa7f1fcffd59fbffdebe0cedfb7', name: "feedback-success" }), h("slot", { key: 'a02480de419a7df35c40109b1567d12b1fb507db', name: "feedback-error" })));
        }
        return (h(Host, { key: '166e06eb6261625231cc407c15b2a8a6abe77d1d', class: createColorClasses(color, {
                'tp-input-container': true,
                'tp-input-container--error': state === 'error',
                'tp-input-container--success': state === 'success',
                'tp-input-container--disabled': disabled,
                'tp-input-container--with-select': hasSelect,
                'tp-input-container--select-open': selectOpen,
            }) }, content));
    }
    static get assetsDirs() { return ["assets"]; }
    get host() { return this; }
    static get style() { return TpInputContainerStyle0; }
}, [1, "tp-input-container", {
        "color": [513],
        "state": [513],
        "disabled": [516],
        "inverted": [516],
        "loading": [1540],
        "clickTarget": [32],
        "selectOpen": [32],
        "hasSelect": [32]
    }, [[16, "click", "setClickTarget"], [0, "click", "catchSelectIconClick"], [9, "resize", "setPopoverWidthOnResize"], [16, "ionPopoverWillPresent", "setPopoverCharacteristics"], [16, "ionPopoverWillDismiss", "unsetClikedState"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-input-container"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-input-container":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpInputContainer);
            }
            break;
    } });
}

export { CONFIG as C, DEVELOPMENT_CONFIG as D, PRODUCTION_ELEMENTOR_CONFIG as P, TpInputContainer as T, PRODUCTION_CONFIG as a, defineCustomElement as d };

//# sourceMappingURL=input-container.js.map