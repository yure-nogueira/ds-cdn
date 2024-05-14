import { Host, h, } from "@stencil/core";
import { createColorClasses } from "../../../utils/functions/color.function";
import { TP_INPUT_CONTAINER } from "./utils/input-container.constants";
export class TpInputContainer {
    constructor() {
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
    static get is() { return "tp-input-container"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["input-container.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["input-container.css"]
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Define a varia\u00E7\u00E3o de cor do componente."
                },
                "attribute": "color",
                "reflect": true
            },
            "state": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'error' | 'success'",
                    "resolved": "\"error\" | \"success\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Define a varia\u00E7\u00E3o de estado do componente."
                },
                "attribute": "state",
                "reflect": true
            },
            "disabled": {
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
                    "text": "Define a estiliza\u00E7\u00E3o do estado disabled do componente."
                },
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
            },
            "inverted": {
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
                    "text": "???"
                },
                "attribute": "inverted",
                "reflect": true,
                "defaultValue": "false"
            },
            "loading": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Define o estado de carregamento do componente."
                },
                "attribute": "loading",
                "reflect": true
            }
        };
    }
    static get states() {
        return {
            "clickTarget": {},
            "selectOpen": {},
            "hasSelect": {}
        };
    }
    static get elementRef() { return "host"; }
    static get listeners() {
        return [{
                "name": "click",
                "method": "setClickTarget",
                "target": "body",
                "capture": false,
                "passive": false
            }, {
                "name": "click",
                "method": "catchSelectIconClick",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "resize",
                "method": "setPopoverWidthOnResize",
                "target": "window",
                "capture": false,
                "passive": true
            }, {
                "name": "ionPopoverWillPresent",
                "method": "setPopoverCharacteristics",
                "target": "body",
                "capture": false,
                "passive": false
            }, {
                "name": "ionPopoverWillDismiss",
                "method": "unsetClikedState",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=input-container.js.map
