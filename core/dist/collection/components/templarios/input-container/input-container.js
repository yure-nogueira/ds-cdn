import { Host, getAssetPath, h, } from "@stencil/core";
import { createColorClasses } from "../../../utils/functions/color.function";
export class TpInputContainer {
    constructor() {
        this.alertTriangleIcon = getAssetPath('./assets/tp-alert-triangle.svg');
        this.CheckIcon = getAssetPath('./assets/tp-check.svg');
        this.selectIcon = getAssetPath('./assets/tp-chevron-down.svg');
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
        if (ionSelect) {
            this.hasSelect = true;
            if (!ionSelect.hasAttribute('interface')) {
                ionSelect.interfaceOptions = { cssClass: 'tp-hide' };
            }
        }
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
        const { color, state, disabled, alertTriangleIcon, CheckIcon, hasSelect, selectIcon, selectOpen, loading, } = this;
        let content;
        let stateContent;
        let selectIconContainer;
        const icon = state === 'error' ? alertTriangleIcon : CheckIcon;
        if (loading) {
            content = (h("ion-skeleton-text", { class: "tp-input-container__skeleton", animated: true }));
        }
        else {
            if (this.hasSelect) {
                selectIconContainer = (h("div", { class: "tp-input-container__select-container" }, h("ion-icon", { class: {
                        'tp-input-container__select-icon': true,
                        'tp-input-container__select-icon--open': selectOpen,
                    }, src: selectIcon, "aria-hidden": "true" })));
            }
            if (state) {
                stateContent = (h("div", { class: "tp-input-container__state-container" }, h("ion-icon", { class: "tp-input-container__icon", src: icon, "aria-hidden": "true" })));
            }
            content = (h("div", null, h("slot", { name: "label" }), h("div", { class: "tp-input-container__wrapper" }, h("slot", { name: "start" }), h("slot", null), h("slot", { name: "end" }), selectIconContainer, stateContent), h("slot", { name: "feedback-success" }), h("slot", { name: "feedback-error" })));
        }
        return (h(Host, { class: createColorClasses(color, {
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
