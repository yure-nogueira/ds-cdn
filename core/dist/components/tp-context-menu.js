import { getAssetPath, proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as createColorClasses } from './color.function.js';

const TP_CONTEXT_MENU = {
    icons: {
        moreVertical: getAssetPath('./assets/tp-more-vertical.svg'),
    },
};

const contextMenuCss = ".sc-tp-context-menu-h{--tp-background:var(--tp-color-neutral-3);--tp-color:var(--tp-color-neutral-10);--tp-z-index:1}.tp-context-menu.sc-tp-context-menu-h{display:block;position:relative}.tp-context-menu.sc-tp-context-menu-h .tp-context-menu__content.sc-tp-context-menu{z-index:var(--tp-z-index);position:absolute;background:var(--tp-background);right:-8px;top:-8px;width:264px;max-width:264px;box-shadow:0 0 2px rgba(0, 0, 0, 0.14), 0 4px 5px rgba(0, 0, 0, 0.12), 0 1px 10px rgba(0, 0, 0, 0.2);border-radius:8px;padding:16px;visibility:visible;opacity:1;transition:all 300ms ease-in-out}.tp-context-menu.sc-tp-context-menu-h .tp-context-menu__top.sc-tp-context-menu{display:flex}.tp-context-menu.sc-tp-context-menu-h .tp-context-menu__button.sc-tp-context-menu{--font-size:24px}.tp-context-menu.sc-tp-context-menu-h .tp-context-menu__icon.sc-tp-context-menu{margin-right:0}.tp-context-menu.sc-tp-context-menu-h .tp-context-menu__inner-button.sc-tp-context-menu{--font-size:24px;position:absolute;right:8px;top:9px}.tp-context-menu.sc-tp-context-menu-h .tp-context-menu__inner-icon.sc-tp-context-menu{stroke:var(--tp-color-neutral-10);font-size:24px}.sc-tp-context-menu-h.tp-context-menu.sc-tp-context-menu-s>ion-item,.sc-tp-context-menu-h.tp-context-menu .sc-tp-context-menu-s>ion-item{--background:var(--tp-color-neutral-3)}.sc-tp-context-menu-h.tp-context-menu.sc-tp-context-menu-s>*[slot=item]:not(:last-child),.sc-tp-context-menu-h.tp-context-menu .sc-tp-context-menu-s>*[slot=item]:not(:last-child){margin-bottom:16px}.sc-tp-context-menu-h.tp-context-menu.sc-tp-context-menu-s>*[slot=info],.sc-tp-context-menu-h.tp-context-menu .sc-tp-context-menu-s>*[slot=info]{display:block;text-align:center;margin-top:16px}.tp-context-menu--collapsed.sc-tp-context-menu-h .tp-context-menu__content.sc-tp-context-menu{--tp-z-index:0;visibility:hidden;opacity:0}.tp-color.sc-tp-context-menu-h{--tp-background:var(--tp-color-base)}.tp-color.sc-tp-context-menu-h .tp-context-menu__button.sc-tp-context-menu{color:var(--tp-color-base)}.tp-color.sc-tp-context-menu-h .tp-context-menu__inner-button.sc-tp-context-menu{color:var(--tp-color-contrast)}.sc-tp-context-menu-h.tp-color.sc-tp-context-menu-s>ion-item,.sc-tp-context-menu-h.tp-color .sc-tp-context-menu-s>ion-item{--background:var(--tp-color-base)}.sc-tp-context-menu-h.tp-color.sc-tp-context-menu-s>ion-item,.sc-tp-context-menu-h.tp-color.sc-tp-context-menu-s>ion-item ion-icon,.sc-tp-context-menu-h.tp-color .sc-tp-context-menu-s>ion-item ion-icon{color:var(--tp-color-contrast)}.sc-tp-context-menu-h.tp-color.sc-tp-context-menu-s>ion-item,.sc-tp-context-menu-h.tp-color.sc-tp-context-menu-s>ion-item ion-text,.sc-tp-context-menu-h.tp-color .sc-tp-context-menu-s>ion-item ion-text{color:var(--tp-color-contrast)}.sc-tp-context-menu-h.tp-color.sc-tp-context-menu-s>ion-text,.sc-tp-context-menu-h.tp-color .sc-tp-context-menu-s>ion-text{color:var(--tp-color-contrast)}";
const TpContextMenuStyle0 = contextMenuCss;

const TpContextMenu$1 = /*@__PURE__*/ proxyCustomElement(class TpContextMenu extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
    /**
     * Event listeners.
     */
    closeOnOutsideClick(event) {
        const target = event.target;
        if (!this.collapsed && !this.host.contains(target)) {
            this.collapsed = true;
        }
    }
    closeOnEscapeKey(ev) {
        if (!this.collapsed && ev.key === 'Escape') {
            this.collapsed = true;
        }
    }
    render() {
        const { color, collapsed } = this;
        return (h(Host, { key: '0f96af8f8054583a8df02047d7658b296bf2b2f6', class: createColorClasses(color, {
                'tp-context-menu': true,
                'tp-context-menu--collapsed': collapsed,
            }) }, h("ion-button", { key: '1f691c321e470d0338a6f2cfd3b8b84ebdcc2d3c', "icon-only": true, onClick: () => this.toggle(), class: "tp-context-menu__button", fill: "clear",
            // @ts-ignore
            size: "sm" }, h("ion-icon", { key: '5e38ac60ab71668f90b1749b59c1ff8b7f029538', slot: "icon-only", class: "tp-context-menu__icon", src: TP_CONTEXT_MENU.icons.moreVertical })), h("div", { key: '185e1312cfd024448ea348e9ca95532931d53cda', class: "tp-context-menu__content" }, h("div", { key: '2d026f9b887ba65bb7472a252f7df7d90b81cce8', class: "tp-context-menu__top" }, h("ion-button", { key: 'c045328d30dd373a09806a2370ffb13b9ccb571a', "icon-only": true, onClick: () => this.toggle(), class: "tp-context-menu__inner-button", fill: "clear",
            // @ts-ignore
            size: "sm" }, h("ion-icon", { key: '84361b02334dc57bd58480cc63d583414f17573e', slot: "icon-only", class: "tp-context-menu__inner-icon", src: TP_CONTEXT_MENU.icons.moreVertical })), h("div", { key: '252d962d04c122830f3e930e57310f5344c9e127' }, h("slot", { key: '397e9c4c11cc8e0e0ae16014f4acb74e88402969', name: "item" }))), h("slot", { key: 'a0c2b4508665070fb36d5a37e0502ae62d16d385', name: "info" }))));
    }
    static get assetsDirs() { return ["assets"]; }
    get host() { return this; }
    static get style() { return TpContextMenuStyle0; }
}, [6, "tp-context-menu", {
        "color": [513],
        "initialCollapsedState": [516, "initial-collapsed-state"],
        "collapsed": [32]
    }, [[16, "click", "closeOnOutsideClick"], [0, "keydown", "closeOnEscapeKey"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["tp-context-menu"];
    components.forEach(tagName => { switch (tagName) {
        case "tp-context-menu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TpContextMenu$1);
            }
            break;
    } });
}

const TpContextMenu = TpContextMenu$1;
const defineCustomElement = defineCustomElement$1;

export { TpContextMenu, defineCustomElement };

//# sourceMappingURL=tp-context-menu.js.map