import { h, Host, } from "@stencil/core";
import { createColorClasses } from "../../../utils/functions/color.function";
import { TP_CONTEXT_MENU } from "./utils/context-menu.constant";
export class TpContextMenu {
    constructor() {
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
    static get is() { return "tp-context-menu"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["context-menu.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["context-menu.css"]
        };
    }
    static get assetsDirs() { return ["assets"]; }
    static get properties() {
        return {
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TpColor",
                    "resolved": "\"orange\" | \"orange-1\" | \"orange-2\" | \"orange-3\" | \"orange-4\" | \"orange-5\" | TpColors | TpColorsMedgrupo | (string & Record<never, never>)",
                    "references": {
                        "TpColor": {
                            "location": "import",
                            "path": "../../../utils/types/color.type",
                            "id": "src/utils/types/color.type.ts::TpColor"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define a varia\u00E7\u00E3o de cor do componente."
                },
                "attribute": "color",
                "reflect": true
            },
            "initialCollapsedState": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define o estato inicial do componente."
                },
                "attribute": "initial-collapsed-state",
                "reflect": true,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "collapsed": {}
        };
    }
    static get events() {
        return [{
                "method": "tpCollapse",
                "name": "tpCollapse",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitido quando a propriedade collapsed \u00E9 alterada."
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "host"; }
    static get listeners() {
        return [{
                "name": "click",
                "method": "closeOnOutsideClick",
                "target": "body",
                "capture": false,
                "passive": false
            }, {
                "name": "keydown",
                "method": "closeOnEscapeKey",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=context-menu.js.map
