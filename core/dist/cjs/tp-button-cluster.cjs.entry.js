'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c5410df1.js');
const color_function = require('./color.function-2f28fd83.js');

const buttonClusterCss = ":host{cursor:pointer}.tp-button-cluster__container{display:flex;flex-direction:column;align-items:center;width:100%;padding:4px;color:var(--tp-color-brand-4)}.tp-button-cluster__icon{width:16px;height:16px;transform:rotate(180deg)}.tp-button-cluster__skeleton-text{--background-rgb:var(--tp-color-neutral-10-rgb);--border-radius:0;width:85px;height:12px;margin:0 0 4px}.tp-button-cluster__skeleton-icon{--background-rgb:var(--tp-color-neutral-10-rgb);--border-radius:0;width:16px;height:16px;margin:0}::slotted([slot=expand-text]){display:none;margin-bottom:4px !important;color:var(--tp-color-brand-4)}::slotted([slot=collapse-text]){margin-top:4px !important;color:var(--tp-color-brand-4)}:host(.tp-button-cluster--collapsed) ::slotted([slot=expand-text]){display:block}:host(.tp-button-cluster--collapsed) ::slotted([slot=collapse-text]){display:none}:host(.tp-button-cluster--collapsed) .tp-button-cluster__icon{transform:rotate(0deg)}:host(.tp-button-cluster--loading){pointer-events:none}:host(.tp-color) .tp-button-cluster__icon{color:var(--tp-color-base)}:host(.tp-color) ::slotted([slot=expand-text]),:host(.tp-color) ::slotted([slot=collapse-text]){color:var(--tp-color-base)}";

const TpButtonCluster = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.tpButtonClusterCollapsed = index.createEvent(this, "tpButtonClusterCollapsed", 7);
        this.arrowIcon = index.getAssetPath('./assets/tp-chevron-down.svg');
        this.color = undefined;
        this.collapsed = true;
        this.loading = undefined;
    }
    toggleInternal(event) {
        event === null || event === void 0 ? void 0 : event.stopPropagation();
        this.collapsed = !this.collapsed;
        this.tpButtonClusterCollapsed.emit(this.collapsed);
    }
    async toggleExternal() {
        this.collapsed = !this.collapsed;
        this.tpButtonClusterCollapsed.emit(this.collapsed);
    }
    render() {
        const { arrowIcon, collapsed, color, loading } = this;
        let content;
        if (loading) {
            content = (index.h("div", { class: "tp-button-cluster__container" }, index.h("ion-skeleton-text", { class: "tp-button-cluster__skeleton-text", animated: true }), index.h("ion-skeleton-text", { class: "tp-button-cluster__skeleton-icon", animated: true })));
        }
        else {
            content = (index.h("div", { class: "tp-button-cluster__container", onClick: (event) => {
                    this.toggleInternal(event);
                } }, index.h("slot", { name: "expand-text" }), index.h("ion-icon", { class: "tp-button-cluster__icon", src: arrowIcon, "aria-hidden": "true" }), index.h("slot", { name: "collapse-text" })));
        }
        return (index.h(index.Host, { class: color_function.createColorClasses(color, {
                'tp-button-cluster': true,
                'tp-button-cluster--collapsed': collapsed,
                'tp-button-cluster--loading': loading,
            }) }, content));
    }
    static get assetsDirs() { return ["assets"]; }
};
TpButtonCluster.style = buttonClusterCss;

exports.tp_button_cluster = TpButtonCluster;

//# sourceMappingURL=tp-button-cluster.cjs.entry.js.map