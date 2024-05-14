import { r as registerInstance, c as createEvent, g as getAssetPath, h, H as Host } from './index-7946b89c.js';
import { c as createColorClasses } from './color.function-a9b13d36.js';

const buttonClusterCss = ":host{cursor:pointer}.tp-button-cluster__container{display:flex;flex-direction:column;align-items:center;width:100%;padding:4px;color:var(--tp-color-brand-4)}.tp-button-cluster__icon{width:16px;height:16px;transform:rotate(180deg)}.tp-button-cluster__skeleton-text{--background-rgb:var(--tp-color-neutral-10-rgb);--border-radius:0;width:85px;height:12px;margin:0 0 4px}.tp-button-cluster__skeleton-icon{--background-rgb:var(--tp-color-neutral-10-rgb);--border-radius:0;width:16px;height:16px;margin:0}::slotted([slot=expand-text]){display:none;margin-bottom:4px !important;color:var(--tp-color-brand-4)}::slotted([slot=collapse-text]){margin-top:4px !important;color:var(--tp-color-brand-4)}:host(.tp-button-cluster--collapsed) ::slotted([slot=expand-text]){display:block}:host(.tp-button-cluster--collapsed) ::slotted([slot=collapse-text]){display:none}:host(.tp-button-cluster--collapsed) .tp-button-cluster__icon{transform:rotate(0deg)}:host(.tp-button-cluster--loading){pointer-events:none}:host(.tp-color) .tp-button-cluster__icon{color:var(--tp-color-base)}:host(.tp-color) ::slotted([slot=expand-text]),:host(.tp-color) ::slotted([slot=collapse-text]){color:var(--tp-color-base)}";

const TpButtonCluster = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.tpButtonClusterCollapsed = createEvent(this, "tpButtonClusterCollapsed", 7);
        this.arrowIcon = getAssetPath('./assets/tp-chevron-down.svg');
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
            content = (h("div", { class: "tp-button-cluster__container" }, h("ion-skeleton-text", { class: "tp-button-cluster__skeleton-text", animated: true }), h("ion-skeleton-text", { class: "tp-button-cluster__skeleton-icon", animated: true })));
        }
        else {
            content = (h("div", { class: "tp-button-cluster__container", onClick: (event) => {
                    this.toggleInternal(event);
                } }, h("slot", { name: "expand-text" }), h("ion-icon", { class: "tp-button-cluster__icon", src: arrowIcon, "aria-hidden": "true" }), h("slot", { name: "collapse-text" })));
        }
        return (h(Host, { class: createColorClasses(color, {
                'tp-button-cluster': true,
                'tp-button-cluster--collapsed': collapsed,
                'tp-button-cluster--loading': loading,
            }) }, content));
    }
    static get assetsDirs() { return ["assets"]; }
};
TpButtonCluster.style = buttonClusterCss;

export { TpButtonCluster as tp_button_cluster };

//# sourceMappingURL=tp-button-cluster.entry.js.map