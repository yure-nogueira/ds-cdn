import { g as getAssetPath, r as registerInstance, c as createEvent, h, H as Host } from './index-e49e9bf4.js';
import { c as createColorClasses } from './color.function-a9b13d36.js';

const TP_BUTTON_CLUSTER = {
    icons: {
        chevronDown: getAssetPath('./assets/tp-chevron-down.svg'),
    },
};

const buttonClusterCss = ":host{cursor:pointer}.tp-button-cluster__container{display:flex;flex-direction:column;align-items:center;width:100%;padding:4px;color:var(--tp-color-brand-4)}.tp-button-cluster__icon{width:16px;height:16px;transform:rotate(180deg)}::slotted([slot=text-expand]){display:none;margin-bottom:4px !important;color:var(--tp-color-brand-4)}::slotted([slot=text-collapse]){margin-top:4px !important;color:var(--tp-color-brand-4)}:host(.tp-button-cluster--collapsed) ::slotted([slot=text-expand]){display:block}:host(.tp-button-cluster--collapsed) ::slotted([slot=text-collapse]){display:none}:host(.tp-button-cluster--collapsed) .tp-button-cluster__icon{transform:rotate(0deg)}:host(.tp-color) .tp-button-cluster__icon{color:var(--tp-color-base)}:host(.tp-color) ::slotted([slot=text-expand]),:host(.tp-color) ::slotted([slot=text-collapse]){color:var(--tp-color-base)}";
const TpButtonClusterStyle0 = buttonClusterCss;

const TpButtonCluster = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
TpButtonCluster.style = TpButtonClusterStyle0;

export { TpButtonCluster as tp_button_cluster };

//# sourceMappingURL=tp-button-cluster.entry.js.map