import { getAssetPath, proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as createColorClasses } from './color.function.js';

const TP_BUTTON_CLUSTER = {
    icons: {
        chevronDown: getAssetPath('./assets/tp-chevron-down.svg'),
    },
};

const buttonClusterCss = ":host{cursor:pointer}.tp-button-cluster__container{display:flex;flex-direction:column;align-items:center;width:100%;padding:4px;color:var(--tp-color-brand-4)}.tp-button-cluster__icon{width:16px;height:16px;transform:rotate(180deg)}::slotted([slot=text-expand]){display:none;margin-bottom:4px !important;color:var(--tp-color-brand-4)}::slotted([slot=text-collapse]){margin-top:4px !important;color:var(--tp-color-brand-4)}:host(.tp-button-cluster--collapsed) ::slotted([slot=text-expand]){display:block}:host(.tp-button-cluster--collapsed) ::slotted([slot=text-collapse]){display:none}:host(.tp-button-cluster--collapsed) .tp-button-cluster__icon{transform:rotate(0deg)}:host(.tp-color) .tp-button-cluster__icon{color:var(--tp-color-base)}:host(.tp-color) ::slotted([slot=text-expand]),:host(.tp-color) ::slotted([slot=text-collapse]){color:var(--tp-color-base)}";
const TpButtonClusterStyle0 = buttonClusterCss;

const TpButtonCluster$1 = /*@__PURE__*/ proxyCustomElement(class TpButtonCluster extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.tpCollapse = createEvent(this, "tpCollapse", 7);
        this.color = undefined;
        this.initialCollapsedState = true;
        this.collapsed = true;
    }
    /**
     * Métodos internos.
     */
    toggle() {
        this.collapsed = !this.collapsed;
        this.tpCollapse.emit(this.collapsed);
    }
    /**
     * Lifecycle hooks.
     */
    componentWillLoad() {
        if (this.initialCollapsedState !== this.collapsed) {
            this.collapsed = this.initialCollapsedState;
        }
    }
    render() {
        const { color, collapsed } = this;
        return (h(Host, { key: '4bde1d9e6fe412d116cbaac898df541b57da6353', class: createColorClasses(color, {
                'tp-button-cluster': true,
                'tp-button-cluster--collapsed': collapsed,
            }) }, h("div", { key: '5b212862553306db57f83435d92309aa27619cb5', class: "tp-button-cluster__container", onClick: () => this.toggle() }, h("slot", { key: 'e39607e3c852b1689b29f59133089c3eb961c6be', name: "text-expand" }), h("ion-icon", { key: '28a6cdafdb0e460bff15bbc2b3094ebf9a4ca738', class: "tp-button-cluster__icon", src: TP_BUTTON_CLUSTER.icons.chevronDown, "aria-hidden": "true" }), h("slot", { key: '91055d78335fa85fec727fc6b6e8e8b963fe83d2', name: "text-collapse" }))));
    }
    static get assetsDirs() { return ["assets"]; }
    static get style() { return TpButtonClusterStyle0; }
}, [1, "tp-button-cluster", {
        "color": [513],
        "initialCollapsedState": [516, "initial-collapsed-state"],
        "collapsed": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-button-cluster"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-button-cluster":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpButtonCluster$1);
            }
            break;
    } });
}

const TpButtonCluster = TpButtonCluster$1;
const defineCustomElement = defineCustomElement$1;

export { TpButtonCluster, defineCustomElement };

//# sourceMappingURL=tp-button-cluster.js.map